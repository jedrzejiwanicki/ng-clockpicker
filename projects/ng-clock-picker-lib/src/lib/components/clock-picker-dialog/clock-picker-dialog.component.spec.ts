import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockPickerDialogComponent } from './clock-picker-dialog.component';
import { ClockPickerService } from '../../services/clock-picker.service';
import { MockClockPickerService } from '../../tests/mocks';
import { TimeDisplayComponent } from '../time-display/time-display.component';
import { CircleComponent } from '../circle/circle.component';
import { CircleButtonComponent } from '../circle-button/circle-button.component';

describe('ClockPickerDialogComponent', () => {
  let component: ClockPickerDialogComponent;
  let fixture: ComponentFixture<ClockPickerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClockPickerDialogComponent, TimeDisplayComponent, CircleComponent, CircleButtonComponent ],
      providers: [{ provide: ClockPickerService, useClass: MockClockPickerService }]
    })
    .compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClockPickerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', async(() => {
    expect(component).toBeTruthy();
  }));
});
