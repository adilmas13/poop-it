import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesListComponent } from './notes-list.component';
import { NoteComponent } from './note/note.component';



@NgModule({
    declarations: [NotesListComponent, NoteComponent],
    exports: [
        NotesListComponent
    ],
    imports: [
        CommonModule
    ]
})
export class NotesListModule { }
