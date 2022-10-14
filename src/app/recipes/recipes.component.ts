import { Component, Input, OnInit } from '@angular/core';
import { RECIPE } from '../shared/Models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  selectedRecipe: RECIPE;
}
