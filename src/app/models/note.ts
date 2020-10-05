export interface Note {
  title: string;
  body: string;
  locked: boolean;
  createdOn: number;
  isTitleVisible: boolean;
  isSelected: boolean;
}

export class NotesWrapper {
  notes: Note[];
}

export const makeDefault = (): Note => {
  return {
    title: 'New Note',
    body: 'No additional text',
    locked: false,
    createdOn: Date.now(),
    isTitleVisible: false,
    isSelected: true
  };
};

