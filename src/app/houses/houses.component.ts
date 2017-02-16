import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Response } from "@angular/http";
import mockData from "../../assets/mock-data/houseDetail.json";


@Component({
  selector: 'house',
  templateUrl: './house.html',
  styleUrls: ['../styleTables.css'],
})
export class HousesAboutComponent implements OnInit {
  public localState: any;
  constructor(
    public route: ActivatedRoute
  ) {}

  public ngOnInit() {
    this.route
      .data
      .subscribe((data: any) => {
      this.mockData = mockData;
      });
  }
}
