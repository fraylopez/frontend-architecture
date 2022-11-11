import { WalletScreenUIStore } from "./WalletScreenUIStore";
import {observer} from "mobx-react";
import {gGet} from "@goinapp/gshell-native"
export const WalletScreen = observer(() => {
  const store = gGet(WalletScreenUIStore)

  return (
    <div className="balanceScreen">
      <h2>Wallet</h2>
      {store.balance.format()}
    </div>
  );
});
