import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css']
})
export class CounterPageComponent implements OnInit {
  /*
   app/component 配下に 'ng g component counter' でコンポーネントを作成しよう
   */

  constructor() { }

  ngOnInit(): void {
  }

}
