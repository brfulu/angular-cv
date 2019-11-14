import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  itemExpanded: Map<string, boolean> = new Map();

  constructor() { }

  ngOnInit() {
  }

  toggleElement(e) {
    let id = e.currentTarget.id;
    let expanded = this.itemExpanded.get(id);
    this.itemExpanded.set(id, !expanded);
  }

  isExpanded(id: string): boolean {
    if (!this.itemExpanded.has(id)) {
      this.itemExpanded.set(id, true);
    }
    return this.itemExpanded.get(id);
  }
}
