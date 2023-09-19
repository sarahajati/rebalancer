import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'csv-parse';
import { Transactions } from './types';


export default class CsvReader {
  path: string;

  constructor(path: string) {
    this.path = path;
  }
  public csvToArray(printResult: Function) {
    const csvFilePath = path.resolve(__dirname, this.path);
    const headers = ['Network', 'txId', 'createdAt'];
    const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });
    parse(
       fileContent,
      {
        delimiter: ',',
        columns: headers,
      },
      (error, result: Transactions[]) => {
        if (error) {
          console.error(error);
        }
        printResult(result)
      }
    );
  }
}
