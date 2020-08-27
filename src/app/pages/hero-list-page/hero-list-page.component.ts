import { Component, OnInit } from '@angular/core';
import { HEROES } from '../../models/mock-hero';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-hero-list-page',
  templateUrl: './hero-list-page.component.html',
  styleUrls: ['./hero-list-page.component.css']
})
export class HeroListPageComponent implements OnInit {
  heroes: Hero[] = HEROES;

  constructor() { }

  ngOnInit(): void {
  }

}
