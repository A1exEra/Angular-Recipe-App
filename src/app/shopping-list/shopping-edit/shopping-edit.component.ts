import { outputAst } from '@angular/compiler';
import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
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
  @Output() addedIngredient = new EventEmitter<INGREDIENT>();
  constructor() {}

  ngOnInit(): void {}
  onAddIngredient() {
    console.log(
      `This is the ingredient viewChild ${this.ingredientInput.nativeElement.value}`
    );
    console.log(
      `This is the ammount viewChild ${this.ammountInput.nativeElement.value}`
    );
    // this.addedIngredient.name = '' + this.ingredientInput.nativeElement.value;
    // this.addedIngredient.ammount = this.ammountInput.nativeElement.value;
    this.addedIngredient.emit({
      name: '' + this.ingredientInput.nativeElement.value,
      ammount: +this.ammountInput.nativeElement.value,
    });
    console.log(this.addedIngredient);
  }
}
