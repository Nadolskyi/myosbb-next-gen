/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.scss',
    '../assets/css/default.style.scss'
  ],

  // template: `
  //   <nav class="black-bg">
  //     <a [routerLink]=" ['./'] "
  //       routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
  //       <i class="fa fa-home fa-lg" aria-hidden="true">
  //       <b>Наш Двір</b></i>
  //     </a>
  //   </nav>
  //   <main>
  //     <router-outlet class="container-fluid"></router-outlet>
  //   </main>
  // `
  templateUrl: './app.html'
})
export class AppComponent implements OnInit {
  public angularclassLogo = 'assets/img/favicon.ico';
  public name = 'Наш Двір';
  public url = 'https://twitter.com/AngularClass';

  constructor(
    public appState: AppState
  ) { }

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

