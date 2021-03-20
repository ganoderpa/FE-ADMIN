import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(
    private translate: TranslateService,
  ) {
    this.translate.use('zh_CN');  
    // this.translate.use('en-US');  
   }

    name=''; 

  ngOnInit(): void {

    this.translate.get('name').subscribe((res: string) => {
      console.log(res); // welcome to this app
      this.name = res;
});
  }

}
