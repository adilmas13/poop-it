import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IconComponent } from './icon.component'
import { IconDeleteComponent } from './icon-delete/icon-delete.component'
import { IconBlockComponent } from './icon-block/icon-block.component'
import { IconUnblockComponent } from './icon-unblock/icon-unblock.component'
import { IconMaximizeComponent } from './icon-maximize/icon-maximize.component'
import { IconMinimizeComponent } from './icon-minimize/icon-minimize.component'
import { IconPoopComponent } from './icon-poop/icon-poop.component'
import { IconPlusComponent } from './icon-plus/icon-plus.component'


@NgModule({
  declarations: [IconComponent, IconDeleteComponent, IconBlockComponent, IconUnblockComponent, IconMaximizeComponent, IconMinimizeComponent, IconPoopComponent, IconPlusComponent],
  exports: [
    IconComponent
  ],
  imports: [
    CommonModule
  ]
})
export class IconModule {
}
