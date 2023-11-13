import Payment = require('./app/service/index');

declare module 'egg' {
  interface IService {
    wechatPay: Payment;
  }
}