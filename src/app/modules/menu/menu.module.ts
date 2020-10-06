import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { AddButtonComponent } from './add-button/add-button.component';


@NgModule({
  declarations: [MenuComponent, AddButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [MenuComponent]
})
export class MenuModule {
}
