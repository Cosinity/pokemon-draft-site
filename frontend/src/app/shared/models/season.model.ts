export class Season {
  public id: number;
  public leagueID: number;

  constructor(season: any) {
    this.id = season.id;
    this.leagueID = season.leagueID;
  }
}
