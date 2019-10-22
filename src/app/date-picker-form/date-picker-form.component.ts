import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {DateTime} from 'luxon';

export function dateAfter(testDate: string): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {

    const val: Array<Date> = control.value;

    if (!val || (Array.isArray(val) && val.length === 0)) {
      return null;
    }

    const value = Array.isArray(val)
      ? DateTime.fromJSDate(val[0]).toISO()
      : DateTime.fromFormat(val, 'MM/dd/yyyy').toISO();

    return value < testDate ? {dateBefore: {value: control.value}} : null;
  };
}

interface BusinessData {
  submitterName?: string;
  effectiveDate?: string;
  reason?: string;
  additionalInfo?: string;
}

interface FormData {
  submitterName?: string;
  effectiveDate?: Date[];
  reason?: string;
  additionalInfo?: string;
}

@Component({
  selector: 'app-date-picker-form',
  templateUrl: './date-picker-form.component.html',
  styleUrls: ['./date-picker-form.component.scss']
})
export class DatePickerFormComponent implements OnInit {

  requestCompleted = false;
  formGroup = new FormGroup({
    submitterName: new FormControl('', [
      Validators.required,
    ]),
    effectiveDate: new FormControl('', [
      Validators.required,
      dateAfter(DateTime.local().set({hour: 0, minute: 0, second: 0, millisecond: 0}).plus({day: 1}).toISO()),
    ]),
    reason: new FormControl('', [
      Validators.required,
    ]),
    additionalInfo: new FormControl(''),
  });

  reasonCodes: string[] = [
    'First',
    'Second',
  ];

  constructor() { }

  ngOnInit() {
    setTimeout(
      () => {
        this.handleFormData({
          submitterName: 'Name',
        } as BusinessData)
      }, 100);
  }

  isInvalid(controlName: string): boolean {
    const control: AbstractControl = this.formGroup.get(controlName);

    return control && control.invalid && (control.dirty || control.touched);
  }

  prepareEmptyForm() {
    this.handleFormData({});
  }

  handleFormData(formData) {
    this.requestCompleted = false;

    this.formGroup.reset(Object.assign(
      {
        submitterName: '',
        reason: '',
        additionalInfo: '',
        effectiveDate: [],
      },
      formData)
    );
  }

  onSubmit() {
    console.log('onSubmit()');

    if (this.formGroup.invalid) {
      console.log('The form is not valid');
      const invalidFields = [].slice.call(document.getElementsByClassName('ng-invalid'));
      invalidFields[1].focus();

      return;
    }

    this.requestCompleted = true;
  }

}
