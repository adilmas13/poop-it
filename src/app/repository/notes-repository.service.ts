import { Injectable } from '@angular/core'
import { makeDefault, Note, NotesWrapper } from '../models/note'
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class NotesRepositoryService {

  KEY_NOTES = 'notes'
  KEY_NOTE_SELECTED = 'note.selected'

  constructor() {
  }

  getNotes = (): Observable<NotesWrapper> => {
    const notes = localStorage.getItem(this.KEY_NOTES)
    if (notes == null) {
      const newNote = this.createAndAddNote()
      localStorage.setItem(this.KEY_NOTE_SELECTED, newNote.id)
      return of(JSON.parse(localStorage.getItem(this.KEY_NOTES)) as NotesWrapper)
    }
    return of(JSON.parse(notes) as NotesWrapper)
  }

  createAndAddNote = () => {
    const note = makeDefault()
    const wrapper = new NotesWrapper()
    wrapper.notes = [note]
    localStorage.setItem(this.KEY_NOTES, JSON.stringify(wrapper))
    return note
  }

  getSelectedNote = () => of(localStorage.getItem(this.KEY_NOTE_SELECTED))

  saveToStorage(notes: Note[]) {
    const wrapper = new NotesWrapper()
    wrapper.notes = notes
    localStorage.setItem(this.KEY_NOTES, JSON.stringify(wrapper))
  }

  setSelectedNote = (id: string) => localStorage.setItem(this.KEY_NOTE_SELECTED, id)
}
