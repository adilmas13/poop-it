import { Injectable } from '@angular/core'
import { Note } from './models/note'
import { BaseStore } from './store/base-store'
import { NotesRepositoryService } from './repository/notes-repository.service'
import { zip } from 'rxjs'

class AppState {
  notes: Note[]
  selectedNote: string
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
    selectedNote: result[1]
  })

  save() {
    console.log(this.state.notes)
    this.repository.saveToStorage(this.state.notes)
  }
}
