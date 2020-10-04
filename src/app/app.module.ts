import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuModule } from './menu/menu.module';
import { ComposerModule } from './composer/composer.module';
import { NotesListModule } from './notes-list/notes-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    ComposerModule,
    NotesListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
