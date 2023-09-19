import CsvHelper from './utils/csvHelper';
import ProviderBuilder from './providers/providerBuilder'
import { Transaction } from './types/TransactionInterface';
const path = './files/RebalancerTransactions.csv'

const csvHelper = new CsvHelper(path);
const providerBuilder = new ProviderBuilder();



const run = async () => {
  const arrayOfTransactions: any = await csvHelper.readFile();
  await Promise.all(arrayOfTransactions.map(async (tx: Transaction) => {
  Object.assign(tx, { fee: await providerBuilder.getTxFee(tx.Network, tx.txId) });
  }))
  csvHelper.writeToFile(arrayOfTransactions);
};

run();
