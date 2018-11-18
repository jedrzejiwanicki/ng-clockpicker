import { Component } from '@angular/core';
import { enterLeave } from '../../animations/enter-leave';
import { Observable, Subject } from 'rxjs';

const STATE_VISIBLE = 'visible';
const STATE_HIDDEN = 'hidden';

@Component({
  selector: 'ng-enter-leave',
  templateUrl: './enter-leave.component.html',
  styleUrls: ['./enter-leave.component.scss'],
  animations: [enterLeave],
})
export class EnterLeaveComponent{
  state = STATE_VISIBLE;
  requestCloseEmitter: Subject<boolean> = new Subject<boolean>();

  constructor() { }

  public requestClose(): Observable<boolean> {
    this.state = STATE_HIDDEN;
    return this.requestCloseEmitter.asObservable();
  }

  public onTransitionEnd({ toState }): void {
    if (toState === STATE_HIDDEN) {
      this.requestCloseEmitter.next(true);
    }
  }
}
