// messagelist.component.ts
//hypothetical example

import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { OktaAuthService } from '@okta/okta-angular';
import 'rxjs/Rx';

interface Message {
   date: String,
   text: String
}

@Component({
  template: `
    <div *ngIf="messages.length">
      <li *ngFor="let message of messages">{{message.message}}</li>
    </div>
  `
})
export class MessageListComponent implements OnInit{
  messages: Array<Message> [];

  constructor(private oktaAuth: OktaAuthService, private http: Http) {
    this.messages = [];
  }

  async ngOnInit() {
    const accessToken = await this.oktaAuth.getAccessToken();
    const headers = new Headers({
      Authorization: 'Bearer ' + accessToken
    });
    // Make request
    this.http.get(
      'https://comp586fullstack-env.fn2pvausuv.us-west-2.elasticbeanstalk.com/api/messages',
      new RequestOptions({ headers: headers })
    )
    .map(res => res.json())
    .subscribe((messages: Array<Message>) => messages.forEach(message => this.messages.push(messages)));
  }
}