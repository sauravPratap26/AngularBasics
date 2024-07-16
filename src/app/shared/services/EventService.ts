import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

interface Event {
  eventName: string;
  payload: any;
}

@Injectable({
    providedIn:'root'
})

export class EventService {
  private subject = new Subject<Event>();

  emit(eventName: string, payload: any) {
    this.subject.next({
      eventName,
      payload
    });
  }

  listen(eventName: string, cb: (event: any) => void) {
    this.subject.asObservable().subscribe((nextObj: Event) => {
      if (eventName === nextObj.eventName) {
        cb(nextObj.payload);
      }
    });
  }
}

// export default new EventService();