import type { BigNumberish } from '@ethersproject/bignumber';
import { BigNumber } from '@ethersproject/bignumber';
import type { BytesLike } from '@ethersproject/bytes';
import { hexlify } from '@ethersproject/bytes';
import { ZeroBytes32 } from '@fuel-ts/constants';
import type { Output } from '@fuel-ts/transactions';
import { OutputType } from '@fuel-ts/transactions';

export type CoinTransactionRequestOutput = {
  type: OutputType.Coin;
  /** Receiving address or script hash */
  to: BytesLike;
  /** Amount of coins to send */
  amount: BigNumberish;
  /** Asset ID of coins */
  assetId: BytesLike;
};
export type ContractTransactionRequestOutput = {
  type: OutputType.Contract;
  /** Index of input contract */
  inputIndex: BigNumberish;
};
export type WithdrawalTransactionRequestOutput = {
  type: OutputType.Withdrawal;
  /** Receiving address */
  to: BytesLike;
  /** Amount of coins to withdraw */
  amount: BigNumberish;
  /** Asset ID of coins */
  assetId: BytesLike;
};
export type ChangeTransactionRequestOutput = {
  type: OutputType.Change;
  /** Receiving address or script hash */
  to: BytesLike;
  /** Asset ID of coins */
  assetId: BytesLike;
};
export type VariableTransactionRequestOutput = {
  type: OutputType.Variable;
};
export type ContractCreatedTransactionRequestOutput = {
  type: OutputType.ContractCreated;
  /** Contract ID */
  contractId: BytesLike;
  /** State Root */
  stateRoot: BytesLike;
};
export type TransactionRequestOutput =
  | CoinTransactionRequestOutput
  | ContractTransactionRequestOutput
  | WithdrawalTransactionRequestOutput
  | ChangeTransactionRequestOutput
  | VariableTransactionRequestOutput
  | ContractCreatedTransactionRequestOutput;

export const outputify = (value: TransactionRequestOutput): Output => {
  switch (value.type) {
    case OutputType.Coin: {
      return {
        type: OutputType.Coin,
        to: hexlify(value.to),
        amount: BigNumber.from(value.amount),
        assetId: hexlify(value.assetId),
      };
    }
    case OutputType.Contract: {
      return {
        type: OutputType.Contract,
        inputIndex: BigNumber.from(value.inputIndex),
        balanceRoot: ZeroBytes32,
        stateRoot: ZeroBytes32,
      };
    }
    case OutputType.Withdrawal: {
      return {
        type: OutputType.Withdrawal,
        to: hexlify(value.to),
        amount: BigNumber.from(value.amount),
        assetId: hexlify(value.assetId),
      };
    }
    case OutputType.Change: {
      return {
        type: OutputType.Change,
        to: hexlify(value.to),
        amount: BigNumber.from(0),
        assetId: hexlify(value.assetId),
      };
    }
    case OutputType.Variable: {
      return {
        type: OutputType.Variable,
        to: ZeroBytes32,
        amount: BigNumber.from(0),
        assetId: ZeroBytes32,
      };
    }
    case OutputType.ContractCreated: {
      return {
        type: OutputType.ContractCreated,
        contractId: hexlify(value.contractId),
        stateRoot: hexlify(value.stateRoot),
      };
    }
    default: {
      throw new Error('Invalid Output type');
    }
  }
};
