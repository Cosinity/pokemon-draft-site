import { Roster } from "./roster.model";

export class Match {
  public id: number;
  public teamA: Roster;
  public teamB: Roster;
  public winner: number | null;
  public seasonID: number;
  public round: number;

  constructor(match: any) {
    this.id = match.id || null;
    this.teamA = match.teamA || null;
    this.teamB = match.teamB || null;
    this.winner = match.winner || null;
    this.seasonID = match.seasonID || null;
    this.round = match.round || null;
  }
}
