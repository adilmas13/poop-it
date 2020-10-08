import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { Note } from '../../../models/note'

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoteComponent {

  @Input() note: Note
  @Input() isSelected: boolean
}
