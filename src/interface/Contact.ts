import {User} from "../entity/User";

export interface contactInterface {
  id: string;
  emailAddress:string;
  createdDate?:Date;
  updatedDate?:Date;
  createdBy:User;
}
