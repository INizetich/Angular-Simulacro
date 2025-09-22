import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {
  contactForm: FormGroup;
  name: FormControl
  email: FormControl
  message: FormControl

  constructor() {
    this.name = new FormControl('', Validators.required)
    this.email = new FormControl('', Validators.required)
    this.message = new FormControl('', Validators.required)

    this.contactForm = new FormGroup({
      name: this.name,
      email: this.email,
      message: this.message
    })
  }

  submitForm() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      // Podés mandar el form a un backend o servicio aquí
      this.contactForm.reset();
    }
  }
}
