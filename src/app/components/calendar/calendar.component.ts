import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events/events.service';
import { LoginService } from '../../shared/login/login.service';
import {
  Http,
  Response
} from '@angular/http';


@Component({
    templateUrl: './calendar.template.html',
    styleUrls: ['./calendar.style.css'],
    providers: [ EventsService, LoginService ]
})
export class CalendarComponent implements OnInit {
    public events: any[];
    public header: any;
    public es: any;
    public event: MyEvent;
    public dialogVisible: boolean = false;
    public idGen: number = 100;
    constructor(
	    public eventService: EventsService,
	    public http: Http,
	    public login: LoginService
    ) { }
    public ngOnInit() {
        this.events = [
            {
                "title": "Подія на цілий день",
                "start": "2017-02-01"
            },
            {
                "title": "Довга подія",
                "start": "2017-02-07",
                "end": "2017-02-10"
            },
            {
                "title": "Подія яка повторюється",
                "start": "2017-02-19T17:00:00"
            },
            {
                "title": "Подія яка повторюється",
                "start": "2017-02-19T19:00:00"
            }
        ];
        this.header = {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        };
        this.es = {
            dayNames: ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"],
            dayNamesShort: ["Нед", "Пон", "Вівт", "Сер", "Чет", "Пят", "Суб"],
            dayNamesMin: ["Нд","Пн","Вт","Ср","Чт","Пт","Сб"],
            monthNames: [ "Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень" ],
            monthNamesShort: [ "Січ", "Лют", "Бер", "Квіт", "Трав", "Черв","Лип", "Серп", "Вер", "Жовт", "Лист", "Груд" ]
        };
    }
    public handleDayClick(event) {
        this.event = new MyEvent();
        this.event.start = event.date.format();
        this.dialogVisible = true;
    }
    public loadEvents(event) {
        let start = event.view.start;
        let end = event.view.end;
    }
    public handleEventClick(e) {
        this.event = new MyEvent();
        this.event.title = e.calEvent.title;
        let start = e.calEvent.start;
        let end = e.calEvent.end;
        if (e.view.name === 'month') {
            start.stripTime();
        }
        if (end) {
            end.stripTime();
            this.event.end = end.format();
        }
        this.event.id = e.calEvent.id;
        this.event.start = start.format();
        this.event.allDay = e.calEvent.allDay;
        this.dialogVisible = true;
    }
    public saveEvent() {
        if (this.event.id) {
            let index: number = this.findEventIndexById(this.event.id);
            if (index >= 0) {
                this.events[index] = this.event;
            }
        } else {
            this.event.id = this.idGen;
            this.events.push(this.event);
            this.event = null;
        }
        this.dialogVisible = false;
    }
    public deleteEvent() {
        let index: number = this.findEventIndexById(this.event.id);
        if (index >= 0) {
            this.events.splice(index, 1);
        }
        this.dialogVisible = false;
    }
    public findEventIndexById(id: number) {
        let index = -1;
        for (let i = 0; i < this.events.length; i++) {
            if (id === this.events[i].id) {
                index = i;
                break;
            }
        }
        return index;
    }
}
export class MyEvent {
    public id: number;
    public title: string;
    public start: string;
    public end: string;
    public allDay: boolean = true;
}
