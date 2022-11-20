import { Injectable } from '@angular/core';
import { SeasonRoster } from 'src/app/shared/models/season-roster.model';
import data from '../../../assets/mock-data.json';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor() { }

  getRoster(userID: number, seasonID: number): SeasonRoster | null {
    return new SeasonRoster(data.rosters.find(o => o.ownerID === userID && o.seasonID === seasonID));
  }
}
