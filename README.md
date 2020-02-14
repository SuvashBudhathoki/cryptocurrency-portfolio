# Cryptocurrency portfolio with React

### Demo

Here is a working live [Cryptocurrency-Portfolio](https://crypto-currency-portfolio.herokuapp.com/)

<h4>Supported by mobile devices </h4>

![Dashboard](https://user-images.githubusercontent.com/51769774/74516201-b6759980-4f5b-11ea-882e-b84def4615ad.PNG)
![EditTransaction](https://user-images.githubusercontent.com/51769774/74516204-b83f5d00-4f5b-11ea-82f2-262bbada60f5.PNG)
![GroupedByBitcoin](https://user-images.githubusercontent.com/51769774/74516205-b8d7f380-4f5b-11ea-8170-a8c17590f7cc.PNG)
![AddTransaction](https://user-images.githubusercontent.com/51769774/74516208-b9708a00-4f5b-11ea-9436-db70a84a2bf4.PNG)
![CoinMarketCapAPI](https://user-images.githubusercontent.com/51769774/74516210-ba092080-4f5b-11ea-86f0-8a83615b92a1.PNG)

### Installing

- Clone the project and type: yarn install

- When the installation finishes, type: yarn run dev-server

### Technologies

- React v16
- Node v13
- Javascript (ES6)
- SCSS/CSS

### Running Scripts

- Production: yarn run build:prod
- TestCases : yarn run test -- --watch

### Features

- The user can add, edit or delete individual transactions, which contains information about:

  - Name of crypto currency bought
  - Number of Units bought
  - Total amount paid for all units

- The user can view the transaction list according to groups of currencies.
- The user can see the transaction total of all the currencies bought.
- The user can sort the transaction list by Date or Amount.
- The user can see the current value of the currencies via CoinMarketCap Api.
- To enable CoinMarketCap Api, CORS must be enabled in browser.

### Inspiration

This app is based on The Complete React Developer Course (w/ Hooks and Redux) by Andrew Mead via Udemy.
Thankful to resources from GitHub, StackOverFlow and YouTube
