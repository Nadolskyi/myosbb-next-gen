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
import { LoginService } from '../../../shared/login/login.service';


@Component({
  selector: 'ticket',
  styleUrls: ['../../../../assets/css/manager.page.layout.scss'],
  template: `
<div class="content">
 <breadcrumb [header]="title"></breadcrumb>
        <button class="btn btn-default btn-xs">
               <a [routerLink]="['../']">asdas</a>
                      </button>
        <div >
        
            <div>
                {{'authorTicket'}}
                <button class="btn btn-default btn-xs">
                    {{ticket?.user.firstName}}
                    {{ticket?.user.lastName}}
                </button>
            </div>
            {{ticket?.time}}

        </div>


    <div class="panel-body" style="margin-bottom:50px">
        <div class="content-panel" style="margin-bottom:30px">
            <!--<div class="ui segment form">-->
                <!--<ticket-add-form (created)="createTicket($event)" #addForm></ticket-add-form>-->
                <!--<ticket-edit-form [ticket]="updatedTicket" (update)="editTicket($event)"-->
                                  <!--#editForm></ticket-edit-form>-->
                <!--<ticket-editdiscussed-form [ticket]="updatedTicket" (update)="editTicket($event)"-->
                                  <!--#editDiscussedForm></ticket-editdiscussed-form>-->
                <!--<ticket-del-form (delete)="deleteTicket($event)" #delForm></ticket-del-form>-->
            <!--</div>-->

            <div style="margin-bottom:20px">
                <div style="float: left;  margin-left: 10px;font-size:22px;"> {{ticket?.name}}</div>

                <div *ngIf=" ticket?.state == 'NEW' ">
                    <div class="liniya"><span class="label btn-round label-info "
                                              list="assign">{{ 'new'}}</span>
                    </div>
                    <button type="button" (click)="toUser(ticket?.assigned.userId)" class="btn btn-default btn-xs"
                            style="margin-top:-4px;margin-left:3px;margin-right:3px;"> {{ticket?.assigned.firstName}}
                        {{ticket?.assigned.lastName}}
                    </button>
                    <div class="liniya" class="btn-group">
                        <button style="margin-left:0px;margin-top:-9px" type="button"
                                class="label label-info btn btn-theme dropdown-toggle" data-toggle="dropdown">
                            {{'changeStatus'}} <span class="caret"></span>
                        </button>
                        <ul class="dropdown-menu" role="menu">
                            <li><a (click)="editState('IN_PROGRESS')">{{ 'in_progress' }}</a></li>
                            <li><a (click)="editState('DONE')">{{ 'done'  }}</a></li>
                        </ul>
                    </div>
                </div>

                <div *ngIf=" ticket?.state == '1' || ticket?.state == 'IN_PROGRESS'">
                    <div class="liniya"><span
                            class="label btn-round label-success">{{ 'in_progress'}}</span></div>
                    <button type="button" (click)="toUser(ticket?.assigned.userId)" class="btn btn-default btn-xs"
                            style="margin-top:-4px;margin-left:3px;margin-right:3px;"> {{ticket?.assigned.firstName}}
                        {{ticket?.assigned.lastName}}
                    </button>
                    <div class="liniya" class="btn-group">
                        <button style="margin-left:0px;margin-top:-9px" type="button"
                                class="label label-info btn btn-theme dropdown-toggle" data-toggle="dropdown">
                            {{'changeStatus'}} <span class="caret"></span>
                        </button>
                        <ul class="dropdown-menu" role="menu">
                            <li><a (click)="editState('DONE')">{{ 'done'}}</a></li>
                        </ul>
                    </div>
                </div>

                <div *ngIf=" ticket?.state == '2' || ticket?.state == 'DONE'">
                    <div class="liniya"><span class="label btn-round label-danger">{{ 'done'}}</span>
                    </div>

                    <button type="button" (click)="toUser(ticket?.assigned.userId)" class="btn btn-default btn-xs"
                            style="margin-top:-4px">
                        {{ticket?.assigned.firstName}} {{ticket?.assigned.lastName}}
                    </button>
                </div>

                <div style="float: right; width: 20%;margin-right: 10px;margin-top:-2%">

                    <div class="liniya" style="float: bottom;margin-right:20px">{{'statusUpdates'}}:
                        {{ticket?.stateTime | date:'fullDate' }}
                    </div>

                    <div class="liniya" style="float: right;margin-right:20px;">
                        <button class="btn btn-info" (click)="voteVar.openModalWindow()">
                            <i>{{'addVoting'}}</i>
                        </button>
                    </div>

                    <div class="dropdown" style="float: right; width: 20%;">
                        <button class="btn btn-default dropdown-toggle" style="float: left;" type="button" id="dropdownMenu1"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" >
                            {{'optionsTicket'}}
                            <span class="caret"></span>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                            <li><a style="cursor: pointer" (click)="editForm.initUpdatedTicket(ticket);editForm.openEditModal()">
                                {{'editTicket'}}</a></li>
                            <li><a style="cursor: pointer" (click)="delForm.openDelModal(ticket)">{{'deleteTicket'                         }}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <br/>
        </div>
        
         <div style="margin-left:5%;padding:10px;width:90%;border-radius:2px;">
            <p style="font-size:20px;">
                {{'description'}}:</p>
            <p style="font-size:18px; ">
                {{ticket?.description}}</p>
        </div>
        <br/>
        <div style="margin-left:5%;padding:10px;width:90%;border-radius:2px;">
            <p style="font-size:20px;">
                {{'deadline'}}:</p>
            <p style="font-size:18px;" *ngIf="ticket?.deadline!=null">
                {{'deadlineDate'}} - {{ticket?.deadline}}</p>
            <p style="font-size:18px;" *ngIf="ticket?.deadline==null">
                {{'notset'}}</p>
        </div>
        <br/>
        <div style="margin-left:5%;padding:10px;width:90%;border-radius:2px;" >
            <p style="font-size:20px;">
                {{'discussed'}}:</p>
            <p style="font-size:18px;" *ngIf="ticket?.discussed == null">{{'isNotDiscussed'}}</p>
                <button 
                        class="btn btn-success" (click)="editDiscussedForm.initUpdatedTicket(ticket);"
                                         style="margin-left:5px; float: left">{{'choosedate'}}
                </button>
            <p style="font-size:18px;" *ngIf="ticket?.discussed != null">{{'isDiscussed'}} {{ticket?.discussed}} </p>
                <button 
                        class="btn btn-success" (click) =" editDiscussedForm.initUpdatedTicket(ticket);"
                            style="margin-left:5px; float: left">{{'choosedate'}}
                </button>           
        </div>
        <br/>
        
        <div style=" width:100%; height:1px; clear:both;"></div>
        <div>
            <div class="attachmetTicket" *ngFor="let attachment of ticket?.attachments">
                <div *ngIf="attachment?.type =='IMAGE'">
                    <img src="{{attachment?.url}}" style="cursor: pointer;" (click)="showGallery(attachment)" alt="{{attachment?.fileName}}"
                         height="100" width="100">
                </div>
                <div *ngIf="attachment?.type !='IMAGE'">
                    <a style="cursor: pointer" href="{{attachment?.url}}">{{'file'}}</a>
                </div>
            </div>
        </div>
        <div style=" margin-bottom:20px;width:100%; height:1px; clear:both;"></div>

        <div class="row">
            <div class="col-lg-12">
                <!--<vote #voteVar></vote>-->
            </div>
        </div>

        <div style="padding:20px;margin-right:1.5%;box-shadow: 0px 0px 5px 0px #000000;">

            <div style="margin-bottom:70px;">
                <div name="editor1" class="text1 descr" style="margin-top:10px">{{'comment'}}:</div>
                <textarea class="area comm form-control " type="text" name="message"
                          value={{messText}} #message></textarea><br/><br/>
                <button class="btn btn-primary btn1">
                    <a class="link"
                       (click)="createMessage(message.value); message.value='' ">{{'send'}} </a>
                </button>
            </div>

            <a style="cursor:pointer" (click)="getComments()">
                <img src="http://www.clker.com/cliparts/2/9/c/f/13522312291232734589Down%20Arrow%20Button.svg.med.png"
                     width="30" height="30"/></a>
        </div>

        <div  class="modal fade" tabindex="-1" role="dialog"
             aria-labelledby="mySmallModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" style="background:none;height:90%; width:70%">

                <div class="galleryPrev" (click)="prev()"></div>
                <div class="galleryNext" (click)="next()"></div>
                <button type="button" class="close" (click)="closeGallery()" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <img src="{{currentAttachment?.url}}" (click)="next()" alt="{{currentAttachment?.fileName}}"
                     height="100%" width="100%">
            </div>
        </div>

        
        </div>
        </div>
`,
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
