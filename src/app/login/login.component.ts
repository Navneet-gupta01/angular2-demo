/**
 * Created by navneetgupta on 8/8/17.
 */
import { Component } from '@angular/core';
import { User } from '../app.component';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent {

  user:User = new User();
  constructor(private http: HttpClient) {}

  submit(): void {
    console.log("On Submit parameters to submit are : "  + JSON.stringify(this.user) );
    //this.http.get('http://localhsot:8080/');
    this.user = new User();
  }
}
