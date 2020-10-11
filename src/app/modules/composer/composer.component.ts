import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core'
import { AppStore } from '../../app-store.service'
import { animate, style, transition, trigger } from '@angular/animations'

@Component({
  selector: 'app-composer',
  templateUrl: './composer.component.html',
  styleUrls: ['./composer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('scaleDown', [
      transition(':enter', [
        style({opacity: 0, transform: 'scale(0)'}),
        animate('0.3s ease-out', style({ opacity: 1, transform: 'scale(1)'}))
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('0.3s ease-out', style({ opacity: 0, transform: 'scale(0)'}))
      ])
    ]),
  ]
})
export class ComposerComponent implements OnDestroy {

  isHeadlineButtonVisible = false

  constructor(public store: AppStore) {
  }

  ngOnDestroy(): void {
    this.store.destroy()
  }
}
