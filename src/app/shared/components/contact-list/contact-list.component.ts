import { Component, OnInit } from '@angular/core';
import { Contact, Contacts, NewContact } from '@capacitor-community/contacts';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {

 contacts: Observable<Contact[]>;

  constructor() { }

  ngOnInit() {
    this.getContacts();
  }

  async getPermissions(): Promise<void> {

    Contacts.getPermissions();
  }

  async getContacts(): Promise<void> {
    console.log('tesbutton clicked');
    Contacts.getContacts().then(result => {
      console.log('result is:' , result);
      const phoneContacts: Contact[] = result.contacts;
      this.contacts = of(phoneContacts);

    });
  }
}
