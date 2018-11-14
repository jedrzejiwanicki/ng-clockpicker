import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CircleComponent } from './circle.component';
import { ClockPickerService } from '../../services/clock-picker.service';
import { CircleButtonComponent } from '../circle-button/circle-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClockFaceComponent } from '../clock-face/clock-face.component';
import { MovementEmitterComponent } from '../movement-emitter/movement-emitter.component';

describe('CircleComponent', () => {
  let component: CircleComponent;
  let fixture: ComponentFixture<CircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ BrowserAnimationsModule ],
      declarations: [ CircleComponent, CircleButtonComponent, ClockFaceComponent, MovementEmitterComponent],
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
    const itemChange = jasmine.createSpyObj('itemChange', ['emit']);

    component.itemChange = itemChange;
    component.handleClick(11);

    expect(itemChange.emit).toHaveBeenCalled();
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
