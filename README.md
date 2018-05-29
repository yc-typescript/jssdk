[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

# Installation

```bash
npm i -S @yct/jssdk
```
or
```bash
yarn add @yct/jssdk
```

## Example

```ts
import { Wechat, WechatAPI } from '@yct/jssdk';

(async () => {
  try {
    const wechat = new Wechat('Your appId', true);
    await wechat.ready();
    const ticket = 'get js ticket from server';
    await wechat.config(ticket, WechatAPI.getLocation, WechatAPI.getNetworkType);
    const loc = await wechat.getLocation({
      type: 'gcj02',
    });
    console.log(loc);
    const nw = await wechat.getNetworkType();
    console.log(nw);
  } catch(e) {
    console.error(e);
  }
})();
```

## Summary

[/docs/SUMMARY.md](/docs/SUMMARY.md)