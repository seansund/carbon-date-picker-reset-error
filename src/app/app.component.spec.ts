import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {DatePickerFormModule} from './date-picker-form/date-picker-form.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        DatePickerFormModule,
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
