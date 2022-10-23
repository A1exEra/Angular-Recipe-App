import { INGREDIENT } from './ingredient.model';

export interface RECIPE {
  name: string;
  description: string;
  imagePath: string;
  ingredients: INGREDIENT[];
}
