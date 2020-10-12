import { Injectable } from '@angular/core'
import { Note, NotesWrapper } from '../models/note'
import { Observable, of } from 'rxjs'
import { filter, flatMap, map, tap, toArray } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class NotesRepositoryService {

  private KEY_NOTES = 'notes'

  constructor() {
  }

  getActiveNotes = () => {
    return this.getNotes().pipe(
      flatMap((wrapper: NotesWrapper) => {
        const filteredNotes = wrapper.notes.filter((note: Note) => note.deleteTime === null)
        if (filteredNotes.length === 0) {
          const newNote = new Note()
          wrapper.notes.push(newNote)
          this.saveAllNotes(wrapper)
          return of([newNote])
        }
        return of(filteredNotes)
      })
    )
  }

  getDeletedNotes = () => {
    return this.getNotes().pipe(
      flatMap((wrapper: NotesWrapper) => wrapper.notes),
      filter((note: Note) => note.deleteTime !== null),
      toArray(),
      map((notes: Note[]) => notes.sort((a: Note, b: Note) => b.deleteTime - a.deleteTime))
    )
  }

  private getNotes = (): Observable<NotesWrapper> => {
    const str = localStorage.getItem(this.KEY_NOTES)
    const notesWrapper = str ? JSON.parse(str) as NotesWrapper : new NotesWrapper()
    if (notesWrapper.notes.length === 0) {
      notesWrapper.notes.push(new Note())
      this.saveAllNotes(notesWrapper)
    }
    return of<NotesWrapper>(notesWrapper)
  }

  deleteNote = (id: string) => {
    const reducer = (accumulator: Note[], currentNote: Note) => {
      if (currentNote.id === id) {
        currentNote.deleteTime = Date.now()
      }
      accumulator.push(currentNote)
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

  addNote = (note: Note) => this.getNotes().pipe(
    tap((wrapper: NotesWrapper) => wrapper.notes.unshift(note)),
    tap((wrapper: NotesWrapper) => this.saveAllNotes(wrapper))
  )

  updateTitle = (id: string, title: string) =>
    this.updateNote(id, (note: Note) => {
      note.title = title
    })

  updateBody = (id: string, body: string) =>
    this.updateNote(id, (note: Note) => {
      note.body = body
    })

  updateTitleVisibility = (id: string, isTitleVisible: boolean) =>
    this.updateNote(id, (note: Note) => {
      note.isTitleVisible = isTitleVisible
    })

  updateLock = (id: string, isLocked: boolean) =>
    this.updateNote(id, (note: Note) => {
      note.locked = isLocked
    })

  private updateNote = (id: string, block: (Note) => void) => {
    const reducer = (accumulator: Note[], currentNote: Note) => {
      if (currentNote.id === id) {
        block(currentNote)
      }
      accumulator.push(currentNote)
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
    const reducer = (accumulator: Note[], currentNote: Note) => {
      if (currentNote.id === id) {
        currentNote.deleteTime = null
      }
      accumulator.push(currentNote)
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
}
