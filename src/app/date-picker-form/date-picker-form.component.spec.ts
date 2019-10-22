import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerFormComponent } from './date-picker-form.component';
import {CarbonModule} from '../carbon.module';
import {ReactiveFormsModule} from '@angular/forms';

describe('DatePickerFormComponent', () => {
  let component: DatePickerFormComponent;
  let fixture: ComponentFixture<DatePickerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DatePickerFormComponent
      ],
      imports: [
        CarbonModule,
        ReactiveFormsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
