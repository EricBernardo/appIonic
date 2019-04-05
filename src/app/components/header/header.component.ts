import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  public user: { name: null, email: null }

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserData().subscribe(res => {
      this.user = res['data'];
    });
  }

}
