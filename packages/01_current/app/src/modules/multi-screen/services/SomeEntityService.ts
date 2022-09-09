import { gProvide } from "@goinapp/gshell-native";

@gProvide()
export class SomeEntityService {
  public getSomeEntity() {
    return {
      id: '1',
      name: 'John',
      surname: 'Doe',
    };
  }
}