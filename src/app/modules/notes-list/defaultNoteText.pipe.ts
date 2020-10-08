import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'defaultNoteText'
})
export class DefaultNoteTextPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    const sanitizedString = value.trim()
    return sanitizedString.length > 0 ? sanitizedString : args[0] as string
  }

}
