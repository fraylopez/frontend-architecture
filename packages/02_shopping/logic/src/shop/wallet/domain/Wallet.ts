import {Money} from "@goinapp/ddd";
import { action, observable } from "mobx";

export class Wallet {
    @observable balance: Money;

    constructor() {
        this.balance = Money.fromUnits(183);
    }

    @action updateBalance(newBalance:Money ){
        this.balance = newBalance
    }
}