import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core'
import { AppStore } from '../../app-store.service'

@Component({
  selector: 'app-composer',
  templateUrl: './composer.component.html',
  styleUrls: ['./composer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComposerComponent implements OnDestroy {

  isHeadlineButtonVisible = false

  constructor(public store: AppStore) {
  }

  ngOnDestroy(): void {
    this.store.destroy()
  }
}
