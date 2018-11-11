import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleComponent } from './circle.component';
import { ClockPickerService } from '../../services/clock-picker.service';
import { MockClockPickerService } from '../../tests/mocks';
import { CircleButtonComponent } from '../circle-button/circle-button.component';

describe('CircleComponent', () => {
  let component: CircleComponent;
  let fixture: ComponentFixture<CircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleComponent, CircleButtonComponent ],
      providers: [{ provide: ClockPickerService, useClass: MockClockPickerService }]
    })
    .compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', async(() => {
    expect(component).toBeTruthy();
  }));

  it('handleClick should trigger event to be emitted', async(() => {
    const onItemChange = jasmine.createSpyObj('onItemChange', ['emit']);

    component.onItemChange = onItemChange;
    component.handleClick(11);

    expect(onItemChange.emit).toHaveBeenCalled();
  }));
});
