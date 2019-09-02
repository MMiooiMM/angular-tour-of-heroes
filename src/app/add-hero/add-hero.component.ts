import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit {
  heroes: Hero[];
  name: string;
  alterEgo?: string;
  power: string;
  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  onSubmit() {
    this.heroService.addHero({
      name: this.name.trim(),
      level: 1,
      power: this.power,
      alterEgo: this.alterEgo
    } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
}
