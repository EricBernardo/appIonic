import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  data = '';

  constructor(private authService: AuthService, private storage: Storage, private toastController: ToastController) { }

  ngOnInit() {
  }

  loadSpecialInfo() {
    this.authService.getSpecialData().subscribe(res => {
      this.data = res['data']['name'];
    });
  }

  logout() {
    this.authService.logout();
  }

  clearToken() {
    // ONLY FOR TESTING!
    this.storage.remove('access_token');

    let toast = this.toastController.create({
      message: 'JWT removed',
      duration: 3000
    });
    toast.then(toast => toast.present());
  }

}
