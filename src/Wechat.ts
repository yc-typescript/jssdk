import { loadScript } from '@yct/utils';
import {
  IWechat,
  IOnMenuShareTimelineParams,
  IOnMenuShareAppMessageParams,
  IOnMenuShareQQParams,
  IOnMenuShareWeiboParams,
  IOnMenuShareQZoneParams,
  IChooseImageParams,
  IPreviewImageParams,
  IUploadImageParams,
  IDownloadImageParams,
  IPlayVoiceParams,
  IPauseVoiceParams,
  IStopVoiceParams,
  IUploadVoiceParams,
  IDownloadVoiceParams,
  ITranslateVoiceParams,
  IOpenLocationParams,
  IGetLocationParams,
  IHideMenuItemsParams,
  IShowMenuItemsParams,
  IScanQRCodeParams,
  IOpenProductionSpecifiViewParams,
  IAddCardParams,
  IChooseCardParams,
  IOpenCardParams,
  IChooseWXPayParams,
} from './IWechat';
import { IWechatAPI } from './WechatAPI';

declare const window: any;

const JSSKD_URL = 'res.wx.qq.com/open/js/jweixin-1.3.0.js';

export class Wechat implements IWechat {
  private _ready: Promise<any>;

  constructor(
    public appId: string,
    public debug: boolean = false,
    public https: boolean = true
  ) {
    const protocol = https ? 'https' : 'http';
    this._ready = loadScript(protocol + '://' + JSSKD_URL);
  }

  /**
   * 判断 JSSKD 加载完成
   */
  public ready() {
    return this._ready;
  }

  /**
   * 通过config接口注入权限验证配置
   * 所有需要使用JS-SDK的页面必须先注入配置信息，否则将无法调用（同一个url仅需调用一次，对于变化url的SPA的web app可在每次url变化时进行调用,目前Android微信客户端不支持pushState的H5新特性，所以使用pushState来实现web app的页面会导致签名失败，此问题会在Android6.2中修复）
   * @param ticket {string} 从服务端获取
   * @param jsApiList {IWechatAPI[]} 需要使用的JS接口列表
   */
  public config(ticket: string, ...jsApiList: IWechatAPI[]): Promise<void> {
    const url = window.location.href.split('#')[0];
    const nonceStr = Math.random()
      .toString(36)
      .substr(2, 15);
    const timestamp = Math.floor(new Date().getTime() / 1000);
    const str =
      'jsapi_ticket=' +
      ticket +
      '&noncestr=' +
      nonceStr +
      '&timestamp=' +
      timestamp +
      '&url=' +
      url;
    const signature = new Sha1(str).toHex(Sha1.Case.lower, Sha1.Encoding.ASCII);
    window.wx.config({
      debug: this.debug,
      appId: this.appId,
      timestamp: timestamp,
      nonceStr: nonceStr,
      signature: signature,
      jsApiList: jsApiList,
    });

    return new Promise((resolve, reject) => {
      window.wx.ready(() => {
        resolve();
      });

      window.wx.error(res => {
        reject(res);
      });
    });
  }

