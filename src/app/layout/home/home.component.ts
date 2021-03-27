import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(
    private translate: TranslateService,
  ) { 
    this.translate.use('zh_CN')
  }

  ngOnInit(): void {
  }

}
