import { Injectable } from '@angular/core';
import { Hero } from '../../heroes/Hero';
import { HEROESARRAY } from '../../heroes/heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from '../message/message.service';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService : MessageService) {console.log("Service inicialiced") }
  
  getHeroes() : Observable<Hero[]>{
    const heroes = of(HEROESARRAY);
    this.messageService.add('Heroes Service: Heroes fetched');
    return heroes;
  }
  getHero(id : number) : Observable<Hero>{
    const hero = HEROESARRAY.find(h => h.id === id)!;
    this.messageService.add('Heroes Service: Hero fetched ID: '+ hero.id + ' Name: ' + hero.name);
    return of(hero);
  }
}
