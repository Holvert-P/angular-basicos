import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = [
    'Aquaman',
    'Superman',
    'Batman',
    'Flash',
    'Wonder',
    'Joker',
    'Spiderman',
  ];
  HeroDeletes: string[] = [];
  deleteHero(hero: string) {
    const index = this.heroes.indexOf(hero);
    if (index > -1) {
      this.heroes.splice(index, 1);
      this.HeroDeletes.push(hero);
    }
  }
}
