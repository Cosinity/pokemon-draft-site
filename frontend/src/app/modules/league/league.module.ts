import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeagueRoutingModule, routedComponents } from './league-routing.module';
import { LeagueComponent } from './league.component';
import { RankingsComponent } from './rankings/rankings.component';
import { DraftComponent } from './draft/draft.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { TierListComponent } from './tier-list/tier-list.component';


@NgModule({
  declarations: [
    LeagueComponent,
    RankingsComponent,
    DraftComponent,
    ScheduleComponent,
    TierListComponent
  ],
  imports: [
    CommonModule,
    LeagueRoutingModule
  ],
  exports: [
    routedComponents
  ]
})
export class LeagueModule { }
