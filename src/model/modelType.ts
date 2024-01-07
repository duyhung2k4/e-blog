import { BaseModel } from "./base";

export type ModelTypeModel = BaseModel & {
  name: string
  code: string
  active: boolean
}