import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core'
import { Note } from '../../models/note'
import { AppStore } from '../../app-store.service'
import { animate, style, transition, trigger } from '@angular/animations'

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('inOut', [
      transition(':enter', [
        style({height: 0, opacity: 0, transform: 'scale(0)'}),
        animate('0.3s ease-out', style({height: '*', opacity: 1, transform: 'scale(1)'}))
      ]),
      transition(':leave', [
        style({height: '*', opacity: 1}),
        animate('0.3s ease-out', style({height: 0, opacity: 0, transform: 'scale(0)'}))
      ])
    ])
  ]
})
export class NotesListComponent {

  @Output() noteSelected = new EventEmitter<number>()

  trackByFn = (_, note: Note) => note.id

  constructor(public store: AppStore) {
  }

}
