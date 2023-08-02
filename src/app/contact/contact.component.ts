import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  showNameError: string = '';
  showEmailError: string = '';
  showMessageError: string = '';
  showNameMark: string = '';
  showEmailMark: string = '';
  showMessageMark: string = '';
  familyName: string = '';
  email: string = '';
  message: string = '';
  apiUrl: string = 'https://www.hefelmann.com/send_mail.php';
  disable: boolean = false;

  mail = {
    name: this.familyName,
    email: this.email,
    message: this.message
  }

  headers: any = new HttpHeaders()
    .append(
      'Content-Type',
      'application/json'
    );

  constructor(private dataService: DataService, private router: Router) { }


  checkMessage() {
    if (this.familyName == '') {
      this.showNameError = 'show';
      this.showNameMark = 'mark';
    }

    if (this.familyName != '') {
      this.showNameError = '';
      this.showNameMark = 'hook';
    }

    if (this.email == '') {
      this.showEmailError = 'show';
      this.showEmailMark = 'mark';
    }

    if (this.email != '') {
      this.showEmailError = '';
      this.showEmailMark = 'hook';
    }

    if (this.message == '') {
      this.showMessageError = 'show';
      this.showMessageMark = 'mark';
    }

    if (this.message != '') {
      this.showMessageError = '';
      this.showMessageMark = 'hook';
    }

    if (this.familyName != '' && this.email != '' && this.message != '') {
      this.disable = true;
      this.sendMail();
    }
  }

  sendMail() {
    let data = {
      name: this.familyName,
      email: this.email,
      message: this.message
    };

    this.dataService.postData(JSON.stringify(data)).subscribe(
      (response) => {
        console.log('Response:', response);
        this.router.navigateByUrl('message-sent');
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}





