import { Injectable } from '@angular/core';
import { Match } from 'src/app/shared/models/match.model';
import data from '../../../assets/mock-data.json';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor() { }

  getSchedule(seasonID: number): Map<number, Match[]> {
    const schedule: Map<number, Match[]> = new Map<number, Match[]>();

    // Get each match of the given season, grouped in order of what round they take place in
    const sortedSchedule: Match[][] = [];
    for (const match of data.matches) {
      if (match.seasonID === seasonID) {
        let isNewRound = true;
        for (const matchRound of sortedSchedule) {
          if (matchRound[0].round === match.round) {
            isNewRound = false;
            matchRound.push(new Match(match));
            break;
          }
        }

        if (isNewRound) {
          sortedSchedule.push([new Match(match)]);
        }

        sortedSchedule.sort((m1, m2) => {
          return m1[0].round - m2[0].round
        });
      }
    }

    for (const round of sortedSchedule) {
      schedule.set(round[0].round, round);
    }

    return schedule;
  }
}
