import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PhoneBookService } from 'src/app/services/phone-book.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
  addContactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private phoneBookService: PhoneBookService) {
    this.addContactForm = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      phoneNumber: [null, Validators.pattern('^\+254[0-9]{9}$')],
      email: [null, Validators.email],
      isEmergency: [null],
      isFavorite: [null]
    })
  }
    

  submitForm() {
    for (const i in this.addContactForm.controls) {
      this.addContactForm.controls[i].markAsDirty();
      this.addContactForm.controls[i].updateValueAndValidity();
    }
    this.phoneBookService.addContact(this.addContactForm.value);
  }
}
      

