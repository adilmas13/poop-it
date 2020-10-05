import { BehaviorSubject } from 'rxjs';

export class BaseStore<T> {

  readonly state$: BehaviorSubject<T>;

  constructor(initialState: T) {
    this.state$ = new BehaviorSubject<T>(initialState);
  }

  protected get state(): T {
    return this.state$.getValue();
  }

  protected setState = (newState: Partial<T>) => {
    // combines previous state with new state,
    // right value overrides the left. Any new attribute is appended to the object
    const merged = {...this.state, ...newState};
    this.state$.next(merged);
  };
}
