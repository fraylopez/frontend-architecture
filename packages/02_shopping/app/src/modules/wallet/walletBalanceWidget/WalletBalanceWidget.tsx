import { WalletBalanceWidgetUIStore } from "./WalletBalanceWidgetUIStore";
import {observer} from "mobx-react";
import {gGet} from "@goinapp/gshell-native"
export const WalletBalanceWidget = observer(() => {
  const store = gGet(WalletBalanceWidgetUIStore)

  return (
    <div className="ballanceWidget">
      <h2>Your balance is {store.getBalance()}</h2>
    </div>
  );
});
