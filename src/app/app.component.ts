import { Component, OnInit } from '@angular/core';
import { NotesRepositoryService } from './repository/notes-repository.service';
import { NotesWrapper } from './models/Note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private service: NotesRepositoryService) {
  }

  ngOnInit(): void {
    this.service.getNotes().subscribe(
      (value: NotesWrapper) => console.log(value.notes),
      err => console.log(err)
    );
  }
}
