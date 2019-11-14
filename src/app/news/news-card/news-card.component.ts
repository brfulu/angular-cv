import { Component, OnInit, Input } from '@angular/core';
import { LikeService } from '../like.service';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {
  @Input() id: string;
  @Input() title: string;
  @Input() date: string;
  @Input() content: string;

  constructor(private likeService: LikeService) { }

  ngOnInit() {
  }

  toggleLike() {
    this.likeService.toggleLike(this.id);
  }

  doLike() {
    return this.likeService.doLike(this.id);
  }
}
