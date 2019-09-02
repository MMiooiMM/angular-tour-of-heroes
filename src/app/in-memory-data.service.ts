import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice', power: 10 },
      { id: 12, name: 'Narco', power: 4 },
      { id: 13, name: 'Bombasto', power: 7 },
      { id: 14, name: 'Celeritas', power: 9 },
      { id: 15, name: 'Magneta', power: 2 },
      { id: 16, name: 'RubberMan', power: 3 },
      { id: 17, name: 'Dynama', power: 6 },
      { id: 18, name: 'Dr IQ', power: 7 },
      { id: 19, name: 'Magma', power: 9 },
      { id: 20, name: 'Tornado', power: 15 }
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
