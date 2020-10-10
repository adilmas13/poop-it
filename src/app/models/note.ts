export class Note {
  id: string
  title: string
  body: string
  locked: boolean
  createdOn: number
  isTitleVisible: boolean

  constructor() {
    const time = Date.now()
    this.id = time.toString()
    this.title = ''
    this.body = ''
    this.locked = false
    this.createdOn = time
    this.isTitleVisible = false
  }
}

export class NotesWrapper {
  notes: Note[]

  constructor() {
    this.notes = []
  }
}

