import { Component, OnInit } from '@angular/core';
import { RECIPE } from 'src/app/Models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: RECIPE[] = [
    {
      name: 'Test Recipe 1',
      description: 'This is the description for the test recipe 1',
      imagePath: 'https://source.unsplash.com/random/200x200?sig=1',
    },
    {
      name: 'Test Recipe 2',
      description: 'This is the description for the test recipe 2',
      imagePath: 'https://source.unsplash.com/random/200x200?sig=2',
    },
    {
      name: 'Test Recipe 3',
      description: 'This is the description for the test recipe 3',
      imagePath: 'https://source.unsplash.com/random/200x200?sig=3',
    },
    {
      name: 'Test Recipe 4',
      description: 'This is the description for the test recipe 4',
      imagePath: 'https://source.unsplash.com/random/200x200?sig=4',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
