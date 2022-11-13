import { UserRoutes } from './users';
import {MessageRoutes} from "./messages";
import {ContactRoutes} from "./contacts";

export interface RouteInterface {
  method: string;
  route: string;
  action: string;
  uploadType?: any;
}
export const Routes = [...UserRoutes,...MessageRoutes,...ContactRoutes];
