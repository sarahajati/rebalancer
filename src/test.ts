//Tron


// import Tron from "./providers/tron/tron.provider";
// const tronUrl = 'https://api.trongrid.io'
// const txId = 'f53e53339bc52b2aceab67f7f527bfa93b33aaa8d4ff75767c8f03c4c267942f'

// const tronProvider = new Tron(tronUrl, 6); 
// async function feeCalculator(){ const fee = tronProvider.getTransactionFee(txId);
//     return fee};

// feeCalculator().then(result => {console.log(result)})



// Ether

// import Ether from './providers/eth'
// const ethUrl = 'https://mainnet.infura.io/v3/14dcb22a4076458d9089f375af7ea368'
// const txId = '0x03d8e05aaad9b6e2ee892074d9ac6fe7ff928020b57d1a12d38ee2d890adfe58'
// const ethProvider = new Ether(ethUrl)
// async function feeCalculator(){ const fee = ethProvider.getTransactionFee(txId);
//     return fee};

// feeCalculator().then(result => {console.log(result)})




//Bsc

// import Bsc from './providers/bscProvider'
// const bscUrl = 'https://bsc-dataseed1.binance.org:443'
// const txId = '0x2a32a89bbad6109709386e161a1ef38aaeeff7bbab2944249edbda90232264f6'
// const bscProvider = new Bsc(bscUrl)
// async function feeCalculator(){ const fee = bscProvider.getTransactionFee(txId);
//     return fee};

// feeCalculator().then(result => {console.log(result)})


// const url = 'https://bsc-dataseed1.binance.org:443'
// const txId = 'f53e53339bc52b2aceab67f7f527bfa93b33aaa8d4ff75767c8f03c4c267942f'

// const tronWeb1 = new tronweb(new tronweb.providers.HttpProvider(tronUrl), new tronweb.providers.HttpProvider(tronUrl), new tronweb.providers.HttpProvider(tronUrl));


// const tronWeb = new tronweb({
//     fullNode: 'https://api.trongrid.io/wallet/gettransactioninfobyid',
//     solidityNode: 'https://api.trongrid.io/wallet/gettransactioninfobyid',
//     eventServer: 'https://api.trongrid.io/wallet/gettransactioninfobyid'
//   }
// )

// //console.log(tronWeb)

// async function run(){
//     const data = await tronWeb1.trx.getTransactionInfo(txId);
//     return data;
// }

// run().then(result=> {console.log(result.energy_fee)})

// import request from 'request';

// const options = { method: 'POST',
//   url: 'https://api.trongrid.io/wallet/gettransactioninfobyid',
//   headers: {  
     
//      'Content-Type': 'application/json' 
// },
//   body: { 
    
//     txId: '41e9d79cc47518930bc322d9bf7cddd260a0260a8d',   
// },
//   json: true 
// };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(response);
// });