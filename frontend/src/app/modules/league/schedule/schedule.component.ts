import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/core/services/match.service';
import { Match } from 'src/app/shared/models/match.model';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  public schedule: Map<number, Match[]> = new Map<number, Match[]>();

  constructor(
    private matchService: MatchService
  ) { }

  ngOnInit(): void {
    this.schedule = this.matchService.getSchedule(1);
  }
}
