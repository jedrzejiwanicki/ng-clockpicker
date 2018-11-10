import { trigger, style, animate, transition } from '@angular/animations';

export const enterLeave = trigger(
  'enterLeave', [
    transition('void => on', [
      style({ opacity: 0}),
      animate('200ms', style({ opacity: 1 }))
    ]),
    transition('on => off', [
      style({ opacity: 1 }),
      animate('200ms', style({ opacity: 0 }))
    ])
  ]
);

