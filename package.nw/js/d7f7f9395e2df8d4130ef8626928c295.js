'use strict';!function(require,directRequire){const a=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),b=require('./bc78839ccca8df9e5ceeb7fae11b7be2.js'),c=require('./cc2c2970ff81ae4a83123e81ee123da2.js'),d='darwin'===process.platform,e=(a)=>Object.prototype.toString.call(a).slice(8,-1).toLowerCase(),f=[{precondition:()=>!global.isDevWindow,match:/wechatide:\/\/minicode\/(.+?)(?:\s|$)/,handler:(d)=>{d[1]&&(b.dispatch(c.createMiniCodeRequest('import',{from:a.MINI_CODE_FROM.URL_SCHEME,miniCodeLink:d[0].trim()})),global.Win.show())}}];module.exports={handleOpenArgs:(a)=>{if('string'===e(a))for(const b of f)if(b.precondition()){const c=a.match(b.match);c&&b.handler(c)}}}}(require('lazyload'),require);