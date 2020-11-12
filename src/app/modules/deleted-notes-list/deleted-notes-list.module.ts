import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DeletedNotesListComponent } from './deleted-notes-list.component'
import { NotesListModule } from '../notes-list/notes-list.module'
import { IconNoPoopComponent } from './icon-no-poop/icon-no-poop.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeletedNoteComponent } from './deleted-note/deleted-note.component'
import { IconModule } from '../common/icon/icon.module';
import { DefaultNoteTextPipeModule } from '../../pipes/default-note-text-pipe/default-note-text-pipe.module';


@NgModule({
  declarations: [DeletedNotesListComponent, IconNoPoopComponent, DeletedNoteComponent],
  exports: [
    DeletedNotesListComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    NotesListModule,
    IconModule,
    DefaultNoteTextPipeModule
  ]
})
export class DeletedNotesListModule {
}
