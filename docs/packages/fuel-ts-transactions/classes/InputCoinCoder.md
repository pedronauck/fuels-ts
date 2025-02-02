---
layout: default
title: InputCoinCoder
parent: "@fuel-ts/transactions"
nav_order: 1

---

# Class: InputCoinCoder

[@fuel-ts/transactions](../index.md).InputCoinCoder

## Hierarchy

- `default`

  ↳ **`InputCoinCoder`**

## Constructors

### constructor

• **new InputCoinCoder**(`localName`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `localName` | `string` |

#### Overrides

Coder.constructor

#### Defined in

[transactions/src/coders/input.ts:41](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/input.ts#L41)

## Properties

### localName

• `Readonly` **localName**: `string`

#### Inherited from

Coder.localName

#### Defined in

abi-coder/dist/coders/abstract-coder.d.ts:12

___

### name

• `Readonly` **name**: `string`

#### Inherited from

Coder.name

#### Defined in

abi-coder/dist/coders/abstract-coder.d.ts:10

___

### type

• `Readonly` **type**: `string`

#### Inherited from

Coder.type

#### Defined in

abi-coder/dist/coders/abstract-coder.d.ts:11

## Methods

### decode

▸ **decode**(`data`, `offset`): [[`InputCoin`](../index.md#inputcoin), `number`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |
| `offset` | `number` |

#### Returns

[[`InputCoin`](../index.md#inputcoin), `number`]

#### Overrides

Coder.decode

#### Defined in

[transactions/src/coders/input.ts:64](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/input.ts#L64)

___

### encode

▸ **encode**(`value`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`InputCoin`](../index.md#inputcoin) |

#### Returns

`Uint8Array`

#### Overrides

Coder.encode

#### Defined in

[transactions/src/coders/input.ts:45](https://github.com/FuelLabs/fuels-ts/blob/master/packages/transactions/src/coders/input.ts#L45)

___

### throwError

▸ **throwError**(`message`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `value` | `unknown` |

#### Returns

`void`

#### Inherited from

Coder.throwError

#### Defined in

abi-coder/dist/coders/abstract-coder.d.ts:14
