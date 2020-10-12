import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core'
import { Note } from '../../models/note'
import { AppStore } from '../../app-store.service'
import { BehaviorSubject } from 'rxjs'
import { noteCardAnimation } from '../../animations/note-card-animation'

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [noteCardAnimation]
})
export class NotesListComponent implements AfterViewInit {

  @Output() noteSelected = new EventEmitter<number>()
  disabledAnimation = new BehaviorSubject<boolean>(true)

  constructor(public store: AppStore) {
  }

  trackByFn = (_, note: Note) => note.id

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.disabledAnimation.next(false)
    }, 500)
  }
}
