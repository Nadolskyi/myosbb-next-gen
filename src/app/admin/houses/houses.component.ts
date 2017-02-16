import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Response } from "@angular/http";
import mockData from "../../../assets/mock-data/houses.json";


@Component({
  selector: 'houses',
  templateUrl: './houses.html',
  styleUrls: ['../styleTables.css'],
})
export class HousesComponent implements OnInit {
console.log(mockData);
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
