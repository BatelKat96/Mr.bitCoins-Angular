import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent {
  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  contact!: Contact
  subscription!: Subscription

  ngOnInit(): void {
    this.subscription = this.route.data.subscribe(({ contact }) => {
      this.contact = contact || this.contactService.getEmptyContact() as Contact
    })
  }

  async onAddContact() {
    if (!this.contact.phone && !this.contact.email) {
      console.log('hhh:')
      this.router.navigateByUrl('/contacts')
      return
    }

    try {
      if (!this.contact.name) this.contact.name = 'Unknown'
      await lastValueFrom(this.contactService.save(this.contact))
      this.router.navigateByUrl('/contacts')
    } catch (err) {
      console.log('err:', err)
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
