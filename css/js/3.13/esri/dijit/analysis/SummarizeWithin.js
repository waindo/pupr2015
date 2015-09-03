// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.13/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/templates/SummarizeWithin.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" style\x3d"margin-top:0.5em; margin-bottom: 0.5em;"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"_aggregateToolContentTitle" class\x3d"analysisTitle"\x3e\r\n        \x3ctable class\x3d"esriFormTable" \x3e \r\n          \x3ctr\x3e\r\n            \x3ctd class\x3d"esriToolIconTd"\x3e\x3cdiv class\x3d"sumWithinIcon"\x3e\x3c/div\x3e\x3c/td\x3e\r\n            \x3ctd class\x3d"esriAlignLeading"\x3e${i18n.summarizeWithin}\x3c/td\x3e\r\n            \x3ctd\x3e\r\n              \x3cdiv class\x3d"esriFloatTrailing" style\x3d"padding:0;"\x3e\r\n                  \x3cdiv class\x3d"esriFloatLeading"\x3e\r\n                    \x3ca href\x3d"#" class\x3d\'esriFloatLeading helpIcon\' esriHelpTopic\x3d"toolDescription"\x3e\x3c/a\x3e\r\n                  \x3c/div\x3e\r\n                  \x3cdiv class\x3d"esriFloatTrailing"\x3e\r\n                    \x3ca href\x3d"#" data-dojo-attach-point\x3d"_closeBtn" title\x3d"${i18n.close}" class\x3d"esriAnalysisCloseIcon"\x3e\x3c/a\x3e\r\n                  \x3c/div\x3e              \r\n              \x3c/div\x3e               \r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n        \x3c/table\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv style\x3d"clear:both; border-bottom: #CCC thin solid; height:1px;width:100%;"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"_form" readOnly\x3d"true"\x3e\r\n       \x3ctable class\x3d"esriFormTable"  data-dojo-attach-point\x3d"_aggregateTable"  style\x3d"border-collapse:collapse;border-spacing:5px;" cellpadding\x3d"5px" cellspacing\x3d"5px"\x3e \r\n         \x3ctbody\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd  colspan\x3d"3" class\x3d"sectionHeader" data-dojo-attach-point\x3d"_aggregateToolDescription" \x3e${i18n.summarizeDefine}\x3c/td\x3e\r\n          \x3c/tr\x3e      \r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d""\x3e${i18n.chooseSummarizeLabel}\x3c/label\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"Summarize"\x3e\x3c/a\x3e\r\n              \x3cselect class\x3d"longInput esriLongLabel esriLeadingMargin1"  style\x3d"margin-top:1.0em;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_layersSelect" data-dojo-attach-event\x3d"onChange:_handleLayerChange"\x3e\x3c/select\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.twoLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"longTextInput" data-dojo-attach-point\x3d"_addStatsLabel"\x3e\x3c/label\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' data-dojo-attach-point\x3d"_addStatsHelpLink" esriHelpTopic\x3d"AddStatisticsFrom"\x3e\x3c/a\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n         \x3ctr\x3e\r\n           \x3ctd colspan\x3d"3"\x3e\r\n              \x3clabel class\x3d"esriLeadingMargin1"\x3e\r\n                \x3cdiv data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-attach-point\x3d"_sumMetricCheck" data-dojo-props\x3d"checked:\'true\', disabled:\'true\'"\x3e\x3c/div\x3e\r\n                \x3clabel data-dojo-attach-point\x3d"_sumMetricLabel"\x3e\x3c/label\x3e\r\n              \x3c/label\x3e\r\n              \x3cselect class\x3d"mediumInput esriShortlabel" data-dojo-type\x3d"dijit.form.Select"  data-dojo-props\x3d"style:{tableLayout: \'fixed\', overflowX:\'hidden\'}" data-dojo-attach-event\x3d"onChange:_handleShapeUnitsChange" data-dojo-attach-point\x3d"_shapeUnitsSelect"\x3e\x3c/select\x3e\r\n           \x3c/td\x3e\r\n         \x3c/tr\x3e\r\n         \x3c!--\x3ctr\x3e\r\n           \x3ctd colspan\x3d"3"\x3e\r\n              \x3clabel class\x3d"longTextInput"\x3e\r\n                \x3cdiv data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-attach-point\x3d"_addStatesCheck" data-dojo-attach-event\x3d"onChange:_handleStatsCheckChange" data-dojo-props\x3d"checked:\'true\'"\x3e\x3c/div\x3e\r\n                ${i18n.addStatsLabel}                \r\n              \x3c/label\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"KeepBoundaryNoPoints"\x3e\x3c/a\x3e\r\n           \x3c/td\x3e           \r\n          \x3c/tr\x3e--\x3e           \r\n          \x3ctr data-dojo-attach-point\x3d"_afterStatsRow"\x3e\r\n            \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"2"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.threeLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"longTextInput"  data-dojo-attach-point\x3d"_groupByLabel"\x3e${i18n.groupByLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"GroupBy"\x3e\x3c/a\x3e \r\n            \x3c/td\x3e             \r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3"\x3e\r\n              \x3cselect class\x3d"longInput esriLeadingMargin1" data-dojo-type\x3d"dijit.form.Select"  data-dojo-attach-point\x3d"_groupBySelect" data-dojo-attach-event\x3d"onChange:_handleGroupBySelectChange"\x3e\x3c/select\x3e\r\n            \x3c/td\x3e                \r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n           \x3ctd colspan\x3d"2"\x3e\r\n             \x3clabel class\x3d"esriLeadingMargin2 esriSelectLabel" data-dojo-attach-point\x3d"_minmajorityLabel"\x3e\r\n               \x3cdiv data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-attach-point\x3d"_minmajorityCheck" data-dojo-props\x3d"checked:false"\x3e\x3c/div\x3e\r\n               ${i18n.addMinMajorityLable}\r\n             \x3c/label\x3e\r\n           \x3c/td\x3e\r\n           \x3ctd class\x3d"shortTextInput"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"MinorityMajority"\x3e\x3c/a\x3e\r\n           \x3c/td\x3e\r\n          \x3c/tr\x3e    \r\n          \x3ctr\x3e\r\n           \x3ctd colspan\x3d"2"\x3e\r\n             \x3clabel class\x3d"esriLeadingMargin2 esriSelectLabel" data-dojo-attach-point\x3d"_percentPointsLabel"\x3e\r\n               \x3cdiv data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-attach-point\x3d"_percentPointsCheck" data-dojo-props\x3d"checked:false"\x3e\x3c/div\x3e\r\n               ${i18n.addPercentageLabel}\r\n             \x3c/label\x3e\r\n           \x3c/td\x3e\r\n           \x3ctd class\x3d"shortTextInput"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"PercentShape"\x3e\x3c/a\x3e\r\n           \x3c/td\x3e\r\n          \x3c/tr\x3e    \r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"2"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.fourLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"longTextInput"\x3e${i18n.outputLayerLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"ResultLayerName"\x3e\x3c/a\x3e \r\n            \x3c/td\x3e             \r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3"\x3e\r\n              \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" class\x3d"longInput esriLeadingMargin1" data-dojo-props\x3d"trim:true,required:true" data-dojo-attach-point\x3d"_outputLayerInput" value\x3d""\x3e\x3c/input\x3e\r\n            \x3c/td\x3e                \r\n          \x3c/tr\x3e \r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3"\x3e\r\n               \x3cdiv data-dojo-attach-point\x3d"_chooseFolderRow" class\x3d"esriLeadingMargin1"\x3e\r\n                 \x3clabel style\x3d"width:9px;font-size:smaller;"\x3e${i18n.saveResultIn}\x3c/label\x3e\r\n                 \x3cinput class\x3d"longInput" dojoAttachPoint\x3d"_webMapFolderSelect" dojotype\x3d"dijit/form/ComboBox" trim\x3d"true" style\x3d"width:60%;"\x3e\x3c/input\x3e\r\n               \x3c/div\x3e              \r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e                                      \r\n        \x3c/tbody\x3e         \r\n       \x3c/table\x3e\r\n     \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_aggregateToolContentButtons" style\x3d"padding:5px;margin-top:5px;border-top:solid 1px #BBB;"\x3e\r\n      \x3cdiv class\x3d"esriExtentCreditsCtr"\x3e\r\n        \x3ca class\x3d"esriFloatTrailing esriSmallFont"  href\x3d"#" data-dojo-attach-point\x3d"_showCreditsLink" data-dojo-attach-event\x3d"onclick:_handleShowCreditsClick"\x3e${i18n.showCredits}\x3c/a\x3e\r\n       \x3clabel data-dojo-attach-point\x3d"_chooseExtentDiv" class\x3d"esriSelectLabel esriExtentLabel"\x3e\r\n         \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_useExtentCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:true" name\x3d"extent" value\x3d"true"/\x3e\r\n           ${i18n.useMapExtent}\r\n       \x3c/label\x3e\r\n      \x3c/div\x3e\r\n      \x3cbutton data-dojo-type\x3d"dijit/form/Button" type\x3d"submit" data-dojo-attach-point\x3d"_saveBtn" class\x3d"esriLeadingMargin4 esriAnalysisSubmitButton" data-dojo-attach-event\x3d"onClick:_handleSaveBtnClick"\x3e\r\n          ${i18n.runAnalysis}\r\n      \x3c/button\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"${i18n.creditTitle}" data-dojo-attach-point\x3d"_usageDialog" style\x3d"width:40em;"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/CreditEstimator"  data-dojo-attach-point\x3d"_usageForm"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"esriFormWarning esriRoundedBox" data-dojo-attach-point\x3d"_errorMessagePane" style\x3d"display:none;"\x3e\r\n      \x3ca href\x3d"#" title\x3d"${i18n.close}" class\x3d"esriFloatTrailing closeIcon" title\x3d\'${i18n.close}\' data-dojo-attach-event\x3d"onclick:_handleCloseMsg"\x3e\r\n        \x3cimg src\x3d\'images/close.gif\' border\x3d\'0\'/\x3e \r\n      \x3c/a\x3e\r\n      \x3cspan data-dojo-attach-point\x3d"_bodyNode"\x3e\x3c/span\x3e\r\n    \x3c/div\x3e        \r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/analysis/SummarizeWithin","require dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/_base/json dojo/_base/fx dojo/has dojo/json dojo/string dojo/dom-style dojo/dom-attr dojo/dom-construct dojo/query dojo/dom-class dojo/fx/easing dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin dijit/registry dijit/form/Button dijit/form/CheckBox dijit/form/Form dijit/form/Select dijit/form/TextBox dijit/form/ValidationTextBox dijit/layout/ContentPane dijit/form/ComboBox ../../kernel ../../lang ./AnalysisBase ./CreditEstimator ./utils dojo/i18n!../../nls/jsapi dojo/text!./templates/SummarizeWithin.html".split(" "),
function(p,x,e,k,q,g,s,y,J,l,h,d,m,z,r,t,A,B,C,D,E,u,K,L,M,v,N,O,P,Q,F,w,G,R,n,H,I){p=x([A,B,C,D,E,G],{declaredClass:"esri.dijit.analysis.SummarizeWithin",templateString:I,basePath:p.toUrl("."),widgetsInTemplate:!0,sumWithinLayer:null,summaryLayers:null,summaryFields:null,outputLayerName:null,summarizeMetric:!0,summaryLayer:null,groupByField:null,minorityMajority:!1,percentPoints:!1,showSelectFolder:!1,showChooseExtent:!0,showHelp:!0,showCredits:!0,returnFeatureCollection:!1,i18n:null,toolName:"SummarizeWithin",
helpFileName:"SummarizeWithin",resultParameter:"resultLayer",constructor:function(a){this._pbConnects=[];this._statsRows=[];a.containerNode&&(this.container=a.containerNode)},destroy:function(){this.inherited(arguments);k.forEach(this._pbConnects,q.disconnect);delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments);e.mixin(this.i18n,H.summarizeWithinTool)},postCreate:function(){this.inherited(arguments);r.add(this._form.domNode,"esriSimpleForm");this._outputLayerInput.set("validator",
e.hitch(this,this.validateServiceName));this._buildUI()},startup:function(){},_onClose:function(a){a&&(this._save(),this.emit("save",{save:!0}));this.emit("close",{save:a})},_handleShowCreditsClick:function(a){a.preventDefault();if(this._form.validate()){a={};var b;b=this.summaryLayers[this._layersSelect.get("value")];a.summaryLayer=g.toJson(n.constructAnalysisInputLyrObj(b));a.sumWithinLayer=g.toJson(n.constructAnalysisInputLyrObj(this.sumWithinLayer));a.summaryFields=g.toJson(this.get("summaryFields"));
this.returnFeatureCollection||(a.OutputName=g.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}}));a.sumShape=this._sumMetricCheck.get("checked");if("esriGeometryPoint"!==b.geometryType||"esriGeometryMultipoint"!==b.geometryType)a.shapeUnits=this.get("shapeUnits");"0"!==this._groupBySelect.get("value")&&(a.groupByField=this._groupBySelect.get("value"));this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.context=g.toJson({extent:this.map.extent._normalize(!0)}));this.getCreditsEstimate(this.toolName,
a).then(e.hitch(this,function(a){this._usageForm.set("content",a);this._usageDialog.show()}))}},_handleSaveBtnClick:function(){if(this._form.validate())if(!this._sumMetricCheck.get("checked")&&0===this.get("summaryFields").length)this._showMessages(this.i18n.statsRequiredMsg);else{this._saveBtn.set("disabled",!0);var a={},b={},c,f;c=this.summaryLayers[this._layersSelect.get("value")];a.summaryLayer=g.toJson(n.constructAnalysisInputLyrObj(c));a.sumWithinLayer=g.toJson(n.constructAnalysisInputLyrObj(this.sumWithinLayer));
a.summaryFields=g.toJson(this.get("summaryFields"));this.returnFeatureCollection||(a.OutputName=g.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}}));a.sumShape=this._sumMetricCheck.get("checked");if("esriGeometryPoint"!==c.geometryType||"esriGeometryMultipoint"!==c.geometryType)a.shapeUnits=this.get("shapeUnits");"0"!==this._groupBySelect.get("value")&&(a.groupByField=this._groupBySelect.get("value"),this.resultParameter=["resultLayer","groupBySummary"],a.minorityMajority=this.get("minorityMajority"),
a.percentPoints=this.get("percentPoints"));this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.context=g.toJson({extent:this.map.extent._normalize(!0)}));this.returnFeatureCollection&&(f={outSR:this.map.spatialReference},this.showChooseExtent&&(f.extent=this.map.extent._normalize(!0)),a.context=g.toJson(f));b.jobParams=a;this._saveBtn.set("disabled",!1);b.itemParams={description:l.substitute(this.i18n.itemDescription,{sumWithinLayerName:this.sumWithinLayer.name,summaryLayerName:c.name}),
tags:l.substitute(this.i18n.itemTags,{sumWithinLayerName:this.sumWithinLayer.name,summaryLayerName:c.name}),snippet:this.i18n.itemSnippet};this.showSelectFolder&&(b.itemParams.folder=this.get("folderId"));this.execute(b)}},_initializeShapeUnits:function(a){this._prevGeometryType&&this._prevGeometryType===a||(this._shapeUnitsSelect.removeOption(this._shapeUnitsSelect.getOptions()),h.set(this._shapeUnitsSelect.domNode,"display","esriGeometryPoint"===a||"esriGeometryMultipoint"===a?"none":""),"esriGeometryPolygon"===
a?(h.set(this._shapeUnitsSelect.domNode,"width","49%"),this._shapeUnitsSelect.addOption([{value:"SquareMiles",label:this.i18n.sqMiles},{value:"SquareKilometers",label:this.i18n.sqKm},{value:"SquareMeters",label:this.i18n.sqMeters},{value:"Hectares",label:this.i18n.hectares},{value:"Acres",label:this.i18n.acres}]),"Kilometers"===this.get("shapeUnits")&&this.set("shapeUnits","SquareKilometers")):"esriGeometryPolyline"===a&&(h.set(this._shapeUnitsSelect.domNode,"width","39%"),this._shapeUnitsSelect.addOption([{value:"Miles",
label:this.i18n.miles},{value:"Feet",label:this.i18n.feet},{value:"Kilometers",label:this.i18n.kilometers},{value:"Meters",label:this.i18n.meters},{value:"Yards",label:this.i18n.yards}]),"SquareKilometers"===this.get("shapeUnits")&&this.set("shapeUnits","Kilometers")),this._shapeUnitsSelect.set("value",this.get("shapeUnits")),this._prevGeometryType=a)},_handleShapeUnitsChange:function(a){this.set("shapeUnits",a)},_handleLayerChange:function(a){a=this.summaryLayers[a];this.outputLayerName=l.substitute(this.i18n.outputLayerName,
{summaryLayerName:a.name,sumWithinLayerName:this.sumWithinLayer.name});this._outputLayerInput.set("value",this.outputLayerName);d.set(this._addStatsLabel,"innerHTML",l.substitute(this.i18n.addStats,{summaryLayerName:a.name}));this._initializeShapeUnits(a.geometryType);"esriGeometryPolygon"===a.geometryType&&(d.set(this._sumMetricLabel,"innerHTML",this.i18n.summarizeMetricPoly),d.set(this._addStatsHelpLink,"esriHelpTopic","StatisticsPolygon"));if("esriGeometryPoint"===a.geometryType||"esriGeometryMultipoint"===
a.geometryType)d.set(this._sumMetricLabel,"innerHTML",this.i18n.summarizeMetricPoint),d.set(this._addStatsHelpLink,"esriHelpTopic","StatisticsPoint");"esriGeometryPolyline"===a.geometryType&&(d.set(this._sumMetricLabel,"innerHTML",this.i18n.summarizeMetricLine),d.set(this._addStatsHelpLink,"esriHelpTopic","StatisticsLine"));this.set("groupBySelect",this.groupByField);this._removeStatsRows();this._createStatsRow()},_handleAttrSelectChange:function(a){var b;"0"!==a&&(a=this.get("statisticSelect"),"0"!==
a.get("value")&&!a.get("isnewRowAdded")&&(b=a.get("removeTd"),h.set(b,"display","block"),b=a.get("referenceWidget"),e.hitch(b,b._createStatsRow()),b._sumMetricCheck.set("disabled",!1),a.set("isnewRowAdded",!0)))},_handleStatsValueUpdate:function(a,b,c){this.get("attributeSelect")&&(a=this.get("attributeSelect"),"0"!==a.get("value")&&"0"!==c&&!this.get("isnewRowAdded")&&(c=this.get("removeTd"),h.set(c,"display","block"),c=this.get("referenceWidget"),e.hitch(c,c._createStatsRow()),c._sumMetricCheck.set("disabled",
!1),this.set("isnewRowAdded",!0)))},_handleGroupBySelectChange:function(a){a="0"===a;r.toggle(this._minmajorityLabel,"esriAnalysisTextDisabled",a);r.toggle(this._percentPointsLabel,"esriAnalysisTextDisabled",a);this._percentPointsCheck.set("disabled",a);this._minmajorityCheck.set("disabled",a)},_save:function(){},_buildUI:function(){n.initHelpLinks(this.domNode,this.showHelp);this.sumWithinLayer&&d.set(this._aggregateToolDescription,"innerHTML",l.substitute(this.i18n.summarizeDefine,{sumWithinLayerName:this.sumWithinLayer.name}));
this.summaryLayers&&k.forEach(this.summaryLayers,function(a,b){if(a!==this.sumWithinLayer&&(this._layersSelect.addOption({value:b,label:a.name}),!this.outputLayerName)){this.outputLayerName=l.substitute(this.i18n.outputLayerName,{summaryLayerName:a.name,sumWithinLayerName:this.sumWithinLayer.name});d.set(this._addStatsLabel,"innerHTML",l.substitute(this.i18n.addStats,{summaryLayerName:a.name}));this._initializeShapeUnits(a.geometryType);"esriGeometryPolygon"===a.geometryType&&(d.set(this._sumMetricLabel,
"innerHTML",this.i18n.summarizeMetricPoly),d.set(this._addStatsHelpLink,"esriHelpTopic","StatisticsPolygon"));if("esriGeometryPoint"===a.geometryType||"esriGeometryMultipoint"===a.geometryType)d.set(this._sumMetricLabel,"innerHTML",this.i18n.summarizeMetricPoint),d.set(this._addStatsHelpLink,"esriHelpTopic","StatisticsPoint");"esriGeometryPolyline"===a.geometryType&&(d.set(this._sumMetricLabel,"innerHTML",this.i18n.summarizeMetricLine),d.set(this._addStatsHelpLink,"esriHelpTopic","StatisticsLine"))}},
this);this.outputLayerName&&this._outputLayerInput.set("value",this.outputLayerName);this._sumMetricCheck.set("checked",this.summarizeMetric);this.summarizeMetric||this._sumMetricCheck.set("disabled",this.summarizeMetric);this.summaryLayer&&this._layersSelect.set();this.shapeUnits&&this._shapeUnitsSelect.set("value",this.shapeUnits);this._createStatsRow();k.forEach(this.summaryFields,function(a){a=a.split(" ");this._currentAttrSelect.set("value",a[0]);e.hitch(this._currentAttrSelect,this._handleAttrSelectChange,
a[0])();this._currentStatsSelect.set("value",a[1]);e.hitch(this._currentStatsSelect,this._handleStatsValueUpdat,"value","",a[1])()},this);h.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?"block":"none");this.showSelectFolder&&this.getFolderStore().then(e.hitch(this,function(a){this.folderStore=a;n.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})}));
h.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"inline-block":"none");this.set("groupBySelect",this.groupByField);this.minorityMajority&&this._minmajorityCheck.set("checked",this.minorityMajority);this.percentPoints&&this._percentPointsCheck.set("checked",this.percentPoints);h.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none");this._loadConnections()},_loadConnections:function(){this.on("start",e.hitch(this,"_onClose",!0));this._connect(this._closeBtn,"onclick",
e.hitch(this,"_onClose",!1))},_createStatsRow:function(){var a,b,c,f,d;f=this.summaryLayers[this._layersSelect.get("value")];a=m.create("tr",null,this._afterStatsRow,"before");c=m.create("td",{style:{width:"49%",maxWidth:"100px"}},a);b=m.create("td",{style:{width:"50%",maxWidth:"104px"}},a);c=new v({maxHeight:200,"class":"esriLeadingMargin1 mediumInput esriTrailingMargin025 attrSelect",style:{tableLayout:"fixed",overflowX:"hidden"}},m.create("select",null,c));this.set("attributes",{selectWidget:c,
summaryLayer:f});b=new v({"class":"mediumInput statsSelect",style:{tableLayout:"fixed",overflowX:"hidden"}},m.create("select",null,b));this.set("statistics",{selectWidget:b});c.set("statisticSelect",b);q.connect(c,"onChange",this._handleAttrSelectChange);d=m.create("td",{"class":"shortTextInput removeTd",style:{display:"none",maxWidth:"12px"}},a);f=m.create("a",{title:this.i18n.removeAttrStats,"class":"closeIcon statsRemove",innerHTML:"\x3cimg src\x3d'"+this.basePath+"/images/close.gif' border\x3d'0''/\x3e"},
d);q.connect(f,"onclick",e.hitch(this,this._handleRemoveStatsBtnClick,a));this._statsRows.push(a);b.set("attributeSelect",c);b.set("removeTd",d);b.set("isnewRowAdded",!1);b.set("referenceWidget",this);b.watch("value",this._handleStatsValueUpdate);this._currentStatsSelect=b;this._currentAttrSelect=c;return!0},_handleRemoveStatsBtnClick:function(a){this._removeStatsRow(a);0===this.get("summaryFields").length&&(this._sumMetricCheck.set("disabled",!0),this._sumMetricCheck.set("checked",!0))},_removeStatsRows:function(){k.forEach(this._statsRows,
this._removeStatsRow,this);this._statsRows=[]},_removeStatsRow:function(a){k.forEach(u.findWidgets(a),function(a){a.destroyRecursive()});m.destroy(a)},_setAnalysisGpServerAttr:function(a){a&&(this.analysisGpServer=a,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setSumWithinLayerAttr:function(a){if("esriGeometryPoint"===a.geometryType||"esriGeometryMultipoint"===a.geometryType)this.sumWithinLayer=a},_setSummaryLayersAttr:function(a){this.summaryLayers=a},_setLayersAttr:function(a){this.summaryLayers=
[]},_setAttributesAttr:function(a){if(a.summaryLayer){var b,c;b=a.summaryLayer;c=a.selectWidget;a=b.fields;c.addOption({value:"0",label:this.i18n.attribute});k.forEach(a,function(a){-1!==k.indexOf(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],a.type)&&c.addOption({value:a.name,label:w.isDefined(a.alias)&&""!==a.alias?a.alias:a.name})},this)}},_setStatisticsAttr:function(a){a=a.selectWidget;a.addOption({value:"0",label:this.i18n.statistic});a.addOption({value:"SUM",
label:this.i18n.sum});a.addOption({value:"MIN",label:this.i18n.minimum});a.addOption({value:"MAX",label:this.i18n.maximum});a.addOption({value:"MEAN",label:this.i18n.average});a.addOption({value:"STDDEV",label:this.i18n.standardDev})},_setSummaryFieldsAttr:function(a){this.summaryFields=a},_getSummaryFieldsAttr:function(){var a="",b=[];z(".statsSelect",this.domNode).forEach(function(c){var f;c=u.byNode(c);f=c.get("attributeSelect");"0"!==f.get("value")&&"0"!==c.get("value")&&(a+=f.get("value")+" "+
c.get("value")+";",b.push(f.get("value")+" "+c.get("value")))});return b},_setGroupBySelectAttr:function(a){var b=this.summaryLayers[this._layersSelect.get("value")],c=b.fields;0<this._groupBySelect.getOptions().length&&this._groupBySelect.removeOption(this._groupBySelect.getOptions());this._groupBySelect.addOption({value:"0",label:this.i18n.attribute});k.forEach(c,function(a,c){-1!==k.indexOf(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeString","esriFieldTypeDate"],a.type)&&
a.name!==b.objectIdField&&this._groupBySelect.addOption({value:a.name,label:w.isDefined(a.alias)&&""!==a.alias?a.alias:a.name})},this);a&&this._groupBySelect.set("value",a);this._handleGroupBySelectChange(this._groupBySelect.get("value"))},_setMinorityMajorityAttr:function(a){this.minorityMajority=a},_getMinorityMajorityAttr:function(a){this._minmajorityCheck&&(this.minorityMajority=this._minmajorityCheck.get("checked"));return this.minorityMajority},_setPercentPointsAttr:function(a){this.percentPoints=
a},_getPercentPointsAttr:function(a){this._percentPointsCheck&&(this.percentPoints=this._percentPointsCheck.get("checked"));return this.percentPoints},_setDisableRunAnalysisAttr:function(a){this._saveBtn.set("disabled",a)},_setShowSelectFolderAttr:function(a){this.showSelectFolder=a},_getShowSelectFolderAttr:function(){return this.showSelectFolder},_setShowChooseExtentAttr:function(a){this.showChooseExtent=a},_getShowChooseExtentAttr:function(){return this.showChooseExtent},_setMapAttr:function(a){this.map=
a},_getMapAttr:function(){return this.map},_setShowHelpAttr:function(a){this.showHelp=a},_getShowHelpAttr:function(){return this.showHelp},_setShowCreditsAttr:function(a){this.showCredits=a},_getShowCreditsAttr:function(){return this.showCredits},_setShapeUnitsAttr:function(a){this.shapeUnits=a},_getShapeUnitsAttr:function(){return this.shapeUnits},_setReturnFeatureCollectionAttr:function(a){this.returnFeatureCollection=a},_getReturnFeatureCollectionAttr:function(){return this.returnFeatureCollection},
_setFolderIdAttr:function(a){this.folderId=a},_getFolderIdAttr:function(){this._webMapFolderSelect&&(this.folderStore&&this._webMapFolderSelect.item)&&(this.folderId=this._webMapFolderSelect.item?this.folderStore.getValue(this._webMapFolderSelect.item,"id"):"");return this.folderId},_setFolderNameAttr:function(a){this.folderName=a},_getFolderNameAttr:function(){this._webMapFolderSelect&&(this.folderStore&&this._webMapFolderSelect.item)&&(this.folderName=this.folderStore.getValue(this._webMapFolderSelect.item,
"name"));return this.folderName},validateServiceName:function(a){var b=/(:|&|<|>|%|#|\?|\\|\"|\/|\+)/.test(a);return 0===a.length||0===l.trim(a).length?(this._outputLayerInput.set("invalidMessage",this.i18n.requiredValue),!1):b?(this._outputLayerInput.set("invalidMessage",this.i18n.invalidServiceName),!1):98<a.length?(this._outputLayerInput.set("invalidMessage",this.i18n.invalidServiceNameLength),!1):!0},_connect:function(a,b,c){this._pbConnects.push(q.connect(a,b,c))},_showMessages:function(a){d.set(this._bodyNode,
"innerHTML",a);s.fadeIn({node:this._errorMessagePane,easing:t.quadIn,onEnd:e.hitch(this,function(){h.set(this._errorMessagePane,{display:""})})}).play()},_handleCloseMsg:function(a){a&&a.preventDefault();s.fadeOut({node:this._errorMessagePane,easing:t.quadOut,onEnd:e.hitch(this,function(){h.set(this._errorMessagePane,{display:"none"})})}).play()}});y("extend-esri")&&e.setObject("dijit.analysis.SummarizeWithin",p,F);return p});