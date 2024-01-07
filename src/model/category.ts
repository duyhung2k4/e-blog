import { BaseModel } from "./base";

export type CategoryModel = BaseModel & {
  code: string
	name: string
}