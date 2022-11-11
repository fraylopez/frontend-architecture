import { gProvide } from "@goinapp/gshell-native";

@gProvide()
export class WalletBalanceWidgetUIStore {
  constructor() {
    // this.controller = controller;
  }

  getBalance() {
    return 1000;
  }
}
