import { Link } from "react-router-dom";
import { WalletBalanceWidget } from "src/modules/wallet/walletBalanceWidget/WalletBalanceWidget";
import styles from "./Topbar.module.css";

export function Topbar() {

  interface IUrl {
    url: string;
    label: string;
  }

  const pages: IUrl[] = [
    {
      url: '/',
      label: 'Home',
    },
    {
      url: '/products',
      label: 'Products',
    },
    {
      url: '/cart',
      label: 'Cart',
    },
    {
      url: '/wallet',
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
              <li key={index}>
                <Link to={url.url}>{url.label}</Link>
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
