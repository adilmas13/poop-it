import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComposerComponent } from './composer.component';
import { FormsModule } from '@angular/forms';



@NgModule({
    declarations: [ComposerComponent],
    exports: [
        ComposerComponent
    ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ComposerModule { }
