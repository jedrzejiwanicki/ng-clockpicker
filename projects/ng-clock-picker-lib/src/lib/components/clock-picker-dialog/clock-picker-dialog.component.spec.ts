import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockPickerDialogComponent } from './clock-picker-dialog.component';

describe('ClockPickerDialogComponent', () => {
  let component: ClockPickerDialogComponent;
  let fixture: ComponentFixture<ClockPickerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClockPickerDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockPickerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
