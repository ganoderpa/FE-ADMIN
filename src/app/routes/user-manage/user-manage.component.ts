import { Component, OnInit } from '@angular/core';

import { MessageService } from '../../shared/services/message.service'


@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.less']
})
export class UserManageComponent implements OnInit {

  constructor(
    private messageService: MessageService
  ) { }


  //定义表格列
  columnDefs = [
    { headerName: '姓名', field: 'name', tooltipField: 'name', width: 150, },
    { headerName: '年龄', field: 'age', tooltipField: 'age', width: 150, },
  ];

  //表格数据
  rowData = [
    { name: 111, age: 33 },
    { name: 111, age: 33 },
    { name: 111, age: 33 },
    { name: 111, age: 33 },
    { name: 111, age: 33 },
    { name: 111, age: 33 }
  ]


  ngOnInit(): void {
    this.messageService.send('testMessageKey', 'home page hello');
  }



}
