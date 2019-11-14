import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;

  @Output() formSubmit = new EventEmitter();

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
    this.formSubmit.emit(data);
    this.contactForm.reset();
  }

  get email() { return this.contactForm.get('email'); }

  get message() { return this.contactForm.get('message'); }
}

