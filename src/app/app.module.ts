import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthComponent } from './auth/auth/auth.component';
import { RecipesModule } from './recipes/recipes.module';
import { ShoppingModule } from './shopping-list/shopping.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { AuthModule } from './auth/auth.module';
// import { AuthInterseptorService } from './shared/services/auth-interseptor.service';
// import { AlertComponent } from './shared/alert/alert.component';
// import { DropdownDirective } from './shared/directives/dropdown.directive';
// import { PlaceholderDirective } from './shared/directives/placeholder.directive';
// import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
// import { RecipesComponent } from './recipes/recipes.component';
// import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
// import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
// import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
// import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
// import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
// import { ShoppingListComponent } from './shopping-list/shopping-list.component';
// import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // AuthComponent,
    // DropdownDirective,
    // LoadingSpinnerComponent,
    // AlertComponent,
    // PlaceholderDirective,
    // ShoppingListComponent,
    // ShoppingEditComponent,
    // RecipesComponent,
    // RecipeListComponent,
    // RecipeDetailComponent,
    // RecipeItemComponent,
    // RecipeStartComponent,
    // RecipeEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    NgbModule,
    MatFormFieldModule,
    HttpClientModule,
    RecipesModule,
    ShoppingModule,
    SharedModule,
    CoreModule,
    AuthModule,
    // FormsModule,
    // ReactiveFormsModule,
  ],
  providers: [
    //   {
    //     provide: HTTP_INTERCEPTORS,
    //     useClass: AuthInterseptorService,
    //     multi: true,
    //   },
  ],
  bootstrap: [AppComponent],
  // entryComponents: [AlertComponent],
})
export class AppModule {}
