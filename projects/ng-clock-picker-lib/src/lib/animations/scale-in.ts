import { trigger, style, animate, transition, AnimationTriggerMetadata } from '@angular/animations';

export const scaleIn: AnimationTriggerMetadata = trigger(
  'scaleIn', [
    transition('void => hours', [
      style({ opacity: 0, transform: 'scale(0)'}),
      animate('200ms ease', style({ opacity: 1, transform: 'scale(1)' }))
    ]),
    transition('hours => minutes', [
      style({ opacity: 0, transform: 'scale(0)'}),
      animate('200ms ease', style({ opacity: 1, transform: 'scale(1)' }))
    ]),
    transition('minutes => hours', [
      style({ opacity: 0, transform: 'scale(0)' }),
      animate('200ms ease', style({ opacity: 1, transform: 'scale(1)' }))
    ])
  ]
);
