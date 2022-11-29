import { Game } from "./game.model";
import { Roster } from "./roster.model";

export class Match {
  public id: number;
  public rosterA: Roster;
  public rosterB: Roster;
  public winner: Roster | null;
  public seasonID: number;
  public round: number;
  public games: Game[];

  constructor(match: any) {
    this.id = match.id || null;
    this.rosterA = match.rosterA || null;
    this.rosterB = match.rosterB || null;
    this.winner = match.winner || null;
    this.seasonID = match.seasonID || null;
    this.round = match.round || null;
    this.games = match.games?.map((g: any) => new Game(g)) || null;
  }
}
