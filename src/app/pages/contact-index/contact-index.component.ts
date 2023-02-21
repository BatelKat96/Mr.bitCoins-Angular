import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
    selector: 'contact-index',
    templateUrl: './contact-index.component.html',
    styleUrls: ['./contact-index.component.scss']
})
export class ContactIndexComponent implements OnInit, OnDestroy {

    constructor(private contactService: ContactService) { }

    contacts!: Contact[]
    contacts$!: Observable<Contact[]>
    subscription!: Subscription

    ngOnInit(): void {
        this.contactService.query()
        this.contacts$ = this.contactService.contacts$

    }


    onRemoveContact(contactId: string) {
        this.contactService.remove(contactId)
    }
    ngOnDestroy(): void {
    }

}
