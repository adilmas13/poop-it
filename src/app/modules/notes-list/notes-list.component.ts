import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
