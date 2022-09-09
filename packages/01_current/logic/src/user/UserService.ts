import { faker } from "@faker-js/faker";
import { User } from "./User";

export class UserService {
  public getUser(id: string) {
    return new User(id, faker.name.firstName(), faker.datatype.number({ min: 18, max: 99 }));
  }
}