import UserProfile from "./UserProfile";


export default class User {
  username: string
  email: string
  profile: UserProfile


  constructor() {
    this.username = "";
    this.email = "";
    this.profile = new UserProfile();
  }

}