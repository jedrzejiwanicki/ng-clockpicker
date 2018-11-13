import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipeControlComponent } from './swipe-control.component';
import { ClockPickerService } from '../../services/clock-picker.service';

describe('SwipeControlComponent', () => {
  let component: SwipeControlComponent;
  let fixture: ComponentFixture<SwipeControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwipeControlComponent ],
      providers: [ClockPickerService]
    })
    .compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SwipeControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', async(() => {
    expect(component).toBeTruthy();
  }));
});
