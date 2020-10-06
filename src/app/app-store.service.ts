import { Injectable } from '@angular/core'
import { makeDefault, Note } from './models/note'
import { BaseStore } from './store/base-store'
import { NotesRepositoryService } from './repository/notes-repository.service'
import { zip } from 'rxjs'

class AppState {
  notes: Note[]
  selectedNote: Note
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

  save = () => {
    this.repository.saveToStorage(this.state.notes)
  }

  onAddNote = () => {
    const newNote = makeDefault()
    this.state.notes.unshift(newNote)
    this.setState({
      notes: this.state.notes,
      selectedNote: newNote
    })
    this.repository.saveToStorage(this.state.notes)
    this.repository.setSelectedNote(this.state.selectedNote.id)
  }

  onNoteSelected = (index: number) => {
    const temp = this.state.notes[index]
    this.setState({selectedNote: temp})
    this.repository.setSelectedNote(temp.id)
  }
}
