import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages : string[] = [];
  add(message : string){
    this.messages.push(message);
  }
  public getMessages() : string[]{
    return this.messages;
  }
  clear(){
    this.messages = [];
  }
}
