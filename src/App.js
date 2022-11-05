import { useEffect, useState } from "react";
import styles from "./AppStyle.module.css";

function App() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
      });
  }, []);
  function CoinList({ coin }) {
    return (
      <ul className={styles.liContainer}>
        {coin.map((arr) => (
          <li>
            <strong>
              {arr.symbol}
              <span>({arr.name})</span>
            </strong>
            <span className="price">
              <em>$</em> {arr.quotes.USD.price}
            </span>
          </li>
        ))}
      </ul>
    );
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
