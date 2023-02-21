import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
    selector: 'contact-details',
    templateUrl: './contact-details.component.html',
    styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

    constructor(
        private contactService: ContactService,
        private route: ActivatedRoute,
        private router: Router) { }


    contact!: Contact
    subscription!: Subscription

    async ngOnInit() {
        this.subscription = this.route.data.subscribe(data => {
            this.contact = data['contact']
        })

        // this.subscription = this.route.params.subscribe(async params => {
        //     const pet = await lastValueFrom(this.contactService.getById(params['id']))
        //     this.contact = pet
        // })
    }


    onBack() {
        this.router.navigateByUrl('/contacts')
    }

}
