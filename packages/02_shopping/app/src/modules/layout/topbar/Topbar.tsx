import { Link } from "react-router-dom";
import styles from "./Topbar.module.css";

export function Topbar() {
  return (
    <div className={styles.topbar}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
