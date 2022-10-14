import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  navCollapse = true;
  @Output() onSelect = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
  onClick(input: string) {
    this.onSelect.emit(input);
  }
}
