import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicCpComponent } from './dynamic-cp.component';

describe('DynamicCpComponent', () => {
  let component: DynamicCpComponent;
  let fixture: ComponentFixture<DynamicCpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicCpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicCpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
