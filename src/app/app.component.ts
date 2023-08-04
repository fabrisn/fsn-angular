import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userName = 'José';
  userData = {
    email:'jose@email.com',
    role: 'Admin'
  }
  title = 'fsn-angular';
}
