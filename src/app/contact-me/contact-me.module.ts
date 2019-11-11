import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactMeComponent } from './contact-me.component';
import { ContactMeRoutingModule } from './contact-me-routing.module';



@NgModule({
  declarations: [ContactMeComponent],
  imports: [CommonModule, ContactMeRoutingModule]
})
export class ContactMeModule { }
