import { BaseModel } from "./base";
import { GameModel } from "./game";
import { ProfileModel } from "./profile";

export type PostModel = BaseModel & {
  userId: number
  gameId: number
  name: string
  content: string

  creater?: ProfileModel
  game?: GameModel
}