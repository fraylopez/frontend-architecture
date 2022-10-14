import { Link } from "react-router-dom";
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
  ];

  return (
    <div className={styles.topbar}>
      <nav>
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
    </div>
  );
}
