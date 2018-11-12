import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CircleComponent } from './circle.component';
import { ClockPickerService } from '../../services/clock-picker.service';
import { MockClockPickerService } from '../../tests/mocks';
import { CircleButtonComponent } from '../circle-button/circle-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CircleComponent', () => {
  let component: CircleComponent;
  let fixture: ComponentFixture<CircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ BrowserAnimationsModule ],
      declarations: [ CircleComponent, CircleButtonComponent ],
      providers: [ClockPickerService]
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

  it('should render 12 buttons', async(() => {
    const buttons = fixture.debugElement.queryAll(By.directive(CircleButtonComponent));

    expect(buttons.length).toBe(12);
  }));

  it('rendered button click', async(() => {
    const [button] = fixture.debugElement.queryAll(By.directive(CircleButtonComponent));
    const handleClick = spyOn(component, 'handleClick');

    button.nativeElement.click();

    expect(handleClick).toHaveBeenCalledWith(1);
  }));

  it('only one button has selected attribute', async(() => {
    const buttons = fixture.debugElement.queryAll(By.directive(CircleButtonComponent));
    const selectedButtons = buttons.filter(({ componentInstance: { selected } }) => selected);

    expect(selectedButtons.length).toBe(1);
  }));
});
