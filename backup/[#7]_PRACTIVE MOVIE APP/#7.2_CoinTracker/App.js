//#7.2 Coin Tracker
//useEffect를 사용해 api를 불러와보자!
import { useEffect, useState } from "react";

function App() {
  //loading 되는 부분 넣어주기
  const [loading, setLoading] = useState(true);
  //data를 state에 넣어서 노출시키자! (coins라는 변수에 코인들의 배열이 담김)
  const[coins, setCoins] = useState([]);
  //api 불러오기
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      {loading ? <strong>Loading...</strong> : null }
      {/* map을 이용해서 코인 정보 노출하기 */}
      <ul>
        {coins.map((coin) => 
          <li>
            {/* coin은 coins 배열 안에 있는 각각의 coin을 의미한다!*/}
            {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
          </li>
        )}
      </ul>
    </div>
  );
}

export default App;
