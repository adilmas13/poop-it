import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core'
import { Note } from '../../models/note'

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesListComponent implements OnInit {

  @Input() notes: Note[]

  constructor() { }

  ngOnInit() {
  }

}
