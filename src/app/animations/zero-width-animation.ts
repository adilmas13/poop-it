import { animate, style, transition, trigger } from '@angular/animations'

export const zeroWidthAnimation = trigger('inOut', [
  transition(':enter', [
    style({width: 0}),
    animate('0.3s ease-out', style({width: '*'}))
  ]),
  transition(':leave', [
    style({width: '*', opacity: 1}),
    animate('0.3s ease-out', style({width: 0, opacity: 0}))
  ])
])
