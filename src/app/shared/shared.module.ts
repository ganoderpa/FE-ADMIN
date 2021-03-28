import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import {
  AppstoreOutline,
  SettingOutline,
  UserOutline,
  MenuOutline,
  DeleteTwoTone,
  SearchOutline,
  MessageOutline,
  WifiOutline,
  ClockCircleOutline,
  FileOutline,
  ToolOutline,
  MinusCircleOutline
} from '@ant-design/icons-angular/icons';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

import { TranslateModule } from '@ngx-translate/core';

import{AgGridModule } from 'ag-grid-angular'

import {HttpService} from './services/http.service';
import {MessageService} from './services/message.service'
import {AdminViewContainerRefDirective} from './directives/adminViewContainerRef.directvie';
import { AgGridComponent } from './components/ag-grid/ag-grid.component';






// 引入图标
const icons: IconDefinition[] = [
  AppstoreOutline,
  SettingOutline,
  UserOutline,
  MenuOutline,
  DeleteTwoTone,
  SearchOutline,
  MessageOutline,
  WifiOutline,
  ClockCircleOutline,
  FileOutline,
  ToolOutline,
  // MinusCircleOutline
];

const ANGULARMODULE = [
  CommonModule,
  FormsModule,
  RouterModule,
  ReactiveFormsModule,
  HttpClientModule,
];

const COMPONENTS = [
  AgGridComponent,

];


const EXTERNALMODULES = [
  NzIconModule.forRoot(icons),
  NzLayoutModule,
  NzBreadCrumbModule,
  NzMenuModule,
  NzTableModule,
  NzInputModule,
  NzButtonModule,
  NzCollapseModule,
  NzListModule,
  NzSwitchModule,
  NzFormModule,
  NzAutocompleteModule,
  NzSpaceModule,
  NzDividerModule,
  NzRadioModule,
  NzModalModule,
  NzMessageModule,
  NzTimePickerModule,
  NzSelectModule,
  NzCheckboxModule,
  NzNotificationModule,
  NzDatePickerModule,
  NzDropDownModule,
  TranslateModule,
  AgGridModule.withComponents([]),
];


const SERVICES = [
  HttpService,
  MessageService];

const PIPES = [];

const DIRECTIVES = [
  AdminViewContainerRefDirective,

];

const OTHERS=[];



@NgModule({
  imports: [
    ...ANGULARMODULE,
    // third libs
    ...EXTERNALMODULES,
  ],
  declarations: [
    // your components
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES,

  ],
  providers: [...SERVICES],
  exports: [
    ...ANGULARMODULE,
    // your components
    ...COMPONENTS,
    ...DIRECTIVES,
    ...OTHERS,
    // third libs
    ...EXTERNALMODULES,
  ],
})
export class SharedModule { }
