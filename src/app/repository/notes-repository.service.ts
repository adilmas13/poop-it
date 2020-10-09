import { Injectable } from '@angular/core'
import { makeDefault, Note, NotesWrapper } from '../models/note'
import { Observable, of, zip } from 'rxjs'
import { flatMap, tap } from 'rxjs/operators'
import { NoteDelete } from '../models/note-delete'

@Injectable({
  providedIn: 'root'
})
export class NotesRepositoryService {

  KEY_NOTES = 'notes'
  KEY_NOTE_SELECTED = 'note.selected'
  KEY_NOTE_DELETED = 'note.deleted'

  constructor() {
  }

  getActiveNotes = () => {
    return zip(this.getNotes(), this.getDeletedNotes()).pipe(
      flatMap((both: any[]) => {
        const notes = (both[0] as NotesWrapper).notes
        const deletedId = (both[1] as NoteDelete[]).map(it => it.id)
        const filteredNotes = notes.filter(note => (deletedId.findIndex(id => id === note.id)) < 0)
        if (filteredNotes.length === 0) {
          return of([this.createAndAddNote()])
        }
        return of(filteredNotes)
      })
    )
  }

  getNotes = (): Observable<NotesWrapper> => {
    const notes = localStorage.getItem(this.KEY_NOTES)
    if (notes == null) {
      const newNote = this.createAndAddNote()
      localStorage.setItem(this.KEY_NOTE_SELECTED, newNote.id)
      return of(JSON.parse(localStorage.getItem(this.KEY_NOTES)) as NotesWrapper)
    }
    const wrapper = JSON.parse(notes) as NotesWrapper
    if (wrapper.notes.length === 0) {
      const newNote = this.createAndAddNote()
      localStorage.setItem(this.KEY_NOTE_SELECTED, newNote.id)
      return of(JSON.parse(localStorage.getItem(this.KEY_NOTES)) as NotesWrapper)
    } else {
      return of(JSON.parse(notes) as NotesWrapper)
    }
  }

  createAndAddNote = () => {
    const note = makeDefault()
    const wrapper = new NotesWrapper()
    wrapper.notes = [note]
    localStorage.setItem(this.KEY_NOTES, JSON.stringify(wrapper))
    return note
  }

  saveToStorage(notes: Note[]) {
    const wrapper = new NotesWrapper()
    wrapper.notes = notes
    localStorage.setItem(this.KEY_NOTES, JSON.stringify(wrapper))
  }

  setSelectedNote = (id: string) => localStorage.setItem(this.KEY_NOTE_SELECTED, id)

  deleteNote = (id: string) => {
    return this.getDeletedNotes().pipe(
      tap((notes: NoteDelete[]) => notes.push(new NoteDelete(id))),
      tap((notes: NoteDelete[]) => localStorage.setItem(this.KEY_NOTE_DELETED, JSON.stringify(notes)))
    )
  }

  getDeletedNotes = () => {
    const str = localStorage.getItem(this.KEY_NOTE_DELETED)
    const temp = str ? JSON.parse(str) as NoteDelete[] : []
    return of<NoteDelete[]>(temp)
  }
}
