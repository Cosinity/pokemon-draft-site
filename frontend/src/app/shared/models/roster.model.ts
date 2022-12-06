import { Pokemon } from "./pokemon.model";

export class Roster {
  public id: number;
  public seasonID: number;
  public pokemon: Pokemon[];
  public teamName: string;
  public ownerID: number;

  constructor(roster: any) {
    this.id = roster.id;
    this.seasonID = roster.seasonID;
    this.pokemon = roster.pokemon.map((p: Pokemon) => new Pokemon(p));
    this.teamName = roster.teamName;
    this.ownerID = roster.ownerID;
  }
}
