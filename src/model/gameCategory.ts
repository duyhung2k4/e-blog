import { BaseModel } from "./base";
import { CategoryModel } from "./category";
import { GameModel } from "./game";

export type GameCategoryModel = BaseModel & {
  gameId: number
  categoryId: number

  game?: GameModel
  category?: CategoryModel
}