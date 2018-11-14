import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementEmitterComponent } from './movement-emitter.component';

describe('MovementEmitterComponent', () => {
  let component: MovementEmitterComponent;
  let fixture: ComponentFixture<MovementEmitterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovementEmitterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MovementEmitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', async(() => {
    expect(component).toBeTruthy();
  }));
});
