import {Component, OnInit} from "@angular/core";
// import { HouseShowComponent } from "house.show.component";
import {Http, Response } from '@angular/http';
import { myosbbLink } from '../../../shared/models/localhost.config';


@Component(
  {
    selector: 'manager-house-show',
    templateUrl: 'house-show.manager.html',
    styleUrls: ['../../../assets/css/manager.page.layout.scss', './house.scss']
  }
)
export class HouseShowManagerComponent implements OnInit{
  public resData: any;
  constructor(public http: Http) {}

  public ngOnInit() {

    this.http.get(`${myosbbLink}/restful/house/all`).subscribe(data => {
      // console.log(data);
      // data.
      this.resData = data.json();

    })
  }
  public responseVerif(res: Response) {
    this.resData = res.json();
  }
}
