export class League {
  public id: number;
  public name: string;
  public curSeasonID: number;

  constructor(league: any) {
    this.id = league.id;
    this.name = league.name;
    this.curSeasonID = league.curSeasonID;
  }
}
