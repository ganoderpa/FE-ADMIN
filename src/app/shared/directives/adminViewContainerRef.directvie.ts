import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[adminViewContainerRefDirective]',
})
export class AdminViewContainerRefDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}