import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormComponent} from './form/form.component';
import {FinishComponent} from './finish/finish.component';
import {AuthGuardService} from '../services/authService';

const routes: Routes = [
  {path: 'form', component: FormComponent, data: {animation: 'isLeft'}},
  {path: 'finish', component: FinishComponent, data: {animation: 'isRight'}, canActivate: [AuthGuardService] },
  {
    path: '**',
    redirectTo: 'form',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
