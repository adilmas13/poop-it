import { Injectable } from '@angular/core'
import { Note } from './models/note'
import { BaseStore } from './store/base-store'
import { NotesRepositoryService } from './repository/notes-repository.service'

class AppState {
  notes: Note[]
}

@Injectable()
export class AppStore extends BaseStore<AppState> {

  constructor(private repository: NotesRepositoryService) {
    super(new AppState())
  }

  getNotes = () => this.repository.getNotes().subscribe(
    (result) => this.onNotesSuccess(result.notes)
  )

  private onNotesSuccess = (notes: Note[]) => this.setState({notes})
}
