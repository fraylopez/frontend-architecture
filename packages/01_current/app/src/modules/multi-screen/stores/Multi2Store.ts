import { faker } from "@faker-js/faker";
import { gInject, gProvide } from "@goinapp/gshell-native";
import { UserStore } from "@goinapp/logic";
import { computed, observable } from "mobx";
import { SharedStore } from "./SharingStore";

@gProvide()
export class Multi2Store {
  @observable
  public publicProperty: string = 'I am Multi2Store observable publicProperty';
  @observable
  @gInject(SharedStore) readonly sharedStore!: SharedStore;

  private userStore: UserStore;
  constructor() {
    this.userStore = new UserStore();
  }
  @computed
  get sharedData() {
    return this.sharedStore.data || 'null';
  }

  @computed
  get userName() {
    return this.userStore.getUser(faker.datatype.uuid()).name;
  }
}