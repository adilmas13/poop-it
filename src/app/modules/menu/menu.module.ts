import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MenuComponent } from './menu.component'
import { AddButtonComponent } from './add-button/add-button.component'
import { IconModule } from '../common/icon/icon.module'
import { ThemeModule } from '../theme/theme.module'
import { PoopIconModule } from '../poop-icon/poop-icon.module';
import { BuyMeACoffeeComponent } from './buy-me-a-coffee/buy-me-a-coffee.component'


@NgModule({
  declarations: [MenuComponent, AddButtonComponent, BuyMeACoffeeComponent],
  imports: [
    CommonModule,
    IconModule,
    ThemeModule,
    PoopIconModule
  ],
  exports: [MenuComponent]
})
export class MenuModule {
}
