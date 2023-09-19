import { AxiosInstance } from 'axios';
import TronWeb from 'tronweb';
import createHttpAgent from '../../utils/http';
import { IProvider } from '../providers.interfaces';
import {
  endpoints, GetTransactionResponse,
  
} from './tron.types';

export default  class BscProvider implements IProvider {
  apiUrl: string;

  decimal: number;

  httpProvider: AxiosInstance;

  server: any;

  constructor(
    apiUrl: string,
    decimal: number = 6,
  ) {
    this.apiUrl = apiUrl;
    this.decimal = decimal;
    this.server = new TronWeb(
      new TronWeb.providers.HttpProvider(this.apiUrl),
      new TronWeb.providers.HttpProvider(this.apiUrl),
      new TronWeb.providers.HttpProvider(this.apiUrl),
     );
    this.httpProvider = createHttpAgent(this.apiUrl);
  }



  public async getTransactionFee(txId: string): Promise<number> {
    const tx = await this.httpProvider.post<GetTransactionResponse.Response | { Error: string } | {}>(
      endpoints.getTransaction(),
      {
        value: txId,
      },
    );
    const net_usage = (tx.data as GetTransactionResponse.Response).receipt.net_usage
    return net_usage;
    // const calculatedFeeInSun = (tx.data as GetTransactionResponse.Response)
    //   .receipt.energy_fee + (tx.data as GetTransactionResponse.Response).receipt.net_fee;
    // const calculatedFeeInTrx = scaleDown(calculatedFeeInSun, this.decimal);
    // (tx.data as GetTransactionResponse.Response).fee = calculatedFeeInTrx.toNumber();
    // return calculatedFeeInTrx.toNumber();
  }
}