  private promisify(api: string, data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      window.wx[api](
        Object.assign(
          {
            success: res => resolve(res),
            fail: res => reject(res),
            cancel: res => reject(res),
          },
          data
        )
      );
    });
  }

  /**
   * 判断当前客户端版本是否支持指定JS接口
   * checkJsApi接口是客户端6.0.2新引入的一个预留接口，第一期开放的接口均可不使用checkJsApi来检测。
   * @param jsApiList {string[]} 需要检测的JS接口
   */
  public checkJsApi(...jsApiList: string[]): Promise<any> {
    return this.promisify('checkJsApi', { jsApiList: jsApiList });
  }

  /**
   * 获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
   * @param data {IOnMenuShareTimelineParams} 自定义分享的标题、链接、图标的参数接口
   */
  public onMenuShareTimeline(data: IOnMenuShareTimelineParams): Promise<any> {
    return this.promisify('onMenuShareTimeline', data);
  }

  /**
   * 获取“分享给朋友”按钮点击状态及自定义分享内容接口
   * @param data {IOnMenuShareAppMessageParams} 自定义分享的标题、描述、链接、图标、分享类型及数据链接的参数接口
   */
  public onMenuShareAppMessage(
    data: IOnMenuShareAppMessageParams
  ): Promise<any> {
    return this.promisify('onMenuShareAppMessage', data);
  }

  /**
   * 获取“分享到QQ”按钮点击状态及自定义分享内容接口
   * @param data {IOnMenuShareQQParams} 自定义分享的标题、描述、链接、图标参数接口
   */
  public onMenuShareQQ(data: IOnMenuShareQQParams): Promise<any> {
    return this.promisify('onMenuShareQQ', data);
  }

  /**
   * 获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口
   * @param data {IOnMenuShareWeiboParams} 自定义分享的标题、描述、链接、图标参数接口
   */
  public onMenuShareWeibo(data: IOnMenuShareWeiboParams): Promise<any> {
    return this.promisify('onMenuShareWeibo', data);
  }

  /**
   * 获取“分享到QQ空间”按钮点击状态及自定义分享内容接口
   * @param data {IOnMenuShareQZoneParams} 自定义分享的标题、描述、链接、图标参数接口
   */
  public onMenuShareQZone(data: IOnMenuShareQZoneParams): Promise<any> {
    return this.promisify('onMenuShareQZone', data);
  }

  /**
   * 拍照或从手机相册中选图接口
   * @param data {IChooseImageParams}  选图对象
   */
  public chooseImage(data: IChooseImageParams): Promise<any> {
    return this.promisify('chooseImage', data);
  }

  /**
   * 预览图片接口
   * @param data {IPreviewImageParams} 预览图片对象
   */
  public previewImage(data: IPreviewImageParams) {
    return window.wx.previewImage(data);
  }

  /**
   * 上传图片接口，上传图片有效期3天，可用微信多媒体接口下载图片到自己的服务器，此处获得的 serverId 即 media_id。
   * @param data {IUploadImageParams} 上传图片对象
   */
  public uploadImage(data: IUploadImageParams) {
    return this.promisify('uploadImage', data);
  }

  /**
   * 下载图片接口
   * @param data {IUploadImageParams} 上传图片对象
   */
  public downloadImage(data: IDownloadImageParams) {
    return this.promisify('downloadImage', data);
  }

  /**
   * 开始录音接口
   */
  public startRecord() {
    return window.wx.startRecord();
  }

  /**
   * 停止录音接口
   */
  public stopRecord() {
    return this.promisify('stopRecord', null);
  }

  /**
   * 监听录音自动停止接口
   */
  public onVoiceRecordEnd() {
    return this.promisify('onVoiceRecordEnd', null);
  }

  /**
   * 播放语音接口
   * @param data  {IPlayVoiceParams} 音频对象
   */
  public playVoice(data: IPlayVoiceParams) {
    return window.wx.playVoice(data);
  }

  /**
   * 暂停播放接口
   * @param data {IPauseVoiceParams} 音频对象
   */
  public pauseVoice(data: IPauseVoiceParams) {
    return window.wx.pauseVoice(data);
  }

  /**
   * 停止播放接口
   * @param data {IStopVoiceParams} 音频对象
   */
  public stopVoice(data: IStopVoiceParams) {
    return window.wx.stopVoice(data);
  }

  /**
   * 监听语音播放完毕接口
   */
  public onVoicePlayEnd() {
    return this.promisify('onVoicePlayEnd', null);
  }

  /**
   * 上传语音接口,上传语音有效期3天，可用微信多媒体接口下载语音到自己的服务器，此处获得的 serverId 即 media_id
   * @param data {IUploadVoiceParams} 音频对象
   */
  public uploadVoice(data: IUploadVoiceParams) {
    return this.promisify('uploadVoice', data);
  }

  /**
   * 下载语音接口
   * @param data {uploadVoice} 音频对象
   */
  public downloadVoice(data: IDownloadVoiceParams) {
    return this.promisify('downloadVoice', data);
  }

  /**
   * 识别音频并返回识别结果接口
   * @param data {ITranslateVoiceParams} 需要识别的音频对象
   */
  public translateVoice(data: ITranslateVoiceParams) {
    return this.promisify('translateVoice', data);
  }

  /**
   * 获取网络状态接口
   */
  public getNetworkType() {
    return this.promisify('getNetworkType', null);
  }

  /**
   * 使用微信内置地图查看位置接口
   * @param data {IOpenLocationParams} 位置对象
   */
  public openLocation(data: IOpenLocationParams) {
    return window.wx.openLocation(data);
  }

  /**
   * 获取地理位置接口
   * @param data {IGetLocationParams} 坐标对象
   */
  public getLocation(data: IGetLocationParams) {
    return this.promisify('getLocation', data);
  }

  /**
   * 批量隐藏功能按钮接口
   * @param data {IHideMenuItemsParams} 需要隐藏的菜单对象
   */
  public hideMenuItems(data: IHideMenuItemsParams) {
    return window.wx.hideMenuItems(data);
  }

  /**
   * 批量显示功能按钮接口
   * @param data {IShowMenuItemsParams} 需要显示的菜单对象
   */
  public showMenuItems(data: IShowMenuItemsParams) {
    return window.wx.showMenuItems(data);
  }

  /**
   * 隐藏所有非基础按钮接口
   */
  public hideAllNonBaseMenuItem() {
    return window.wx.hideAllNonBaseMenuItem();
  }

  /**
   * 显示所有功能按钮接口
   */
  public showAllNonBaseMenuItem() {
    return window.wx.showAllNonBaseMenuItem();
  }

  /**
   * 关闭当前网页窗口接口
   */
  public closeWindow() {
    return window.wx.closeWindow();
  }

  /**
   * 调起微信扫一扫接口
   * @param data {IScanQRCodeParams} 参数对象
   */
  public scanQRCode(data: IScanQRCodeParams) {
    return this.promisify('scanQRCode', data);
  }

  /**
   * 跳转微信商品页接口
   * @param data {IOpenProductionSpecifiViewParams} 参数对象
   */
  public openProductSpecificView(data: IOpenProductionSpecifiViewParams) {
    return this.promisify('openProductSpecificView', data);
  }

  /**
   * 批量添加卡券接口
   * @param data {IAddCardParams} 待添加的卡券对象
   */
  public addCard(data: IAddCardParams) {
    return this.promisify('addCard', data);
  }

  /**
   * 拉取适用卡券列表并获取用户选择信息
   * @param data {IChooseCardParams} 适用卡券对象
   */
  public chooseCard(data: IChooseCardParams) {
    return this.promisify('chooseCard', data);
  }

  /**
   * 查看微信卡包中的卡券接口
   * @param data {IOpenCardParams} 待打开的卡券列表对象
   */
  public openCard(data: IOpenCardParams) {
    return window.wx.openCard(data);
  }

  /**
   * 发起一个微信支付请求
   * @param data {IChooseWXPayParams} 支付对象
   */
  public chooseWXPay(data: IChooseWXPayParams): Promise<any> {
    return this.promisify('chooseWXPay', data);
  }
}

