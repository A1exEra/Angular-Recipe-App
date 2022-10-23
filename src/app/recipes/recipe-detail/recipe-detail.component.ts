import { Component, Input, OnInit } from '@angular/core';
import { RECIPE } from 'src/app/shared/Models/recipe.model';
import { ShoppingListService } from 'src/app/shared/services/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  constructor(private shoppingListService: ShoppingListService) {}
  @Input() recipe: RECIPE;
  ngOnInit(): void {}
  // }
  onAddIngredients() {
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }
}
