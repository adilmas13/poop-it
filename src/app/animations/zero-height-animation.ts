import { animate, style, transition, trigger } from '@angular/animations'

export const zeroHeightAnimation = trigger('heightAnim', [
  transition(':enter', [
    style({height: 0, opacity: 0}),
    animate('0.3s ease-out', style({height: '*', opacity: 1}))
  ]),
  transition(':leave', [
    style({height: '*', opacity: 1}),
    animate('0.3s ease-out', style({height: 0, opacity: 0}))
  ])
])
