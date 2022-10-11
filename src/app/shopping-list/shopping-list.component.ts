import { Component, OnInit } from '@angular/core';
import { INGREDIENT } from '../Models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: INGREDIENT[] = [
    { name: 'Apples', ammount: 5 },
    { name: 'Kiwi', ammount: 3 },
    { name: 'Peaches', ammount: 10 },
    { name: 'Melons', ammount: 4 },
    { name: 'Bananas', ammount: 8 },
  ];
  constructor() {}

  ngOnInit(): void {}
}
