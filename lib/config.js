/*
config.js - Configuration for Hush Coin
*/

module.exports = {
  mainnet: {
    messagePrefix: 'Hush main net',
    bip32: {
      public: '0488b21e',
      private: '0488ade4'
    },
    pubKeyHash: '1cb8',
    scriptHash: '1cbd',
    zcPaymentAddressHash: '169a', // Private z-address
    zcSpendingKeyHash: 'ab36', // Spending key
    wif: '80'
  },
  testnet: {
    wif: 'ef',
    pubKeyHash: '2098'
  }
};