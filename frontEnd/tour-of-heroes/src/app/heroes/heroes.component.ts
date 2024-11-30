import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Hero } from './Hero';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../services/hero/hero.service';
import { MessageService } from '../services/message/message.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [HeroDetailComponent, NgFor, RouterLink],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  constructor( private heroService : HeroService,  public messageService : MessageService){}
  heroes : Hero[] = [];
  selectedHero? : Hero;
  ngOnInit(){
    this.getHeroes();
  }
  getHeroes():void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
