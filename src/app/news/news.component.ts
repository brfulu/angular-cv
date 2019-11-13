import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  doLike: Map<string, boolean> = new Map();

  constructor() { }

  ngOnInit() {
  }

  toggleLike(id) {
    let value = this.doLike.get(id);
    console.log(value);

    this.doLike.set(id, !value);
  }

}
