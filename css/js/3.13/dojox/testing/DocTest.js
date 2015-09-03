//>>built
define("dojox/testing/DocTest",["dojo/string"],function(){return dojo.declare("dojox.testing.DocTest",null,{errors:[],getTests:function(a){a=dojo.moduleUrl(a).path;a=a.substring(0,a.length-1)+".js";dojo.xhrGet({url:a,handleAs:"text"});a=dojo._getText(a);return this._getTestsFromString(a,!0)},getTestsFromString:function(a){return this._getTestsFromString(a,!1)},_getTestsFromString:function(a,b){for(var d=dojo.hitch(dojo.string,"trim"),g=a.split("\n"),h=g.length,k=[],f=[],e=[],l=null,m=0;m<h+1;m++){var c=
d(g[m]||"");b&&c.match(/^\/\/\s+>>>\s.*/)||c.match(/^\s*>>>\s.*/)?(l||(l=m+1),0<e.length&&(k.push({commands:f,expectedResult:e.join("\n"),line:l}),f=[],e=[],l=m+1),c=b?d(c).substring(2,c.length):c,c=d(c).substring(3,c.length),f.push(d(c))):(!b||c.match(/^\/\/\s+.*/))&&f.length&&0==e.length?(c=b?d(c).substring(3,c.length):c,e.push(d(c))):0<f.length&&e.length&&((!b||c.match(/^\/\/\s*$/))&&k.push({commands:f,expectedResult:e.join("\n"),line:l}),b&&!c.match(/^\/\//)&&k.push({commands:f,expectedResult:e.join("\n"),
line:l}),f=[],e=[],l=0)}return k},run:function(a){this.errors=[];(a=this.getTests(a))&&this._run(a)},_run:function(a){var b=a.length;this.tests=b;for(var d=0,g=0;g<b;g++){var h=a[g],k=this.runTest(h.commands,h.expectedResult),f="Test "+(g+1)+": ",e=h.commands.join(" "),e=50<e.length?e.substr(0,50)+"...":e;k.success?(console.info(f+"OK: "+e),d+=1):(this.errors.push({commands:h.commands,actual:k.actualResult,expected:h.expectedResult}),console.error(f+"Failed: "+e,{commands:h.commands,actualResult:k.actualResult,
expectedResult:h.expectedResult}))}console.info(b+" tests ran.",d+" Success,",this.errors.length+" Errors")},runTest:function(a,b){var d={success:!1,actualResult:null},g=a.join("\n");d.actualResult=eval(g);if(String(d.actualResult)==b||dojo.toJson(d.actualResult)==b||'"'==b.charAt(0)&&'"'==b.charAt(b.length-1)&&String(d.actualResult)==b.substring(1,b.length-1))d.success=!0;return d}})});