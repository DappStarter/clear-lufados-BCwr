require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse flame tone strategy deny office clutch hunt office army giggle'; 
let testAccounts = [
"0x64fd55bde0d01a3348dbeab559bffb7d8664c415c22b82d50ffd75593e6f94cd",
"0x91990dac5bfe0ef152c4f142df4d3769014c23e6a6b80a3ad697f1f323fe4bcf",
"0x3249baff7ba469dcbae83c0ceaf2695c0086a288837f7a61c0623bca62b5ba3c",
"0x04d8c03f624d721e33f0126e8678566fccd11e95e4435da07fc00a5250f3a999",
"0x4e804806098d7619f380c188b9f10026fab2633d4638b5a781464f2852f673a9",
"0x4760205a51fc73c03528ca650ab8d5ebdcc4210a937558a201495915f0907198",
"0xe1371d85be649f24fce50ea592e45c8d60cd3ef82c4ed9d8e38dcaffe7de8f28",
"0x6ed10869205d118f5409800d5f0fd8c6d553731e8b405a35ef5b76f1d0a8e15e",
"0xa5fb698a4652cdeaa193cb721b8abcf7573d6adab0b8a55faa2e7d12d2e82485",
"0xd66dc9758798c379eba479e01535ff91bd083ae61988789408f74769952c66d8"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

