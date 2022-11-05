import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, map, take, tap } from 'rxjs';
import { RECIPE } from '../Models/recipe.model';
import { AuthService } from './auth.service';
import { RecipeService } from './recipe.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}
  url =
    'https://angular-recipe-app-fc142-default-rtdb.europe-west1.firebasedatabase.app/recipes.json';

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put(this.url, recipes).subscribe((response) => {
      console.log(response);
    });
  }
  //fetch data from firebase
  fetchRecipes() {
    return (
      this.http
        .get<RECIPE[]>(this.url)
        // if the return recipe has no ingredients inside loop through the recieved dat aand check if the ingredients are missing, if the are missing, then add ingredient to that recipe and set it to an empty object
        .pipe(
          map((recipes: RECIPE[]) => {
            return recipes.map((recipe: RECIPE) => {
              return {
                ...recipe,
                ingredients: recipe.ingredients ? recipe.ingredients : [],
              };
            });
          }),
          tap((recipes) => {
            console.log(recipes);
            this.recipeService.setRecipes(recipes);
          })
        )
    );
  }
}
