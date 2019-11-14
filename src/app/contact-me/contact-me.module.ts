import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactMeComponent } from './contact-me.component';
import { ContactMeRoutingModule } from './contact-me-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from './contact-form/contact-form.component';



@NgModule({
  declarations: [ContactMeComponent, ContactFormComponent],
  imports: [CommonModule, ContactMeRoutingModule, FormsModule, ReactiveFormsModule]
})
export class ContactMeModule { }
