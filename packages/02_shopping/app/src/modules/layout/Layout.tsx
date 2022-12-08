import { Topbar } from "./topbar/Topbar";
import styles from "./Layout.module.css";
import React from "react";
import { NavigationHistory } from "./NavigationHistory/NavigationHistory";

interface propsWithChildren {
  children: React.ReactNode
}

export const Layout = ({children}: propsWithChildren) => {
  return (
    <>
      <Topbar />
      <div className={styles.container}>
        {children}

      </div>

      <div className={styles.debugLayer}>
        <NavigationHistory />
      </div>
    </>
  );
}
