import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cv-item',
  templateUrl: './cv-item.component.html',
  styleUrls: ['./cv-item.component.css']
})
export class CvItemComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  @Input() dateRange: string;
  expanded: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.expanded = !this.expanded;
  }

}
