import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class PhoneBookService {
  phoneBook: Contact[]= [];

  constructor()  {}

  listAllContacts(): Array<Contact> {
    return [...this.phoneBook]
  }

  getContactById(id:number): Contact|undefined {
    return this.phoneBook.find(contact => contact.id === id)
  }

  addContact(contact: Contact): Contact {
    contact.id = this.generateUniqueId();
    this.phoneBook.push(contact);
    return contact; 
  }
  editContact(id:number, property:keyof Contact, updatedValue:any): Contact {
    let targetContact = this.getContactById(id);

    if (targetContact !== undefined) {
      targetContact[property as keyof typeof targetContact] = updatedValue; 

    } 
  }

  deleteContact(id:number){

  }
  searchContact(id:number): Contact{

  }
  
generateUniqueId() {
let min = 100000
let max = 1000000
    return Math.random() * (min - max) + min;
}
}
