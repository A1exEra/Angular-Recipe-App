import { Injectable } from '@angular/core';
import { RECIPE } from '../Models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor() {}

  private recipes: RECIPE[] = [
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
  getRecipes() {
    return this.recipes.slice();
  }
}
