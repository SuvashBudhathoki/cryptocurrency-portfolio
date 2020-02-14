export const currencyNames = [
  { value: "bitcoin", label: "Bitcoin", symbol: "BTC" },
  { value: "bitcoinCash", label: "Bitcoin Cash", symbol: "BCH" },
  { value: "ethereumClassic", label: "Ethereum Classic", symbol: "ETC" },
  { value: "ethereum", label: "Ethereum", symbol: "ETH" },
  { value: "litecoin", label: "Litecoin", symbol: "LTC" },
  { value: "ripple", label: "Ripple XRP", symbol: "XRP" },
  { value: "stellar", label: "Stellar", symbol: "XLM" },
  { value: "zCash", label: "Zcash", symbol: "ZEC" }
];

export const currencyNamesDashboard = [
  { value: "showAll", label: "Show All Currencies" },
  ...currencyNames
];
