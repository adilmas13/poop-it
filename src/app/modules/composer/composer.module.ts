import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComposerComponent } from './composer.component';
import { FormsModule } from '@angular/forms';
import { IconModule } from '../common/icon/icon.module'



@NgModule({
    declarations: [ComposerComponent],
    exports: [
        ComposerComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        IconModule
    ]
})
export class ComposerModule { }
