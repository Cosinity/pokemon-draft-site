import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CoachManagementComponent } from './coach-management/coach-management.component';
import { ForfeitComponent } from './forfeit/forfeit.component';
import { LeagueSettingsComponent } from './league-settings/league-settings.component';
import { MatchManagementComponent } from './match-management/match-management.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'match-management', component: MatchManagementComponent },
  { path: 'forfeit', component: ForfeitComponent },
  { path: 'coach-management', component: CoachManagementComponent },
  { path: 'league-settings', component: LeagueSettingsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

export const routedComponents = [AdminComponent, ForfeitComponent, MatchManagementComponent, CoachManagementComponent, LeagueSettingsComponent];
