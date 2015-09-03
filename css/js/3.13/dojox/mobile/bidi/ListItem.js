//>>built
define("dojox/mobile/bidi/ListItem",["dojo/_base/declare","dojo/_base/array","dojo/dom-construct","./common","dojo/_base/window"],function(g,h,e,a,f){return g(null,{_applyAttributes:function(){!this.textDir&&(this.getParent()&&this.getParent().get("textDir"))&&(this.textDir=this.getParent().get("textDir"));this.inherited(arguments);this.textDir&&this._applyTextDirToTextElements()},_setRightTextAttr:function(b){!this.templateString&&!this.rightTextNode&&(this.rightTextNode=e.create("div",{className:"mblListItemRightText"},
this.labelNode,"before"));this.rightTextNode&&(this.rightText=b,this.rightTextNode.innerHTML=this._cv?this._cv(b):b,this.textDir&&(this.rightTextNode.innerHTML=a.enforceTextDirWithUcc(this.rightTextNode.innerHTML,this.textDir)))},_setLabelAttr:function(b){this.inherited("_setLabelAttr",arguments);this.labelNode.innerHTML=a.enforceTextDirWithUcc(this.labelNode.innerHTML,this.textDir)},_applyTextDirToTextElements:function(){if(this.labelNode.innerHTML)this.labelNode.innerHTML=a.removeUCCFromText(this.labelNode.innerHTML),
this.labelNode.innerHTML=a.enforceTextDirWithUcc(this.labelNode.innerHTML,this.textDir),this.labelNode.style.cssText="text-align: start";else{var b=0;h.forEach(this.domNode.childNodes,function(c){var d;0===b?3===c.nodeType&&(c.nodeValue===a.MARK.RLE||c.nodeValue===a.MARK.LRE)?(c.nodeValue=c.nodeValue===a.MARK.RLE?a.MARK.LRE:a.MARK.RLE,b=2):(d=1===c.nodeType&&1===c.childNodes.length?c.firstChild:c,3===d.nodeType&&d.nodeValue&&-1!=d.nodeValue.search(/[.\S]/)&&(b=1,d=f.doc.createTextNode("rtl"===this.getTextDir(d.nodeValue).toLowerCase()?
a.MARK.RLE:a.MARK.LRE),e.place(d,c,"before"))):1===b&&"div"===c.nodeName.toLowerCase()&&(b=2,d=f.doc.createTextNode(a.MARK.PDF),e.place(d,c,"before"))},this)}},_setTextDirAttr:function(b){b&&this.textDir!==b&&(this.textDir=b,this._applyTextDirToTextElements(),this.rightTextNode&&(this.rightTextNode.innerHTML=a.removeUCCFromText(this.rightTextNode.innerHTML),this.rightTextNode.innerHTML=a.enforceTextDirWithUcc(this.rightTextNode.innerHTML,this.textDir)))}})});