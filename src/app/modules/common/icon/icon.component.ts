import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core'

export type icons =
  'block'
  | 'unblock'
  | 'maximize'
  | 'minimize'
  | 'plus'
  | 'notes'
  | 'recycle'
  | 'toilet'
  | 'cancel'
  | 'more'

export type iconSize =
  'small'
  | 'medium'
  | 'large'

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
  @Input() iconSize: iconSize = 'medium'
}
