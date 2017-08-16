/**
 * New typescript file
 */
import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable()
export class MenuService {
  @Output() addToggleEvent: EventEmitter<any> = new EventEmitter();
  change() {
    console.log('change started');
     this.addToggleEvent.emit(true);
   }

   getEmittedValue() {
     return this.addToggleEvent;
   }
}
