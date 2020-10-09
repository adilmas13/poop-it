import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesListComponent } from './notes-list.component';
import { NoteComponent } from './note/note.component';
import { DefaultNoteTextPipe } from './defaultNoteText.pipe'
import { IconModule } from '../common/icon/icon.module'



@NgModule({
    declarations: [NotesListComponent, NoteComponent, DefaultNoteTextPipe],
    exports: [
        NotesListComponent
    ],
    imports: [
        CommonModule,
        IconModule
    ]
})
export class NotesListModule { }
