import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core'
import { AppStore } from '../../../app-store.service'

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddButtonComponent {
  constructor(public store: AppStore) {
  }
}
