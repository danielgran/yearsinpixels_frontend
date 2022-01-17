import IActions from "@/Frontend/Statemanagement/IActions";

import axios from "axios";
import User from "@/Model/User";
import Mood from "@/Model/Mood";
import Day from "@/Model/Day";
import Cookies from "js-cookie";

const api_url = "https://api.yearsinpixels.de/api"

export default class DefaultActions implements IActions {
  Actions: {};

  constructor() {
    this.Actions = {
      loginUser: async function (context: any, payload: { email: string, password: string, captcha: string }) {

        console.log(payload);

        const query = "mutation LoginUser($input_email: String!, $input_password: String!, $input_captcha: String!) {\n" +
          "    login_user(email: $input_email, password: $input_password, captcha: $input_captcha) {\n" +
          "        success\n" +
          "        message\n" +
          "        jwt\n" +
          "    }\n" +
          "}"

        await axios.post(api_url, {
          query: query,
          variables: {
            input_email: payload.email,
            input_password: payload.password,
            input_captcha: payload.captcha
          }
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((result) => {
          let returned_data = result.data
          // @ts-ignore
          let jwt = returned_data.data.login_user.jwt;
          console.log(returned_data);
          if (jwt != null) {
            context.commit('SetToken', jwt)
            context.commit('SetLoggedIn', true)

            let claims = jwt.split('.')[1];
            let user_guid = JSON.parse(window.atob(claims)).user_guid;
            context.commit("SetGlobalUserGuid", user_guid);
          }
        });


      },
      registerUser: async function (context: any, payload: { email: string, password: string, captcha: string }) {

        console.log(payload);

        const query = "mutation RegisterUser($input_email: String!, $input_password: String!, $input_captcha: String!) {\n" +
          "    register_user(email: $input_email, password: $input_password, captcha: $input_captcha) {\n" +
          "        success\n" +
          "        message\n" +
          "        user_guid\n" +
          "    }\n" +
          "}";

        await axios.post(api_url, {
          query: query,
          variables: {
            input_email: payload.email,
            input_password: payload.password,
            input_captcha: payload.captcha
          }
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
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
        await axios.post(api_url, {
          query: query,
          variables: {
            input_guid: context.state.LocalUser.guid,
          }
        }, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + context.state.SessionTokenAsJWT
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
        await axios.post(api_url, {
          query: query,
        }, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + context.state.SessionTokenAsJWT
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


        const query = "query {\n" +
          "    days(user_guid: \"" + context.state.LocalUser.guid + "\") {\n" +
          "        date {\n" +
          "            year\n" +
          "            month\n" +
          "            day\n" +
          "            \n" +
          "        }\n" +
          "        title\n" +
          "        notes\n" +
          "        mood1 {\n" +
          "                id\n" +
          "                title\n" +
          "                color\n" +
          "            }\n" +
          "    }\n" +
          "}"
        await axios.post(api_url, {
          query: query,
        }, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + context.state.SessionTokenAsJWT
          }
        }).then((result) => {
          let returned_days = result.data.data.days;

          let days = [];

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

        await axios.post(api_url, {
          query: query,
          variables: variables,
        }, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + context.state.SessionTokenAsJWT
          }
        }).then((r) => {
          if (r.data.data.create_day.success) {
            let new_days = context.state.days;
            new_days.push(payload.day);
            context.commit("SetDays", new_days);
          }
        })
      }
    };
  }
}
