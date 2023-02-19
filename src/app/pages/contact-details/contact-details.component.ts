import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
    selector: 'contact-details',
    templateUrl: './contact-details.component.html',
    styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

    constructor(private contactService: ContactService) { }
    @Output() selectContact = new EventEmitter<string>()

    @Input() contactId!: string
    contact!: Contact | undefined

    async ngOnInit() {
        const contact = await lastValueFrom(this.contactService.getById(this.contactId))
        this.contact = contact
    }

    onSelectContactId() {

        this.selectContact.emit('')
    }
}
