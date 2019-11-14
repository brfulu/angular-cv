import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared';
import { CvSectionComponent } from './cv-section/cv-section.component';
import { CvItemComponent } from './cv-item/cv-item.component';



@NgModule({
  declarations: [HomeComponent, CvSectionComponent, CvItemComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule]
})
export class HomeModule { }
