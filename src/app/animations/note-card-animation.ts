import { animate, style, transition, trigger } from '@angular/animations'

export const noteCardAnimation = trigger('noteAnim', [
  transition(':enter', [
    style({height: 0, opacity: 0, transform: 'scale(0)'}),
    animate('0.3s ease-out', style({height: '*', opacity: 1, transform: 'scale(1)'}))
  ]),
  transition(':leave', [
    style({height: '*', opacity: 1}),
    animate('0.3s ease-out', style({height: 0, opacity: 0, transform: 'scale(0)'}))
  ])
])
