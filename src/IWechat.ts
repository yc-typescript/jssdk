import { IWechatAPI } from './WechatAPI';

export interface IWechat {
  /**
   * 通过config接口注入权限验证配置
   * 所有需要使用JS-SDK的页面必须先注入配置信息，否则将无法调用（同一个url仅需调用一次，对于变化url的SPA的web app可在每次url变化时进行调用,目前Android微信客户端不支持pushState的H5新特性，所以使用pushState来实现web app的页面会导致签名失败，此问题会在Android6.2中修复）
   * @param ticket {string} 从服务端获取
   * @param jsApiList {IWechatAPI[]} 需要使用的JS接口列表
   */
  config(ticket: string, ...jsApiList: IWechatAPI[]): Promise<void>;

  /**
   * 发起一个微信支付请求
   * @param data {IChooseWXPayParams} 支付对象
   */
  chooseWXPay(data: IChooseWXPayParams): Promise<any>;

  /**
   * 判断当前客户端版本是否支持指定JS接口
   * checkJsApi接口是客户端6.0.2新引入的一个预留接口，第一期开放的接口均可不使用checkJsApi来检测。
   * @param jsApiList {string[]} 需要检测的JS接口
   */
  checkJsApi(...jsApiList: string[]): Promise<any>;

  /**
   * 获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
   * @param data {IOnMenuShareTimelineParams} 自定义分享的标题、链接、图标的参数接口
   */
  onMenuShareTimeline(data: IOnMenuShareTimelineParams): Promise<any>;

  /**
   * 获取“分享给朋友”按钮点击状态及自定义分享内容接口
   * @param data {IOnMenuShareAppMessageParams} 自定义分享的标题、描述、链接、图标、分享类型及数据链接的参数接口
   */
  onMenuShareAppMessage(data: IOnMenuShareAppMessageParams): Promise<any>;

  /**
   * 获取“分享到QQ”按钮点击状态及自定义分享内容接口
   * @param data {IOnMenuShareQQParams} 自定义分享的标题、描述、链接、图标参数接口
   */
  onMenuShareQQ(data: IOnMenuShareQQParams): Promise<any>;

  /**
   * 获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口
   * @param data {IOnMenuShareWeiboParams} 自定义分享的标题、描述、链接、图标参数接口
   */
  onMenuShareWeibo(data: IOnMenuShareWeiboParams): Promise<any>;

  /**
   * 获取“分享到QQ空间”按钮点击状态及自定义分享内容接口
   * @param data {IOnMenuShareQZoneParams} 自定义分享的标题、描述、链接、图标参数接口
   */
  onMenuShareQZone(data: IOnMenuShareQZoneParams): Promise<any>;

  /**
   * 拍照或从手机相册中选图接口
   * @param data {IChooseImageParams}  选图对象
   */
  chooseImage(data: IChooseImageParams): Promise<any>;

  /**
   * 预览图片接口
   * @param data {IPreviewImageParams} 预览图片对象
   */
  previewImage(data: IPreviewImageParams): void;

  /**
   * 上传图片接口，上传图片有效期3天，可用微信多媒体接口下载图片到自己的服务器，此处获得的 serverId 即 media_id。
   * @param data {IUploadImageParams} 上传图片对象
   */
  uploadImage(data: IUploadImageParams): Promise<any>;

  /**
   * 下载图片接口
   * @param data {IUploadImageParams} 上传图片对象
   */
  downloadImage(data: IDownloadImageParams): Promise<any>;

  /**
   * 开始录音接口
   */
  startRecord(): void;

  /**
   * 停止录音接口
   */
  stopRecord(): Promise<any>;

  /**
   * 监听录音自动停止接口
   */
  onVoiceRecordEnd(): Promise<any>;

  /**
   * 播放语音接口
   * @param data {IPlayVoiceParams} 音频对象
   */
  playVoice(data: IPlayVoiceParams): void;

  /**
   * 暂停播放接口
   * @param data {IPauseVoiceParams} 音频对象
   */
  pauseVoice(data: IPauseVoiceParams): void;

  /**
   * 停止播放接口
   * @param data {IStopVoiceParams} 音频对象
   */
  stopVoice(data: IStopVoiceParams): void;

  /**
   * 监听语音播放完毕接口
   */
  onVoicePlayEnd(): Promise<any>;

  /**
   * 上传语音接口;上传语音有效期3天，可用微信多媒体接口下载语音到自己的服务器，此处获得的 serverId 即 media_id
   * @param data {IUploadVoiceParams} 音频对象
   */
  uploadVoice(data: IUploadVoiceParams): Promise<any>;

