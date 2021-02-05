import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {FormService} from './formService';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public router: Router, private formService: FormService) {
  }

  canActivate(): boolean {
    if (this.formService.status !== 'finish') {
      this.router.navigate(['form']);
      return false;
    }
    return true;
  }
}
