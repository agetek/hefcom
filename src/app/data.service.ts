import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

@Injectable({
  providedIn: 'root'
})
export class DataService {

  

  private apiUrl = 'https://henrik-hefelmann.developerakademie.net/test/send_mail.php';
  // private apiUrl = 'https://www.hefelmann.com/send/send_mail.php';

  constructor(private http: HttpClient) { }

  postData(data: any) {
    return this.http.post(this.apiUrl, data, httpOptions);
  }
}
