import { BaseModel } from "./base";

export enum METHOD {
  GET = "get",
  POST = "post",
  PUT = "put",
  DELETE = "delete"
}

export type ApiModel = BaseModel & {
  name: string
  endPoint: string
  active: boolean
  method: METHOD
}