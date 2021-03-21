import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

// import { NzFormModule } from 'ng-zorro-antd/form';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    private fb: FormBuilder
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
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }


  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

}
