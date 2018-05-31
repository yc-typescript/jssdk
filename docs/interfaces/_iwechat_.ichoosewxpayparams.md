

# Hierarchy

**IChooseWXPayParams**

# Properties

<a id="noncestr"></a>

##  nonceStr

**● nonceStr**: *`string`*

*Defined in [IWechat.ts:596](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/IWechat.ts#L596)*

支付签名随机串，不长于 32 位

___
<a id="package"></a>

##  package

**● package**: *`string`*

*Defined in [IWechat.ts:601](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/IWechat.ts#L601)*

统一支付接口返回的prepay\_id参数值，提交格式如：prepay\_id=***）

___
<a id="paysign"></a>

##  paySign

**● paySign**: *`string`*

*Defined in [IWechat.ts:611](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/IWechat.ts#L611)*

支付签名

___
<a id="signtype"></a>

##  signType

**● signType**: *`string`*

*Defined in [IWechat.ts:606](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/IWechat.ts#L606)*

签名方式，默认为'SHA1'，使用新版支付需传入'MD5'

___
<a id="timestamp"></a>

##  timestamp

**● timestamp**: *`number`*

*Defined in [IWechat.ts:591](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/IWechat.ts#L591)*

支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符

___

