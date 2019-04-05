import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = environment.url;
  private $data = new Subject<any>();

  constructor(private httpClient: HttpClient) { }

  get(): any {
    return this.httpClient.get(this.url + 'me');
  }

  getUserData(): Observable<any> {
    return this.$data.asObservable();
  }

  setUserData(data: any): void {
    this.$data.next(data);
  }

}
