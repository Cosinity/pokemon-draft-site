export class User {
  public id: number;
  public username: string;
  public email: string;

  constructor(user: any) {
    this.id = user.id;
    this.username = user.username;
    this.email = user.email;
  }
}
