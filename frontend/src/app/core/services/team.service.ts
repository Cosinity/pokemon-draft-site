import { Injectable } from '@angular/core';
import { Roster } from 'src/app/shared/models/roster.model';
import data from '../../../assets/mock-data.json';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor() { }

  getRoster(userID: number, seasonID: number): Roster | null {
    return new Roster(data.rosters.find(o => o.ownerID === userID && o.seasonID === seasonID));
  }
}
