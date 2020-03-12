import { trigger, state, animate, transition, style } from '@angular/animations';


export const slideInOutAnimation = trigger('slideInOutAnimation', [
  state('void', style({}) ),
  state('*', style({ 'z-index': 0}) ),
  transition(':enter', [
    style({transform: 'translateX(-100%)', opacity: 0}),
    animate('0.4s ease-in-out', style({transform: 'translateX(0%)', opacity: 1}))
  ]),
  transition(':leave', [
    style({transform: 'translateX(0%)', opacity: 1}),
    animate('0.4s ease-in-out', style({transform: 'translateX(-100%)', opacity: 0, display: 'none'}))
  ])
]);

export const zoomInOutAnimation = trigger('zoomInOutAnimation', [
  state('void', style({})),
  state('*', style({'z-index': 100})),
  transition(':enter', [
    style({transform: 'scale(0, 0)', opacity: 1}),
    animate('0.4s ease-in-out', style({transform: 'scale(1, 1)', opacity: 1}))
  ]),
  transition(':leave', [
    style({transform: 'scale(1, 1)', opacity: 0}),
    animate('0.4s ease-in-out', style({transform: 'scale(0, 0)', opacity: 0}))
  ]),
]);


