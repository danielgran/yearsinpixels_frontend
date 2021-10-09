export default interface IUserAttribute {
  DBIdentifier: String;
  Value: String | Date | Number;

  editAttribute(value: String | Date | Number): Boolean;
}
