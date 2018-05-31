

# Hierarchy

**IWechat**

# Implemented by

* [Wechat](../classes/_wechat_.wechat.md)

# Methods

<a id="addcard"></a>

##  addCard

▸ **addCard**(data: *[IAddCardParams](_iwechat_.iaddcardparams.md)*): `Promise`<`any`>

*Defined in [IWechat.ts:195](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/IWechat.ts#L195)*

批量添加卡券接口

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | [IAddCardParams](_iwechat_.iaddcardparams.md) |  待添加的卡券对象 |

**Returns:** `Promise`<`any`>

___
<a id="checkjsapi"></a>

##  checkJsApi

▸ **checkJsApi**(...jsApiList: *`string`[]*): `Promise`<`any`>

*Defined in [IWechat.ts:23](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/IWechat.ts#L23)*

判断当前客户端版本是否支持指定JS接口 checkJsApi接口是客户端6.0.2新引入的一个预留接口，第一期开放的接口均可不使用checkJsApi来检测。

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Rest` jsApiList | `string`[] |  需要检测的JS接口 |

**Returns:** `Promise`<`any`>

___
<a id="choosecard"></a>

##  chooseCard

▸ **chooseCard**(data: *[IChooseCardParams](_iwechat_.ichoosecardparams.md)*): `Promise`<`any`>

*Defined in [IWechat.ts:201](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/IWechat.ts#L201)*

拉取适用卡券列表并获取用户选择信息

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | [IChooseCardParams](_iwechat_.ichoosecardparams.md) |  适用卡券对象 |

**Returns:** `Promise`<`any`>

___
<a id="chooseimage"></a>

##  chooseImage

▸ **chooseImage**(data: *[IChooseImageParams](_iwechat_.ichooseimageparams.md)*): `Promise`<`any`>

*Defined in [IWechat.ts:59](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/IWechat.ts#L59)*

拍照或从手机相册中选图接口

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | [IChooseImageParams](_iwechat_.ichooseimageparams.md) |  选图对象 |

**Returns:** `Promise`<`any`>

___
<a id="choosewxpay"></a>

##  chooseWXPay

▸ **chooseWXPay**(data: *[IChooseWXPayParams](_iwechat_.ichoosewxpayparams.md)*): `Promise`<`any`>

*Defined in [IWechat.ts:16](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/IWechat.ts#L16)*

发起一个微信支付请求

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | [IChooseWXPayParams](_iwechat_.ichoosewxpayparams.md) |  支付对象 |

**Returns:** `Promise`<`any`>

___
<a id="closewindow"></a>

##  closeWindow

▸ **closeWindow**(): `void`

*Defined in [IWechat.ts:177](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/IWechat.ts#L177)*

关闭当前网页窗口接口

**Returns:** `void`

___
<a id="config"></a>

##  config

▸ **config**(ticket: *`string`*, ...jsApiList: *[IWechatAPI](../modules/_wechatapi_.md#iwechatapi)[]*): `Promise`<`void`>

*Defined in [IWechat.ts:10](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/IWechat.ts#L10)*

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

▸ **downloadImage**(data: *[IDownloadImageParams](_iwechat_.idownloadimageparams.md)*): `Promise`<`any`>

*Defined in [IWechat.ts:77](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/IWechat.ts#L77)*

下载图片接口

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | [IDownloadImageParams](_iwechat_.idownloadimageparams.md) |  上传图片对象 |

**Returns:** `Promise`<`any`>

___
<a id="downloadvoice"></a>

##  downloadVoice

▸ **downloadVoice**(data: *[IDownloadVoiceParams](_iwechat_.idownloadvoiceparams.md)*): `Promise`<`any`>

*Defined in [IWechat.ts:127](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/IWechat.ts#L127)*

下载语音接口

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | [IDownloadVoiceParams](_iwechat_.idownloadvoiceparams.md) |  音频对象 |

**Returns:** `Promise`<`any`>

___
<a id="getlocation"></a>

##  getLocation

▸ **getLocation**(data: *[IGetLocationParams](_iwechat_.igetlocationparams.md)*): `Promise`<`any`>

*Defined in [IWechat.ts:150](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/IWechat.ts#L150)*

获取地理位置接口

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | [IGetLocationParams](_iwechat_.igetlocationparams.md) |  坐标对象 |

**Returns:** `Promise`<`any`>

___
<a id="getnetworktype"></a>

##  getNetworkType

▸ **getNetworkType**(): `Promise`<`any`>

*Defined in [IWechat.ts:138](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/IWechat.ts#L138)*

获取网络状态接口

**Returns:** `Promise`<`any`>

___
<a id="hideallnonbasemenuitem"></a>

##  hideAllNonBaseMenuItem

▸ **hideAllNonBaseMenuItem**(): `void`

*Defined in [IWechat.ts:167](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/IWechat.ts#L167)*

隐藏所有非基础按钮接口

**Returns:** `void`

___
<a id="hidemenuitems"></a>

##  hideMenuItems

▸ **hideMenuItems**(data: *[IHideMenuItemsParams](_iwechat_.ihidemenuitemsparams.md)*): `void`

*Defined in [IWechat.ts:156](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/IWechat.ts#L156)*

批量隐藏功能按钮接口

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | [IHideMenuItemsParams](_iwechat_.ihidemenuitemsparams.md) |  需要隐藏的菜单对象 |

**Returns:** `void`

___
<a id="onmenushareappmessage"></a>

##  onMenuShareAppMessage

▸ **onMenuShareAppMessage**(data: *[IOnMenuShareAppMessageParams](_iwechat_.ionmenushareappmessageparams.md)*): `Promise`<`any`>

*Defined in [IWechat.ts:35](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/IWechat.ts#L35)*

获取“分享给朋友”按钮点击状态及自定义分享内容接口

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | [IOnMenuShareAppMessageParams](_iwechat_.ionmenushareappmessageparams.md) |  自定义分享的标题、描述、链接、图标、分享类型及数据链接的参数接口 |

**Returns:** `Promise`<`any`>

___
<a id="onmenushareqq"></a>

##  onMenuShareQQ

▸ **onMenuShareQQ**(data: *[IOnMenuShareQQParams](_iwechat_.ionmenushareqqparams.md)*): `Promise`<`any`>

*Defined in [IWechat.ts:41](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/IWechat.ts#L41)*

获取“分享到QQ”按钮点击状态及自定义分享内容接口

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | [IOnMenuShareQQParams](_iwechat_.ionmenushareqqparams.md) |  自定义分享的标题、描述、链接、图标参数接口 |

**Returns:** `Promise`<`any`>

___
<a id="onmenushareqzone"></a>

##  onMenuShareQZone

▸ **onMenuShareQZone**(data: *[IOnMenuShareQZoneParams](_iwechat_.ionmenushareqzoneparams.md)*): `Promise`<`any`>

*Defined in [IWechat.ts:53](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/IWechat.ts#L53)*

获取“分享到QQ空间”按钮点击状态及自定义分享内容接口

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | [IOnMenuShareQZoneParams](_iwechat_.ionmenushareqzoneparams.md) |  自定义分享的标题、描述、链接、图标参数接口 |

**Returns:** `Promise`<`any`>

___
<a id="onmenusharetimeline"></a>

##  onMenuShareTimeline

▸ **onMenuShareTimeline**(data: *[IOnMenuShareTimelineParams](_iwechat_.ionmenusharetimelineparams.md)*): `Promise`<`any`>

*Defined in [IWechat.ts:29](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/IWechat.ts#L29)*

获取“分享到朋友圈”按钮点击状态及自定义分享内容接口

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | [IOnMenuShareTimelineParams](_iwechat_.ionmenusharetimelineparams.md) |  自定义分享的标题、链接、图标的参数接口 |

**Returns:** `Promise`<`any`>

___
<a id="onmenushareweibo"></a>

##  onMenuShareWeibo

▸ **onMenuShareWeibo**(data: *[IOnMenuShareWeiboParams](_iwechat_.ionmenushareweiboparams.md)*): `Promise`<`any`>

*Defined in [IWechat.ts:47](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/IWechat.ts#L47)*

获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | [IOnMenuShareWeiboParams](_iwechat_.ionmenushareweiboparams.md) |  自定义分享的标题、描述、链接、图标参数接口 |

**Returns:** `Promise`<`any`>

___
<a id="onvoiceplayend"></a>

##  onVoicePlayEnd

▸ **onVoicePlayEnd**(): `Promise`<`any`>

*Defined in [IWechat.ts:115](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/IWechat.ts#L115)*

监听语音播放完毕接口

**Returns:** `Promise`<`any`>

___
<a id="onvoicerecordend"></a>

##  onVoiceRecordEnd

▸ **onVoiceRecordEnd**(): `Promise`<`any`>

*Defined in [IWechat.ts:92](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/IWechat.ts#L92)*

监听录音自动停止接口

**Returns:** `Promise`<`any`>

___
<a id="opencard"></a>

##  openCard

▸ **openCard**(data: *[IOpenCardParams](_iwechat_.iopencardparams.md)*): `void`

*Defined in [IWechat.ts:207](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/IWechat.ts#L207)*

查看微信卡包中的卡券接口

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | [IOpenCardParams](_iwechat_.iopencardparams.md) |  待打开的卡券列表对象 |

**Returns:** `void`

___
<a id="openlocation"></a>

##  openLocation

▸ **openLocation**(data: *[IOpenLocationParams](_iwechat_.iopenlocationparams.md)*): `void`

*Defined in [IWechat.ts:144](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/IWechat.ts#L144)*

使用微信内置地图查看位置接口

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | [IOpenLocationParams](_iwechat_.iopenlocationparams.md) |  位置对象 |

**Returns:** `void`

___
<a id="openproductspecificview"></a>

##  openProductSpecificView

▸ **openProductSpecificView**(data: *[IOpenProductionSpecifiViewParams](_iwechat_.iopenproductionspecifiviewparams.md)*): `void`

*Defined in [IWechat.ts:189](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/IWechat.ts#L189)*

跳转微信商品页接口

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | [IOpenProductionSpecifiViewParams](_iwechat_.iopenproductionspecifiviewparams.md) |  参数对象 |

**Returns:** `void`

___
<a id="pausevoice"></a>

##  pauseVoice

▸ **pauseVoice**(data: *[IPauseVoiceParams](_iwechat_.ipausevoiceparams.md)*): `void`

*Defined in [IWechat.ts:104](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/IWechat.ts#L104)*

暂停播放接口

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | [IPauseVoiceParams](_iwechat_.ipausevoiceparams.md) |  音频对象 |

**Returns:** `void`

___
<a id="playvoice"></a>

##  playVoice

▸ **playVoice**(data: *[IPlayVoiceParams](_iwechat_.iplayvoiceparams.md)*): `void`

*Defined in [IWechat.ts:98](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/IWechat.ts#L98)*

播放语音接口

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | [IPlayVoiceParams](_iwechat_.iplayvoiceparams.md) |  音频对象 |

**Returns:** `void`

___
<a id="previewimage"></a>

##  previewImage

▸ **previewImage**(data: *[IPreviewImageParams](_iwechat_.ipreviewimageparams.md)*): `void`

*Defined in [IWechat.ts:65](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/IWechat.ts#L65)*

预览图片接口

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | [IPreviewImageParams](_iwechat_.ipreviewimageparams.md) |  预览图片对象 |

**Returns:** `void`

___
<a id="scanqrcode"></a>

##  scanQRCode

▸ **scanQRCode**(data: *[IScanQRCodeParams](_iwechat_.iscanqrcodeparams.md)*): `Promise`<`any`>

*Defined in [IWechat.ts:183](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/IWechat.ts#L183)*

调起微信扫一扫接口

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | [IScanQRCodeParams](_iwechat_.iscanqrcodeparams.md) |  参数对象 |

**Returns:** `Promise`<`any`>

___
<a id="showallnonbasemenuitem"></a>

##  showAllNonBaseMenuItem

▸ **showAllNonBaseMenuItem**(): `void`

*Defined in [IWechat.ts:172](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/IWechat.ts#L172)*

显示所有功能按钮接口

**Returns:** `void`

___
<a id="showmenuitems"></a>

##  showMenuItems

▸ **showMenuItems**(data: *[IShowMenuItemsParams](_iwechat_.ishowmenuitemsparams.md)*): `void`

*Defined in [IWechat.ts:162](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/IWechat.ts#L162)*

批量显示功能按钮接口

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | [IShowMenuItemsParams](_iwechat_.ishowmenuitemsparams.md) |  需要显示的菜单对象 |

**Returns:** `void`

___
<a id="startrecord"></a>

##  startRecord

▸ **startRecord**(): `void`

*Defined in [IWechat.ts:82](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/IWechat.ts#L82)*

开始录音接口

**Returns:** `void`

___
<a id="stoprecord"></a>

##  stopRecord

▸ **stopRecord**(): `Promise`<`any`>

*Defined in [IWechat.ts:87](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/IWechat.ts#L87)*

停止录音接口

**Returns:** `Promise`<`any`>

___
<a id="stopvoice"></a>

##  stopVoice

▸ **stopVoice**(data: *[IStopVoiceParams](_iwechat_.istopvoiceparams.md)*): `void`

*Defined in [IWechat.ts:110](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/IWechat.ts#L110)*

停止播放接口

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | [IStopVoiceParams](_iwechat_.istopvoiceparams.md) |  音频对象 |

**Returns:** `void`

___
<a id="translatevoice"></a>

##  translateVoice

▸ **translateVoice**(data: *[ITranslateVoiceParams](_iwechat_.itranslatevoiceparams.md)*): `Promise`<`any`>

*Defined in [IWechat.ts:133](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/IWechat.ts#L133)*

识别音频并返回识别结果接口

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | [ITranslateVoiceParams](_iwechat_.itranslatevoiceparams.md) |  需要识别的音频对象 |

**Returns:** `Promise`<`any`>

___
<a id="uploadimage"></a>

##  uploadImage

▸ **uploadImage**(data: *[IUploadImageParams](_iwechat_.iuploadimageparams.md)*): `Promise`<`any`>

*Defined in [IWechat.ts:71](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/IWechat.ts#L71)*

上传图片接口，上传图片有效期3天，可用微信多媒体接口下载图片到自己的服务器，此处获得的 serverId 即 media_id。

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | [IUploadImageParams](_iwechat_.iuploadimageparams.md) |  上传图片对象 |

**Returns:** `Promise`<`any`>

___
<a id="uploadvoice"></a>

##  uploadVoice

▸ **uploadVoice**(data: *[IUploadVoiceParams](_iwechat_.iuploadvoiceparams.md)*): `Promise`<`any`>

*Defined in [IWechat.ts:121](https://github.com/yc-typescript/jssdk/blob/4422e9c/src/IWechat.ts#L121)*

上传语音接口;上传语音有效期3天，可用微信多媒体接口下载语音到自己的服务器，此处获得的 serverId 即 media_id

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | [IUploadVoiceParams](_iwechat_.iuploadvoiceparams.md) |  音频对象 |

**Returns:** `Promise`<`any`>

___

