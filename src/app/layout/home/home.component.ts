import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { MessageService} from '../../shared/service/message.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    private MessageService:MessageService
  ) { 
    this.translate.use('zh_CN')
  }

  ngOnInit(): void {

    this.MessageService.on('testMessageKey',(message)=>{
      console.log('receive message: '+message)

    })


  }

}
