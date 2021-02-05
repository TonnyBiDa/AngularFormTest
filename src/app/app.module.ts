import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {FormComponent} from './form/form.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {FormService} from '../services/formService';
import {HttpClientModule} from '@angular/common/http';
import {DatePipe} from '@angular/common';
import {FinishComponent} from './finish/finish.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {AuthGuardService} from '../services/authService';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FinishComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [FormService, AuthGuardService, DatePipe, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
