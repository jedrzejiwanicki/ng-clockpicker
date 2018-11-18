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
import { MovementEmitterComponent } from '../movement-emitter/movement-emitter.component';
import { EnterLeaveComponent } from '../enter-leave/enter-leave.component';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { defaultConfig } from '../../utils/constants';

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
        EnterLeaveComponent,
        MovementEmitterComponent,
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

  it('closes correctly: cancel', async(() => {
    const enterLeaveCmp = component.enterLeaveCmp;

    spyOn(enterLeaveCmp, 'requestClose').and.returnValue(of(true));
    spyOn(component, 'close');

    component.cancel();

    expect(enterLeaveCmp.requestClose).toHaveBeenCalled();
    expect(component.close).toHaveBeenCalledWith(null);
  }));


  it('closes correctly: handleClose', async(() => {
    const enterLeaveCmp = component.enterLeaveCmp;

    spyOn(enterLeaveCmp, 'requestClose').and.returnValue(of(true));
    spyOn(component, 'close');

    component.handleClose();

    expect(enterLeaveCmp.requestClose).toHaveBeenCalled();
    expect(component.close).toHaveBeenCalledWith(component.fullTime);
  }));

  it('overlay click triggers cancel when closeOnOverlayClick is true', async(() => {
    const overlay = fixture.debugElement.query(By.css('.clock-picker__overlay')).nativeElement;

    spyOnProperty(component, 'config', 'get').and.returnValue({ closeOnOverlayClick: true });
    spyOn(component, 'cancel');
    overlay.click();

    expect(component.cancel).toHaveBeenCalled();
  }));

  it('overlay click does not trigger cancel when closeOnOverlayClick is false', async(() => {
    const overlay = fixture.debugElement.query(By.css('.clock-picker__overlay')).nativeElement;

    spyOnProperty(component, 'config').and.returnValue({ closeOnOverlayClick: false });
    spyOn(component, 'cancel');
    overlay.click();

    expect(component.cancel).not.toHaveBeenCalled();
  }));
});
