import { Pokemon } from "./pokemon.model";

export class Game {
  public teamA: Pokemon[];
  public teamB: Pokemon[];
  public winnerID: number | null;
  public replay: string | null;

  constructor(game: any) {
    this.teamA = game.teamA || null;
    this.teamB = game.teamB || null;
    this.winnerID = game.winnerID || null;
    this.replay = game.replay || null;
  }
}
