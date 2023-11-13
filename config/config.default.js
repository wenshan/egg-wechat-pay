'use strict';

/**
 * 微信公众平台的相关配置
 * @member Config Egg配置
 * @property {String}  appid - 应用号
 * @property {String}  mchid  - 商户平台商家编号
 * @property {String}  serial_no  - 商户支付接口密钥
 * @property {String}  private_key  - 应用密钥
 * @property {String}  apiv3_private_key  - 商户支付接口密钥
 * @property {String}  notify_url  - 支付结果回调地址
 */
exports.wechatPay = {
  appid: '',
  mchid: '',
  serial_no: '',
  private_key: '',
  apiv3_private_key: '',
  notify_url: '',
};