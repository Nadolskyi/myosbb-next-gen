import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'cabinet',
    templateUrl: './cabinet.component.html',
})
export class CabinetComponent implements OnInit {

  public ngOnInit() {
    console.log('hello `User` component');
  }

}
