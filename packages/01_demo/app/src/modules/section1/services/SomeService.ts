import { gProvide } from "@goinapp/gshell-native";
import { faker } from "@faker-js/faker";

@gProvide()
export class SomeService {
  public getSomeEntity() {
    return {
      id: faker.datatype.uuid(),
      name: faker.name.firstName(),
      surname: faker.name.lastName(),
    };
  }
}