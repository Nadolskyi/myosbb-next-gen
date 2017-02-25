import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import {
  NgModule,
  ApplicationRef
} from '@angular/core';
import {
  removeNgStyles,
  createNewHosts,
  createInputTransfer
} from '@angularclass/hmr';
import {
  RouterModule,
  PreloadAllModules
} from '@angular/router';

import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { FileSelectDirective, } from 'ng2-file-upload';
/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';
import { LoginComponent } from './shared/login';
import { AppHeader } from './shared/header';
import { WallComponent } from './components/wall';
import { HouseComponent } from  './components/house';
import { EventsComponent } from './components/events';
import { OsbbBillsComponent } from './components/osbbBils';
import { ContractsComponent } from  './components/contracts';
import { TicketComponent } from './components/ticket';
import { ProviderComponent } from './components/provider';
import { ApartmentComponent } from './components/apartment';
import { CalendarComponent } from './components/calendar';
import { BreadcrumbComponent } from './components/breadcrumb';
import { SidebarComponent } from './shared/sidebar';
import { SubTicketComponent } from './components/ticket/subticket';
import { SetLanguageComponent } from './shared/set-language/';
import { OsbbDocumentsAndReportsComponent } from './components/osbb-docs-and-reports';
import { OsbbContactsComponent } from './components/osbb-contacts';

import '../styles/styles.scss';
import '../styles/headings.css';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { ManagerComponent } from './manager/manager.component';

// pipes
import { CapitalizeFirstLetterPipe } from './pipes/capitalize-first-letter';

// services
import { OsbbService } from './services/osbb.service';
import { OsbbConstants } from './services/osbb.constants';
import { LoginService } from './shared/login/login.service';

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppHeader,
    AppComponent,
    LoginComponent,
    ManagerComponent,
    AdminComponent,
    UserComponent,
    WallComponent,
    HouseComponent,
    EventsComponent,
    ApartmentComponent,
    BreadcrumbComponent,
    CalendarComponent,
    ProviderComponent,
    OsbbBillsComponent,
    ContractsComponent,
    TicketComponent,
    SidebarComponent,
    SubTicketComponent,
    SetLanguageComponent,
    CapitalizeFirstLetterPipe,
    OsbbDocumentsAndReportsComponent,
    OsbbContactsComponent,
    FileSelectDirective
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
    TranslateModule.forRoot({
        provide: TranslateLoader,
        useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
        deps: [Http]
    }),
    ToasterModule
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS,
    ToasterService,
    OsbbService,
    OsbbConstants,
    LoginService
  ]
})
export class AppModule {

  constructor(
    public appRef: ApplicationRef,
    public appState: AppState
  ) {}

  public hmrOnInit(store: StoreType) {
    if (!store || !store.state) {
      return;
    }
    console.log('HMR store', JSON.stringify(store, null, 2));
    // set state
    this.appState._state = store.state;
    // set input values
    if ('restoreInputValues' in store) {
      let restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }

    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }

  public hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map((cmp) => cmp.location.nativeElement);
    // save state
    const state = this.appState._state;
    store.state = state;
    // recreate root elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // save input values
    store.restoreInputValues  = createInputTransfer();
    // remove styles
    removeNgStyles();
  }

  public hmrAfterDestroy(store: StoreType) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }

}
