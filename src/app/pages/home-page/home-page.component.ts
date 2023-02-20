import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { BitCoinService } from 'src/app/services/bitcoin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  constructor(private userService: UserService, private bitcoinService: BitCoinService) { }

  user!: User
  rate!: number;

  async ngOnInit() {
    this.user = this.userService.getUser()
    this.rate = await this.bitcoinService.getRate()
  }
}
