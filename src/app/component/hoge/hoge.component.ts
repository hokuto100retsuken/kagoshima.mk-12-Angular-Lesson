import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-hoge',
  templateUrl: './hoge.component.html',
  styleUrls: ['./hoge.component.css']
})
export class HogeComponent implements OnInit {
  isShow = true;

  observableTimer() {
    const source = timer(1000, 2000);
    const abc = source.subscribe(val => {
      this.isShow = !this.isShow;
    });
  }

  loop: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.observableTimer();
  }
}
