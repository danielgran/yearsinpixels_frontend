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
      refreshToday: async function (context: any) {
        const date = new Date();
        console.log(date);
        context.commit('SetGlobalDate', date);
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
      refreshDays: async  function (context: any) {

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
          let returned_data = result.data.data;

          let days:Day[] = [];
          for (const day_from_api of returned_data.days) {
            console.log(day_from_api);
            let day = new Day();
            day.Title = day_from_api.title;
            day.Date = new Date(day_from_api);
          }
          context.commit("SetDays", days);
        });

      }
    };
  }
}
