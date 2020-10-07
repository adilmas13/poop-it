import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core'

export type icons =
  'block'
  | 'unblock'
  | 'delete'
  | 'left-arrow'
  | 'question'
  | 'category'
  | 'question-assets'
  | 'avatar-assets'
  | 'faq'
  | 'request'
  | 'write-to-us'
  | 'notification'

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {
  @Input() icon: icons
  @Input() isSelected = false
}
