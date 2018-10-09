var HDWalletProvider = require("truffle-hdwallet-provider");

var infura_apikey = "2ef61cec487942abb941bdc71c680c01";
var mnemonic = "evidence glare segment during exotic loyal demise humor credit elevator actor nasty";

module.exports = {
    networks: {
        development: {
            host: "localhost",
            port: 8545,
            network_id: "*" // Match any network id
        },
        ropsten: {
            provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/"+infura_apikey),
            network_id: 3
        }
    }
};
