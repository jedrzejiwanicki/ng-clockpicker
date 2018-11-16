import { ElementRef, ViewContainerRef, Component } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ClockPickerDirective } from './clock-picker.directive';
import { DynamicComponentsService } from '../services/dynamic-components.service';
import { MockElementRef, MockClockPickerDialogService } from '../tests/mocks';
import { ClockPickerDialogComponent } from '../components/clock-picker-dialog/clock-picker-dialog.component';
import { ClockPickerDialogService } from '../services/clock-picker-dialog.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ng-test-component',
  template: `<input ngClockPicker id="input" config="{}"/>`
})
class TestComponent {

}

describe('ClockPickerDirective', () => {
  let fixture;
  let directive;
  let directiveInstance;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClockPickerDirective, TestComponent ],
      providers: [
        { provide: ElementRef, useClass: MockElementRef },
        ViewContainerRef,
        { provide: ClockPickerDialogService, useClass: MockClockPickerDialogService },
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    directive = fixture.debugElement.query(By.directive(ClockPickerDirective));
    directiveInstance = directive.injector.get(ClockPickerDirective);

    fixture.detectChanges();
  }));

  it('should create an instance', async(() => {
    expect(directive).toBeTruthy();
  }));

  it('input should trigger clockPickerDialogService.showClockPickerDialog', async(() => {
    const clockPickerDialogService = TestBed.get(ClockPickerDialogService);
    const input = fixture.debugElement.query(By.css('#input')).nativeElement;
    const showClockPickerDialog = spyOn(clockPickerDialogService, 'showClockPickerDialog');

    input.dispatchEvent(new Event('focus'));

    expect(showClockPickerDialog).toHaveBeenCalledWith(
      { ...directiveInstance.config, initialValue: '' }
    );
  }));

  it('should set new value to input', async(() => {
    const showClockPickerDialog = TestBed.get(ClockPickerDialogService);
    const input = fixture.debugElement.query(By.css('#input')).nativeElement;
    const load = spyOn(showClockPickerDialog, 'showClockPickerDialog').and.callThrough();

    input.dispatchEvent(new Event('focus'));

    expect(input.value).toBe('value');

  }));
});
