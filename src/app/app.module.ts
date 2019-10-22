import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DatePickerFormComponent} from './date-picker-form/date-picker-form.component';
import {CarbonModule} from './carbon.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ButtonModule} from 'carbon-components-angular';

@NgModule({
  declarations: [
    AppComponent,
    DatePickerFormComponent
  ],
  imports: [
    BrowserModule,
    CarbonModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
