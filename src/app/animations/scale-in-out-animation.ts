import { animate, style, transition, trigger } from '@angular/animations'

export const scaleInOutAnimation = trigger('scaleAnim', [
  transition(':enter', [
    style({opacity: 0, transform: 'scale(0)'}),
    animate('0.3s ease-out', style({opacity: 1, transform: 'scale(1)'}))
  ]),
  transition(':leave', [
    style({opacity: 1}),
    animate('0.3s ease-out', style({opacity: 0, transform: 'scale(0)'}))
  ])
])
