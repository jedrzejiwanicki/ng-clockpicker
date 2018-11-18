import { trigger, style, animate, transition, AnimationTriggerMetadata } from '@angular/animations';

export const enterLeave: AnimationTriggerMetadata =
  trigger('enterLeave', [
    transition('* => visible', [
      style({ opacity: 0 }),
      animate('0.2s', style({ opacity: 1 })),
    ]),
    transition('visible => hidden', [
      style({ opacity: 1 }),
      animate('0.2s', style({ opacity: 0  }))
    ])
]);
