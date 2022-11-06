import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth/auth.component';
// import { ShoppingListComponent } from './shopping-list/shopping-list.component';
// import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
// import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
// import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
// import { RecipesComponent } from './recipes/recipes.component';
// import { AuthGuard } from './shared/services/auth.guard';
// import { RecipeResolverService } from './shared/services/recipe-resolver.service';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  // { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'auth', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
