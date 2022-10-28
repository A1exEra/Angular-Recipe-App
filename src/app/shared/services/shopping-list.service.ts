import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { INGREDIENT } from '../Models/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  // ingredientsChanged = new EventEmitter<INGREDIENT[]>();
  //replaceing eventemitter with subject
  ingredientsChanged = new Subject<INGREDIENT[]>();
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
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  addIngredients(ingredients: INGREDIENT[]) {
    this.ingredients = [...this.ingredients, ...ingredients];
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
