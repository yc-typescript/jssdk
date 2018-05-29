

# Hierarchy

**Wechat**

# Implements

* [IWechat](../interfaces/_iwechat_.iwechat.md)

# Constructors

<a id="constructor"></a>

##  constructor

⊕ **new Wechat**(appId: *`string`*, debug?: *`boolean`*): [Wechat](_wechat_.wechat.md)

*Defined in Wechat.ts:37*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| appId | `string` | - |
| `Default value` debug | `boolean` | false |

**Returns:** [Wechat](_wechat_.wechat.md)

___

# Properties

<a id="_ready"></a>

## `<Private>` _ready

**● _ready**: *`Promise`<`any`>*

*Defined in Wechat.ts:37*

___
<a id="appid"></a>

##  appId

**● appId**: *`string`*

*Defined in Wechat.ts:39*

___
<a id="debug"></a>

##  debug

**● debug**: *`boolean`*

*Defined in Wechat.ts:39*

___

# Methods

<a id="addcard"></a>

##  addCard

▸ **addCard**(data: *[IAddCardParams](../interfaces/_iwechat_.iaddcardparams.md)*): `Promise`<`any`>

*Implementation of [IWechat](../interfaces/_iwechat_.iwechat.md).[addCard](../interfaces/_iwechat_.iwechat.md#addcard)*

*Defined in Wechat.ts:346*

批量添加卡券接口

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | [IAddCardParams](../interfaces/_iwechat_.iaddcardparams.md) |  待添加的卡券对象 |

**Returns:** `Promise`<`any`>

___
<a id="checkjsapi"></a>

##  checkJsApi

▸ **checkJsApi**(...jsApiList: *`string`[]*): `Promise`<`any`>

*Implementation of [IWechat](../interfaces/_iwechat_.iwechat.md).[checkJsApi](../interfaces/_iwechat_.iwechat.md#checkjsapi)*

*Defined in Wechat.ts:112*

判断当前客户端版本是否支持指定JS接口 checkJsApi接口是客户端6.0.2新引入的一个预留接口，第一期开放的接口均可不使用checkJsApi来检测。

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Rest` jsApiList | `string`[] |  需要检测的JS接口 |

**Returns:** `Promise`<`any`>

___
<a id="choosecard"></a>

##  chooseCard

▸ **chooseCard**(data: *[IChooseCardParams](../interfaces/_iwechat_.ichoosecardparams.md)*): `Promise`<`any`>

*Implementation of [IWechat](../interfaces/_iwechat_.iwechat.md).[chooseCard](../interfaces/_iwechat_.iwechat.md#choosecard)*

*Defined in Wechat.ts:354*

拉取适用卡券列表并获取用户选择信息

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | [IChooseCardParams](../interfaces/_iwechat_.ichoosecardparams.md) |  适用卡券对象 |

**Returns:** `Promise`<`any`>

___
<a id="chooseimage"></a>

##  chooseImage

▸ **chooseImage**(data: *[IChooseImageParams](../interfaces/_iwechat_.ichooseimageparams.md)*): `Promise`<`any`>

*Implementation of [IWechat](../interfaces/_iwechat_.iwechat.md).[chooseImage](../interfaces/_iwechat_.iwechat.md#chooseimage)*

*Defined in Wechat.ts:162*

拍照或从手机相册中选图接口

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | [IChooseImageParams](../interfaces/_iwechat_.ichooseimageparams.md) |  选图对象 |

**Returns:** `Promise`<`any`>

___
<a id="choosewxpay"></a>

##  chooseWXPay

▸ **chooseWXPay**(data: *[IChooseWXPayParams](../interfaces/_iwechat_.ichoosewxpayparams.md)*): `Promise`<`any`>

*Implementation of [IWechat](../interfaces/_iwechat_.iwechat.md).[chooseWXPay](../interfaces/_iwechat_.iwechat.md#choosewxpay)*

*Defined in Wechat.ts:370*

发起一个微信支付请求

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | [IChooseWXPayParams](../interfaces/_iwechat_.ichoosewxpayparams.md) |  支付对象 |

**Returns:** `Promise`<`any`>

___
<a id="closewindow"></a>

##  closeWindow

▸ **closeWindow**(): `any`

*Implementation of [IWechat](../interfaces/_iwechat_.iwechat.md).[closeWindow](../interfaces/_iwechat_.iwechat.md#closewindow)*

*Defined in Wechat.ts:322*

关闭当前网页窗口接口

**Returns:** `any`

___
<a id="config"></a>

##  config

▸ **config**(ticket: *`string`*, ...jsApiList: *[IWechatAPI](../modules/_wechatapi_.md#iwechatapi)[]*): `Promise`<`void`>

*Implementation of [IWechat](../interfaces/_iwechat_.iwechat.md).[config](../interfaces/_iwechat_.iwechat.md#config)*

*Defined in Wechat.ts:56*

通过config接口注入权限验证配置 所有需要使用JS-SDK的页面必须先注入配置信息，否则将无法调用（同一个url仅需调用一次，对于变化url的SPA的web app可在每次url变化时进行调用,目前Android微信客户端不支持pushState的H5新特性，所以使用pushState来实现web app的页面会导致签名失败，此问题会在Android6.2中修复）

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| ticket | `string` |  从服务端获取 |
| `Rest` jsApiList | [IWechatAPI](../modules/_wechatapi_.md#iwechatapi)[] |  需要使用的JS接口列表 |

**Returns:** `Promise`<`void`>

___
<a id="downloadimage"></a>

##  downloadImage

▸ **downloadImage**(data: *[IDownloadImageParams](../interfaces/_iwechat_.idownloadimageparams.md)*): `Promise`<`any`>

*Implementation of [IWechat](../interfaces/_iwechat_.iwechat.md).[downloadImage](../interfaces/_iwechat_.iwechat.md#downloadimage)*

*Defined in Wechat.ts:186*

下载图片接口

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | [IDownloadImageParams](../interfaces/_iwechat_.idownloadimageparams.md) |  上传图片对象 |

**Returns:** `Promise`<`any`>

___
<a id="downloadvoice"></a>

##  downloadVoice

▸ **downloadVoice**(data: *[IDownloadVoiceParams](../interfaces/_iwechat_.idownloadvoiceparams.md)*): `Promise`<`any`>

*Implementation of [IWechat](../interfaces/_iwechat_.iwechat.md).[downloadVoice](../interfaces/_iwechat_.iwechat.md#downloadvoice)*

*Defined in Wechat.ts:254*

下载语音接口

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | [IDownloadVoiceParams](../interfaces/_iwechat_.idownloadvoiceparams.md) |  音频对象 |

**Returns:** `Promise`<`any`>

___
<a id="getlocation"></a>

##  getLocation

▸ **getLocation**(data: *[IGetLocationParams](../interfaces/_iwechat_.igetlocationparams.md)*): `Promise`<`any`>

*Implementation of [IWechat](../interfaces/_iwechat_.iwechat.md).[getLocation](../interfaces/_iwechat_.iwechat.md#getlocation)*

*Defined in Wechat.ts:285*

获取地理位置接口

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | [IGetLocationParams](../interfaces/_iwechat_.igetlocationparams.md) |  坐标对象 |

**Returns:** `Promise`<`any`>

___
<a id="getnetworktype"></a>

##  getNetworkType

▸ **getNetworkType**(): `Promise`<`any`>

*Implementation of [IWechat](../interfaces/_iwechat_.iwechat.md).[getNetworkType](../interfaces/_iwechat_.iwechat.md#getnetworktype)*

*Defined in Wechat.ts:269*

获取网络状态接口

**Returns:** `Promise`<`any`>

___
<a id="hideallnonbasemenuitem"></a>

##  hideAllNonBaseMenuItem

▸ **hideAllNonBaseMenuItem**(): `any`

*Implementation of [IWechat](../interfaces/_iwechat_.iwechat.md).[hideAllNonBaseMenuItem](../interfaces/_iwechat_.iwechat.md#hideallnonbasemenuitem)*

*Defined in Wechat.ts:308*

隐藏所有非基础按钮接口

**Returns:** `any`

___
<a id="hidemenuitems"></a>

##  hideMenuItems

▸ **hideMenuItems**(data: *[IHideMenuItemsParams](../interfaces/_iwechat_.ihidemenuitemsparams.md)*): `any`

*Implementation of [IWechat](../interfaces/_iwechat_.iwechat.md).[hideMenuItems](../interfaces/_iwechat_.iwechat.md#hidemenuitems)*

*Defined in Wechat.ts:293*

批量隐藏功能按钮接口

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | [IHideMenuItemsParams](../interfaces/_iwechat_.ihidemenuitemsparams.md) |  需要隐藏的菜单对象 |

**Returns:** `any`

___
<a id="onmenushareappmessage"></a>

##  onMenuShareAppMessage

▸ **onMenuShareAppMessage**(data: *[IOnMenuShareAppMessageParams](../interfaces/_iwechat_.ionmenushareappmessageparams.md)*): `Promise`<`any`>

*Implementation of [IWechat](../interfaces/_iwechat_.iwechat.md).[onMenuShareAppMessage](../interfaces/_iwechat_.iwechat.md#onmenushareappmessage)*

*Defined in Wechat.ts:128*

获取“分享给朋友”按钮点击状态及自定义分享内容接口

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | [IOnMenuShareAppMessageParams](../interfaces/_iwechat_.ionmenushareappmessageparams.md) |  自定义分享的标题、描述、链接、图标、分享类型及数据链接的参数接口 |

**Returns:** `Promise`<`any`>

___
<a id="onmenushareqq"></a>

##  onMenuShareQQ

▸ **onMenuShareQQ**(data: *[IOnMenuShareQQParams](../interfaces/_iwechat_.ionmenushareqqparams.md)*): `Promise`<`any`>

*Implementation of [IWechat](../interfaces/_iwechat_.iwechat.md).[onMenuShareQQ](../interfaces/_iwechat_.iwechat.md#onmenushareqq)*

*Defined in Wechat.ts:138*

获取“分享到QQ”按钮点击状态及自定义分享内容接口

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | [IOnMenuShareQQParams](../interfaces/_iwechat_.ionmenushareqqparams.md) |  自定义分享的标题、描述、链接、图标参数接口 |

**Returns:** `Promise`<`any`>

___
<a id="onmenushareqzone"></a>

##  onMenuShareQZone

▸ **onMenuShareQZone**(data: *[IOnMenuShareQZoneParams](../interfaces/_iwechat_.ionmenushareqzoneparams.md)*): `Promise`<`any`>

*Implementation of [IWechat](../interfaces/_iwechat_.iwechat.md).[onMenuShareQZone](../interfaces/_iwechat_.iwechat.md#onmenushareqzone)*

*Defined in Wechat.ts:154*

获取“分享到QQ空间”按钮点击状态及自定义分享内容接口

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | [IOnMenuShareQZoneParams](../interfaces/_iwechat_.ionmenushareqzoneparams.md) |  自定义分享的标题、描述、链接、图标参数接口 |

**Returns:** `Promise`<`any`>

___
<a id="onmenusharetimeline"></a>

##  onMenuShareTimeline

▸ **onMenuShareTimeline**(data: *[IOnMenuShareTimelineParams](../interfaces/_iwechat_.ionmenusharetimelineparams.md)*): `Promise`<`any`>

*Implementation of [IWechat](../interfaces/_iwechat_.iwechat.md).[onMenuShareTimeline](../interfaces/_iwechat_.iwechat.md#onmenusharetimeline)*

*Defined in Wechat.ts:120*

获取“分享到朋友圈”按钮点击状态及自定义分享内容接口

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | [IOnMenuShareTimelineParams](../interfaces/_iwechat_.ionmenusharetimelineparams.md) |  自定义分享的标题、链接、图标的参数接口 |

**Returns:** `Promise`<`any`>

___
<a id="onmenushareweibo"></a>

##  onMenuShareWeibo

▸ **onMenuShareWeibo**(data: *[IOnMenuShareWeiboParams](../interfaces/_iwechat_.ionmenushareweiboparams.md)*): `Promise`<`any`>

*Implementation of [IWechat](../interfaces/_iwechat_.iwechat.md).[onMenuShareWeibo](../interfaces/_iwechat_.iwechat.md#onmenushareweibo)*

*Defined in Wechat.ts:146*

获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | [IOnMenuShareWeiboParams](../interfaces/_iwechat_.ionmenushareweiboparams.md) |  自定义分享的标题、描述、链接、图标参数接口 |

**Returns:** `Promise`<`any`>

___
<a id="onvoiceplayend"></a>

##  onVoicePlayEnd

▸ **onVoicePlayEnd**(): `Promise`<`any`>

*Implementation of [IWechat](../interfaces/_iwechat_.iwechat.md).[onVoicePlayEnd](../interfaces/_iwechat_.iwechat.md#onvoiceplayend)*

*Defined in Wechat.ts:238*

监听语音播放完毕接口

**Returns:** `Promise`<`any`>

___
<a id="onvoicerecordend"></a>

##  onVoiceRecordEnd

▸ **onVoiceRecordEnd**(): `Promise`<`any`>

*Implementation of [IWechat](../interfaces/_iwechat_.iwechat.md).[onVoiceRecordEnd](../interfaces/_iwechat_.iwechat.md#onvoicerecordend)*

*Defined in Wechat.ts:207*

监听录音自动停止接口

**Returns:** `Promise`<`any`>

___
<a id="opencard"></a>

##  openCard

▸ **openCard**(data: *[IOpenCardParams](../interfaces/_iwechat_.iopencardparams.md)*): `any`

*Implementation of [IWechat](../interfaces/_iwechat_.iwechat.md).[openCard](../interfaces/_iwechat_.iwechat.md#opencard)*

*Defined in Wechat.ts:362*

查看微信卡包中的卡券接口

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | [IOpenCardParams](../interfaces/_iwechat_.iopencardparams.md) |  待打开的卡券列表对象 |

**Returns:** `any`

___
<a id="openlocation"></a>

##  openLocation

▸ **openLocation**(data: *[IOpenLocationParams](../interfaces/_iwechat_.iopenlocationparams.md)*): `any`

*Implementation of [IWechat](../interfaces/_iwechat_.iwechat.md).[openLocation](../interfaces/_iwechat_.iwechat.md#openlocation)*

*Defined in Wechat.ts:277*

使用微信内置地图查看位置接口

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | [IOpenLocationParams](../interfaces/_iwechat_.iopenlocationparams.md) |  位置对象 |

**Returns:** `any`

___
<a id="openproductspecificview"></a>

##  openProductSpecificView

▸ **openProductSpecificView**(data: *[IOpenProductionSpecifiViewParams](../interfaces/_iwechat_.iopenproductionspecifiviewparams.md)*): `Promise`<`any`>

*Implementation of [IWechat](../interfaces/_iwechat_.iwechat.md).[openProductSpecificView](../interfaces/_iwechat_.iwechat.md#openproductspecificview)*

*Defined in Wechat.ts:338*

跳转微信商品页接口

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | [IOpenProductionSpecifiViewParams](../interfaces/_iwechat_.iopenproductionspecifiviewparams.md) |  参数对象 |

**Returns:** `Promise`<`any`>

___
<a id="pausevoice"></a>

##  pauseVoice

▸ **pauseVoice**(data: *[IPauseVoiceParams](../interfaces/_iwechat_.ipausevoiceparams.md)*): `any`

*Implementation of [IWechat](../interfaces/_iwechat_.iwechat.md).[pauseVoice](../interfaces/_iwechat_.iwechat.md#pausevoice)*

*Defined in Wechat.ts:223*

暂停播放接口

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | [IPauseVoiceParams](../interfaces/_iwechat_.ipausevoiceparams.md) |  音频对象 |

**Returns:** `any`

___
<a id="playvoice"></a>

##  playVoice

▸ **playVoice**(data: *[IPlayVoiceParams](../interfaces/_iwechat_.iplayvoiceparams.md)*): `any`

*Implementation of [IWechat](../interfaces/_iwechat_.iwechat.md).[playVoice](../interfaces/_iwechat_.iwechat.md#playvoice)*

*Defined in Wechat.ts:215*

播放语音接口

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | [IPlayVoiceParams](../interfaces/_iwechat_.iplayvoiceparams.md) |  音频对象 |

**Returns:** `any`

___
<a id="previewimage"></a>

##  previewImage

▸ **previewImage**(data: *[IPreviewImageParams](../interfaces/_iwechat_.ipreviewimageparams.md)*): `any`

*Implementation of [IWechat](../interfaces/_iwechat_.iwechat.md).[previewImage](../interfaces/_iwechat_.iwechat.md#previewimage)*

*Defined in Wechat.ts:170*

预览图片接口

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | [IPreviewImageParams](../interfaces/_iwechat_.ipreviewimageparams.md) |  预览图片对象 |

**Returns:** `any`

___
<a id="promisify"></a>

## `<Private>` promisify

▸ **promisify**(api: *`string`*, data: *`any`*): `Promise`<`any`>

*Defined in Wechat.ts:92*

**Parameters:**

| Param | Type |
| ------ | ------ |
| api | `string` |
| data | `any` |

**Returns:** `Promise`<`any`>

___
<a id="ready"></a>

##  ready

▸ **ready**(): `Promise`<`any`>

*Defined in Wechat.ts:46*

判断 JSSKD 加载完成

**Returns:** `Promise`<`any`>

___
<a id="scanqrcode"></a>

##  scanQRCode

▸ **scanQRCode**(data: *[IScanQRCodeParams](../interfaces/_iwechat_.iscanqrcodeparams.md)*): `Promise`<`any`>

*Implementation of [IWechat](../interfaces/_iwechat_.iwechat.md).[scanQRCode](../interfaces/_iwechat_.iwechat.md#scanqrcode)*

*Defined in Wechat.ts:330*

调起微信扫一扫接口

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | [IScanQRCodeParams](../interfaces/_iwechat_.iscanqrcodeparams.md) |  参数对象 |

**Returns:** `Promise`<`any`>

___
<a id="showallnonbasemenuitem"></a>

##  showAllNonBaseMenuItem

▸ **showAllNonBaseMenuItem**(): `any`

*Implementation of [IWechat](../interfaces/_iwechat_.iwechat.md).[showAllNonBaseMenuItem](../interfaces/_iwechat_.iwechat.md#showallnonbasemenuitem)*

*Defined in Wechat.ts:315*

显示所有功能按钮接口

**Returns:** `any`

___
<a id="showmenuitems"></a>

##  showMenuItems

▸ **showMenuItems**(data: *[IShowMenuItemsParams](../interfaces/_iwechat_.ishowmenuitemsparams.md)*): `any`

*Implementation of [IWechat](../interfaces/_iwechat_.iwechat.md).[showMenuItems](../interfaces/_iwechat_.iwechat.md#showmenuitems)*

*Defined in Wechat.ts:301*

批量显示功能按钮接口

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | [IShowMenuItemsParams](../interfaces/_iwechat_.ishowmenuitemsparams.md) |  需要显示的菜单对象 |

**Returns:** `any`

___
<a id="startrecord"></a>

##  startRecord

▸ **startRecord**(): `any`

*Implementation of [IWechat](../interfaces/_iwechat_.iwechat.md).[startRecord](../interfaces/_iwechat_.iwechat.md#startrecord)*

*Defined in Wechat.ts:193*

开始录音接口

**Returns:** `any`

___
<a id="stoprecord"></a>

##  stopRecord

▸ **stopRecord**(): `Promise`<`any`>

*Implementation of [IWechat](../interfaces/_iwechat_.iwechat.md).[stopRecord](../interfaces/_iwechat_.iwechat.md#stoprecord)*

*Defined in Wechat.ts:200*

停止录音接口

**Returns:** `Promise`<`any`>

___
<a id="stopvoice"></a>

##  stopVoice

▸ **stopVoice**(data: *[IStopVoiceParams](../interfaces/_iwechat_.istopvoiceparams.md)*): `any`

*Implementation of [IWechat](../interfaces/_iwechat_.iwechat.md).[stopVoice](../interfaces/_iwechat_.iwechat.md#stopvoice)*

*Defined in Wechat.ts:231*

停止播放接口

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | [IStopVoiceParams](../interfaces/_iwechat_.istopvoiceparams.md) |  音频对象 |

**Returns:** `any`

___
<a id="translatevoice"></a>

##  translateVoice

▸ **translateVoice**(data: *[ITranslateVoiceParams](../interfaces/_iwechat_.itranslatevoiceparams.md)*): `Promise`<`any`>

*Implementation of [IWechat](../interfaces/_iwechat_.iwechat.md).[translateVoice](../interfaces/_iwechat_.iwechat.md#translatevoice)*

*Defined in Wechat.ts:262*

识别音频并返回识别结果接口

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | [ITranslateVoiceParams](../interfaces/_iwechat_.itranslatevoiceparams.md) |  需要识别的音频对象 |

**Returns:** `Promise`<`any`>

___
<a id="uploadimage"></a>

##  uploadImage

▸ **uploadImage**(data: *[IUploadImageParams](../interfaces/_iwechat_.iuploadimageparams.md)*): `Promise`<`any`>

*Implementation of [IWechat](../interfaces/_iwechat_.iwechat.md).[uploadImage](../interfaces/_iwechat_.iwechat.md#uploadimage)*

*Defined in Wechat.ts:178*

上传图片接口，上传图片有效期3天，可用微信多媒体接口下载图片到自己的服务器，此处获得的 serverId 即 media_id。

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | [IUploadImageParams](../interfaces/_iwechat_.iuploadimageparams.md) |  上传图片对象 |

**Returns:** `Promise`<`any`>

___
<a id="uploadvoice"></a>

##  uploadVoice

▸ **uploadVoice**(data: *[IUploadVoiceParams](../interfaces/_iwechat_.iuploadvoiceparams.md)*): `Promise`<`any`>

*Implementation of [IWechat](../interfaces/_iwechat_.iwechat.md).[uploadVoice](../interfaces/_iwechat_.iwechat.md#uploadvoice)*

*Defined in Wechat.ts:246*

上传语音接口,上传语音有效期3天，可用微信多媒体接口下载语音到自己的服务器，此处获得的 serverId 即 media_id

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | [IUploadVoiceParams](../interfaces/_iwechat_.iuploadvoiceparams.md) |  音频对象 |

**Returns:** `Promise`<`any`>

___

