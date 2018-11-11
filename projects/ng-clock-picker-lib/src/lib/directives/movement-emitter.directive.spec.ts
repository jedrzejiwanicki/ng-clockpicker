import { MovementEmitterDirective } from './movement-emitter.directive';
import { Component } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'ng-test-component',
  template: `<div (ngMovementEmitter)="onMovement(event)"></div>`
})
class TestComponent {
  onMovement(event: string) {}
}

describe('MovementEmitterDirective', () => {
  let fixture;
  let directive;
  let directiveInstance;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovementEmitterDirective, TestComponent ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    directive = fixture.debugElement.query(By.directive(MovementEmitterDirective));
    directiveInstance = directive.injector.get(MovementEmitterDirective);

    fixture.detectChanges();
  }));

  it('should create an instance', async(() => {
    expect(directiveInstance).toBeTruthy();
  }));
});
