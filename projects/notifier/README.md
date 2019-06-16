# ez-notifier

This is to create eazy notifications at the client side.

## Installation

Run `npm install ez-notifier`

## Code - app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotificationBarComponent } from './notification-bar/notification-bar.component';
import { NotifierModule, NotifierService } from 'notifier'

@NgModule({
  declarations: [
    AppComponent,
    NotificationBarComponent
  ],
  imports: [
    BrowserModule,
    NotifierModule 
  ],
  providers: [NotifierService],
  bootstrap: [AppComponent]
})
export class AppModule { }

## Show notification at component.

import { Component, OnInit } from '@angular/core';
import { NotifierService } from'notifier'

@Component({
  selector: 'app-notification-bar',
  templateUrl: './notification-bar.component.html',
  styleUrls: ['./notification-bar.component.scss']
})
export class NotificationBarComponent implements OnInit {
  myMessage = 'This is a simple text message from componenet..'
  constructor(private notifier: NotifierService) { }

  ngOnInit() {
  }

  showNotification(){
    this.notifier.show(this.myMessage, 'error');
  }
} 


## Configuration

Error:  this.notifier.show(this.myMessage, 'error');
Warining: this.notifier.show(this.myMessage, 'warning');
Success: this.notifier.show(this.myMessage, 'success');
