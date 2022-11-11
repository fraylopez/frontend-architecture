import {Money} from "@goinapp/ddd";

export class Wallet {
    private balance: Money;

    constructor() {
        this.balance = Money.fromUnits(183);
    }
}