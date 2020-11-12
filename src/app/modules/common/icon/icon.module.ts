import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IconComponent } from './icon.component'
import { IconBlockComponent } from './icon-block/icon-block.component'
import { IconUnblockComponent } from './icon-unblock/icon-unblock.component'
import { IconMaximizeComponent } from './icon-maximize/icon-maximize.component'
import { IconMinimizeComponent } from './icon-minimize/icon-minimize.component'
import { IconPlusComponent } from './icon-plus/icon-plus.component'
import { IconNotesComponent } from './icon-notes/icon-notes.component'
import { IconRecycleComponent } from './icon-recycle/icon-recycle.component'
import { IconToiletComponent } from './icon-toilet/icon-toilet.component';
import { IconCancelComponent } from './icon-cancel/icon-cancel.component';
import { IconMoreComponent } from './icon-more/icon-more.component'


@NgModule({
  declarations: [IconComponent, IconBlockComponent, IconUnblockComponent, IconMaximizeComponent, IconMinimizeComponent, IconPlusComponent, IconNotesComponent, IconRecycleComponent, IconToiletComponent, IconCancelComponent, IconMoreComponent],
  exports: [
    IconComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class IconModule {
}
