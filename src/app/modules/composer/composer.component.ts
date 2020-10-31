import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core'
import { AppStore } from '../../app-store.service'
import { zeroHeightAnimation } from '../../animations/zero-height-animation'
import { scaleInOutAnimation } from '../../animations/scale-in-out-animation'
import { alphaAnimation } from '../../animations/alpha-animation'

@Component({
  selector: 'app-composer',
  templateUrl: './composer.component.html',
  styleUrls: ['./composer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    scaleInOutAnimation,
    zeroHeightAnimation,
    alphaAnimation
  ]
})
export class ComposerComponent implements OnDestroy {

  @ViewChild('body', {static: false}) body: ElementRef;

  isHeadlineButtonVisible = false

  constructor(public store: AppStore) {
  }

  ngOnDestroy(): void {
    this.store.destroy()
  }

  onHeadingEnterClicked = ($event: KeyboardEvent) => {
    (this.body.nativeElement as HTMLTextAreaElement).focus();
    $event.stopPropagation()
  };
}
