import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ShoppingListService } from 'src/app/shared/services/shopping-list.service';
import { INGREDIENT } from '../../shared/Models/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('ingredientInput', { static: true })
  ingredientInput: ElementRef;
  @ViewChild('ammountInput', { static: true }) ammountInput: ElementRef;
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}
  onAddIngredient() {
    const addIngredient: INGREDIENT = {
      name: '' + this.ingredientInput.nativeElement.value,
      ammount: +this.ammountInput.nativeElement.value,
    };
    this.shoppingListService.addIngredient(addIngredient);
  }
}
