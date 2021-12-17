import IActions from "@/Frontend/Statemanagement/IActions";

import axios from "axios";
import User from "@/Model/User";

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
        console.log(returned_data);


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
    };
  }
}
