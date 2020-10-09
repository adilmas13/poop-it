import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Note } from '../../models/note'
import { AppStore } from '../../app-store.service'

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
})
export class NotesListComponent {

  @Input() notes: Note[]
  @Input() selectedNote: string
  @Output() noteSelected = new EventEmitter<number>()

  trackByFn = (_, note: Note) => note.id

  constructor(public store: AppStore) {
  }

}
