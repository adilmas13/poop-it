export class NoteDelete {
  id: string
  deleteTime: number

  constructor(id: string) {
    this.id = id
    this.deleteTime = Date.now()
  }
}
