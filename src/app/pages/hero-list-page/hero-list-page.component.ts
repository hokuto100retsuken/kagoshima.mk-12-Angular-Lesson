import { Component, OnInit } from '@angular/core';
import { HEROES } from '../../models/mock-hero';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-hero-list-page',
  templateUrl: './hero-list-page.component.html',
  styleUrls: ['./hero-list-page.component.css']
})
export class HeroListPageComponent implements OnInit {
  /*
  https://angular.jp/tutorial/toh-pt2 を参照してリスト表示をしてみよう
   */
  heroes: Hero[] = HEROES;

  constructor() { }

  ngOnInit(): void {
  }

}
