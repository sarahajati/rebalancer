import CsvReader from "./csv-reader";
const path = '../../files/RebalancerTransactions.csv';
const result = new CsvReader(path)
const printResult = (result: any) => {return result}
const finall_result = result.csvToArray(printResult)

