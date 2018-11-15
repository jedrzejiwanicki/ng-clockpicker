import { trigger, style, animate, transition, state, AnimationTriggerMetadata } from '@angular/animations';
import { HOURS_MODE_AM, HOURS_MODE_PM } from '../utils/constants';

export const hoursModeSlide: AnimationTriggerMetadata = trigger(
  'hoursModeSlide', [
    state('0', style({
      transform: 'translateY(0)'
    })),
    state('1', style({
      transform: 'translateY(-19px)'
    })),
    transition(`0 => 1`, [
      animate('200ms ease')
    ]),
    transition(`1 => 0`, [
      animate('200ms ease')
    ]),
  ]
);
