import { Outlet } from "react-router-dom";
import { Topbar } from "./topbar/Topbar";
import styles from "./Layout.module.css";

export function Layout() {
  return (
    <>
      <Topbar />
      {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
      <div className={styles.container}>
        <Outlet />
      </div>
    </>
  );
}
