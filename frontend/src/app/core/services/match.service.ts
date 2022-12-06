import { Injectable } from '@angular/core';
import { Match } from 'src/app/shared/models/match.model';
import { Schedule } from 'src/app/shared/models/schedule.model';
import data from '../../../assets/mock-data.json';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor() { }

  getSchedule(seasonID: number): Schedule {
    const schedule: Schedule = new Schedule({rounds: new Map<number, Match[]>()});

    // Get each match of the given season, grouped by round they take place in
    for (const match of data.matches) {
      if (match.seasonID === seasonID) {
        if (!schedule.rounds.has(match.round)) {
          schedule.rounds.set(match.round, []);
        }

        schedule.rounds.get(match.round)?.push(new Match(match));
      }
    }

    schedule.numRounds = schedule.rounds.size;
    return schedule;
  }
}