class Sha1 {
  /**
   * hex output format. 0 - lowercase; 1 - uppercase
   */
  public static readonly Case = {
    /**
     * lowercase
     */
    lower: 0,
    /**
     * uppercase
     */
    upper: 1,
  };

  /**
   * bits per input character. 8 - ASCII; 16 - Unicode
   */
  public static readonly Encoding = {
    /**
     * ASCII
     */
    ASCII: 8,
    /**
     * Unicode
     */
    Unicode: 16,
  };

  private str: string;

  /**
   * Create a new sha1 algorithm
   * @param str {string} string to encrypt
   */
  constructor(str: string) {
    this.str = str;
  }

  /**
   * Generate hex result
   * @param outputCase {number} `Sha1.Case.lower` or `Sha1.Case.upper`
   * @param encoding {number} `Sha1.Encoding.ASCII` or `Sha1.Encoding.Unicode`
   */
  public toHex(outputCase: number, encoding: number) {
    return this.binb2hex(
      this.core_sha1(this.str2binb(encoding), this.str.length * encoding),
      outputCase
    );
  }

  private str2binb(chrsz) {
    const bin = Array();
    const mask = (1 << chrsz) - 1;
    for (let i = 0; i < this.str.length * chrsz; i += chrsz)
      bin[i >> 5] |= (this.str.charCodeAt(i / chrsz) & mask) << (24 - (i % 32));
    return bin;
  }

  private core_sha1(x, len) {
    x[len >> 5] |= 0x80 << (24 - (len % 32));
    x[(((len + 64) >> 9) << 4) + 15] = len;

    const w = Array(80);
    let a = 1732584193;
    let b = -271733879;
    let c = -1732584194;
    let d = 271733878;
    let e = -1009589776;

    for (let i = 0; i < x.length; i += 16) {
      const olda = a;
      const oldb = b;
      const oldc = c;
      const oldd = d;
      const olde = e;

      for (let j = 0; j < 80; j++) {
        if (j < 16) w[j] = x[i + j];
        else w[j] = this.rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);
        const t = this.safe_add(
          this.safe_add(this.rol(a, 5), this.sha1_ft(j, b, c, d)),
          this.safe_add(this.safe_add(e, w[j]), this.sha1_kt(j))
        );
        e = d;
        d = c;
        c = this.rol(b, 30);
        b = a;
        a = t;
      }

      a = this.safe_add(a, olda);
      b = this.safe_add(b, oldb);
      c = this.safe_add(c, oldc);
      d = this.safe_add(d, oldd);
      e = this.safe_add(e, olde);
    }
    return Array(a, b, c, d, e);
  }

  private sha1_ft(t, b, c, d) {
    if (t < 20) return (b & c) | (~b & d);
    if (t < 40) return b ^ c ^ d;
    if (t < 60) return (b & c) | (b & d) | (c & d);
    return b ^ c ^ d;
  }

  private sha1_kt(t) {
    return t < 20
      ? 1518500249
      : t < 40
        ? 1859775393
        : t < 60
          ? -1894007588
          : -899497514;
  }

  private safe_add(x, y) {
    const lsw = (x & 0xffff) + (y & 0xffff);
    const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return (msw << 16) | (lsw & 0xffff);
  }

  private rol(num, cnt) {
    return (num << cnt) | (num >>> (32 - cnt));
  }

  private binb2hex(binarray, hexcase) {
    const hex_tab = hexcase ? '0123456789ABCDEF' : '0123456789abcdef';
    let str = '';
    for (let i = 0; i < binarray.length * 4; i++) {
      str +=
        hex_tab.charAt((binarray[i >> 2] >> ((3 - (i % 4)) * 8 + 4)) & 0xf) +
        hex_tab.charAt((binarray[i >> 2] >> ((3 - (i % 4)) * 8)) & 0xf);
    }
    return str;
  }
}
