import UserProfile from "./UserProfile";

export default class User {
  guid: String;
  email: String;
  name_last: String;
  name_first: String;

  constructor() {
    this.guid = "";
    this.email = "";
    this.name_last = "";
    this.name_first = "";
  }
}
