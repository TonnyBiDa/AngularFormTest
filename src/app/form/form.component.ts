import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {FormService} from '../../services/formService';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent{
  @Input() userDetails: FormGroup;
  cols = 2;
  minDate = new Date('1900-01-01');
  maxDate = new Date();

  constructor(private formBuilder: FormBuilder,
              private datePipe: DatePipe,
              private router: Router,
              public breakpointObserver: BreakpointObserver,
              private formService: FormService) {
    breakpointObserver.observe([
      Breakpoints.XSmall,
    ]).subscribe(result => {
      // if small device change cols number
      if (result.matches) {
        this.cols = 1;
      } else {
        this.cols = 2;
      }
    });
    this.userDetails = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
    });
  }


  onSubmit(): void {
    if (this.userDetails.valid) {
      this.formService.status = 'onSubmit';
      this.userDetails.value.dob = this.datePipe.transform(this.userDetails.value.dob, 'yyyy-MM-dd');
      this.formService.submitForm(this.userDetails.value).then(res => {
        if (res.isSuccess) {
          this.formService.status = 'finish';
          this.router.navigate(['/finish']);
        } else {
          this.formService.status = 'submitError';
          alert(res.errorMessage);
        }
      }).catch(err => {
        this.formService.status = 'submitError';
        alert(JSON.stringify(err));
      });
    }else{
      alert('Please fill in all fields');
    }
  }

}
