import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'app-poop-icon',
  templateUrl: './poop-icon.component.html',
  styleUrls: ['./poop-icon.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PoopIconComponent implements OnInit {

  icon = 1

  ngOnInit() {
    this.icon = Math.floor(Math.random() * 5)
  }

}
