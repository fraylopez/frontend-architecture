import { gInject, gProvide } from "@goinapp/gshell-native";
import { observable } from "mobx";
import { SomeEntityService } from "../services/SomeEntityService";

@gProvide()
export class Section1Store {
  @observable
  public data: string = 'I am Section1Store';
  @observable
  public someEntity!: object;

  @gInject(SomeEntityService) private someEntityService!: SomeEntityService;

  public fetch() {
    this.someEntity = this.someEntityService.getSomeEntity();
  }
}