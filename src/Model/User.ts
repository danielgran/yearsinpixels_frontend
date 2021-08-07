import UserProfile from "./UserProfile";


export default class User {
  username: string
  profile: UserProfile


  constructor() {
    this.username = "";
    this.profile = new UserProfile();
  }

}