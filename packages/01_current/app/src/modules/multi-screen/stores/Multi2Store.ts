import { gProvide } from "@goinapp/gshell-native";
import { observable } from "mobx";

@gProvide()
export class Multi2Store {
  @observable
  public publicProperty: string = 'I am Multi2Store observable publicProperty';
}