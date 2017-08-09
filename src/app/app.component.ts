import { Component } from '@angular/core';

export class User {
  username: string = "";
  password:string = "";
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ADP Intelligent Queue System';
  otherFactors= 'Lets Check Again !!!!';
  user:User = new User();

  submit(): void {
    console.log("On Submit parameters to submit are : "  + JSON.stringify(this.user) );
    this.user = new User();
  }
}
