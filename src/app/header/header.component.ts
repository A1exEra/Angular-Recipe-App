import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';
import { DataStorageService } from '../shared/services/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  navCollapse = true;
  userSubscription: Subscription;
  isAuthenticated: boolean = false;
  // @Output() onSelect = new EventEmitter<string>();
  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    //checing if the users is logged in
    this.userSubscription = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
      console.log(`NOT-USER-----`, !user);
      console.log(`NOT-NOT-USER-----`, !!user);
    });
  }
  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
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
  onLogout() {
    return this.authService.logout();
  }
}
