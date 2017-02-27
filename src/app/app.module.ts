import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
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
import { ContactsComponent } from './components/contacts';
import { BreadcrumbComponent } from './components/breadcrumb';
import { SidebarComponent } from './shared/sidebar';
import { SubTicketComponent } from './components/ticket/components/subticket';

import { ModalModule } from 'ng2-bootstrap';

import {AdminComponent} from "./adminComponent/admin.component";
import {UserComponent} from "./userComponent/user.component";
import {ManagerComponent} from "./managerComponent/manager.component";
import { CapitalizeFirstLetterPipe } from '../assets/pipes/capitalize.firstletter';
import { TicketAddFormComponent } from './components/ticket/components/ticketAddFormComponent/ticket-add-form.component';
import { TicketEditFormComponent } from './components/ticket/components/ticketEditFromComponent/ticket-edit-form.component';
import { TicketDelFormComponent } from './components/ticket/components/ticketDelFormComponent/ticket-del-form.component'
import { TicketEditDiscussedFormComponent } from './components/ticket/components/ticketEditDistFormComponent/ticket-editdiscussed-form.component';
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
    ContactsComponent,
    BreadcrumbComponent,
    CalendarComponent,
    ProviderComponent,
    OsbbBillsComponent,
    ContractsComponent,
    TicketComponent,
    SidebarComponent,
    SubTicketComponent,
    CapitalizeFirstLetterPipe,
    TicketAddFormComponent,
    TicketEditFormComponent,
    TicketDelFormComponent,
    TicketEditDiscussedFormComponent
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule.forRoot(),
    RouterModule.forRoot(ROUTES, { useHash: false, preloadingStrategy: PreloadAllModules })
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS
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
