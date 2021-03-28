import { Component, OnInit,ViewChild,ComponentFactoryResolver } from '@angular/core';
import { AdminViewContainerRefDirective } from '../../shared/directives/adminViewContainerRef.directvie';

import {HomeHeaderComponent} from '../../layout/home-header/home-header.component'
import {HomeFooterComponent} from '../../layout/home-footer/home-footer.component'



@Component({
  selector: 'app-dynamic-cp',
  templateUrl: './dynamic-cp.component.html',
  styleUrls: ['./dynamic-cp.component.less']
})
export class DynamicCpComponent implements OnInit {

  @ViewChild(AdminViewContainerRefDirective, {static: true}) templateRef: AdminViewContainerRefDirective;

  
  componentArray = [
    { name: 'headerCompoent', component: HomeHeaderComponent },
    { name: 'footerCompoent', component: HomeFooterComponent }
    ]


  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
  ) { }



  ngOnInit(): void {
    
  }

  /**
   * @description creat selected component
   * @param item  
   */
  creatComponent(item:any){
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(item.component);
    const viewContainerRef = this.templateRef.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);

  }
  

}
