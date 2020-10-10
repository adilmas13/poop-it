import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeComponent } from './theme.component';



@NgModule({
  declarations: [ThemeComponent],
  exports: [
    ThemeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ThemeModule { }
