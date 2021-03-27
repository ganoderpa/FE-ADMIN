import { Component, OnInit } from '@angular/core';

import{ MessageService} from '../../shared/service/message.service'


@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.less']
})
export class UserManageComponent implements OnInit {

  constructor(
    private messageService :MessageService
  ) { }

  ngOnInit(): void {
    this.messageService.send('testMessageKey','home page hello');
  }

}
