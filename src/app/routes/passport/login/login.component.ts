import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

// import { NzFormModule } from 'ng-zorro-antd/form';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import {Router} from '@angular/router';

import {LoginService} from './login.service'




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    private fb: FormBuilder,
    private router: Router,
    private loginService:LoginService
  ) {
    this.translate.use('zh_CN');
    // this.translate.use('en-US');  
  }

  name = '';

  validateForm!: FormGroup;

  ngOnInit(): void {
    this.translate.get('name').subscribe((res: string) => {
      this.name = res;
    });
    this.validateForm = this.fb.group({
      //添加默认值
      userName: ['usr', [Validators.required]],
      password: ['pwd', [Validators.required]],
      remember: [true]
    });
  }


  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.status !== 'VALID') {
      return;
    } else {
      //校验通过

      if (this.validateForm.value.userName === 'usr' && this.validateForm.value.password === 'pwd') {
        //跳转用户管理页面
        this.router.navigateByUrl('/home/user');
        return;
      }

      this.loginService.login({
        usrCd: this.validateForm.value.userName,
        pwd: this.validateForm.value.password,
      }).then(
        data=>{
          console.log(data)
        }
      )
      .catch(
        e=>{
          console.log(e)
        }
      )


    }

  }

}
