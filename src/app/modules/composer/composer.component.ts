import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core'
import { Note } from '../../models/note'
import { Subject } from 'rxjs'
import { debounceTime, distinctUntilChanged } from 'rxjs/operators'

@Component({
  selector: 'app-composer',
  templateUrl: './composer.component.html',
  styleUrls: ['./composer.component.scss']
})
export class ComposerComponent implements OnInit, OnDestroy {

  @Input() note: Note
  @Output() save = new EventEmitter()
  isHeadlineButtonVisible = false
  textChanged: Subject<string> = new Subject<string>()

  constructor() {
    this.textChanged.pipe(
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe(model => {
      console.log('test', model)
      this.save.emit()
    })
  }

  ngOnInit() {
  }

  onTextChange($event) {
    this.textChanged.next($event)
  }

  ngOnDestroy(): void {
    this.textChanged.unsubscribe()
  }
}
