import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private readonly url = 'https://jsonplaceholder.typicode.com';
  constructor(private readonly httpClient: HttpClient) {}

  public getUsers(): Observable<any> {
    return this.httpClient.get(this.url + '/users');
  }
}
