import { Injectable } from '@angular/core'
import { makeDefault, Note } from './models/note'
import { BaseStore } from './store/base-store'
import { NotesRepositoryService } from './repository/notes-repository.service'
import { zip } from 'rxjs'

class AppState {
  notes: Note[]
  selectedNote: Note
  isFullScreen = false
}

@Injectable()
export class AppStore extends BaseStore<AppState> {

  constructor(private repository: NotesRepositoryService) {
    super(new AppState())
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
    isFullScreen : !this.state.isFullScreen
  })
}
