import { Component, OnInit } from '@angular/core';
import { INGREDIENT } from '../shared/Models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  // @Input() addedIngredient: INGREDIENT;
  ingredients: INGREDIENT[] = [
    { name: 'Apples', ammount: 5 },
    { name: 'Kiwi', ammount: 3 },
    { name: 'Peaches', ammount: 10 },
    { name: 'Melons', ammount: 4 },
    { name: 'Bananas', ammount: 8 },
  ];
  constructor() {}

  ngOnInit(): void {}
  onIngredientAdded(event) {
    // this.addedIngredient = event;
    return this.ingredients.push(event);
  }
}
