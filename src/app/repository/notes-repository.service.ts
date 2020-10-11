import { Injectable } from '@angular/core'
import { Note, NotesWrapper } from '../models/note'
import { Observable, of, zip } from 'rxjs'
import { flatMap, map, tap } from 'rxjs/operators'
import { NoteDelete } from '../models/note-delete'

@Injectable({
  providedIn: 'root'
})
export class NotesRepositoryService {

  KEY_NOTES = 'notes'
  KEY_NOTE_DELETED = 'note.deleted'

  constructor() {
  }

  getActiveNotes = () => {
    return zip(this.getNotes(), this.getDeletedNotesModel()).pipe(
      flatMap((both: any[]) => {
        const notes = (both[0] as NotesWrapper).notes
        const deletedId = (both[1] as NoteDelete[]).map(it => it.id)
        const filteredNotes = notes.filter(note => (deletedId.findIndex(id => id === note.id)) < 0)
        if (filteredNotes.length === 0) {
          return of([new Note()])
        }
        return of(filteredNotes)
      })
    )
  }

  getDeletedNotes = () => {
    return zip(this.getNotes(), this.getDeletedNotesModel()).pipe(
      flatMap((both: any[]) => {
        const notes = (both[0] as NotesWrapper).notes
        const deletedId = (both[1] as NoteDelete[]).map(it => it.id)
        const filteredNotes = notes.filter(note => (deletedId.findIndex(id => id === note.id)) > -1)
        return of(filteredNotes)
      })
    )
  }

  private getNotes = (): Observable<NotesWrapper> => {
    const str = localStorage.getItem(this.KEY_NOTES)
    const notesWrapper = str ? JSON.parse(str) as NotesWrapper : new NotesWrapper()
    if (notesWrapper.notes.length === 0) {
      notesWrapper.notes.push(new Note())
    }
    return of<NotesWrapper>(notesWrapper)
  }

  deleteNote = (id: string) => {
    return this.getDeletedNotesModel().pipe(
      tap((notes: NoteDelete[]) => notes.push(new NoteDelete(id))),
      tap((notes: NoteDelete[]) => localStorage.setItem(this.KEY_NOTE_DELETED, JSON.stringify(notes)))
    )
  }

  getDeletedNotesModel = () => {
    const str = localStorage.getItem(this.KEY_NOTE_DELETED)
    const temp = str ? JSON.parse(str) as NoteDelete[] : []
    return of<NoteDelete[]>(temp)
  }

  addNote = (note: Note) => this.getNotes().pipe(
    tap((wrapper: NotesWrapper) => wrapper.notes.unshift(note)),
    tap((wrapper: NotesWrapper) => this.saveAllNotes(wrapper))
  )

  updateNote = (note: Note) => {
    const reducer = (accumulator: Note[], currentNote: Note) => {
      accumulator.push(currentNote.id === note.id ? note : currentNote)
      return accumulator
    }
    return this.getNotes().pipe(
      map((wrapper: NotesWrapper) => {
        const notes = wrapper.notes.reduce(reducer, [])
        const tempWrapper = new NotesWrapper()
        tempWrapper.notes = notes
        return tempWrapper
      }),
      tap((wrapper: NotesWrapper) => this.saveAllNotes(wrapper))
    )
  }

  private saveAllNotes = (wrapper: NotesWrapper) => localStorage.setItem(this.KEY_NOTES, JSON.stringify(wrapper))

  removeNoteForDeleteList = (id: string) => {
   return  this.getDeletedNotesModel().pipe(
      map((models: NoteDelete[]) => {
        const index = models.findIndex(it => it.id === id)
        if (index > -1) {
          models.splice(index, 1)
        }
        return models
      }),
      tap((models: NoteDelete[]) => localStorage.setItem(this.KEY_NOTE_DELETED, JSON.stringify(models)))
    )
  }
}
