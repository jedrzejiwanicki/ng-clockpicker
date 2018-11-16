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
    expect(component.displayHours).toBe('12');
  }));

  it('should return correct display minutes', async(() => {
    expect(component.displayMinutes).toBe('00');
  }));

  it('should return correct isHoursMode', async(() => {
    expect(component.isHoursMode).toBe(true);
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
});
