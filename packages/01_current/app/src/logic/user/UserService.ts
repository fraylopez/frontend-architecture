import { User } from "./User";

export class UserService {
  public getUser(id: string) {
    return new User(id, "Jane", 30);
  }
}