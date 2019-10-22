import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  ButtonModule,
  DatePickerModule,
  GridModule,
  InputModule,
  SelectModule,
  TilesModule
} from 'carbon-components-angular';
import {TextArea} from 'carbon-components-angular/input/text-area.directive';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    DatePickerModule,
    GridModule,
    InputModule,
    SelectModule,
    TilesModule,
  ],
  exports: [
    ButtonModule,
    DatePickerModule,
    GridModule,
    InputModule,
    SelectModule,
    TilesModule,
  ]
})
export class CarbonModule { }
