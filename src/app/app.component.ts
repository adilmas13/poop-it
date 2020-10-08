import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { AppStore } from './app-store.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush,
  providers: [AppStore]
})
export class AppComponent implements OnInit {

  constructor(public store: AppStore) {
  }

  ngOnInit(): void {
    this.store.getNotes()
  }
}
