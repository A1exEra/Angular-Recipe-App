import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { INGREDIENT } from '../shared/Models/ingredient.model';
import { ShoppingListService } from '../shared/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit, DoCheck, OnDestroy {
  ingredients: INGREDIENT[];
  private ingredientChangeSubscription: Subscription;
  constructor(private shoppingListService: ShoppingListService) {}
  ngDoCheck(): void {
    // this.ingredients = this.shoppingListService.getIngredients();
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingredientChangeSubscription =
      this.shoppingListService.ingredientsChanged.subscribe(
        (ingredients: INGREDIENT[]) => {
          this.ingredients = ingredients;
        }
      );
  }
  ngOnDestroy(): void {
    this.ingredientChangeSubscription.unsubscribe();
  }
}
