export type IWechatAPI = string;

export const WechatAPI = {
  /**
   * 分享到朋友圈
   */
  onMenuShareTimeline: 'onMenuShareTimeline',

  /**
   * 分享给朋友
   */
  onMenuShareAppMessage: 'onMenuShareAppMessage',

  /**
   * 分享到QQ
   */
  onMenuShareQQ: 'onMenuShareQQ',

  /**
   * 分享到腾讯微博
   */
  onMenuShareWeibo: 'onMenuShareWeibo',

  /**
   * 分享到QQ空间
   */
  onMenuShareQZone: 'onMenuShareQZone',

  /**
   * 开始录音接口
   */
  startRecord: 'startRecord',

  /**
   * 停止录音接口
   */
  stopRecord: 'stopRecord',

  /**
   * 监听录音自动停止接口
   */
  onVoiceRecordEnd: 'onVoiceRecordEnd',

  /**
   * 播放语音接口
   */
  playVoice: 'playVoice',

  /**
   * 暂停播放接口
   */
  pauseVoice: 'pauseVoice',

  /**
   * 停止播放接口
   */
  stopVoice: 'stopVoice',

  /**
   * 监听语音播放完毕接口
   */
  onVoicePlayEnd: 'onVoicePlayEnd',

  /**
   * 上传语音接口
   */
  uploadVoice: 'uploadVoice',

  /**
   * 下载语音接口
   */
  downloadVoice: 'downloadVoice',

  /**
   * 拍照或从手机相册中选图接口
   */
  chooseImage: 'chooseImage',

  /**
   * 预览图片接口
   */
  previewImage: 'previewImage',

  /**
   * 上传图片接口
   */
  uploadImage: 'uploadImage',

  /**
   * 下载图片接口
   */
  downloadImage: 'downloadImage',

  /**
   * 识别音频并返回识别结果接口
   */
  translateVoice: 'translateVoice',

  /**
   * 获取网络状态接口
   */
  getNetworkType: 'getNetworkType',

  /**
   * 使用微信内置地图查看位置接口
   */
  openLocation: 'openLocation',

  /**
   * 获取地理位置接口
   */
  getLocation: 'getLocation',

  /**
   * 不清楚做wftc
   */
  hideOptionMenu: 'hideOptionMenu',

  /**
   * 不清楚做wftc
   */
  showOptionMenu: 'showOptionMenu',

  /**
   * 批量隐藏功能按钮接口
   */
  hideMenuItems: 'hideMenuItems',

  /**
   * 批量显示功能按钮接口
   */
  showMenuItems: 'showMenuItems',

  /**
   * 隐藏所有非基础按钮接口
   */
  hideAllNonBaseMenuItem: 'hideAllNonBaseMenuItem',

  /**
   * 显示所有功能按钮接口
   */
  showAllNonBaseMenuItem: 'showAllNonBaseMenuItem',

  /**
   * 关闭当前网页窗口接口
   */
  closeWindow: 'closeWindow',

  /**
   * 调起微信扫一扫接口
   */
  scanQRCode: 'scanQRCode',

  /**
   * 发起一个微信支付请求
   */
  chooseWXPay: 'chooseWXPay',

  /**
   * 跳转微信商品页接口
   */
  openProductSpecificView: 'openProductSpecificView',

  /**
   * 批量添加卡券接口
   */
  addCard: 'addCard',

  /**
   * 拉取适用卡券列表并获取用户选择信息
   */
  chooseCard: 'chooseCard',

  /**
   * 查看微信卡包中的卡券接口
   */
  openCard: 'openCard',
};
