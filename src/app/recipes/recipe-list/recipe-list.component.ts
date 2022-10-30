import { outputAst } from '@angular/compiler';
import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { RECIPE } from 'src/app/shared/Models/recipe.model';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit, OnDestroy {
  // @Output() recipeWasSelected = new EventEmitter<RECIPE>();
  recipes: RECIPE[];
  subscription: Subscription;
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    //listen to the event of upadating the recipes from recipe service
    this.subscription = this.recipeService.recipesChanged.subscribe(
      (recipes: RECIPE[]) => {
        this.recipes = recipes;
      }
    );
    this.recipes = this.recipeService.getRecipes();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // onRecipeSelected(recipeEl: RECIPE) {
  //   this.recipeWasSelected.emit(recipeEl);
  // }
}
