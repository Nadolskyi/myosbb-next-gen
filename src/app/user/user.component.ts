import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
    selector: 'my-user',
    templateUrl: './user.component.html',

})
export class UserComponent implements OnInit {

  public ngOnInit() {
    console.log('hello `User` component');
  }

}
