import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core'
import { AppStore } from '../../app-store.service'
import { Note } from '../../models/note'
import { noteCardAnimation } from '../../animations/note-card-animation'
import { BehaviorSubject } from 'rxjs'
import { scaleInOutAnimation } from '../../animations/scale-in-out-animation'

@Component({
  selector: 'app-deleted-notes-list',
  templateUrl: './deleted-notes-list.component.html',
  styleUrls: ['./deleted-notes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [noteCardAnimation, scaleInOutAnimation]
})
export class DeletedNotesListComponent implements AfterViewInit {

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
