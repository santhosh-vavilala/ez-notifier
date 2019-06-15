import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotificationBarComponent } from './notification-bar/notification-bar.component';
import { NotifierModule } from 'notifier'

@NgModule({
  declarations: [
    AppComponent,
    NotificationBarComponent
  ],
  imports: [
    BrowserModule,
    NotifierModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
