import { BaseModel } from "./base";
import { RoleModel } from "./role";
import { UserModel } from "./user";

export type UserRoleModel = BaseModel & {
  userId: number
  roleId: number

  user?: UserModel
  role?: RoleModel
}