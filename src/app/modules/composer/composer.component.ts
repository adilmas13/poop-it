import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core'
import { AppStore } from '../../app-store.service'
import { animate, style, transition, trigger } from '@angular/animations'
import { zeroHeightAnimation } from '../../animations/zero-height-animation'
import { noteCardAnimation } from '../../animations/note-card-animation'
import { scaleInOutAnimation } from '../../animations/scale-in-out-animation'

@Component({
  selector: 'app-composer',
  templateUrl: './composer.component.html',
  styleUrls: ['./composer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    scaleInOutAnimation,
    zeroHeightAnimation,
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
