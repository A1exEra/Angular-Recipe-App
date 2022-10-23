import { Component, DoCheck, OnInit } from '@angular/core';
import { INGREDIENT } from '../shared/Models/ingredient.model';
import { ShoppingListService } from '../shared/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit, DoCheck {
  ingredients: INGREDIENT[];
  constructor(private shoppingListService: ShoppingListService) {}
  ngDoCheck(): void {
    // this.ingredients = this.shoppingListService.getIngredients();
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: INGREDIENT[]) => {
        this.ingredients = ingredients;
      }
    );
  }
}
