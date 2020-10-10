import { Injectable } from '@angular/core'
import { Note } from './models/note'
import { BaseStore } from './store/base-store'
import { NotesRepositoryService } from './repository/notes-repository.service'
import { Subject } from 'rxjs'
import { debounceTime, distinctUntilChanged } from 'rxjs/operators'

class AppState {
  notes: Note[]
  selectedNote: Note
  isFullScreen = false
  isDeleteMode = false
}

@Injectable()
export class AppStore extends BaseStore<AppState> {

  private titleTextChanged: Subject<string> = new Subject()
  private bodyTextChanged: Subject<string> = new Subject()

  constructor(private repository: NotesRepositoryService) {
    super(new AppState())
    this.titleTextChanged.pipe(
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe(_ => {
      this.save()
    })
    this.bodyTextChanged.pipe(
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe(_ => {
      this.save()
    })
  }

  getNotes = () => this.repository.getActiveNotes().subscribe(
    (result) => this.onNotesSuccess(result)
  )

  getDeletedNotes = () => this.repository.getDeletedNotes().subscribe(
    (result) => this.onNotesSuccess(result)
  )

  private onNotesSuccess = (notes: Note[]) => this.setState({
    notes,
    selectedNote: notes[0]
  })

  save = () => this.saveToStorage()

  onAddNote = () => {
    if (this.state.isDeleteMode) {
      return
    }
    const newNote = new Note()
    this.state.notes.unshift(newNote)
    this.setState({
      notes: this.state.notes,
      selectedNote: newNote
    })
    this.saveToStorage()
  }

  onNoteSelected = (index: number) => {
    const temp = this.state.notes[index]
    this.setState({selectedNote: temp})
  }

  private saveToStorage = () => this.repository.saveToStorage(this.state.notes)

  toggleFullScreen = () => this.setState({
    isFullScreen: !this.state.isFullScreen
  })

  toggleLock = () => {
    const temp = this.state.selectedNote
    temp.locked = !temp.locked
    this.setState({
      selectedNote: temp
    })
    this.save()
  }

  toggleTitleVisibility = () => {
    const temp = this.state.selectedNote
    temp.isTitleVisible = !temp.isTitleVisible
    this.setState({
      selectedNote: temp
    })
    this.save()
  }

  onTitleTextChange = ($event: KeyboardEvent) => {
    // @ts-ignore
    const text = $event.target.value
    this.titleTextChanged.next(text)
    const updated = {...this.state.selectedNote, title: text}
    this.setState({
      selectedNote: updated,
      notes: this.state.notes.map(it => it.id === updated.id ? updated : it)
    })
  }

  onBodyTextChange = ($event: KeyboardEvent) => {
    // @ts-ignore
    const text = $event.target.value
    this.bodyTextChanged.next(text)
    const updated = {...this.state.selectedNote, body: text}
    this.setState({
      selectedNote: updated,
      notes: this.state.notes.map(it => it.id === updated.id ? updated : it)
    })
  }

  destroy = () => {
    this.titleTextChanged.unsubscribe()
    this.bodyTextChanged.unsubscribe()
  }

  deleteNote = (id: string) => {
    this.repository.deleteNote(id).subscribe(
      () => this.getNotes()
    )
  }

  enableDeleteMode = () => {
    if (!this.state.isDeleteMode) {
      this.setState({
        isDeleteMode: true
      })
      this.getDeletedNotes()
    }
  }

  enableNotesMode = () => {
    if (this.state.isDeleteMode) {
      this.setState({
        isDeleteMode: false
      })
      this.getNotes()
    }
  }
}
