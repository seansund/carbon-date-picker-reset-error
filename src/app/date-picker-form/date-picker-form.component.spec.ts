import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerFormComponent } from './date-picker-form.component';
import {CarbonModule} from '../carbon.module';
import {ReactiveFormsModule} from '@angular/forms';
import {DatePickerFormModule} from './date-picker-form.module';

describe('DatePickerFormComponent', () => {
  let component: DatePickerFormComponent;
  let fixture: ComponentFixture<DatePickerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DatePickerFormModule,
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
