import { async } from '@angular/core/testing';
import { LockEventHandler } from './LockEventHandler';

describe('LockEventHandler', () => {
  const leh = new LockEventHandler();

  it('unlocks on MouseDown event', async(() => {
    const event = new MouseEvent('mousedown');

    leh.handleEvent(event);
    expect(leh.isMoveLocked).toBe(false);
  }));

  it('locks on MouseUp event', async(() => {
    const event = new MouseEvent('mouseup');

    leh.handleEvent(event);
    expect(leh.isMoveLocked).toBe(true);
  }));

  it('is idle when locked', async(() => {
    const event = new MouseEvent('mousemove');
    const emitMovement = spyOn(leh, 'emitMovement');

    leh.handleEvent(event);
    expect(emitMovement).not.toHaveBeenCalled();
  }));

  it('is not idle when locked and TouchEbent', async(() => {
    const event = new TouchEvent('touchmove');
    const emitMovement = spyOn(leh, 'emitMovement');

    leh.handleEvent(event);
    expect(emitMovement).toHaveBeenCalled();
  }));

  it('emitMovement submits new value to subject', async(() => {
    const event = new TouchEvent('touchmove');
    const eventEmitter$ = jasmine.createSpyObj('eventEmitter$', ['next']);
    leh.eventEmitter$ = eventEmitter$;

    leh.emitMovement(event);

    expect(leh.eventEmitter$.next).toHaveBeenCalled();
  }));
});
