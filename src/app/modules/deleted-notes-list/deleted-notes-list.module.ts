import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeletedNotesListComponent } from './deleted-notes-list.component';
import { NotesListModule } from '../notes-list/notes-list.module'
import { IconModule } from '../common/icon/icon.module'
import { IconNoPoopComponent } from './icon-no-poop/icon-no-poop.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'



@NgModule({
    declarations: [DeletedNotesListComponent, IconNoPoopComponent],
    exports: [
        DeletedNotesListComponent
    ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    NotesListModule
  ]
})
export class DeletedNotesListModule { }
