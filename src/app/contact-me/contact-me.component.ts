import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})

export class ContactMeComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      'firstName': [''],
      'lastName': [''],
      'email': new FormControl('', [Validators.required, Validators.email]),
      'message': ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit(data) {
    console.log(data);
    alert('Poruka poslata!');
    this.contactForm.reset();
  }

  get email() { return this.contactForm.get('email'); }

  get message() { return this.contactForm.get('message'); }

}
