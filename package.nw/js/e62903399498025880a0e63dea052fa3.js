'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){async function a(a){const b=global.windowMap.get('MAIN').window;let c=document.createElement('input');return c.style.display='none',c.setAttribute('type','file'),a.accept&&c.setAttribute('accept',a.accept),a.multiple&&c.setAttribute('multiple','multiple'),b.document.body.appendChild(c),c.click(),l('chooseFile'),new Promise((a)=>{c.addEventListener('change',(d)=>{b.document.body.removeChild(c),m('chooseFile'),a({success:!0,event:d})}),c.addEventListener('cancel',(d)=>{b.document.body.removeChild(c),m('chooseFile'),a({success:!1,event:d})})})}async function b(a){const b=global.windowMap.get('MAIN').window.document.body;let c=document.createElement('input');return c.style.display='none',c.setAttribute('nwsaveas',a.name||''),c.setAttribute('type','file'),a.accept&&c.setAttribute('accept',a.accept),b.appendChild(c),c.click(),new Promise((a)=>{c.addEventListener('change',(d)=>{b.removeChild(c),a({success:!0,event:d})}),c.addEventListener('cancel',(d)=>{b.removeChild(c),a({success:!1,event:d})})})}function c(a){let b=i.lookup(a);return 0<=b.indexOf('video/')}async function d(a){return new Promise((b)=>{let c=document.createElement('video');c.addEventListener('loadedmetadata',()=>{c.play();let a=parseFloat(c.duration);a=isNaN(a)?0:a;let d=Math.min(100*a,500);setTimeout(()=>{let a=document.createElement('canvas');a.width=c.videoWidth,a.height=c.videoHeight,a.getContext('2d').drawImage(c,0,0,a.width,a.height);let d=a.toDataURL().replace(/^data:image\/(jpg|png);base64,/,''),e=j.getCurrent(),f=n.saveBase64DataToFile(e,d,'.jpg'),g='';f.error||(g=f.tempFilePath),b({duration:c.duration,width:c.videoWidth,height:c.videoHeight,thumbTempFilePath:g})},d)}),c.setAttribute('src',a.replace('wxfile://','http://wxfile.open.weixin.qq.com/')),c.defaultMuted=!0})}var e=Number.isInteger;const f=require('path'),g=require('fs'),h=require('./0634ee2ebd3e560d9d4804ecc960160f.js'),i=require('mime-types'),j=require('./3bfffbe88b3d923921f851c0697974fe.js'),k=require('./libs/imagesize.js'),{enterBackground:l,enterForeground:m}=require('./a3959bb900db9f65ed2e9c5dfa6977b7.js'),n=require('./f6cbcecf6ed9f533f6a506310d8f07b6.js');module.exports={chooseVideo:async function(b,c){let e=c.args,h=await a({accept:'video/*'});if(h.success){let a=h.event,b=a.target.value.split(';'),e=[],i=b[0],k=f.extname(i),l=j.getCurrent();e.push(n.copyFileToTemp(l,i,k));let m=g.statSync(i),o=await d(e[0]);return{errMsg:`${c.api}:ok`,tempFilePath:e[0],size:m.size,duration:o.duration,width:o.width,height:o.height,thumbTempFilePath:o.thumbTempFilePath}}return{errMsg:`${c.api}:cancel`}},chooseImage:async function(b,c){let d=c.args,h=e(d.count)&&9>=d.count&&1<=d.count?d.count:9,i=await a({accept:'image/*',multiple:1<h});if(i.success){let a=i.event,b=[],d=[],e=a.target.value.split(';');return e=e.slice(0,h),e.forEach((a)=>{let c=f.extname(a);try{let b=g.lstatSync(a);d.push(b.size)}catch(a){return}let e=j.getCurrent();b.push(n.copyFileToTemp(e,a,c))}),{errMsg:`${c.api}:ok`,tempFilePaths:b,tempFileSizes:d}}return{errMsg:`${c.api}:cancel`}},previewImage:async function(a,b){return a({type:h.SIMULATOR_SET_PREVIEW_IMAGE,data:{show:!0,urls:b.args.urls||[],current:b.args.current||''}}),{errMsg:`${b.api}:ok`}},getImageInfo:async function(a,b){let c=b.args.src;if(!c)return{errMsg:`${b.api}:fail file not found`};let d=j.getCurrent(),e=n.getFileRealPath(c,d),f=e.fileRealPath;return g.existsSync(f)?new Promise((a)=>{let c=g.createReadStream(f);k(c,function(c,d){c?a({errMsg:`${b.api}:fail ${c.toString()}`}):a({errMsg:`${b.api}:ok`,width:d.width,height:d.height})})}):{errMsg:`${b.api}:fail file not found`}},chooseMedia:async function(b,h){let i=h.args||{},k=h.api,l=e(i.count)&&9>=i.count&&1<=i.count?i.count:9,m=i.mediaType||['video','image'],o=[],p=!1;0<=m.indexOf('video')&&o.push('video/*'),0<=m.indexOf('image')&&(p=!0,o.push('image/*'));let q=await a({accept:o.join(','),multiple:!!p&&1<l});if(q.success){let a=q.event,b=a.target.value.split(';');b=b.slice(0,l);let e='';b.forEach((a)=>{!e&&c(a)&&(e=a)});let h=[],i=j.getCurrent();if(e){let a=e,b=f.extname(a),c=g.statSync(a),h=n.copyFileToTemp(i,a,b),j=await d(h),l=_extends({tempFilePath:h,size:c.size},j);return{errMsg:`${k}:ok`,type:'video',tempFiles:[l]}}return b.forEach((a)=>{let b=f.extname(a),c=g.statSync(a);h.push({tempFilePath:n.copyFileToTemp(i,a,b),size:c.size})}),{errMsg:`${k}:ok`,type:'image',tempFiles:h}}return{errMsg:`${k}:cancel`}},saveVideoToPhotosAlbum:async function(a,c){let{api:d,args:e}=c,h=e.filePath,i=n.getFileRealPath(h),j=i.fileRealPath;if(i.type!==n.TMP||i.type!==n.STORE||!g.existsSync(j))return{errMsg:`${d}:fail file not found`};let k=f.basename(j),l=await b({name:k,accept:'video/*'});if(l.success){let a=l.event,b=a.target.value;return g.writeFileSync(b,g.readFileSync(j)),{errMsg:`${d}:ok`}}return{errMsg:`${d}:cancel`}},saveImageToPhotosAlbum:async function(a,c){let{api:d,args:e}=c,h=e.filePath,i=n.getFileRealPath(h),j=i.fileRealPath;if(i.type===n.TMP&&i.type===n.STORE||!g.existsSync(j))return{errMsg:`${d}:fail file not found`};let k=f.basename(j),l=await b({name:k,accept:'image/*'});if(l.success){let a=l.event,b=a.target.value;return g.writeFileSync(b,g.readFileSync(j)),{errMsg:`${d}:ok`}}return{errMsg:`${d}:cancel`}}}}(require('lazyload'),require);