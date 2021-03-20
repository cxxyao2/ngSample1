import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    let id: string | null;
    id = '';

    if (this.route && this.route.snapshot && this.route.snapshot.paramMap) {
      id = this.route.snapshot.paramMap.get('id');
    }

    if (id) {
      this.heroService.getHero(+id).subscribe((hero) => {
        console.log('hiddddd,hero is  ', hero);
        this.hero = hero[0];
      });
    }
    console.log('hiero is ', this.hero);
  }

  goBack(): void {
    this.location.back();
  }
}
