import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { IconComponent } from './icon.component'
import { IconDeleteComponent } from './icon-delete/icon-delete.component'
import { IconBlockComponent } from './icon-block/icon-block.component'
import { IconUnblockComponent } from './icon-unblock/icon-unblock.component'
import { IconLeftArrowComponent } from './icon-left-arrow/icon-left-arrow.component'
import { IconQuestionComponent } from './icon-question/icon-question.component'
import { IconFaqComponent } from './icon-faq/icon-faq.component'
import { IconCategoryComponent } from './icon-category/icon-category.component'
import { IconNotificationComponent } from './icon-notification/icon-notification.component'
import { IconWriteToUsComponent } from './icon-write-to-us/icon-write-to-us.component'
import { IconRequestComponent } from './icon-request/icon-request.component'
import { IconAvatarComponent } from './icon-avatar/icon-avatar.component'
import { IconQuestionAssetsComponent } from './icon-question-assets/icon-question-assets.component'
import { IconMaximizeComponent } from './icon-maximize/icon-maximize.component'
import { IconMinimizeComponent } from './icon-minimize/icon-minimize.component'
import { IconPoopComponent } from './icon-poop/icon-poop.component'
import { IconPlusComponent } from './icon-plus/icon-plus.component'


@NgModule({
  declarations: [IconComponent, IconDeleteComponent, IconBlockComponent, IconUnblockComponent, IconLeftArrowComponent, IconQuestionComponent, IconFaqComponent, IconCategoryComponent, IconNotificationComponent, IconWriteToUsComponent, IconRequestComponent, IconAvatarComponent, IconQuestionAssetsComponent, IconMaximizeComponent, IconMinimizeComponent, IconPoopComponent, IconPlusComponent],
  exports: [
    IconComponent
  ],
  imports: [
    CommonModule
  ]
})
export class IconModule {
}
