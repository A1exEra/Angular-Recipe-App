import { EventEmitter, Injectable } from '@angular/core';
import { INGREDIENT } from '../Models/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<INGREDIENT[]>();
  private ingredients: INGREDIENT[] = [
    { name: 'Apples', ammount: 5 },
    { name: 'Kiwi', ammount: 3 },
    { name: 'Peaches', ammount: 10 },
    { name: 'Melons', ammount: 4 },
    { name: 'Bananas', ammount: 8 },
  ];

  constructor() {}
  getIngredients() {
    return this.ingredients.slice();
  }
  addIngredient(ingredient: INGREDIENT) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  addIngredients(ingredients: INGREDIENT[]) {
    this.ingredients = [...this.ingredients, ...ingredients];
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
