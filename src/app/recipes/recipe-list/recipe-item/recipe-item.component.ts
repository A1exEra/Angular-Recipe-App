import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RECIPE } from 'src/app/shared/Models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: RECIPE;
  @Output() recipeSelected = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}
  onRecipeClick() {
    this.recipeSelected.emit();
  }
}
