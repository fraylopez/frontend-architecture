import { gProvide } from "@goinapp/gshell-native";

import {walletController, WalletController} from "@goinapp/logic/src/shop/wallet/application/WalletController";
import { computed } from "mobx";

@gProvide()
export class WalletScreenUIStore {
private controller: WalletController;

  constructor() {
    this.controller = walletController;
  }

  @computed get balance(){
    return this.controller.wallet.balance
  }

}
