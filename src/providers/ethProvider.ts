import Web3 from 'web3';
import {TransactionReceipt } from 'web3-core';
import { SocksProxyAgent } from 'socks-proxy-agent';
import ethConstant from '../constant/constant';
import { IProvider } from './providers.interfaces';
import feeConstant from '../constant/constant';


export default class EthProvider implements IProvider{
  protected web3: Web3;

  constructor(url: string, proxy?: string) {
    if (url === '') throw new Error('web3 rpc url should not be empty');
    if (proxy) {
      this.web3 = new Web3(new Web3.providers.HttpProvider(url, {
        agent: {
          http: new SocksProxyAgent(proxy),
          https: new SocksProxyAgent(proxy),
        },
      }));
    } else {
      this.web3 = new Web3(new Web3.providers.HttpProvider(url));
    }
  }

    public async getTransactionFee(hash: string) {
      const receipt = await this.web3.eth.getTransactionReceipt(hash) as any as TransactionReceipt;
      return (receipt.gasUsed * receipt.effectiveGasPrice) * feeConstant;
    }
}