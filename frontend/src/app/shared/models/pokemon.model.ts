import { Type } from "../enums/types";

export class Pokemon {
  public id: number;
  public name: string;
  public type1: Type;
  public type2: Type;
  public icon: string;
  moreData: any;

  constructor(pokemon: any) {
    this.id = pokemon.id;
    this.name = pokemon.name;
    this.type1 = pokemon.type1;
    this.type2 = pokemon.type2;
    this.icon = pokemon.icon;
    this.moreData = pokemon.moreData;
  }
}
