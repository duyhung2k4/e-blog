import { BaseModel } from "./base";
import { RoleModel } from "./role";
import { RouteModel } from "./route";

export type RoleRouteModel = BaseModel & {
  roleId: number
  routeId: number

  route?: RouteModel
  role?: RoleModel
}