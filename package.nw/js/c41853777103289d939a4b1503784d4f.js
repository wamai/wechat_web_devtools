'use strict';!function(require,directRequire){function a(a){let c=a.headers.host,d=!a.connection.encrypted||/^http:/.test(a.url)?'http':'https',e='http'==d?a.url:d+'://'+c+a.url,f=b.parse(e);return f.pureHref=f.href.replace(/\?.*/,'').replace(/\#.*/,''),f}const b=require('url'),c=require('path'),d=require('./6242f55dbdfe53c2f07b7a51568311f2.js'),e='https://clients1.google.com/tbproxy/af/',f='http://aboutblank',{weappURLRegular:g,weappASURLRegular:h,weappLocalIdRegular:i,weappEditorServiceRegular:j,weappWidgetPageRegular:k,weappWidgetServiceRegular:l,weappTraceRegular:m,weappUsrFileReqular:n,weappStoreFileReqular:o,weappTmpFileReqular:p}=d,q=require('./3bfffbe88b3d923921f851c0697974fe.js'),r=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),s=require('./730f2a99f4d5cff2946dd0a3bad0a600.js'),t=require('./07af6655c180a0694f993b79d5b077df.js');module.exports={forceLocalProxy:[g,h,i,f,e,j,k,l,m,n,o,p],dealLocalResponse:function(b,d,g){var h=a(b),j=h.pureHref;if(0==j.indexOf(`/appservice`))s.getAppServiceSource(j).then((a)=>{g(200,{},a)}).catch(()=>{g(404,{},'')});else if(0==j.indexOf(`/__pageframe__`)){let a=h.href;s.getWebviewSource(a).then((b)=>{const d={};'.svg'===c.extname(a)&&(d['Content-Type']='image/svg+xml'),g(200,d,b)}).catch(()=>{g(404,{},'')})}else 0==j.indexOf(`/editor`)?s.getEditorSource(j).then((a)=>{g(200,a.headers||{},a.body)}).catch(()=>{g(404,{},'')}):0==j.indexOf(`/trace`)?t.getTraceRoute(h,(a,b)=>{a?g(500,{},JSON.stringify(a.message)):g(200,{},JSON.stringify(b))}):0==j.indexOf(`/widgetwebview`)?s.getWidgetWebviewResource(j).then((a)=>{g(200,{},a)}).catch(()=>{g(404,{},'')}):0==j.indexOf(`/widgetservice`)?s.getWidgetServiceResource(j).then((a)=>{g(200,{},a)}).catch(()=>{g(404,{},'')}):0==j.indexOf(`/aboutblank`)?g(200,{},''):0==j.indexOf(`/favicon.ico`)?g(200,{},''):0===j.indexOf(e)?g(400,{},''):0===j.indexOf(f)?g(200,{},''):i.test(j)||p.test(j)||o.test(j)?s.getLocalIdResponse(j.replace(i,'wxfile://')).then((a)=>{g(200,{},a)}).catch(()=>{g(404,{},'')}):n.test(j)&&s.getUsrFileResponse(j).then((a)=>{g(200,{},a)}).catch(()=>{g(404,{},'')})}}}(require('lazyload'),require);