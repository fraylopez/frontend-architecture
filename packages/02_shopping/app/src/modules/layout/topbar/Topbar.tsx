import { WalletBalanceWidget } from "src/modules/wallet/walletBalanceWidget/WalletBalanceWidget";
import { navigation, Screen } from "@goinapp/logic/src/shop/_shared/domain/Navigation";
import styles from "./Topbar.module.css";

export function Topbar() {

  interface IUrl {
    screen: Screen;
    label: string;
  }

  const pages: IUrl[] = [
    {
      screen: Screen.HOME,
      label: 'Home',
    },
    {
      screen: Screen.CATALOG,
      label: 'Products',
    },
    {
      screen: Screen.CART,
      label: 'Cart',
    },
    {
      screen: Screen.WALLET,
      label: 'Wallet',
    },
  ];

  return (
    <div className={styles.topbar}
    style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
      <nav style={{display: "flex", alignItems: "center", alignSelf:"flex-start"}}>
        <img src="/amazon-logo.png" />
        <ul>
          {pages.map((url, index) => {
            return (
              <li key={index} onClick={() => {
                navigation.goTo(url.screen)
              }}>
                {url.label}
              </li>
            );
          })}
        </ul>
      </nav>

      <div style={{display: "flex", paddingRight: 20}}>
          <WalletBalanceWidget />
      </div>
    </div>
  );
}
