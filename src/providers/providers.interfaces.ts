export interface IProvider {
  getTransactionFee <T = any> (txId: string): Promise<number>
}

