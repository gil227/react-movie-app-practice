import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        console.log(coins);
      });
  }, []);
  return (
    <div>
      <h2>
        <img src="/img/coin.png" alt="" />
      </h2>
      <div></div>
    </div>
  );
}

export default App;
