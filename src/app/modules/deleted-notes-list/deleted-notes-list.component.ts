import { ChangeDetectionStrategy, Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core'
import { AppStore } from '../../app-store.service'
import { Note } from '../../models/note'

@Component({
  selector: 'app-deleted-notes-list',
  templateUrl: './deleted-notes-list.component.html',
  styleUrls: ['./deleted-notes-list.component.scss'],
  // encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeletedNotesListComponent {

  @Output() noteSelected = new EventEmitter<number>()

  constructor(public store: AppStore) {
  }

  trackByFn = (_, note: Note) => note.id
}
