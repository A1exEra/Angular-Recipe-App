import { Component, Input, OnInit } from '@angular/core';
import { RECIPE } from 'src/app/shared/Models/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  constructor() {}
  @Input() recipe: RECIPE;
  // dropDownOpen = false;
  ngOnInit(): void {}
  // openDropdown() {
  //   this.dropDownOpen = !this.dropDownOpen;
  // }
}
