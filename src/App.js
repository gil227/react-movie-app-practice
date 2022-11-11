import { useEffect, useState } from "react";
import styles from "./AppStyle.module.css";

function App() {
  const [movie, setMovie] = useState(true);
  useEffect(() => {
    fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
    )
      .then((response) => response.json())
      .then((json) => {});
  }, []);
  function CoinList({ coin }) {
    return <div>{loading ? <h1>loading...</h1> : null}</div>;
  }
  return (
    <div className={styles.bodyWrap}>
      <h2 className={styles.title}>
        <img src="/img/coin.png" alt="" />
      </h2>

      <div className={styles.liWrap}>
        <h3>Coins List ({coins.length})</h3>
        <CoinList coin={coins} />
      </div>
    </div>
  );
}

export default App;
