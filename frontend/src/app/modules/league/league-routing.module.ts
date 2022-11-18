import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DraftComponent } from './draft/draft.component';
import { LeagueComponent } from './league.component';
import { RankingsComponent } from './rankings/rankings.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { TierListComponent } from './tier-list/tier-list.component';

const routes: Routes = [
  { path: '', component: LeagueComponent },
  { path: 'rankings', component: RankingsComponent },
  { path: 'draft', component: DraftComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'tier-list', component: TierListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeagueRoutingModule { }

export const routedComponents = [LeagueComponent, RankingsComponent, DraftComponent, ScheduleComponent, TierListComponent];
