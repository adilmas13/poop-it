import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { AppStore } from './app-store.service'
import { AngularFireAnalytics } from '@angular/fire/analytics'
import { zeroWidthAnimation } from './animations/zero-width-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [AppStore],
  animations: [zeroWidthAnimation]
})
export class AppComponent implements OnInit {

  constructor(public store: AppStore, private analytics: AngularFireAnalytics) {
  }

  ngOnInit(): void {
    this.store.getNotes()
    this.analytics.logEvent('time-to-poop').then().catch()
  }
}
