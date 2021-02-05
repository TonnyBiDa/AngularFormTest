import {Component} from '@angular/core';
import {slider} from './routerAnimation';
import {RouterOutlet} from '@angular/router';
import {FormService} from '../services/formService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [slider]
})
export class AppComponent {

  constructor(public formService: FormService) {
  }

  prepareRoute(outlet: RouterOutlet): any {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData[`animation`];
  }

}
