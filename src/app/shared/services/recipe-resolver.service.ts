import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { RECIPE } from '../Models/recipe.model';
import { DataStorageService } from './data-storage.service';
import { RecipeService } from './recipe.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeResolverService implements Resolve<RECIPE[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private recipeService: RecipeService
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): RECIPE[] | Observable<RECIPE[]> | Promise<RECIPE[]> {
    const recipes = this.recipeService.getRecipes();
    return recipes.length === 0
      ? this.dataStorageService.fetchRecipes()
      : recipes;
  }
}
