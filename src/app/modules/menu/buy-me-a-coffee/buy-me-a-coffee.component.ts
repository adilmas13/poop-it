import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-buy-me-a-coffee',
  templateUrl: './buy-me-a-coffee.component.html',
  styleUrls: ['./buy-me-a-coffee.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuyMeACoffeeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  onLogoClicked = ($event: MouseEvent) => {
    window.open(environment.buyMeACoffeeLink, '_blank');
    $event.stopPropagation();
  };
}
