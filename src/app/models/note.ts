export interface Note {
  id: string;
  title: string;
  body: string;
  locked: boolean;
  createdOn: number;
  isTitleVisible: boolean;
  isSelected: boolean;
}

export class NotesWrapper {
  notes: Note[]
}

export const makeDefault = (): Note => {
  const time = Date.now()
  return {
    id: time.toString(),
    title: 'New Note',
    body: 'No additional text',
    locked: false,
    createdOn: time,
    isTitleVisible: false,
    isSelected: true
  }
}

