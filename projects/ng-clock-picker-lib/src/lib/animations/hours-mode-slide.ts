import { trigger, style, animate, transition, state, AnimationTriggerMetadata } from '@angular/animations';
import { HOURS_MODE_AM, HOURS_MODE_PM } from '../utils/constants';

export const hoursModeSlide: AnimationTriggerMetadata = trigger(
  'hoursModeSlide', [
    state(HOURS_MODE_AM, style({
      transform: 'translateY(0)'
    })),
    state(HOURS_MODE_PM, style({
      transform: 'translateY(-19px)'
    })),
    transition(`${HOURS_MODE_AM} => ${HOURS_MODE_PM}`, [
      animate('200ms ease')
    ]),
    transition(`${HOURS_MODE_PM} => ${HOURS_MODE_AM}`, [
      animate('200ms ease')
    ]),
  ]
);
