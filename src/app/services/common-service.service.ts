import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  @Output() addItemClickEvent = new EventEmitter<any>();

  constructor() { }

  AddItem(){
    this.addItemClickEvent.emit();
  }
}
