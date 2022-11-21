import { Pokemon } from "./pokemon.model";

export class Roster {
  public id: number;
  public seasonID: number;
  public pokemon: Pokemon[];
  public teamName: string;
  public ownerID: number;

  constructor(seasonRoster: any) {
    this.id = seasonRoster.id;
    this.seasonID = seasonRoster.seasonID;
    this.pokemon = seasonRoster.roster.map((p: Pokemon) => new Pokemon(p));
    this.teamName = seasonRoster.teamName;
    this.ownerID = seasonRoster.ownerID;
  }
}
