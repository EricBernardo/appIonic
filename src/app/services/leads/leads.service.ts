import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { AuthService } from './../auth.service';

@Injectable({
    providedIn: 'root'
})
export class LeadsService {

    url = environment.url;
    details = [];

    constructor(public httpClient: HttpClient, public storage: Storage, public authService: AuthService) { }

    getAll(page) {

        let url = this.url + 'leads/' + 79;

        let params = new HttpParams();

        params = params.append('page', page);

        return this.httpClient.get(url, { params }).pipe(
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
