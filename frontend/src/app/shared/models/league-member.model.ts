export class LeagueMember {
  public id: number;
  public userID: number;
  public leagueID: number;
  public rosterID: number;

  constructor(leagueMember: any) {
    this.id = leagueMember.id;
    this.userID = leagueMember.userID;
    this.leagueID = leagueMember.leagueID;
    this.rosterID = leagueMember.rosterID;
  }
}
