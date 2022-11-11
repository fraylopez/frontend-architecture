import { Wallet } from "../infrastructure/Wallet";
import { Money } from "@goinapp/ddd";
import { faker } from "@faker-js/faker";
import { computed, observable } from "mobx";

export class WalletController {
  @observable public readonly wallet: Wallet;

  constructor() {
    this.wallet = new Wallet();
    setInterval(() => {
      this.wallet.updateBalance(
        Money.fromUnits(faker.datatype.number({ min: 5, max: 180 }))
        );
    }, 2000)
  }
}

export const walletController = new WalletController()