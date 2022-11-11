import { Wallet } from "./Wallet";
import { Money } from "@goinapp/ddd";

export class WalletController {
    public readonly wallet: Wallet;

    public getBalance(): Money {
        return this.wallet.balance;
    }
}