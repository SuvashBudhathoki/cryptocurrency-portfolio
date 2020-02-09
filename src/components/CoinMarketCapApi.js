import React from "react";
import axios from "axios";
import NumberFormat from "react-number-format";
import ReactDOM from "react-dom";

const apiKey = "19aff428-0470-434b-8807-cf104d68babc";

export default class CoinMarketCap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptos: []
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=" +
          apiKey
      )
      .then(res => {
        console.log(res.data, res.data.data.symbol);
        const cryptos = res.data.data;
        console.log(cryptos[1], "cryptos");

        this.setState(() => ({ cryptos }));
      });
  }

  render() {
    return (
      <div>
        {this.state.cryptos.map(({ id, name, symbol, quote }, index) => (
          <div id="crypto-container">
            <p className="left" key={crypto.id}>
              {name} {symbol} {quote.USD.price / 0.67}
            </p>
          </div>
        ))}
      </div>
    );
  }
}
