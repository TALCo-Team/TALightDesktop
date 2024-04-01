import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotkeysService {
  
  private hotkeysSubject = new Subject<KeyboardEvent>();

  constructor( ) { }

  // method to emit keyboard events
  emitHotkeysEvent(event: KeyboardEvent) {
    this.hotkeysSubject.next(event);
  }

  // method to subscribe to hotkeys events
  registerHotkeysEvents(): Observable<KeyboardEvent> {
    return this.hotkeysSubject.asObservable();
  }
}
