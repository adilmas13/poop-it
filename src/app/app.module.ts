import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { MenuModule } from './modules/menu/menu.module'
import { ComposerModule } from './modules/composer/composer.module'
import { NotesListModule } from './modules/notes-list/notes-list.module'
import { IconModule } from './modules/common/icon/icon.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { DeletedNotesListModule } from './modules/deleted-notes-list/deleted-notes-list.module'
import { AngularFireModule } from '@angular/fire'
import { environment } from '../environments/environment'
import { AngularFireAnalyticsModule } from '@angular/fire/analytics'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAnalyticsModule,
    BrowserModule,
    MenuModule,
    ComposerModule,
    NotesListModule,
    IconModule,
    BrowserAnimationsModule,
    DeletedNotesListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
