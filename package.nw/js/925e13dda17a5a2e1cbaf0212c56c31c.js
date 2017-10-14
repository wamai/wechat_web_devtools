'use strict';!function(require,directRequire){const a=require('react'),b=require('react-dom'),c=require('classnames'),d=require('./8a6bfff9d7b1c7d81421b0982e3dda9e.js'),e=require('redux'),f=require('./a8c87029da0fa06e986298d447ab0fe2.js'),g=require('./1fcc6bd55b687d154a4247e57fe3011d.js'),h=require('./ba23d8b47b1f4ea08b9fd49939b9443f.js'),i=require('./6ff091369f442a4678a2ed4a1f758495.js'),j=require('./274c496e897a23f75f9287cb59f86a50.js'),k=require('./fc137838572a83604db39acff8e909e0.js'),l=require('./356b2757917fbfdeb38c7afc0271eed9.js'),m=require('./eadce02c750c875a10680bcfedadec88.js'),n=require('./629ccf62fc18c4d6caab59c1e6619a09.js'),o=require('./3b5f8e2469c474c8d433c1c6926d8999.js'),p=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),q=require('./3c55dff3626a3ee184d599f076158345.js'),r=require('./cc2c2970ff81ae4a83123e81ee123da2.js'),s=require('./9fdd4ac31a05c27355910f0d74accd4c.js'),t=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),u=require('./common/locales/index.js'),v=require('./a1dd553cc059d528bb0ef56afed53968.js'),w=require('./e50ed2397425c95bd75b01a4829d289f.js'),x=require('./3bfffbe88b3d923921f851c0697974fe.js'),y=require('./72410b6d4968336cd8b2fc1d41f52cdf.js'),z=require('./da7c31daaf542cf1796023d8e344b98a.js'),{enterBackground:A,enterForeground:B}=require('./a3959bb900db9f65ed2e9c5dfa6977b7.js'),{connect:C}=require('react-redux');class D extends a.Component{constructor(a){super(a),this.state={compileTypeDropDownLeft:0,compileTypeDropDownTop:0,moreDropDownLeft:0,moreDropDownTop:0,moreDropDownList:[],QRCodeLeft:0,QRCodeTop:0,QCloudLeft:0,QCloudTop:0,CleanCacheLeft:0,CleanCacheTop:0,CleanCacheRight:0,marginTop:0,timeStamp:1*new Date},this.compileTypeConstants=[{name:'\u5C0F\u7A0B\u5E8F\u6A21\u5F0F',value:s.weapp},{name:'\u4F1A\u8BDD\u52A8\u6001\u9875',value:s.conversation},{name:'\u641C\u7D22\u52A8\u6001\u9875',value:s.search}]}componentDidMount(){this.props.show?this.setState({marginTop:'0px'}):this.setState({marginTop:`${-b.findDOMNode(this).getBoundingClientRect().height}px`})}componentWillReceiveProps(a){if(a.previewQRShow!=this.props.previewQRShow&&a.previewQRShow){const a=this.qrbutton.getBoundingClientRect();this.setState({QRCodeLeft:a.left+-68,QRCodeTop:a.top+53})}a.show?this.setState({marginTop:'0px'}):this.setState({marginTop:`${-b.findDOMNode(this).getBoundingClientRect().height}px`})}onSetAppservice(){this.props.windowActions.toggleDebugWindow()}onSetEditor(){this.props.windowActions.toggleEditorWindow()}onSetSimulator(){this.props.windowActions.toggleSimulatorWindow()}onLaunchSimulator(){this.props.compile({origin:t.COMPILE_ORIGIN.BUTTON})}toggleCompileCondiction(a){a.stopPropagation(),this.props.toolbarActions.toggleClickKey(m.COMPILECONDICTION);let b=a.currentTarget.getBoundingClientRect();this.setState({condictionDropDownLeft:b.left,condictionDropDownTop:b.top+20})}toggleCleanCache(a){a.stopPropagation();let b=a.currentTarget.getBoundingClientRect();this.setState({CleanCacheTop:b.top+22,CleanCacheLeft:b.left,CleanCacheRight:void 0}),this.props.toolbarActions.toggleClickKey(m.CLEANCACHE)}togglePreviewCode(a){if(a.stopPropagation(),!this.props.actionBtnDisabled){let b=a.currentTarget.getBoundingClientRect();this.props.toolbarActions.togglePreviewCode({left:b.left,top:b.top}),this.setState({timeStamp:1*new Date}),z('weapp_toolbar_preview',this.props.project.appid)}}toggleProjectInfo(a){a.stopPropagation(),this.props.toolbarActions.toggleClickKey(m.PROJECTINFO),z('weapp_toolbar_details',this.props.project.appid)}toggleCompileType(a){a.stopPropagation(),this.props.toolbarActions.toggleClickKey(m.COMPILETYPE);let b=a.currentTarget.getBoundingClientRect();this.setState({compileTypeDropDownLeft:b.left,compileTypeDropDownTop:b.top+b.height})}onUploadClick(){this.props.actionBtnDisabled||(this.props.infoActions.setUploadInfo({show:!0}),z('weapp_toolbar_upload',this.props.project.appid))}onTestClick(){this.props.actionBtnDisabled||(this.props.debugActions.openMobileTest(),z('weapp_test_save',this.props.project.appid))}onSetBackground(){if(this.props.compileType==s.weapp)if(this.props.backgroundShow){let a=this.props.webviewInfo.pathName,b=this.props.webviewInfo.query,c=this.props.condiction;B('toolbarAndBackMode',{path:a,query:b,scene:c.scene,shareInfo:c.shareInfo,referrerInfo:c.referrerInfo})}else A('toolbarAndBackMode');this.props.setBackground({show:!this.props.backgroundShow})}onCompileTypeSelect(a){let b=this.compileTypeConstants[a];b&&this.props.setProjectCompileType(b.value),this.props.toolbarActions.toggleClickKey(m.COMPILETYPE)}onMoreClick(a){let b=a.currentTarget.getBoundingClientRect(),c=global.windowMap.get('MAIN').width,d=[];1090>c&&(d=[{name:'\u4E0A\u4F20',type:'upload'},{name:'\u6D4B\u8BD5',type:'test'},{name:'\u817E\u8BAF\u4E91',type:'qcloud'},{name:'\u8BE6\u60C5',type:'project'}],930>c&&(d=d.concat([{name:this.props.backgroundShow?'\u5207\u524D\u53F0':'\u5207\u540E\u53F0',type:'background'},{name:'\u6E05\u7F13\u5B58',type:'cleancache'}]))),this.setState({moreDropDownTop:b.top+22,moreDropDownList:d}),this.props.toolbarActions.toggleClickKey(m.MORETOOL)}onMoreSelect(a,b){this.props.toolbarActions.toggleClickKey(m.NONE);let c=this.state.moreDropDownList[a];if(c)switch(c.type){case'upload':{this.onUploadClick();break}case'test':{this.onTestClick();break}case'qcloud':{this.setState({QCloudLeft:void 0,QCloudRight:0,QCloudTop:this.state.moreDropDownTop}),this.props.toolbarActions.toggleClickKey(m.QCLOUD);break}case'project':{this.toggleProjectInfo(b);break}case'background':{this.onSetBackground();break}case'cleancache':{this.setState({CleanCacheTop:this.state.moreDropDownTop,CleanCacheLeft:void 0,CleanCacheRight:0}),this.props.toolbarActions.toggleClickKey(m.CLEANCACHE);break}}}showErr(a,b='\u9519\u8BEF',c=()=>{}){this.props.infoActions.setConfirmInfo({show:!0,showCancel:!1,title:b,content:a,callback:async()=>{c()}})}async toggleQCloud(a){if(a.stopPropagation(),this.props.actionBtnDisabled)return;let b=this.props.project,c=x.isQcloudProject(b);if(!c){try{await this.props.requestProjectAttr()}catch(a){}b=this.props.project,c=x.isQcloudProject(b)}if(!c)return void this.props.infoActions.setConfirmInfo({show:!0,showCancel:!0,title:'\u672A\u6388\u6743\u817E\u8BAF\u4E91',content:`当前 AppID ${b.appid} 未授权给腾讯云，点击确定查看文档`,callback:async(a)=>{a&&nw.Shell.openExternal('https://github.com/tencentyun/wafer2-quickstart')}});if(this.props.qcloud&&this.props.qcloud.currentOperation){const a={[y.CLOUD_ACTION_UPLOAD]:'\u4E0A\u4F20',[y.CLOUD_ACTION_DEBUG]:'\u51C6\u5907\u5355\u6B65\u8C03\u8BD5',[y.CLOUD_ACTION_DEPLOY_DEV]:'\u90E8\u7F72\u5230\u6D4B\u8BD5\u73AF\u5883',[y.CLOUD_ACTION_DEPLOY_PRODUCT]:'\u90E8\u7F72\u5230\u6B63\u5F0F\u73AF\u5883',[y.CLOUD_ACTION_INSTALL_DEPENDENCE]:'\u5B89\u88C5\u4F9D\u8D56',[y.CLOUD_ACTION_RESET_SERVICE]:'\u6062\u590D\u5F00\u53D1\u73AF\u5883',[y.CLOUD_ACTION_RESTART_SERVICE]:'\u91CD\u542F\u670D\u52A1',[y.CLOUD_ACTION_STOP_SERVICE]:'\u505C\u6B62\u670D\u52A1',[y.CLOUD_ACTION_UPLOAD_IDC]:'\u4E0A\u4F20\u6B63\u5F0F\u4EE3\u7801'},b=a[this.props.qcloud.currentOperation];if(b)return void this.showErr(`正在${b}中，请等待操作完成`)}this.props.toolbarActions.toggleClickKey(m.QCLOUD);let d=a.currentTarget.getBoundingClientRect();this.setState({QCloudLeft:d.left,QCloudTop:d.top+20})}render(){let b=this.props,e='',f=this.compileTypeConstants.map((a)=>{return a.value==this.props.compileType&&(e=a.name),a.name}),g=this.state.moreDropDownList.map((a)=>{return a.name});return a.createElement('div',{className:'header',style:{marginTop:this.state.marginTop}},a.createElement(d,null),a.createElement(q,{width:152,left:this.state.compileTypeDropDownLeft,top:this.state.compileTypeDropDownTop,show:b.clickkey==m.COMPILETYPE,list:f,onSelectClick:this.onCompileTypeSelect.bind(this)}),a.createElement(w,{left:this.state.QCloudLeft,top:this.state.QCloudTop,right:this.state.QCloudRight}),a.createElement(q,{right:0,top:this.state.moreDropDownTop,show:b.clickkey==m.MORETOOL,list:g,onSelectClick:this.onMoreSelect.bind(this)}),a.createElement(l,{left:this.state.CleanCacheLeft,top:this.state.CleanCacheTop,right:this.state.CleanCacheRight}),b.previewQRShow?a.createElement(n,{left:this.state.QRCodeLeft,top:this.state.QRCodeTop,timeStamp:this.state.timeStamp}):null,a.createElement(j,{left:this.state.condictionDropDownLeft,top:this.state.condictionDropDownTop}),a.createElement('div',{className:'toolbar'},a.createElement('div',{className:'toolbar-items'},a.createElement('div',{className:'toolbar-item',onClick:this.onSetSimulator.bind(this)},a.createElement('div',{className:c('toolbar-action',{"toolbar-action-active":b.simulatorShow})},a.createElement('div',{className:'toolbar-button'},a.createElement('i',{className:'ui-icon-simulator'})),a.createElement('p',{className:'toolbar-label'},'\u6A21\u62DF\u5668'))),a.createElement('div',{className:'toolbar-item',onClick:this.onSetEditor.bind(this)},a.createElement('div',{className:c('toolbar-action',{"toolbar-action-active":b.editorShow})},a.createElement('div',{className:'toolbar-button'},a.createElement('i',{className:'ui-icon-editor'})),a.createElement('p',{className:'toolbar-label'},'\u7F16\u8F91\u5668'))),a.createElement('div',{className:'toolbar-item',onClick:this.onSetAppservice.bind(this)},a.createElement('div',{className:c('toolbar-action',{"toolbar-action-active":b.debugShow})},a.createElement('div',{className:'toolbar-button'},a.createElement('i',{className:'ui-icon-debug'})),a.createElement('p',{className:'toolbar-label'},'\u8C03\u8BD5\u5668')))),a.createElement('div',{className:'toolbar-items'},a.createElement('div',{className:'toolbar-item',style:{display:global.appConfig.isBeta||b.searchWidgetShow?'':'none'}},a.createElement('div',{className:'toolbar-action-group'},a.createElement('div',{className:'toolbar-action',onClick:this.toggleCompileType.bind(this)},a.createElement('div',{className:'toolbar-action-selector'},a.createElement('p',null,e),a.createElement('i',{className:c({"ui-icon-arrow-down":b.clickkey!=m.COMPILETYPE,"ui-icon-arrow-up":b.clickkey==m.COMPILETYPE})}))))),a.createElement('div',{className:'toolbar-item-divider',style:{display:b.searchWidgetShow?'':'none'}}),a.createElement('div',{className:'toolbar-item'},a.createElement('div',{className:'toolbar-action-group'},a.createElement('div',{className:'toolbar-action',onClick:this.toggleCompileCondiction.bind(this)},a.createElement('div',{className:'toolbar-action-selector',onClick:this.toggleCompileCondiction.bind(this)},a.createElement('p',null,b.condictionName),a.createElement('i',{className:c({"ui-icon-arrow-down":b.clickkey!=m.COMPILECONDICTION,"ui-icon-arrow-up":b.clickkey==m.COMPILECONDICTION})}))),a.createElement('div',{className:'toolbar-action',onClick:this.onLaunchSimulator.bind(this)},a.createElement('div',{className:'toolbar-button'},a.createElement('i',{className:'ui-icon-refresh'})),a.createElement('p',{className:'toolbar-label'},'\u7F16\u8BD1')),a.createElement('div',{className:'toolbar-action',ref:'previewBtn',disabled:b.actionBtnDisabled,onClick:this.togglePreviewCode.bind(this)},a.createElement('div',{className:'toolbar-button',ref:(a)=>this.qrbutton=a,title:b.disabledTips},a.createElement('i',{className:'ui-icon-eye'})),a.createElement('p',{className:'toolbar-label'},'\u9884\u89C8')))),a.createElement('div',{className:'toolbar-item'},a.createElement('div',{className:'toolbar-action',onClick:this.onSetBackground.bind(this)},a.createElement('div',{className:'toolbar-button'},a.createElement('i',{className:'ui-icon-backstage'})),a.createElement('p',{className:'toolbar-label'},b.backgroundShow?'\u5207\u524D\u53F0':'\u5207\u540E\u53F0'))),a.createElement('div',{className:'toolbar-item'},a.createElement('div',{className:'toolbar-action',onClick:this.toggleCleanCache.bind(this)},a.createElement('div',{className:'toolbar-button'},a.createElement('i',{className:'ui-icon-cache'}),a.createElement('i',{className:c({"ui-icon-arrow-down":b.clickkey!=m.CLEANCACHE,"ui-icon-arrow-up":b.clickkey==m.CLEANCACHE})})),a.createElement('p',{className:'toolbar-label'},'\u6E05\u7F13\u5B58')))),a.createElement('div',{className:'toolbar-items'},a.createElement('div',{className:'toolbar-item-group'},a.createElement('div',{className:'toolbar-item'},a.createElement('div',{className:'toolbar-action',disabled:b.actionBtnDisabled,onClick:this.onUploadClick.bind(this)},a.createElement('div',{className:'toolbar-button',title:b.disabledTips},a.createElement('i',{className:'ui-icon-upload'})),a.createElement('p',{className:'toolbar-label'},'\u4E0A\u4F20'))),a.createElement('div',{className:'toolbar-item'},a.createElement('div',{className:'toolbar-action',disabled:b.actionBtnDisabled,onClick:this.onTestClick.bind(this)},a.createElement('div',{className:'toolbar-button',title:b.disabledTips},a.createElement('i',{className:'ui-icon-beaker'})),a.createElement('p',{className:'toolbar-label'},'\u6D4B\u8BD5'))),a.createElement('div',{className:'toolbar-item'},a.createElement('div',{className:'toolbar-action',disabled:b.actionBtnDisabled,onClick:this.toggleQCloud.bind(this)},a.createElement('div',{className:'toolbar-button',title:b.disabledTips},a.createElement('i',{className:'ui-icon-cloud'})),a.createElement('p',{className:'toolbar-label'},'\u817E\u8BAF\u4E91')))),a.createElement('div',{className:'toolbar-item-group'},a.createElement('div',{className:'toolbar-item'},a.createElement('div',{className:c('toolbar-action',{"toolbar-action-active":b.projectInfoShow}),onClick:this.toggleProjectInfo.bind(this)},a.createElement('div',{className:'toolbar-button'},a.createElement('i',{className:'ui-icon-bars'})),a.createElement('p',{className:'toolbar-label'},'\u8BE6\u60C5'))))),a.createElement('a',{className:'toolbar-more',onClick:this.onMoreClick.bind(this)},a.createElement('i',{className:'ui-icon-double-arrow-right'}))))}}module.exports=C((a)=>{let b=a.project.current||{},c=b.compileType,d=b.condiction&&b.condiction[c],e={},f='\u666E\u901A\u7F16\u8BD1';d&&d.list&&(e=d.list[d.current],e?f=e.name:e={});let g=a.toolbar.clickKey,h=a.simulator.webviewInfos[a.simulator.currentWebviewID]||{},i=b.attr&&b.attr.userbanded,j=b.isTourist||!i,k='';return j&&(k=b.isTourist?u.config.ALERT_TOURIST_FORBIDDEN_CONTENT:i?'':u.config.CGI_ERR_NOT_BAND),{show:a.window.toolbar&&a.window.toolbar.show,qcloud:b.qcloud,searchWidgetShow:b.attr&&b.attr.searchWidget,actionBtnDisabled:j,disabledTips:k,previewQRShow:m.PREVIEWCODE==g,debugShow:a.window.debug.show,editorShow:a.window.editor&&a.window.editor.show,simulatorShow:a.window.simulator&&a.window.simulator.show,projectInfoShow:m.PROJECTINFO==g,device:a.toolbar.deviceInfo,backgroundShow:a.simulator.backgroundShow,clickkey:a.toolbar.clickKey,project:b,condiction:e,webviewInfo:h,compileType:c,condictionName:f}},(a)=>{return{toolbarActions:p.bindActionCreators(k,a),windowActions:p.bindActionCreators(f,a),infoActions:p.bindActionCreators(g,a),setProjectQCloud:p.bindActionCreators(r.setProjectQCloud,a),requestProjectAttr:p.bindActionCreators(r.requestProjectAttr,a),compile:p.bindActionCreators(h.compile,a),setBackground:p.bindActionCreators(h.setBackground,a),debugActions:p.bindActionCreators(i,a),setProjectCompileType:p.bindActionCreators(r.setProjectCompileType,a)}})(D)}(require('lazyload'),require);