import {
  Injectable,
  Injector,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  ApplicationRef
} from '@angular/core';

import { NotifierComponent } from './notifier.component'
@Injectable({
  providedIn: 'root'
})
export class NotifierService {
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
) { }
message:string = '';
public show(message: string) {
  const componentRef = this.componentFactoryResolver
    .resolveComponentFactory(NotifierComponent)
    .create(this.injector);
  componentRef.instance.message = message;
  this.appRef.attachView(componentRef.hostView);
  const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
    .rootNodes[0] as HTMLElement;
  document.body.appendChild(domElem);
  setTimeout(() => {
      this.appRef.detachView(componentRef.hostView);
      componentRef.destroy();
  }, 3000);
}
}
