import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { AppStore } from './app-store.service'
import { animate, style, transition, trigger } from '@angular/animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AppStore],
  animations: [
    trigger('inOut', [
      transition(':enter', [
        style({width: 0}),
        animate('0.3s ease-out', style({width: '*'}))
      ]),
      transition(':leave', [
        style({width: '*', opacity: 1}),
        animate('0.3s ease-out', style({width: 0, opacity: 0}))
      ])
    ])
  ]
})
export class AppComponent implements OnInit {

  constructor(public store: AppStore) {
  }

  ngOnInit(): void {
    this.store.getNotes()
  }
}
