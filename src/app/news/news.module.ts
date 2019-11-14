import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { NewsRoutingModule } from './news-routing.module';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsCardComponent } from './news-card/news-card.component';



@NgModule({
  declarations: [NewsComponent, NewsListComponent, NewsCardComponent],
  imports: [CommonModule, NewsRoutingModule]
})
export class NewsModule { }
