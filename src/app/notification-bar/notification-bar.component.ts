import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-bar',
  templateUrl: './notification-bar.component.html',
  styleUrls: ['./notification-bar.component.scss']
})
export class NotificationBarComponent implements OnInit {
  myMessage = 'This is a simple text message from componenet..'
  constructor() { }

  ngOnInit() {
  }

} 
