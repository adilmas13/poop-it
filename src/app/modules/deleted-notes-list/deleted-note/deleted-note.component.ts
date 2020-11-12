import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from '../../../models/note';

@Component({
  selector: 'app-deleted-note',
  templateUrl: './deleted-note.component.html',
  styleUrls: ['./deleted-note.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeletedNoteComponent {
  @Input() note: Note
  @Output() recycle = new EventEmitter()
  @Output() permanentDelete = new EventEmitter()
  isOptionsEnabled = false;

  constructor() {
  }


}
