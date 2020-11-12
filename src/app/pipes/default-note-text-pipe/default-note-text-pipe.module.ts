import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultNoteTextPipe } from './default-note-text.pipe';


@NgModule({
  declarations: [DefaultNoteTextPipe],
  imports: [
    CommonModule
  ],
  exports: [DefaultNoteTextPipe]
})
export class DefaultNoteTextPipeModule {
}
