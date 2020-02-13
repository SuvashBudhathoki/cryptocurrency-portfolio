import React from "react";
import axios from "axios";
import currencyNames from "../fixtures/CurrencyNames";
import numeral from "numeral";

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
        const cryptos = res.data.data;

        this.setState(() => ({ cryptos }));
      });
  }

  handleSymbol = (crypto, currencyName) => {
    if (crypto.symbol === currencyName.symbol) {
      return (
        <div className="content-container">
          <div key={crypto.id} className="list-item">
            <div>
              <h3 className="list-item__title">{crypto.name}</h3>
              <span className="list-item__sub-title"> {crypto.symbol}</span>
            </div>
            <h3 className="list-item__data">
              {numeral(crypto.quote.USD.price / 0.67).format("$0,0.00")}AUD
            </h3>
          </div>
        </div>
      );
    }
  };

  render() {
    if (this.state.cryptos.length === 0) {
      return (
        <div className="list-item list-item--message">
          <span>
            Please Enable Cross-Origin Resource Sharing (CORS) in Your Browser
            to View the Information
          </span>
        </div>
      );
    }
    return (
      <div>
        <div className="content-container">
          <div className="list-header">
            <div className="show-for-mobile">Transactions</div>
            <div className="show-for-desktop">Currency Name</div>
            <div className="show-for-desktop">Price (AUD)</div>
          </div>
        </div>

        {this.state.cryptos.map((crypto = { id, name, symbol, quote }) =>
          currencyNames.map((currencyName = { symbol }) =>
            this.handleSymbol(crypto, currencyName)
          )
        )}
      </div>
    );
  }
}
