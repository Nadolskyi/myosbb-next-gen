import {Component, OnInit} from '@angular/core';
import {
  Http,
  Response
} from '@angular/http';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { SubTicketService } from './subticket.service';
import { LoginService } from '../../../common/login/login.service';


@Component({
  selector: 'ticket',
  styleUrls: ['../../../../assets/css/manager.page.layout.scss'],
  templateUrl: './subticket.component.html',
  providers: [ SubTicketService, LoginService ]
})

export class SubTicketComponent implements OnInit {
  public resData: any;
  public ticket: any;
  public index: any;
  public title: string = 'Subticket';
  constructor(
    private http: Http,
    public login: LoginService,
    public ticketService: SubTicketService,
    public router: Router,
    public activeRoute: ActivatedRoute
  ) {  }
  public ngOnInit() {
    // this.contract.getTicketData().subscribe(data => {
    //   this.resData = data;
    // })
    this.activeRoute.params.subscribe((params)=> {
      this.index = +params['id'];
      // console.log(this.index);
      this.ticketService.getTicketData(this.index)
        .subscribe(data => {
          this.ticket = data;
          // console.log(house)
        })
      })

  };


}
