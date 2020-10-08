import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesListComponent } from './notes-list.component';
import { NoteComponent } from './note/note.component';
import { DefaultNoteTextPipe } from './defaultNoteText.pipe'



@NgModule({
    declarations: [NotesListComponent, NoteComponent, DefaultNoteTextPipe],
    exports: [
        NotesListComponent
    ],
    imports: [
        CommonModule
    ]
})
export class NotesListModule { }
