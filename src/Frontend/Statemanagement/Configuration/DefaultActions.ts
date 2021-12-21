import IActions from "@/Frontend/Statemanagement/IActions";

import axios from "axios";
import User from "@/Model/User";
import Mood from "@/Model/Mood";
import Day from "@/Model/Day";

export default class DefaultActions implements IActions {
  Actions: {};

  constructor() {
    this.Actions = {
      loginUser: async function (context: any, payload: { email: string; password: string }) {

        let in_email = payload.email
        let in_password = payload.password

        const query = `mutation LoginUser($input_email: String!, $input_password: String!) {
    login_user(email: $input_email, password: $input_password) {
        success
        message
        jwt
    }
}`
        let returned_data;
        await axios.post("http://localhost:5555/api", {
          query: query,
          variables: {
            input_email: in_email,
            input_password: in_password
          }
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((result) => {
          returned_data = result.data
        });

        // @ts-ignore
        let jwt = returned_data.data.login_user.jwt;
        if (jwt != null) {
          context.commit('SetToken', jwt)
          context.commit('SetLoggedIn', true)


          let claims = jwt.split('.')[1];
          let user_guid = JSON.parse(window.atob(claims)).user_guid;
          console.log(user_guid);
          context.commit("SetGlobalUserGuid", user_guid);
        }
      },
      logoutUser: async function (context: any) {
        context.commit('LogoutUser');
      },
      refreshUser: async function (context: any) {
        if (!context.state.LoggedIn) {
          return
        }

        let query = "query user($input_guid: String!){\n" +
          "    user(user_guid: $input_guid){\n" +
          "        email\n" +
          "        name_first\n" +
          "        name_last\n" +
          "    }\n" +
          "}"

        let returned_data;
        await axios.post("http://localhost:5555/api", {
          query: query,
          variables: {
            input_guid: context.state.LocalUser.guid,
          }
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((result) => {
          returned_data = result.data
        });

        let user = new User();

        // @ts-ignore
        user.email = returned_data.data.user.email;
        // @ts-ignore
        user.name_first = returned_data.data.user.name_first;
        // @ts-ignore
        user.name_last = returned_data.data.user.name_last;

        context.commit("SetUser", user);


      },
      refreshMoods: async function (context: any) {
        const query = "query {\n" +
          "    moods {\n" +
          "        id\n" +
          "        title\n" +
          "        color\n" +
          "    }\n" +
          "}"

        let returned_data;
        await axios.post("http://localhost:5555/api", {
          query: query,
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((result) => {
          returned_data = result.data.data;

          let moods = [];
          for (const mood_from_api of returned_data.moods) {
            let mood = new Mood();
            mood.id = mood_from_api.id;
            mood.title = mood_from_api.title;
            mood.color = mood_from_api.color;
            moods.push(mood)
          }
          context.commit("SetMoods", moods);
        });
      },
      refreshDays: async function (context: any) {

        context.commit("SetDays", []);
        context.commit("SetTodayLogged", false);


        const query = "query {\n" +
          "    days(user_guid: \"17743754-5192-423f-a5ab-1797fb674081\") {\n" +
          "        date {\n" +
          "            year\n" +
          "            month\n" +
          "            day\n" +
          "            \n" +
          "        }\n" +
          "        title\n" +
          "        mood1 {\n" +
          "                id\n" +
          "                title\n" +
          "                color\n" +
          "            }\n" +
          "    }\n" +
          "}"
        await axios.post("http://localhost:5555/api", {
          query: query,
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((result) => {
          let returned_days = result.data.data.days;


          let days: Day[] = [];
          for (const day_from_api of returned_days) {
            let day = new Day();
            day.Title = day_from_api.title;
            day.Notes = day_from_api.notes;
            day.Date = new Date(day_from_api.date.year, day_from_api.date.month - 1, day_from_api.date.day);

            let mood = new Mood();
            mood.id = day_from_api.mood1.id;
            mood.title = day_from_api.mood1.title;
            mood.color = day_from_api.mood1.color;

            day.Mood = mood;

            let today = new Date();
            today.setHours(0, 0, 0, 0);
            day.Date.setHours(0, 0, 0, 0);
            if (day.Date.getFullYear() == today.getFullYear() && day.Date.getMonth() == today.getMonth() && day.Date.getDate() == today.getDate()) {
              context.commit("SetTodayLogged", true);
            }
            days.push(day);
          }
          context.commit("SetDays", days);
        });

      },
      addDay: async function (context: any, payload: { day: Day, user_guid: String }) {
        const query = "mutation CreateDayInSummary($input_user_guid: String!, $input_day: DayInput) {\n" +
          "    create_day(user_guid: $input_user_guid, day: $input_day) {\n" +
          "        success\n" +
          "        text\n" +
          "    }\n" +
          "}"

        let variables = {
          "input_user_guid": payload.user_guid,
          "input_day": {
            "title": payload.day.Title,
            "notes": payload.day.Notes,
            "id_mood1": payload.day.Mood.id,
            "date": {
              "year": payload.day.Date.getFullYear(),
              "month": payload.day.Date.getMonth() + 1,
              "day": payload.day.Date.getDate()
            }
          }
        };

        await axios.post("http://localhost:5555/api", {
          query: query,
          variables: variables,
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((result) => {
          let returned_data = result.data.data;
          if (returned_data.create_day.success == true) {
            context.commit("SetTodayLogged", true);
          } else {
            alert("Error setting day.");
          }
        });

      }
    };
  }
}
