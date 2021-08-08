import IUserAttribute from "../IUserAttribute";

export default class Email implements IUserAttribute {
  DBIdentifier: String;
  Value: String | Number | Date;
  editAttribute(value: String | Number | Date): Boolean {
    throw new Error("Method not implemented.");
  }

  constructor() {
    this.DBIdentifier = "email";
    // todo get the proper value from the database Backend etc, class would not really be needed

    this.Value = "daniel.gran@mailbox.org";
  }
}
