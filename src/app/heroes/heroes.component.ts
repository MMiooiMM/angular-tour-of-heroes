import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../service/hero.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  private searchTerms = new BehaviorSubject<string>('');
  term: string;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      // distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }

  delete(hero: Hero): void {
    this.search();
    this.heroService.deleteHero(hero).subscribe();
  }

  clear(): void {
    this.term = '';
    this.search();
  }

  // Push a search term into the observable stream.
  search(): void {
    this.searchTerms.next(this.term);
  }
}
