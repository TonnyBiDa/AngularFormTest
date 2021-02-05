import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FormService {
  apiRoute;
  status = 'init';

  constructor(private httpClient: HttpClient) {
    this.apiRoute = 'https://bidoneapi.azurewebsites.net';
    // this.apiRoute = 'https://localhost:5001';
  }

  submitForm(data): Promise<any> {
    return this.httpClient.post(this.apiRoute + '/SubmitForm/', data).toPromise();
  }
}
