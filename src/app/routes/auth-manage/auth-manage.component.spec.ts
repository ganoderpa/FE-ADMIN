import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthManageComponent } from './auth-manage.component';

describe('AuthManageComponent', () => {
  let component: AuthManageComponent;
  let fixture: ComponentFixture<AuthManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
