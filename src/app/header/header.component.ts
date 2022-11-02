import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataStorageService } from '../shared/services/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  navCollapse = true;
  // @Output() onSelect = new EventEmitter<string>();
  constructor(private dataStorageService: DataStorageService) {}

  ngOnInit(): void {}
  // onClick(input: string) {
  //   this.onSelect.emit(input);
  // }

  //saving data on the server
  onSaveData() {
    this.dataStorageService.storeRecipes();
  }
  //fetch data from the fiebase server
  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }
}
