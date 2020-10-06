import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Note } from '../../models/note'

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
})
export class NotesListComponent implements OnInit {

  @Input() notes: Note[]
  @Input() selectedNote: string
  @Output() noteSelected = new EventEmitter<number>()

  constructor() {
  }

  ngOnInit() {
  }

  trackByFn = (_, note: Note) => note.id

}
