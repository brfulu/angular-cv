import { Component, OnInit } from '@angular/core';
import { LikeService } from './like.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private likeService: LikeService) { }

  ngOnInit() {
  }

  toggleLike(id: string): void {
    this.likeService.toggleLike(id);
  }

  doLike(id: string): boolean {
    return this.likeService.doLike(id);
  }

}
