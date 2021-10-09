import IUserAttribute from "../IUserAttribute";

export default class Username implements IUserAttribute {
  DBIdentifier: String;
  Value: String | Number | Date;
  editAttribute(value: String | Number | Date): Boolean {
    throw new Error("Method not implemented.");
  }

  constructor() {
    this.DBIdentifier = "user";
    this.Value = "danielkillergriller";
  }
}
