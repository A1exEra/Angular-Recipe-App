import { Component, Input, OnInit } from '@angular/core';
import { RECIPE } from '../shared/Models/recipe.model';
import { RecipeService } from '../shared/services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  constructor(private recipeService: RecipeService) {}
  selectedRecipe: RECIPE;

  ngOnInit(): void {
    // this.recipeService.recipeSelected.subscribe((recipe: RECIPE) => {
    //   this.selectedRecipe = recipe;
    // });
  }
}