  /**
   * 下载语音接口
   * @param data {uploadVoice} 音频对象
   */
  downloadVoice(data: IDownloadVoiceParams): Promise<any>;

  /**
   * 识别音频并返回识别结果接口
   * @param data {ITranslateVoiceParams} 需要识别的音频对象
   */
  translateVoice(data: ITranslateVoiceParams): Promise<any>;

  /**
   * 获取网络状态接口
   */
  getNetworkType(): Promise<any>;

  /**
   * 使用微信内置地图查看位置接口
   * @param data {IOpenLocationParams} 位置对象
   */
  openLocation(data: IOpenLocationParams): void;

  /**
   * 获取地理位置接口
   * @param data {IGetLocationParams} 坐标对象
   */
  getLocation(data: IGetLocationParams): Promise<any>;

  /**
   * 批量隐藏功能按钮接口
   * @param data {IHideMenuItemsParams} 需要隐藏的菜单对象
   */
  hideMenuItems(data: IHideMenuItemsParams): void;

  /**
   * 批量显示功能按钮接口
   * @param data {IShowMenuItemsParams} 需要显示的菜单对象
   */
  showMenuItems(data: IShowMenuItemsParams): void;

  /**
   * 隐藏所有非基础按钮接口
   */
  hideAllNonBaseMenuItem(): void;

  /**
   * 显示所有功能按钮接口
   */
  showAllNonBaseMenuItem(): void;

  /**
   * 关闭当前网页窗口接口
   */
  closeWindow(): void;

  /**
   * 调起微信扫一扫接口
   * @param data {IScanQRCodeParams} 参数对象
   */
  scanQRCode(data: IScanQRCodeParams): Promise<any>;

  /**
   * 跳转微信商品页接口
   * @param data {IOpenProductionSpecifiViewParams} 参数对象
   */
  openProductSpecificView(data: IOpenProductionSpecifiViewParams): void;

  /**
   * 批量添加卡券接口
   * @param data {IAddCardParams} 待添加的卡券对象
   */
  addCard(data: IAddCardParams): Promise<any>;

  /**
   * 拉取适用卡券列表并获取用户选择信息
   * @param data {IChooseCardParams} 适用卡券对象
   */
  chooseCard(data: IChooseCardParams): Promise<any>;

  /**
   * 查看微信卡包中的卡券接口
   * @param data {IOpenCardParams} 待打开的卡券列表对象
   */
  openCard(data: IOpenCardParams): void;
}

export interface IChooseCardParams {
  /**
   * 门店Id
   */
  shopId?: string;

  /**
   * 卡券类型，用于拉起指定卡券类型的卡券列表。当cardType为空时，默认拉起所有卡券的列表，非必填。
   */
  cardType?: string;

  /**
   * 卡券ID，用于拉起指定cardId的卡券列表，当cardId为空时，默认拉起所有卡券的列表，非必填
   */
  cardId?: string;

  /**
   * 卡券签名时间戳
   */
  timestamp: number;

  /**
   * 卡券签名随机串
   */
  nonceStr: string;

  /**
   * 签名方式，默认'SHA1',目前只支持'SHA1'
   */
  signType: string;

  /**
   * 卡券签名
   */
  cardSign: string;
}

export interface IOpenCardParams {
  /**
   * 需要打开的卡券列表
   */
  cardList: IOpenCardParamsCardModel[];
}

export interface IOpenCardParamsCardModel {
  /**
   * 卡券Id
   */
  cardId: string;

  /**
   *
   */
  code: string;
}

export interface IAddCardParams {
  /**
   * 需要添加的卡券列表
   */
  cardList: IAddCardParamsCardModel[];
}

export interface IAddCardParamsCardModel {
  /**
   * 卡券Id
   */
  cardId: string;

  /**
   * cardExt本身是一个JSON字符串，是商户为该张卡券分配的唯一性信息，包含以下字段：
   */
  cardExt: string;
}

export interface IOpenProductionSpecifiViewParams {
  /**
   * 商品id
   */
  productId: string;

  /**
   * 0.默认值，普通商品详情页1.扫一扫商品详情页2.小店商品详情页
   */
  viewType?: number;
}

export interface IScanQRCodeParams {
  /**
   * 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
   */
  needResult?: number;

  /**
   * 可以指定扫二维码还是一维码，默认二者都有
   */
  scanType?: 'qrCode' | 'barCode';
}

export interface IShowMenuItemsParams {
  /**
   * 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮
   */
  menuList: string[];
}

export interface IHideMenuItemsParams {
  /**
   * 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮
   */
  menuList: string[];
}

export interface IGetLocationParams {
  /**
   * 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
   */
  type?: 'wgs84' | 'gcj02';
}

