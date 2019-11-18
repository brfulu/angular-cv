import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cv-section',
  templateUrl: './cv-section.component.html',
  styleUrls: ['./cv-section.component.css']
})
export class CvSectionComponent implements OnInit {
  @Input() title: string;
  @Input() items: Array<Object>;

  constructor() { }

  ngOnInit() {

  }

}
