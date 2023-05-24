import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a routerLink="/employee">Employee</a>
      <a routerLink="/departments">Departments</a>
      <a routerLink="/roles">Roles</a>
    </nav>
   
  `,
  styles: [
    `
    nav {
      background: #333;
      padding: 10px;
    }
    a {
      color: #fff;
      text-decoration: none;
      margin-right: 10px;
    }
    `
  ]
})
export class AppComponent {
  title = 'EmployeeManager';
}
