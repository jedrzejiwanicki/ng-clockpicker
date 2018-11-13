import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeDisplayComponent } from './time-display.component';
import { ClockPickerService } from '../../services/clock-picker.service';
import { MockClockPickerService } from '../../tests/mocks';
import { HoursModePanelComponent } from '../hours-mode-panel/hours-mode-panel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('TimeDisplayComponent', () => {
  let component: TimeDisplayComponent;
  let fixture: ComponentFixture<TimeDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      declarations: [ TimeDisplayComponent, HoursModePanelComponent ],
      providers: [ { provide: ClockPickerService, useClass: MockClockPickerService }]
    })
    .compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TimeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should return correct display hours', async(() => {
    expect(component.displayHours).toBe('10');
  }));

  it('should return correct display minutes', async(() => {
    expect(component.displayMinutes).toBe('01');
  }));

  it('should return correct isHoursMode', async(() => {
    expect(component.isHoursMode).toBe(false);
  }));

  it('hours button click triggers correct action', async(() => {
    const button = fixture.debugElement.queryAll(By.css('.clock-picker__time-display__button'))[0].nativeElement;
    const handleHoursClick = spyOn(component, 'handleHoursClick');

    button.click();

    expect(handleHoursClick).toHaveBeenCalled();
  }));

  it('minutes button click triggers correct action', async(() => {
    const button = fixture.debugElement.queryAll(By.css('.clock-picker__time-display__button'))[1].nativeElement;
    const handleMinutesClick = spyOn(component, 'handleMinutesClick');

    button.click();

    expect(handleMinutesClick).toHaveBeenCalled();
  }));

  it('component method handleMinutesClick triggers setMode on service', async(() => {
    const service = TestBed.get(ClockPickerService);
    spyOn(service, 'setMode').and.callThrough();

    component.handleMinutesClick();

    expect(service.setMode).toHaveBeenCalledWith('minutes');
  }));

  it('component method handleHoursClick triggers setMode on service', async(() => {
    const service = TestBed.get(ClockPickerService);
    spyOn(service, 'setMode').and.callThrough();

    component.handleHoursClick();

    expect(service.setMode).toHaveBeenCalledWith('hours');
  }));
});
