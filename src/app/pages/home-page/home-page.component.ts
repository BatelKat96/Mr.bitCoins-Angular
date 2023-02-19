import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  constructor(private userService: UserService) { }

  user!: User


  ngOnInit(): void {

    this.user = this.userService.getUser()
    // console.log('this.contacts$:', this.contacts$.source._value)

  }
}
