import { navigation } from "@goinapp/logic/src/shop/_shared/domain/Navigation";
import styles from "./NavigationHistory.module.css";

export const NavigationHistory = () => {

  const history = navigation.getHistory();

  return (
    <div className={styles.preWrapper}>

      <h2>Navigation history</h2>
      <ul>
      {history.map(((screen, i) => {
        return <li>{i} - {screen}</li>
      }))}
      </ul>

      {/* <div className={styles.column}>
        <h3>Barcelona</h3>
        <ul>
          <li className={styles.visited}>Sagrada familia</li>
          <li className={styles.visited}>Casa batllo</li>
          <li className={styles.visited}>Restaurante ramen</li>
          <li>Razzmatazz</li>
        </ul>
      </div>

      <div className={styles.column}>
        <h3>Berlin</h3>
        <ul>
          <li className={styles.visited}>Puerta De Brandemburgo</li>
          <li className={styles.visited}>El Muro</li>
          <li>Barrio Judio</li>
          <li>Alexander Platz</li>
        </ul>
      </div> */}

    </div>
  );
};
