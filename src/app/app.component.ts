import { Component, OnInit } from '@angular/core';
import { AppStore } from './app-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppStore]
})
export class AppComponent implements OnInit {

  constructor(public store: AppStore) {
  }

  ngOnInit(): void {
    this.store.getNotes()
  }
}
