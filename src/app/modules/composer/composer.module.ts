import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComposerComponent } from './composer.component';



@NgModule({
    declarations: [ComposerComponent],
    exports: [
        ComposerComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ComposerModule { }
