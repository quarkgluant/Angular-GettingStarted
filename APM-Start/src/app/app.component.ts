import {Component} from '@angular/core';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent {
//   title = 'Angular: Getting Started';
// }

// import { Component } from '@angular/core'
// @Component({
//   selector: 'pm-root',
//   template: `
//     <div><h1>{{pageTitle}}</h1>
//     <div>My First Component</div>
//     </div>
//   `
// })

export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
