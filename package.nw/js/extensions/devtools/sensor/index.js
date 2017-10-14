(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.i=function(a){return a},b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=265)})({2:function(a){function b(a){j=a?a:j,h=new window.__WebSocket(i,j),h.onopen=function(){let a=[].concat(l);l=[],a.forEach((a)=>{c(a)})},h.onclose=function(){h=null,b()},h.onmessage=function(a){try{let b=JSON.parse(a.data);d(b)}catch(a){}}}function c(a){h&&h.readyState===window.__WebSocket.OPEN?h.send(JSON.stringify(a)):l.push(a)}function d(){k.forEach((a)=>{try{a.apply(this,arguments)}catch(a){console.error(a)}})}var e=navigator.userAgent,f=e.match(/port\/(\d*)/),g=f?parseInt(f[1]):9974,h=null,i=`ws://localhost:${g}`,j=null,k=[],l=[];a.exports={connect:b,send:c,registerCallback:(a)=>{k.push(a)}}},231:function(a,b,c){'use strict';const d=c(266);var e={accelX:0,accelY:0,accelZ:0,setEulerAngles(a){let{alpha:b,beta:c,gamma:e}=a,f={yaw:180>=b?-b:360-b,pitch:-c,roll:e};d.reverseRollPitchYaw(f),this.accelX=d.x,this.accelY=d.y,this.accelZ=d.z}};a.exports=e},232:function(a,b,c){var d=c(2);window.addEventListener('load',()=>{d.connect('DEVTOOLS_SENSOR'),d.send({data:{},command:'GET_SENSOR_STATUS'})}),a.exports={send:d.send,registerCallback:d.registerCallback}},265:function(a,b,c){function d(){let a=y.checked;a?(r.removeAttribute('disabled'),s.removeAttribute('disabled'),t.removeAttribute('disabled'),u.removeAttribute('disabled'),v.removeAttribute('disabled'),w.removeAttribute('disabled'),x.removeAttribute('disabled')):(r.setAttribute('disabled',!0),s.setAttribute('disabled',!0),t.setAttribute('disabled',!0),u.setAttribute('disabled',!0),v.setAttribute('disabled',!0),w.setAttribute('disabled',!0),x.setAttribute('disabled',!0)),e()}function e(){let a=parseFloat(s.value),b=parseFloat(r.value),c=parseFloat(t.value),d=parseFloat(u.value),e=parseFloat(v.value),f=parseFloat(w.value),g=parseFloat(x.value);l.send({command:'SET_GEO_SETTING',data:{enabled:y.checked,longitude:a,latitude:b,speed:c,accuracy:d,altitude:e,verticalAccuracy:f,horizontalAccuracy:g}})}function f(a){y.checked=a.enabled,r.value=a.latitude||0,s.value=a.longitude||0,t.value=a.speed||-1,u.value=a.accuracy||65,v.value=a.altitude||0,w.value=a.verticalAccuracy||65,x.value=a.horizontalAccuracy||65,d()}var g=Number.isNaN,h=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};const i=document.getElementById('controller');var j=new Date;const k=c(231),l=c(232),m=document.getElementById('x'),n=document.getElementById('y'),o=document.getElementById('z'),p=document.getElementById('reset');let q={accelerometer:!1,geo:{}};p.addEventListener('click',()=>{i.contentWindow.postMessage(JSON.stringify({action:'restart'}),'*')}),l.registerCallback((a)=>{let{command:b,data:c}=a;'SET_SENSOR_STATUS'===b&&(q=h({},q,c),f(q.geo))}),window.addEventListener('message',(a)=>{let b=a.data;if('registerExtension'===b)return;let c;try{c=JSON.parse(a.data)}catch(b){console.error(`sensor/js/main.js Cannot parse ${a.data}`),c={}}let d=c.action;if('connect'===d)i.contentWindow.postMessage(JSON.stringify({action:'start'}),'*');else if('newData'===d){let a=new Date;if(200>a-j)return;j=new Date;let{alpha:b,beta:d,gamma:e,roll:f}=c.data;k.setEulerAngles({alpha:b,beta:d,gamma:e});let{accelX:g,accelY:h,accelZ:i}=k;m.value=parseFloat(g.toFixed(5)),n.value=parseFloat(h.toFixed(5)),o.value=parseFloat(i.toFixed(5)),q.accelerometer&&chrome.devtools.inspectedWindow.eval(`window.DeviceOrientation(${m.value}, ${n.value}, ${o.value})`,()=>{})}}),i.src='./controller/index.html';const r=document.getElementById('latitude'),s=document.getElementById('longitude'),t=document.getElementById('speed'),u=document.getElementById('accuracy'),v=document.getElementById('altitude'),w=document.getElementById('verticalAccuracy'),x=document.getElementById('horizontalAccuracy'),y=document.getElementById('enableGeo');r.addEventListener('change',()=>{let a=parseFloat(r.value);90<a?r.value=90:-90>a?r.value=-90:g(a)&&(r.value=0)}),s.addEventListener('change',()=>{let a=parseFloat(s.value);180<a?s.value=180:-180>a?s.value=-180:g(a)&&(s.value=0)}),t.addEventListener('change',()=>{let a=parseFloat(t.value);-1>a?t.value=-1:g(a)&&(t.value=-1)}),u.addEventListener('change',()=>{let a=parseFloat(u.value);0>a?u.value=0:100<a?u.value=100:g(a)&&(u.value=0)}),v.addEventListener('change',()=>{let a=parseFloat(v.value);g(a)&&(v.value=0)}),w.addEventListener('change',()=>{let a=parseFloat(w.value);0>a?w.value=0:g(a)&&(w.value=0)}),x.addEventListener('change',()=>{let a=parseFloat(x.value);0>a?x.value=0:g(a)&&(x.value=0)}),y.addEventListener('change',d),r.addEventListener('blur',e),s.addEventListener('blur',e),t.addEventListener('blur',e),u.addEventListener('blur',e),v.addEventListener('blur',e),w.addEventListener('blur',e),x.addEventListener('blur',e)},266:function(a){'use strict';var b=Math.sin,c=Math.cos,d={x:0,y:0,z:-1,_toRadians(a){return a*Math.PI/180},_yaw(a){let d=this._toRadians(a),e=c(d),f=b(d),g={x:e*this.x+f*this.y,y:-f*this.x+e*this.y,z:this.z};this.x=g.x,this.y=g.y,this.z=g.z},_pitch(a){let d=this._toRadians(a),e=c(d),f=b(d),g={x:this.x,y:e*this.y+f*this.z,z:-f*this.y+e*this.z};this.x=g.x,this.y=g.y,this.z=g.z},_roll(a){let d=this._toRadians(a),e=c(d),f=b(d),g={x:e*this.x+f*this.z,y:this.y,z:-f*this.x+e*this.z};this.x=g.x,this.y=g.y,this.z=g.z},reverseRollPitchYaw(a){this.x=0,this.y=0,this.z=-1,this._yaw(-a.yaw),this._pitch(-a.pitch),this._roll(-a.roll)}};a.exports=d}});