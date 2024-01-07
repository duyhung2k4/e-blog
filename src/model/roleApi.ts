import { ApiModel } from "./api";
import { BaseModel } from "./base";
import { RoleModel } from "./role";

export type RoleApiModel = BaseModel & {
  apiId: number
  roleId: number

  api?: ApiModel
  role?: RoleModel
}