import { gInject, gProvide } from "@goinapp/gshell-native";
import { action, observable } from "mobx";
import { SharedStore } from "./SharingStore";

@gProvide()
export class Multi1Store {
  @observable
  public publicProperty: string = 'I am Multi1Store observable publicProperty';

  @gInject(SharedStore) readonly sharedStore!: SharedStore;


  @action
  setSharedData(data: string) {
    this.sharedStore.data = data;
  }
}