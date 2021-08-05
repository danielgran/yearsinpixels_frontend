import IUserAttribute from "../IUserAttribute";

export default class Email implements IUserAttribute
{
  dbidentifier: String;
  value: String | Number | Date;
  editAttribute(value: String | Number | Date): Boolean {
    throw new Error("Method not implemented.");
  }


  constructor()
  {
    this.dbidentifier = "email"
    // todo get the proper value from the database Backend etc, class would not really be needed


    this.value = "daniel.gran@mailbox.org"
  }
  
}