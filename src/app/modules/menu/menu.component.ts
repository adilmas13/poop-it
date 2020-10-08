import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  @Output() addNoteClick = new EventEmitter()
}
