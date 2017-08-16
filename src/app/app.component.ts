import { MenuService } from './common/shared.services';
import { Component, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export class User {
  username = '';
  password = '';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(public router: Router, public menuService: MenuService) {
    this.menuService = menuService;
  }
  title = 'Store Managment System';
  otherFactors= 'Lets Check Again !!!!';
  user: User = new User();
  isAuthenticated= localStorage.getItem('role') ? true : false;

  submit(): void {
    console.log('On Submit parameters to submit are : '  + JSON.stringify(this.user) );
    this.user = new User();
  }
  logout(ev): void {
    ev.preventDefault();
    localStorage.removeItem('role');
    this.isAuthenticated = false;
    this.router.navigate(['login']);
  }

  ngOnInit(): void {
    this.menuService.addToggleEvent.subscribe(
      (showMenu) => {
        this.isAuthenticated = showMenu;
      }
   );
  }

}
