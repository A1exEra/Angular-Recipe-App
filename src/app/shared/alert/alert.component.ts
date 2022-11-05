import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  constructor() {}
  @Input() message: string;
  @Output() close = new EventEmitter();
  ngOnInit(): void {}
  closeAlert() {
    this.close.emit();
    console.log('button clicked');
  }
}
