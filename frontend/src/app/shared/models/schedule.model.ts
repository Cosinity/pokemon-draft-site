import { Match } from "./match.model";

export class Schedule {
  public numRounds: number;
  public rounds: Map<number, Match[]>;

  constructor(schedule?: any) {
    this.numRounds = schedule.numRounds || null;
    this.rounds = schedule.rounds || null;
  }
}
