import EthProvider from './ethProvider';
import BscProvider from './bscProvider';
import TronProvider from './tron/tronProvider';
import Networks from '../constant/networks';

export default class ProviderBuilder {
  protected ethClient: EthProvider;
  protected bscClient: BscProvider;
  protected tronClient: TronProvider;

  constructor() {
    this.ethClient = new EthProvider(Networks.ethUrl);
    this.bscClient = new BscProvider(Networks.bscUrl);
    this.tronClient = new TronProvider(Networks.tronUrl);
  }

  async getTxFee(Network: string, TxId: string) {
    switch (Network) {
      case 'BSC':
        return await this.bscClient.getTransactionFee(TxId);
      case 'ERC20':
        return await this.ethClient.getTransactionFee(TxId);
      case 'TRC20': 
        return await this.tronClient.getTransactionFee(TxId);
    }
  }
}
