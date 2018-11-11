import { ElementRef, ViewContainerRef, Component } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ClockPickerDirective } from './clock-picker.directive';
import { DynamicComponentsService } from '../services/dynamic-components.service';
import { MockElementRef, MockDynamicComponentsService } from '../tests/mocks';
import { ClockPickerDialogComponent } from '../components/clock-picker-dialog/clock-picker-dialog.component';

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
        { provide: DynamicComponentsService, useClass: MockDynamicComponentsService}
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

  it('input should trigger dynamicComponentsService.load', async(() => {
    const dynamicComponentsService = TestBed.get(DynamicComponentsService);
    const input = fixture.debugElement.query(By.css('#input')).nativeElement;
    const load = spyOn(dynamicComponentsService, 'load');

    input.dispatchEvent(new Event('focus'));

    expect(load).toHaveBeenCalledWith(
      ClockPickerDialogComponent,
      directiveInstance.viewContainerRef,
      directiveInstance.config,
    );
  }));

  it('should set new value to input', async(() => {
    const dynamicComponentsService = TestBed.get(DynamicComponentsService);
    const input = fixture.debugElement.query(By.css('#input')).nativeElement;
    const load = spyOn(dynamicComponentsService, 'load').and.callThrough();

    input.dispatchEvent(new Event('focus'));

    expect(input.value).toBe('value');

  }));
});
