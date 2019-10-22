import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarbonModule} from '../carbon.module';
import {DatePickerFormComponent} from './date-picker-form.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    DatePickerFormComponent,
  ],
  imports: [
    CommonModule,
    CarbonModule,
    ReactiveFormsModule,
  ],
  exports: [
    DatePickerFormComponent,
  ]
})
export class DatePickerFormModule { }
