import * as fs from 'fs';
import { parse } from 'csv-parse';
import { stringify } from 'csv-stringify';
import { Transaction } from '../types/TransactionInterface';

export default class CsvHelper {
  path: string;
  constructor(path: string) {
    this.path = path;
  }

  readFile() {
    return new Promise((resolve, reject) => {
      const arrayOfTransactions: Transaction[] = [];
      fs.createReadStream(this.path)
        .pipe(parse({ delimiter: ',', from_line: 2 }))
        .on('error', (error) => reject(error))
        .on('data', (row) => {
          arrayOfTransactions.push({ Network: row[0], txId: row[1], createdAt: row[2] });
        })
        .on('end', () => {
          resolve(arrayOfTransactions);
        });
    });
  }

  writeToFile(data: any[]) {
    const writableStream = fs.createWriteStream(
      '/Users/wallex/Documents/rebalance_Tx_fee/files/RebalancerTransactionsWithFees.csv'
    );
    const columns = ['network', 'txId', 'createdAt', 'fee'];
    const rows = data.map((tx) => [tx.Network, tx.txId, tx.createdAt, tx.fee]);
    const stringifier = stringify({ header: true, columns: columns });
    rows.forEach((transaction) => {
      stringifier.write(transaction);
    });
    stringifier.pipe(writableStream);
    console.log('Finished writing data');
  }
}
