import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HoursModePanelComponent } from './hours-mode-panel.component';
import { ClockPickerService } from '../../services/clock-picker.service';
import { MockClockPickerService } from '../../tests/mocks';


describe('HoursModePanelComponent', () => {
  let component: HoursModePanelComponent;
  let fixture: ComponentFixture<HoursModePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      declarations: [ HoursModePanelComponent ],
      providers: [ { provide: ClockPickerService, useClass: MockClockPickerService }]
    })
    .compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HoursModePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', async(() => {
    expect(component).toBeTruthy();
  }));
});
