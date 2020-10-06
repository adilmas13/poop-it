import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core'
import { Note } from '../../../models/note'

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoteComponent implements OnInit {

  @Input() note: Note

  constructor() {
  }

  ngOnInit() {
  }

}
