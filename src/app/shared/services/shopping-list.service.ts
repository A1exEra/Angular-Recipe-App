import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { INGREDIENT } from '../Models/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  // ingredientsChanged = new EventEmitter<INGREDIENT[]>();
  //create a helper subject to ennable editing the ingredients
  startedEditing = new Subject<number>();
  //replaceing eventemitter with subject
  ingredientsChanged = new Subject<INGREDIENT[]>();
  private ingredients: INGREDIENT[] = [
    { name: 'Apples', amount: 5 },
    { name: 'Kiwi', amount: 3 },
    { name: 'Peaches', amount: 10 },
    { name: 'Melons', amount: 4 },
    { name: 'Bananas', amount: 8 },
  ];

  constructor() {}
  getIngredients() {
    return this.ingredients.slice();
  }
  //get ingredients index that we want to edit
  getIngredient(index: number) {
    return this.ingredients[index];
  }
  addIngredient(ingredient: INGREDIENT) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  addIngredients(ingredients: INGREDIENT[]) {
    this.ingredients = [...this.ingredients, ...ingredients];
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  updateIngredient(index: number, newIngredient: INGREDIENT) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
    console.log('ingredient updated');
    console.log(this.ingredients);
  }
}
