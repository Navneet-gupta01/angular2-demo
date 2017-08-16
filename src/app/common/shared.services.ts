/**
 * New typescript file
 */
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class MenuService {
  addToggleEvent: EventEmitter<any> = new EventEmitter();
}
