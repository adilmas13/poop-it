import { Injectable } from '@angular/core'
import { makeDefault, Note } from './models/note'
import { BaseStore } from './store/base-store'
import { NotesRepositoryService } from './repository/notes-repository.service'
import { Subject, zip } from 'rxjs'
import { debounceTime, distinctUntilChanged } from 'rxjs/operators'

class AppState {
  notes: Note[]
  selectedNote: Note
  isFullScreen = false
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

  getNotes = () => zip(this.repository.getNotes(), this.repository.getSelectedNote()).subscribe(
    (result) => this.onNotesSuccess(result)
  )

  private onNotesSuccess = (result: any[]) => this.setState({
    notes: result[0].notes,
    selectedNote: result[0].notes.find(it => it.id === result[1])
  })

  save = () => this.saveToStorage()

  onAddNote = () => {
    const newNote = makeDefault()
    this.state.notes.unshift(newNote)
    this.setState({
      notes: this.state.notes,
      selectedNote: newNote
    })
    this.saveToStorage()
    this.saveSelectedNoteToStorage(this.state.selectedNote.id)
  }

  onNoteSelected = (index: number) => {
    const temp = this.state.notes[index]
    this.setState({selectedNote: temp})
    this.saveSelectedNoteToStorage(temp.id)
  }

  private saveToStorage = () => this.repository.saveToStorage(this.state.notes)

  private saveSelectedNoteToStorage = (id: string) => this.repository.setSelectedNote(id)

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
}
