/* eslint-disable camelcase */


enum TronEndpoint {
  BROADCAST = '/wallet/broadcasttransaction',
  GET_TRANSACTION = '/wallet/gettransactioninfobyid',
  GET_BALANCE = '/api/account?address={address}',
  GET_TRANSACTION_BY_ID = '/wallet/gettransactionbyid',
}

const endpoints = {
  broadcast: () => TronEndpoint.BROADCAST,
  getTransaction: () => TronEndpoint.GET_TRANSACTION,
  getTransactionById: () => TronEndpoint.GET_TRANSACTION_BY_ID,
  getBalance: (address: string) => TronEndpoint.GET_BALANCE.replace('{address}', address),
};

export { endpoints };

export namespace GetTransactionResponse {
  export interface Receipt {
    net_usage: number;
  }

  export interface Log {
    address: string;
    topics: string[];
    data: string;
  }

  export interface Response {
    id: string;
    fee?: number;
    blockNumber: number;
    blockTimeStamp: number;
    contractResult: string[];
    contract_address: string;
    receipt: Receipt;
    log: Log[];
  }
}


export namespace GetAccountInfo {

  export interface Trc20tokenBalances {
    tokenId: string;
    balance: string;
    tokenName: string;
    tokenAbbr: string;
    tokenDecimal: number;
    tokenCanShow: number;
    tokenType: string;
    tokenLogo: string;
    vip: boolean;
    tokenPriceInTrx: number;
    amount: number;
    nrOfTokenHolders: number;
    transferCount: number;
  }

  export interface Key {
    address: string;
    weight: number;
  }

  export interface OwnerPermission {
    keys: Key[];
    threshold: number;
    permission_name: string;
  }

  export interface TokenBalance {
    amount: any;
    tokenPriceInTrx: number;
    tokenId: string;
    balance: string;
    tokenName: string;
    tokenDecimal: number;
    tokenAbbr: string;
    tokenCanShow: number;
    tokenType: string;
    vip: boolean;
    tokenLogo: string;
    owner_address: string;
    transferCount?: number;
    nrOfTokenHolders?: number;
  }

  export interface Balance {
    amount: any;
    tokenPriceInTrx: number;
    tokenId: string;
    balance: string;
    tokenName: string;
    tokenDecimal: number;
    tokenAbbr: string;
    tokenCanShow: number;
    tokenType: string;
    vip: boolean;
    tokenLogo: string;
    owner_address: string;
    transferCount?: number;
    nrOfTokenHolders?: number;
  }

  export interface Token {
    amount: any;
    tokenPriceInTrx: number;
    tokenId: string;
    balance: string;
    tokenName: string;
    tokenDecimal: number;
    tokenAbbr: string;
    tokenCanShow: number;
    tokenType: string;
    vip: boolean;
    tokenLogo: string;
    nrOfTokenHolders?: number;
    transferCount?: number;
    owner_address: string;
  }

  export interface Delegated {
  }

  export interface Representative {
    lastWithDrawTime: number;
    allowance: number;
    enabled: boolean;
    url: string;
  }

  export interface Trc10Assets {
    netPercentage: number;
    netLimit: number;
    netRemaining: number;
    netUsed: number;
  }

  export interface Bandwidth {
    energyRemaining: number;
    totalEnergyLimit: number;
    totalEnergyWeight: number;
    netUsed: number;
    storageLimit: number;
    storagePercentage: number;
    assets: any;
    netPercentage: number;
    storageUsed: number;
    storageRemaining: number;
    freeNetLimit: number;
    energyUsed: number;
    freeNetRemaining: number;
    netLimit: number;
    netRemaining: number;
    energyLimit: number;
    freeNetUsed: number;
    totalNetWeight: number;
    freeNetPercentage: number;
    energyPercentage: number;
    totalNetLimit: number;
  }

  export interface Frozen {
    total: number;
    balances: any[];
  }

  export interface FrozenBalanceForEnergy {
  }

  export interface AccountResource {
    frozen_balance_for_energy: FrozenBalanceForEnergy;
  }

  export interface Key2 {
    address: string;
    weight: number;
  }

  export interface ActivePermission {
    operations: string;
    keys: Key2[];
    threshold: number;
    id: number;
    type: string;
    permission_name: string;
  }

  export interface Response {
    trc20token_balances: Trc20tokenBalances[];
    transactions_out: number;
    acquiredDelegateFrozenForBandWidth: number;
    rewardNum: number;
    ownerPermission: OwnerPermission;
    tokenBalances: TokenBalance[];
    delegateFrozenForEnergy: number;
    balances: Balance[];
    trc721token_balances: any[];
    balance: number;
    voteTotal: number;
    totalFrozen: number;
    tokens: Token[];
    delegated: Delegated;
    transactions_in: number;
    totalTransactionCount: number;
    representative: Representative;
    frozenForBandWidth: number;
    reward: number;
    addressTagLogo: string;
    allowExchange: any[];
    address: string;
    frozen_supply: any[];
    bandwidth: Bandwidth;
    date_created: number;
    accountType: number;
    exchanges: any[];
    frozen: Frozen;
    accountResource: AccountResource;
    transactions: number;
    witness: number;
    delegateFrozenForBandWidth: number;
    name: string;
    frozenForEnergy: number;
    acquiredDelegateFrozenForEnergy: number;
    activePermissions: ActivePermission[];
  }

}

export namespace TronscanAddressTransactionListType {

  export interface ContractData {
    amount?: number
    owner_address: string
    to_address?: string
    data?: string
    contract_address?: string
  }

  export interface Cost {
    net_fee: number
    energy_usage: number
    fee: number
    energy_fee: number
    energy_usage_total: number
    origin_energy_usage: number
    net_usage: number
  }

  export interface TokenInfo {
    tokenId: string
    tokenAbbr: string
    tokenName: string
    tokenDecimal: number
    tokenCanShow: number
    tokenType: string
    tokenLogo: string
    tokenLevel: string
    vip: boolean
  }

  export interface Parameter {
    _from?: string
    _value: string
    _to: string
  }

  export interface TriggerInfo {
    method: string
    data: string
    parameter: Parameter
    methodName: string
    contract_address: string
    call_value: number
  }
  export interface ContractMap {
    [contractAddress: string]: boolean,
  }

  export interface ContractInfo {
    [contractAddress: string]: string,
  }

  export interface Daum {
    block: number
    hash: string
    timestamp: number
    ownerAddress: string
    toAddressList: string[]
    toAddress: string
    contractType: number
    confirmed: boolean
    revert: boolean
    contractData: ContractData
    SmartCalls: string
    Events: string
    id: string
    data: string
    fee: string
    contractRet: string
    result: string
    amount: string
    cost: Cost
    tokenInfo: TokenInfo
    tokenType: string
    trigger_info?: TriggerInfo
  }
  export interface Response {
    total: number
    rangeTotal: number
    data: Daum[]
    wholeChainTxCount: number
    contractMap: ContractMap
    contractInfo: ContractInfo
  }

}
