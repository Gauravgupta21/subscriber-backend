import {User} from "../entity/User";

export interface messageInterface {
  id: string;
  subject:string;
  body:string;
  createdBy:User;
  createdDate?:Date;
  updatedDate?:Date;
}
