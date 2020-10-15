import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core'

export type icons =
  'block'
  | 'unblock'
  | 'delete'
  | 'maximize'
  | 'minimize'
  | 'plus'
  | 'notes'
  | 'recycle'
  | 'toilet'

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent  {
  @Input() icon: icons
  @Input() isSelected = false
}
