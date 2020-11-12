import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NotesListComponent } from './notes-list.component'
import { NoteComponent } from './note/note.component'
import { DefaultNoteTextPipe } from '../../pipes/default-note-text-pipe/default-note-text.pipe'
import { IconModule } from '../common/icon/icon.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { DefaultNoteTextPipeModule } from '../../pipes/default-note-text-pipe/default-note-text-pipe.module';


@NgModule({
  declarations: [NotesListComponent, NoteComponent],
  exports: [
    NotesListComponent,
    NoteComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    DefaultNoteTextPipeModule,
    BrowserAnimationsModule
  ]
})
export class NotesListModule {
}
