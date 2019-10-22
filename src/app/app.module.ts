import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DatePickerFormComponent} from './date-picker-form/date-picker-form.component';
import {CarbonModule} from './carbon.module';
import {ReactiveFormsModule} from '@angular/forms';
import {DatePickerFormModule} from './date-picker-form/date-picker-form.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DatePickerFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
