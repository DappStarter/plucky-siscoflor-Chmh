require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glove flee street name rifle place hockey hunt cricket bridge tonight'; 
let testAccounts = [
"0xa649c0572492673485e9e8de71e7ad0d6cf418c64661fe774110907b667b3743",
"0x592e4ee07c5c303f63116c9c293a1044c74c09b77ca0ecc08807ba25acc78900",
"0xfb3d4b70fd9606043d87be17a5e1b2151456e476da525ce2c122dc9b0175b70e",
"0x6fcb96e07ee33bceaaacb2eb6ef7ec8af21d5a709fe781d623bcafd348163820",
"0x7d88336584023de15de9cea9fff780cb8fad5c813c34e511390dc54468c5b91e",
"0x8012a0561ab052ad6db146db5373baf103b8a20c248c93a8081b619152008e54",
"0x03ea8a2c7f49eee9d9f143d481b61ee6cd3c67ab358ddfe2d88bb0efaacba461",
"0x2aaf15a2b7a4fd0dd1edc050616456cfb9d43790340c14c60772db22f6a8cbe8",
"0xfb1c86e93478a857a9bde14d135ccb333a5ab03f3f952f6e57d45bc09c118b37",
"0x33ca5edafd2604cfd54baf74c60760a958ee6d628e057b0888a18ecdc98b47ee"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


