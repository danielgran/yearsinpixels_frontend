export default interface IUserAttribute
{
  dbidentifier: String
  value: String | Date | Number

  editAttribute(value: String | Date | Number ) : Boolean;
}