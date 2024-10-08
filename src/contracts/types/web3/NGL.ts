/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type BN from 'bn.js';
import type { ContractOptions } from 'web3-eth-contract';
import type { EventLog } from 'web3-core';
import type { EventEmitter } from 'events';
import type {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from './types';

export interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export type AdminChanged = ContractEventLog<{
  previousAdmin: string;
  newAdmin: string;
  0: string;
  1: string;
}>;
export type Approval = ContractEventLog<{
  owner: string;
  spender: string;
  value: string;
  0: string;
  1: string;
  2: string;
}>;
export type BeaconUpgraded = ContractEventLog<{
  beacon: string;
  0: string;
}>;
export type ForwarderContractUpdated = ContractEventLog<{
  forwarder_: string;
  0: string;
}>;
export type Initialized = ContractEventLog<{
  version: string;
  0: string;
}>;
export type MetaTransactionExecuted = ContractEventLog<{
  userAddress: string;
  relayerAddress: string;
  functionSignature: string;
  0: string;
  1: string;
  2: string;
}>;
export type RoleAdminChanged = ContractEventLog<{
  role: string;
  previousAdminRole: string;
  newAdminRole: string;
  0: string;
  1: string;
  2: string;
}>;
export type RoleGranted = ContractEventLog<{
  role: string;
  account: string;
  sender: string;
  0: string;
  1: string;
  2: string;
}>;
export type RoleRevoked = ContractEventLog<{
  role: string;
  account: string;
  sender: string;
  0: string;
  1: string;
  2: string;
}>;
export type Transfer = ContractEventLog<{
  from: string;
  to: string;
  value: string;
  0: string;
  1: string;
  2: string;
}>;
export type Upgraded = ContractEventLog<{
  implementation: string;
  0: string;
}>;

export interface NGL extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions,
  ): NGL;
  clone(): NGL;
  methods: {
    DEFAULT_ADMIN_ROLE(): NonPayableTransactionObject<string>;

    DEPOSITOR_ROLE(): NonPayableTransactionObject<string>;

    DOMAIN_SEPARATOR(): NonPayableTransactionObject<string>;

    ERC712_VERSION(): NonPayableTransactionObject<string>;

    allowance(
      owner: string,
      spender: string,
    ): NonPayableTransactionObject<string>;

    approve(
      spender: string,
      amount: number | string | BN,
    ): NonPayableTransactionObject<boolean>;

    balanceOf(account: string): NonPayableTransactionObject<string>;

    burn(amount: number | string | BN): NonPayableTransactionObject<void>;

    burnFrom(
      account: string,
      amount: number | string | BN,
    ): NonPayableTransactionObject<void>;

    decimals(): NonPayableTransactionObject<string>;

    decreaseAllowance(
      spender: string,
      subtractedValue: number | string | BN,
    ): NonPayableTransactionObject<boolean>;

    deposit(
      user: string,
      depositData: string | number[],
    ): NonPayableTransactionObject<void>;

    executeMetaTransaction(
      userAddress: string,
      functionSignature: string | number[],
      sigR: string | number[],
      sigS: string | number[],
      sigV: number | string | BN,
    ): PayableTransactionObject<string>;

    getChainId(): NonPayableTransactionObject<string>;

    getDomainSeperator(): NonPayableTransactionObject<string>;

    getNonce(user: string): NonPayableTransactionObject<string>;

    getRoleAdmin(role: string | number[]): NonPayableTransactionObject<string>;

    grantRole(
      role: string | number[],
      account: string,
    ): NonPayableTransactionObject<void>;

    hasRole(
      role: string | number[],
      account: string,
    ): NonPayableTransactionObject<boolean>;

    increaseAllowance(
      spender: string,
      addedValue: number | string | BN,
    ): NonPayableTransactionObject<boolean>;

    initialize(
      admin: string,
      childChainManager: string,
    ): NonPayableTransactionObject<void>;

    isTrustedForwarder(forwarder: string): NonPayableTransactionObject<boolean>;

    name(): NonPayableTransactionObject<string>;

    nonces(owner: string): NonPayableTransactionObject<string>;

    permit(
      owner: string,
      spender: string,
      value: number | string | BN,
      deadline: number | string | BN,
      v: number | string | BN,
      r: string | number[],
      s: string | number[],
    ): NonPayableTransactionObject<void>;

    proxiableUUID(): NonPayableTransactionObject<string>;

    reinitialize(): NonPayableTransactionObject<void>;

    renounceRole(
      role: string | number[],
      account: string,
    ): NonPayableTransactionObject<void>;

    revokeRole(
      role: string | number[],
      account: string,
    ): NonPayableTransactionObject<void>;

    setForwarderContract(forwarder_: string): NonPayableTransactionObject<void>;

    supportsInterface(
      interfaceId: string | number[],
    ): NonPayableTransactionObject<boolean>;

    symbol(): NonPayableTransactionObject<string>;

    totalSupply(): NonPayableTransactionObject<string>;

    transfer(
      to: string,
      amount: number | string | BN,
    ): NonPayableTransactionObject<boolean>;

    transferFrom(
      from: string,
      to: string,
      amount: number | string | BN,
    ): NonPayableTransactionObject<boolean>;

    trustedForwarder(): NonPayableTransactionObject<string>;

    upgradeTo(newImplementation: string): NonPayableTransactionObject<void>;

    upgradeToAndCall(
      newImplementation: string,
      data: string | number[],
    ): PayableTransactionObject<void>;

    versionRecipient(): NonPayableTransactionObject<string>;

    withdraw(amount: number | string | BN): NonPayableTransactionObject<void>;
  };
  events: {
    AdminChanged(cb?: Callback<AdminChanged>): EventEmitter;
    AdminChanged(
      options?: EventOptions,
      cb?: Callback<AdminChanged>,
    ): EventEmitter;

    Approval(cb?: Callback<Approval>): EventEmitter;
    Approval(options?: EventOptions, cb?: Callback<Approval>): EventEmitter;

    BeaconUpgraded(cb?: Callback<BeaconUpgraded>): EventEmitter;
    BeaconUpgraded(
      options?: EventOptions,
      cb?: Callback<BeaconUpgraded>,
    ): EventEmitter;

    ForwarderContractUpdated(
      cb?: Callback<ForwarderContractUpdated>,
    ): EventEmitter;
    ForwarderContractUpdated(
      options?: EventOptions,
      cb?: Callback<ForwarderContractUpdated>,
    ): EventEmitter;

    Initialized(cb?: Callback<Initialized>): EventEmitter;
    Initialized(
      options?: EventOptions,
      cb?: Callback<Initialized>,
    ): EventEmitter;

    MetaTransactionExecuted(
      cb?: Callback<MetaTransactionExecuted>,
    ): EventEmitter;
    MetaTransactionExecuted(
      options?: EventOptions,
      cb?: Callback<MetaTransactionExecuted>,
    ): EventEmitter;

    RoleAdminChanged(cb?: Callback<RoleAdminChanged>): EventEmitter;
    RoleAdminChanged(
      options?: EventOptions,
      cb?: Callback<RoleAdminChanged>,
    ): EventEmitter;

    RoleGranted(cb?: Callback<RoleGranted>): EventEmitter;
    RoleGranted(
      options?: EventOptions,
      cb?: Callback<RoleGranted>,
    ): EventEmitter;

    RoleRevoked(cb?: Callback<RoleRevoked>): EventEmitter;
    RoleRevoked(
      options?: EventOptions,
      cb?: Callback<RoleRevoked>,
    ): EventEmitter;

    Transfer(cb?: Callback<Transfer>): EventEmitter;
    Transfer(options?: EventOptions, cb?: Callback<Transfer>): EventEmitter;

    Upgraded(cb?: Callback<Upgraded>): EventEmitter;
    Upgraded(options?: EventOptions, cb?: Callback<Upgraded>): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: 'AdminChanged', cb: Callback<AdminChanged>): void;
  once(
    event: 'AdminChanged',
    options: EventOptions,
    cb: Callback<AdminChanged>,
  ): void;

  once(event: 'Approval', cb: Callback<Approval>): void;
  once(event: 'Approval', options: EventOptions, cb: Callback<Approval>): void;

  once(event: 'BeaconUpgraded', cb: Callback<BeaconUpgraded>): void;
  once(
    event: 'BeaconUpgraded',
    options: EventOptions,
    cb: Callback<BeaconUpgraded>,
  ): void;

  once(
    event: 'ForwarderContractUpdated',
    cb: Callback<ForwarderContractUpdated>,
  ): void;
  once(
    event: 'ForwarderContractUpdated',
    options: EventOptions,
    cb: Callback<ForwarderContractUpdated>,
  ): void;

  once(event: 'Initialized', cb: Callback<Initialized>): void;
  once(
    event: 'Initialized',
    options: EventOptions,
    cb: Callback<Initialized>,
  ): void;

  once(
    event: 'MetaTransactionExecuted',
    cb: Callback<MetaTransactionExecuted>,
  ): void;
  once(
    event: 'MetaTransactionExecuted',
    options: EventOptions,
    cb: Callback<MetaTransactionExecuted>,
  ): void;

  once(event: 'RoleAdminChanged', cb: Callback<RoleAdminChanged>): void;
  once(
    event: 'RoleAdminChanged',
    options: EventOptions,
    cb: Callback<RoleAdminChanged>,
  ): void;

  once(event: 'RoleGranted', cb: Callback<RoleGranted>): void;
  once(
    event: 'RoleGranted',
    options: EventOptions,
    cb: Callback<RoleGranted>,
  ): void;

  once(event: 'RoleRevoked', cb: Callback<RoleRevoked>): void;
  once(
    event: 'RoleRevoked',
    options: EventOptions,
    cb: Callback<RoleRevoked>,
  ): void;

  once(event: 'Transfer', cb: Callback<Transfer>): void;
  once(event: 'Transfer', options: EventOptions, cb: Callback<Transfer>): void;

  once(event: 'Upgraded', cb: Callback<Upgraded>): void;
  once(event: 'Upgraded', options: EventOptions, cb: Callback<Upgraded>): void;
}
