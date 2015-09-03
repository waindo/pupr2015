// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.13/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/fgdc/dataqual/templates/procstep.html":"\x3cdiv data-dojo-attach-point\x3d\"containerNode\"\x3e\r\n\r\n\t\x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/Element\"\r\n\t\tdata-dojo-props\x3d\"target:'procstep',maxOccurs:'unbounded',\r\n\t\t\tlabel:'${i18nFgdc.dataqual.procstep.caption}'\"\x3e\r\n\t\t\t\r\n\t\t\x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/Element\"\r\n\t\t\tdata-dojo-props\x3d\"target:'procdesc',\r\n\t\t\t\tlabel:'${i18nFgdc.dataqual.procstep.procdesc}'\"\x3e\r\n\t\t\t\x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/InputTextArea\"\x3e\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\r\n\t\t\x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/Element\"\r\n\t\t\tdata-dojo-props\x3d\"target:'srcused',minOccurs:0,maxOccurs:'unbounded',\r\n\t\t\t\tlabel:'${i18nFgdc.dataqual.procstep.srcused}'\"\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\r\n\t\t\x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/Element\"\r\n\t\t\tdata-dojo-props\x3d\"target:'procdate',\r\n\t\t\t\tlabel:'${i18nFgdc.dataqual.procstep.procdate}',\r\n\t\t\t\talternateValues:['Unknown','Not complete']\"\x3e\r\n\t\t\t\x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/fgdc/InputDate\"\x3e\r\n\t\t\t\t\x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/tools/ClickableValueTool\"\r\n\t\t\t\t\tdata-dojo-props\x3d\"value:'Unknown',label:'${i18nFgdc.alternates.unknown}'\"\x3e\x3c/div\x3e\t\r\n\t\t\t\t\x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/tools/ClickableValueTool\"\r\n\t\t\t\t\tdata-dojo-props\x3d\"value:'Not complete',label:'${i18nFgdc.alternates.notComplete}'\"\x3e\x3c/div\x3e\t\r\n\t\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\r\n\t\t\x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/Element\"\r\n\t\t\tdata-dojo-props\x3d\"target:'proctime',minOccurs:0,\r\n\t\t\t\tlabel:'${i18nFgdc.dataqual.procstep.proctime}'\"\x3e\r\n\t\t\t\x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/fgdc/InputTime\"\x3e\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\r\n\t\t\x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/Element\"\r\n\t\t\tdata-dojo-props\x3d\"target:'srcprod',minOccurs:0,maxOccurs:'unbounded',\r\n\t\t\t\tlabel:'${i18nFgdc.dataqual.procstep.srcprod}'\"\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\r\n\t\t\x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/form/Element\"\r\n\t\t\tdata-dojo-props\x3d\"target:'proccont',minOccurs:0,\r\n\t\t\t\tlabel:'${i18nFgdc.dataqual.procstep.proccont}'\"\x3e\r\n\t\t\t\x3cdiv data-dojo-type\x3d\"esri/dijit/metadata/types/fgdc/cntinfo/cntinfo\"\x3e\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\r\n\t\x3c/div\x3e\r\n\t\r\n\x3c/div\x3e"}});
define("esri/dijit/metadata/types/fgdc/dataqual/procstep","dojo/_base/declare dojo/_base/lang dojo/has ../../../base/Descriptor ../../../form/Element ../../../form/InputTextArea ../../../form/fgdc/InputDate ../../../form/fgdc/InputTime ../../../form/tools/ClickableValueTool ../cntinfo/cntinfo dojo/text!./templates/procstep.html ../../../../../kernel".split(" "),function(a,b,c,d,g,h,k,l,m,n,e,f){a=a(d,{templateString:e});c("extend-esri")&&b.setObject("dijit.metadata.types.fgdc.dataqual.procstep",a,
f);return a});