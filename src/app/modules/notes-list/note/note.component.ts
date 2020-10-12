import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core'
import { Note } from '../../../models/note'

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoteComponent {

  @Input() note: Note
  @Input() deleteMode = false
  @Output() delete = new EventEmitter()
  @Output() recycle = new EventEmitter()
}
