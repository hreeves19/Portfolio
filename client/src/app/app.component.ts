import { Component, OnInit } from '@angular/core';
import { GeneralService } from './services/general.service';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client';

  constructor(
    private generalService: GeneralService
  ) { }

  ngOnInit() {
    this.generalService.testApi().pipe(take(1)).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
