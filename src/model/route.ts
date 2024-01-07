import { BaseModel } from "./base";

export type RouteModel = BaseModel & {
  name: string
  href: string
  active: boolean
}