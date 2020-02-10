import React from "react";
import axios from "axios";
import currencyNames from "./CurrencyNames";
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
        <div>
          {crypto.name} {crypto.symbol}
          {numeral(crypto.quote.USD.price / 0.67).format("$0,0.00")}AUD
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        {this.state.cryptos.map((crypto = { id, name, symbol, quote }) =>
          currencyNames.map((currencyName = { symbol }) =>
            this.handleSymbol(crypto, currencyName)
          )
        )}
      </div>
    );
  }
}
