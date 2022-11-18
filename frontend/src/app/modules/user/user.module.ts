import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routedComponents, UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { TeamComponent } from './team/team.component';


@NgModule({
  declarations: [
    UserComponent,
    TeamComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports: [
    routedComponents
  ]
})
export class UserModule { }
