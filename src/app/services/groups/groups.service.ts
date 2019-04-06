import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { environment } from './../../../environments/environment';
import { AuthService } from './../auth.service';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  url = environment.url;
  details = [];

  constructor(public httpClient: HttpClient, public authService: AuthService) { }

  getAll() {

    let url = this.url + 'groups';

    return this.httpClient.get(url).pipe(
      catchError(e => {
        let status = e.status;
        if (status === 401) {
          this.authService.showAlert('You are not authorized for this!');
          this.authService.logout();
        }
        throw new Error(e);
      })
    );

  }

}
