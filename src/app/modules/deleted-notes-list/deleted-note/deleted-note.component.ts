import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../../../models/note';

@Component({
  selector: 'app-deleted-note',
  templateUrl: './deleted-note.component.html',
  styleUrls: ['./deleted-note.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeletedNoteComponent implements OnInit {
  @Input() note: Note
  @Input() deleteMode = false
  @Output() delete = new EventEmitter()
  @Output() recycle = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

}
