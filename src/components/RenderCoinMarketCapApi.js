import React from "react";
import CoinMarketCap from "./CoinMarketCapApi";

const RenderCoinMarketCapApi = () => (
  <div className="content-container">
    <h2 className="page-header__sub-title">
      Cryptocurrencies by Market Capitalization (SRC: CoinMarketCap)
    </h2>
    <CoinMarketCap />
  </div>
);

export default RenderCoinMarketCapApi;
