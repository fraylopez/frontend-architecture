import { gInject, gProvide } from "@goinapp/gshell-native";
import { computed, observable } from "mobx";
import { SomeService } from "../services/SomeService";

@gProvide()
export class Section1Store {
  @observable
  public publicProperty: string = 'I am Section1Store observable publicProperty';

  @observable
  private someEntity!: object;

  @gInject(SomeService) private service!: SomeService;

  public fetch() {
    this.someEntity = this.service.getSomeEntity();
  }

  @computed
  public get fetchedData() {
    return `I am computed fetched data from Section1Store: ${this.someEntity ? JSON.stringify(this.someEntity) : 'null, press fetch'}`;
  }
}