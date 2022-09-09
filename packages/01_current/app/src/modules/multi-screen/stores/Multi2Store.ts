import { gInject, gProvide } from "@goinapp/gshell-native";
import { computed, observable } from "mobx";
import { SharedStore } from "./SharingStore";

@gProvide()
export class Multi2Store {
  @observable
  public publicProperty: string = 'I am Multi2Store observable publicProperty';
  @observable
  @gInject(SharedStore) readonly sharedStore!: SharedStore;

  @computed
  get sharedData() {
    return this.sharedStore.data || 'null';
  }
}