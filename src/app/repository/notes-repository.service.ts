import { Injectable } from '@angular/core';
import { makeDefault, NotesWrapper } from '../models/Note';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesRepositoryService {

  KEY_NOTES = 'notes';

  constructor() {
  }

  getNotes = (): Observable<NotesWrapper> => {
    const notes = localStorage.getItem(this.KEY_NOTES);
    if (notes == null) {
      this.createAndAddNote();
      return of(JSON.parse(localStorage.getItem(this.KEY_NOTES)) as NotesWrapper);
    }
    return of(JSON.parse(notes) as NotesWrapper);
  }

  createAndAddNote = () => {
    const note = makeDefault();
    const wrapper = new NotesWrapper();
    wrapper.notes = [note];
    localStorage.setItem(this.KEY_NOTES, JSON.stringify(wrapper));
  }

}
