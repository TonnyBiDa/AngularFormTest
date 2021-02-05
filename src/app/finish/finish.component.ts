import {Component} from '@angular/core';
import {FormService} from '../../services/formService';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.sass']
})
export class FinishComponent {

  constructor(private formService: FormService) {
    this.formService.status = 'init';
  }


}
