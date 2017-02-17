import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
    selector: 'manager-sidebar-menu',
    styleUrls: ['./sidebar.style.css'],
    template: `
  <aside>
  <div id="sidebar" class="nav-collapse">
    <!-- sidebar menu start-->
    <ul class="sidebar-menu" id="nav-accordion">
       <!--OSBB -->
       <li class="dropdown">
        <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">
          <i class="fa fa-home"></i>
          <span>{{ 'osbb' }} <span class="caret animated"></span></span>
        </a>
        <ul class="dropdown-menu updown">
          <li><a [routerLink]="['osbb/contacts']">{{ 'contacts' }}</a></li>
          <li><a [routerLink]="['osbb/documents-and-reports']">{{ 'docs&reports' }}</a></li>  
          <li role="separator" class="divider"></li>
        </ul>
      </li>
      <!-- HOUSES -->
      <li class="sub-menu">
        <a [routerLink]="['house']">
          <i class="fa fa-home"></i>
          <span>{{ 'houses'}}</span>
        </a>
      </li>
      <!-- APARTMENTS -->
      <li class="sub-menu">
        <a [routerLink]="['apartment']">
          <i class="fa fa-building-o"></i>
          <span>{{ 'apartments'}}</span>
        </a>
      </li>
      <!-- CALENDAR -->
      <li class="sub-menu">
        <a [routerLink]="['calendar']">
          <i class="fa fa-calendar"></i>
          <span>{{ 'calendar'}}</span>
        </a>
      </li>
      <!-- EVENTS -->
       <li>
        <a [routerLink]="['events']">
          <i class="fa fa-bookmark"></i>
          <span> {{ 'events'}}</span>
        </a>
      </li>
      <!-- TICKETS -->
      <li class="sub-menu">
        <a [routerLink]="['ticket']">
          <i class="fa fa-ticket"></i>
          <span>{{'tickets'}}</span>
        </a>
      </li>
      <!-- BILLS -->
      <li class="sub-menu">
        <a [routerLink]="['osbb']">
          <i class="fa fa-credit-card-alt"></i>
          <span>{{'bills_osbb'}}</span>
        </a>
      </li>
      <!-- PROVIDERS -->
      <li class="sub-menu">
        <a [routerLink]="['provider']">
          <i class="fa fa-building"></i>
          <span>{{ 'providers' }}</span>
        </a>
      </li>
      <!-- CONTRACTS -->
      <li>
        <a [routerLink]="['contracts']">
          <i class="fa fa-bookmark"></i>
          <span> {{ 'contracts'}}</span>
        </a>
      </li>
      <li>
        <a [routerLink]="['wall']">
          <i class="fa fa-bookmark"></i>
          <span> {{ 'wall'}}</span>
        </a>
      </li>
       <li>
        <a [routerLink]="['contacts']">
          <i class="fa fa-bookmark"></i>
          <span> {{ 'contacts'}}</span>
        </a>
      </li>
    </ul>
  </div>

</aside>
`
    // pipes: [TranslatePipe, CapitalizeFirstLetterPipe]
})
export class ManagerSidebarMenuComponent {}
