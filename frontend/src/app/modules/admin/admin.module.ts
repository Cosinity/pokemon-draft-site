import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule, routedComponents } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ForfeitComponent } from './forfeit/forfeit.component';
import { MatchManagementComponent } from './match-management/match-management.component';
import { CoachManagementComponent } from './coach-management/coach-management.component';
import { LeagueSettingsComponent } from './league-settings/league-settings.component';


@NgModule({
  declarations: [
    AdminComponent,
    ForfeitComponent,
    MatchManagementComponent,
    CoachManagementComponent,
    LeagueSettingsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports: [
    routedComponents
  ]
})
export class AdminModule { }
