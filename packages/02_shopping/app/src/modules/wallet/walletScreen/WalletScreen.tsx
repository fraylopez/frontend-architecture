import { WalletScreenUIStore } from "./WalletScreenUIStore";
import {observer} from "mobx-react";
import {gGet} from "@goinapp/gshell-native"
export const WalletBalanceWidget = observer(() => {
  const store = gGet(WalletScreenUIStore)

  return (
    <div className="ballanceWidget">
      <h2>Im a wallet balance widget</h2>
    </div>
  );
});
