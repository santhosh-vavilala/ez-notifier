import { NgModule } from '@angular/core';
import { NotifierComponent } from './notifier.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule
  ],
  declarations: [NotifierComponent],
  exports: [NotifierComponent],
  entryComponents: [NotifierComponent],
})
export class NotifierModule { }
