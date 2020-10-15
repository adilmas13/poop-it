import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoopIconComponent } from './poop-icon.component';
import { PoopIconOneComponent } from './poop-icon-one/poop-icon-one.component';
import { PoopIconTwoComponent } from './poop-icon-two/poop-icon-two.component';
import { PoopIconThreeComponent } from './poop-icon-three/poop-icon-three.component';
import { PoopIconFourComponent } from './poop-icon-four/poop-icon-four.component';
import { PoopIconFiveComponent } from './poop-icon-five/poop-icon-five.component';
import { PoopIconSixComponent } from './poop-icon-six/poop-icon-six.component';



@NgModule({
    declarations: [PoopIconComponent, PoopIconOneComponent, PoopIconTwoComponent, PoopIconThreeComponent, PoopIconFourComponent, PoopIconFiveComponent, PoopIconSixComponent],
    exports: [
        PoopIconComponent
    ],
    imports: [
        CommonModule
    ]
})
export class PoopIconModule { }
