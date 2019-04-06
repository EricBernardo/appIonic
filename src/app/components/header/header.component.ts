import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { UserService } from './../../services/user/user.service';
import { ListGroupsComponent } from './../list-groups/list-groups.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  public user: { name: null, email: null }

  constructor(private userService: UserService, private popoverCtrl: PopoverController) { }

  ngOnInit() {
    this.userService.getUserData().subscribe(res => {
      this.user = res['data'];
    });
  }

  async listGroups(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: ListGroupsComponent,
      event: ev,
      animated: true,
      showBackdrop: true
    });
    return await popover.present();
  }

}