export interface IOpenLocationParams {
  /**
   * 纬度，浮点数，范围为90 ~ -90
   */
  latitude: number;

  /**
   * 经度，浮点数，范围为180 ~ -180。
   */
  longitude: number;

  /**
   * 位置名
   */
  name: string;

  /**
   * 地址详情说明
   */
  address: string;

  /**
   * 地图缩放级别,整形值,范围从1~28。默认为最大
   */
  scale?: number;

  /**
   * 在查看位置界面底部显示的超链接,可点击跳转
   */
  infoUrl: string;
}

export interface ITranslateVoiceParams {
  /**
   * 需要识别的音频的本地Id，由录音相关接口获得
   */
  localId: string;

  /**
   * 默认为1，显示进度提示
   */
  isShowProgressTips?: number;
}

export interface IDownloadVoiceParams {
  /**
   *  需要下载的音频的服务器端ID，由uploadVoice接口获得
   */
  serverId: string;

  /**
   * 默认为1，显示进度提示
   */
  isShowProgressTips?: number;
}

export interface IUploadVoiceParams {
  /**
   * 需要播放的音频的本地ID，由stopRecord接口获得
   */
  localId: string;

  /**
   * 默认为1，显示进度提示
   */
  isShowProgressTips?: number;
}

export interface IStopVoiceParams {
  /**
   * 需要播放的音频的本地ID，由stopRecord接口获得
   */
  localId: string;
}

export interface IPauseVoiceParams {
  /**
   * 需要播放的音频的本地ID，由stopRecord接口获得
   */
  localId: string;
}

export interface IPlayVoiceParams {
  /**
   * 需要播放的音频的本地ID，由stopRecord接口获得
   */
  localId: string;
}

export interface IDownloadImageParams {
  /**
   * 需要下载的图片的服务器端ID，由uploadImage接口获得
   */
  serverId: string;

  /**
   * 显示进度提示; 默认为1
   */
  isShowProgressTips?: number;
}

export interface IUploadImageParams {
  /**
   * 需获得要上传的图片的本地ID，由chooseImage接口
   */
  localId: string;

  /**
   * 默认为1，显示进度提示
   */
  isShowProgressTips?: number;
}

export interface IPreviewImageParams {
  /**
   * 当前显示图片的http链接
   */
  current: string;

  /**
   * 需要预览的图片http链接列表
   */
  urls: string[];
}

export interface IChooseImageParams {
  /**
   * 选择图片的数量，默认9
   */
  count?: number;

  /**
   * 指定是原图还是压缩图，默认二者都有
   */
  sizeType?: 'original' | 'compressed';

  /**
   * 指定来源是相册还是相机，默认二者都有
   */
  sourceType?: 'album' | 'camera';
}

export interface IOnMenuShareAppMessageParams {
  /**
   * 分享标题
   */
  title: string;

  /**
   * 分享描述
   */
  desc: string;

  /**
   * 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
   */
  link: string;

  /**
   * 分享图标
   */
  imgUrl: string;

  /**
   * 分享类型;music、video或link，不填默认为link
   */
  type?: 'music' | 'video' | 'link';

  /**
   * 如果type是music或video，则要提供数据链接，默认为空
   */
  dataUrl?: string;
}

export interface IOnMenuShareTimelineParams {
  /**
   * 分享标题
   */
  title: string;

  /**
   * 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
   */
  link: string;

  /**
   * 分享图标
   */
  imgUrl: string;
}

export interface IOnMenuShareQQParams {
  /**
   * 分享标题
   */
  title: string;

  /**
   * 分享描述
   */
  desc: string;

  /**
   * 分享链接
   */
  link: string;

  /**
   * 分享图标
   */
  imgUrl: string;
}

export interface IOnMenuShareWeiboParams {
  /**
   * 分享标题
   */
  title: string;

  /**
   * 分享描述
   */
  desc: string;

  /**
   * 分享链接
   */
  link: string;

  /**
   * 分享图标
   */
  imgUrl: string;
}

export interface IOnMenuShareQZoneParams {
  /**
   * 分享标题
   */
  title: string;

  /**
   * 分享描述
   */
  desc: string;

  /**
   * 分享链接
   */
  link: string;

  /**
   * 分享图标
   */
  imgUrl: string;
}

export interface IChooseWXPayParams {
  /**
   * 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
   */
  timestamp: number;

  /**
   * 支付签名随机串，不长于 32 位
   */
  nonceStr: string;

  /**
   * 统一支付接口返回的prepay\_id参数值，提交格式如：prepay\_id=\*\*\*）
   */
  package: string;

  /**
   * 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
   */
  signType: string;

  /**
   * 支付签名
   */
  paySign: string;
}
