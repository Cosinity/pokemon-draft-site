import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/core/services/team.service';
import { SeasonRoster } from 'src/app/shared/models/season-roster.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  public roster: SeasonRoster | null = null;

  constructor(
    private teamService: TeamService
  ) { }

  ngOnInit(): void {
    this.roster = this.teamService.getRoster(1, 1);
  }

}
