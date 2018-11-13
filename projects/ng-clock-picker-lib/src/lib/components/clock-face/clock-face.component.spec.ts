import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockFaceComponent } from './clock-face.component';
import { ClockPickerService } from '../../services/clock-picker.service';
import { By } from '@angular/platform-browser';

describe('ClockFaceComponent', () => {
  let component: ClockFaceComponent;
  let fixture: ComponentFixture<ClockFaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClockFaceComponent ],
      providers: [ ClockPickerService ],
    })
    .compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClockFaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', async(() => {
    expect(component).toBeTruthy();
  }));

  it('builds correct face control config', async(() => {
    const config = component.clockFaceItems;

    expect(config.minutes).toBeDefined();
    expect(config.hours).toBeTruthy();
  }));

  it('displays only one line', async(() => {
    const line = fixture.debugElement.queryAll(By.css('.clock-picker__clock-face__tick'));

    expect(line.length).toBe(1);
  }));

  it('displays circle', async(() => {
    const center = fixture.debugElement.query(By.css('.clock-picker__clock-face__center'));

    expect(center).toBeDefined();
  }));
});
