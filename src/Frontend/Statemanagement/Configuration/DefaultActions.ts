import IActions from "@/Frontend/Statemanagement/IActions";

import axios from "axios";

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

        if (jwt === null) {
          context.state.LoggedIn = false;
        } else {
          context.state.LoggedIn = true;
          context.state.SessionTokenAsJWT = jwt;
        }
      }
    };
  }
}
