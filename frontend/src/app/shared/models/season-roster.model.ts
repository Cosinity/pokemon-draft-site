import { Pokemon } from "./pokemon.model";

export class SeasonRoster {
  public id: number;
  public seasonID: number;
  public roster: Pokemon[];
  public teamName: string;
  public ownerID: number;

  constructor(seasonRoster: any) {
    this.id = seasonRoster.id;
    this.seasonID = seasonRoster.seasonID;
    this.roster = seasonRoster.roster.map((p: Pokemon) => new Pokemon(p));
    this.teamName = seasonRoster.teamName;
    this.ownerID = seasonRoster.ownerID;
  }
}
