# ez-notifier

Minimalistic design, simple, customizable, and easy-to-use notification library for your Angular 2+ application.

## Installation

Run `npm install ez-notifier`

## Code - app.module.ts

import { BrowserModule } from '@angular/platform-browser';<br />
import { NgModule } from '@angular/core';<br />
<br />
import { AppComponent } from './app.component';<br />
import { NotificationBarComponent } from './notification-bar/notification-bar.component';<br />
import { NotifierModule, NotifierService } from 'ez-notifier'<br />
<br />
@NgModule({<br />
  declarations: [<br />
    AppComponent,<br />
    NotificationBarComponent<br />
  ],
  imports: [<br />
    BrowserModule,<br />
    NotifierModule <br />
  ],<br />
  providers: [NotifierService],<br />
  bootstrap: [AppComponent]<br />
})<br />
export class AppModule { }<br />
<br />
## Show notification at component.

import { Component, OnInit } from '@angular/core';<br />
import { NotifierService } from'notifier'<br />
<br />
@Component({
  selector: 'app-notification-bar',<br />
  templateUrl: './notification-bar.component.html',<br />
  styleUrls: ['./notification-bar.component.scss']<br />
})<br />
export class NotificationBarComponent implements OnInit {<br /><br />
  myMessage = 'This is a simple text message from componenet..'<br />
  constructor(private notifier: NotifierService) { }<br />
<br />
  ngOnInit() {<br />
  }<br />

  showNotification(){<br />
    this.notifier.show(this.myMessage, 'error');<br />
  }<br />
} <br />


## Configuration

Error:  this.notifier.show(this.myMessage, 'error');<br />
Warining: this.notifier.show(this.myMessage, 'warning');<br />
Success: this.notifier.show(this.myMessage, 'success');<br />
