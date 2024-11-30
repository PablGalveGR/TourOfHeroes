import { Component } from '@angular/core';
import { CommonModule, NgIf, NgFor, UpperCasePipe } from '@angular/common';
import { Hero } from './hero';
import { FormsModule } from '@angular/forms';
import { HEROESARRAY } from './heroes';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, FormsModule, NgFor, NgIf, UpperCasePipe],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes : Hero[] = HEROESARRAY;
  selectedHero ? : Hero;
  onSelect(hero : Hero){
    this.selectedHero = hero;
  }
  onClose(){
    this.selectedHero = undefined;
  }
}
