import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockPickerDialogComponent } from './clock-picker-dialog.component';
import { ClockPickerService } from '../../services/clock-picker.service';
import { MockClockPickerService } from '../../tests/mocks';
import { TimeDisplayComponent } from '../time-display/time-display.component';
import { CircleComponent } from '../circle/circle.component';
import { CircleButtonComponent } from '../circle-button/circle-button.component';
import { HoursModePanelComponent } from '../hours-mode-panel/hours-mode-panel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClockFaceComponent } from '../clock-face/clock-face.component';

describe('ClockPickerDialogComponent', () => {
  let component: ClockPickerDialogComponent;
  let fixture: ComponentFixture<ClockPickerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      declarations: [
        ClockPickerDialogComponent,
        TimeDisplayComponent,
        CircleComponent,
        CircleButtonComponent,
        HoursModePanelComponent,
        ClockFaceComponent,
      ],
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
