/*
 Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.html or http://ckeditor.com/license
*/
(function(){function e(e,t,o){var u=s[this.id];if(u)for(var a=this instanceof CKEDITOR.ui.dialog.checkbox,f=0;f<u.length;f++){var l=u[f];switch(l.type){case n:if(!e)continue;if(null!==e.getAttribute(l.name)){e=e.getAttribute(l.name),a?this.setValue("true"==e.toLowerCase()):this.setValue(e);return}a&&this.setValue(!!l["default"]);break;case r:if(!e)continue;if(l.name in o){e=o[l.name],a?this.setValue("true"==e.toLowerCase()):this.setValue(e);return}a&&this.setValue(!!l["default"]);break;case i:if(!t)continue;if(t.getAttribute(l.name)){e=t.getAttribute(l.name),a?this.setValue("true"==e.toLowerCase()):this.setValue(e);return}a&&this.setValue(!!l["default"])}}}function t(e,t,o){var u=s[this.id];if(u)for(var a=""===this.getValue(),f=this instanceof CKEDITOR.ui.dialog.checkbox,l=0;l<u.length;l++){var c=u[l];switch(c.type){case n:if(!e||"data"==c.name&&t&&!e.hasAttribute("data"))continue;var h=this.getValue();a||f&&h===c["default"]?e.removeAttribute(c.name):e.setAttribute(c.name,h);break;case r:if(!e)continue;h=this.getValue();if(a||f&&h===c["default"])c.name in o&&o[c.name].remove();else if(c.name in o)o[c.name].setAttribute("value",h);else{var p=CKEDITOR.dom.element.createFromHtml("<cke:param></cke:param>",e.getDocument());p.setAttributes({name:c.name,value:h}),1>e.getChildCount()?p.appendTo(e):p.insertBefore(e.getFirst())}break;case i:if(!t)continue;h=this.getValue(),a||f&&h===c["default"]?t.removeAttribute(c.name):t.setAttribute(c.name,h)}}}for(var n=1,r=2,i=4,s={id:[{type:n,name:"id"}],classid:[{type:n,name:"classid"}],codebase:[{type:n,name:"codebase"}],pluginspage:[{type:i,name:"pluginspage"}],src:[{type:r,name:"movie"},{type:i,name:"src"},{type:n,name:"data"}],name:[{type:i,name:"name"}],align:[{type:n,name:"align"}],"class":[{type:n,name:"class"},{type:i,name:"class"}],width:[{type:n,name:"width"},{type:i,name:"width"}],height:[{type:n,name:"height"},{type:i,name:"height"}],hSpace:[{type:n,name:"hSpace"},{type:i,name:"hSpace"}],vSpace:[{type:n,name:"vSpace"},{type:i,name:"vSpace"}],style:[{type:n,name:"style"},{type:i,name:"style"}],type:[{type:i,name:"type"}]},o="play loop menu quality scale salign wmode bgcolor base flashvars allowScriptAccess allowFullScreen".split(" "),u=0;u<o.length;u++)s[o[u]]=[{type:i,name:o[u]},{type:r,name:o[u]}];o=["allowFullScreen","play","loop","menu"];for(u=0;u<o.length;u++)s[o[u]][0]["default"]=s[o[u]][1]["default"]=!0;CKEDITOR.dialog.add("flash",function(n){var r=!n.config.flashEmbedTagOnly,i=n.config.flashAddEmbedTag||n.config.flashEmbedTagOnly,s,o="<div>"+CKEDITOR.tools.htmlEncode(n.lang.common.preview)+'<br><div id="cke_FlashPreviewLoader'+CKEDITOR.tools.getNextNumber()+'" style="display:none"><div class="loading">&nbsp;</div></div><div id="cke_FlashPreviewBox'+CKEDITOR.tools.getNextNumber()+'" class="FlashPreviewBox"></div></div>';return{title:n.lang.flash.title,minWidth:420,minHeight:310,onShow:function(){this.fakeImage=this.objectNode=this.embedNode=null,s=new CKEDITOR.dom.element("embed",n.document);var e=this.getSelectedElement();if(e&&e.data("cke-real-element-type")&&"flash"==e.data("cke-real-element-type")){this.fakeImage=e;var t=n.restoreRealElement(e),r=null,i=null,o={};if("cke:object"==t.getName()){r=t,t=r.getElementsByTag("embed","cke"),0<t.count()&&(i=t.getItem(0));for(var t=r.getElementsByTag("param","cke"),u=0,f=t.count();u<f;u++){var l=t.getItem(u),c=l.getAttribute("name"),l=l.getAttribute("value");o[c]=l}}else"cke:embed"==t.getName()&&(i=t);this.objectNode=r,this.embedNode=i,this.setupContent(r,i,o,e)}},onOk:function(){var e=null,t=null,s=null;if(this.fakeImage)e=this.objectNode,t=this.embedNode;else if(r&&(e=CKEDITOR.dom.element.createFromHtml("<cke:object></cke:object>",n.document),e.setAttributes({classid:"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000",codebase:"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0"})),i)t=CKEDITOR.dom.element.createFromHtml("<cke:embed></cke:embed>",n.document),t.setAttributes({type:"application/x-shockwave-flash",pluginspage:"http://www.macromedia.com/go/getflashplayer"}),e&&t.appendTo(e);if(e)for(var s={},o=e.getElementsByTag("param","cke"),u=0,f=o.count();u<f;u++)s[o.getItem(u).getAttribute("name")]=o.getItem(u);o={},u={},this.commitContent(e,t,s,o,u),e=n.createFakeElement(e||t,"cke_flash","flash",!0),e.setAttributes(u),e.setStyles(o),this.fakeImage?(e.replace(this.fakeImage),n.getSelection().selectElement(e)):n.insertElement(e)},onHide:function(){this.preview&&this.preview.setHtml("")},contents:[{id:"info",label:n.lang.common.generalTab,accessKey:"I",elements:[{type:"vbox",padding:0,children:[{type:"hbox",widths:["280px","110px"],align:"right",children:[{id:"src",type:"text",label:n.lang.common.url,required:!0,validate:CKEDITOR.dialog.validate.notEmpty(n.lang.flash.validateSrc),setup:e,commit:t,onLoad:function(){var e=this.getDialog(),t=function(t){s.setAttribute("src",t),e.preview.setHtml('<embed height="100%" width="100%" src="'+CKEDITOR.tools.htmlEncode(s.getAttribute("src"))+'" type="application/x-shockwave-flash"></embed>')};e.preview=e.getContentElement("info","preview").getElement().getChild(3),this.on("change",function(e){e.data&&e.data.value&&t(e.data.value)}),this.getInputElement().on("change",function(){t(this.getValue())},this)}},{type:"button",id:"browse",filebrowser:"info:src",hidden:!0,style:"display:inline-block;margin-top:10px;",label:n.lang.common.browseServer}]}]},{type:"hbox",widths:["25%","25%","25%","25%","25%"],children:[{type:"text",id:"width",style:"width:95px",label:n.lang.common.width,validate:CKEDITOR.dialog.validate.htmlLength(n.lang.common.invalidHtmlLength.replace("%1",n.lang.common.width)),setup:e,commit:t},{type:"text",id:"height",style:"width:95px",label:n.lang.common.height,validate:CKEDITOR.dialog.validate.htmlLength(n.lang.common.invalidHtmlLength.replace("%1",n.lang.common.height)),setup:e,commit:t},{type:"text",id:"hSpace",style:"width:95px",label:n.lang.flash.hSpace,validate:CKEDITOR.dialog.validate.integer(n.lang.flash.validateHSpace),setup:e,commit:t},{type:"text",id:"vSpace",style:"width:95px",label:n.lang.flash.vSpace,validate:CKEDITOR.dialog.validate.integer(n.lang.flash.validateVSpace),setup:e,commit:t}]},{type:"vbox",children:[{type:"html",id:"preview",style:"width:95%;",html:o}]}]},{id:"Upload",hidden:!0,filebrowser:"uploadButton",label:n.lang.common.upload,elements:[{type:"file",id:"upload",label:n.lang.common.upload,size:38},{type:"fileButton",id:"uploadButton",label:n.lang.common.uploadSubmit,filebrowser:"info:src","for":["Upload","upload"]}]},{id:"properties",label:n.lang.flash.propertiesTab,elements:[{type:"hbox",widths:["50%","50%"],children:[{id:"scale",type:"select",label:n.lang.flash.scale,"default":"",style:"width : 100%;",items:[[n.lang.common.notSet,""],[n.lang.flash.scaleAll,"showall"],[n.lang.flash.scaleNoBorder,"noborder"],[n.lang.flash.scaleFit,"exactfit"]],setup:e,commit:t},{id:"allowScriptAccess",type:"select",label:n.lang.flash.access,"default":"",style:"width : 100%;",items:[[n.lang.common.notSet,""],[n.lang.flash.accessAlways,"always"],[n.lang.flash.accessSameDomain,"samedomain"],[n.lang.flash.accessNever,"never"]],setup:e,commit:t}]},{type:"hbox",widths:["50%","50%"],children:[{id:"wmode",type:"select",label:n.lang.flash.windowMode,"default":"",style:"width : 100%;",items:[[n.lang.common.notSet,""],[n.lang.flash.windowModeWindow,"window"],[n.lang.flash.windowModeOpaque,"opaque"],[n.lang.flash.windowModeTransparent,"transparent"]],setup:e,commit:t},{id:"quality",type:"select",label:n.lang.flash.quality,"default":"high",style:"width : 100%;",items:[[n.lang.common.notSet,""],[n.lang.flash.qualityBest,"best"],[n.lang.flash.qualityHigh,"high"],[n.lang.flash.qualityAutoHigh,"autohigh"],[n.lang.flash.qualityMedium,"medium"],[n.lang.flash.qualityAutoLow,"autolow"],[n.lang.flash.qualityLow,"low"]],setup:e,commit:t}]},{type:"hbox",widths:["50%","50%"],children:[{id:"align",type:"select",label:n.lang.common.align,"default":"",style:"width : 100%;",items:[[n.lang.common.notSet,""],[n.lang.common.alignLeft,"left"],[n.lang.flash.alignAbsBottom,"absBottom"],[n.lang.flash.alignAbsMiddle,"absMiddle"],[n.lang.flash.alignBaseline,"baseline"],[n.lang.common.alignBottom,"bottom"],[n.lang.common.alignMiddle,"middle"],[n.lang.common.alignRight,"right"],[n.lang.flash.alignTextTop,"textTop"],[n.lang.common.alignTop,"top"]],setup:e,commit:function(e,n,r,i,s){var o=this.getValue();t.apply(this,arguments),o&&(s.align=o)}},{type:"html",html:"<div></div>"}]},{type:"fieldset",label:CKEDITOR.tools.htmlEncode(n.lang.flash.flashvars),children:[{type:"vbox",padding:0,children:[{type:"checkbox",id:"menu",label:n.lang.flash.chkMenu,"default":!0,setup:e,commit:t},{type:"checkbox",id:"play",label:n.lang.flash.chkPlay,"default":!0,setup:e,commit:t},{type:"checkbox",id:"loop",label:n.lang.flash.chkLoop,"default":!0,setup:e,commit:t},{type:"checkbox",id:"allowFullScreen",label:n.lang.flash.chkFull,"default":!0,setup:e,commit:t}]}]}]},{id:"advanced",label:n.lang.common.advancedTab,elements:[{type:"hbox",children:[{type:"text",id:"id",label:n.lang.common.id,setup:e,commit:t}]},{type:"hbox",widths:["45%","55%"],children:[{type:"text",id:"bgcolor",label:n.lang.flash.bgcolor,setup:e,commit:t},{type:"text",id:"class",label:n.lang.common.cssClass,setup:e,commit:t}]},{type:"text",id:"style",validate:CKEDITOR.dialog.validate.inlineStyle(n.lang.common.invalidInlineStyle),label:n.lang.common.cssStyle,setup:e,commit:t}]}]}})})();