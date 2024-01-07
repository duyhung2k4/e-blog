import { BaseModel } from "./base";
import { ModelTypeModel } from "./modelType";
import { RoleModel } from "./role";

export type RoleModelTypeModel = BaseModel & {
  modelTypeId: number
  roleId: number
  create: boolean
  read: boolean
  update: boolean
  delete: boolean

  modelType?: ModelTypeModel
  role?: RoleModel

}