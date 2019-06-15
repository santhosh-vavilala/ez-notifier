import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ez-notifier',
  templateUrl: './notifier.component.html',
  styleUrls: ['./notifier.component.scss']
})
export class NotifierComponent implements OnInit {
  message: string = 'test message';
  constructor() { }

  ngOnInit() {
  }

}
