import { gProvide } from "@goinapp/gshell-native";
import { observable } from "mobx";

@gProvide()
export class Multi1Store {
  @observable
  public publicProperty: string = 'I am Multi1Store observable publicProperty';

}