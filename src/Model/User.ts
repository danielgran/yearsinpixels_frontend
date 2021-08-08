import UserProfile from "./UserProfile";

export default class User {
  Username: string;
  Profile: UserProfile;

  constructor() {
    this.Username = "";
    this.Profile = new UserProfile();
  }
}
