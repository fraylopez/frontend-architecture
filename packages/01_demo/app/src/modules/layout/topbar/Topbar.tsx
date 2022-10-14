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
            <Link to="/section1">Section1</Link>
          </li>
          <li>
            <Link to="/multi-screen1">MultiScreen1</Link>
          </li>
          <li>
            <Link to="/multi-screen2">MultiScreen2</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
