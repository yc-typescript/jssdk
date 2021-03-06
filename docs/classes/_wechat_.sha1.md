

# Hierarchy

**Sha1**

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Sha1**(str: *`string`*): [Sha1](_wechat_.sha1.md)

*Defined in [Wechat.ts:405](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/Wechat.ts#L405)*

Create a new sha1 algorithm

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| str | `string` |  string to encrypt |

**Returns:** [Sha1](_wechat_.sha1.md)

___

# Properties

<a id="str"></a>

## `<Private>` str

**● str**: *`string`*

*Defined in [Wechat.ts:405](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/Wechat.ts#L405)*

___

# Methods

<a id="binb2hex"></a>

## `<Private>` binb2hex

▸ **binb2hex**(binarray: *`any`*, hexcase: *`any`*): `string`

*Defined in [Wechat.ts:503](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/Wechat.ts#L503)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| binarray | `any` |
| hexcase | `any` |

**Returns:** `string`

___
<a id="core_sha1"></a>

## `<Private>` core_sha1

▸ **core_sha1**(x: *`any`*, len: *`any`*): `number`[]

*Defined in [Wechat.ts:435](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/Wechat.ts#L435)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| x | `any` |
| len | `any` |

**Returns:** `number`[]

___
<a id="rol"></a>

## `<Private>` rol

▸ **rol**(num: *`any`*, cnt: *`any`*): `number`

*Defined in [Wechat.ts:499](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/Wechat.ts#L499)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| num | `any` |
| cnt | `any` |

**Returns:** `number`

___
<a id="safe_add"></a>

## `<Private>` safe_add

▸ **safe_add**(x: *`any`*, y: *`any`*): `number`

*Defined in [Wechat.ts:493](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/Wechat.ts#L493)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| x | `any` |
| y | `any` |

**Returns:** `number`

___
<a id="sha1_ft"></a>

## `<Private>` sha1_ft

▸ **sha1_ft**(t: *`any`*, b: *`any`*, c: *`any`*, d: *`any`*): `number`

*Defined in [Wechat.ts:476](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/Wechat.ts#L476)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| t | `any` |
| b | `any` |
| c | `any` |
| d | `any` |

**Returns:** `number`

___
<a id="sha1_kt"></a>

## `<Private>` sha1_kt

▸ **sha1_kt**(t: *`any`*):  `1518500249` &#124; `1859775393` &#124; `-1894007588` &#124; `-899497514`

*Defined in [Wechat.ts:483](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/Wechat.ts#L483)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| t | `any` |

**Returns:**  `1518500249` &#124; `1859775393` &#124; `-1894007588` &#124; `-899497514`

___
<a id="str2binb"></a>

## `<Private>` str2binb

▸ **str2binb**(chrsz: *`any`*): `any`[]

*Defined in [Wechat.ts:427](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/Wechat.ts#L427)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| chrsz | `any` |

**Returns:** `any`[]

___
<a id="tohex"></a>

##  toHex

▸ **toHex**(outputCase: *`number`*, encoding: *`number`*): `string`

*Defined in [Wechat.ts:420](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/Wechat.ts#L420)*

Generate hex result

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| outputCase | `number` |  \`Sha1.Case.lower\` or \`Sha1.Case.upper\` |
| encoding | `number` |  \`Sha1.Encoding.ASCII\` or \`Sha1.Encoding.Unicode\` |

**Returns:** `string`

___

# Object literals

<a id="case"></a>

## `<Static>` Case

**Case**: *`object`*

*Defined in [Wechat.ts:380](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/Wechat.ts#L380)*

hex output format. 0 - lowercase; 1 - uppercase

<a id="case.lower"></a>

###  lower

**● lower**: *`number`* = 0

*Defined in [Wechat.ts:384](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/Wechat.ts#L384)*

lowercase

___
<a id="case.upper"></a>

###  upper

**● upper**: *`number`* = 1

*Defined in [Wechat.ts:388](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/Wechat.ts#L388)*

uppercase

___

___
<a id="encoding"></a>

## `<Static>` Encoding

**Encoding**: *`object`*

*Defined in [Wechat.ts:394](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/Wechat.ts#L394)*

bits per input character. 8 - ASCII; 16 - Unicode

<a id="encoding.ascii"></a>

###  ASCII

**● ASCII**: *`number`* = 8

*Defined in [Wechat.ts:398](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/Wechat.ts#L398)*

ASCII

___
<a id="encoding.unicode"></a>

###  Unicode

**● Unicode**: *`number`* = 16

*Defined in [Wechat.ts:402](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/Wechat.ts#L402)*

Unicode

___

___

