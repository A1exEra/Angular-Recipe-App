import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { INGREDIENT } from '../shared/Models/ingredient.model';
import { LoggingService } from '../shared/services/logging.service';
import { ShoppingListService } from '../shared/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit, DoCheck, OnDestroy {
  ingredients: INGREDIENT[];
  private ingredientChangeSubscription: Subscription;
  constructor(
    private shoppingListService: ShoppingListService,
    private loggingService: LoggingService
  ) {}
  ngDoCheck(): void {
    // this.ingredients = this.shoppingListService.getIngredients();
    this.loggingService.printLog(
      'Hello from the shopping-list compinent ngOnitint'
    );
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
  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }
}
