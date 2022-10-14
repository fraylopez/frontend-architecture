import { User } from "./User";
import { UserService } from "./UserService";

export class UserStore {
  private readonly userService: UserService;
  constructor() {
    this.userService = new UserService();
  }
  getUser(id: string) {
    return this.userService.getUser(id);
  }
}