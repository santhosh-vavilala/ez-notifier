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
public appendComponentToBody(message: string) {
  // 1. Create a component reference from the component 
  const componentRef = this.componentFactoryResolver
    .resolveComponentFactory(NotifierComponent)
    .create(this.injector);
  
  // 2. Attach component to the appRef so that it's inside the ng component tree
  this.appRef.attachView(componentRef.hostView);
  
  // 3. Get DOM element from component
  const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
    .rootNodes[0] as HTMLElement;
  
  // 4. Append DOM element to the body
  document.body.appendChild(domElem);
  
  // 5. Wait some time and remove it from the component tree and from the DOM
  setTimeout(() => {
      this.appRef.detachView(componentRef.hostView);
      componentRef.destroy();
  }, 3000);
}
}
