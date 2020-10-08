import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddButtonComponent {
}
