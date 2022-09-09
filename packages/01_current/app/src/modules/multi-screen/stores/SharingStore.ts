import { gProvide } from "@goinapp/gshell-native";
import { observable } from "mobx";

@gProvide()
export class SharedStore {
  @observable
  public data!: string;

}