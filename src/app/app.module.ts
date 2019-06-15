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
