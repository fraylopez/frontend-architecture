import { WalletBalanceWidgetUIStore } from "./WalletBalanceWidgetUIStore";
import {observer} from "mobx-react";
import {gGet} from "@goinapp/gshell-native"
export const WalletBalanceWidget = observer(() => {
  const store = gGet(WalletBalanceWidgetUIStore)

  return (
    <div className="ballanceWidget">balance: {store.balance.format()}</div>
  );
});
