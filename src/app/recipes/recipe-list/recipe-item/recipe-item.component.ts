import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RECIPE } from 'src/app/shared/Models/recipe.model';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: RECIPE;
  @Input() index: number;
  // @Output() recipeSelected = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}
  // onRecipeClick() {
  //   // this.recipeSelected.emit();
  //   this.recipeService.recipeSelected.emit(this.recipe);
  // }
}
