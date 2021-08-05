import IPreference from "./Preference/IPreference";
import UserProfile from "./UserProfile";


export default class User {
  username: string
  email: IPreference
  profile: UserProfile


  constructor() {
    this.username = "";
    this.email = {value: "adsf"};
    this.profile = new UserProfile();
  }

}