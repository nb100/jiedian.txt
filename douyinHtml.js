(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){(function (){
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},e="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function ba(a,b){if(b){var c=e;a=a.split(".");for(var d=0;d<a.length-1;d++){var f=a[d];f in c||(c[f]={});c=c[f]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&aa(c,a,{configurable:!0,writable:!0,value:b})}}
function ca(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function da(){da=function(){};e.Symbol||(e.Symbol=ea)}function fa(a,b){this.a=a;aa(this,"description",{configurable:!0,writable:!0,value:b})}fa.prototype.toString=function(){return this.a};var ea=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new fa("jscomp_symbol_"+(c||"")+"_"+b++,c)}var b=0;return a}();
function ha(){da();var a=e.Symbol.iterator;a||(a=e.Symbol.iterator=e.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&aa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ia(ca(this))}});ha=function(){}}function ia(a){ha();a={next:a};a[e.Symbol.iterator]=function(){return this};return a}
function ja(a,b){ha();a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d.next=function(){return{done:!0,value:void 0}};return d.next()}};d[Symbol.iterator]=function(){return d};return d}ba("Array.prototype.entries",function(a){return a?a:function(){return ja(this,function(b,c){return[b,c]})}});var ka=this||self;
function g(a,b,c){a=a.split(".");c=c||ka;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function k(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function la(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ma(a,b,c){g(a,b,c)}function na(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a};var oa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pa(a,b){for(var c,d,f=1;f<arguments.length;f++){d=arguments[f];for(c in d)a[c]=d[c];for(var h=0;h<oa.length;h++)c=oa[h],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var qa=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in d&&b.call(void 0,d[f],f,a)},l=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),f="string"===typeof a?a.split(""):a,h=0;h<c;h++)h in f&&(d[h]=b.call(void 0,f[h],h,a));return d};
function ra(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)};function sa(a,b,c,d){var f="Assertion failed";if(c){f+=": "+c;var h=d}else a&&(f+=": "+a,h=b);throw Error(f,h||[]);}function n(a,b,c){for(var d=[],f=2;f<arguments.length;++f)d[f-2]=arguments[f];a||sa("",null,b,d);return a}function ta(a,b,c){for(var d=[],f=2;f<arguments.length;++f)d[f-2]=arguments[f];"string"!==typeof a&&sa("Expected string but got %s: %s.",[k(a),a],b,d)}
function ua(a,b,c){for(var d=[],f=2;f<arguments.length;++f)d[f-2]=arguments[f];Array.isArray(a)||sa("Expected array but got %s: %s.",[k(a),a],b,d)}function p(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];throw Error("Failure"+(a?": "+a:""),c);}function q(a,b,c,d){for(var f=[],h=3;h<arguments.length;++h)f[h-3]=arguments[h];a instanceof b||sa("Expected instanceof %s but got %s.",[va(b),va(a)],c,f)}
function va(a){return a instanceof Function?a.displayName||a.name||"unknown type name":a instanceof Object?a.constructor.displayName||a.constructor.name||Object.prototype.toString.call(a):null===a?"null":typeof a};function r(a,b){this.c=a;this.b=b;this.a={};this.arrClean=!0;if(0<this.c.length){for(a=0;a<this.c.length;a++){b=this.c[a];var c=b[0];this.a[c.toString()]=new wa(c,b[1])}this.arrClean=!0}}g("jspb.Map",r,void 0);
r.prototype.g=function(){if(this.arrClean){if(this.b){var a=this.a,b;for(b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b].a;c&&c.g()}}}else{this.c.length=0;a=u(this);a.sort();for(b=0;b<a.length;b++){var d=this.a[a[b]];(c=d.a)&&c.g();this.c.push([d.key,d.value])}this.arrClean=!0}return this.c};r.prototype.toArray=r.prototype.g;
r.prototype.Mc=function(a,b){for(var c=this.g(),d=[],f=0;f<c.length;f++){var h=this.a[c[f][0].toString()];v(this,h);var m=h.a;m?(n(b),d.push([h.key,b(a,m)])):d.push([h.key,h.value])}return d};r.prototype.toObject=r.prototype.Mc;r.fromObject=function(a,b,c){b=new r([],b);for(var d=0;d<a.length;d++){var f=a[d][0],h=c(a[d][1]);b.set(f,h)}return b};function w(a){this.a=0;this.b=a}w.prototype.next=function(){return this.a<this.b.length?{done:!1,value:this.b[this.a++]}:{done:!0,value:void 0}};
"undefined"!=typeof Symbol&&(w.prototype[Symbol.iterator]=function(){return this});r.prototype.Jb=function(){return u(this).length};r.prototype.getLength=r.prototype.Jb;r.prototype.clear=function(){this.a={};this.arrClean=!1};r.prototype.clear=r.prototype.clear;r.prototype.Cb=function(a){a=a.toString();var b=this.a.hasOwnProperty(a);delete this.a[a];this.arrClean=!1;return b};r.prototype.del=r.prototype.Cb;
r.prototype.Eb=function(){var a=[],b=u(this);b.sort();for(var c=0;c<b.length;c++){var d=this.a[b[c]];a.push([d.key,d.value])}return a};r.prototype.getEntryList=r.prototype.Eb;r.prototype.entries=function(){var a=[],b=u(this);b.sort();for(var c=0;c<b.length;c++){var d=this.a[b[c]];a.push([d.key,v(this,d)])}return new w(a)};r.prototype.entries=r.prototype.entries;r.prototype.keys=function(){var a=[],b=u(this);b.sort();for(var c=0;c<b.length;c++)a.push(this.a[b[c]].key);return new w(a)};
r.prototype.keys=r.prototype.keys;r.prototype.values=function(){var a=[],b=u(this);b.sort();for(var c=0;c<b.length;c++)a.push(v(this,this.a[b[c]]));return new w(a)};r.prototype.values=r.prototype.values;r.prototype.forEach=function(a,b){var c=u(this);c.sort();for(var d=0;d<c.length;d++){var f=this.a[c[d]];a.call(b,v(this,f),f.key,this)}};r.prototype.forEach=r.prototype.forEach;
r.prototype.set=function(a,b){var c=new wa(a);this.b?(c.a=b,c.value=b.g()):c.value=b;this.a[a.toString()]=c;this.arrClean=!1;return this};r.prototype.set=r.prototype.set;function v(a,b){return a.b?(b.a||(b.a=new a.b(b.value)),b.a):b.value}r.prototype.get=function(a){if(a=this.a[a.toString()])return v(this,a)};r.prototype.get=r.prototype.get;r.prototype.has=function(a){return a.toString()in this.a};r.prototype.has=r.prototype.has;
r.prototype.Jc=function(a,b,c,d,f){var h=u(this);h.sort();for(var m=0;m<h.length;m++){var t=this.a[h[m]];b.Va(a);c.call(b,1,t.key);this.b?d.call(b,2,v(this,t),f):d.call(b,2,t.value);b.Ya()}};r.prototype.serializeBinary=r.prototype.Jc;r.deserializeBinary=function(a,b,c,d,f,h,m){for(;b.oa()&&!b.bb();){var t=b.c;1==t?h=c.call(b):2==t&&(a.b?(n(f),m||(m=new a.b),d.call(b,m,f)):m=d.call(b))}n(void 0!=h);n(void 0!=m);a.set(h,m)};
function u(a){a=a.a;var b=[],c;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.push(c);return b}function wa(a,b){this.key=a;this.value=b;this.a=void 0};function xa(a){if(8192>=a.length)return String.fromCharCode.apply(null,a);for(var b="",c=0;c<a.length;c+=8192)b+=String.fromCharCode.apply(null,ra(a,c,c+8192));return b};var ya={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},za={"'":"\\'"};var Aa={},x=null;function Ba(a,b){void 0===b&&(b=0);Ca();b=Aa[b];for(var c=[],d=0;d<a.length;d+=3){var f=a[d],h=d+1<a.length,m=h?a[d+1]:0,t=d+2<a.length,B=t?a[d+2]:0,M=f>>2;f=(f&3)<<4|m>>4;m=(m&15)<<2|B>>6;B&=63;t||(B=64,h||(m=64));c.push(b[M],b[f],b[m]||"",b[B]||"")}return c.join("")}function Da(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),f=0;Ea(a,function(h){d[f++]=h});return d.subarray(0,f)}
function Ea(a,b){function c(B){for(;d<a.length;){var M=a.charAt(d++),La=x[M];if(null!=La)return La;if(!/^[\s\xa0]*$/.test(M))throw Error("Unknown base64 encoding at char: "+M);}return B}Ca();for(var d=0;;){var f=c(-1),h=c(0),m=c(64),t=c(64);if(64===t&&-1===f)break;b(f<<2|h>>4);64!=m&&(b(h<<4&240|m>>2),64!=t&&b(m<<6&192|t))}}
function Ca(){if(!x){x={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));Aa[c]=d;for(var f=0;f<d.length;f++){var h=d[f];void 0===x[h]&&(x[h]=f)}}}};g("jspb.ConstBinaryMessage",function(){},void 0);g("jspb.BinaryMessage",function(){},void 0);g("jspb.BinaryConstants.FieldType",{yb:-1,ee:1,FLOAT:2,ke:3,te:4,je:5,xb:6,wb:7,BOOL:8,re:9,ie:10,le:11,ce:12,se:13,ge:14,me:15,ne:16,oe:17,pe:18,he:30,ve:31},void 0);g("jspb.BinaryConstants.WireType",{yb:-1,ue:0,xb:1,de:2,qe:3,fe:4,wb:5},void 0);
g("jspb.BinaryConstants.FieldTypeToWireType",function(a){switch(a){case 5:case 3:case 13:case 4:case 17:case 18:case 8:case 14:case 31:return 0;case 1:case 6:case 16:case 30:return 1;case 9:case 11:case 12:return 2;case 2:case 7:case 15:return 5;default:return-1}},void 0);g("jspb.BinaryConstants.INVALID_FIELD_NUMBER",-1,void 0);g("jspb.BinaryConstants.FLOAT32_EPS",1.401298464324817E-45,void 0);g("jspb.BinaryConstants.FLOAT32_MIN",1.1754943508222875E-38,void 0);
g("jspb.BinaryConstants.FLOAT32_MAX",3.4028234663852886E38,void 0);g("jspb.BinaryConstants.FLOAT64_EPS",4.9E-324,void 0);g("jspb.BinaryConstants.FLOAT64_MIN",2.2250738585072014E-308,void 0);g("jspb.BinaryConstants.FLOAT64_MAX",1.7976931348623157E308,void 0);g("jspb.BinaryConstants.TWO_TO_20",1048576,void 0);g("jspb.BinaryConstants.TWO_TO_23",8388608,void 0);g("jspb.BinaryConstants.TWO_TO_31",2147483648,void 0);g("jspb.BinaryConstants.TWO_TO_32",4294967296,void 0);
g("jspb.BinaryConstants.TWO_TO_52",4503599627370496,void 0);g("jspb.BinaryConstants.TWO_TO_63",0x7fffffffffffffff,void 0);g("jspb.BinaryConstants.TWO_TO_64",1.8446744073709552E19,void 0);g("jspb.BinaryConstants.ZERO_HASH","\x00\x00\x00\x00\x00\x00\x00\x00",void 0);var y=0,z=0;g("jspb.utils.getSplit64Low",function(){return y},void 0);g("jspb.utils.getSplit64High",function(){return z},void 0);function Fa(a){var b=a>>>0;a=Math.floor((a-b)/4294967296)>>>0;y=b;z=a}g("jspb.utils.splitUint64",Fa,void 0);function A(a){var b=0>a;a=Math.abs(a);var c=a>>>0;a=Math.floor((a-c)/4294967296);a>>>=0;b&&(a=~a>>>0,c=(~c>>>0)+1,4294967295<c&&(c=0,a++,4294967295<a&&(a=0)));y=c;z=a}g("jspb.utils.splitInt64",A,void 0);
function Ga(a){var b=0>a;a=2*Math.abs(a);Fa(a);a=y;var c=z;b&&(0==a?0==c?c=a=4294967295:(c--,a=4294967295):a--);y=a;z=c}g("jspb.utils.splitZigzag64",Ga,void 0);
function Ha(a){var b=0>a?1:0;a=b?-a:a;if(0===a)0<1/a?y=z=0:(z=0,y=2147483648);else if(isNaN(a))z=0,y=2147483647;else if(3.4028234663852886E38<a)z=0,y=(b<<31|2139095040)>>>0;else if(1.1754943508222875E-38>a)a=Math.round(a/Math.pow(2,-149)),z=0,y=(b<<31|a)>>>0;else{var c=Math.floor(Math.log(a)/Math.LN2);a*=Math.pow(2,-c);a=Math.round(8388608*a);16777216<=a&&++c;z=0;y=(b<<31|c+127<<23|a&8388607)>>>0}}g("jspb.utils.splitFloat32",Ha,void 0);
function Ia(a){var b=0>a?1:0;a=b?-a:a;if(0===a)z=0<1/a?0:2147483648,y=0;else if(isNaN(a))z=2147483647,y=4294967295;else if(1.7976931348623157E308<a)z=(b<<31|2146435072)>>>0,y=0;else if(2.2250738585072014E-308>a)a/=Math.pow(2,-1074),z=(b<<31|a/4294967296)>>>0,y=a>>>0;else{var c=a,d=0;if(2<=c)for(;2<=c&&1023>d;)d++,c/=2;else for(;1>c&&-1022<d;)c*=2,d--;a*=Math.pow(2,-d);z=(b<<31|d+1023<<20|1048576*a&1048575)>>>0;y=4503599627370496*a>>>0}}g("jspb.utils.splitFloat64",Ia,void 0);
function C(a){var b=a.charCodeAt(4),c=a.charCodeAt(5),d=a.charCodeAt(6),f=a.charCodeAt(7);y=a.charCodeAt(0)+(a.charCodeAt(1)<<8)+(a.charCodeAt(2)<<16)+(a.charCodeAt(3)<<24)>>>0;z=b+(c<<8)+(d<<16)+(f<<24)>>>0}g("jspb.utils.splitHash64",C,void 0);function D(a,b){return 4294967296*b+(a>>>0)}g("jspb.utils.joinUint64",D,void 0);function E(a,b){var c=b&2147483648;c&&(a=~a+1>>>0,b=~b>>>0,0==a&&(b=b+1>>>0));a=D(a,b);return c?-a:a}g("jspb.utils.joinInt64",E,void 0);
function Ja(a,b,c){var d=b>>31;return c(a<<1^d,(b<<1|a>>>31)^d)}g("jspb.utils.toZigzag64",Ja,void 0);function Ka(a,b){return Ma(a,b,E)}g("jspb.utils.joinZigzag64",Ka,void 0);function Ma(a,b,c){var d=-(a&1);return c((a>>>1|b<<31)^d,b>>>1^d)}g("jspb.utils.fromZigzag64",Ma,void 0);function Na(a){var b=2*(a>>31)+1,c=a>>>23&255;a&=8388607;return 255==c?a?NaN:Infinity*b:0==c?b*Math.pow(2,-149)*a:b*Math.pow(2,c-150)*(a+Math.pow(2,23))}g("jspb.utils.joinFloat32",Na,void 0);
function Oa(a,b){var c=2*(b>>31)+1,d=b>>>20&2047;a=4294967296*(b&1048575)+a;return 2047==d?a?NaN:Infinity*c:0==d?c*Math.pow(2,-1074)*a:c*Math.pow(2,d-1075)*(a+4503599627370496)}g("jspb.utils.joinFloat64",Oa,void 0);function Pa(a,b){return String.fromCharCode(a>>>0&255,a>>>8&255,a>>>16&255,a>>>24&255,b>>>0&255,b>>>8&255,b>>>16&255,b>>>24&255)}g("jspb.utils.joinHash64",Pa,void 0);g("jspb.utils.DIGITS","0123456789abcdef".split(""),void 0);
function F(a,b){function c(f,h){f=f?String(f):"";return h?"0000000".slice(f.length)+f:f}if(2097151>=b)return""+D(a,b);var d=(a>>>24|b<<8)>>>0&16777215;b=b>>16&65535;a=(a&16777215)+6777216*d+6710656*b;d+=8147497*b;b*=2;1E7<=a&&(d+=Math.floor(a/1E7),a%=1E7);1E7<=d&&(b+=Math.floor(d/1E7),d%=1E7);return c(b,0)+c(d,b)+c(a,1)}g("jspb.utils.joinUnsignedDecimalString",F,void 0);function G(a,b){var c=b&2147483648;c&&(a=~a+1>>>0,b=~b+(0==a?1:0)>>>0);a=F(a,b);return c?"-"+a:a}
g("jspb.utils.joinSignedDecimalString",G,void 0);function Qa(a,b){C(a);a=y;var c=z;return b?G(a,c):F(a,c)}g("jspb.utils.hash64ToDecimalString",Qa,void 0);g("jspb.utils.hash64ArrayToDecimalStrings",function(a,b){for(var c=Array(a.length),d=0;d<a.length;d++)c[d]=Qa(a[d],b);return c},void 0);
function H(a){function b(m,t){for(var B=0;8>B&&(1!==m||0<t);B++)t=m*f[B]+t,f[B]=t&255,t>>>=8}function c(){for(var m=0;8>m;m++)f[m]=~f[m]&255}n(0<a.length);var d=!1;"-"===a[0]&&(d=!0,a=a.slice(1));for(var f=[0,0,0,0,0,0,0,0],h=0;h<a.length;h++)b(10,a.charCodeAt(h)-48);d&&(c(),b(1,1));return xa(f)}g("jspb.utils.decimalStringToHash64",H,void 0);g("jspb.utils.splitDecimalString",function(a){C(H(a))},void 0);function Ra(a){return String.fromCharCode(10>a?48+a:87+a)}
function Sa(a){return 97<=a?a-97+10:a-48}g("jspb.utils.hash64ToHexString",function(a){var b=Array(18);b[0]="0";b[1]="x";for(var c=0;8>c;c++){var d=a.charCodeAt(7-c);b[2*c+2]=Ra(d>>4);b[2*c+3]=Ra(d&15)}return b.join("")},void 0);g("jspb.utils.hexStringToHash64",function(a){a=a.toLowerCase();n(18==a.length);n("0"==a[0]);n("x"==a[1]);for(var b="",c=0;8>c;c++)b=String.fromCharCode(16*Sa(a.charCodeAt(2*c+2))+Sa(a.charCodeAt(2*c+3)))+b;return b},void 0);
g("jspb.utils.hash64ToNumber",function(a,b){C(a);a=y;var c=z;return b?E(a,c):D(a,c)},void 0);g("jspb.utils.numberToHash64",function(a){A(a);return Pa(y,z)},void 0);g("jspb.utils.countVarints",function(a,b,c){for(var d=0,f=b;f<c;f++)d+=a[f]>>7;return c-b-d},void 0);
g("jspb.utils.countVarintFields",function(a,b,c,d){var f=0;d*=8;if(128>d)for(;b<c&&a[b++]==d;)for(f++;;){var h=a[b++];if(0==(h&128))break}else for(;b<c;){for(h=d;128<h;){if(a[b]!=(h&127|128))return f;b++;h>>=7}if(a[b++]!=h)break;for(f++;h=a[b++],0!=(h&128););}return f},void 0);function Ta(a,b,c,d,f){var h=0;if(128>d)for(;b<c&&a[b++]==d;)h++,b+=f;else for(;b<c;){for(var m=d;128<m;){if(a[b++]!=(m&127|128))return h;m>>=7}if(a[b++]!=m)break;h++;b+=f}return h}
g("jspb.utils.countFixed32Fields",function(a,b,c,d){return Ta(a,b,c,8*d+5,4)},void 0);g("jspb.utils.countFixed64Fields",function(a,b,c,d){return Ta(a,b,c,8*d+1,8)},void 0);g("jspb.utils.countDelimitedFields",function(a,b,c,d){var f=0;for(d=8*d+2;b<c;){for(var h=d;128<h;){if(a[b++]!=(h&127|128))return f;h>>=7}if(a[b++]!=h)break;f++;for(var m=0,t=1;h=a[b++],m+=(h&127)*t,t*=128,0!=(h&128););b+=m}return f},void 0);
g("jspb.utils.debugBytesToTextFormat",function(a){var b='"';if(a){a=Ua(a);for(var c=0;c<a.length;c++)b+="\\x",16>a[c]&&(b+="0"),b+=a[c].toString(16)}return b+'"'},void 0);
g("jspb.utils.debugScalarToTextFormat",function(a){if("string"===typeof a){a=String(a);for(var b=['"'],c=0;c<a.length;c++){var d=a.charAt(c),f=d.charCodeAt(0),h=c+1,m;if(!(m=ya[d])){if(!(31<f&&127>f))if(f=d,f in za)d=za[f];else if(f in ya)d=za[f]=ya[f];else{m=f.charCodeAt(0);if(31<m&&127>m)d=f;else{if(256>m){if(d="\\x",16>m||256<m)d+="0"}else d="\\u",4096>m&&(d+="0");d+=m.toString(16).toUpperCase()}d=za[f]=d}m=d}b[h]=m}b.push('"');a=b.join("")}else a=a.toString();return a},void 0);
g("jspb.utils.stringToByteArray",function(a){for(var b=new Uint8Array(a.length),c=0;c<a.length;c++){var d=a.charCodeAt(c);if(255<d)throw Error("Conversion error: string contains codepoint outside of byte range");b[c]=d}return b},void 0);
function Ua(a){if(a.constructor===Uint8Array)return a;if(a.constructor===ArrayBuffer)return new Uint8Array(a);if(a.constructor===Array)return new Uint8Array(a);if(a.constructor===String)return Da(a);if(a instanceof Uint8Array)return new Uint8Array(a.buffer,a.byteOffset,a.byteLength);p("Type not convertible to Uint8Array.");return new Uint8Array(0)}g("jspb.utils.byteSourceToUint8Array",Ua,void 0);function I(a,b,c){this.b=null;this.a=this.c=this.h=0;this.v=!1;a&&this.H(a,b,c)}g("jspb.BinaryDecoder",I,void 0);var Va=[];I.getInstanceCacheLength=function(){return Va.length};function Wa(a,b,c){if(Va.length){var d=Va.pop();a&&d.H(a,b,c);return d}return new I(a,b,c)}I.alloc=Wa;I.prototype.Ca=function(){this.clear();100>Va.length&&Va.push(this)};I.prototype.free=I.prototype.Ca;I.prototype.clone=function(){return Wa(this.b,this.h,this.c-this.h)};I.prototype.clone=I.prototype.clone;
I.prototype.clear=function(){this.b=null;this.a=this.c=this.h=0;this.v=!1};I.prototype.clear=I.prototype.clear;I.prototype.Y=function(){return this.b};I.prototype.getBuffer=I.prototype.Y;I.prototype.H=function(a,b,c){this.b=Ua(a);this.h=void 0!==b?b:0;this.c=void 0!==c?this.h+c:this.b.length;this.a=this.h};I.prototype.setBlock=I.prototype.H;I.prototype.Db=function(){return this.c};I.prototype.getEnd=I.prototype.Db;I.prototype.setEnd=function(a){this.c=a};I.prototype.setEnd=I.prototype.setEnd;
I.prototype.reset=function(){this.a=this.h};I.prototype.reset=I.prototype.reset;I.prototype.B=function(){return this.a};I.prototype.getCursor=I.prototype.B;I.prototype.Ma=function(a){this.a=a};I.prototype.setCursor=I.prototype.Ma;I.prototype.advance=function(a){this.a+=a;n(this.a<=this.c)};I.prototype.advance=I.prototype.advance;I.prototype.ya=function(){return this.a==this.c};I.prototype.atEnd=I.prototype.ya;I.prototype.Qb=function(){return this.a>this.c};I.prototype.pastEnd=I.prototype.Qb;
I.prototype.getError=function(){return this.v||0>this.a||this.a>this.c};I.prototype.getError=I.prototype.getError;I.prototype.w=function(a){for(var b=128,c=0,d=0,f=0;4>f&&128<=b;f++)b=this.b[this.a++],c|=(b&127)<<7*f;128<=b&&(b=this.b[this.a++],c|=(b&127)<<28,d|=(b&127)>>4);if(128<=b)for(f=0;5>f&&128<=b;f++)b=this.b[this.a++],d|=(b&127)<<7*f+3;if(128>b)return a(c>>>0,d>>>0);p("Failed to read varint, encoding is invalid.");this.v=!0};I.prototype.readSplitVarint64=I.prototype.w;
I.prototype.ea=function(a){return this.w(function(b,c){return Ma(b,c,a)})};I.prototype.readSplitZigzagVarint64=I.prototype.ea;I.prototype.ta=function(a){var b=this.b,c=this.a;this.a+=8;for(var d=0,f=0,h=c+7;h>=c;h--)d=d<<8|b[h],f=f<<8|b[h+4];return a(d,f)};I.prototype.readSplitFixed64=I.prototype.ta;I.prototype.kb=function(){for(;this.b[this.a]&128;)this.a++;this.a++};I.prototype.skipVarint=I.prototype.kb;I.prototype.mb=function(a){for(;128<a;)this.a--,a>>>=7;this.a--};I.prototype.unskipVarint=I.prototype.mb;
I.prototype.o=function(){var a=this.b;var b=a[this.a];var c=b&127;if(128>b)return this.a+=1,n(this.a<=this.c),c;b=a[this.a+1];c|=(b&127)<<7;if(128>b)return this.a+=2,n(this.a<=this.c),c;b=a[this.a+2];c|=(b&127)<<14;if(128>b)return this.a+=3,n(this.a<=this.c),c;b=a[this.a+3];c|=(b&127)<<21;if(128>b)return this.a+=4,n(this.a<=this.c),c;b=a[this.a+4];c|=(b&15)<<28;if(128>b)return this.a+=5,n(this.a<=this.c),c>>>0;this.a+=5;128<=a[this.a++]&&128<=a[this.a++]&&128<=a[this.a++]&&128<=a[this.a++]&&128<=
a[this.a++]&&n(!1);n(this.a<=this.c);return c};I.prototype.readUnsignedVarint32=I.prototype.o;I.prototype.da=function(){return~~this.o()};I.prototype.readSignedVarint32=I.prototype.da;I.prototype.O=function(){return this.o().toString()};I.prototype.Ea=function(){return this.da().toString()};I.prototype.readSignedVarint32String=I.prototype.Ea;I.prototype.Ia=function(){var a=this.o();return a>>>1^-(a&1)};I.prototype.readZigzagVarint32=I.prototype.Ia;I.prototype.Ga=function(){return this.w(D)};
I.prototype.readUnsignedVarint64=I.prototype.Ga;I.prototype.Ha=function(){return this.w(F)};I.prototype.readUnsignedVarint64String=I.prototype.Ha;I.prototype.sa=function(){return this.w(E)};I.prototype.readSignedVarint64=I.prototype.sa;I.prototype.Fa=function(){return this.w(G)};I.prototype.readSignedVarint64String=I.prototype.Fa;I.prototype.Ja=function(){return this.w(Ka)};I.prototype.readZigzagVarint64=I.prototype.Ja;I.prototype.fb=function(){return this.ea(Pa)};
I.prototype.readZigzagVarintHash64=I.prototype.fb;I.prototype.Ka=function(){return this.ea(G)};I.prototype.readZigzagVarint64String=I.prototype.Ka;I.prototype.Gc=function(){var a=this.b[this.a];this.a+=1;n(this.a<=this.c);return a};I.prototype.readUint8=I.prototype.Gc;I.prototype.Ec=function(){var a=this.b[this.a],b=this.b[this.a+1];this.a+=2;n(this.a<=this.c);return a<<0|b<<8};I.prototype.readUint16=I.prototype.Ec;
I.prototype.m=function(){var a=this.b[this.a],b=this.b[this.a+1],c=this.b[this.a+2],d=this.b[this.a+3];this.a+=4;n(this.a<=this.c);return(a<<0|b<<8|c<<16|d<<24)>>>0};I.prototype.readUint32=I.prototype.m;I.prototype.ga=function(){var a=this.m(),b=this.m();return D(a,b)};I.prototype.readUint64=I.prototype.ga;I.prototype.ha=function(){var a=this.m(),b=this.m();return F(a,b)};I.prototype.readUint64String=I.prototype.ha;
I.prototype.Xb=function(){var a=this.b[this.a];this.a+=1;n(this.a<=this.c);return a<<24>>24};I.prototype.readInt8=I.prototype.Xb;I.prototype.Vb=function(){var a=this.b[this.a],b=this.b[this.a+1];this.a+=2;n(this.a<=this.c);return(a<<0|b<<8)<<16>>16};I.prototype.readInt16=I.prototype.Vb;I.prototype.P=function(){var a=this.b[this.a],b=this.b[this.a+1],c=this.b[this.a+2],d=this.b[this.a+3];this.a+=4;n(this.a<=this.c);return a<<0|b<<8|c<<16|d<<24};I.prototype.readInt32=I.prototype.P;
I.prototype.ba=function(){var a=this.m(),b=this.m();return E(a,b)};I.prototype.readInt64=I.prototype.ba;I.prototype.ca=function(){var a=this.m(),b=this.m();return G(a,b)};I.prototype.readInt64String=I.prototype.ca;I.prototype.aa=function(){var a=this.m();return Na(a,0)};I.prototype.readFloat=I.prototype.aa;I.prototype.Z=function(){var a=this.m(),b=this.m();return Oa(a,b)};I.prototype.readDouble=I.prototype.Z;I.prototype.pa=function(){return!!this.b[this.a++]};I.prototype.readBool=I.prototype.pa;
I.prototype.ra=function(){return this.da()};I.prototype.readEnum=I.prototype.ra;
I.prototype.fa=function(a){var b=this.b,c=this.a;a=c+a;for(var d=[],f="";c<a;){var h=b[c++];if(128>h)d.push(h);else if(192>h)continue;else if(224>h){var m=b[c++];d.push((h&31)<<6|m&63)}else if(240>h){m=b[c++];var t=b[c++];d.push((h&15)<<12|(m&63)<<6|t&63)}else if(248>h){m=b[c++];t=b[c++];var B=b[c++];h=(h&7)<<18|(m&63)<<12|(t&63)<<6|B&63;h-=65536;d.push((h>>10&1023)+55296,(h&1023)+56320)}8192<=d.length&&(f+=String.fromCharCode.apply(null,d),d.length=0)}f+=xa(d);this.a=c;return f};
I.prototype.readString=I.prototype.fa;I.prototype.Dc=function(){var a=this.o();return this.fa(a)};I.prototype.readStringWithLength=I.prototype.Dc;I.prototype.qa=function(a){if(0>a||this.a+a>this.b.length)return this.v=!0,p("Invalid byte length!"),new Uint8Array(0);var b=this.b.subarray(this.a,this.a+a);this.a+=a;n(this.a<=this.c);return b};I.prototype.readBytes=I.prototype.qa;I.prototype.ia=function(){return this.w(Pa)};I.prototype.readVarintHash64=I.prototype.ia;
I.prototype.$=function(){var a=this.b,b=this.a,c=a[b],d=a[b+1],f=a[b+2],h=a[b+3],m=a[b+4],t=a[b+5],B=a[b+6];a=a[b+7];this.a+=8;return String.fromCharCode(c,d,f,h,m,t,B,a)};I.prototype.readFixedHash64=I.prototype.$;function J(a,b,c){this.a=Wa(a,b,c);this.O=this.a.B();this.b=this.c=-1;this.h=!1;this.v=null}g("jspb.BinaryReader",J,void 0);var K=[];J.clearInstanceCache=function(){K=[]};J.getInstanceCacheLength=function(){return K.length};function Xa(a,b,c){if(K.length){var d=K.pop();a&&d.a.H(a,b,c);return d}return new J(a,b,c)}J.alloc=Xa;J.prototype.zb=Xa;J.prototype.alloc=J.prototype.zb;J.prototype.Ca=function(){this.a.clear();this.b=this.c=-1;this.h=!1;this.v=null;100>K.length&&K.push(this)};
J.prototype.free=J.prototype.Ca;J.prototype.Fb=function(){return this.O};J.prototype.getFieldCursor=J.prototype.Fb;J.prototype.B=function(){return this.a.B()};J.prototype.getCursor=J.prototype.B;J.prototype.Y=function(){return this.a.Y()};J.prototype.getBuffer=J.prototype.Y;J.prototype.Hb=function(){return this.c};J.prototype.getFieldNumber=J.prototype.Hb;J.prototype.Lb=function(){return this.b};J.prototype.getWireType=J.prototype.Lb;J.prototype.Mb=function(){return 2==this.b};
J.prototype.isDelimited=J.prototype.Mb;J.prototype.bb=function(){return 4==this.b};J.prototype.isEndGroup=J.prototype.bb;J.prototype.getError=function(){return this.h||this.a.getError()};J.prototype.getError=J.prototype.getError;J.prototype.H=function(a,b,c){this.a.H(a,b,c);this.b=this.c=-1};J.prototype.setBlock=J.prototype.H;J.prototype.reset=function(){this.a.reset();this.b=this.c=-1};J.prototype.reset=J.prototype.reset;J.prototype.advance=function(a){this.a.advance(a)};J.prototype.advance=J.prototype.advance;
J.prototype.oa=function(){if(this.a.ya())return!1;if(this.getError())return p("Decoder hit an error"),!1;this.O=this.a.B();var a=this.a.o(),b=a>>>3;a&=7;if(0!=a&&5!=a&&1!=a&&2!=a&&3!=a&&4!=a)return p("Invalid wire type: %s (at position %s)",a,this.O),this.h=!0,!1;this.c=b;this.b=a;return!0};J.prototype.nextField=J.prototype.oa;J.prototype.Oa=function(){this.a.mb(this.c<<3|this.b)};J.prototype.unskipHeader=J.prototype.Oa;
J.prototype.Lc=function(){var a=this.c;for(this.Oa();this.oa()&&this.c==a;)this.C();this.a.ya()||this.Oa()};J.prototype.skipMatchingFields=J.prototype.Lc;J.prototype.lb=function(){0!=this.b?(p("Invalid wire type for skipVarintField"),this.C()):this.a.kb()};J.prototype.skipVarintField=J.prototype.lb;J.prototype.gb=function(){if(2!=this.b)p("Invalid wire type for skipDelimitedField"),this.C();else{var a=this.a.o();this.a.advance(a)}};J.prototype.skipDelimitedField=J.prototype.gb;
J.prototype.hb=function(){5!=this.b?(p("Invalid wire type for skipFixed32Field"),this.C()):this.a.advance(4)};J.prototype.skipFixed32Field=J.prototype.hb;J.prototype.ib=function(){1!=this.b?(p("Invalid wire type for skipFixed64Field"),this.C()):this.a.advance(8)};J.prototype.skipFixed64Field=J.prototype.ib;J.prototype.jb=function(){var a=this.c;do{if(!this.oa()){p("Unmatched start-group tag: stream EOF");this.h=!0;break}if(4==this.b){this.c!=a&&(p("Unmatched end-group tag"),this.h=!0);break}this.C()}while(1)};
J.prototype.skipGroup=J.prototype.jb;J.prototype.C=function(){switch(this.b){case 0:this.lb();break;case 1:this.ib();break;case 2:this.gb();break;case 5:this.hb();break;case 3:this.jb();break;default:p("Invalid wire encoding for field.")}};J.prototype.skipField=J.prototype.C;J.prototype.Hc=function(a,b){null===this.v&&(this.v={});n(!this.v[a]);this.v[a]=b};J.prototype.registerReadCallback=J.prototype.Hc;J.prototype.Ic=function(a){n(null!==this.v);a=this.v[a];n(a);return a(this)};
J.prototype.runReadCallback=J.prototype.Ic;J.prototype.Yb=function(a,b){n(2==this.b);var c=this.a.c,d=this.a.o();d=this.a.B()+d;this.a.setEnd(d);b(a,this);this.a.Ma(d);this.a.setEnd(c)};J.prototype.readMessage=J.prototype.Yb;J.prototype.Ub=function(a,b,c){n(3==this.b);n(this.c==a);c(b,this);this.h||4==this.b||(p("Group submessage did not end with an END_GROUP tag"),this.h=!0)};J.prototype.readGroup=J.prototype.Ub;
J.prototype.Gb=function(){n(2==this.b);var a=this.a.o(),b=this.a.B(),c=b+a;a=Wa(this.a.Y(),b,a);this.a.Ma(c);return a};J.prototype.getFieldDecoder=J.prototype.Gb;J.prototype.P=function(){n(0==this.b);return this.a.da()};J.prototype.readInt32=J.prototype.P;J.prototype.Wb=function(){n(0==this.b);return this.a.Ea()};J.prototype.readInt32String=J.prototype.Wb;J.prototype.ba=function(){n(0==this.b);return this.a.sa()};J.prototype.readInt64=J.prototype.ba;J.prototype.ca=function(){n(0==this.b);return this.a.Fa()};
J.prototype.readInt64String=J.prototype.ca;J.prototype.m=function(){n(0==this.b);return this.a.o()};J.prototype.readUint32=J.prototype.m;J.prototype.Fc=function(){n(0==this.b);return this.a.O()};J.prototype.readUint32String=J.prototype.Fc;J.prototype.ga=function(){n(0==this.b);return this.a.Ga()};J.prototype.readUint64=J.prototype.ga;J.prototype.ha=function(){n(0==this.b);return this.a.Ha()};J.prototype.readUint64String=J.prototype.ha;J.prototype.zc=function(){n(0==this.b);return this.a.Ia()};
J.prototype.readSint32=J.prototype.zc;J.prototype.Ac=function(){n(0==this.b);return this.a.Ja()};J.prototype.readSint64=J.prototype.Ac;J.prototype.Bc=function(){n(0==this.b);return this.a.Ka()};J.prototype.readSint64String=J.prototype.Bc;J.prototype.Rb=function(){n(5==this.b);return this.a.m()};J.prototype.readFixed32=J.prototype.Rb;J.prototype.Sb=function(){n(1==this.b);return this.a.ga()};J.prototype.readFixed64=J.prototype.Sb;J.prototype.Tb=function(){n(1==this.b);return this.a.ha()};
J.prototype.readFixed64String=J.prototype.Tb;J.prototype.vc=function(){n(5==this.b);return this.a.P()};J.prototype.readSfixed32=J.prototype.vc;J.prototype.wc=function(){n(5==this.b);return this.a.P().toString()};J.prototype.readSfixed32String=J.prototype.wc;J.prototype.xc=function(){n(1==this.b);return this.a.ba()};J.prototype.readSfixed64=J.prototype.xc;J.prototype.yc=function(){n(1==this.b);return this.a.ca()};J.prototype.readSfixed64String=J.prototype.yc;
J.prototype.aa=function(){n(5==this.b);return this.a.aa()};J.prototype.readFloat=J.prototype.aa;J.prototype.Z=function(){n(1==this.b);return this.a.Z()};J.prototype.readDouble=J.prototype.Z;J.prototype.pa=function(){n(0==this.b);return!!this.a.o()};J.prototype.readBool=J.prototype.pa;J.prototype.ra=function(){n(0==this.b);return this.a.sa()};J.prototype.readEnum=J.prototype.ra;J.prototype.fa=function(){n(2==this.b);var a=this.a.o();return this.a.fa(a)};J.prototype.readString=J.prototype.fa;
J.prototype.qa=function(){n(2==this.b);var a=this.a.o();return this.a.qa(a)};J.prototype.readBytes=J.prototype.qa;J.prototype.ia=function(){n(0==this.b);return this.a.ia()};J.prototype.readVarintHash64=J.prototype.ia;J.prototype.Cc=function(){n(0==this.b);return this.a.fb()};J.prototype.readSintHash64=J.prototype.Cc;J.prototype.w=function(a){n(0==this.b);return this.a.w(a)};J.prototype.readSplitVarint64=J.prototype.w;
J.prototype.ea=function(a){n(0==this.b);return this.a.w(function(b,c){return Ma(b,c,a)})};J.prototype.readSplitZigzagVarint64=J.prototype.ea;J.prototype.$=function(){n(1==this.b);return this.a.$()};J.prototype.readFixedHash64=J.prototype.$;J.prototype.ta=function(a){n(1==this.b);return this.a.ta(a)};J.prototype.readSplitFixed64=J.prototype.ta;function L(a,b){n(2==a.b);var c=a.a.o();c=a.a.B()+c;for(var d=[];a.a.B()<c;)d.push(b.call(a.a));return d}J.prototype.gc=function(){return L(this,this.a.da)};
J.prototype.readPackedInt32=J.prototype.gc;J.prototype.hc=function(){return L(this,this.a.Ea)};J.prototype.readPackedInt32String=J.prototype.hc;J.prototype.ic=function(){return L(this,this.a.sa)};J.prototype.readPackedInt64=J.prototype.ic;J.prototype.jc=function(){return L(this,this.a.Fa)};J.prototype.readPackedInt64String=J.prototype.jc;J.prototype.qc=function(){return L(this,this.a.o)};J.prototype.readPackedUint32=J.prototype.qc;J.prototype.rc=function(){return L(this,this.a.O)};
J.prototype.readPackedUint32String=J.prototype.rc;J.prototype.sc=function(){return L(this,this.a.Ga)};J.prototype.readPackedUint64=J.prototype.sc;J.prototype.tc=function(){return L(this,this.a.Ha)};J.prototype.readPackedUint64String=J.prototype.tc;J.prototype.nc=function(){return L(this,this.a.Ia)};J.prototype.readPackedSint32=J.prototype.nc;J.prototype.oc=function(){return L(this,this.a.Ja)};J.prototype.readPackedSint64=J.prototype.oc;J.prototype.pc=function(){return L(this,this.a.Ka)};
J.prototype.readPackedSint64String=J.prototype.pc;J.prototype.bc=function(){return L(this,this.a.m)};J.prototype.readPackedFixed32=J.prototype.bc;J.prototype.cc=function(){return L(this,this.a.ga)};J.prototype.readPackedFixed64=J.prototype.cc;J.prototype.dc=function(){return L(this,this.a.ha)};J.prototype.readPackedFixed64String=J.prototype.dc;J.prototype.kc=function(){return L(this,this.a.P)};J.prototype.readPackedSfixed32=J.prototype.kc;J.prototype.lc=function(){return L(this,this.a.ba)};
J.prototype.readPackedSfixed64=J.prototype.lc;J.prototype.mc=function(){return L(this,this.a.ca)};J.prototype.readPackedSfixed64String=J.prototype.mc;J.prototype.fc=function(){return L(this,this.a.aa)};J.prototype.readPackedFloat=J.prototype.fc;J.prototype.$b=function(){return L(this,this.a.Z)};J.prototype.readPackedDouble=J.prototype.$b;J.prototype.Zb=function(){return L(this,this.a.pa)};J.prototype.readPackedBool=J.prototype.Zb;J.prototype.ac=function(){return L(this,this.a.ra)};
J.prototype.readPackedEnum=J.prototype.ac;J.prototype.uc=function(){return L(this,this.a.ia)};J.prototype.readPackedVarintHash64=J.prototype.uc;J.prototype.ec=function(){return L(this,this.a.$)};J.prototype.readPackedFixedHash64=J.prototype.ec;function Ya(a,b,c,d,f){this.ma=a;this.Ba=b;this.la=c;this.Na=d;this.na=f}g("jspb.ExtensionFieldInfo",Ya,void 0);function Za(a,b,c,d,f,h){this.Za=a;this.za=b;this.Aa=c;this.Wa=d;this.Ab=f;this.Nb=h}g("jspb.ExtensionFieldBinaryInfo",Za,void 0);Ya.prototype.F=function(){return!!this.la};Ya.prototype.isMessageType=Ya.prototype.F;function N(){}g("jspb.Message",N,void 0);N.GENERATE_TO_OBJECT=!0;N.GENERATE_FROM_OBJECT=!0;var $a="function"==typeof Uint8Array;N.prototype.Ib=function(){return this.b};
N.prototype.getJsPbMessageId=N.prototype.Ib;
N.initialize=function(a,b,c,d,f,h){a.f=null;b||(b=c?[c]:[]);a.b=c?String(c):void 0;a.D=0===c?-1:0;a.u=b;a:{c=a.u.length;b=-1;if(c&&(b=c-1,c=a.u[b],!(null===c||"object"!=typeof c||Array.isArray(c)||$a&&c instanceof Uint8Array))){a.G=b-a.D;a.i=c;break a}-1<d?(a.G=Math.max(d,b+1-a.D),a.i=null):a.G=Number.MAX_VALUE}a.a={};if(f)for(d=0;d<f.length;d++)b=f[d],b<a.G?(b+=a.D,a.u[b]=a.u[b]||ab):(bb(a),a.i[b]=a.i[b]||ab);if(h&&h.length)for(d=0;d<h.length;d++)cb(a,h[d])};
var ab=Object.freeze?Object.freeze([]):[];function bb(a){var b=a.G+a.D;a.u[b]||(a.i=a.u[b]={})}function db(a,b,c){for(var d=[],f=0;f<a.length;f++)d[f]=b.call(a[f],c,a[f]);return d}N.toObjectList=db;N.toObjectExtension=function(a,b,c,d,f){for(var h in c){var m=c[h],t=d.call(a,m);if(null!=t){for(var B in m.Ba)if(m.Ba.hasOwnProperty(B))break;b[B]=m.Na?m.na?db(t,m.Na,f):m.Na(f,t):t}}};
N.serializeBinaryExtensions=function(a,b,c,d){for(var f in c){var h=c[f],m=h.Za;if(!h.Aa)throw Error("Message extension present that was generated without binary serialization support");var t=d.call(a,m);if(null!=t)if(m.F())if(h.Wa)h.Aa.call(b,m.ma,t,h.Wa);else throw Error("Message extension present holding submessage without binary support enabled, and message is being serialized to binary format");else h.Aa.call(b,m.ma,t)}};
N.readBinaryExtension=function(a,b,c,d,f){var h=c[b.c];if(h){c=h.Za;if(!h.za)throw Error("Deserializing extension whose generated code does not support binary format");if(c.F()){var m=new c.la;h.za.call(b,m,h.Ab)}else m=h.za.call(b);c.na&&!h.Nb?(b=d.call(a,c))?b.push(m):f.call(a,c,[m]):f.call(a,c,m)}else b.C()};function O(a,b){if(b<a.G){b+=a.D;var c=a.u[b];return c===ab?a.u[b]=[]:c}if(a.i)return c=a.i[b],c===ab?a.i[b]=[]:c}N.getField=O;N.getRepeatedField=function(a,b){return O(a,b)};
function eb(a,b){a=O(a,b);return null==a?a:+a}N.getOptionalFloatingPointField=eb;function fb(a,b){a=O(a,b);return null==a?a:!!a}N.getBooleanField=fb;N.getRepeatedFloatingPointField=function(a,b){var c=O(a,b);a.a||(a.a={});if(!a.a[b]){for(var d=0;d<c.length;d++)c[d]=+c[d];a.a[b]=!0}return c};N.getRepeatedBooleanField=function(a,b){var c=O(a,b);a.a||(a.a={});if(!a.a[b]){for(var d=0;d<c.length;d++)c[d]=!!c[d];a.a[b]=!0}return c};
function gb(a){if(null==a||"string"===typeof a)return a;if($a&&a instanceof Uint8Array)return Ba(a);p("Cannot coerce to b64 string: "+k(a));return null}N.bytesAsB64=gb;function hb(a){if(null==a||a instanceof Uint8Array)return a;if("string"===typeof a)return Da(a);p("Cannot coerce to Uint8Array: "+k(a));return null}N.bytesAsU8=hb;N.bytesListAsB64=function(a){ib(a);return a.length&&"string"!==typeof a[0]?l(a,gb):a};N.bytesListAsU8=function(a){ib(a);return!a.length||a[0]instanceof Uint8Array?a:l(a,hb)};
function ib(a){if(a&&1<a.length){var b=k(a[0]);qa(a,function(c){k(c)!=b&&p("Inconsistent type in JSPB repeated field array. Got "+k(c)+" expected "+b)})}}function jb(a,b,c){a=O(a,b);return null==a?c:a}N.getFieldWithDefault=jb;N.getBooleanFieldWithDefault=function(a,b,c){a=fb(a,b);return null==a?c:a};N.getFloatingPointFieldWithDefault=function(a,b,c){a=eb(a,b);return null==a?c:a};N.getFieldProto3=jb;
N.getMapField=function(a,b,c,d){a.f||(a.f={});if(b in a.f)return a.f[b];var f=O(a,b);if(!f){if(c)return;f=[];P(a,b,f)}return a.f[b]=new r(f,d)};function P(a,b,c){q(a,N);b<a.G?a.u[b+a.D]=c:(bb(a),a.i[b]=c);return a}N.setField=P;N.setProto3IntField=function(a,b,c){return Q(a,b,c,0)};N.setProto3FloatField=function(a,b,c){return Q(a,b,c,0)};N.setProto3BooleanField=function(a,b,c){return Q(a,b,c,!1)};N.setProto3StringField=function(a,b,c){return Q(a,b,c,"")};
N.setProto3BytesField=function(a,b,c){return Q(a,b,c,"")};N.setProto3EnumField=function(a,b,c){return Q(a,b,c,0)};N.setProto3StringIntField=function(a,b,c){return Q(a,b,c,"0")};function Q(a,b,c,d){q(a,N);c!==d?P(a,b,c):b<a.G?a.u[b+a.D]=null:(bb(a),delete a.i[b]);return a}N.addToRepeatedField=function(a,b,c,d){q(a,N);b=O(a,b);void 0!=d?b.splice(d,0,c):b.push(c);return a};function kb(a,b,c,d){q(a,N);(c=cb(a,c))&&c!==b&&void 0!==d&&(a.f&&c in a.f&&(a.f[c]=void 0),P(a,c,void 0));return P(a,b,d)}
N.setOneofField=kb;function cb(a,b){for(var c,d,f=0;f<b.length;f++){var h=b[f],m=O(a,h);null!=m&&(c=h,d=m,P(a,h,void 0))}return c?(P(a,c,d),c):0}N.computeOneofCase=cb;N.getWrapperField=function(a,b,c,d){a.f||(a.f={});if(!a.f[c]){var f=O(a,c);if(d||f)a.f[c]=new b(f)}return a.f[c]};N.getRepeatedWrapperField=function(a,b,c){lb(a,b,c);b=a.f[c];b==ab&&(b=a.f[c]=[]);return b};function lb(a,b,c){a.f||(a.f={});if(!a.f[c]){for(var d=O(a,c),f=[],h=0;h<d.length;h++)f[h]=new b(d[h]);a.f[c]=f}}
N.setWrapperField=function(a,b,c){q(a,N);a.f||(a.f={});var d=c?c.g():c;a.f[b]=c;return P(a,b,d)};N.setOneofWrapperField=function(a,b,c,d){q(a,N);a.f||(a.f={});var f=d?d.g():d;a.f[b]=d;return kb(a,b,c,f)};N.setRepeatedWrapperField=function(a,b,c){q(a,N);a.f||(a.f={});c=c||[];for(var d=[],f=0;f<c.length;f++)d[f]=c[f].g();a.f[b]=c;return P(a,b,d)};
N.addToRepeatedWrapperField=function(a,b,c,d,f){lb(a,d,b);var h=a.f[b];h||(h=a.f[b]=[]);c=c?c:new d;a=O(a,b);void 0!=f?(h.splice(f,0,c),a.splice(f,0,c.g())):(h.push(c),a.push(c.g()));return c};N.toMap=function(a,b,c,d){for(var f={},h=0;h<a.length;h++)f[b.call(a[h])]=c?c.call(a[h],d,a[h]):a[h];return f};function mb(a){if(a.f)for(var b in a.f){var c=a.f[b];if(Array.isArray(c))for(var d=0;d<c.length;d++)c[d]&&c[d].g();else c&&c.g()}}N.prototype.g=function(){mb(this);return this.u};
N.prototype.toArray=N.prototype.g;N.prototype.toString=function(){mb(this);return this.u.toString()};N.prototype.getExtension=function(a){if(this.i){this.f||(this.f={});var b=a.ma;if(a.na){if(a.F())return this.f[b]||(this.f[b]=l(this.i[b]||[],function(c){return new a.la(c)})),this.f[b]}else if(a.F())return!this.f[b]&&this.i[b]&&(this.f[b]=new a.la(this.i[b])),this.f[b];return this.i[b]}};N.prototype.getExtension=N.prototype.getExtension;
N.prototype.Kc=function(a,b){this.f||(this.f={});bb(this);var c=a.ma;a.na?(b=b||[],a.F()?(this.f[c]=b,this.i[c]=l(b,function(d){return d.g()})):this.i[c]=b):a.F()?(this.f[c]=b,this.i[c]=b?b.g():b):this.i[c]=b;return this};N.prototype.setExtension=N.prototype.Kc;N.difference=function(a,b){if(!(a instanceof b.constructor))throw Error("Messages have different types.");var c=a.g();b=b.g();var d=[],f=0,h=c.length>b.length?c.length:b.length;a.b&&(d[0]=a.b,f=1);for(;f<h;f++)nb(c[f],b[f])||(d[f]=b[f]);return new a.constructor(d)};
N.equals=function(a,b){return a==b||!(!a||!b)&&a instanceof b.constructor&&nb(a.g(),b.g())};function ob(a,b){a=a||{};b=b||{};var c={},d;for(d in a)c[d]=0;for(d in b)c[d]=0;for(d in c)if(!nb(a[d],b[d]))return!1;return!0}N.compareExtensions=ob;
function nb(a,b){if(a==b)return!0;if(!la(a)||!la(b))return"number"===typeof a&&isNaN(a)||"number"===typeof b&&isNaN(b)?String(a)==String(b):!1;if(a.constructor!=b.constructor)return!1;if($a&&a.constructor===Uint8Array){if(a.length!=b.length)return!1;for(var c=0;c<a.length;c++)if(a[c]!=b[c])return!1;return!0}if(a.constructor===Array){var d=void 0,f=void 0,h=Math.max(a.length,b.length);for(c=0;c<h;c++){var m=a[c],t=b[c];m&&m.constructor==Object&&(n(void 0===d),n(c===a.length-1),d=m,m=void 0);t&&t.constructor==
Object&&(n(void 0===f),n(c===b.length-1),f=t,t=void 0);if(!nb(m,t))return!1}return d||f?(d=d||{},f=f||{},ob(d,f)):!0}if(a.constructor===Object)return ob(a,b);throw Error("Invalid type in JSPB array");}N.compareFields=nb;N.prototype.Bb=function(){return pb(this)};N.prototype.cloneMessage=N.prototype.Bb;N.prototype.clone=function(){return pb(this)};N.prototype.clone=N.prototype.clone;N.clone=function(a){return pb(a)};function pb(a){return new a.constructor(qb(a.g()))}
N.copyInto=function(a,b){q(a,N);q(b,N);n(a.constructor==b.constructor,"Copy source and target message should have the same type.");a=pb(a);for(var c=b.g(),d=a.g(),f=c.length=0;f<d.length;f++)c[f]=d[f];b.f=a.f;b.i=a.i};function qb(a){if(Array.isArray(a)){for(var b=Array(a.length),c=0;c<a.length;c++){var d=a[c];null!=d&&(b[c]="object"==typeof d?qb(n(d)):d)}return b}if($a&&a instanceof Uint8Array)return new Uint8Array(a);b={};for(c in a)d=a[c],null!=d&&(b[c]="object"==typeof d?qb(n(d)):d);return b}
N.registerMessageType=function(a,b){b.we=a};var R={dump:function(a){q(a,N,"jspb.Message instance expected");n(a.getExtension,"Only unobfuscated and unoptimized compilation modes supported.");return R.X(a)}};g("jspb.debug.dump",R.dump,void 0);
R.X=function(a){var b=k(a);if("number"==b||"string"==b||"boolean"==b||"null"==b||"undefined"==b||"undefined"!==typeof Uint8Array&&a instanceof Uint8Array)return a;if("array"==b)return ua(a),l(a,R.X);if(a instanceof r){var c={};a=a.entries();for(var d=a.next();!d.done;d=a.next())c[d.value[0]]=R.X(d.value[1]);return c}q(a,N,"Only messages expected: "+a);b=a.constructor;var f={$name:b.name||b.displayName};for(t in b.prototype){var h=/^get([A-Z]\w*)/.exec(t);if(h&&"getExtension"!=t&&"getJsPbMessageId"!=
t){var m="has"+h[1];if(!a[m]||a[m]())m=a[t](),f[R.$a(h[1])]=R.X(m)}}if(a.extensionObject_)return f.$extensions="Recursive dumping of extensions not supported in compiled code. Switch to uncompiled or dump extension object directly",f;for(d in b.extensions)if(/^\d+$/.test(d)){m=b.extensions[d];var t=a.getExtension(m);h=void 0;m=m.Ba;var B=[],M=0;for(h in m)B[M++]=h;h=B[0];null!=t&&(c||(c=f.$extensions={}),c[R.$a(h)]=R.X(t))}return f};R.$a=function(a){return a.replace(/^[A-Z]/,function(b){return b.toLowerCase()})};function S(){this.a=[]}g("jspb.BinaryEncoder",S,void 0);S.prototype.length=function(){return this.a.length};S.prototype.length=S.prototype.length;S.prototype.end=function(){var a=this.a;this.a=[];return a};S.prototype.end=S.prototype.end;S.prototype.l=function(a,b){n(a==Math.floor(a));n(b==Math.floor(b));n(0<=a&&4294967296>a);for(n(0<=b&&4294967296>b);0<b||127<a;)this.a.push(a&127|128),a=(a>>>7|b<<25)>>>0,b>>>=7;this.a.push(a)};S.prototype.writeSplitVarint64=S.prototype.l;
S.prototype.A=function(a,b){n(a==Math.floor(a));n(b==Math.floor(b));n(0<=a&&4294967296>a);n(0<=b&&4294967296>b);this.s(a);this.s(b)};S.prototype.writeSplitFixed64=S.prototype.A;S.prototype.j=function(a){n(a==Math.floor(a));for(n(0<=a&&4294967296>a);127<a;)this.a.push(a&127|128),a>>>=7;this.a.push(a)};S.prototype.writeUnsignedVarint32=S.prototype.j;S.prototype.M=function(a){n(a==Math.floor(a));n(-2147483648<=a&&2147483648>a);if(0<=a)this.j(a);else{for(var b=0;9>b;b++)this.a.push(a&127|128),a>>=7;this.a.push(1)}};
S.prototype.writeSignedVarint32=S.prototype.M;S.prototype.va=function(a){n(a==Math.floor(a));n(0<=a&&1.8446744073709552E19>a);A(a);this.l(y,z)};S.prototype.writeUnsignedVarint64=S.prototype.va;S.prototype.ua=function(a){n(a==Math.floor(a));n(-9223372036854775808<=a&&0x7fffffffffffffff>a);A(a);this.l(y,z)};S.prototype.writeSignedVarint64=S.prototype.ua;S.prototype.wa=function(a){n(a==Math.floor(a));n(-2147483648<=a&&2147483648>a);this.j((a<<1^a>>31)>>>0)};S.prototype.writeZigzagVarint32=S.prototype.wa;
S.prototype.xa=function(a){n(a==Math.floor(a));n(-9223372036854775808<=a&&0x7fffffffffffffff>a);Ga(a);this.l(y,z)};S.prototype.writeZigzagVarint64=S.prototype.xa;S.prototype.Ta=function(a){this.W(H(a))};S.prototype.writeZigzagVarint64String=S.prototype.Ta;S.prototype.W=function(a){var b=this;C(a);Ja(y,z,function(c,d){b.l(c>>>0,d>>>0)})};S.prototype.writeZigzagVarintHash64=S.prototype.W;S.prototype.be=function(a){n(a==Math.floor(a));n(0<=a&&256>a);this.a.push(a>>>0&255)};S.prototype.writeUint8=S.prototype.be;
S.prototype.ae=function(a){n(a==Math.floor(a));n(0<=a&&65536>a);this.a.push(a>>>0&255);this.a.push(a>>>8&255)};S.prototype.writeUint16=S.prototype.ae;S.prototype.s=function(a){n(a==Math.floor(a));n(0<=a&&4294967296>a);this.a.push(a>>>0&255);this.a.push(a>>>8&255);this.a.push(a>>>16&255);this.a.push(a>>>24&255)};S.prototype.writeUint32=S.prototype.s;S.prototype.V=function(a){n(a==Math.floor(a));n(0<=a&&1.8446744073709552E19>a);Fa(a);this.s(y);this.s(z)};S.prototype.writeUint64=S.prototype.V;
S.prototype.Qc=function(a){n(a==Math.floor(a));n(-128<=a&&128>a);this.a.push(a>>>0&255)};S.prototype.writeInt8=S.prototype.Qc;S.prototype.Pc=function(a){n(a==Math.floor(a));n(-32768<=a&&32768>a);this.a.push(a>>>0&255);this.a.push(a>>>8&255)};S.prototype.writeInt16=S.prototype.Pc;S.prototype.S=function(a){n(a==Math.floor(a));n(-2147483648<=a&&2147483648>a);this.a.push(a>>>0&255);this.a.push(a>>>8&255);this.a.push(a>>>16&255);this.a.push(a>>>24&255)};S.prototype.writeInt32=S.prototype.S;
S.prototype.T=function(a){n(a==Math.floor(a));n(-9223372036854775808<=a&&0x7fffffffffffffff>a);A(a);this.A(y,z)};S.prototype.writeInt64=S.prototype.T;S.prototype.ka=function(a){n(a==Math.floor(a));n(-9223372036854775808<=+a&&0x7fffffffffffffff>+a);C(H(a));this.A(y,z)};S.prototype.writeInt64String=S.prototype.ka;S.prototype.L=function(a){n(Infinity===a||-Infinity===a||isNaN(a)||-3.4028234663852886E38<=a&&3.4028234663852886E38>=a);Ha(a);this.s(y)};S.prototype.writeFloat=S.prototype.L;
S.prototype.J=function(a){n(Infinity===a||-Infinity===a||isNaN(a)||-1.7976931348623157E308<=a&&1.7976931348623157E308>=a);Ia(a);this.s(y);this.s(z)};S.prototype.writeDouble=S.prototype.J;S.prototype.I=function(a){n("boolean"===typeof a||"number"===typeof a);this.a.push(a?1:0)};S.prototype.writeBool=S.prototype.I;S.prototype.R=function(a){n(a==Math.floor(a));n(-2147483648<=a&&2147483648>a);this.M(a)};S.prototype.writeEnum=S.prototype.R;S.prototype.ja=function(a){this.a.push.apply(this.a,a)};
S.prototype.writeBytes=S.prototype.ja;S.prototype.N=function(a){C(a);this.l(y,z)};S.prototype.writeVarintHash64=S.prototype.N;S.prototype.K=function(a){C(a);this.s(y);this.s(z)};S.prototype.writeFixedHash64=S.prototype.K;
S.prototype.U=function(a){var b=this.a.length;ta(a);for(var c=0;c<a.length;c++){var d=a.charCodeAt(c);if(128>d)this.a.push(d);else if(2048>d)this.a.push(d>>6|192),this.a.push(d&63|128);else if(65536>d)if(55296<=d&&56319>=d&&c+1<a.length){var f=a.charCodeAt(c+1);56320<=f&&57343>=f&&(d=1024*(d-55296)+f-56320+65536,this.a.push(d>>18|240),this.a.push(d>>12&63|128),this.a.push(d>>6&63|128),this.a.push(d&63|128),c++)}else this.a.push(d>>12|224),this.a.push(d>>6&63|128),this.a.push(d&63|128)}return this.a.length-
b};S.prototype.writeString=S.prototype.U;function T(a,b){this.lo=a;this.hi=b}g("jspb.arith.UInt64",T,void 0);T.prototype.cmp=function(a){return this.hi<a.hi||this.hi==a.hi&&this.lo<a.lo?-1:this.hi==a.hi&&this.lo==a.lo?0:1};T.prototype.cmp=T.prototype.cmp;T.prototype.La=function(){return new T((this.lo>>>1|(this.hi&1)<<31)>>>0,this.hi>>>1>>>0)};T.prototype.rightShift=T.prototype.La;T.prototype.Da=function(){return new T(this.lo<<1>>>0,(this.hi<<1|this.lo>>>31)>>>0)};T.prototype.leftShift=T.prototype.Da;
T.prototype.cb=function(){return!!(this.hi&2147483648)};T.prototype.msb=T.prototype.cb;T.prototype.Ob=function(){return!!(this.lo&1)};T.prototype.lsb=T.prototype.Ob;T.prototype.Ua=function(){return 0==this.lo&&0==this.hi};T.prototype.zero=T.prototype.Ua;T.prototype.add=function(a){return new T((this.lo+a.lo&4294967295)>>>0>>>0,((this.hi+a.hi&4294967295)>>>0)+(4294967296<=this.lo+a.lo?1:0)>>>0)};T.prototype.add=T.prototype.add;
T.prototype.sub=function(a){return new T((this.lo-a.lo&4294967295)>>>0>>>0,((this.hi-a.hi&4294967295)>>>0)-(0>this.lo-a.lo?1:0)>>>0)};T.prototype.sub=T.prototype.sub;function rb(a,b){var c=a&65535;a>>>=16;var d=b&65535,f=b>>>16;b=c*d+65536*(c*f&65535)+65536*(a*d&65535);for(c=a*f+(c*f>>>16)+(a*d>>>16);4294967296<=b;)b-=4294967296,c+=1;return new T(b>>>0,c>>>0)}T.mul32x32=rb;T.prototype.eb=function(a){var b=rb(this.lo,a);a=rb(this.hi,a);a.hi=a.lo;a.lo=0;return b.add(a)};T.prototype.mul=T.prototype.eb;
T.prototype.Xa=function(a){if(0==a)return[];var b=new T(0,0),c=new T(this.lo,this.hi);a=new T(a,0);for(var d=new T(1,0);!a.cb();)a=a.Da(),d=d.Da();for(;!d.Ua();)0>=a.cmp(c)&&(b=b.add(d),c=c.sub(a)),a=a.La(),d=d.La();return[b,c]};T.prototype.div=T.prototype.Xa;T.prototype.toString=function(){for(var a="",b=this;!b.Ua();){b=b.Xa(10);var c=b[0];a=b[1].lo+a;b=c}""==a&&(a="0");return a};T.prototype.toString=T.prototype.toString;
function U(a){for(var b=new T(0,0),c=new T(0,0),d=0;d<a.length;d++){if("0">a[d]||"9"<a[d])return null;c.lo=parseInt(a[d],10);b=b.eb(10).add(c)}return b}T.fromString=U;T.prototype.clone=function(){return new T(this.lo,this.hi)};T.prototype.clone=T.prototype.clone;function V(a,b){this.lo=a;this.hi=b}g("jspb.arith.Int64",V,void 0);V.prototype.add=function(a){return new V((this.lo+a.lo&4294967295)>>>0>>>0,((this.hi+a.hi&4294967295)>>>0)+(4294967296<=this.lo+a.lo?1:0)>>>0)};V.prototype.add=V.prototype.add;
V.prototype.sub=function(a){return new V((this.lo-a.lo&4294967295)>>>0>>>0,((this.hi-a.hi&4294967295)>>>0)-(0>this.lo-a.lo?1:0)>>>0)};V.prototype.sub=V.prototype.sub;V.prototype.clone=function(){return new V(this.lo,this.hi)};V.prototype.clone=V.prototype.clone;V.prototype.toString=function(){var a=0!=(this.hi&2147483648),b=new T(this.lo,this.hi);a&&(b=(new T(0,0)).sub(b));return(a?"-":"")+b.toString()};V.prototype.toString=V.prototype.toString;
function sb(a){var b=0<a.length&&"-"==a[0];b&&(a=a.substring(1));a=U(a);if(null===a)return null;b&&(a=(new T(0,0)).sub(a));return new V(a.lo,a.hi)}V.fromString=sb;function W(){this.c=[];this.b=0;this.a=new S;this.h=[]}g("jspb.BinaryWriter",W,void 0);function tb(a,b){var c=a.a.end();a.c.push(c);a.c.push(b);a.b+=c.length+b.length}function X(a,b){Y(a,b,2);b=a.a.end();a.c.push(b);a.b+=b.length;b.push(a.b);return b}function Z(a,b){var c=b.pop();c=a.b+a.a.length()-c;for(n(0<=c);127<c;)b.push(c&127|128),c>>>=7,a.b++;b.push(c);a.b++}W.prototype.pb=function(a,b,c){tb(this,a.subarray(b,c))};W.prototype.writeSerializedMessage=W.prototype.pb;
W.prototype.Pb=function(a,b,c){null!=a&&null!=b&&null!=c&&this.pb(a,b,c)};W.prototype.maybeWriteSerializedMessage=W.prototype.Pb;W.prototype.reset=function(){this.c=[];this.a.end();this.b=0;this.h=[]};W.prototype.reset=W.prototype.reset;W.prototype.ab=function(){n(0==this.h.length);for(var a=new Uint8Array(this.b+this.a.length()),b=this.c,c=b.length,d=0,f=0;f<c;f++){var h=b[f];a.set(h,d);d+=h.length}b=this.a.end();a.set(b,d);d+=b.length;n(d==a.length);this.c=[a];return a};
W.prototype.getResultBuffer=W.prototype.ab;W.prototype.Kb=function(a){return Ba(this.ab(),a)};W.prototype.getResultBase64String=W.prototype.Kb;W.prototype.Va=function(a){this.h.push(X(this,a))};W.prototype.beginSubMessage=W.prototype.Va;W.prototype.Ya=function(){n(0<=this.h.length);Z(this,this.h.pop())};W.prototype.endSubMessage=W.prototype.Ya;function Y(a,b,c){n(1<=b&&b==Math.floor(b));a.a.j(8*b+c)}
W.prototype.Nc=function(a,b,c){switch(a){case 1:this.J(b,c);break;case 2:this.L(b,c);break;case 3:this.T(b,c);break;case 4:this.V(b,c);break;case 5:this.S(b,c);break;case 6:this.Qa(b,c);break;case 7:this.Pa(b,c);break;case 8:this.I(b,c);break;case 9:this.U(b,c);break;case 10:p("Group field type not supported in writeAny()");break;case 11:p("Message field type not supported in writeAny()");break;case 12:this.ja(b,c);break;case 13:this.s(b,c);break;case 14:this.R(b,c);break;case 15:this.Ra(b,c);break;
case 16:this.Sa(b,c);break;case 17:this.rb(b,c);break;case 18:this.sb(b,c);break;case 30:this.K(b,c);break;case 31:this.N(b,c);break;default:p("Invalid field type in writeAny()")}};W.prototype.writeAny=W.prototype.Nc;function ub(a,b,c){null!=c&&(Y(a,b,0),a.a.j(c))}function vb(a,b,c){null!=c&&(Y(a,b,0),a.a.M(c))}W.prototype.S=function(a,b){null!=b&&(n(-2147483648<=b&&2147483648>b),vb(this,a,b))};W.prototype.writeInt32=W.prototype.S;
W.prototype.ob=function(a,b){null!=b&&(b=parseInt(b,10),n(-2147483648<=b&&2147483648>b),vb(this,a,b))};W.prototype.writeInt32String=W.prototype.ob;W.prototype.T=function(a,b){null!=b&&(n(-9223372036854775808<=b&&0x7fffffffffffffff>b),null!=b&&(Y(this,a,0),this.a.ua(b)))};W.prototype.writeInt64=W.prototype.T;W.prototype.ka=function(a,b){null!=b&&(b=sb(b),Y(this,a,0),this.a.l(b.lo,b.hi))};W.prototype.writeInt64String=W.prototype.ka;
W.prototype.s=function(a,b){null!=b&&(n(0<=b&&4294967296>b),ub(this,a,b))};W.prototype.writeUint32=W.prototype.s;W.prototype.ub=function(a,b){null!=b&&(b=parseInt(b,10),n(0<=b&&4294967296>b),ub(this,a,b))};W.prototype.writeUint32String=W.prototype.ub;W.prototype.V=function(a,b){null!=b&&(n(0<=b&&1.8446744073709552E19>b),null!=b&&(Y(this,a,0),this.a.va(b)))};W.prototype.writeUint64=W.prototype.V;W.prototype.vb=function(a,b){null!=b&&(b=U(b),Y(this,a,0),this.a.l(b.lo,b.hi))};
W.prototype.writeUint64String=W.prototype.vb;W.prototype.rb=function(a,b){null!=b&&(n(-2147483648<=b&&2147483648>b),null!=b&&(Y(this,a,0),this.a.wa(b)))};W.prototype.writeSint32=W.prototype.rb;W.prototype.sb=function(a,b){null!=b&&(n(-9223372036854775808<=b&&0x7fffffffffffffff>b),null!=b&&(Y(this,a,0),this.a.xa(b)))};W.prototype.writeSint64=W.prototype.sb;W.prototype.$d=function(a,b){null!=b&&null!=b&&(Y(this,a,0),this.a.W(b))};W.prototype.writeSintHash64=W.prototype.$d;
W.prototype.Zd=function(a,b){null!=b&&null!=b&&(Y(this,a,0),this.a.Ta(b))};W.prototype.writeSint64String=W.prototype.Zd;W.prototype.Pa=function(a,b){null!=b&&(n(0<=b&&4294967296>b),Y(this,a,5),this.a.s(b))};W.prototype.writeFixed32=W.prototype.Pa;W.prototype.Qa=function(a,b){null!=b&&(n(0<=b&&1.8446744073709552E19>b),Y(this,a,1),this.a.V(b))};W.prototype.writeFixed64=W.prototype.Qa;W.prototype.nb=function(a,b){null!=b&&(b=U(b),Y(this,a,1),this.a.A(b.lo,b.hi))};W.prototype.writeFixed64String=W.prototype.nb;
W.prototype.Ra=function(a,b){null!=b&&(n(-2147483648<=b&&2147483648>b),Y(this,a,5),this.a.S(b))};W.prototype.writeSfixed32=W.prototype.Ra;W.prototype.Sa=function(a,b){null!=b&&(n(-9223372036854775808<=b&&0x7fffffffffffffff>b),Y(this,a,1),this.a.T(b))};W.prototype.writeSfixed64=W.prototype.Sa;W.prototype.qb=function(a,b){null!=b&&(b=sb(b),Y(this,a,1),this.a.A(b.lo,b.hi))};W.prototype.writeSfixed64String=W.prototype.qb;W.prototype.L=function(a,b){null!=b&&(Y(this,a,5),this.a.L(b))};
W.prototype.writeFloat=W.prototype.L;W.prototype.J=function(a,b){null!=b&&(Y(this,a,1),this.a.J(b))};W.prototype.writeDouble=W.prototype.J;W.prototype.I=function(a,b){null!=b&&(n("boolean"===typeof b||"number"===typeof b),Y(this,a,0),this.a.I(b))};W.prototype.writeBool=W.prototype.I;W.prototype.R=function(a,b){null!=b&&(n(-2147483648<=b&&2147483648>b),Y(this,a,0),this.a.M(b))};W.prototype.writeEnum=W.prototype.R;W.prototype.U=function(a,b){null!=b&&(a=X(this,a),this.a.U(b),Z(this,a))};
W.prototype.writeString=W.prototype.U;W.prototype.ja=function(a,b){null!=b&&(b=Ua(b),Y(this,a,2),this.a.j(b.length),tb(this,b))};W.prototype.writeBytes=W.prototype.ja;W.prototype.Rc=function(a,b,c){null!=b&&(a=X(this,a),c(b,this),Z(this,a))};W.prototype.writeMessage=W.prototype.Rc;W.prototype.Sc=function(a,b,c){null!=b&&(Y(this,1,3),Y(this,2,0),this.a.M(a),a=X(this,3),c(b,this),Z(this,a),Y(this,1,4))};W.prototype.writeMessageSet=W.prototype.Sc;
W.prototype.Oc=function(a,b,c){null!=b&&(Y(this,a,3),c(b,this),Y(this,a,4))};W.prototype.writeGroup=W.prototype.Oc;W.prototype.K=function(a,b){null!=b&&(n(8==b.length),Y(this,a,1),this.a.K(b))};W.prototype.writeFixedHash64=W.prototype.K;W.prototype.N=function(a,b){null!=b&&(n(8==b.length),Y(this,a,0),this.a.N(b))};W.prototype.writeVarintHash64=W.prototype.N;W.prototype.A=function(a,b,c){Y(this,a,1);this.a.A(b,c)};W.prototype.writeSplitFixed64=W.prototype.A;
W.prototype.l=function(a,b,c){Y(this,a,0);this.a.l(b,c)};W.prototype.writeSplitVarint64=W.prototype.l;W.prototype.tb=function(a,b,c){Y(this,a,0);var d=this.a;Ja(b,c,function(f,h){d.l(f>>>0,h>>>0)})};W.prototype.writeSplitZigzagVarint64=W.prototype.tb;W.prototype.Ed=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)vb(this,a,b[c])};W.prototype.writeRepeatedInt32=W.prototype.Ed;W.prototype.Fd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.ob(a,b[c])};
W.prototype.writeRepeatedInt32String=W.prototype.Fd;W.prototype.Gd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++){var d=b[c];null!=d&&(Y(this,a,0),this.a.ua(d))}};W.prototype.writeRepeatedInt64=W.prototype.Gd;W.prototype.Qd=function(a,b,c,d){if(null!=b)for(var f=0;f<b.length;f++)this.A(a,c(b[f]),d(b[f]))};W.prototype.writeRepeatedSplitFixed64=W.prototype.Qd;W.prototype.Rd=function(a,b,c,d){if(null!=b)for(var f=0;f<b.length;f++)this.l(a,c(b[f]),d(b[f]))};
W.prototype.writeRepeatedSplitVarint64=W.prototype.Rd;W.prototype.Sd=function(a,b,c,d){if(null!=b)for(var f=0;f<b.length;f++)this.tb(a,c(b[f]),d(b[f]))};W.prototype.writeRepeatedSplitZigzagVarint64=W.prototype.Sd;W.prototype.Hd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.ka(a,b[c])};W.prototype.writeRepeatedInt64String=W.prototype.Hd;W.prototype.Ud=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)ub(this,a,b[c])};W.prototype.writeRepeatedUint32=W.prototype.Ud;
W.prototype.Vd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.ub(a,b[c])};W.prototype.writeRepeatedUint32String=W.prototype.Vd;W.prototype.Wd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++){var d=b[c];null!=d&&(Y(this,a,0),this.a.va(d))}};W.prototype.writeRepeatedUint64=W.prototype.Wd;W.prototype.Xd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.vb(a,b[c])};W.prototype.writeRepeatedUint64String=W.prototype.Xd;
W.prototype.Md=function(a,b){if(null!=b)for(var c=0;c<b.length;c++){var d=b[c];null!=d&&(Y(this,a,0),this.a.wa(d))}};W.prototype.writeRepeatedSint32=W.prototype.Md;W.prototype.Nd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++){var d=b[c];null!=d&&(Y(this,a,0),this.a.xa(d))}};W.prototype.writeRepeatedSint64=W.prototype.Nd;W.prototype.Od=function(a,b){if(null!=b)for(var c=0;c<b.length;c++){var d=b[c];null!=d&&(Y(this,a,0),this.a.Ta(d))}};W.prototype.writeRepeatedSint64String=W.prototype.Od;
W.prototype.Pd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++){var d=b[c];null!=d&&(Y(this,a,0),this.a.W(d))}};W.prototype.writeRepeatedSintHash64=W.prototype.Pd;W.prototype.yd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.Pa(a,b[c])};W.prototype.writeRepeatedFixed32=W.prototype.yd;W.prototype.zd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.Qa(a,b[c])};W.prototype.writeRepeatedFixed64=W.prototype.zd;
W.prototype.Ad=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.nb(a,b[c])};W.prototype.writeRepeatedFixed64String=W.prototype.Ad;W.prototype.Jd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.Ra(a,b[c])};W.prototype.writeRepeatedSfixed32=W.prototype.Jd;W.prototype.Kd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.Sa(a,b[c])};W.prototype.writeRepeatedSfixed64=W.prototype.Kd;W.prototype.Ld=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.qb(a,b[c])};
W.prototype.writeRepeatedSfixed64String=W.prototype.Ld;W.prototype.Cd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.L(a,b[c])};W.prototype.writeRepeatedFloat=W.prototype.Cd;W.prototype.wd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.J(a,b[c])};W.prototype.writeRepeatedDouble=W.prototype.wd;W.prototype.ud=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.I(a,b[c])};W.prototype.writeRepeatedBool=W.prototype.ud;
W.prototype.xd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.R(a,b[c])};W.prototype.writeRepeatedEnum=W.prototype.xd;W.prototype.Td=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.U(a,b[c])};W.prototype.writeRepeatedString=W.prototype.Td;W.prototype.vd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.ja(a,b[c])};W.prototype.writeRepeatedBytes=W.prototype.vd;W.prototype.Id=function(a,b,c){if(null!=b)for(var d=0;d<b.length;d++){var f=X(this,a);c(b[d],this);Z(this,f)}};
W.prototype.writeRepeatedMessage=W.prototype.Id;W.prototype.Dd=function(a,b,c){if(null!=b)for(var d=0;d<b.length;d++)Y(this,a,3),c(b[d],this),Y(this,a,4)};W.prototype.writeRepeatedGroup=W.prototype.Dd;W.prototype.Bd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.K(a,b[c])};W.prototype.writeRepeatedFixedHash64=W.prototype.Bd;W.prototype.Yd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.N(a,b[c])};W.prototype.writeRepeatedVarintHash64=W.prototype.Yd;
W.prototype.ad=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.M(b[c]);Z(this,a)}};W.prototype.writePackedInt32=W.prototype.ad;W.prototype.bd=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.M(parseInt(b[c],10));Z(this,a)}};W.prototype.writePackedInt32String=W.prototype.bd;W.prototype.cd=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.ua(b[c]);Z(this,a)}};W.prototype.writePackedInt64=W.prototype.cd;
W.prototype.md=function(a,b,c,d){if(null!=b){a=X(this,a);for(var f=0;f<b.length;f++)this.a.A(c(b[f]),d(b[f]));Z(this,a)}};W.prototype.writePackedSplitFixed64=W.prototype.md;W.prototype.nd=function(a,b,c,d){if(null!=b){a=X(this,a);for(var f=0;f<b.length;f++)this.a.l(c(b[f]),d(b[f]));Z(this,a)}};W.prototype.writePackedSplitVarint64=W.prototype.nd;W.prototype.od=function(a,b,c,d){if(null!=b){a=X(this,a);for(var f=this.a,h=0;h<b.length;h++)Ja(c(b[h]),d(b[h]),function(m,t){f.l(m>>>0,t>>>0)});Z(this,a)}};
W.prototype.writePackedSplitZigzagVarint64=W.prototype.od;W.prototype.dd=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++){var d=sb(b[c]);this.a.l(d.lo,d.hi)}Z(this,a)}};W.prototype.writePackedInt64String=W.prototype.dd;W.prototype.pd=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.j(b[c]);Z(this,a)}};W.prototype.writePackedUint32=W.prototype.pd;
W.prototype.qd=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.j(parseInt(b[c],10));Z(this,a)}};W.prototype.writePackedUint32String=W.prototype.qd;W.prototype.rd=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.va(b[c]);Z(this,a)}};W.prototype.writePackedUint64=W.prototype.rd;W.prototype.sd=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++){var d=U(b[c]);this.a.l(d.lo,d.hi)}Z(this,a)}};
W.prototype.writePackedUint64String=W.prototype.sd;W.prototype.hd=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.wa(b[c]);Z(this,a)}};W.prototype.writePackedSint32=W.prototype.hd;W.prototype.jd=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.xa(b[c]);Z(this,a)}};W.prototype.writePackedSint64=W.prototype.jd;W.prototype.kd=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.W(H(b[c]));Z(this,a)}};
W.prototype.writePackedSint64String=W.prototype.kd;W.prototype.ld=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.W(b[c]);Z(this,a)}};W.prototype.writePackedSintHash64=W.prototype.ld;W.prototype.Wc=function(a,b){if(null!=b&&b.length)for(Y(this,a,2),this.a.j(4*b.length),a=0;a<b.length;a++)this.a.s(b[a])};W.prototype.writePackedFixed32=W.prototype.Wc;W.prototype.Xc=function(a,b){if(null!=b&&b.length)for(Y(this,a,2),this.a.j(8*b.length),a=0;a<b.length;a++)this.a.V(b[a])};
W.prototype.writePackedFixed64=W.prototype.Xc;W.prototype.Yc=function(a,b){if(null!=b&&b.length)for(Y(this,a,2),this.a.j(8*b.length),a=0;a<b.length;a++){var c=U(b[a]);this.a.A(c.lo,c.hi)}};W.prototype.writePackedFixed64String=W.prototype.Yc;W.prototype.ed=function(a,b){if(null!=b&&b.length)for(Y(this,a,2),this.a.j(4*b.length),a=0;a<b.length;a++)this.a.S(b[a])};W.prototype.writePackedSfixed32=W.prototype.ed;
W.prototype.fd=function(a,b){if(null!=b&&b.length)for(Y(this,a,2),this.a.j(8*b.length),a=0;a<b.length;a++)this.a.T(b[a])};W.prototype.writePackedSfixed64=W.prototype.fd;W.prototype.gd=function(a,b){if(null!=b&&b.length)for(Y(this,a,2),this.a.j(8*b.length),a=0;a<b.length;a++)this.a.ka(b[a])};W.prototype.writePackedSfixed64String=W.prototype.gd;W.prototype.$c=function(a,b){if(null!=b&&b.length)for(Y(this,a,2),this.a.j(4*b.length),a=0;a<b.length;a++)this.a.L(b[a])};W.prototype.writePackedFloat=W.prototype.$c;
W.prototype.Uc=function(a,b){if(null!=b&&b.length)for(Y(this,a,2),this.a.j(8*b.length),a=0;a<b.length;a++)this.a.J(b[a])};W.prototype.writePackedDouble=W.prototype.Uc;W.prototype.Tc=function(a,b){if(null!=b&&b.length)for(Y(this,a,2),this.a.j(b.length),a=0;a<b.length;a++)this.a.I(b[a])};W.prototype.writePackedBool=W.prototype.Tc;W.prototype.Vc=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.R(b[c]);Z(this,a)}};W.prototype.writePackedEnum=W.prototype.Vc;
W.prototype.Zc=function(a,b){if(null!=b&&b.length)for(Y(this,a,2),this.a.j(8*b.length),a=0;a<b.length;a++)this.a.K(b[a])};W.prototype.writePackedFixedHash64=W.prototype.Zc;W.prototype.td=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.N(b[c]);Z(this,a)}};W.prototype.writePackedVarintHash64=W.prototype.td;"object"===typeof exports&&(exports.debug=R,exports.Map=r,exports.Message=N,exports.BinaryReader=J,exports.BinaryWriter=W,exports.ExtensionFieldInfo=Ya,exports.ExtensionFieldBinaryInfo=Za,exports.exportSymbol=ma,exports.inherits=na,exports.object={extend:pa},exports.typeOf=k);

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
// source: douyin.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

goog.exportSymbol('proto.douyin.Against', null, global);
goog.exportSymbol('proto.douyin.Border', null, global);
goog.exportSymbol('proto.douyin.CategoryInfo', null, global);
goog.exportSymbol('proto.douyin.ChatMessage', null, global);
goog.exportSymbol('proto.douyin.CommentTypeTag', null, global);
goog.exportSymbol('proto.douyin.Common', null, global);
goog.exportSymbol('proto.douyin.CommonTextMessage', null, global);
goog.exportSymbol('proto.douyin.ControlMessage', null, global);
goog.exportSymbol('proto.douyin.DisplayControlInfo', null, global);
goog.exportSymbol('proto.douyin.DoubleLikeDetail', null, global);
goog.exportSymbol('proto.douyin.EffectConfig', null, global);
goog.exportSymbol('proto.douyin.EmojiChatMessage', null, global);
goog.exportSymbol('proto.douyin.EpisodeChatMessage', null, global);
goog.exportSymbol('proto.douyin.ExtList', null, global);
goog.exportSymbol('proto.douyin.FansClub', null, global);
goog.exportSymbol('proto.douyin.FansClubData', null, global);
goog.exportSymbol('proto.douyin.FansclubMessage', null, global);
goog.exportSymbol('proto.douyin.FollowInfo', null, global);
goog.exportSymbol('proto.douyin.GiftIMPriority', null, global);
goog.exportSymbol('proto.douyin.GiftMessage', null, global);
goog.exportSymbol('proto.douyin.GiftStruct', null, global);
goog.exportSymbol('proto.douyin.GradeBuffInfo', null, global);
goog.exportSymbol('proto.douyin.GradeIcon', null, global);
goog.exportSymbol('proto.douyin.HeadersList', null, global);
goog.exportSymbol('proto.douyin.Image', null, global);
goog.exportSymbol('proto.douyin.ImageContent', null, global);
goog.exportSymbol('proto.douyin.LandscapeAreaCommon', null, global);
goog.exportSymbol('proto.douyin.LikeMessage', null, global);
goog.exportSymbol('proto.douyin.LiveShoppingMessage', null, global);
goog.exportSymbol('proto.douyin.MatchAgainstScoreMessage', null, global);
goog.exportSymbol('proto.douyin.MemberMessage', null, global);
goog.exportSymbol('proto.douyin.Message', null, global);
goog.exportSymbol('proto.douyin.NinePatchSetting', null, global);
goog.exportSymbol('proto.douyin.PatternRef', null, global);
goog.exportSymbol('proto.douyin.PayGrade', null, global);
goog.exportSymbol('proto.douyin.PicoDisplayInfo', null, global);
goog.exportSymbol('proto.douyin.PreMessage', null, global);
goog.exportSymbol('proto.douyin.ProductChangeMessage', null, global);
goog.exportSymbol('proto.douyin.ProductInfo', null, global);
goog.exportSymbol('proto.douyin.PublicAreaCommon', null, global);
goog.exportSymbol('proto.douyin.PushFrame', null, global);
goog.exportSymbol('proto.douyin.Response', null, global);
goog.exportSymbol('proto.douyin.RoomMessage', null, global);
goog.exportSymbol('proto.douyin.RoomMsgTypeEnum', null, global);
goog.exportSymbol('proto.douyin.RoomRankMessage', null, global);
goog.exportSymbol('proto.douyin.RoomRankMessage.RoomRank', null, global);
goog.exportSymbol('proto.douyin.RoomStatsMessage', null, global);
goog.exportSymbol('proto.douyin.RoomUserSeqMessage', null, global);
goog.exportSymbol('proto.douyin.RoomUserSeqMessageContributor', null, global);
goog.exportSymbol('proto.douyin.Rsp', null, global);
goog.exportSymbol('proto.douyin.Rsp.F', null, global);
goog.exportSymbol('proto.douyin.SendMessageBody', null, global);
goog.exportSymbol('proto.douyin.SocialMessage', null, global);
goog.exportSymbol('proto.douyin.Text', null, global);
goog.exportSymbol('proto.douyin.TextEffect', null, global);
goog.exportSymbol('proto.douyin.TextEffectDetail', null, global);
goog.exportSymbol('proto.douyin.TextFormat', null, global);
goog.exportSymbol('proto.douyin.TextPiece', null, global);
goog.exportSymbol('proto.douyin.TextPieceGift', null, global);
goog.exportSymbol('proto.douyin.TextPieceHeart', null, global);
goog.exportSymbol('proto.douyin.TextPieceImage', null, global);
goog.exportSymbol('proto.douyin.TextPiecePatternRef', null, global);
goog.exportSymbol('proto.douyin.TextPieceUser', null, global);
goog.exportSymbol('proto.douyin.UpdateFanTicketMessage', null, global);
goog.exportSymbol('proto.douyin.User', null, global);
goog.exportSymbol('proto.douyin.UserBadge', null, global);
goog.exportSymbol('proto.douyin.kk', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.douyin.Response.repeatedFields_, null);
};
goog.inherits(proto.douyin.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.Response.displayName = 'proto.douyin.Response';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.Message = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.douyin.Message, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.Message.displayName = 'proto.douyin.Message';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.EmojiChatMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.douyin.EmojiChatMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.EmojiChatMessage.displayName = 'proto.douyin.EmojiChatMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.ChatMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.douyin.ChatMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.ChatMessage.displayName = 'proto.douyin.ChatMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.LandscapeAreaCommon = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.douyin.LandscapeAreaCommon.repeatedFields_, null);
};
goog.inherits(proto.douyin.LandscapeAreaCommon, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.LandscapeAreaCommon.displayName = 'proto.douyin.LandscapeAreaCommon';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.RoomUserSeqMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.douyin.RoomUserSeqMessage.repeatedFields_, null);
};
goog.inherits(proto.douyin.RoomUserSeqMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.RoomUserSeqMessage.displayName = 'proto.douyin.RoomUserSeqMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.CommonTextMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.douyin.CommonTextMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.CommonTextMessage.displayName = 'proto.douyin.CommonTextMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.UpdateFanTicketMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.douyin.UpdateFanTicketMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.UpdateFanTicketMessage.displayName = 'proto.douyin.UpdateFanTicketMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.RoomUserSeqMessageContributor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.douyin.RoomUserSeqMessageContributor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.RoomUserSeqMessageContributor.displayName = 'proto.douyin.RoomUserSeqMessageContributor';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.GiftMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.douyin.GiftMessage.repeatedFields_, null);
};
goog.inherits(proto.douyin.GiftMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.GiftMessage.displayName = 'proto.douyin.GiftMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.GiftStruct = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.douyin.GiftStruct, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.GiftStruct.displayName = 'proto.douyin.GiftStruct';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.GiftIMPriority = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.douyin.GiftIMPriority.repeatedFields_, null);
};
goog.inherits(proto.douyin.GiftIMPriority, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.GiftIMPriority.displayName = 'proto.douyin.GiftIMPriority';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.TextEffect = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.douyin.TextEffect, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.TextEffect.displayName = 'proto.douyin.TextEffect';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.TextEffectDetail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.douyin.TextEffectDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.TextEffectDetail.displayName = 'proto.douyin.TextEffectDetail';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.MemberMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.douyin.MemberMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.MemberMessage.displayName = 'proto.douyin.MemberMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.PublicAreaCommon = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.douyin.PublicAreaCommon, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.PublicAreaCommon.displayName = 'proto.douyin.PublicAreaCommon';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.EffectConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.douyin.EffectConfig.repeatedFields_, null);
};
goog.inherits(proto.douyin.EffectConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.EffectConfig.displayName = 'proto.douyin.EffectConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.Text = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.douyin.Text.repeatedFields_, null);
};
goog.inherits(proto.douyin.Text, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.Text.displayName = 'proto.douyin.Text';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.TextPiece = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.douyin.TextPiece, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.TextPiece.displayName = 'proto.douyin.TextPiece';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.TextPieceImage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.douyin.TextPieceImage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.TextPieceImage.displayName = 'proto.douyin.TextPieceImage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.TextPiecePatternRef = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.douyin.TextPiecePatternRef, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.TextPiecePatternRef.displayName = 'proto.douyin.TextPiecePatternRef';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.TextPieceHeart = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.douyin.TextPieceHeart, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.TextPieceHeart.displayName = 'proto.douyin.TextPieceHeart';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.TextPieceGift = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.douyin.TextPieceGift, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.TextPieceGift.displayName = 'proto.douyin.TextPieceGift';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.PatternRef = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.douyin.PatternRef, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.PatternRef.displayName = 'proto.douyin.PatternRef';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.TextPieceUser = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.douyin.TextPieceUser, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.TextPieceUser.displayName = 'proto.douyin.TextPieceUser';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.TextFormat = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.douyin.TextFormat, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.TextFormat.displayName = 'proto.douyin.TextFormat';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.LikeMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.douyin.LikeMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.LikeMessage.displayName = 'proto.douyin.LikeMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.SocialMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.douyin.SocialMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.SocialMessage.displayName = 'proto.douyin.SocialMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.PicoDisplayInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.douyin.PicoDisplayInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.PicoDisplayInfo.displayName = 'proto.douyin.PicoDisplayInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.DoubleLikeDetail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.douyin.DoubleLikeDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.DoubleLikeDetail.displayName = 'proto.douyin.DoubleLikeDetail';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.DisplayControlInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.douyin.DisplayControlInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.DisplayControlInfo.displayName = 'proto.douyin.DisplayControlInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.EpisodeChatMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.douyin.EpisodeChatMessage.repeatedFields_, null);
};
goog.inherits(proto.douyin.EpisodeChatMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.EpisodeChatMessage.displayName = 'proto.douyin.EpisodeChatMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.MatchAgainstScoreMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.douyin.MatchAgainstScoreMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.MatchAgainstScoreMessage.displayName = 'proto.douyin.MatchAgainstScoreMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.Against = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.douyin.Against, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.Against.displayName = 'proto.douyin.Against';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.Common = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.douyin.Common, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.Common.displayName = 'proto.douyin.Common';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.User = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, proto.douyin.User.repeatedFields_, null);
};
goog.inherits(proto.douyin.User, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.User.displayName = 'proto.douyin.User';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.PayGrade = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, proto.douyin.PayGrade.repeatedFields_, null);
};
goog.inherits(proto.douyin.PayGrade, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.PayGrade.displayName = 'proto.douyin.PayGrade';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.FansClub = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.douyin.FansClub, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.FansClub.displayName = 'proto.douyin.FansClub';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.FansClubData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.douyin.FansClubData.repeatedFields_, null);
};
goog.inherits(proto.douyin.FansClubData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.FansClubData.displayName = 'proto.douyin.FansClubData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.UserBadge = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.douyin.UserBadge, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.UserBadge.displayName = 'proto.douyin.UserBadge';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.GradeBuffInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.douyin.GradeBuffInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.GradeBuffInfo.displayName = 'proto.douyin.GradeBuffInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.Border = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.douyin.Border, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.Border.displayName = 'proto.douyin.Border';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.GradeIcon = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.douyin.GradeIcon, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.GradeIcon.displayName = 'proto.douyin.GradeIcon';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.FollowInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.douyin.FollowInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.FollowInfo.displayName = 'proto.douyin.FollowInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.Image = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.douyin.Image.repeatedFields_, null);
};
goog.inherits(proto.douyin.Image, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.Image.displayName = 'proto.douyin.Image';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.NinePatchSetting = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.douyin.NinePatchSetting.repeatedFields_, null);
};
goog.inherits(proto.douyin.NinePatchSetting, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.NinePatchSetting.displayName = 'proto.douyin.NinePatchSetting';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.ImageContent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.douyin.ImageContent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.ImageContent.displayName = 'proto.douyin.ImageContent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.PushFrame = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.douyin.PushFrame.repeatedFields_, null);
};
goog.inherits(proto.douyin.PushFrame, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.PushFrame.displayName = 'proto.douyin.PushFrame';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.kk = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.douyin.kk, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.kk.displayName = 'proto.douyin.kk';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.SendMessageBody = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.douyin.SendMessageBody.repeatedFields_, null);
};
goog.inherits(proto.douyin.SendMessageBody, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.SendMessageBody.displayName = 'proto.douyin.SendMessageBody';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.ExtList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.douyin.ExtList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.ExtList.displayName = 'proto.douyin.ExtList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.Rsp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.douyin.Rsp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.Rsp.displayName = 'proto.douyin.Rsp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.Rsp.F = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.douyin.Rsp.F, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.Rsp.F.displayName = 'proto.douyin.Rsp.F';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.PreMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.douyin.PreMessage.repeatedFields_, null);
};
goog.inherits(proto.douyin.PreMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.PreMessage.displayName = 'proto.douyin.PreMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.HeadersList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.douyin.HeadersList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.HeadersList.displayName = 'proto.douyin.HeadersList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.LiveShoppingMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.douyin.LiveShoppingMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.LiveShoppingMessage.displayName = 'proto.douyin.LiveShoppingMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.RoomStatsMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.douyin.RoomStatsMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.RoomStatsMessage.displayName = 'proto.douyin.RoomStatsMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.ProductInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.douyin.ProductInfo.repeatedFields_, null);
};
goog.inherits(proto.douyin.ProductInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.ProductInfo.displayName = 'proto.douyin.ProductInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.CategoryInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.douyin.CategoryInfo.repeatedFields_, null);
};
goog.inherits(proto.douyin.CategoryInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.CategoryInfo.displayName = 'proto.douyin.CategoryInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.ProductChangeMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.douyin.ProductChangeMessage.repeatedFields_, null);
};
goog.inherits(proto.douyin.ProductChangeMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.ProductChangeMessage.displayName = 'proto.douyin.ProductChangeMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.ControlMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.douyin.ControlMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.ControlMessage.displayName = 'proto.douyin.ControlMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.FansclubMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.douyin.FansclubMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.FansclubMessage.displayName = 'proto.douyin.FansclubMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.RoomRankMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.douyin.RoomRankMessage.repeatedFields_, null);
};
goog.inherits(proto.douyin.RoomRankMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.RoomRankMessage.displayName = 'proto.douyin.RoomRankMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.RoomRankMessage.RoomRank = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.douyin.RoomRankMessage.RoomRank, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.RoomRankMessage.RoomRank.displayName = 'proto.douyin.RoomRankMessage.RoomRank';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.douyin.RoomMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.douyin.RoomMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.douyin.RoomMessage.displayName = 'proto.douyin.RoomMessage';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.douyin.Response.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.Response} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    messageslistList: jspb.Message.toObjectList(msg.getMessageslistList(),
    proto.douyin.Message.toObject, includeInstance),
    cursor: jspb.Message.getFieldWithDefault(msg, 2, ""),
    fetchinterval: jspb.Message.getFieldWithDefault(msg, 3, 0),
    now: jspb.Message.getFieldWithDefault(msg, 4, 0),
    internalext: jspb.Message.getFieldWithDefault(msg, 5, ""),
    fetchtype: jspb.Message.getFieldWithDefault(msg, 6, 0),
    routeparamsMap: (f = msg.getRouteparamsMap()) ? f.toObject(includeInstance, undefined) : [],
    heartbeatduration: jspb.Message.getFieldWithDefault(msg, 8, 0),
    needack: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    pushserver: jspb.Message.getFieldWithDefault(msg, 10, ""),
    livecursor: jspb.Message.getFieldWithDefault(msg, 11, ""),
    historynomore: jspb.Message.getBooleanFieldWithDefault(msg, 12, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.Response}
 */
proto.douyin.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.Response;
  return proto.douyin.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.Response}
 */
proto.douyin.Response.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.douyin.Message;
      reader.readMessage(value,proto.douyin.Message.deserializeBinaryFromReader);
      msg.addMessageslist(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCursor(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFetchinterval(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNow(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setInternalext(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFetchtype(value);
      break;
    case 7:
      var value = msg.getRouteparamsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setHeartbeatduration(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNeedack(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setPushserver(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setLivecursor(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHistorynomore(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.Response} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.Response.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessageslistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.douyin.Message.serializeBinaryToWriter
    );
  }
  f = message.getCursor();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFetchinterval();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getNow();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getInternalext();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getFetchtype();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getRouteparamsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(7, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getHeartbeatduration();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = message.getNeedack();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getPushserver();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getLivecursor();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getHistorynomore();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
};


/**
 * repeated Message messagesList = 1;
 * @return {!Array<!proto.douyin.Message>}
 */
proto.douyin.Response.prototype.getMessageslistList = function() {
  return /** @type{!Array<!proto.douyin.Message>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.douyin.Message, 1));
};


/**
 * @param {!Array<!proto.douyin.Message>} value
 * @return {!proto.douyin.Response} returns this
*/
proto.douyin.Response.prototype.setMessageslistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.douyin.Message=} opt_value
 * @param {number=} opt_index
 * @return {!proto.douyin.Message}
 */
proto.douyin.Response.prototype.addMessageslist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.douyin.Message, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.douyin.Response} returns this
 */
proto.douyin.Response.prototype.clearMessageslistList = function() {
  return this.setMessageslistList([]);
};


/**
 * optional string cursor = 2;
 * @return {string}
 */
proto.douyin.Response.prototype.getCursor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.Response} returns this
 */
proto.douyin.Response.prototype.setCursor = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 fetchInterval = 3;
 * @return {number}
 */
proto.douyin.Response.prototype.getFetchinterval = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.Response} returns this
 */
proto.douyin.Response.prototype.setFetchinterval = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 now = 4;
 * @return {number}
 */
proto.douyin.Response.prototype.getNow = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.Response} returns this
 */
proto.douyin.Response.prototype.setNow = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string internalExt = 5;
 * @return {string}
 */
proto.douyin.Response.prototype.getInternalext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.Response} returns this
 */
proto.douyin.Response.prototype.setInternalext = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional uint32 fetchType = 6;
 * @return {number}
 */
proto.douyin.Response.prototype.getFetchtype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.Response} returns this
 */
proto.douyin.Response.prototype.setFetchtype = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * map<string, string> routeParams = 7;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.douyin.Response.prototype.getRouteparamsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 7, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.douyin.Response} returns this
 */
proto.douyin.Response.prototype.clearRouteparamsMap = function() {
  this.getRouteparamsMap().clear();
  return this;};


/**
 * optional uint64 heartbeatDuration = 8;
 * @return {number}
 */
proto.douyin.Response.prototype.getHeartbeatduration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.Response} returns this
 */
proto.douyin.Response.prototype.setHeartbeatduration = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional bool needAck = 9;
 * @return {boolean}
 */
proto.douyin.Response.prototype.getNeedack = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.douyin.Response} returns this
 */
proto.douyin.Response.prototype.setNeedack = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional string pushServer = 10;
 * @return {string}
 */
proto.douyin.Response.prototype.getPushserver = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.Response} returns this
 */
proto.douyin.Response.prototype.setPushserver = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string liveCursor = 11;
 * @return {string}
 */
proto.douyin.Response.prototype.getLivecursor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.Response} returns this
 */
proto.douyin.Response.prototype.setLivecursor = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional bool historyNoMore = 12;
 * @return {boolean}
 */
proto.douyin.Response.prototype.getHistorynomore = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.douyin.Response} returns this
 */
proto.douyin.Response.prototype.setHistorynomore = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.Message.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.Message.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.Message} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.Message.toObject = function(includeInstance, msg) {
  var f, obj = {
    method: jspb.Message.getFieldWithDefault(msg, 1, ""),
    payload: msg.getPayload_asB64(),
    msgid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    msgtype: jspb.Message.getFieldWithDefault(msg, 4, 0),
    offset: jspb.Message.getFieldWithDefault(msg, 5, 0),
    needwrdsstore: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    wrdsversion: jspb.Message.getFieldWithDefault(msg, 7, 0),
    wrdssubkey: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.Message}
 */
proto.douyin.Message.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.Message;
  return proto.douyin.Message.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.Message} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.Message}
 */
proto.douyin.Message.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMethod(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPayload(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMsgid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMsgtype(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOffset(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNeedwrdsstore(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWrdsversion(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setWrdssubkey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.Message.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.Message.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.Message} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.Message.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMethod();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPayload_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getMsgid();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getMsgtype();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getNeedwrdsstore();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getWrdsversion();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getWrdssubkey();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string method = 1;
 * @return {string}
 */
proto.douyin.Message.prototype.getMethod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.Message} returns this
 */
proto.douyin.Message.prototype.setMethod = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes payload = 2;
 * @return {!(string|Uint8Array)}
 */
proto.douyin.Message.prototype.getPayload = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes payload = 2;
 * This is a type-conversion wrapper around `getPayload()`
 * @return {string}
 */
proto.douyin.Message.prototype.getPayload_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPayload()));
};


/**
 * optional bytes payload = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPayload()`
 * @return {!Uint8Array}
 */
proto.douyin.Message.prototype.getPayload_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPayload()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.douyin.Message} returns this
 */
proto.douyin.Message.prototype.setPayload = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional int64 msgId = 3;
 * @return {number}
 */
proto.douyin.Message.prototype.getMsgid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.Message} returns this
 */
proto.douyin.Message.prototype.setMsgid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 msgType = 4;
 * @return {number}
 */
proto.douyin.Message.prototype.getMsgtype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.Message} returns this
 */
proto.douyin.Message.prototype.setMsgtype = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 offset = 5;
 * @return {number}
 */
proto.douyin.Message.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.Message} returns this
 */
proto.douyin.Message.prototype.setOffset = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional bool needWrdsStore = 6;
 * @return {boolean}
 */
proto.douyin.Message.prototype.getNeedwrdsstore = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.douyin.Message} returns this
 */
proto.douyin.Message.prototype.setNeedwrdsstore = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional int64 wrdsVersion = 7;
 * @return {number}
 */
proto.douyin.Message.prototype.getWrdsversion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.Message} returns this
 */
proto.douyin.Message.prototype.setWrdsversion = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string wrdsSubKey = 8;
 * @return {string}
 */
proto.douyin.Message.prototype.getWrdssubkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.Message} returns this
 */
proto.douyin.Message.prototype.setWrdssubkey = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.EmojiChatMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.EmojiChatMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.EmojiChatMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.EmojiChatMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && proto.douyin.Common.toObject(includeInstance, f),
    user: (f = msg.getUser()) && proto.douyin.User.toObject(includeInstance, f),
    emojiid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    emojicontent: (f = msg.getEmojicontent()) && proto.douyin.Text.toObject(includeInstance, f),
    defaultcontent: jspb.Message.getFieldWithDefault(msg, 5, ""),
    backgroundimage: (f = msg.getBackgroundimage()) && proto.douyin.Image.toObject(includeInstance, f),
    fromintercom: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    intercomhideusercard: jspb.Message.getBooleanFieldWithDefault(msg, 8, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.EmojiChatMessage}
 */
proto.douyin.EmojiChatMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.EmojiChatMessage;
  return proto.douyin.EmojiChatMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.EmojiChatMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.EmojiChatMessage}
 */
proto.douyin.EmojiChatMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.douyin.Common;
      reader.readMessage(value,proto.douyin.Common.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new proto.douyin.User;
      reader.readMessage(value,proto.douyin.User.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEmojiid(value);
      break;
    case 4:
      var value = new proto.douyin.Text;
      reader.readMessage(value,proto.douyin.Text.deserializeBinaryFromReader);
      msg.setEmojicontent(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultcontent(value);
      break;
    case 6:
      var value = new proto.douyin.Image;
      reader.readMessage(value,proto.douyin.Image.deserializeBinaryFromReader);
      msg.setBackgroundimage(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFromintercom(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIntercomhideusercard(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.EmojiChatMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.EmojiChatMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.EmojiChatMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.EmojiChatMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.douyin.Common.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.douyin.User.serializeBinaryToWriter
    );
  }
  f = message.getEmojiid();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getEmojicontent();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.douyin.Text.serializeBinaryToWriter
    );
  }
  f = message.getDefaultcontent();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getBackgroundimage();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.douyin.Image.serializeBinaryToWriter
    );
  }
  f = message.getFromintercom();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getIntercomhideusercard();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
};


/**
 * optional Common common = 1;
 * @return {?proto.douyin.Common}
 */
proto.douyin.EmojiChatMessage.prototype.getCommon = function() {
  return /** @type{?proto.douyin.Common} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Common, 1));
};


/**
 * @param {?proto.douyin.Common|undefined} value
 * @return {!proto.douyin.EmojiChatMessage} returns this
*/
proto.douyin.EmojiChatMessage.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.EmojiChatMessage} returns this
 */
proto.douyin.EmojiChatMessage.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.EmojiChatMessage.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional User user = 2;
 * @return {?proto.douyin.User}
 */
proto.douyin.EmojiChatMessage.prototype.getUser = function() {
  return /** @type{?proto.douyin.User} */ (
    jspb.Message.getWrapperField(this, proto.douyin.User, 2));
};


/**
 * @param {?proto.douyin.User|undefined} value
 * @return {!proto.douyin.EmojiChatMessage} returns this
*/
proto.douyin.EmojiChatMessage.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.EmojiChatMessage} returns this
 */
proto.douyin.EmojiChatMessage.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.EmojiChatMessage.prototype.hasUser = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 emojiId = 3;
 * @return {number}
 */
proto.douyin.EmojiChatMessage.prototype.getEmojiid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.EmojiChatMessage} returns this
 */
proto.douyin.EmojiChatMessage.prototype.setEmojiid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional Text emojiContent = 4;
 * @return {?proto.douyin.Text}
 */
proto.douyin.EmojiChatMessage.prototype.getEmojicontent = function() {
  return /** @type{?proto.douyin.Text} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Text, 4));
};


/**
 * @param {?proto.douyin.Text|undefined} value
 * @return {!proto.douyin.EmojiChatMessage} returns this
*/
proto.douyin.EmojiChatMessage.prototype.setEmojicontent = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.EmojiChatMessage} returns this
 */
proto.douyin.EmojiChatMessage.prototype.clearEmojicontent = function() {
  return this.setEmojicontent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.EmojiChatMessage.prototype.hasEmojicontent = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string defaultContent = 5;
 * @return {string}
 */
proto.douyin.EmojiChatMessage.prototype.getDefaultcontent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.EmojiChatMessage} returns this
 */
proto.douyin.EmojiChatMessage.prototype.setDefaultcontent = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional Image backgroundImage = 6;
 * @return {?proto.douyin.Image}
 */
proto.douyin.EmojiChatMessage.prototype.getBackgroundimage = function() {
  return /** @type{?proto.douyin.Image} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Image, 6));
};


/**
 * @param {?proto.douyin.Image|undefined} value
 * @return {!proto.douyin.EmojiChatMessage} returns this
*/
proto.douyin.EmojiChatMessage.prototype.setBackgroundimage = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.EmojiChatMessage} returns this
 */
proto.douyin.EmojiChatMessage.prototype.clearBackgroundimage = function() {
  return this.setBackgroundimage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.EmojiChatMessage.prototype.hasBackgroundimage = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool fromIntercom = 7;
 * @return {boolean}
 */
proto.douyin.EmojiChatMessage.prototype.getFromintercom = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.douyin.EmojiChatMessage} returns this
 */
proto.douyin.EmojiChatMessage.prototype.setFromintercom = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional bool intercomHideUserCard = 8;
 * @return {boolean}
 */
proto.douyin.EmojiChatMessage.prototype.getIntercomhideusercard = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.douyin.EmojiChatMessage} returns this
 */
proto.douyin.EmojiChatMessage.prototype.setIntercomhideusercard = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.ChatMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.ChatMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.ChatMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.ChatMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && proto.douyin.Common.toObject(includeInstance, f),
    user: (f = msg.getUser()) && proto.douyin.User.toObject(includeInstance, f),
    content: jspb.Message.getFieldWithDefault(msg, 3, ""),
    visibletosender: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    backgroundimage: (f = msg.getBackgroundimage()) && proto.douyin.Image.toObject(includeInstance, f),
    fullscreentextcolor: jspb.Message.getFieldWithDefault(msg, 6, ""),
    backgroundimagev2: (f = msg.getBackgroundimagev2()) && proto.douyin.Image.toObject(includeInstance, f),
    publicareacommon: (f = msg.getPublicareacommon()) && proto.douyin.PublicAreaCommon.toObject(includeInstance, f),
    giftimage: (f = msg.getGiftimage()) && proto.douyin.Image.toObject(includeInstance, f),
    agreemsgid: jspb.Message.getFieldWithDefault(msg, 11, 0),
    prioritylevel: jspb.Message.getFieldWithDefault(msg, 12, 0),
    landscapeareacommon: (f = msg.getLandscapeareacommon()) && proto.douyin.LandscapeAreaCommon.toObject(includeInstance, f),
    eventtime: jspb.Message.getFieldWithDefault(msg, 15, 0),
    sendreview: jspb.Message.getBooleanFieldWithDefault(msg, 16, false),
    fromintercom: jspb.Message.getBooleanFieldWithDefault(msg, 17, false),
    intercomhideusercard: jspb.Message.getBooleanFieldWithDefault(msg, 18, false),
    chatby: jspb.Message.getFieldWithDefault(msg, 20, ""),
    individualchatpriority: jspb.Message.getFieldWithDefault(msg, 21, 0),
    rtfcontent: (f = msg.getRtfcontent()) && proto.douyin.Text.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.ChatMessage}
 */
proto.douyin.ChatMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.ChatMessage;
  return proto.douyin.ChatMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.ChatMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.ChatMessage}
 */
proto.douyin.ChatMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.douyin.Common;
      reader.readMessage(value,proto.douyin.Common.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new proto.douyin.User;
      reader.readMessage(value,proto.douyin.User.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVisibletosender(value);
      break;
    case 5:
      var value = new proto.douyin.Image;
      reader.readMessage(value,proto.douyin.Image.deserializeBinaryFromReader);
      msg.setBackgroundimage(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setFullscreentextcolor(value);
      break;
    case 7:
      var value = new proto.douyin.Image;
      reader.readMessage(value,proto.douyin.Image.deserializeBinaryFromReader);
      msg.setBackgroundimagev2(value);
      break;
    case 9:
      var value = new proto.douyin.PublicAreaCommon;
      reader.readMessage(value,proto.douyin.PublicAreaCommon.deserializeBinaryFromReader);
      msg.setPublicareacommon(value);
      break;
    case 10:
      var value = new proto.douyin.Image;
      reader.readMessage(value,proto.douyin.Image.deserializeBinaryFromReader);
      msg.setGiftimage(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAgreemsgid(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPrioritylevel(value);
      break;
    case 13:
      var value = new proto.douyin.LandscapeAreaCommon;
      reader.readMessage(value,proto.douyin.LandscapeAreaCommon.deserializeBinaryFromReader);
      msg.setLandscapeareacommon(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setEventtime(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSendreview(value);
      break;
    case 17:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFromintercom(value);
      break;
    case 18:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIntercomhideusercard(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setChatby(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIndividualchatpriority(value);
      break;
    case 22:
      var value = new proto.douyin.Text;
      reader.readMessage(value,proto.douyin.Text.deserializeBinaryFromReader);
      msg.setRtfcontent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.ChatMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.ChatMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.ChatMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.ChatMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.douyin.Common.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.douyin.User.serializeBinaryToWriter
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getVisibletosender();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getBackgroundimage();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.douyin.Image.serializeBinaryToWriter
    );
  }
  f = message.getFullscreentextcolor();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getBackgroundimagev2();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.douyin.Image.serializeBinaryToWriter
    );
  }
  f = message.getPublicareacommon();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.douyin.PublicAreaCommon.serializeBinaryToWriter
    );
  }
  f = message.getGiftimage();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.douyin.Image.serializeBinaryToWriter
    );
  }
  f = message.getAgreemsgid();
  if (f !== 0) {
    writer.writeUint64(
      11,
      f
    );
  }
  f = message.getPrioritylevel();
  if (f !== 0) {
    writer.writeUint32(
      12,
      f
    );
  }
  f = message.getLandscapeareacommon();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.douyin.LandscapeAreaCommon.serializeBinaryToWriter
    );
  }
  f = message.getEventtime();
  if (f !== 0) {
    writer.writeUint64(
      15,
      f
    );
  }
  f = message.getSendreview();
  if (f) {
    writer.writeBool(
      16,
      f
    );
  }
  f = message.getFromintercom();
  if (f) {
    writer.writeBool(
      17,
      f
    );
  }
  f = message.getIntercomhideusercard();
  if (f) {
    writer.writeBool(
      18,
      f
    );
  }
  f = message.getChatby();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getIndividualchatpriority();
  if (f !== 0) {
    writer.writeUint32(
      21,
      f
    );
  }
  f = message.getRtfcontent();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.douyin.Text.serializeBinaryToWriter
    );
  }
};


/**
 * optional Common common = 1;
 * @return {?proto.douyin.Common}
 */
proto.douyin.ChatMessage.prototype.getCommon = function() {
  return /** @type{?proto.douyin.Common} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Common, 1));
};


/**
 * @param {?proto.douyin.Common|undefined} value
 * @return {!proto.douyin.ChatMessage} returns this
*/
proto.douyin.ChatMessage.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.ChatMessage} returns this
 */
proto.douyin.ChatMessage.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.ChatMessage.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional User user = 2;
 * @return {?proto.douyin.User}
 */
proto.douyin.ChatMessage.prototype.getUser = function() {
  return /** @type{?proto.douyin.User} */ (
    jspb.Message.getWrapperField(this, proto.douyin.User, 2));
};


/**
 * @param {?proto.douyin.User|undefined} value
 * @return {!proto.douyin.ChatMessage} returns this
*/
proto.douyin.ChatMessage.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.ChatMessage} returns this
 */
proto.douyin.ChatMessage.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.ChatMessage.prototype.hasUser = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string content = 3;
 * @return {string}
 */
proto.douyin.ChatMessage.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.ChatMessage} returns this
 */
proto.douyin.ChatMessage.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool visibleToSender = 4;
 * @return {boolean}
 */
proto.douyin.ChatMessage.prototype.getVisibletosender = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.douyin.ChatMessage} returns this
 */
proto.douyin.ChatMessage.prototype.setVisibletosender = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional Image backgroundImage = 5;
 * @return {?proto.douyin.Image}
 */
proto.douyin.ChatMessage.prototype.getBackgroundimage = function() {
  return /** @type{?proto.douyin.Image} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Image, 5));
};


/**
 * @param {?proto.douyin.Image|undefined} value
 * @return {!proto.douyin.ChatMessage} returns this
*/
proto.douyin.ChatMessage.prototype.setBackgroundimage = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.ChatMessage} returns this
 */
proto.douyin.ChatMessage.prototype.clearBackgroundimage = function() {
  return this.setBackgroundimage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.ChatMessage.prototype.hasBackgroundimage = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string fullScreenTextColor = 6;
 * @return {string}
 */
proto.douyin.ChatMessage.prototype.getFullscreentextcolor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.ChatMessage} returns this
 */
proto.douyin.ChatMessage.prototype.setFullscreentextcolor = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional Image backgroundImageV2 = 7;
 * @return {?proto.douyin.Image}
 */
proto.douyin.ChatMessage.prototype.getBackgroundimagev2 = function() {
  return /** @type{?proto.douyin.Image} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Image, 7));
};


/**
 * @param {?proto.douyin.Image|undefined} value
 * @return {!proto.douyin.ChatMessage} returns this
*/
proto.douyin.ChatMessage.prototype.setBackgroundimagev2 = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.ChatMessage} returns this
 */
proto.douyin.ChatMessage.prototype.clearBackgroundimagev2 = function() {
  return this.setBackgroundimagev2(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.ChatMessage.prototype.hasBackgroundimagev2 = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional PublicAreaCommon publicAreaCommon = 9;
 * @return {?proto.douyin.PublicAreaCommon}
 */
proto.douyin.ChatMessage.prototype.getPublicareacommon = function() {
  return /** @type{?proto.douyin.PublicAreaCommon} */ (
    jspb.Message.getWrapperField(this, proto.douyin.PublicAreaCommon, 9));
};


/**
 * @param {?proto.douyin.PublicAreaCommon|undefined} value
 * @return {!proto.douyin.ChatMessage} returns this
*/
proto.douyin.ChatMessage.prototype.setPublicareacommon = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.ChatMessage} returns this
 */
proto.douyin.ChatMessage.prototype.clearPublicareacommon = function() {
  return this.setPublicareacommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.ChatMessage.prototype.hasPublicareacommon = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional Image giftImage = 10;
 * @return {?proto.douyin.Image}
 */
proto.douyin.ChatMessage.prototype.getGiftimage = function() {
  return /** @type{?proto.douyin.Image} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Image, 10));
};


/**
 * @param {?proto.douyin.Image|undefined} value
 * @return {!proto.douyin.ChatMessage} returns this
*/
proto.douyin.ChatMessage.prototype.setGiftimage = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.ChatMessage} returns this
 */
proto.douyin.ChatMessage.prototype.clearGiftimage = function() {
  return this.setGiftimage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.ChatMessage.prototype.hasGiftimage = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional uint64 agreeMsgId = 11;
 * @return {number}
 */
proto.douyin.ChatMessage.prototype.getAgreemsgid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.ChatMessage} returns this
 */
proto.douyin.ChatMessage.prototype.setAgreemsgid = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional uint32 priorityLevel = 12;
 * @return {number}
 */
proto.douyin.ChatMessage.prototype.getPrioritylevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.ChatMessage} returns this
 */
proto.douyin.ChatMessage.prototype.setPrioritylevel = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional LandscapeAreaCommon landscapeAreaCommon = 13;
 * @return {?proto.douyin.LandscapeAreaCommon}
 */
proto.douyin.ChatMessage.prototype.getLandscapeareacommon = function() {
  return /** @type{?proto.douyin.LandscapeAreaCommon} */ (
    jspb.Message.getWrapperField(this, proto.douyin.LandscapeAreaCommon, 13));
};


/**
 * @param {?proto.douyin.LandscapeAreaCommon|undefined} value
 * @return {!proto.douyin.ChatMessage} returns this
*/
proto.douyin.ChatMessage.prototype.setLandscapeareacommon = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.ChatMessage} returns this
 */
proto.douyin.ChatMessage.prototype.clearLandscapeareacommon = function() {
  return this.setLandscapeareacommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.ChatMessage.prototype.hasLandscapeareacommon = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional uint64 eventTime = 15;
 * @return {number}
 */
proto.douyin.ChatMessage.prototype.getEventtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.ChatMessage} returns this
 */
proto.douyin.ChatMessage.prototype.setEventtime = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional bool sendReview = 16;
 * @return {boolean}
 */
proto.douyin.ChatMessage.prototype.getSendreview = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 16, false));
};


/**
 * @param {boolean} value
 * @return {!proto.douyin.ChatMessage} returns this
 */
proto.douyin.ChatMessage.prototype.setSendreview = function(value) {
  return jspb.Message.setProto3BooleanField(this, 16, value);
};


/**
 * optional bool fromIntercom = 17;
 * @return {boolean}
 */
proto.douyin.ChatMessage.prototype.getFromintercom = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 17, false));
};


/**
 * @param {boolean} value
 * @return {!proto.douyin.ChatMessage} returns this
 */
proto.douyin.ChatMessage.prototype.setFromintercom = function(value) {
  return jspb.Message.setProto3BooleanField(this, 17, value);
};


/**
 * optional bool intercomHideUserCard = 18;
 * @return {boolean}
 */
proto.douyin.ChatMessage.prototype.getIntercomhideusercard = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 18, false));
};


/**
 * @param {boolean} value
 * @return {!proto.douyin.ChatMessage} returns this
 */
proto.douyin.ChatMessage.prototype.setIntercomhideusercard = function(value) {
  return jspb.Message.setProto3BooleanField(this, 18, value);
};


/**
 * optional string chatBy = 20;
 * @return {string}
 */
proto.douyin.ChatMessage.prototype.getChatby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.ChatMessage} returns this
 */
proto.douyin.ChatMessage.prototype.setChatby = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional uint32 individualChatPriority = 21;
 * @return {number}
 */
proto.douyin.ChatMessage.prototype.getIndividualchatpriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.ChatMessage} returns this
 */
proto.douyin.ChatMessage.prototype.setIndividualchatpriority = function(value) {
  return jspb.Message.setProto3IntField(this, 21, value);
};


/**
 * optional Text rtfContent = 22;
 * @return {?proto.douyin.Text}
 */
proto.douyin.ChatMessage.prototype.getRtfcontent = function() {
  return /** @type{?proto.douyin.Text} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Text, 22));
};


/**
 * @param {?proto.douyin.Text|undefined} value
 * @return {!proto.douyin.ChatMessage} returns this
*/
proto.douyin.ChatMessage.prototype.setRtfcontent = function(value) {
  return jspb.Message.setWrapperField(this, 22, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.ChatMessage} returns this
 */
proto.douyin.ChatMessage.prototype.clearRtfcontent = function() {
  return this.setRtfcontent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.ChatMessage.prototype.hasRtfcontent = function() {
  return jspb.Message.getField(this, 22) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.douyin.LandscapeAreaCommon.repeatedFields_ = [4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.LandscapeAreaCommon.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.LandscapeAreaCommon.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.LandscapeAreaCommon} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.LandscapeAreaCommon.toObject = function(includeInstance, msg) {
  var f, obj = {
    showhead: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    shownickname: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    showfontcolor: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    colorvaluelistList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    commenttypetagslistList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.LandscapeAreaCommon}
 */
proto.douyin.LandscapeAreaCommon.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.LandscapeAreaCommon;
  return proto.douyin.LandscapeAreaCommon.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.LandscapeAreaCommon} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.LandscapeAreaCommon}
 */
proto.douyin.LandscapeAreaCommon.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShowhead(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShownickname(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShowfontcolor(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addColorvaluelist(value);
      break;
    case 5:
      var values = /** @type {!Array<!proto.douyin.CommentTypeTag>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addCommenttypetagslist(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.LandscapeAreaCommon.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.LandscapeAreaCommon.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.LandscapeAreaCommon} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.LandscapeAreaCommon.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShowhead();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getShownickname();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getShowfontcolor();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getColorvaluelistList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getCommenttypetagslistList();
  if (f.length > 0) {
    writer.writePackedEnum(
      5,
      f
    );
  }
};


/**
 * optional bool showHead = 1;
 * @return {boolean}
 */
proto.douyin.LandscapeAreaCommon.prototype.getShowhead = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.douyin.LandscapeAreaCommon} returns this
 */
proto.douyin.LandscapeAreaCommon.prototype.setShowhead = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool showNickname = 2;
 * @return {boolean}
 */
proto.douyin.LandscapeAreaCommon.prototype.getShownickname = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.douyin.LandscapeAreaCommon} returns this
 */
proto.douyin.LandscapeAreaCommon.prototype.setShownickname = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool showFontColor = 3;
 * @return {boolean}
 */
proto.douyin.LandscapeAreaCommon.prototype.getShowfontcolor = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.douyin.LandscapeAreaCommon} returns this
 */
proto.douyin.LandscapeAreaCommon.prototype.setShowfontcolor = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * repeated string colorValueList = 4;
 * @return {!Array<string>}
 */
proto.douyin.LandscapeAreaCommon.prototype.getColorvaluelistList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.douyin.LandscapeAreaCommon} returns this
 */
proto.douyin.LandscapeAreaCommon.prototype.setColorvaluelistList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.douyin.LandscapeAreaCommon} returns this
 */
proto.douyin.LandscapeAreaCommon.prototype.addColorvaluelist = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.douyin.LandscapeAreaCommon} returns this
 */
proto.douyin.LandscapeAreaCommon.prototype.clearColorvaluelistList = function() {
  return this.setColorvaluelistList([]);
};


/**
 * repeated CommentTypeTag commentTypeTagsList = 5;
 * @return {!Array<!proto.douyin.CommentTypeTag>}
 */
proto.douyin.LandscapeAreaCommon.prototype.getCommenttypetagslistList = function() {
  return /** @type {!Array<!proto.douyin.CommentTypeTag>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<!proto.douyin.CommentTypeTag>} value
 * @return {!proto.douyin.LandscapeAreaCommon} returns this
 */
proto.douyin.LandscapeAreaCommon.prototype.setCommenttypetagslistList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {!proto.douyin.CommentTypeTag} value
 * @param {number=} opt_index
 * @return {!proto.douyin.LandscapeAreaCommon} returns this
 */
proto.douyin.LandscapeAreaCommon.prototype.addCommenttypetagslist = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.douyin.LandscapeAreaCommon} returns this
 */
proto.douyin.LandscapeAreaCommon.prototype.clearCommenttypetagslistList = function() {
  return this.setCommenttypetagslistList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.douyin.RoomUserSeqMessage.repeatedFields_ = [2,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.RoomUserSeqMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.RoomUserSeqMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.RoomUserSeqMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.RoomUserSeqMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && proto.douyin.Common.toObject(includeInstance, f),
    rankslistList: jspb.Message.toObjectList(msg.getRankslistList(),
    proto.douyin.RoomUserSeqMessageContributor.toObject, includeInstance),
    total: jspb.Message.getFieldWithDefault(msg, 3, 0),
    popstr: jspb.Message.getFieldWithDefault(msg, 4, ""),
    seatslistList: jspb.Message.toObjectList(msg.getSeatslistList(),
    proto.douyin.RoomUserSeqMessageContributor.toObject, includeInstance),
    popularity: jspb.Message.getFieldWithDefault(msg, 6, 0),
    totaluser: jspb.Message.getFieldWithDefault(msg, 7, 0),
    totaluserstr: jspb.Message.getFieldWithDefault(msg, 8, ""),
    totalstr: jspb.Message.getFieldWithDefault(msg, 9, ""),
    onlineuserforanchor: jspb.Message.getFieldWithDefault(msg, 10, ""),
    totalpvforanchor: jspb.Message.getFieldWithDefault(msg, 11, ""),
    uprightstatsstr: jspb.Message.getFieldWithDefault(msg, 12, ""),
    uprightstatsstrcomplete: jspb.Message.getFieldWithDefault(msg, 13, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.RoomUserSeqMessage}
 */
proto.douyin.RoomUserSeqMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.RoomUserSeqMessage;
  return proto.douyin.RoomUserSeqMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.RoomUserSeqMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.RoomUserSeqMessage}
 */
proto.douyin.RoomUserSeqMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.douyin.Common;
      reader.readMessage(value,proto.douyin.Common.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new proto.douyin.RoomUserSeqMessageContributor;
      reader.readMessage(value,proto.douyin.RoomUserSeqMessageContributor.deserializeBinaryFromReader);
      msg.addRankslist(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotal(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPopstr(value);
      break;
    case 5:
      var value = new proto.douyin.RoomUserSeqMessageContributor;
      reader.readMessage(value,proto.douyin.RoomUserSeqMessageContributor.deserializeBinaryFromReader);
      msg.addSeatslist(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPopularity(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotaluser(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setTotaluserstr(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setTotalstr(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setOnlineuserforanchor(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setTotalpvforanchor(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setUprightstatsstr(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setUprightstatsstrcomplete(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.RoomUserSeqMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.RoomUserSeqMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.RoomUserSeqMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.RoomUserSeqMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.douyin.Common.serializeBinaryToWriter
    );
  }
  f = message.getRankslistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.douyin.RoomUserSeqMessageContributor.serializeBinaryToWriter
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getPopstr();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSeatslistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.douyin.RoomUserSeqMessageContributor.serializeBinaryToWriter
    );
  }
  f = message.getPopularity();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getTotaluser();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getTotaluserstr();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getTotalstr();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getOnlineuserforanchor();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getTotalpvforanchor();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getUprightstatsstr();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getUprightstatsstrcomplete();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
};


/**
 * optional Common common = 1;
 * @return {?proto.douyin.Common}
 */
proto.douyin.RoomUserSeqMessage.prototype.getCommon = function() {
  return /** @type{?proto.douyin.Common} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Common, 1));
};


/**
 * @param {?proto.douyin.Common|undefined} value
 * @return {!proto.douyin.RoomUserSeqMessage} returns this
*/
proto.douyin.RoomUserSeqMessage.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.RoomUserSeqMessage} returns this
 */
proto.douyin.RoomUserSeqMessage.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.RoomUserSeqMessage.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated RoomUserSeqMessageContributor ranksList = 2;
 * @return {!Array<!proto.douyin.RoomUserSeqMessageContributor>}
 */
proto.douyin.RoomUserSeqMessage.prototype.getRankslistList = function() {
  return /** @type{!Array<!proto.douyin.RoomUserSeqMessageContributor>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.douyin.RoomUserSeqMessageContributor, 2));
};


/**
 * @param {!Array<!proto.douyin.RoomUserSeqMessageContributor>} value
 * @return {!proto.douyin.RoomUserSeqMessage} returns this
*/
proto.douyin.RoomUserSeqMessage.prototype.setRankslistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.douyin.RoomUserSeqMessageContributor=} opt_value
 * @param {number=} opt_index
 * @return {!proto.douyin.RoomUserSeqMessageContributor}
 */
proto.douyin.RoomUserSeqMessage.prototype.addRankslist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.douyin.RoomUserSeqMessageContributor, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.douyin.RoomUserSeqMessage} returns this
 */
proto.douyin.RoomUserSeqMessage.prototype.clearRankslistList = function() {
  return this.setRankslistList([]);
};


/**
 * optional int64 total = 3;
 * @return {number}
 */
proto.douyin.RoomUserSeqMessage.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.RoomUserSeqMessage} returns this
 */
proto.douyin.RoomUserSeqMessage.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string popStr = 4;
 * @return {string}
 */
proto.douyin.RoomUserSeqMessage.prototype.getPopstr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.RoomUserSeqMessage} returns this
 */
proto.douyin.RoomUserSeqMessage.prototype.setPopstr = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated RoomUserSeqMessageContributor seatsList = 5;
 * @return {!Array<!proto.douyin.RoomUserSeqMessageContributor>}
 */
proto.douyin.RoomUserSeqMessage.prototype.getSeatslistList = function() {
  return /** @type{!Array<!proto.douyin.RoomUserSeqMessageContributor>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.douyin.RoomUserSeqMessageContributor, 5));
};


/**
 * @param {!Array<!proto.douyin.RoomUserSeqMessageContributor>} value
 * @return {!proto.douyin.RoomUserSeqMessage} returns this
*/
proto.douyin.RoomUserSeqMessage.prototype.setSeatslistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.douyin.RoomUserSeqMessageContributor=} opt_value
 * @param {number=} opt_index
 * @return {!proto.douyin.RoomUserSeqMessageContributor}
 */
proto.douyin.RoomUserSeqMessage.prototype.addSeatslist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.douyin.RoomUserSeqMessageContributor, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.douyin.RoomUserSeqMessage} returns this
 */
proto.douyin.RoomUserSeqMessage.prototype.clearSeatslistList = function() {
  return this.setSeatslistList([]);
};


/**
 * optional int64 popularity = 6;
 * @return {number}
 */
proto.douyin.RoomUserSeqMessage.prototype.getPopularity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.RoomUserSeqMessage} returns this
 */
proto.douyin.RoomUserSeqMessage.prototype.setPopularity = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 totalUser = 7;
 * @return {number}
 */
proto.douyin.RoomUserSeqMessage.prototype.getTotaluser = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.RoomUserSeqMessage} returns this
 */
proto.douyin.RoomUserSeqMessage.prototype.setTotaluser = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string totalUserStr = 8;
 * @return {string}
 */
proto.douyin.RoomUserSeqMessage.prototype.getTotaluserstr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.RoomUserSeqMessage} returns this
 */
proto.douyin.RoomUserSeqMessage.prototype.setTotaluserstr = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string totalStr = 9;
 * @return {string}
 */
proto.douyin.RoomUserSeqMessage.prototype.getTotalstr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.RoomUserSeqMessage} returns this
 */
proto.douyin.RoomUserSeqMessage.prototype.setTotalstr = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string onlineUserForAnchor = 10;
 * @return {string}
 */
proto.douyin.RoomUserSeqMessage.prototype.getOnlineuserforanchor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.RoomUserSeqMessage} returns this
 */
proto.douyin.RoomUserSeqMessage.prototype.setOnlineuserforanchor = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string totalPvForAnchor = 11;
 * @return {string}
 */
proto.douyin.RoomUserSeqMessage.prototype.getTotalpvforanchor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.RoomUserSeqMessage} returns this
 */
proto.douyin.RoomUserSeqMessage.prototype.setTotalpvforanchor = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string upRightStatsStr = 12;
 * @return {string}
 */
proto.douyin.RoomUserSeqMessage.prototype.getUprightstatsstr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.RoomUserSeqMessage} returns this
 */
proto.douyin.RoomUserSeqMessage.prototype.setUprightstatsstr = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string upRightStatsStrComplete = 13;
 * @return {string}
 */
proto.douyin.RoomUserSeqMessage.prototype.getUprightstatsstrcomplete = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.RoomUserSeqMessage} returns this
 */
proto.douyin.RoomUserSeqMessage.prototype.setUprightstatsstrcomplete = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.CommonTextMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.CommonTextMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.CommonTextMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.CommonTextMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && proto.douyin.Common.toObject(includeInstance, f),
    user: (f = msg.getUser()) && proto.douyin.User.toObject(includeInstance, f),
    scene: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.CommonTextMessage}
 */
proto.douyin.CommonTextMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.CommonTextMessage;
  return proto.douyin.CommonTextMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.CommonTextMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.CommonTextMessage}
 */
proto.douyin.CommonTextMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.douyin.Common;
      reader.readMessage(value,proto.douyin.Common.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new proto.douyin.User;
      reader.readMessage(value,proto.douyin.User.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setScene(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.CommonTextMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.CommonTextMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.CommonTextMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.CommonTextMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.douyin.Common.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.douyin.User.serializeBinaryToWriter
    );
  }
  f = message.getScene();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional Common common = 1;
 * @return {?proto.douyin.Common}
 */
proto.douyin.CommonTextMessage.prototype.getCommon = function() {
  return /** @type{?proto.douyin.Common} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Common, 1));
};


/**
 * @param {?proto.douyin.Common|undefined} value
 * @return {!proto.douyin.CommonTextMessage} returns this
*/
proto.douyin.CommonTextMessage.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.CommonTextMessage} returns this
 */
proto.douyin.CommonTextMessage.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.CommonTextMessage.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional User user = 2;
 * @return {?proto.douyin.User}
 */
proto.douyin.CommonTextMessage.prototype.getUser = function() {
  return /** @type{?proto.douyin.User} */ (
    jspb.Message.getWrapperField(this, proto.douyin.User, 2));
};


/**
 * @param {?proto.douyin.User|undefined} value
 * @return {!proto.douyin.CommonTextMessage} returns this
*/
proto.douyin.CommonTextMessage.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.CommonTextMessage} returns this
 */
proto.douyin.CommonTextMessage.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.CommonTextMessage.prototype.hasUser = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string scene = 3;
 * @return {string}
 */
proto.douyin.CommonTextMessage.prototype.getScene = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.CommonTextMessage} returns this
 */
proto.douyin.CommonTextMessage.prototype.setScene = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.UpdateFanTicketMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.UpdateFanTicketMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.UpdateFanTicketMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.UpdateFanTicketMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && proto.douyin.Common.toObject(includeInstance, f),
    roomfanticketcounttext: jspb.Message.getFieldWithDefault(msg, 2, ""),
    roomfanticketcount: jspb.Message.getFieldWithDefault(msg, 3, 0),
    forceupdate: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.UpdateFanTicketMessage}
 */
proto.douyin.UpdateFanTicketMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.UpdateFanTicketMessage;
  return proto.douyin.UpdateFanTicketMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.UpdateFanTicketMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.UpdateFanTicketMessage}
 */
proto.douyin.UpdateFanTicketMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.douyin.Common;
      reader.readMessage(value,proto.douyin.Common.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomfanticketcounttext(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRoomfanticketcount(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setForceupdate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.UpdateFanTicketMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.UpdateFanTicketMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.UpdateFanTicketMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.UpdateFanTicketMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.douyin.Common.serializeBinaryToWriter
    );
  }
  f = message.getRoomfanticketcounttext();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRoomfanticketcount();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getForceupdate();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional Common common = 1;
 * @return {?proto.douyin.Common}
 */
proto.douyin.UpdateFanTicketMessage.prototype.getCommon = function() {
  return /** @type{?proto.douyin.Common} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Common, 1));
};


/**
 * @param {?proto.douyin.Common|undefined} value
 * @return {!proto.douyin.UpdateFanTicketMessage} returns this
*/
proto.douyin.UpdateFanTicketMessage.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.UpdateFanTicketMessage} returns this
 */
proto.douyin.UpdateFanTicketMessage.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.UpdateFanTicketMessage.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string roomFanTicketCountText = 2;
 * @return {string}
 */
proto.douyin.UpdateFanTicketMessage.prototype.getRoomfanticketcounttext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.UpdateFanTicketMessage} returns this
 */
proto.douyin.UpdateFanTicketMessage.prototype.setRoomfanticketcounttext = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 roomFanTicketCount = 3;
 * @return {number}
 */
proto.douyin.UpdateFanTicketMessage.prototype.getRoomfanticketcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.UpdateFanTicketMessage} returns this
 */
proto.douyin.UpdateFanTicketMessage.prototype.setRoomfanticketcount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool forceUpdate = 4;
 * @return {boolean}
 */
proto.douyin.UpdateFanTicketMessage.prototype.getForceupdate = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.douyin.UpdateFanTicketMessage} returns this
 */
proto.douyin.UpdateFanTicketMessage.prototype.setForceupdate = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.RoomUserSeqMessageContributor.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.RoomUserSeqMessageContributor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.RoomUserSeqMessageContributor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.RoomUserSeqMessageContributor.toObject = function(includeInstance, msg) {
  var f, obj = {
    score: jspb.Message.getFieldWithDefault(msg, 1, 0),
    user: (f = msg.getUser()) && proto.douyin.User.toObject(includeInstance, f),
    rank: jspb.Message.getFieldWithDefault(msg, 3, 0),
    delta: jspb.Message.getFieldWithDefault(msg, 4, 0),
    ishidden: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    scoredescription: jspb.Message.getFieldWithDefault(msg, 6, ""),
    exactlyscore: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.RoomUserSeqMessageContributor}
 */
proto.douyin.RoomUserSeqMessageContributor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.RoomUserSeqMessageContributor;
  return proto.douyin.RoomUserSeqMessageContributor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.RoomUserSeqMessageContributor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.RoomUserSeqMessageContributor}
 */
proto.douyin.RoomUserSeqMessageContributor.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setScore(value);
      break;
    case 2:
      var value = new proto.douyin.User;
      reader.readMessage(value,proto.douyin.User.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRank(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDelta(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIshidden(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setScoredescription(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setExactlyscore(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.RoomUserSeqMessageContributor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.RoomUserSeqMessageContributor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.RoomUserSeqMessageContributor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.RoomUserSeqMessageContributor.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScore();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.douyin.User.serializeBinaryToWriter
    );
  }
  f = message.getRank();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getDelta();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getIshidden();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getScoredescription();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getExactlyscore();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional uint64 score = 1;
 * @return {number}
 */
proto.douyin.RoomUserSeqMessageContributor.prototype.getScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.RoomUserSeqMessageContributor} returns this
 */
proto.douyin.RoomUserSeqMessageContributor.prototype.setScore = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional User user = 2;
 * @return {?proto.douyin.User}
 */
proto.douyin.RoomUserSeqMessageContributor.prototype.getUser = function() {
  return /** @type{?proto.douyin.User} */ (
    jspb.Message.getWrapperField(this, proto.douyin.User, 2));
};


/**
 * @param {?proto.douyin.User|undefined} value
 * @return {!proto.douyin.RoomUserSeqMessageContributor} returns this
*/
proto.douyin.RoomUserSeqMessageContributor.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.RoomUserSeqMessageContributor} returns this
 */
proto.douyin.RoomUserSeqMessageContributor.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.RoomUserSeqMessageContributor.prototype.hasUser = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 rank = 3;
 * @return {number}
 */
proto.douyin.RoomUserSeqMessageContributor.prototype.getRank = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.RoomUserSeqMessageContributor} returns this
 */
proto.douyin.RoomUserSeqMessageContributor.prototype.setRank = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 delta = 4;
 * @return {number}
 */
proto.douyin.RoomUserSeqMessageContributor.prototype.getDelta = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.RoomUserSeqMessageContributor} returns this
 */
proto.douyin.RoomUserSeqMessageContributor.prototype.setDelta = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bool isHidden = 5;
 * @return {boolean}
 */
proto.douyin.RoomUserSeqMessageContributor.prototype.getIshidden = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.douyin.RoomUserSeqMessageContributor} returns this
 */
proto.douyin.RoomUserSeqMessageContributor.prototype.setIshidden = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional string scoreDescription = 6;
 * @return {string}
 */
proto.douyin.RoomUserSeqMessageContributor.prototype.getScoredescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.RoomUserSeqMessageContributor} returns this
 */
proto.douyin.RoomUserSeqMessageContributor.prototype.setScoredescription = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string exactlyScore = 7;
 * @return {string}
 */
proto.douyin.RoomUserSeqMessageContributor.prototype.getExactlyscore = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.RoomUserSeqMessageContributor} returns this
 */
proto.douyin.RoomUserSeqMessageContributor.prototype.setExactlyscore = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.douyin.GiftMessage.repeatedFields_ = [28,32];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.GiftMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.GiftMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.GiftMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.GiftMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && proto.douyin.Common.toObject(includeInstance, f),
    giftid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    fanticketcount: jspb.Message.getFieldWithDefault(msg, 3, 0),
    groupcount: jspb.Message.getFieldWithDefault(msg, 4, 0),
    repeatcount: jspb.Message.getFieldWithDefault(msg, 5, 0),
    combocount: jspb.Message.getFieldWithDefault(msg, 6, 0),
    user: (f = msg.getUser()) && proto.douyin.User.toObject(includeInstance, f),
    touser: (f = msg.getTouser()) && proto.douyin.User.toObject(includeInstance, f),
    repeatend: jspb.Message.getFieldWithDefault(msg, 9, 0),
    texteffect: (f = msg.getTexteffect()) && proto.douyin.TextEffect.toObject(includeInstance, f),
    groupid: jspb.Message.getFieldWithDefault(msg, 11, 0),
    incometaskgifts: jspb.Message.getFieldWithDefault(msg, 12, 0),
    roomfanticketcount: jspb.Message.getFieldWithDefault(msg, 13, 0),
    priority: (f = msg.getPriority()) && proto.douyin.GiftIMPriority.toObject(includeInstance, f),
    gift: (f = msg.getGift()) && proto.douyin.GiftStruct.toObject(includeInstance, f),
    logid: jspb.Message.getFieldWithDefault(msg, 16, ""),
    sendtype: jspb.Message.getFieldWithDefault(msg, 17, 0),
    publicareacommon: (f = msg.getPublicareacommon()) && proto.douyin.PublicAreaCommon.toObject(includeInstance, f),
    traydisplaytext: (f = msg.getTraydisplaytext()) && proto.douyin.Text.toObject(includeInstance, f),
    banneddisplayeffects: jspb.Message.getFieldWithDefault(msg, 20, 0),
    displayforself: jspb.Message.getBooleanFieldWithDefault(msg, 25, false),
    interactgiftinfo: jspb.Message.getFieldWithDefault(msg, 26, ""),
    diyiteminfo: jspb.Message.getFieldWithDefault(msg, 27, ""),
    minassetsetlistList: (f = jspb.Message.getRepeatedField(msg, 28)) == null ? undefined : f,
    totalcount: jspb.Message.getFieldWithDefault(msg, 29, 0),
    clientgiftsource: jspb.Message.getFieldWithDefault(msg, 30, 0),
    touseridslistList: (f = jspb.Message.getRepeatedField(msg, 32)) == null ? undefined : f,
    sendtime: jspb.Message.getFieldWithDefault(msg, 33, 0),
    forcedisplayeffects: jspb.Message.getFieldWithDefault(msg, 34, 0),
    traceid: jspb.Message.getFieldWithDefault(msg, 35, ""),
    effectdisplayts: jspb.Message.getFieldWithDefault(msg, 36, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.GiftMessage}
 */
proto.douyin.GiftMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.GiftMessage;
  return proto.douyin.GiftMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.GiftMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.GiftMessage}
 */
proto.douyin.GiftMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.douyin.Common;
      reader.readMessage(value,proto.douyin.Common.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGiftid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFanticketcount(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGroupcount(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRepeatcount(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCombocount(value);
      break;
    case 7:
      var value = new proto.douyin.User;
      reader.readMessage(value,proto.douyin.User.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    case 8:
      var value = new proto.douyin.User;
      reader.readMessage(value,proto.douyin.User.deserializeBinaryFromReader);
      msg.setTouser(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRepeatend(value);
      break;
    case 10:
      var value = new proto.douyin.TextEffect;
      reader.readMessage(value,proto.douyin.TextEffect.deserializeBinaryFromReader);
      msg.setTexteffect(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGroupid(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setIncometaskgifts(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRoomfanticketcount(value);
      break;
    case 14:
      var value = new proto.douyin.GiftIMPriority;
      reader.readMessage(value,proto.douyin.GiftIMPriority.deserializeBinaryFromReader);
      msg.setPriority(value);
      break;
    case 15:
      var value = new proto.douyin.GiftStruct;
      reader.readMessage(value,proto.douyin.GiftStruct.deserializeBinaryFromReader);
      msg.setGift(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setLogid(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSendtype(value);
      break;
    case 18:
      var value = new proto.douyin.PublicAreaCommon;
      reader.readMessage(value,proto.douyin.PublicAreaCommon.deserializeBinaryFromReader);
      msg.setPublicareacommon(value);
      break;
    case 19:
      var value = new proto.douyin.Text;
      reader.readMessage(value,proto.douyin.Text.deserializeBinaryFromReader);
      msg.setTraydisplaytext(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBanneddisplayeffects(value);
      break;
    case 25:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisplayforself(value);
      break;
    case 26:
      var value = /** @type {string} */ (reader.readString());
      msg.setInteractgiftinfo(value);
      break;
    case 27:
      var value = /** @type {string} */ (reader.readString());
      msg.setDiyiteminfo(value);
      break;
    case 28:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedUint64() : [reader.readUint64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addMinassetsetlist(values[i]);
      }
      break;
    case 29:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalcount(value);
      break;
    case 30:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setClientgiftsource(value);
      break;
    case 32:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedUint64() : [reader.readUint64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addTouseridslist(values[i]);
      }
      break;
    case 33:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSendtime(value);
      break;
    case 34:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setForcedisplayeffects(value);
      break;
    case 35:
      var value = /** @type {string} */ (reader.readString());
      msg.setTraceid(value);
      break;
    case 36:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setEffectdisplayts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.GiftMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.GiftMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.GiftMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.GiftMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.douyin.Common.serializeBinaryToWriter
    );
  }
  f = message.getGiftid();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getFanticketcount();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getGroupcount();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getRepeatcount();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getCombocount();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.douyin.User.serializeBinaryToWriter
    );
  }
  f = message.getTouser();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.douyin.User.serializeBinaryToWriter
    );
  }
  f = message.getRepeatend();
  if (f !== 0) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = message.getTexteffect();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.douyin.TextEffect.serializeBinaryToWriter
    );
  }
  f = message.getGroupid();
  if (f !== 0) {
    writer.writeUint64(
      11,
      f
    );
  }
  f = message.getIncometaskgifts();
  if (f !== 0) {
    writer.writeUint64(
      12,
      f
    );
  }
  f = message.getRoomfanticketcount();
  if (f !== 0) {
    writer.writeUint64(
      13,
      f
    );
  }
  f = message.getPriority();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.douyin.GiftIMPriority.serializeBinaryToWriter
    );
  }
  f = message.getGift();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.douyin.GiftStruct.serializeBinaryToWriter
    );
  }
  f = message.getLogid();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getSendtype();
  if (f !== 0) {
    writer.writeUint64(
      17,
      f
    );
  }
  f = message.getPublicareacommon();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.douyin.PublicAreaCommon.serializeBinaryToWriter
    );
  }
  f = message.getTraydisplaytext();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.douyin.Text.serializeBinaryToWriter
    );
  }
  f = message.getBanneddisplayeffects();
  if (f !== 0) {
    writer.writeUint64(
      20,
      f
    );
  }
  f = message.getDisplayforself();
  if (f) {
    writer.writeBool(
      25,
      f
    );
  }
  f = message.getInteractgiftinfo();
  if (f.length > 0) {
    writer.writeString(
      26,
      f
    );
  }
  f = message.getDiyiteminfo();
  if (f.length > 0) {
    writer.writeString(
      27,
      f
    );
  }
  f = message.getMinassetsetlistList();
  if (f.length > 0) {
    writer.writePackedUint64(
      28,
      f
    );
  }
  f = message.getTotalcount();
  if (f !== 0) {
    writer.writeUint64(
      29,
      f
    );
  }
  f = message.getClientgiftsource();
  if (f !== 0) {
    writer.writeUint32(
      30,
      f
    );
  }
  f = message.getTouseridslistList();
  if (f.length > 0) {
    writer.writePackedUint64(
      32,
      f
    );
  }
  f = message.getSendtime();
  if (f !== 0) {
    writer.writeUint64(
      33,
      f
    );
  }
  f = message.getForcedisplayeffects();
  if (f !== 0) {
    writer.writeUint64(
      34,
      f
    );
  }
  f = message.getTraceid();
  if (f.length > 0) {
    writer.writeString(
      35,
      f
    );
  }
  f = message.getEffectdisplayts();
  if (f !== 0) {
    writer.writeUint64(
      36,
      f
    );
  }
};


/**
 * optional Common common = 1;
 * @return {?proto.douyin.Common}
 */
proto.douyin.GiftMessage.prototype.getCommon = function() {
  return /** @type{?proto.douyin.Common} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Common, 1));
};


/**
 * @param {?proto.douyin.Common|undefined} value
 * @return {!proto.douyin.GiftMessage} returns this
*/
proto.douyin.GiftMessage.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.GiftMessage} returns this
 */
proto.douyin.GiftMessage.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.GiftMessage.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 giftId = 2;
 * @return {number}
 */
proto.douyin.GiftMessage.prototype.getGiftid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.GiftMessage} returns this
 */
proto.douyin.GiftMessage.prototype.setGiftid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 fanTicketCount = 3;
 * @return {number}
 */
proto.douyin.GiftMessage.prototype.getFanticketcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.GiftMessage} returns this
 */
proto.douyin.GiftMessage.prototype.setFanticketcount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 groupCount = 4;
 * @return {number}
 */
proto.douyin.GiftMessage.prototype.getGroupcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.GiftMessage} returns this
 */
proto.douyin.GiftMessage.prototype.setGroupcount = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 repeatCount = 5;
 * @return {number}
 */
proto.douyin.GiftMessage.prototype.getRepeatcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.GiftMessage} returns this
 */
proto.douyin.GiftMessage.prototype.setRepeatcount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint64 comboCount = 6;
 * @return {number}
 */
proto.douyin.GiftMessage.prototype.getCombocount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.GiftMessage} returns this
 */
proto.douyin.GiftMessage.prototype.setCombocount = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional User user = 7;
 * @return {?proto.douyin.User}
 */
proto.douyin.GiftMessage.prototype.getUser = function() {
  return /** @type{?proto.douyin.User} */ (
    jspb.Message.getWrapperField(this, proto.douyin.User, 7));
};


/**
 * @param {?proto.douyin.User|undefined} value
 * @return {!proto.douyin.GiftMessage} returns this
*/
proto.douyin.GiftMessage.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.GiftMessage} returns this
 */
proto.douyin.GiftMessage.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.GiftMessage.prototype.hasUser = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional User toUser = 8;
 * @return {?proto.douyin.User}
 */
proto.douyin.GiftMessage.prototype.getTouser = function() {
  return /** @type{?proto.douyin.User} */ (
    jspb.Message.getWrapperField(this, proto.douyin.User, 8));
};


/**
 * @param {?proto.douyin.User|undefined} value
 * @return {!proto.douyin.GiftMessage} returns this
*/
proto.douyin.GiftMessage.prototype.setTouser = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.GiftMessage} returns this
 */
proto.douyin.GiftMessage.prototype.clearTouser = function() {
  return this.setTouser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.GiftMessage.prototype.hasTouser = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional uint32 repeatEnd = 9;
 * @return {number}
 */
proto.douyin.GiftMessage.prototype.getRepeatend = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.GiftMessage} returns this
 */
proto.douyin.GiftMessage.prototype.setRepeatend = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional TextEffect textEffect = 10;
 * @return {?proto.douyin.TextEffect}
 */
proto.douyin.GiftMessage.prototype.getTexteffect = function() {
  return /** @type{?proto.douyin.TextEffect} */ (
    jspb.Message.getWrapperField(this, proto.douyin.TextEffect, 10));
};


/**
 * @param {?proto.douyin.TextEffect|undefined} value
 * @return {!proto.douyin.GiftMessage} returns this
*/
proto.douyin.GiftMessage.prototype.setTexteffect = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.GiftMessage} returns this
 */
proto.douyin.GiftMessage.prototype.clearTexteffect = function() {
  return this.setTexteffect(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.GiftMessage.prototype.hasTexteffect = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional uint64 groupId = 11;
 * @return {number}
 */
proto.douyin.GiftMessage.prototype.getGroupid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.GiftMessage} returns this
 */
proto.douyin.GiftMessage.prototype.setGroupid = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional uint64 incomeTaskgifts = 12;
 * @return {number}
 */
proto.douyin.GiftMessage.prototype.getIncometaskgifts = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.GiftMessage} returns this
 */
proto.douyin.GiftMessage.prototype.setIncometaskgifts = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional uint64 roomFanTicketCount = 13;
 * @return {number}
 */
proto.douyin.GiftMessage.prototype.getRoomfanticketcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.GiftMessage} returns this
 */
proto.douyin.GiftMessage.prototype.setRoomfanticketcount = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional GiftIMPriority priority = 14;
 * @return {?proto.douyin.GiftIMPriority}
 */
proto.douyin.GiftMessage.prototype.getPriority = function() {
  return /** @type{?proto.douyin.GiftIMPriority} */ (
    jspb.Message.getWrapperField(this, proto.douyin.GiftIMPriority, 14));
};


/**
 * @param {?proto.douyin.GiftIMPriority|undefined} value
 * @return {!proto.douyin.GiftMessage} returns this
*/
proto.douyin.GiftMessage.prototype.setPriority = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.GiftMessage} returns this
 */
proto.douyin.GiftMessage.prototype.clearPriority = function() {
  return this.setPriority(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.GiftMessage.prototype.hasPriority = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional GiftStruct gift = 15;
 * @return {?proto.douyin.GiftStruct}
 */
proto.douyin.GiftMessage.prototype.getGift = function() {
  return /** @type{?proto.douyin.GiftStruct} */ (
    jspb.Message.getWrapperField(this, proto.douyin.GiftStruct, 15));
};


/**
 * @param {?proto.douyin.GiftStruct|undefined} value
 * @return {!proto.douyin.GiftMessage} returns this
*/
proto.douyin.GiftMessage.prototype.setGift = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.GiftMessage} returns this
 */
proto.douyin.GiftMessage.prototype.clearGift = function() {
  return this.setGift(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.GiftMessage.prototype.hasGift = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional string logId = 16;
 * @return {string}
 */
proto.douyin.GiftMessage.prototype.getLogid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.GiftMessage} returns this
 */
proto.douyin.GiftMessage.prototype.setLogid = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional uint64 sendType = 17;
 * @return {number}
 */
proto.douyin.GiftMessage.prototype.getSendtype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.GiftMessage} returns this
 */
proto.douyin.GiftMessage.prototype.setSendtype = function(value) {
  return jspb.Message.setProto3IntField(this, 17, value);
};


/**
 * optional PublicAreaCommon publicAreaCommon = 18;
 * @return {?proto.douyin.PublicAreaCommon}
 */
proto.douyin.GiftMessage.prototype.getPublicareacommon = function() {
  return /** @type{?proto.douyin.PublicAreaCommon} */ (
    jspb.Message.getWrapperField(this, proto.douyin.PublicAreaCommon, 18));
};


/**
 * @param {?proto.douyin.PublicAreaCommon|undefined} value
 * @return {!proto.douyin.GiftMessage} returns this
*/
proto.douyin.GiftMessage.prototype.setPublicareacommon = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.GiftMessage} returns this
 */
proto.douyin.GiftMessage.prototype.clearPublicareacommon = function() {
  return this.setPublicareacommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.GiftMessage.prototype.hasPublicareacommon = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional Text trayDisplayText = 19;
 * @return {?proto.douyin.Text}
 */
proto.douyin.GiftMessage.prototype.getTraydisplaytext = function() {
  return /** @type{?proto.douyin.Text} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Text, 19));
};


/**
 * @param {?proto.douyin.Text|undefined} value
 * @return {!proto.douyin.GiftMessage} returns this
*/
proto.douyin.GiftMessage.prototype.setTraydisplaytext = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.GiftMessage} returns this
 */
proto.douyin.GiftMessage.prototype.clearTraydisplaytext = function() {
  return this.setTraydisplaytext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.GiftMessage.prototype.hasTraydisplaytext = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional uint64 bannedDisplayEffects = 20;
 * @return {number}
 */
proto.douyin.GiftMessage.prototype.getBanneddisplayeffects = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.GiftMessage} returns this
 */
proto.douyin.GiftMessage.prototype.setBanneddisplayeffects = function(value) {
  return jspb.Message.setProto3IntField(this, 20, value);
};


/**
 * optional bool displayForSelf = 25;
 * @return {boolean}
 */
proto.douyin.GiftMessage.prototype.getDisplayforself = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 25, false));
};


/**
 * @param {boolean} value
 * @return {!proto.douyin.GiftMessage} returns this
 */
proto.douyin.GiftMessage.prototype.setDisplayforself = function(value) {
  return jspb.Message.setProto3BooleanField(this, 25, value);
};


/**
 * optional string interactGiftInfo = 26;
 * @return {string}
 */
proto.douyin.GiftMessage.prototype.getInteractgiftinfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 26, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.GiftMessage} returns this
 */
proto.douyin.GiftMessage.prototype.setInteractgiftinfo = function(value) {
  return jspb.Message.setProto3StringField(this, 26, value);
};


/**
 * optional string diyItemInfo = 27;
 * @return {string}
 */
proto.douyin.GiftMessage.prototype.getDiyiteminfo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 27, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.GiftMessage} returns this
 */
proto.douyin.GiftMessage.prototype.setDiyiteminfo = function(value) {
  return jspb.Message.setProto3StringField(this, 27, value);
};


/**
 * repeated uint64 minAssetSetList = 28;
 * @return {!Array<number>}
 */
proto.douyin.GiftMessage.prototype.getMinassetsetlistList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 28));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.douyin.GiftMessage} returns this
 */
proto.douyin.GiftMessage.prototype.setMinassetsetlistList = function(value) {
  return jspb.Message.setField(this, 28, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.douyin.GiftMessage} returns this
 */
proto.douyin.GiftMessage.prototype.addMinassetsetlist = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 28, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.douyin.GiftMessage} returns this
 */
proto.douyin.GiftMessage.prototype.clearMinassetsetlistList = function() {
  return this.setMinassetsetlistList([]);
};


/**
 * optional uint64 totalCount = 29;
 * @return {number}
 */
proto.douyin.GiftMessage.prototype.getTotalcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 29, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.GiftMessage} returns this
 */
proto.douyin.GiftMessage.prototype.setTotalcount = function(value) {
  return jspb.Message.setProto3IntField(this, 29, value);
};


/**
 * optional uint32 clientGiftSource = 30;
 * @return {number}
 */
proto.douyin.GiftMessage.prototype.getClientgiftsource = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 30, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.GiftMessage} returns this
 */
proto.douyin.GiftMessage.prototype.setClientgiftsource = function(value) {
  return jspb.Message.setProto3IntField(this, 30, value);
};


/**
 * repeated uint64 toUserIdsList = 32;
 * @return {!Array<number>}
 */
proto.douyin.GiftMessage.prototype.getTouseridslistList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 32));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.douyin.GiftMessage} returns this
 */
proto.douyin.GiftMessage.prototype.setTouseridslistList = function(value) {
  return jspb.Message.setField(this, 32, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.douyin.GiftMessage} returns this
 */
proto.douyin.GiftMessage.prototype.addTouseridslist = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 32, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.douyin.GiftMessage} returns this
 */
proto.douyin.GiftMessage.prototype.clearTouseridslistList = function() {
  return this.setTouseridslistList([]);
};


/**
 * optional uint64 sendTime = 33;
 * @return {number}
 */
proto.douyin.GiftMessage.prototype.getSendtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 33, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.GiftMessage} returns this
 */
proto.douyin.GiftMessage.prototype.setSendtime = function(value) {
  return jspb.Message.setProto3IntField(this, 33, value);
};


/**
 * optional uint64 forceDisplayEffects = 34;
 * @return {number}
 */
proto.douyin.GiftMessage.prototype.getForcedisplayeffects = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 34, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.GiftMessage} returns this
 */
proto.douyin.GiftMessage.prototype.setForcedisplayeffects = function(value) {
  return jspb.Message.setProto3IntField(this, 34, value);
};


/**
 * optional string traceId = 35;
 * @return {string}
 */
proto.douyin.GiftMessage.prototype.getTraceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 35, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.GiftMessage} returns this
 */
proto.douyin.GiftMessage.prototype.setTraceid = function(value) {
  return jspb.Message.setProto3StringField(this, 35, value);
};


/**
 * optional uint64 effectDisplayTs = 36;
 * @return {number}
 */
proto.douyin.GiftMessage.prototype.getEffectdisplayts = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 36, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.GiftMessage} returns this
 */
proto.douyin.GiftMessage.prototype.setEffectdisplayts = function(value) {
  return jspb.Message.setProto3IntField(this, 36, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.GiftStruct.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.GiftStruct.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.GiftStruct} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.GiftStruct.toObject = function(includeInstance, msg) {
  var f, obj = {
    image: (f = msg.getImage()) && proto.douyin.Image.toObject(includeInstance, f),
    describe: jspb.Message.getFieldWithDefault(msg, 2, ""),
    notify: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    duration: jspb.Message.getFieldWithDefault(msg, 4, 0),
    id: jspb.Message.getFieldWithDefault(msg, 5, 0),
    forlinkmic: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    doodle: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    forfansclub: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    combo: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    type: jspb.Message.getFieldWithDefault(msg, 11, 0),
    diamondcount: jspb.Message.getFieldWithDefault(msg, 12, 0),
    isdisplayedonpanel: jspb.Message.getBooleanFieldWithDefault(msg, 13, false),
    primaryeffectid: jspb.Message.getFieldWithDefault(msg, 14, 0),
    giftlabelicon: (f = msg.getGiftlabelicon()) && proto.douyin.Image.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 16, ""),
    region: jspb.Message.getFieldWithDefault(msg, 17, ""),
    manual: jspb.Message.getFieldWithDefault(msg, 18, ""),
    forcustom: jspb.Message.getBooleanFieldWithDefault(msg, 19, false),
    icon: (f = msg.getIcon()) && proto.douyin.Image.toObject(includeInstance, f),
    actiontype: jspb.Message.getFieldWithDefault(msg, 22, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.GiftStruct}
 */
proto.douyin.GiftStruct.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.GiftStruct;
  return proto.douyin.GiftStruct.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.GiftStruct} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.GiftStruct}
 */
proto.douyin.GiftStruct.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.douyin.Image;
      reader.readMessage(value,proto.douyin.Image.deserializeBinaryFromReader);
      msg.setImage(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescribe(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNotify(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDuration(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setId(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setForlinkmic(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDoodle(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setForfansclub(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCombo(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setType(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDiamondcount(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsdisplayedonpanel(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPrimaryeffectid(value);
      break;
    case 15:
      var value = new proto.douyin.Image;
      reader.readMessage(value,proto.douyin.Image.deserializeBinaryFromReader);
      msg.setGiftlabelicon(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegion(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setManual(value);
      break;
    case 19:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setForcustom(value);
      break;
    case 21:
      var value = new proto.douyin.Image;
      reader.readMessage(value,proto.douyin.Image.deserializeBinaryFromReader);
      msg.setIcon(value);
      break;
    case 22:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setActiontype(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.GiftStruct.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.GiftStruct.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.GiftStruct} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.GiftStruct.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.douyin.Image.serializeBinaryToWriter
    );
  }
  f = message.getDescribe();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNotify();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getDuration();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getForlinkmic();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getDoodle();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getForfansclub();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getCombo();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeUint32(
      11,
      f
    );
  }
  f = message.getDiamondcount();
  if (f !== 0) {
    writer.writeUint32(
      12,
      f
    );
  }
  f = message.getIsdisplayedonpanel();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
  f = message.getPrimaryeffectid();
  if (f !== 0) {
    writer.writeUint64(
      14,
      f
    );
  }
  f = message.getGiftlabelicon();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.douyin.Image.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getRegion();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getManual();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getForcustom();
  if (f) {
    writer.writeBool(
      19,
      f
    );
  }
  f = message.getIcon();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.douyin.Image.serializeBinaryToWriter
    );
  }
  f = message.getActiontype();
  if (f !== 0) {
    writer.writeUint32(
      22,
      f
    );
  }
};


/**
 * optional Image image = 1;
 * @return {?proto.douyin.Image}
 */
proto.douyin.GiftStruct.prototype.getImage = function() {
  return /** @type{?proto.douyin.Image} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Image, 1));
};


/**
 * @param {?proto.douyin.Image|undefined} value
 * @return {!proto.douyin.GiftStruct} returns this
*/
proto.douyin.GiftStruct.prototype.setImage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.GiftStruct} returns this
 */
proto.douyin.GiftStruct.prototype.clearImage = function() {
  return this.setImage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.GiftStruct.prototype.hasImage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string describe = 2;
 * @return {string}
 */
proto.douyin.GiftStruct.prototype.getDescribe = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.GiftStruct} returns this
 */
proto.douyin.GiftStruct.prototype.setDescribe = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool notify = 3;
 * @return {boolean}
 */
proto.douyin.GiftStruct.prototype.getNotify = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.douyin.GiftStruct} returns this
 */
proto.douyin.GiftStruct.prototype.setNotify = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional uint64 duration = 4;
 * @return {number}
 */
proto.douyin.GiftStruct.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.GiftStruct} returns this
 */
proto.douyin.GiftStruct.prototype.setDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint64 id = 5;
 * @return {number}
 */
proto.douyin.GiftStruct.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.GiftStruct} returns this
 */
proto.douyin.GiftStruct.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional bool forLinkmic = 7;
 * @return {boolean}
 */
proto.douyin.GiftStruct.prototype.getForlinkmic = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.douyin.GiftStruct} returns this
 */
proto.douyin.GiftStruct.prototype.setForlinkmic = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional bool doodle = 8;
 * @return {boolean}
 */
proto.douyin.GiftStruct.prototype.getDoodle = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.douyin.GiftStruct} returns this
 */
proto.douyin.GiftStruct.prototype.setDoodle = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional bool forFansclub = 9;
 * @return {boolean}
 */
proto.douyin.GiftStruct.prototype.getForfansclub = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.douyin.GiftStruct} returns this
 */
proto.douyin.GiftStruct.prototype.setForfansclub = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional bool combo = 10;
 * @return {boolean}
 */
proto.douyin.GiftStruct.prototype.getCombo = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.douyin.GiftStruct} returns this
 */
proto.douyin.GiftStruct.prototype.setCombo = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional uint32 type = 11;
 * @return {number}
 */
proto.douyin.GiftStruct.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.GiftStruct} returns this
 */
proto.douyin.GiftStruct.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional uint32 diamondCount = 12;
 * @return {number}
 */
proto.douyin.GiftStruct.prototype.getDiamondcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.GiftStruct} returns this
 */
proto.douyin.GiftStruct.prototype.setDiamondcount = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional bool isDisplayedOnPanel = 13;
 * @return {boolean}
 */
proto.douyin.GiftStruct.prototype.getIsdisplayedonpanel = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.douyin.GiftStruct} returns this
 */
proto.douyin.GiftStruct.prototype.setIsdisplayedonpanel = function(value) {
  return jspb.Message.setProto3BooleanField(this, 13, value);
};


/**
 * optional uint64 primaryEffectId = 14;
 * @return {number}
 */
proto.douyin.GiftStruct.prototype.getPrimaryeffectid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.GiftStruct} returns this
 */
proto.douyin.GiftStruct.prototype.setPrimaryeffectid = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional Image giftLabelIcon = 15;
 * @return {?proto.douyin.Image}
 */
proto.douyin.GiftStruct.prototype.getGiftlabelicon = function() {
  return /** @type{?proto.douyin.Image} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Image, 15));
};


/**
 * @param {?proto.douyin.Image|undefined} value
 * @return {!proto.douyin.GiftStruct} returns this
*/
proto.douyin.GiftStruct.prototype.setGiftlabelicon = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.GiftStruct} returns this
 */
proto.douyin.GiftStruct.prototype.clearGiftlabelicon = function() {
  return this.setGiftlabelicon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.GiftStruct.prototype.hasGiftlabelicon = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional string name = 16;
 * @return {string}
 */
proto.douyin.GiftStruct.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.GiftStruct} returns this
 */
proto.douyin.GiftStruct.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string region = 17;
 * @return {string}
 */
proto.douyin.GiftStruct.prototype.getRegion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.GiftStruct} returns this
 */
proto.douyin.GiftStruct.prototype.setRegion = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional string manual = 18;
 * @return {string}
 */
proto.douyin.GiftStruct.prototype.getManual = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.GiftStruct} returns this
 */
proto.douyin.GiftStruct.prototype.setManual = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional bool forCustom = 19;
 * @return {boolean}
 */
proto.douyin.GiftStruct.prototype.getForcustom = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 19, false));
};


/**
 * @param {boolean} value
 * @return {!proto.douyin.GiftStruct} returns this
 */
proto.douyin.GiftStruct.prototype.setForcustom = function(value) {
  return jspb.Message.setProto3BooleanField(this, 19, value);
};


/**
 * optional Image icon = 21;
 * @return {?proto.douyin.Image}
 */
proto.douyin.GiftStruct.prototype.getIcon = function() {
  return /** @type{?proto.douyin.Image} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Image, 21));
};


/**
 * @param {?proto.douyin.Image|undefined} value
 * @return {!proto.douyin.GiftStruct} returns this
*/
proto.douyin.GiftStruct.prototype.setIcon = function(value) {
  return jspb.Message.setWrapperField(this, 21, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.GiftStruct} returns this
 */
proto.douyin.GiftStruct.prototype.clearIcon = function() {
  return this.setIcon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.GiftStruct.prototype.hasIcon = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional uint32 actionType = 22;
 * @return {number}
 */
proto.douyin.GiftStruct.prototype.getActiontype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 22, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.GiftStruct} returns this
 */
proto.douyin.GiftStruct.prototype.setActiontype = function(value) {
  return jspb.Message.setProto3IntField(this, 22, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.douyin.GiftIMPriority.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.GiftIMPriority.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.GiftIMPriority.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.GiftIMPriority} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.GiftIMPriority.toObject = function(includeInstance, msg) {
  var f, obj = {
    queuesizeslistList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    selfqueuepriority: jspb.Message.getFieldWithDefault(msg, 2, 0),
    priority: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.GiftIMPriority}
 */
proto.douyin.GiftIMPriority.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.GiftIMPriority;
  return proto.douyin.GiftIMPriority.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.GiftIMPriority} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.GiftIMPriority}
 */
proto.douyin.GiftIMPriority.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedUint64() : [reader.readUint64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addQueuesizeslist(values[i]);
      }
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSelfqueuepriority(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPriority(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.GiftIMPriority.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.GiftIMPriority.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.GiftIMPriority} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.GiftIMPriority.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQueuesizeslistList();
  if (f.length > 0) {
    writer.writePackedUint64(
      1,
      f
    );
  }
  f = message.getSelfqueuepriority();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getPriority();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * repeated uint64 queueSizesList = 1;
 * @return {!Array<number>}
 */
proto.douyin.GiftIMPriority.prototype.getQueuesizeslistList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.douyin.GiftIMPriority} returns this
 */
proto.douyin.GiftIMPriority.prototype.setQueuesizeslistList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.douyin.GiftIMPriority} returns this
 */
proto.douyin.GiftIMPriority.prototype.addQueuesizeslist = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.douyin.GiftIMPriority} returns this
 */
proto.douyin.GiftIMPriority.prototype.clearQueuesizeslistList = function() {
  return this.setQueuesizeslistList([]);
};


/**
 * optional uint64 selfQueuePriority = 2;
 * @return {number}
 */
proto.douyin.GiftIMPriority.prototype.getSelfqueuepriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.GiftIMPriority} returns this
 */
proto.douyin.GiftIMPriority.prototype.setSelfqueuepriority = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 priority = 3;
 * @return {number}
 */
proto.douyin.GiftIMPriority.prototype.getPriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.GiftIMPriority} returns this
 */
proto.douyin.GiftIMPriority.prototype.setPriority = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.TextEffect.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.TextEffect.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.TextEffect} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.TextEffect.toObject = function(includeInstance, msg) {
  var f, obj = {
    portrait: (f = msg.getPortrait()) && proto.douyin.TextEffectDetail.toObject(includeInstance, f),
    landscape: (f = msg.getLandscape()) && proto.douyin.TextEffectDetail.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.TextEffect}
 */
proto.douyin.TextEffect.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.TextEffect;
  return proto.douyin.TextEffect.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.TextEffect} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.TextEffect}
 */
proto.douyin.TextEffect.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.douyin.TextEffectDetail;
      reader.readMessage(value,proto.douyin.TextEffectDetail.deserializeBinaryFromReader);
      msg.setPortrait(value);
      break;
    case 2:
      var value = new proto.douyin.TextEffectDetail;
      reader.readMessage(value,proto.douyin.TextEffectDetail.deserializeBinaryFromReader);
      msg.setLandscape(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.TextEffect.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.TextEffect.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.TextEffect} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.TextEffect.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPortrait();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.douyin.TextEffectDetail.serializeBinaryToWriter
    );
  }
  f = message.getLandscape();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.douyin.TextEffectDetail.serializeBinaryToWriter
    );
  }
};


/**
 * optional TextEffectDetail portrait = 1;
 * @return {?proto.douyin.TextEffectDetail}
 */
proto.douyin.TextEffect.prototype.getPortrait = function() {
  return /** @type{?proto.douyin.TextEffectDetail} */ (
    jspb.Message.getWrapperField(this, proto.douyin.TextEffectDetail, 1));
};


/**
 * @param {?proto.douyin.TextEffectDetail|undefined} value
 * @return {!proto.douyin.TextEffect} returns this
*/
proto.douyin.TextEffect.prototype.setPortrait = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.TextEffect} returns this
 */
proto.douyin.TextEffect.prototype.clearPortrait = function() {
  return this.setPortrait(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.TextEffect.prototype.hasPortrait = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional TextEffectDetail landscape = 2;
 * @return {?proto.douyin.TextEffectDetail}
 */
proto.douyin.TextEffect.prototype.getLandscape = function() {
  return /** @type{?proto.douyin.TextEffectDetail} */ (
    jspb.Message.getWrapperField(this, proto.douyin.TextEffectDetail, 2));
};


/**
 * @param {?proto.douyin.TextEffectDetail|undefined} value
 * @return {!proto.douyin.TextEffect} returns this
*/
proto.douyin.TextEffect.prototype.setLandscape = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.TextEffect} returns this
 */
proto.douyin.TextEffect.prototype.clearLandscape = function() {
  return this.setLandscape(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.TextEffect.prototype.hasLandscape = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.TextEffectDetail.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.TextEffectDetail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.TextEffectDetail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.TextEffectDetail.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: (f = msg.getText()) && proto.douyin.Text.toObject(includeInstance, f),
    textfontsize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    background: (f = msg.getBackground()) && proto.douyin.Image.toObject(includeInstance, f),
    start: jspb.Message.getFieldWithDefault(msg, 4, 0),
    duration: jspb.Message.getFieldWithDefault(msg, 5, 0),
    x: jspb.Message.getFieldWithDefault(msg, 6, 0),
    y: jspb.Message.getFieldWithDefault(msg, 7, 0),
    width: jspb.Message.getFieldWithDefault(msg, 8, 0),
    height: jspb.Message.getFieldWithDefault(msg, 9, 0),
    shadowdx: jspb.Message.getFieldWithDefault(msg, 10, 0),
    shadowdy: jspb.Message.getFieldWithDefault(msg, 11, 0),
    shadowradius: jspb.Message.getFieldWithDefault(msg, 12, 0),
    shadowcolor: jspb.Message.getFieldWithDefault(msg, 13, ""),
    strokecolor: jspb.Message.getFieldWithDefault(msg, 14, ""),
    strokewidth: jspb.Message.getFieldWithDefault(msg, 15, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.TextEffectDetail}
 */
proto.douyin.TextEffectDetail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.TextEffectDetail;
  return proto.douyin.TextEffectDetail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.TextEffectDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.TextEffectDetail}
 */
proto.douyin.TextEffectDetail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.douyin.Text;
      reader.readMessage(value,proto.douyin.Text.deserializeBinaryFromReader);
      msg.setText(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTextfontsize(value);
      break;
    case 3:
      var value = new proto.douyin.Image;
      reader.readMessage(value,proto.douyin.Image.deserializeBinaryFromReader);
      msg.setBackground(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setStart(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDuration(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setX(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setY(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setWidth(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHeight(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setShadowdx(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setShadowdy(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setShadowradius(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setShadowcolor(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setStrokecolor(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setStrokewidth(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.TextEffectDetail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.TextEffectDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.TextEffectDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.TextEffectDetail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.douyin.Text.serializeBinaryToWriter
    );
  }
  f = message.getTextfontsize();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getBackground();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.douyin.Image.serializeBinaryToWriter
    );
  }
  f = message.getStart();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getDuration();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getX();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getY();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getWidth();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = message.getShadowdx();
  if (f !== 0) {
    writer.writeUint32(
      10,
      f
    );
  }
  f = message.getShadowdy();
  if (f !== 0) {
    writer.writeUint32(
      11,
      f
    );
  }
  f = message.getShadowradius();
  if (f !== 0) {
    writer.writeUint32(
      12,
      f
    );
  }
  f = message.getShadowcolor();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getStrokecolor();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getStrokewidth();
  if (f !== 0) {
    writer.writeUint32(
      15,
      f
    );
  }
};


/**
 * optional Text text = 1;
 * @return {?proto.douyin.Text}
 */
proto.douyin.TextEffectDetail.prototype.getText = function() {
  return /** @type{?proto.douyin.Text} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Text, 1));
};


/**
 * @param {?proto.douyin.Text|undefined} value
 * @return {!proto.douyin.TextEffectDetail} returns this
*/
proto.douyin.TextEffectDetail.prototype.setText = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.TextEffectDetail} returns this
 */
proto.douyin.TextEffectDetail.prototype.clearText = function() {
  return this.setText(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.TextEffectDetail.prototype.hasText = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 textFontSize = 2;
 * @return {number}
 */
proto.douyin.TextEffectDetail.prototype.getTextfontsize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.TextEffectDetail} returns this
 */
proto.douyin.TextEffectDetail.prototype.setTextfontsize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional Image background = 3;
 * @return {?proto.douyin.Image}
 */
proto.douyin.TextEffectDetail.prototype.getBackground = function() {
  return /** @type{?proto.douyin.Image} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Image, 3));
};


/**
 * @param {?proto.douyin.Image|undefined} value
 * @return {!proto.douyin.TextEffectDetail} returns this
*/
proto.douyin.TextEffectDetail.prototype.setBackground = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.TextEffectDetail} returns this
 */
proto.douyin.TextEffectDetail.prototype.clearBackground = function() {
  return this.setBackground(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.TextEffectDetail.prototype.hasBackground = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 start = 4;
 * @return {number}
 */
proto.douyin.TextEffectDetail.prototype.getStart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.TextEffectDetail} returns this
 */
proto.douyin.TextEffectDetail.prototype.setStart = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 duration = 5;
 * @return {number}
 */
proto.douyin.TextEffectDetail.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.TextEffectDetail} returns this
 */
proto.douyin.TextEffectDetail.prototype.setDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 x = 6;
 * @return {number}
 */
proto.douyin.TextEffectDetail.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.TextEffectDetail} returns this
 */
proto.douyin.TextEffectDetail.prototype.setX = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint32 y = 7;
 * @return {number}
 */
proto.douyin.TextEffectDetail.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.TextEffectDetail} returns this
 */
proto.douyin.TextEffectDetail.prototype.setY = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint32 width = 8;
 * @return {number}
 */
proto.douyin.TextEffectDetail.prototype.getWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.TextEffectDetail} returns this
 */
proto.douyin.TextEffectDetail.prototype.setWidth = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint32 height = 9;
 * @return {number}
 */
proto.douyin.TextEffectDetail.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.TextEffectDetail} returns this
 */
proto.douyin.TextEffectDetail.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional uint32 shadowDx = 10;
 * @return {number}
 */
proto.douyin.TextEffectDetail.prototype.getShadowdx = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.TextEffectDetail} returns this
 */
proto.douyin.TextEffectDetail.prototype.setShadowdx = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional uint32 shadowDy = 11;
 * @return {number}
 */
proto.douyin.TextEffectDetail.prototype.getShadowdy = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.TextEffectDetail} returns this
 */
proto.douyin.TextEffectDetail.prototype.setShadowdy = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional uint32 shadowRadius = 12;
 * @return {number}
 */
proto.douyin.TextEffectDetail.prototype.getShadowradius = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.TextEffectDetail} returns this
 */
proto.douyin.TextEffectDetail.prototype.setShadowradius = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional string shadowColor = 13;
 * @return {string}
 */
proto.douyin.TextEffectDetail.prototype.getShadowcolor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.TextEffectDetail} returns this
 */
proto.douyin.TextEffectDetail.prototype.setShadowcolor = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string strokeColor = 14;
 * @return {string}
 */
proto.douyin.TextEffectDetail.prototype.getStrokecolor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.TextEffectDetail} returns this
 */
proto.douyin.TextEffectDetail.prototype.setStrokecolor = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional uint32 strokeWidth = 15;
 * @return {number}
 */
proto.douyin.TextEffectDetail.prototype.getStrokewidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.TextEffectDetail} returns this
 */
proto.douyin.TextEffectDetail.prototype.setStrokewidth = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.MemberMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.MemberMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.MemberMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.MemberMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && proto.douyin.Common.toObject(includeInstance, f),
    user: (f = msg.getUser()) && proto.douyin.User.toObject(includeInstance, f),
    membercount: jspb.Message.getFieldWithDefault(msg, 3, 0),
    operator: (f = msg.getOperator()) && proto.douyin.User.toObject(includeInstance, f),
    issettoadmin: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    istopuser: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    rankscore: jspb.Message.getFieldWithDefault(msg, 7, 0),
    topuserno: jspb.Message.getFieldWithDefault(msg, 8, 0),
    entertype: jspb.Message.getFieldWithDefault(msg, 9, 0),
    action: jspb.Message.getFieldWithDefault(msg, 10, 0),
    actiondescription: jspb.Message.getFieldWithDefault(msg, 11, ""),
    userid: jspb.Message.getFieldWithDefault(msg, 12, 0),
    effectconfig: (f = msg.getEffectconfig()) && proto.douyin.EffectConfig.toObject(includeInstance, f),
    popstr: jspb.Message.getFieldWithDefault(msg, 14, ""),
    entereffectconfig: (f = msg.getEntereffectconfig()) && proto.douyin.EffectConfig.toObject(includeInstance, f),
    backgroundimage: (f = msg.getBackgroundimage()) && proto.douyin.Image.toObject(includeInstance, f),
    backgroundimagev2: (f = msg.getBackgroundimagev2()) && proto.douyin.Image.toObject(includeInstance, f),
    anchordisplaytext: (f = msg.getAnchordisplaytext()) && proto.douyin.Text.toObject(includeInstance, f),
    publicareacommon: (f = msg.getPublicareacommon()) && proto.douyin.PublicAreaCommon.toObject(includeInstance, f),
    userentertiptype: jspb.Message.getFieldWithDefault(msg, 20, 0),
    anchorentertiptype: jspb.Message.getFieldWithDefault(msg, 21, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.MemberMessage}
 */
proto.douyin.MemberMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.MemberMessage;
  return proto.douyin.MemberMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.MemberMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.MemberMessage}
 */
proto.douyin.MemberMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.douyin.Common;
      reader.readMessage(value,proto.douyin.Common.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new proto.douyin.User;
      reader.readMessage(value,proto.douyin.User.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMembercount(value);
      break;
    case 4:
      var value = new proto.douyin.User;
      reader.readMessage(value,proto.douyin.User.deserializeBinaryFromReader);
      msg.setOperator(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIssettoadmin(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIstopuser(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRankscore(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTopuserno(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setEntertype(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAction(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setActiondescription(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUserid(value);
      break;
    case 13:
      var value = new proto.douyin.EffectConfig;
      reader.readMessage(value,proto.douyin.EffectConfig.deserializeBinaryFromReader);
      msg.setEffectconfig(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setPopstr(value);
      break;
    case 15:
      var value = new proto.douyin.EffectConfig;
      reader.readMessage(value,proto.douyin.EffectConfig.deserializeBinaryFromReader);
      msg.setEntereffectconfig(value);
      break;
    case 16:
      var value = new proto.douyin.Image;
      reader.readMessage(value,proto.douyin.Image.deserializeBinaryFromReader);
      msg.setBackgroundimage(value);
      break;
    case 17:
      var value = new proto.douyin.Image;
      reader.readMessage(value,proto.douyin.Image.deserializeBinaryFromReader);
      msg.setBackgroundimagev2(value);
      break;
    case 18:
      var value = new proto.douyin.Text;
      reader.readMessage(value,proto.douyin.Text.deserializeBinaryFromReader);
      msg.setAnchordisplaytext(value);
      break;
    case 19:
      var value = new proto.douyin.PublicAreaCommon;
      reader.readMessage(value,proto.douyin.PublicAreaCommon.deserializeBinaryFromReader);
      msg.setPublicareacommon(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUserentertiptype(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAnchorentertiptype(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.MemberMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.MemberMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.MemberMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.MemberMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.douyin.Common.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.douyin.User.serializeBinaryToWriter
    );
  }
  f = message.getMembercount();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getOperator();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.douyin.User.serializeBinaryToWriter
    );
  }
  f = message.getIssettoadmin();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getIstopuser();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getRankscore();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getTopuserno();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = message.getEntertype();
  if (f !== 0) {
    writer.writeUint64(
      9,
      f
    );
  }
  f = message.getAction();
  if (f !== 0) {
    writer.writeUint64(
      10,
      f
    );
  }
  f = message.getActiondescription();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getUserid();
  if (f !== 0) {
    writer.writeUint64(
      12,
      f
    );
  }
  f = message.getEffectconfig();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.douyin.EffectConfig.serializeBinaryToWriter
    );
  }
  f = message.getPopstr();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getEntereffectconfig();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.douyin.EffectConfig.serializeBinaryToWriter
    );
  }
  f = message.getBackgroundimage();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.douyin.Image.serializeBinaryToWriter
    );
  }
  f = message.getBackgroundimagev2();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.douyin.Image.serializeBinaryToWriter
    );
  }
  f = message.getAnchordisplaytext();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.douyin.Text.serializeBinaryToWriter
    );
  }
  f = message.getPublicareacommon();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.douyin.PublicAreaCommon.serializeBinaryToWriter
    );
  }
  f = message.getUserentertiptype();
  if (f !== 0) {
    writer.writeUint64(
      20,
      f
    );
  }
  f = message.getAnchorentertiptype();
  if (f !== 0) {
    writer.writeUint64(
      21,
      f
    );
  }
};


/**
 * optional Common common = 1;
 * @return {?proto.douyin.Common}
 */
proto.douyin.MemberMessage.prototype.getCommon = function() {
  return /** @type{?proto.douyin.Common} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Common, 1));
};


/**
 * @param {?proto.douyin.Common|undefined} value
 * @return {!proto.douyin.MemberMessage} returns this
*/
proto.douyin.MemberMessage.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.MemberMessage} returns this
 */
proto.douyin.MemberMessage.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.MemberMessage.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional User user = 2;
 * @return {?proto.douyin.User}
 */
proto.douyin.MemberMessage.prototype.getUser = function() {
  return /** @type{?proto.douyin.User} */ (
    jspb.Message.getWrapperField(this, proto.douyin.User, 2));
};


/**
 * @param {?proto.douyin.User|undefined} value
 * @return {!proto.douyin.MemberMessage} returns this
*/
proto.douyin.MemberMessage.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.MemberMessage} returns this
 */
proto.douyin.MemberMessage.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.MemberMessage.prototype.hasUser = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 memberCount = 3;
 * @return {number}
 */
proto.douyin.MemberMessage.prototype.getMembercount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.MemberMessage} returns this
 */
proto.douyin.MemberMessage.prototype.setMembercount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional User operator = 4;
 * @return {?proto.douyin.User}
 */
proto.douyin.MemberMessage.prototype.getOperator = function() {
  return /** @type{?proto.douyin.User} */ (
    jspb.Message.getWrapperField(this, proto.douyin.User, 4));
};


/**
 * @param {?proto.douyin.User|undefined} value
 * @return {!proto.douyin.MemberMessage} returns this
*/
proto.douyin.MemberMessage.prototype.setOperator = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.MemberMessage} returns this
 */
proto.douyin.MemberMessage.prototype.clearOperator = function() {
  return this.setOperator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.MemberMessage.prototype.hasOperator = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool isSetToAdmin = 5;
 * @return {boolean}
 */
proto.douyin.MemberMessage.prototype.getIssettoadmin = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.douyin.MemberMessage} returns this
 */
proto.douyin.MemberMessage.prototype.setIssettoadmin = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool isTopUser = 6;
 * @return {boolean}
 */
proto.douyin.MemberMessage.prototype.getIstopuser = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.douyin.MemberMessage} returns this
 */
proto.douyin.MemberMessage.prototype.setIstopuser = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional uint64 rankScore = 7;
 * @return {number}
 */
proto.douyin.MemberMessage.prototype.getRankscore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.MemberMessage} returns this
 */
proto.douyin.MemberMessage.prototype.setRankscore = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint64 topUserNo = 8;
 * @return {number}
 */
proto.douyin.MemberMessage.prototype.getTopuserno = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.MemberMessage} returns this
 */
proto.douyin.MemberMessage.prototype.setTopuserno = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint64 enterType = 9;
 * @return {number}
 */
proto.douyin.MemberMessage.prototype.getEntertype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.MemberMessage} returns this
 */
proto.douyin.MemberMessage.prototype.setEntertype = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional uint64 action = 10;
 * @return {number}
 */
proto.douyin.MemberMessage.prototype.getAction = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.MemberMessage} returns this
 */
proto.douyin.MemberMessage.prototype.setAction = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional string actionDescription = 11;
 * @return {string}
 */
proto.douyin.MemberMessage.prototype.getActiondescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.MemberMessage} returns this
 */
proto.douyin.MemberMessage.prototype.setActiondescription = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional uint64 userId = 12;
 * @return {number}
 */
proto.douyin.MemberMessage.prototype.getUserid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.MemberMessage} returns this
 */
proto.douyin.MemberMessage.prototype.setUserid = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional EffectConfig effectConfig = 13;
 * @return {?proto.douyin.EffectConfig}
 */
proto.douyin.MemberMessage.prototype.getEffectconfig = function() {
  return /** @type{?proto.douyin.EffectConfig} */ (
    jspb.Message.getWrapperField(this, proto.douyin.EffectConfig, 13));
};


/**
 * @param {?proto.douyin.EffectConfig|undefined} value
 * @return {!proto.douyin.MemberMessage} returns this
*/
proto.douyin.MemberMessage.prototype.setEffectconfig = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.MemberMessage} returns this
 */
proto.douyin.MemberMessage.prototype.clearEffectconfig = function() {
  return this.setEffectconfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.MemberMessage.prototype.hasEffectconfig = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional string popStr = 14;
 * @return {string}
 */
proto.douyin.MemberMessage.prototype.getPopstr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.MemberMessage} returns this
 */
proto.douyin.MemberMessage.prototype.setPopstr = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional EffectConfig enterEffectConfig = 15;
 * @return {?proto.douyin.EffectConfig}
 */
proto.douyin.MemberMessage.prototype.getEntereffectconfig = function() {
  return /** @type{?proto.douyin.EffectConfig} */ (
    jspb.Message.getWrapperField(this, proto.douyin.EffectConfig, 15));
};


/**
 * @param {?proto.douyin.EffectConfig|undefined} value
 * @return {!proto.douyin.MemberMessage} returns this
*/
proto.douyin.MemberMessage.prototype.setEntereffectconfig = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.MemberMessage} returns this
 */
proto.douyin.MemberMessage.prototype.clearEntereffectconfig = function() {
  return this.setEntereffectconfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.MemberMessage.prototype.hasEntereffectconfig = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional Image backgroundImage = 16;
 * @return {?proto.douyin.Image}
 */
proto.douyin.MemberMessage.prototype.getBackgroundimage = function() {
  return /** @type{?proto.douyin.Image} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Image, 16));
};


/**
 * @param {?proto.douyin.Image|undefined} value
 * @return {!proto.douyin.MemberMessage} returns this
*/
proto.douyin.MemberMessage.prototype.setBackgroundimage = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.MemberMessage} returns this
 */
proto.douyin.MemberMessage.prototype.clearBackgroundimage = function() {
  return this.setBackgroundimage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.MemberMessage.prototype.hasBackgroundimage = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional Image backgroundImageV2 = 17;
 * @return {?proto.douyin.Image}
 */
proto.douyin.MemberMessage.prototype.getBackgroundimagev2 = function() {
  return /** @type{?proto.douyin.Image} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Image, 17));
};


/**
 * @param {?proto.douyin.Image|undefined} value
 * @return {!proto.douyin.MemberMessage} returns this
*/
proto.douyin.MemberMessage.prototype.setBackgroundimagev2 = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.MemberMessage} returns this
 */
proto.douyin.MemberMessage.prototype.clearBackgroundimagev2 = function() {
  return this.setBackgroundimagev2(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.MemberMessage.prototype.hasBackgroundimagev2 = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional Text anchorDisplayText = 18;
 * @return {?proto.douyin.Text}
 */
proto.douyin.MemberMessage.prototype.getAnchordisplaytext = function() {
  return /** @type{?proto.douyin.Text} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Text, 18));
};


/**
 * @param {?proto.douyin.Text|undefined} value
 * @return {!proto.douyin.MemberMessage} returns this
*/
proto.douyin.MemberMessage.prototype.setAnchordisplaytext = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.MemberMessage} returns this
 */
proto.douyin.MemberMessage.prototype.clearAnchordisplaytext = function() {
  return this.setAnchordisplaytext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.MemberMessage.prototype.hasAnchordisplaytext = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional PublicAreaCommon publicAreaCommon = 19;
 * @return {?proto.douyin.PublicAreaCommon}
 */
proto.douyin.MemberMessage.prototype.getPublicareacommon = function() {
  return /** @type{?proto.douyin.PublicAreaCommon} */ (
    jspb.Message.getWrapperField(this, proto.douyin.PublicAreaCommon, 19));
};


/**
 * @param {?proto.douyin.PublicAreaCommon|undefined} value
 * @return {!proto.douyin.MemberMessage} returns this
*/
proto.douyin.MemberMessage.prototype.setPublicareacommon = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.MemberMessage} returns this
 */
proto.douyin.MemberMessage.prototype.clearPublicareacommon = function() {
  return this.setPublicareacommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.MemberMessage.prototype.hasPublicareacommon = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional uint64 userEnterTipType = 20;
 * @return {number}
 */
proto.douyin.MemberMessage.prototype.getUserentertiptype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.MemberMessage} returns this
 */
proto.douyin.MemberMessage.prototype.setUserentertiptype = function(value) {
  return jspb.Message.setProto3IntField(this, 20, value);
};


/**
 * optional uint64 anchorEnterTipType = 21;
 * @return {number}
 */
proto.douyin.MemberMessage.prototype.getAnchorentertiptype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.MemberMessage} returns this
 */
proto.douyin.MemberMessage.prototype.setAnchorentertiptype = function(value) {
  return jspb.Message.setProto3IntField(this, 21, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.PublicAreaCommon.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.PublicAreaCommon.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.PublicAreaCommon} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.PublicAreaCommon.toObject = function(includeInstance, msg) {
  var f, obj = {
    userlabel: (f = msg.getUserlabel()) && proto.douyin.Image.toObject(includeInstance, f),
    userconsumeinroom: jspb.Message.getFieldWithDefault(msg, 2, 0),
    usersendgiftcntinroom: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.PublicAreaCommon}
 */
proto.douyin.PublicAreaCommon.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.PublicAreaCommon;
  return proto.douyin.PublicAreaCommon.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.PublicAreaCommon} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.PublicAreaCommon}
 */
proto.douyin.PublicAreaCommon.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.douyin.Image;
      reader.readMessage(value,proto.douyin.Image.deserializeBinaryFromReader);
      msg.setUserlabel(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUserconsumeinroom(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUsersendgiftcntinroom(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.PublicAreaCommon.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.PublicAreaCommon.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.PublicAreaCommon} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.PublicAreaCommon.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserlabel();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.douyin.Image.serializeBinaryToWriter
    );
  }
  f = message.getUserconsumeinroom();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getUsersendgiftcntinroom();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional Image userLabel = 1;
 * @return {?proto.douyin.Image}
 */
proto.douyin.PublicAreaCommon.prototype.getUserlabel = function() {
  return /** @type{?proto.douyin.Image} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Image, 1));
};


/**
 * @param {?proto.douyin.Image|undefined} value
 * @return {!proto.douyin.PublicAreaCommon} returns this
*/
proto.douyin.PublicAreaCommon.prototype.setUserlabel = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.PublicAreaCommon} returns this
 */
proto.douyin.PublicAreaCommon.prototype.clearUserlabel = function() {
  return this.setUserlabel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.PublicAreaCommon.prototype.hasUserlabel = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 userConsumeInRoom = 2;
 * @return {number}
 */
proto.douyin.PublicAreaCommon.prototype.getUserconsumeinroom = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.PublicAreaCommon} returns this
 */
proto.douyin.PublicAreaCommon.prototype.setUserconsumeinroom = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 userSendGiftCntInRoom = 3;
 * @return {number}
 */
proto.douyin.PublicAreaCommon.prototype.getUsersendgiftcntinroom = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.PublicAreaCommon} returns this
 */
proto.douyin.PublicAreaCommon.prototype.setUsersendgiftcntinroom = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.douyin.EffectConfig.repeatedFields_ = [9,13];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.EffectConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.EffectConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.EffectConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.EffectConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    icon: (f = msg.getIcon()) && proto.douyin.Image.toObject(includeInstance, f),
    avatarpos: jspb.Message.getFieldWithDefault(msg, 3, 0),
    text: (f = msg.getText()) && proto.douyin.Text.toObject(includeInstance, f),
    texticon: (f = msg.getTexticon()) && proto.douyin.Image.toObject(includeInstance, f),
    staytime: jspb.Message.getFieldWithDefault(msg, 6, 0),
    animassetid: jspb.Message.getFieldWithDefault(msg, 7, 0),
    badge: (f = msg.getBadge()) && proto.douyin.Image.toObject(includeInstance, f),
    flexsettingarraylistList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f,
    texticonoverlay: (f = msg.getTexticonoverlay()) && proto.douyin.Image.toObject(includeInstance, f),
    animatedbadge: (f = msg.getAnimatedbadge()) && proto.douyin.Image.toObject(includeInstance, f),
    hassweeplight: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    textflexsettingarraylistList: (f = jspb.Message.getRepeatedField(msg, 13)) == null ? undefined : f,
    centeranimassetid: jspb.Message.getFieldWithDefault(msg, 14, 0),
    dynamicimage: (f = msg.getDynamicimage()) && proto.douyin.Image.toObject(includeInstance, f),
    extramapMap: (f = msg.getExtramapMap()) ? f.toObject(includeInstance, undefined) : [],
    mp4animassetid: jspb.Message.getFieldWithDefault(msg, 17, 0),
    priority: jspb.Message.getFieldWithDefault(msg, 18, 0),
    maxwaittime: jspb.Message.getFieldWithDefault(msg, 19, 0),
    dressid: jspb.Message.getFieldWithDefault(msg, 20, ""),
    alignment: jspb.Message.getFieldWithDefault(msg, 21, 0),
    alignmentoffset: jspb.Message.getFieldWithDefault(msg, 22, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.EffectConfig}
 */
proto.douyin.EffectConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.EffectConfig;
  return proto.douyin.EffectConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.EffectConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.EffectConfig}
 */
proto.douyin.EffectConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setType(value);
      break;
    case 2:
      var value = new proto.douyin.Image;
      reader.readMessage(value,proto.douyin.Image.deserializeBinaryFromReader);
      msg.setIcon(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAvatarpos(value);
      break;
    case 4:
      var value = new proto.douyin.Text;
      reader.readMessage(value,proto.douyin.Text.deserializeBinaryFromReader);
      msg.setText(value);
      break;
    case 5:
      var value = new proto.douyin.Image;
      reader.readMessage(value,proto.douyin.Image.deserializeBinaryFromReader);
      msg.setTexticon(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setStaytime(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAnimassetid(value);
      break;
    case 8:
      var value = new proto.douyin.Image;
      reader.readMessage(value,proto.douyin.Image.deserializeBinaryFromReader);
      msg.setBadge(value);
      break;
    case 9:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedUint64() : [reader.readUint64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addFlexsettingarraylist(values[i]);
      }
      break;
    case 10:
      var value = new proto.douyin.Image;
      reader.readMessage(value,proto.douyin.Image.deserializeBinaryFromReader);
      msg.setTexticonoverlay(value);
      break;
    case 11:
      var value = new proto.douyin.Image;
      reader.readMessage(value,proto.douyin.Image.deserializeBinaryFromReader);
      msg.setAnimatedbadge(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHassweeplight(value);
      break;
    case 13:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedUint64() : [reader.readUint64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addTextflexsettingarraylist(values[i]);
      }
      break;
    case 14:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCenteranimassetid(value);
      break;
    case 15:
      var value = new proto.douyin.Image;
      reader.readMessage(value,proto.douyin.Image.deserializeBinaryFromReader);
      msg.setDynamicimage(value);
      break;
    case 16:
      var value = msg.getExtramapMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    case 17:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMp4animassetid(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPriority(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaxwaittime(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setDressid(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAlignment(value);
      break;
    case 22:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAlignmentoffset(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.EffectConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.EffectConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.EffectConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.EffectConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getIcon();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.douyin.Image.serializeBinaryToWriter
    );
  }
  f = message.getAvatarpos();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getText();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.douyin.Text.serializeBinaryToWriter
    );
  }
  f = message.getTexticon();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.douyin.Image.serializeBinaryToWriter
    );
  }
  f = message.getStaytime();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getAnimassetid();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getBadge();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.douyin.Image.serializeBinaryToWriter
    );
  }
  f = message.getFlexsettingarraylistList();
  if (f.length > 0) {
    writer.writePackedUint64(
      9,
      f
    );
  }
  f = message.getTexticonoverlay();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.douyin.Image.serializeBinaryToWriter
    );
  }
  f = message.getAnimatedbadge();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.douyin.Image.serializeBinaryToWriter
    );
  }
  f = message.getHassweeplight();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getTextflexsettingarraylistList();
  if (f.length > 0) {
    writer.writePackedUint64(
      13,
      f
    );
  }
  f = message.getCenteranimassetid();
  if (f !== 0) {
    writer.writeUint64(
      14,
      f
    );
  }
  f = message.getDynamicimage();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.douyin.Image.serializeBinaryToWriter
    );
  }
  f = message.getExtramapMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(16, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getMp4animassetid();
  if (f !== 0) {
    writer.writeUint64(
      17,
      f
    );
  }
  f = message.getPriority();
  if (f !== 0) {
    writer.writeUint64(
      18,
      f
    );
  }
  f = message.getMaxwaittime();
  if (f !== 0) {
    writer.writeUint64(
      19,
      f
    );
  }
  f = message.getDressid();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getAlignment();
  if (f !== 0) {
    writer.writeUint64(
      21,
      f
    );
  }
  f = message.getAlignmentoffset();
  if (f !== 0) {
    writer.writeUint64(
      22,
      f
    );
  }
};


/**
 * optional uint64 type = 1;
 * @return {number}
 */
proto.douyin.EffectConfig.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.EffectConfig} returns this
 */
proto.douyin.EffectConfig.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Image icon = 2;
 * @return {?proto.douyin.Image}
 */
proto.douyin.EffectConfig.prototype.getIcon = function() {
  return /** @type{?proto.douyin.Image} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Image, 2));
};


/**
 * @param {?proto.douyin.Image|undefined} value
 * @return {!proto.douyin.EffectConfig} returns this
*/
proto.douyin.EffectConfig.prototype.setIcon = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.EffectConfig} returns this
 */
proto.douyin.EffectConfig.prototype.clearIcon = function() {
  return this.setIcon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.EffectConfig.prototype.hasIcon = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 avatarPos = 3;
 * @return {number}
 */
proto.douyin.EffectConfig.prototype.getAvatarpos = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.EffectConfig} returns this
 */
proto.douyin.EffectConfig.prototype.setAvatarpos = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional Text text = 4;
 * @return {?proto.douyin.Text}
 */
proto.douyin.EffectConfig.prototype.getText = function() {
  return /** @type{?proto.douyin.Text} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Text, 4));
};


/**
 * @param {?proto.douyin.Text|undefined} value
 * @return {!proto.douyin.EffectConfig} returns this
*/
proto.douyin.EffectConfig.prototype.setText = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.EffectConfig} returns this
 */
proto.douyin.EffectConfig.prototype.clearText = function() {
  return this.setText(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.EffectConfig.prototype.hasText = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Image textIcon = 5;
 * @return {?proto.douyin.Image}
 */
proto.douyin.EffectConfig.prototype.getTexticon = function() {
  return /** @type{?proto.douyin.Image} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Image, 5));
};


/**
 * @param {?proto.douyin.Image|undefined} value
 * @return {!proto.douyin.EffectConfig} returns this
*/
proto.douyin.EffectConfig.prototype.setTexticon = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.EffectConfig} returns this
 */
proto.douyin.EffectConfig.prototype.clearTexticon = function() {
  return this.setTexticon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.EffectConfig.prototype.hasTexticon = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional uint32 stayTime = 6;
 * @return {number}
 */
proto.douyin.EffectConfig.prototype.getStaytime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.EffectConfig} returns this
 */
proto.douyin.EffectConfig.prototype.setStaytime = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint64 animAssetId = 7;
 * @return {number}
 */
proto.douyin.EffectConfig.prototype.getAnimassetid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.EffectConfig} returns this
 */
proto.douyin.EffectConfig.prototype.setAnimassetid = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional Image badge = 8;
 * @return {?proto.douyin.Image}
 */
proto.douyin.EffectConfig.prototype.getBadge = function() {
  return /** @type{?proto.douyin.Image} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Image, 8));
};


/**
 * @param {?proto.douyin.Image|undefined} value
 * @return {!proto.douyin.EffectConfig} returns this
*/
proto.douyin.EffectConfig.prototype.setBadge = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.EffectConfig} returns this
 */
proto.douyin.EffectConfig.prototype.clearBadge = function() {
  return this.setBadge(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.EffectConfig.prototype.hasBadge = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated uint64 flexSettingArrayList = 9;
 * @return {!Array<number>}
 */
proto.douyin.EffectConfig.prototype.getFlexsettingarraylistList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.douyin.EffectConfig} returns this
 */
proto.douyin.EffectConfig.prototype.setFlexsettingarraylistList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.douyin.EffectConfig} returns this
 */
proto.douyin.EffectConfig.prototype.addFlexsettingarraylist = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.douyin.EffectConfig} returns this
 */
proto.douyin.EffectConfig.prototype.clearFlexsettingarraylistList = function() {
  return this.setFlexsettingarraylistList([]);
};


/**
 * optional Image textIconOverlay = 10;
 * @return {?proto.douyin.Image}
 */
proto.douyin.EffectConfig.prototype.getTexticonoverlay = function() {
  return /** @type{?proto.douyin.Image} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Image, 10));
};


/**
 * @param {?proto.douyin.Image|undefined} value
 * @return {!proto.douyin.EffectConfig} returns this
*/
proto.douyin.EffectConfig.prototype.setTexticonoverlay = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.EffectConfig} returns this
 */
proto.douyin.EffectConfig.prototype.clearTexticonoverlay = function() {
  return this.setTexticonoverlay(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.EffectConfig.prototype.hasTexticonoverlay = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional Image animatedBadge = 11;
 * @return {?proto.douyin.Image}
 */
proto.douyin.EffectConfig.prototype.getAnimatedbadge = function() {
  return /** @type{?proto.douyin.Image} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Image, 11));
};


/**
 * @param {?proto.douyin.Image|undefined} value
 * @return {!proto.douyin.EffectConfig} returns this
*/
proto.douyin.EffectConfig.prototype.setAnimatedbadge = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.EffectConfig} returns this
 */
proto.douyin.EffectConfig.prototype.clearAnimatedbadge = function() {
  return this.setAnimatedbadge(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.EffectConfig.prototype.hasAnimatedbadge = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional bool hasSweepLight = 12;
 * @return {boolean}
 */
proto.douyin.EffectConfig.prototype.getHassweeplight = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.douyin.EffectConfig} returns this
 */
proto.douyin.EffectConfig.prototype.setHassweeplight = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * repeated uint64 textFlexSettingArrayList = 13;
 * @return {!Array<number>}
 */
proto.douyin.EffectConfig.prototype.getTextflexsettingarraylistList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 13));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.douyin.EffectConfig} returns this
 */
proto.douyin.EffectConfig.prototype.setTextflexsettingarraylistList = function(value) {
  return jspb.Message.setField(this, 13, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.douyin.EffectConfig} returns this
 */
proto.douyin.EffectConfig.prototype.addTextflexsettingarraylist = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 13, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.douyin.EffectConfig} returns this
 */
proto.douyin.EffectConfig.prototype.clearTextflexsettingarraylistList = function() {
  return this.setTextflexsettingarraylistList([]);
};


/**
 * optional uint64 centerAnimAssetId = 14;
 * @return {number}
 */
proto.douyin.EffectConfig.prototype.getCenteranimassetid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.EffectConfig} returns this
 */
proto.douyin.EffectConfig.prototype.setCenteranimassetid = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional Image dynamicImage = 15;
 * @return {?proto.douyin.Image}
 */
proto.douyin.EffectConfig.prototype.getDynamicimage = function() {
  return /** @type{?proto.douyin.Image} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Image, 15));
};


/**
 * @param {?proto.douyin.Image|undefined} value
 * @return {!proto.douyin.EffectConfig} returns this
*/
proto.douyin.EffectConfig.prototype.setDynamicimage = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.EffectConfig} returns this
 */
proto.douyin.EffectConfig.prototype.clearDynamicimage = function() {
  return this.setDynamicimage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.EffectConfig.prototype.hasDynamicimage = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * map<string, string> extraMap = 16;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.douyin.EffectConfig.prototype.getExtramapMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 16, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.douyin.EffectConfig} returns this
 */
proto.douyin.EffectConfig.prototype.clearExtramapMap = function() {
  this.getExtramapMap().clear();
  return this;};


/**
 * optional uint64 mp4AnimAssetId = 17;
 * @return {number}
 */
proto.douyin.EffectConfig.prototype.getMp4animassetid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.EffectConfig} returns this
 */
proto.douyin.EffectConfig.prototype.setMp4animassetid = function(value) {
  return jspb.Message.setProto3IntField(this, 17, value);
};


/**
 * optional uint64 priority = 18;
 * @return {number}
 */
proto.douyin.EffectConfig.prototype.getPriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.EffectConfig} returns this
 */
proto.douyin.EffectConfig.prototype.setPriority = function(value) {
  return jspb.Message.setProto3IntField(this, 18, value);
};


/**
 * optional uint64 maxWaitTime = 19;
 * @return {number}
 */
proto.douyin.EffectConfig.prototype.getMaxwaittime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.EffectConfig} returns this
 */
proto.douyin.EffectConfig.prototype.setMaxwaittime = function(value) {
  return jspb.Message.setProto3IntField(this, 19, value);
};


/**
 * optional string dressId = 20;
 * @return {string}
 */
proto.douyin.EffectConfig.prototype.getDressid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.EffectConfig} returns this
 */
proto.douyin.EffectConfig.prototype.setDressid = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional uint64 alignment = 21;
 * @return {number}
 */
proto.douyin.EffectConfig.prototype.getAlignment = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.EffectConfig} returns this
 */
proto.douyin.EffectConfig.prototype.setAlignment = function(value) {
  return jspb.Message.setProto3IntField(this, 21, value);
};


/**
 * optional uint64 alignmentOffset = 22;
 * @return {number}
 */
proto.douyin.EffectConfig.prototype.getAlignmentoffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 22, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.EffectConfig} returns this
 */
proto.douyin.EffectConfig.prototype.setAlignmentoffset = function(value) {
  return jspb.Message.setProto3IntField(this, 22, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.douyin.Text.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.Text.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.Text.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.Text} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.Text.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
    defaultpatter: jspb.Message.getFieldWithDefault(msg, 2, ""),
    defaultformat: (f = msg.getDefaultformat()) && proto.douyin.TextFormat.toObject(includeInstance, f),
    pieceslistList: jspb.Message.toObjectList(msg.getPieceslistList(),
    proto.douyin.TextPiece.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.Text}
 */
proto.douyin.Text.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.Text;
  return proto.douyin.Text.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.Text} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.Text}
 */
proto.douyin.Text.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultpatter(value);
      break;
    case 3:
      var value = new proto.douyin.TextFormat;
      reader.readMessage(value,proto.douyin.TextFormat.deserializeBinaryFromReader);
      msg.setDefaultformat(value);
      break;
    case 4:
      var value = new proto.douyin.TextPiece;
      reader.readMessage(value,proto.douyin.TextPiece.deserializeBinaryFromReader);
      msg.addPieceslist(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.Text.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.Text.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.Text} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.Text.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDefaultpatter();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDefaultformat();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.douyin.TextFormat.serializeBinaryToWriter
    );
  }
  f = message.getPieceslistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.douyin.TextPiece.serializeBinaryToWriter
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.douyin.Text.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.Text} returns this
 */
proto.douyin.Text.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string defaultPatter = 2;
 * @return {string}
 */
proto.douyin.Text.prototype.getDefaultpatter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.Text} returns this
 */
proto.douyin.Text.prototype.setDefaultpatter = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional TextFormat defaultFormat = 3;
 * @return {?proto.douyin.TextFormat}
 */
proto.douyin.Text.prototype.getDefaultformat = function() {
  return /** @type{?proto.douyin.TextFormat} */ (
    jspb.Message.getWrapperField(this, proto.douyin.TextFormat, 3));
};


/**
 * @param {?proto.douyin.TextFormat|undefined} value
 * @return {!proto.douyin.Text} returns this
*/
proto.douyin.Text.prototype.setDefaultformat = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.Text} returns this
 */
proto.douyin.Text.prototype.clearDefaultformat = function() {
  return this.setDefaultformat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.Text.prototype.hasDefaultformat = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated TextPiece piecesList = 4;
 * @return {!Array<!proto.douyin.TextPiece>}
 */
proto.douyin.Text.prototype.getPieceslistList = function() {
  return /** @type{!Array<!proto.douyin.TextPiece>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.douyin.TextPiece, 4));
};


/**
 * @param {!Array<!proto.douyin.TextPiece>} value
 * @return {!proto.douyin.Text} returns this
*/
proto.douyin.Text.prototype.setPieceslistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.douyin.TextPiece=} opt_value
 * @param {number=} opt_index
 * @return {!proto.douyin.TextPiece}
 */
proto.douyin.Text.prototype.addPieceslist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.douyin.TextPiece, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.douyin.Text} returns this
 */
proto.douyin.Text.prototype.clearPieceslistList = function() {
  return this.setPieceslistList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.TextPiece.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.TextPiece.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.TextPiece} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.TextPiece.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    format: (f = msg.getFormat()) && proto.douyin.TextFormat.toObject(includeInstance, f),
    stringvalue: jspb.Message.getFieldWithDefault(msg, 3, ""),
    uservalue: (f = msg.getUservalue()) && proto.douyin.TextPieceUser.toObject(includeInstance, f),
    giftvalue: (f = msg.getGiftvalue()) && proto.douyin.TextPieceGift.toObject(includeInstance, f),
    heartvalue: (f = msg.getHeartvalue()) && proto.douyin.TextPieceHeart.toObject(includeInstance, f),
    patternrefvalue: (f = msg.getPatternrefvalue()) && proto.douyin.TextPiecePatternRef.toObject(includeInstance, f),
    imagevalue: (f = msg.getImagevalue()) && proto.douyin.TextPieceImage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.TextPiece}
 */
proto.douyin.TextPiece.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.TextPiece;
  return proto.douyin.TextPiece.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.TextPiece} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.TextPiece}
 */
proto.douyin.TextPiece.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setType(value);
      break;
    case 2:
      var value = new proto.douyin.TextFormat;
      reader.readMessage(value,proto.douyin.TextFormat.deserializeBinaryFromReader);
      msg.setFormat(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringvalue(value);
      break;
    case 4:
      var value = new proto.douyin.TextPieceUser;
      reader.readMessage(value,proto.douyin.TextPieceUser.deserializeBinaryFromReader);
      msg.setUservalue(value);
      break;
    case 5:
      var value = new proto.douyin.TextPieceGift;
      reader.readMessage(value,proto.douyin.TextPieceGift.deserializeBinaryFromReader);
      msg.setGiftvalue(value);
      break;
    case 6:
      var value = new proto.douyin.TextPieceHeart;
      reader.readMessage(value,proto.douyin.TextPieceHeart.deserializeBinaryFromReader);
      msg.setHeartvalue(value);
      break;
    case 7:
      var value = new proto.douyin.TextPiecePatternRef;
      reader.readMessage(value,proto.douyin.TextPiecePatternRef.deserializeBinaryFromReader);
      msg.setPatternrefvalue(value);
      break;
    case 8:
      var value = new proto.douyin.TextPieceImage;
      reader.readMessage(value,proto.douyin.TextPieceImage.deserializeBinaryFromReader);
      msg.setImagevalue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.TextPiece.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.TextPiece.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.TextPiece} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.TextPiece.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getFormat();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.douyin.TextFormat.serializeBinaryToWriter
    );
  }
  f = message.getStringvalue();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUservalue();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.douyin.TextPieceUser.serializeBinaryToWriter
    );
  }
  f = message.getGiftvalue();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.douyin.TextPieceGift.serializeBinaryToWriter
    );
  }
  f = message.getHeartvalue();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.douyin.TextPieceHeart.serializeBinaryToWriter
    );
  }
  f = message.getPatternrefvalue();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.douyin.TextPiecePatternRef.serializeBinaryToWriter
    );
  }
  f = message.getImagevalue();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.douyin.TextPieceImage.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool type = 1;
 * @return {boolean}
 */
proto.douyin.TextPiece.prototype.getType = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.douyin.TextPiece} returns this
 */
proto.douyin.TextPiece.prototype.setType = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional TextFormat format = 2;
 * @return {?proto.douyin.TextFormat}
 */
proto.douyin.TextPiece.prototype.getFormat = function() {
  return /** @type{?proto.douyin.TextFormat} */ (
    jspb.Message.getWrapperField(this, proto.douyin.TextFormat, 2));
};


/**
 * @param {?proto.douyin.TextFormat|undefined} value
 * @return {!proto.douyin.TextPiece} returns this
*/
proto.douyin.TextPiece.prototype.setFormat = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.TextPiece} returns this
 */
proto.douyin.TextPiece.prototype.clearFormat = function() {
  return this.setFormat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.TextPiece.prototype.hasFormat = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string stringValue = 3;
 * @return {string}
 */
proto.douyin.TextPiece.prototype.getStringvalue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.TextPiece} returns this
 */
proto.douyin.TextPiece.prototype.setStringvalue = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional TextPieceUser userValue = 4;
 * @return {?proto.douyin.TextPieceUser}
 */
proto.douyin.TextPiece.prototype.getUservalue = function() {
  return /** @type{?proto.douyin.TextPieceUser} */ (
    jspb.Message.getWrapperField(this, proto.douyin.TextPieceUser, 4));
};


/**
 * @param {?proto.douyin.TextPieceUser|undefined} value
 * @return {!proto.douyin.TextPiece} returns this
*/
proto.douyin.TextPiece.prototype.setUservalue = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.TextPiece} returns this
 */
proto.douyin.TextPiece.prototype.clearUservalue = function() {
  return this.setUservalue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.TextPiece.prototype.hasUservalue = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional TextPieceGift giftValue = 5;
 * @return {?proto.douyin.TextPieceGift}
 */
proto.douyin.TextPiece.prototype.getGiftvalue = function() {
  return /** @type{?proto.douyin.TextPieceGift} */ (
    jspb.Message.getWrapperField(this, proto.douyin.TextPieceGift, 5));
};


/**
 * @param {?proto.douyin.TextPieceGift|undefined} value
 * @return {!proto.douyin.TextPiece} returns this
*/
proto.douyin.TextPiece.prototype.setGiftvalue = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.TextPiece} returns this
 */
proto.douyin.TextPiece.prototype.clearGiftvalue = function() {
  return this.setGiftvalue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.TextPiece.prototype.hasGiftvalue = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional TextPieceHeart heartValue = 6;
 * @return {?proto.douyin.TextPieceHeart}
 */
proto.douyin.TextPiece.prototype.getHeartvalue = function() {
  return /** @type{?proto.douyin.TextPieceHeart} */ (
    jspb.Message.getWrapperField(this, proto.douyin.TextPieceHeart, 6));
};


/**
 * @param {?proto.douyin.TextPieceHeart|undefined} value
 * @return {!proto.douyin.TextPiece} returns this
*/
proto.douyin.TextPiece.prototype.setHeartvalue = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.TextPiece} returns this
 */
proto.douyin.TextPiece.prototype.clearHeartvalue = function() {
  return this.setHeartvalue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.TextPiece.prototype.hasHeartvalue = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional TextPiecePatternRef patternRefValue = 7;
 * @return {?proto.douyin.TextPiecePatternRef}
 */
proto.douyin.TextPiece.prototype.getPatternrefvalue = function() {
  return /** @type{?proto.douyin.TextPiecePatternRef} */ (
    jspb.Message.getWrapperField(this, proto.douyin.TextPiecePatternRef, 7));
};


/**
 * @param {?proto.douyin.TextPiecePatternRef|undefined} value
 * @return {!proto.douyin.TextPiece} returns this
*/
proto.douyin.TextPiece.prototype.setPatternrefvalue = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.TextPiece} returns this
 */
proto.douyin.TextPiece.prototype.clearPatternrefvalue = function() {
  return this.setPatternrefvalue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.TextPiece.prototype.hasPatternrefvalue = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional TextPieceImage imageValue = 8;
 * @return {?proto.douyin.TextPieceImage}
 */
proto.douyin.TextPiece.prototype.getImagevalue = function() {
  return /** @type{?proto.douyin.TextPieceImage} */ (
    jspb.Message.getWrapperField(this, proto.douyin.TextPieceImage, 8));
};


/**
 * @param {?proto.douyin.TextPieceImage|undefined} value
 * @return {!proto.douyin.TextPiece} returns this
*/
proto.douyin.TextPiece.prototype.setImagevalue = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.TextPiece} returns this
 */
proto.douyin.TextPiece.prototype.clearImagevalue = function() {
  return this.setImagevalue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.TextPiece.prototype.hasImagevalue = function() {
  return jspb.Message.getField(this, 8) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.TextPieceImage.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.TextPieceImage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.TextPieceImage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.TextPieceImage.toObject = function(includeInstance, msg) {
  var f, obj = {
    image: (f = msg.getImage()) && proto.douyin.Image.toObject(includeInstance, f),
    scalingrate: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.TextPieceImage}
 */
proto.douyin.TextPieceImage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.TextPieceImage;
  return proto.douyin.TextPieceImage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.TextPieceImage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.TextPieceImage}
 */
proto.douyin.TextPieceImage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.douyin.Image;
      reader.readMessage(value,proto.douyin.Image.deserializeBinaryFromReader);
      msg.setImage(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setScalingrate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.TextPieceImage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.TextPieceImage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.TextPieceImage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.TextPieceImage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.douyin.Image.serializeBinaryToWriter
    );
  }
  f = message.getScalingrate();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
};


/**
 * optional Image image = 1;
 * @return {?proto.douyin.Image}
 */
proto.douyin.TextPieceImage.prototype.getImage = function() {
  return /** @type{?proto.douyin.Image} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Image, 1));
};


/**
 * @param {?proto.douyin.Image|undefined} value
 * @return {!proto.douyin.TextPieceImage} returns this
*/
proto.douyin.TextPieceImage.prototype.setImage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.TextPieceImage} returns this
 */
proto.douyin.TextPieceImage.prototype.clearImage = function() {
  return this.setImage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.TextPieceImage.prototype.hasImage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional float scalingRate = 2;
 * @return {number}
 */
proto.douyin.TextPieceImage.prototype.getScalingrate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.TextPieceImage} returns this
 */
proto.douyin.TextPieceImage.prototype.setScalingrate = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.TextPiecePatternRef.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.TextPiecePatternRef.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.TextPiecePatternRef} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.TextPiecePatternRef.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
    defaultpattern: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.TextPiecePatternRef}
 */
proto.douyin.TextPiecePatternRef.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.TextPiecePatternRef;
  return proto.douyin.TextPiecePatternRef.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.TextPiecePatternRef} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.TextPiecePatternRef}
 */
proto.douyin.TextPiecePatternRef.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultpattern(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.TextPiecePatternRef.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.TextPiecePatternRef.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.TextPiecePatternRef} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.TextPiecePatternRef.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDefaultpattern();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.douyin.TextPiecePatternRef.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.TextPiecePatternRef} returns this
 */
proto.douyin.TextPiecePatternRef.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string defaultPattern = 2;
 * @return {string}
 */
proto.douyin.TextPiecePatternRef.prototype.getDefaultpattern = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.TextPiecePatternRef} returns this
 */
proto.douyin.TextPiecePatternRef.prototype.setDefaultpattern = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.TextPieceHeart.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.TextPieceHeart.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.TextPieceHeart} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.TextPieceHeart.toObject = function(includeInstance, msg) {
  var f, obj = {
    color: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.TextPieceHeart}
 */
proto.douyin.TextPieceHeart.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.TextPieceHeart;
  return proto.douyin.TextPieceHeart.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.TextPieceHeart} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.TextPieceHeart}
 */
proto.douyin.TextPieceHeart.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setColor(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.TextPieceHeart.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.TextPieceHeart.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.TextPieceHeart} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.TextPieceHeart.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getColor();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string color = 1;
 * @return {string}
 */
proto.douyin.TextPieceHeart.prototype.getColor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.TextPieceHeart} returns this
 */
proto.douyin.TextPieceHeart.prototype.setColor = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.TextPieceGift.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.TextPieceGift.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.TextPieceGift} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.TextPieceGift.toObject = function(includeInstance, msg) {
  var f, obj = {
    giftid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    nameref: (f = msg.getNameref()) && proto.douyin.PatternRef.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.TextPieceGift}
 */
proto.douyin.TextPieceGift.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.TextPieceGift;
  return proto.douyin.TextPieceGift.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.TextPieceGift} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.TextPieceGift}
 */
proto.douyin.TextPieceGift.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGiftid(value);
      break;
    case 2:
      var value = new proto.douyin.PatternRef;
      reader.readMessage(value,proto.douyin.PatternRef.deserializeBinaryFromReader);
      msg.setNameref(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.TextPieceGift.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.TextPieceGift.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.TextPieceGift} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.TextPieceGift.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGiftid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getNameref();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.douyin.PatternRef.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 giftId = 1;
 * @return {number}
 */
proto.douyin.TextPieceGift.prototype.getGiftid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.TextPieceGift} returns this
 */
proto.douyin.TextPieceGift.prototype.setGiftid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional PatternRef nameRef = 2;
 * @return {?proto.douyin.PatternRef}
 */
proto.douyin.TextPieceGift.prototype.getNameref = function() {
  return /** @type{?proto.douyin.PatternRef} */ (
    jspb.Message.getWrapperField(this, proto.douyin.PatternRef, 2));
};


/**
 * @param {?proto.douyin.PatternRef|undefined} value
 * @return {!proto.douyin.TextPieceGift} returns this
*/
proto.douyin.TextPieceGift.prototype.setNameref = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.TextPieceGift} returns this
 */
proto.douyin.TextPieceGift.prototype.clearNameref = function() {
  return this.setNameref(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.TextPieceGift.prototype.hasNameref = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.PatternRef.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.PatternRef.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.PatternRef} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.PatternRef.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
    defaultpattern: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.PatternRef}
 */
proto.douyin.PatternRef.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.PatternRef;
  return proto.douyin.PatternRef.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.PatternRef} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.PatternRef}
 */
proto.douyin.PatternRef.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultpattern(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.PatternRef.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.PatternRef.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.PatternRef} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.PatternRef.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDefaultpattern();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.douyin.PatternRef.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.PatternRef} returns this
 */
proto.douyin.PatternRef.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string defaultPattern = 2;
 * @return {string}
 */
proto.douyin.PatternRef.prototype.getDefaultpattern = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.PatternRef} returns this
 */
proto.douyin.PatternRef.prototype.setDefaultpattern = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.TextPieceUser.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.TextPieceUser.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.TextPieceUser} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.TextPieceUser.toObject = function(includeInstance, msg) {
  var f, obj = {
    user: (f = msg.getUser()) && proto.douyin.User.toObject(includeInstance, f),
    withcolon: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.TextPieceUser}
 */
proto.douyin.TextPieceUser.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.TextPieceUser;
  return proto.douyin.TextPieceUser.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.TextPieceUser} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.TextPieceUser}
 */
proto.douyin.TextPieceUser.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.douyin.User;
      reader.readMessage(value,proto.douyin.User.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWithcolon(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.TextPieceUser.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.TextPieceUser.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.TextPieceUser} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.TextPieceUser.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.douyin.User.serializeBinaryToWriter
    );
  }
  f = message.getWithcolon();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional User user = 1;
 * @return {?proto.douyin.User}
 */
proto.douyin.TextPieceUser.prototype.getUser = function() {
  return /** @type{?proto.douyin.User} */ (
    jspb.Message.getWrapperField(this, proto.douyin.User, 1));
};


/**
 * @param {?proto.douyin.User|undefined} value
 * @return {!proto.douyin.TextPieceUser} returns this
*/
proto.douyin.TextPieceUser.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.TextPieceUser} returns this
 */
proto.douyin.TextPieceUser.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.TextPieceUser.prototype.hasUser = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool withColon = 2;
 * @return {boolean}
 */
proto.douyin.TextPieceUser.prototype.getWithcolon = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.douyin.TextPieceUser} returns this
 */
proto.douyin.TextPieceUser.prototype.setWithcolon = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.TextFormat.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.TextFormat.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.TextFormat} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.TextFormat.toObject = function(includeInstance, msg) {
  var f, obj = {
    color: jspb.Message.getFieldWithDefault(msg, 1, ""),
    bold: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    italic: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    weight: jspb.Message.getFieldWithDefault(msg, 4, 0),
    italicangle: jspb.Message.getFieldWithDefault(msg, 5, 0),
    fontsize: jspb.Message.getFieldWithDefault(msg, 6, 0),
    useheighlightcolor: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    useremoteclor: jspb.Message.getBooleanFieldWithDefault(msg, 8, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.TextFormat}
 */
proto.douyin.TextFormat.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.TextFormat;
  return proto.douyin.TextFormat.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.TextFormat} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.TextFormat}
 */
proto.douyin.TextFormat.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setColor(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBold(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setItalic(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setWeight(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setItalicangle(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFontsize(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseheighlightcolor(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseremoteclor(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.TextFormat.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.TextFormat.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.TextFormat} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.TextFormat.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getColor();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBold();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getItalic();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getWeight();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getItalicangle();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getFontsize();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getUseheighlightcolor();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getUseremoteclor();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
};


/**
 * optional string color = 1;
 * @return {string}
 */
proto.douyin.TextFormat.prototype.getColor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.TextFormat} returns this
 */
proto.douyin.TextFormat.prototype.setColor = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool bold = 2;
 * @return {boolean}
 */
proto.douyin.TextFormat.prototype.getBold = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.douyin.TextFormat} returns this
 */
proto.douyin.TextFormat.prototype.setBold = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool italic = 3;
 * @return {boolean}
 */
proto.douyin.TextFormat.prototype.getItalic = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.douyin.TextFormat} returns this
 */
proto.douyin.TextFormat.prototype.setItalic = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional uint32 weight = 4;
 * @return {number}
 */
proto.douyin.TextFormat.prototype.getWeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.TextFormat} returns this
 */
proto.douyin.TextFormat.prototype.setWeight = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 italicAngle = 5;
 * @return {number}
 */
proto.douyin.TextFormat.prototype.getItalicangle = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.TextFormat} returns this
 */
proto.douyin.TextFormat.prototype.setItalicangle = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 fontSize = 6;
 * @return {number}
 */
proto.douyin.TextFormat.prototype.getFontsize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.TextFormat} returns this
 */
proto.douyin.TextFormat.prototype.setFontsize = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional bool useHeighLightColor = 7;
 * @return {boolean}
 */
proto.douyin.TextFormat.prototype.getUseheighlightcolor = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.douyin.TextFormat} returns this
 */
proto.douyin.TextFormat.prototype.setUseheighlightcolor = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional bool useRemoteClor = 8;
 * @return {boolean}
 */
proto.douyin.TextFormat.prototype.getUseremoteclor = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.douyin.TextFormat} returns this
 */
proto.douyin.TextFormat.prototype.setUseremoteclor = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.LikeMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.LikeMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.LikeMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.LikeMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && proto.douyin.Common.toObject(includeInstance, f),
    count: jspb.Message.getFieldWithDefault(msg, 2, 0),
    total: jspb.Message.getFieldWithDefault(msg, 3, 0),
    color: jspb.Message.getFieldWithDefault(msg, 4, 0),
    user: (f = msg.getUser()) && proto.douyin.User.toObject(includeInstance, f),
    icon: jspb.Message.getFieldWithDefault(msg, 6, ""),
    doublelikedetail: (f = msg.getDoublelikedetail()) && proto.douyin.DoubleLikeDetail.toObject(includeInstance, f),
    displaycontrolinfo: (f = msg.getDisplaycontrolinfo()) && proto.douyin.DisplayControlInfo.toObject(includeInstance, f),
    linkmicguestuid: jspb.Message.getFieldWithDefault(msg, 9, 0),
    scene: jspb.Message.getFieldWithDefault(msg, 10, ""),
    picodisplayinfo: (f = msg.getPicodisplayinfo()) && proto.douyin.PicoDisplayInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.LikeMessage}
 */
proto.douyin.LikeMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.LikeMessage;
  return proto.douyin.LikeMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.LikeMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.LikeMessage}
 */
proto.douyin.LikeMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.douyin.Common;
      reader.readMessage(value,proto.douyin.Common.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotal(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setColor(value);
      break;
    case 5:
      var value = new proto.douyin.User;
      reader.readMessage(value,proto.douyin.User.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setIcon(value);
      break;
    case 7:
      var value = new proto.douyin.DoubleLikeDetail;
      reader.readMessage(value,proto.douyin.DoubleLikeDetail.deserializeBinaryFromReader);
      msg.setDoublelikedetail(value);
      break;
    case 8:
      var value = new proto.douyin.DisplayControlInfo;
      reader.readMessage(value,proto.douyin.DisplayControlInfo.deserializeBinaryFromReader);
      msg.setDisplaycontrolinfo(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLinkmicguestuid(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setScene(value);
      break;
    case 11:
      var value = new proto.douyin.PicoDisplayInfo;
      reader.readMessage(value,proto.douyin.PicoDisplayInfo.deserializeBinaryFromReader);
      msg.setPicodisplayinfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.LikeMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.LikeMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.LikeMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.LikeMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.douyin.Common.serializeBinaryToWriter
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getColor();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.douyin.User.serializeBinaryToWriter
    );
  }
  f = message.getIcon();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getDoublelikedetail();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.douyin.DoubleLikeDetail.serializeBinaryToWriter
    );
  }
  f = message.getDisplaycontrolinfo();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.douyin.DisplayControlInfo.serializeBinaryToWriter
    );
  }
  f = message.getLinkmicguestuid();
  if (f !== 0) {
    writer.writeUint64(
      9,
      f
    );
  }
  f = message.getScene();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getPicodisplayinfo();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.douyin.PicoDisplayInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional Common common = 1;
 * @return {?proto.douyin.Common}
 */
proto.douyin.LikeMessage.prototype.getCommon = function() {
  return /** @type{?proto.douyin.Common} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Common, 1));
};


/**
 * @param {?proto.douyin.Common|undefined} value
 * @return {!proto.douyin.LikeMessage} returns this
*/
proto.douyin.LikeMessage.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.LikeMessage} returns this
 */
proto.douyin.LikeMessage.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.LikeMessage.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 count = 2;
 * @return {number}
 */
proto.douyin.LikeMessage.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.LikeMessage} returns this
 */
proto.douyin.LikeMessage.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 total = 3;
 * @return {number}
 */
proto.douyin.LikeMessage.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.LikeMessage} returns this
 */
proto.douyin.LikeMessage.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 color = 4;
 * @return {number}
 */
proto.douyin.LikeMessage.prototype.getColor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.LikeMessage} returns this
 */
proto.douyin.LikeMessage.prototype.setColor = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional User user = 5;
 * @return {?proto.douyin.User}
 */
proto.douyin.LikeMessage.prototype.getUser = function() {
  return /** @type{?proto.douyin.User} */ (
    jspb.Message.getWrapperField(this, proto.douyin.User, 5));
};


/**
 * @param {?proto.douyin.User|undefined} value
 * @return {!proto.douyin.LikeMessage} returns this
*/
proto.douyin.LikeMessage.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.LikeMessage} returns this
 */
proto.douyin.LikeMessage.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.LikeMessage.prototype.hasUser = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string icon = 6;
 * @return {string}
 */
proto.douyin.LikeMessage.prototype.getIcon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.LikeMessage} returns this
 */
proto.douyin.LikeMessage.prototype.setIcon = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional DoubleLikeDetail doubleLikeDetail = 7;
 * @return {?proto.douyin.DoubleLikeDetail}
 */
proto.douyin.LikeMessage.prototype.getDoublelikedetail = function() {
  return /** @type{?proto.douyin.DoubleLikeDetail} */ (
    jspb.Message.getWrapperField(this, proto.douyin.DoubleLikeDetail, 7));
};


/**
 * @param {?proto.douyin.DoubleLikeDetail|undefined} value
 * @return {!proto.douyin.LikeMessage} returns this
*/
proto.douyin.LikeMessage.prototype.setDoublelikedetail = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.LikeMessage} returns this
 */
proto.douyin.LikeMessage.prototype.clearDoublelikedetail = function() {
  return this.setDoublelikedetail(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.LikeMessage.prototype.hasDoublelikedetail = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional DisplayControlInfo displayControlInfo = 8;
 * @return {?proto.douyin.DisplayControlInfo}
 */
proto.douyin.LikeMessage.prototype.getDisplaycontrolinfo = function() {
  return /** @type{?proto.douyin.DisplayControlInfo} */ (
    jspb.Message.getWrapperField(this, proto.douyin.DisplayControlInfo, 8));
};


/**
 * @param {?proto.douyin.DisplayControlInfo|undefined} value
 * @return {!proto.douyin.LikeMessage} returns this
*/
proto.douyin.LikeMessage.prototype.setDisplaycontrolinfo = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.LikeMessage} returns this
 */
proto.douyin.LikeMessage.prototype.clearDisplaycontrolinfo = function() {
  return this.setDisplaycontrolinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.LikeMessage.prototype.hasDisplaycontrolinfo = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional uint64 linkmicGuestUid = 9;
 * @return {number}
 */
proto.douyin.LikeMessage.prototype.getLinkmicguestuid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.LikeMessage} returns this
 */
proto.douyin.LikeMessage.prototype.setLinkmicguestuid = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional string scene = 10;
 * @return {string}
 */
proto.douyin.LikeMessage.prototype.getScene = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.LikeMessage} returns this
 */
proto.douyin.LikeMessage.prototype.setScene = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional PicoDisplayInfo picoDisplayInfo = 11;
 * @return {?proto.douyin.PicoDisplayInfo}
 */
proto.douyin.LikeMessage.prototype.getPicodisplayinfo = function() {
  return /** @type{?proto.douyin.PicoDisplayInfo} */ (
    jspb.Message.getWrapperField(this, proto.douyin.PicoDisplayInfo, 11));
};


/**
 * @param {?proto.douyin.PicoDisplayInfo|undefined} value
 * @return {!proto.douyin.LikeMessage} returns this
*/
proto.douyin.LikeMessage.prototype.setPicodisplayinfo = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.LikeMessage} returns this
 */
proto.douyin.LikeMessage.prototype.clearPicodisplayinfo = function() {
  return this.setPicodisplayinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.LikeMessage.prototype.hasPicodisplayinfo = function() {
  return jspb.Message.getField(this, 11) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.SocialMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.SocialMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.SocialMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.SocialMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && proto.douyin.Common.toObject(includeInstance, f),
    user: (f = msg.getUser()) && proto.douyin.User.toObject(includeInstance, f),
    sharetype: jspb.Message.getFieldWithDefault(msg, 3, 0),
    action: jspb.Message.getFieldWithDefault(msg, 4, 0),
    sharetarget: jspb.Message.getFieldWithDefault(msg, 5, ""),
    followcount: jspb.Message.getFieldWithDefault(msg, 6, 0),
    publicareacommon: (f = msg.getPublicareacommon()) && proto.douyin.PublicAreaCommon.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.SocialMessage}
 */
proto.douyin.SocialMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.SocialMessage;
  return proto.douyin.SocialMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.SocialMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.SocialMessage}
 */
proto.douyin.SocialMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.douyin.Common;
      reader.readMessage(value,proto.douyin.Common.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new proto.douyin.User;
      reader.readMessage(value,proto.douyin.User.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSharetype(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAction(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSharetarget(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFollowcount(value);
      break;
    case 7:
      var value = new proto.douyin.PublicAreaCommon;
      reader.readMessage(value,proto.douyin.PublicAreaCommon.deserializeBinaryFromReader);
      msg.setPublicareacommon(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.SocialMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.SocialMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.SocialMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.SocialMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.douyin.Common.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.douyin.User.serializeBinaryToWriter
    );
  }
  f = message.getSharetype();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getAction();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getSharetarget();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getFollowcount();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getPublicareacommon();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.douyin.PublicAreaCommon.serializeBinaryToWriter
    );
  }
};


/**
 * optional Common common = 1;
 * @return {?proto.douyin.Common}
 */
proto.douyin.SocialMessage.prototype.getCommon = function() {
  return /** @type{?proto.douyin.Common} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Common, 1));
};


/**
 * @param {?proto.douyin.Common|undefined} value
 * @return {!proto.douyin.SocialMessage} returns this
*/
proto.douyin.SocialMessage.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.SocialMessage} returns this
 */
proto.douyin.SocialMessage.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.SocialMessage.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional User user = 2;
 * @return {?proto.douyin.User}
 */
proto.douyin.SocialMessage.prototype.getUser = function() {
  return /** @type{?proto.douyin.User} */ (
    jspb.Message.getWrapperField(this, proto.douyin.User, 2));
};


/**
 * @param {?proto.douyin.User|undefined} value
 * @return {!proto.douyin.SocialMessage} returns this
*/
proto.douyin.SocialMessage.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.SocialMessage} returns this
 */
proto.douyin.SocialMessage.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.SocialMessage.prototype.hasUser = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 shareType = 3;
 * @return {number}
 */
proto.douyin.SocialMessage.prototype.getSharetype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.SocialMessage} returns this
 */
proto.douyin.SocialMessage.prototype.setSharetype = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 action = 4;
 * @return {number}
 */
proto.douyin.SocialMessage.prototype.getAction = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.SocialMessage} returns this
 */
proto.douyin.SocialMessage.prototype.setAction = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string shareTarget = 5;
 * @return {string}
 */
proto.douyin.SocialMessage.prototype.getSharetarget = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.SocialMessage} returns this
 */
proto.douyin.SocialMessage.prototype.setSharetarget = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional uint64 followCount = 6;
 * @return {number}
 */
proto.douyin.SocialMessage.prototype.getFollowcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.SocialMessage} returns this
 */
proto.douyin.SocialMessage.prototype.setFollowcount = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional PublicAreaCommon publicAreaCommon = 7;
 * @return {?proto.douyin.PublicAreaCommon}
 */
proto.douyin.SocialMessage.prototype.getPublicareacommon = function() {
  return /** @type{?proto.douyin.PublicAreaCommon} */ (
    jspb.Message.getWrapperField(this, proto.douyin.PublicAreaCommon, 7));
};


/**
 * @param {?proto.douyin.PublicAreaCommon|undefined} value
 * @return {!proto.douyin.SocialMessage} returns this
*/
proto.douyin.SocialMessage.prototype.setPublicareacommon = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.SocialMessage} returns this
 */
proto.douyin.SocialMessage.prototype.clearPublicareacommon = function() {
  return this.setPublicareacommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.SocialMessage.prototype.hasPublicareacommon = function() {
  return jspb.Message.getField(this, 7) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.PicoDisplayInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.PicoDisplayInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.PicoDisplayInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.PicoDisplayInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    combosumcount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    emoji: jspb.Message.getFieldWithDefault(msg, 2, ""),
    emojiicon: (f = msg.getEmojiicon()) && proto.douyin.Image.toObject(includeInstance, f),
    emojitext: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.PicoDisplayInfo}
 */
proto.douyin.PicoDisplayInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.PicoDisplayInfo;
  return proto.douyin.PicoDisplayInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.PicoDisplayInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.PicoDisplayInfo}
 */
proto.douyin.PicoDisplayInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCombosumcount(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmoji(value);
      break;
    case 3:
      var value = new proto.douyin.Image;
      reader.readMessage(value,proto.douyin.Image.deserializeBinaryFromReader);
      msg.setEmojiicon(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmojitext(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.PicoDisplayInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.PicoDisplayInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.PicoDisplayInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.PicoDisplayInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCombosumcount();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getEmoji();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEmojiicon();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.douyin.Image.serializeBinaryToWriter
    );
  }
  f = message.getEmojitext();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional uint64 comboSumCount = 1;
 * @return {number}
 */
proto.douyin.PicoDisplayInfo.prototype.getCombosumcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.PicoDisplayInfo} returns this
 */
proto.douyin.PicoDisplayInfo.prototype.setCombosumcount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string emoji = 2;
 * @return {string}
 */
proto.douyin.PicoDisplayInfo.prototype.getEmoji = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.PicoDisplayInfo} returns this
 */
proto.douyin.PicoDisplayInfo.prototype.setEmoji = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Image emojiIcon = 3;
 * @return {?proto.douyin.Image}
 */
proto.douyin.PicoDisplayInfo.prototype.getEmojiicon = function() {
  return /** @type{?proto.douyin.Image} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Image, 3));
};


/**
 * @param {?proto.douyin.Image|undefined} value
 * @return {!proto.douyin.PicoDisplayInfo} returns this
*/
proto.douyin.PicoDisplayInfo.prototype.setEmojiicon = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.PicoDisplayInfo} returns this
 */
proto.douyin.PicoDisplayInfo.prototype.clearEmojiicon = function() {
  return this.setEmojiicon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.PicoDisplayInfo.prototype.hasEmojiicon = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string emojiText = 4;
 * @return {string}
 */
proto.douyin.PicoDisplayInfo.prototype.getEmojitext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.PicoDisplayInfo} returns this
 */
proto.douyin.PicoDisplayInfo.prototype.setEmojitext = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.DoubleLikeDetail.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.DoubleLikeDetail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.DoubleLikeDetail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.DoubleLikeDetail.toObject = function(includeInstance, msg) {
  var f, obj = {
    doubleflag: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    seqid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    renewalsnum: jspb.Message.getFieldWithDefault(msg, 3, 0),
    triggersnum: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.DoubleLikeDetail}
 */
proto.douyin.DoubleLikeDetail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.DoubleLikeDetail;
  return proto.douyin.DoubleLikeDetail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.DoubleLikeDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.DoubleLikeDetail}
 */
proto.douyin.DoubleLikeDetail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDoubleflag(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSeqid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRenewalsnum(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTriggersnum(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.DoubleLikeDetail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.DoubleLikeDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.DoubleLikeDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.DoubleLikeDetail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDoubleflag();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getSeqid();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getRenewalsnum();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getTriggersnum();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional bool doubleFlag = 1;
 * @return {boolean}
 */
proto.douyin.DoubleLikeDetail.prototype.getDoubleflag = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.douyin.DoubleLikeDetail} returns this
 */
proto.douyin.DoubleLikeDetail.prototype.setDoubleflag = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional uint32 seqId = 2;
 * @return {number}
 */
proto.douyin.DoubleLikeDetail.prototype.getSeqid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.DoubleLikeDetail} returns this
 */
proto.douyin.DoubleLikeDetail.prototype.setSeqid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 renewalsNum = 3;
 * @return {number}
 */
proto.douyin.DoubleLikeDetail.prototype.getRenewalsnum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.DoubleLikeDetail} returns this
 */
proto.douyin.DoubleLikeDetail.prototype.setRenewalsnum = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 triggersNum = 4;
 * @return {number}
 */
proto.douyin.DoubleLikeDetail.prototype.getTriggersnum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.DoubleLikeDetail} returns this
 */
proto.douyin.DoubleLikeDetail.prototype.setTriggersnum = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.DisplayControlInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.DisplayControlInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.DisplayControlInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.DisplayControlInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    showtext: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    showicons: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.DisplayControlInfo}
 */
proto.douyin.DisplayControlInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.DisplayControlInfo;
  return proto.douyin.DisplayControlInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.DisplayControlInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.DisplayControlInfo}
 */
proto.douyin.DisplayControlInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShowtext(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShowicons(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.DisplayControlInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.DisplayControlInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.DisplayControlInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.DisplayControlInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShowtext();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getShowicons();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional bool showText = 1;
 * @return {boolean}
 */
proto.douyin.DisplayControlInfo.prototype.getShowtext = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.douyin.DisplayControlInfo} returns this
 */
proto.douyin.DisplayControlInfo.prototype.setShowtext = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool showIcons = 2;
 * @return {boolean}
 */
proto.douyin.DisplayControlInfo.prototype.getShowicons = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.douyin.DisplayControlInfo} returns this
 */
proto.douyin.DisplayControlInfo.prototype.setShowicons = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.douyin.EpisodeChatMessage.repeatedFields_ = [9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.EpisodeChatMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.EpisodeChatMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.EpisodeChatMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.EpisodeChatMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && proto.douyin.Message.toObject(includeInstance, f),
    user: (f = msg.getUser()) && proto.douyin.User.toObject(includeInstance, f),
    content: jspb.Message.getFieldWithDefault(msg, 3, ""),
    visibletosende: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    giftimage: (f = msg.getGiftimage()) && proto.douyin.Image.toObject(includeInstance, f),
    agreemsgid: jspb.Message.getFieldWithDefault(msg, 8, 0),
    colorvaluelistList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.EpisodeChatMessage}
 */
proto.douyin.EpisodeChatMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.EpisodeChatMessage;
  return proto.douyin.EpisodeChatMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.EpisodeChatMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.EpisodeChatMessage}
 */
proto.douyin.EpisodeChatMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.douyin.Message;
      reader.readMessage(value,proto.douyin.Message.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new proto.douyin.User;
      reader.readMessage(value,proto.douyin.User.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVisibletosende(value);
      break;
    case 7:
      var value = new proto.douyin.Image;
      reader.readMessage(value,proto.douyin.Image.deserializeBinaryFromReader);
      msg.setGiftimage(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAgreemsgid(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addColorvaluelist(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.EpisodeChatMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.EpisodeChatMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.EpisodeChatMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.EpisodeChatMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.douyin.Message.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.douyin.User.serializeBinaryToWriter
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getVisibletosende();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getGiftimage();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.douyin.Image.serializeBinaryToWriter
    );
  }
  f = message.getAgreemsgid();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = message.getColorvaluelistList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
};


/**
 * optional Message common = 1;
 * @return {?proto.douyin.Message}
 */
proto.douyin.EpisodeChatMessage.prototype.getCommon = function() {
  return /** @type{?proto.douyin.Message} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Message, 1));
};


/**
 * @param {?proto.douyin.Message|undefined} value
 * @return {!proto.douyin.EpisodeChatMessage} returns this
*/
proto.douyin.EpisodeChatMessage.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.EpisodeChatMessage} returns this
 */
proto.douyin.EpisodeChatMessage.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.EpisodeChatMessage.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional User user = 2;
 * @return {?proto.douyin.User}
 */
proto.douyin.EpisodeChatMessage.prototype.getUser = function() {
  return /** @type{?proto.douyin.User} */ (
    jspb.Message.getWrapperField(this, proto.douyin.User, 2));
};


/**
 * @param {?proto.douyin.User|undefined} value
 * @return {!proto.douyin.EpisodeChatMessage} returns this
*/
proto.douyin.EpisodeChatMessage.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.EpisodeChatMessage} returns this
 */
proto.douyin.EpisodeChatMessage.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.EpisodeChatMessage.prototype.hasUser = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string content = 3;
 * @return {string}
 */
proto.douyin.EpisodeChatMessage.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.EpisodeChatMessage} returns this
 */
proto.douyin.EpisodeChatMessage.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool visibleToSende = 4;
 * @return {boolean}
 */
proto.douyin.EpisodeChatMessage.prototype.getVisibletosende = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.douyin.EpisodeChatMessage} returns this
 */
proto.douyin.EpisodeChatMessage.prototype.setVisibletosende = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional Image giftImage = 7;
 * @return {?proto.douyin.Image}
 */
proto.douyin.EpisodeChatMessage.prototype.getGiftimage = function() {
  return /** @type{?proto.douyin.Image} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Image, 7));
};


/**
 * @param {?proto.douyin.Image|undefined} value
 * @return {!proto.douyin.EpisodeChatMessage} returns this
*/
proto.douyin.EpisodeChatMessage.prototype.setGiftimage = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.EpisodeChatMessage} returns this
 */
proto.douyin.EpisodeChatMessage.prototype.clearGiftimage = function() {
  return this.setGiftimage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.EpisodeChatMessage.prototype.hasGiftimage = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional uint64 agreeMsgId = 8;
 * @return {number}
 */
proto.douyin.EpisodeChatMessage.prototype.getAgreemsgid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.EpisodeChatMessage} returns this
 */
proto.douyin.EpisodeChatMessage.prototype.setAgreemsgid = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * repeated string colorValueList = 9;
 * @return {!Array<string>}
 */
proto.douyin.EpisodeChatMessage.prototype.getColorvaluelistList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.douyin.EpisodeChatMessage} returns this
 */
proto.douyin.EpisodeChatMessage.prototype.setColorvaluelistList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.douyin.EpisodeChatMessage} returns this
 */
proto.douyin.EpisodeChatMessage.prototype.addColorvaluelist = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.douyin.EpisodeChatMessage} returns this
 */
proto.douyin.EpisodeChatMessage.prototype.clearColorvaluelistList = function() {
  return this.setColorvaluelistList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.MatchAgainstScoreMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.MatchAgainstScoreMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.MatchAgainstScoreMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.MatchAgainstScoreMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && proto.douyin.Common.toObject(includeInstance, f),
    against: (f = msg.getAgainst()) && proto.douyin.Against.toObject(includeInstance, f),
    matchstatus: jspb.Message.getFieldWithDefault(msg, 3, 0),
    displaystatus: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.MatchAgainstScoreMessage}
 */
proto.douyin.MatchAgainstScoreMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.MatchAgainstScoreMessage;
  return proto.douyin.MatchAgainstScoreMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.MatchAgainstScoreMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.MatchAgainstScoreMessage}
 */
proto.douyin.MatchAgainstScoreMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.douyin.Common;
      reader.readMessage(value,proto.douyin.Common.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new proto.douyin.Against;
      reader.readMessage(value,proto.douyin.Against.deserializeBinaryFromReader);
      msg.setAgainst(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMatchstatus(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDisplaystatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.MatchAgainstScoreMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.MatchAgainstScoreMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.MatchAgainstScoreMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.MatchAgainstScoreMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.douyin.Common.serializeBinaryToWriter
    );
  }
  f = message.getAgainst();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.douyin.Against.serializeBinaryToWriter
    );
  }
  f = message.getMatchstatus();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getDisplaystatus();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional Common common = 1;
 * @return {?proto.douyin.Common}
 */
proto.douyin.MatchAgainstScoreMessage.prototype.getCommon = function() {
  return /** @type{?proto.douyin.Common} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Common, 1));
};


/**
 * @param {?proto.douyin.Common|undefined} value
 * @return {!proto.douyin.MatchAgainstScoreMessage} returns this
*/
proto.douyin.MatchAgainstScoreMessage.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.MatchAgainstScoreMessage} returns this
 */
proto.douyin.MatchAgainstScoreMessage.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.MatchAgainstScoreMessage.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Against against = 2;
 * @return {?proto.douyin.Against}
 */
proto.douyin.MatchAgainstScoreMessage.prototype.getAgainst = function() {
  return /** @type{?proto.douyin.Against} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Against, 2));
};


/**
 * @param {?proto.douyin.Against|undefined} value
 * @return {!proto.douyin.MatchAgainstScoreMessage} returns this
*/
proto.douyin.MatchAgainstScoreMessage.prototype.setAgainst = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.MatchAgainstScoreMessage} returns this
 */
proto.douyin.MatchAgainstScoreMessage.prototype.clearAgainst = function() {
  return this.setAgainst(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.MatchAgainstScoreMessage.prototype.hasAgainst = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 matchStatus = 3;
 * @return {number}
 */
proto.douyin.MatchAgainstScoreMessage.prototype.getMatchstatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.MatchAgainstScoreMessage} returns this
 */
proto.douyin.MatchAgainstScoreMessage.prototype.setMatchstatus = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 displayStatus = 4;
 * @return {number}
 */
proto.douyin.MatchAgainstScoreMessage.prototype.getDisplaystatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.MatchAgainstScoreMessage} returns this
 */
proto.douyin.MatchAgainstScoreMessage.prototype.setDisplaystatus = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.Against.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.Against.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.Against} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.Against.toObject = function(includeInstance, msg) {
  var f, obj = {
    leftname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    leftlogo: (f = msg.getLeftlogo()) && proto.douyin.Image.toObject(includeInstance, f),
    leftgoal: jspb.Message.getFieldWithDefault(msg, 3, ""),
    rightname: jspb.Message.getFieldWithDefault(msg, 6, ""),
    rightlogo: (f = msg.getRightlogo()) && proto.douyin.Image.toObject(includeInstance, f),
    rightgoal: jspb.Message.getFieldWithDefault(msg, 8, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 11, 0),
    version: jspb.Message.getFieldWithDefault(msg, 12, 0),
    leftteamid: jspb.Message.getFieldWithDefault(msg, 13, 0),
    rightteamid: jspb.Message.getFieldWithDefault(msg, 14, 0),
    diffsei2abssecond: jspb.Message.getFieldWithDefault(msg, 15, 0),
    finalgoalstage: jspb.Message.getFieldWithDefault(msg, 16, 0),
    currentgoalstage: jspb.Message.getFieldWithDefault(msg, 17, 0),
    leftscoreaddition: jspb.Message.getFieldWithDefault(msg, 18, 0),
    rightscoreaddition: jspb.Message.getFieldWithDefault(msg, 19, 0),
    leftgoalint: jspb.Message.getFieldWithDefault(msg, 20, 0),
    rightgoalint: jspb.Message.getFieldWithDefault(msg, 21, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.Against}
 */
proto.douyin.Against.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.Against;
  return proto.douyin.Against.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.Against} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.Against}
 */
proto.douyin.Against.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLeftname(value);
      break;
    case 2:
      var value = new proto.douyin.Image;
      reader.readMessage(value,proto.douyin.Image.deserializeBinaryFromReader);
      msg.setLeftlogo(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLeftgoal(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setRightname(value);
      break;
    case 7:
      var value = new proto.douyin.Image;
      reader.readMessage(value,proto.douyin.Image.deserializeBinaryFromReader);
      msg.setRightlogo(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setRightgoal(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setVersion(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLeftteamid(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRightteamid(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDiffsei2abssecond(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFinalgoalstage(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCurrentgoalstage(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLeftscoreaddition(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRightscoreaddition(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLeftgoalint(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRightgoalint(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.Against.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.Against.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.Against} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.Against.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLeftname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLeftlogo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.douyin.Image.serializeBinaryToWriter
    );
  }
  f = message.getLeftgoal();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRightname();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getRightlogo();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.douyin.Image.serializeBinaryToWriter
    );
  }
  f = message.getRightgoal();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      11,
      f
    );
  }
  f = message.getVersion();
  if (f !== 0) {
    writer.writeUint64(
      12,
      f
    );
  }
  f = message.getLeftteamid();
  if (f !== 0) {
    writer.writeUint64(
      13,
      f
    );
  }
  f = message.getRightteamid();
  if (f !== 0) {
    writer.writeUint64(
      14,
      f
    );
  }
  f = message.getDiffsei2abssecond();
  if (f !== 0) {
    writer.writeUint64(
      15,
      f
    );
  }
  f = message.getFinalgoalstage();
  if (f !== 0) {
    writer.writeUint32(
      16,
      f
    );
  }
  f = message.getCurrentgoalstage();
  if (f !== 0) {
    writer.writeUint32(
      17,
      f
    );
  }
  f = message.getLeftscoreaddition();
  if (f !== 0) {
    writer.writeUint32(
      18,
      f
    );
  }
  f = message.getRightscoreaddition();
  if (f !== 0) {
    writer.writeUint32(
      19,
      f
    );
  }
  f = message.getLeftgoalint();
  if (f !== 0) {
    writer.writeUint64(
      20,
      f
    );
  }
  f = message.getRightgoalint();
  if (f !== 0) {
    writer.writeUint64(
      21,
      f
    );
  }
};


/**
 * optional string leftName = 1;
 * @return {string}
 */
proto.douyin.Against.prototype.getLeftname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.Against} returns this
 */
proto.douyin.Against.prototype.setLeftname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Image leftLogo = 2;
 * @return {?proto.douyin.Image}
 */
proto.douyin.Against.prototype.getLeftlogo = function() {
  return /** @type{?proto.douyin.Image} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Image, 2));
};


/**
 * @param {?proto.douyin.Image|undefined} value
 * @return {!proto.douyin.Against} returns this
*/
proto.douyin.Against.prototype.setLeftlogo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.Against} returns this
 */
proto.douyin.Against.prototype.clearLeftlogo = function() {
  return this.setLeftlogo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.Against.prototype.hasLeftlogo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string leftGoal = 3;
 * @return {string}
 */
proto.douyin.Against.prototype.getLeftgoal = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.Against} returns this
 */
proto.douyin.Against.prototype.setLeftgoal = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string rightName = 6;
 * @return {string}
 */
proto.douyin.Against.prototype.getRightname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.Against} returns this
 */
proto.douyin.Against.prototype.setRightname = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional Image rightLogo = 7;
 * @return {?proto.douyin.Image}
 */
proto.douyin.Against.prototype.getRightlogo = function() {
  return /** @type{?proto.douyin.Image} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Image, 7));
};


/**
 * @param {?proto.douyin.Image|undefined} value
 * @return {!proto.douyin.Against} returns this
*/
proto.douyin.Against.prototype.setRightlogo = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.Against} returns this
 */
proto.douyin.Against.prototype.clearRightlogo = function() {
  return this.setRightlogo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.Against.prototype.hasRightlogo = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string rightGoal = 8;
 * @return {string}
 */
proto.douyin.Against.prototype.getRightgoal = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.Against} returns this
 */
proto.douyin.Against.prototype.setRightgoal = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional uint64 timestamp = 11;
 * @return {number}
 */
proto.douyin.Against.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.Against} returns this
 */
proto.douyin.Against.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional uint64 version = 12;
 * @return {number}
 */
proto.douyin.Against.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.Against} returns this
 */
proto.douyin.Against.prototype.setVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional uint64 leftTeamId = 13;
 * @return {number}
 */
proto.douyin.Against.prototype.getLeftteamid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.Against} returns this
 */
proto.douyin.Against.prototype.setLeftteamid = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional uint64 rightTeamId = 14;
 * @return {number}
 */
proto.douyin.Against.prototype.getRightteamid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.Against} returns this
 */
proto.douyin.Against.prototype.setRightteamid = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional uint64 diffSei2absSecond = 15;
 * @return {number}
 */
proto.douyin.Against.prototype.getDiffsei2abssecond = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.Against} returns this
 */
proto.douyin.Against.prototype.setDiffsei2abssecond = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional uint32 finalGoalStage = 16;
 * @return {number}
 */
proto.douyin.Against.prototype.getFinalgoalstage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.Against} returns this
 */
proto.douyin.Against.prototype.setFinalgoalstage = function(value) {
  return jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * optional uint32 currentGoalStage = 17;
 * @return {number}
 */
proto.douyin.Against.prototype.getCurrentgoalstage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.Against} returns this
 */
proto.douyin.Against.prototype.setCurrentgoalstage = function(value) {
  return jspb.Message.setProto3IntField(this, 17, value);
};


/**
 * optional uint32 leftScoreAddition = 18;
 * @return {number}
 */
proto.douyin.Against.prototype.getLeftscoreaddition = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.Against} returns this
 */
proto.douyin.Against.prototype.setLeftscoreaddition = function(value) {
  return jspb.Message.setProto3IntField(this, 18, value);
};


/**
 * optional uint32 rightScoreAddition = 19;
 * @return {number}
 */
proto.douyin.Against.prototype.getRightscoreaddition = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.Against} returns this
 */
proto.douyin.Against.prototype.setRightscoreaddition = function(value) {
  return jspb.Message.setProto3IntField(this, 19, value);
};


/**
 * optional uint64 leftGoalInt = 20;
 * @return {number}
 */
proto.douyin.Against.prototype.getLeftgoalint = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.Against} returns this
 */
proto.douyin.Against.prototype.setLeftgoalint = function(value) {
  return jspb.Message.setProto3IntField(this, 20, value);
};


/**
 * optional uint64 rightGoalInt = 21;
 * @return {number}
 */
proto.douyin.Against.prototype.getRightgoalint = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.Against} returns this
 */
proto.douyin.Against.prototype.setRightgoalint = function(value) {
  return jspb.Message.setProto3IntField(this, 21, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.Common.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.Common.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.Common} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.Common.toObject = function(includeInstance, msg) {
  var f, obj = {
    method: jspb.Message.getFieldWithDefault(msg, 1, ""),
    msgid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    roomid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    createtime: jspb.Message.getFieldWithDefault(msg, 4, 0),
    monitor: jspb.Message.getFieldWithDefault(msg, 5, 0),
    isshowmsg: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    describe: jspb.Message.getFieldWithDefault(msg, 7, ""),
    foldtype: jspb.Message.getFieldWithDefault(msg, 9, 0),
    anchorfoldtype: jspb.Message.getFieldWithDefault(msg, 10, 0),
    priorityscore: jspb.Message.getFieldWithDefault(msg, 11, 0),
    logid: jspb.Message.getFieldWithDefault(msg, 12, ""),
    msgprocessfilterk: jspb.Message.getFieldWithDefault(msg, 13, ""),
    msgprocessfilterv: jspb.Message.getFieldWithDefault(msg, 14, ""),
    user: (f = msg.getUser()) && proto.douyin.User.toObject(includeInstance, f),
    anchorfoldtypev2: jspb.Message.getFieldWithDefault(msg, 17, 0),
    processatseitimems: jspb.Message.getFieldWithDefault(msg, 18, 0),
    randomdispatchms: jspb.Message.getFieldWithDefault(msg, 19, 0),
    isdispatch: jspb.Message.getBooleanFieldWithDefault(msg, 20, false),
    channelid: jspb.Message.getFieldWithDefault(msg, 21, 0),
    diffsei2abssecond: jspb.Message.getFieldWithDefault(msg, 22, 0),
    anchorfoldduration: jspb.Message.getFieldWithDefault(msg, 23, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.Common}
 */
proto.douyin.Common.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.Common;
  return proto.douyin.Common.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.Common} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.Common}
 */
proto.douyin.Common.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMethod(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMsgid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRoomid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCreatetime(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMonitor(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsshowmsg(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescribe(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFoldtype(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAnchorfoldtype(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPriorityscore(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setLogid(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsgprocessfilterk(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsgprocessfilterv(value);
      break;
    case 15:
      var value = new proto.douyin.User;
      reader.readMessage(value,proto.douyin.User.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAnchorfoldtypev2(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setProcessatseitimems(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRandomdispatchms(value);
      break;
    case 20:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsdispatch(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setChannelid(value);
      break;
    case 22:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDiffsei2abssecond(value);
      break;
    case 23:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAnchorfoldduration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.Common.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.Common.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.Common} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.Common.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMethod();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMsgid();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getRoomid();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getCreatetime();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getMonitor();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getIsshowmsg();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getDescribe();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getFoldtype();
  if (f !== 0) {
    writer.writeUint64(
      9,
      f
    );
  }
  f = message.getAnchorfoldtype();
  if (f !== 0) {
    writer.writeUint64(
      10,
      f
    );
  }
  f = message.getPriorityscore();
  if (f !== 0) {
    writer.writeUint64(
      11,
      f
    );
  }
  f = message.getLogid();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getMsgprocessfilterk();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getMsgprocessfilterv();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.douyin.User.serializeBinaryToWriter
    );
  }
  f = message.getAnchorfoldtypev2();
  if (f !== 0) {
    writer.writeUint64(
      17,
      f
    );
  }
  f = message.getProcessatseitimems();
  if (f !== 0) {
    writer.writeUint64(
      18,
      f
    );
  }
  f = message.getRandomdispatchms();
  if (f !== 0) {
    writer.writeUint64(
      19,
      f
    );
  }
  f = message.getIsdispatch();
  if (f) {
    writer.writeBool(
      20,
      f
    );
  }
  f = message.getChannelid();
  if (f !== 0) {
    writer.writeUint64(
      21,
      f
    );
  }
  f = message.getDiffsei2abssecond();
  if (f !== 0) {
    writer.writeUint64(
      22,
      f
    );
  }
  f = message.getAnchorfoldduration();
  if (f !== 0) {
    writer.writeUint64(
      23,
      f
    );
  }
};


/**
 * optional string method = 1;
 * @return {string}
 */
proto.douyin.Common.prototype.getMethod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.Common} returns this
 */
proto.douyin.Common.prototype.setMethod = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 msgId = 2;
 * @return {number}
 */
proto.douyin.Common.prototype.getMsgid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.Common} returns this
 */
proto.douyin.Common.prototype.setMsgid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 roomId = 3;
 * @return {number}
 */
proto.douyin.Common.prototype.getRoomid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.Common} returns this
 */
proto.douyin.Common.prototype.setRoomid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 createTime = 4;
 * @return {number}
 */
proto.douyin.Common.prototype.getCreatetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.Common} returns this
 */
proto.douyin.Common.prototype.setCreatetime = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 monitor = 5;
 * @return {number}
 */
proto.douyin.Common.prototype.getMonitor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.Common} returns this
 */
proto.douyin.Common.prototype.setMonitor = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional bool isShowMsg = 6;
 * @return {boolean}
 */
proto.douyin.Common.prototype.getIsshowmsg = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.douyin.Common} returns this
 */
proto.douyin.Common.prototype.setIsshowmsg = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional string describe = 7;
 * @return {string}
 */
proto.douyin.Common.prototype.getDescribe = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.Common} returns this
 */
proto.douyin.Common.prototype.setDescribe = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional uint64 foldType = 9;
 * @return {number}
 */
proto.douyin.Common.prototype.getFoldtype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.Common} returns this
 */
proto.douyin.Common.prototype.setFoldtype = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional uint64 anchorFoldType = 10;
 * @return {number}
 */
proto.douyin.Common.prototype.getAnchorfoldtype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.Common} returns this
 */
proto.douyin.Common.prototype.setAnchorfoldtype = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional uint64 priorityScore = 11;
 * @return {number}
 */
proto.douyin.Common.prototype.getPriorityscore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.Common} returns this
 */
proto.douyin.Common.prototype.setPriorityscore = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional string logId = 12;
 * @return {string}
 */
proto.douyin.Common.prototype.getLogid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.Common} returns this
 */
proto.douyin.Common.prototype.setLogid = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string msgProcessFilterK = 13;
 * @return {string}
 */
proto.douyin.Common.prototype.getMsgprocessfilterk = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.Common} returns this
 */
proto.douyin.Common.prototype.setMsgprocessfilterk = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string msgProcessFilterV = 14;
 * @return {string}
 */
proto.douyin.Common.prototype.getMsgprocessfilterv = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.Common} returns this
 */
proto.douyin.Common.prototype.setMsgprocessfilterv = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional User user = 15;
 * @return {?proto.douyin.User}
 */
proto.douyin.Common.prototype.getUser = function() {
  return /** @type{?proto.douyin.User} */ (
    jspb.Message.getWrapperField(this, proto.douyin.User, 15));
};


/**
 * @param {?proto.douyin.User|undefined} value
 * @return {!proto.douyin.Common} returns this
*/
proto.douyin.Common.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.Common} returns this
 */
proto.douyin.Common.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.Common.prototype.hasUser = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional uint64 anchorFoldTypeV2 = 17;
 * @return {number}
 */
proto.douyin.Common.prototype.getAnchorfoldtypev2 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.Common} returns this
 */
proto.douyin.Common.prototype.setAnchorfoldtypev2 = function(value) {
  return jspb.Message.setProto3IntField(this, 17, value);
};


/**
 * optional uint64 processAtSeiTimeMs = 18;
 * @return {number}
 */
proto.douyin.Common.prototype.getProcessatseitimems = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.Common} returns this
 */
proto.douyin.Common.prototype.setProcessatseitimems = function(value) {
  return jspb.Message.setProto3IntField(this, 18, value);
};


/**
 * optional uint64 randomDispatchMs = 19;
 * @return {number}
 */
proto.douyin.Common.prototype.getRandomdispatchms = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.Common} returns this
 */
proto.douyin.Common.prototype.setRandomdispatchms = function(value) {
  return jspb.Message.setProto3IntField(this, 19, value);
};


/**
 * optional bool isDispatch = 20;
 * @return {boolean}
 */
proto.douyin.Common.prototype.getIsdispatch = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 20, false));
};


/**
 * @param {boolean} value
 * @return {!proto.douyin.Common} returns this
 */
proto.douyin.Common.prototype.setIsdispatch = function(value) {
  return jspb.Message.setProto3BooleanField(this, 20, value);
};


/**
 * optional uint64 channelId = 21;
 * @return {number}
 */
proto.douyin.Common.prototype.getChannelid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.Common} returns this
 */
proto.douyin.Common.prototype.setChannelid = function(value) {
  return jspb.Message.setProto3IntField(this, 21, value);
};


/**
 * optional uint64 diffSei2absSecond = 22;
 * @return {number}
 */
proto.douyin.Common.prototype.getDiffsei2abssecond = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 22, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.Common} returns this
 */
proto.douyin.Common.prototype.setDiffsei2abssecond = function(value) {
  return jspb.Message.setProto3IntField(this, 22, value);
};


/**
 * optional uint64 anchorFoldDuration = 23;
 * @return {number}
 */
proto.douyin.Common.prototype.getAnchorfoldduration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 23, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.Common} returns this
 */
proto.douyin.Common.prototype.setAnchorfoldduration = function(value) {
  return jspb.Message.setProto3IntField(this, 23, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.douyin.User.repeatedFields_ = [21,29];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.User.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.User.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.User} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.User.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    shortid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    nickname: jspb.Message.getFieldWithDefault(msg, 3, ""),
    gender: jspb.Message.getFieldWithDefault(msg, 4, 0),
    signature: jspb.Message.getFieldWithDefault(msg, 5, ""),
    level: jspb.Message.getFieldWithDefault(msg, 6, 0),
    birthday: jspb.Message.getFieldWithDefault(msg, 7, 0),
    telephone: jspb.Message.getFieldWithDefault(msg, 8, ""),
    avatarthumb: (f = msg.getAvatarthumb()) && proto.douyin.Image.toObject(includeInstance, f),
    avatarmedium: (f = msg.getAvatarmedium()) && proto.douyin.Image.toObject(includeInstance, f),
    avatarlarge: (f = msg.getAvatarlarge()) && proto.douyin.Image.toObject(includeInstance, f),
    verified: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    experience: jspb.Message.getFieldWithDefault(msg, 13, 0),
    city: jspb.Message.getFieldWithDefault(msg, 14, ""),
    status: jspb.Message.getFieldWithDefault(msg, 15, 0),
    createtime: jspb.Message.getFieldWithDefault(msg, 16, 0),
    modifytime: jspb.Message.getFieldWithDefault(msg, 17, 0),
    secret: jspb.Message.getFieldWithDefault(msg, 18, 0),
    shareqrcodeuri: jspb.Message.getFieldWithDefault(msg, 19, ""),
    incomesharepercent: jspb.Message.getFieldWithDefault(msg, 20, 0),
    badgeimagelistList: jspb.Message.toObjectList(msg.getBadgeimagelistList(),
    proto.douyin.Image.toObject, includeInstance),
    followinfo: (f = msg.getFollowinfo()) && proto.douyin.FollowInfo.toObject(includeInstance, f),
    paygrade: (f = msg.getPaygrade()) && proto.douyin.PayGrade.toObject(includeInstance, f),
    fansclub: (f = msg.getFansclub()) && proto.douyin.FansClub.toObject(includeInstance, f),
    specialid: jspb.Message.getFieldWithDefault(msg, 26, ""),
    avatarborder: (f = msg.getAvatarborder()) && proto.douyin.Image.toObject(includeInstance, f),
    medal: (f = msg.getMedal()) && proto.douyin.Image.toObject(includeInstance, f),
    realtimeiconslistList: jspb.Message.toObjectList(msg.getRealtimeiconslistList(),
    proto.douyin.Image.toObject, includeInstance),
    displayid: jspb.Message.getFieldWithDefault(msg, 38, ""),
    secuid: jspb.Message.getFieldWithDefault(msg, 46, ""),
    fanticketcount: jspb.Message.getFieldWithDefault(msg, 1022, 0),
    idstr: jspb.Message.getFieldWithDefault(msg, 1028, ""),
    agerange: jspb.Message.getFieldWithDefault(msg, 1045, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.User}
 */
proto.douyin.User.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.User;
  return proto.douyin.User.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.User} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.User}
 */
proto.douyin.User.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setShortid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNickname(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGender(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSignature(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLevel(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBirthday(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setTelephone(value);
      break;
    case 9:
      var value = new proto.douyin.Image;
      reader.readMessage(value,proto.douyin.Image.deserializeBinaryFromReader);
      msg.setAvatarthumb(value);
      break;
    case 10:
      var value = new proto.douyin.Image;
      reader.readMessage(value,proto.douyin.Image.deserializeBinaryFromReader);
      msg.setAvatarmedium(value);
      break;
    case 11:
      var value = new proto.douyin.Image;
      reader.readMessage(value,proto.douyin.Image.deserializeBinaryFromReader);
      msg.setAvatarlarge(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVerified(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setExperience(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setCity(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCreatetime(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setModifytime(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSecret(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setShareqrcodeuri(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIncomesharepercent(value);
      break;
    case 21:
      var value = new proto.douyin.Image;
      reader.readMessage(value,proto.douyin.Image.deserializeBinaryFromReader);
      msg.addBadgeimagelist(value);
      break;
    case 22:
      var value = new proto.douyin.FollowInfo;
      reader.readMessage(value,proto.douyin.FollowInfo.deserializeBinaryFromReader);
      msg.setFollowinfo(value);
      break;
    case 23:
      var value = new proto.douyin.PayGrade;
      reader.readMessage(value,proto.douyin.PayGrade.deserializeBinaryFromReader);
      msg.setPaygrade(value);
      break;
    case 24:
      var value = new proto.douyin.FansClub;
      reader.readMessage(value,proto.douyin.FansClub.deserializeBinaryFromReader);
      msg.setFansclub(value);
      break;
    case 26:
      var value = /** @type {string} */ (reader.readString());
      msg.setSpecialid(value);
      break;
    case 27:
      var value = new proto.douyin.Image;
      reader.readMessage(value,proto.douyin.Image.deserializeBinaryFromReader);
      msg.setAvatarborder(value);
      break;
    case 28:
      var value = new proto.douyin.Image;
      reader.readMessage(value,proto.douyin.Image.deserializeBinaryFromReader);
      msg.setMedal(value);
      break;
    case 29:
      var value = new proto.douyin.Image;
      reader.readMessage(value,proto.douyin.Image.deserializeBinaryFromReader);
      msg.addRealtimeiconslist(value);
      break;
    case 38:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayid(value);
      break;
    case 46:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecuid(value);
      break;
    case 1022:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFanticketcount(value);
      break;
    case 1028:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdstr(value);
      break;
    case 1045:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAgerange(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.User.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.User.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.User} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.User.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getShortid();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getNickname();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getGender();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getSignature();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getLevel();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getBirthday();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getTelephone();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getAvatarthumb();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.douyin.Image.serializeBinaryToWriter
    );
  }
  f = message.getAvatarmedium();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.douyin.Image.serializeBinaryToWriter
    );
  }
  f = message.getAvatarlarge();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.douyin.Image.serializeBinaryToWriter
    );
  }
  f = message.getVerified();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getExperience();
  if (f !== 0) {
    writer.writeUint32(
      13,
      f
    );
  }
  f = message.getCity();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt32(
      15,
      f
    );
  }
  f = message.getCreatetime();
  if (f !== 0) {
    writer.writeUint64(
      16,
      f
    );
  }
  f = message.getModifytime();
  if (f !== 0) {
    writer.writeUint64(
      17,
      f
    );
  }
  f = message.getSecret();
  if (f !== 0) {
    writer.writeUint32(
      18,
      f
    );
  }
  f = message.getShareqrcodeuri();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getIncomesharepercent();
  if (f !== 0) {
    writer.writeUint32(
      20,
      f
    );
  }
  f = message.getBadgeimagelistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      21,
      f,
      proto.douyin.Image.serializeBinaryToWriter
    );
  }
  f = message.getFollowinfo();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.douyin.FollowInfo.serializeBinaryToWriter
    );
  }
  f = message.getPaygrade();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto.douyin.PayGrade.serializeBinaryToWriter
    );
  }
  f = message.getFansclub();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      proto.douyin.FansClub.serializeBinaryToWriter
    );
  }
  f = message.getSpecialid();
  if (f.length > 0) {
    writer.writeString(
      26,
      f
    );
  }
  f = message.getAvatarborder();
  if (f != null) {
    writer.writeMessage(
      27,
      f,
      proto.douyin.Image.serializeBinaryToWriter
    );
  }
  f = message.getMedal();
  if (f != null) {
    writer.writeMessage(
      28,
      f,
      proto.douyin.Image.serializeBinaryToWriter
    );
  }
  f = message.getRealtimeiconslistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      29,
      f,
      proto.douyin.Image.serializeBinaryToWriter
    );
  }
  f = message.getDisplayid();
  if (f.length > 0) {
    writer.writeString(
      38,
      f
    );
  }
  f = message.getSecuid();
  if (f.length > 0) {
    writer.writeString(
      46,
      f
    );
  }
  f = message.getFanticketcount();
  if (f !== 0) {
    writer.writeUint64(
      1022,
      f
    );
  }
  f = message.getIdstr();
  if (f.length > 0) {
    writer.writeString(
      1028,
      f
    );
  }
  f = message.getAgerange();
  if (f !== 0) {
    writer.writeUint32(
      1045,
      f
    );
  }
};


/**
 * optional uint64 id = 1;
 * @return {number}
 */
proto.douyin.User.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.User} returns this
 */
proto.douyin.User.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 shortId = 2;
 * @return {number}
 */
proto.douyin.User.prototype.getShortid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.User} returns this
 */
proto.douyin.User.prototype.setShortid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string nickName = 3;
 * @return {string}
 */
proto.douyin.User.prototype.getNickname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.User} returns this
 */
proto.douyin.User.prototype.setNickname = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint32 gender = 4;
 * @return {number}
 */
proto.douyin.User.prototype.getGender = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.User} returns this
 */
proto.douyin.User.prototype.setGender = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string Signature = 5;
 * @return {string}
 */
proto.douyin.User.prototype.getSignature = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.User} returns this
 */
proto.douyin.User.prototype.setSignature = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional uint32 Level = 6;
 * @return {number}
 */
proto.douyin.User.prototype.getLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.User} returns this
 */
proto.douyin.User.prototype.setLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint64 Birthday = 7;
 * @return {number}
 */
proto.douyin.User.prototype.getBirthday = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.User} returns this
 */
proto.douyin.User.prototype.setBirthday = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string Telephone = 8;
 * @return {string}
 */
proto.douyin.User.prototype.getTelephone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.User} returns this
 */
proto.douyin.User.prototype.setTelephone = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional Image AvatarThumb = 9;
 * @return {?proto.douyin.Image}
 */
proto.douyin.User.prototype.getAvatarthumb = function() {
  return /** @type{?proto.douyin.Image} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Image, 9));
};


/**
 * @param {?proto.douyin.Image|undefined} value
 * @return {!proto.douyin.User} returns this
*/
proto.douyin.User.prototype.setAvatarthumb = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.User} returns this
 */
proto.douyin.User.prototype.clearAvatarthumb = function() {
  return this.setAvatarthumb(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.User.prototype.hasAvatarthumb = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional Image AvatarMedium = 10;
 * @return {?proto.douyin.Image}
 */
proto.douyin.User.prototype.getAvatarmedium = function() {
  return /** @type{?proto.douyin.Image} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Image, 10));
};


/**
 * @param {?proto.douyin.Image|undefined} value
 * @return {!proto.douyin.User} returns this
*/
proto.douyin.User.prototype.setAvatarmedium = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.User} returns this
 */
proto.douyin.User.prototype.clearAvatarmedium = function() {
  return this.setAvatarmedium(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.User.prototype.hasAvatarmedium = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional Image AvatarLarge = 11;
 * @return {?proto.douyin.Image}
 */
proto.douyin.User.prototype.getAvatarlarge = function() {
  return /** @type{?proto.douyin.Image} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Image, 11));
};


/**
 * @param {?proto.douyin.Image|undefined} value
 * @return {!proto.douyin.User} returns this
*/
proto.douyin.User.prototype.setAvatarlarge = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.User} returns this
 */
proto.douyin.User.prototype.clearAvatarlarge = function() {
  return this.setAvatarlarge(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.User.prototype.hasAvatarlarge = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional bool Verified = 12;
 * @return {boolean}
 */
proto.douyin.User.prototype.getVerified = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.douyin.User} returns this
 */
proto.douyin.User.prototype.setVerified = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional uint32 Experience = 13;
 * @return {number}
 */
proto.douyin.User.prototype.getExperience = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.User} returns this
 */
proto.douyin.User.prototype.setExperience = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional string city = 14;
 * @return {string}
 */
proto.douyin.User.prototype.getCity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.User} returns this
 */
proto.douyin.User.prototype.setCity = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional int32 Status = 15;
 * @return {number}
 */
proto.douyin.User.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.User} returns this
 */
proto.douyin.User.prototype.setStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional uint64 CreateTime = 16;
 * @return {number}
 */
proto.douyin.User.prototype.getCreatetime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.User} returns this
 */
proto.douyin.User.prototype.setCreatetime = function(value) {
  return jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * optional uint64 ModifyTime = 17;
 * @return {number}
 */
proto.douyin.User.prototype.getModifytime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.User} returns this
 */
proto.douyin.User.prototype.setModifytime = function(value) {
  return jspb.Message.setProto3IntField(this, 17, value);
};


/**
 * optional uint32 Secret = 18;
 * @return {number}
 */
proto.douyin.User.prototype.getSecret = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.User} returns this
 */
proto.douyin.User.prototype.setSecret = function(value) {
  return jspb.Message.setProto3IntField(this, 18, value);
};


/**
 * optional string ShareQrcodeUri = 19;
 * @return {string}
 */
proto.douyin.User.prototype.getShareqrcodeuri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.User} returns this
 */
proto.douyin.User.prototype.setShareqrcodeuri = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * optional uint32 IncomeSharePercent = 20;
 * @return {number}
 */
proto.douyin.User.prototype.getIncomesharepercent = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.User} returns this
 */
proto.douyin.User.prototype.setIncomesharepercent = function(value) {
  return jspb.Message.setProto3IntField(this, 20, value);
};


/**
 * repeated Image BadgeImageList = 21;
 * @return {!Array<!proto.douyin.Image>}
 */
proto.douyin.User.prototype.getBadgeimagelistList = function() {
  return /** @type{!Array<!proto.douyin.Image>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.douyin.Image, 21));
};


/**
 * @param {!Array<!proto.douyin.Image>} value
 * @return {!proto.douyin.User} returns this
*/
proto.douyin.User.prototype.setBadgeimagelistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 21, value);
};


/**
 * @param {!proto.douyin.Image=} opt_value
 * @param {number=} opt_index
 * @return {!proto.douyin.Image}
 */
proto.douyin.User.prototype.addBadgeimagelist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 21, opt_value, proto.douyin.Image, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.douyin.User} returns this
 */
proto.douyin.User.prototype.clearBadgeimagelistList = function() {
  return this.setBadgeimagelistList([]);
};


/**
 * optional FollowInfo FollowInfo = 22;
 * @return {?proto.douyin.FollowInfo}
 */
proto.douyin.User.prototype.getFollowinfo = function() {
  return /** @type{?proto.douyin.FollowInfo} */ (
    jspb.Message.getWrapperField(this, proto.douyin.FollowInfo, 22));
};


/**
 * @param {?proto.douyin.FollowInfo|undefined} value
 * @return {!proto.douyin.User} returns this
*/
proto.douyin.User.prototype.setFollowinfo = function(value) {
  return jspb.Message.setWrapperField(this, 22, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.User} returns this
 */
proto.douyin.User.prototype.clearFollowinfo = function() {
  return this.setFollowinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.User.prototype.hasFollowinfo = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional PayGrade PayGrade = 23;
 * @return {?proto.douyin.PayGrade}
 */
proto.douyin.User.prototype.getPaygrade = function() {
  return /** @type{?proto.douyin.PayGrade} */ (
    jspb.Message.getWrapperField(this, proto.douyin.PayGrade, 23));
};


/**
 * @param {?proto.douyin.PayGrade|undefined} value
 * @return {!proto.douyin.User} returns this
*/
proto.douyin.User.prototype.setPaygrade = function(value) {
  return jspb.Message.setWrapperField(this, 23, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.User} returns this
 */
proto.douyin.User.prototype.clearPaygrade = function() {
  return this.setPaygrade(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.User.prototype.hasPaygrade = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional FansClub FansClub = 24;
 * @return {?proto.douyin.FansClub}
 */
proto.douyin.User.prototype.getFansclub = function() {
  return /** @type{?proto.douyin.FansClub} */ (
    jspb.Message.getWrapperField(this, proto.douyin.FansClub, 24));
};


/**
 * @param {?proto.douyin.FansClub|undefined} value
 * @return {!proto.douyin.User} returns this
*/
proto.douyin.User.prototype.setFansclub = function(value) {
  return jspb.Message.setWrapperField(this, 24, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.User} returns this
 */
proto.douyin.User.prototype.clearFansclub = function() {
  return this.setFansclub(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.User.prototype.hasFansclub = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional string SpecialId = 26;
 * @return {string}
 */
proto.douyin.User.prototype.getSpecialid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 26, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.User} returns this
 */
proto.douyin.User.prototype.setSpecialid = function(value) {
  return jspb.Message.setProto3StringField(this, 26, value);
};


/**
 * optional Image AvatarBorder = 27;
 * @return {?proto.douyin.Image}
 */
proto.douyin.User.prototype.getAvatarborder = function() {
  return /** @type{?proto.douyin.Image} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Image, 27));
};


/**
 * @param {?proto.douyin.Image|undefined} value
 * @return {!proto.douyin.User} returns this
*/
proto.douyin.User.prototype.setAvatarborder = function(value) {
  return jspb.Message.setWrapperField(this, 27, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.User} returns this
 */
proto.douyin.User.prototype.clearAvatarborder = function() {
  return this.setAvatarborder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.User.prototype.hasAvatarborder = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional Image Medal = 28;
 * @return {?proto.douyin.Image}
 */
proto.douyin.User.prototype.getMedal = function() {
  return /** @type{?proto.douyin.Image} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Image, 28));
};


/**
 * @param {?proto.douyin.Image|undefined} value
 * @return {!proto.douyin.User} returns this
*/
proto.douyin.User.prototype.setMedal = function(value) {
  return jspb.Message.setWrapperField(this, 28, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.User} returns this
 */
proto.douyin.User.prototype.clearMedal = function() {
  return this.setMedal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.User.prototype.hasMedal = function() {
  return jspb.Message.getField(this, 28) != null;
};


/**
 * repeated Image RealTimeIconsList = 29;
 * @return {!Array<!proto.douyin.Image>}
 */
proto.douyin.User.prototype.getRealtimeiconslistList = function() {
  return /** @type{!Array<!proto.douyin.Image>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.douyin.Image, 29));
};


/**
 * @param {!Array<!proto.douyin.Image>} value
 * @return {!proto.douyin.User} returns this
*/
proto.douyin.User.prototype.setRealtimeiconslistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 29, value);
};


/**
 * @param {!proto.douyin.Image=} opt_value
 * @param {number=} opt_index
 * @return {!proto.douyin.Image}
 */
proto.douyin.User.prototype.addRealtimeiconslist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 29, opt_value, proto.douyin.Image, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.douyin.User} returns this
 */
proto.douyin.User.prototype.clearRealtimeiconslistList = function() {
  return this.setRealtimeiconslistList([]);
};


/**
 * optional string displayId = 38;
 * @return {string}
 */
proto.douyin.User.prototype.getDisplayid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 38, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.User} returns this
 */
proto.douyin.User.prototype.setDisplayid = function(value) {
  return jspb.Message.setProto3StringField(this, 38, value);
};


/**
 * optional string secUid = 46;
 * @return {string}
 */
proto.douyin.User.prototype.getSecuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 46, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.User} returns this
 */
proto.douyin.User.prototype.setSecuid = function(value) {
  return jspb.Message.setProto3StringField(this, 46, value);
};


/**
 * optional uint64 fanTicketCount = 1022;
 * @return {number}
 */
proto.douyin.User.prototype.getFanticketcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1022, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.User} returns this
 */
proto.douyin.User.prototype.setFanticketcount = function(value) {
  return jspb.Message.setProto3IntField(this, 1022, value);
};


/**
 * optional string idStr = 1028;
 * @return {string}
 */
proto.douyin.User.prototype.getIdstr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1028, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.User} returns this
 */
proto.douyin.User.prototype.setIdstr = function(value) {
  return jspb.Message.setProto3StringField(this, 1028, value);
};


/**
 * optional uint32 ageRange = 1045;
 * @return {number}
 */
proto.douyin.User.prototype.getAgerange = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1045, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.User} returns this
 */
proto.douyin.User.prototype.setAgerange = function(value) {
  return jspb.Message.setProto3IntField(this, 1045, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.douyin.PayGrade.repeatedFields_ = [14];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.PayGrade.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.PayGrade.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.PayGrade} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.PayGrade.toObject = function(includeInstance, msg) {
  var f, obj = {
    totaldiamondcount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    diamondicon: (f = msg.getDiamondicon()) && proto.douyin.Image.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    icon: (f = msg.getIcon()) && proto.douyin.Image.toObject(includeInstance, f),
    nextname: jspb.Message.getFieldWithDefault(msg, 5, ""),
    level: jspb.Message.getFieldWithDefault(msg, 6, 0),
    nexticon: (f = msg.getNexticon()) && proto.douyin.Image.toObject(includeInstance, f),
    nextdiamond: jspb.Message.getFieldWithDefault(msg, 8, 0),
    nowdiamond: jspb.Message.getFieldWithDefault(msg, 9, 0),
    thisgrademindiamond: jspb.Message.getFieldWithDefault(msg, 10, 0),
    thisgrademaxdiamond: jspb.Message.getFieldWithDefault(msg, 11, 0),
    paydiamondbak: jspb.Message.getFieldWithDefault(msg, 12, 0),
    gradedescribe: jspb.Message.getFieldWithDefault(msg, 13, ""),
    gradeiconlistList: jspb.Message.toObjectList(msg.getGradeiconlistList(),
    proto.douyin.GradeIcon.toObject, includeInstance),
    screenchattype: jspb.Message.getFieldWithDefault(msg, 15, 0),
    imicon: (f = msg.getImicon()) && proto.douyin.Image.toObject(includeInstance, f),
    imiconwithlevel: (f = msg.getImiconwithlevel()) && proto.douyin.Image.toObject(includeInstance, f),
    liveicon: (f = msg.getLiveicon()) && proto.douyin.Image.toObject(includeInstance, f),
    newimiconwithlevel: (f = msg.getNewimiconwithlevel()) && proto.douyin.Image.toObject(includeInstance, f),
    newliveicon: (f = msg.getNewliveicon()) && proto.douyin.Image.toObject(includeInstance, f),
    upgradeneedconsume: jspb.Message.getFieldWithDefault(msg, 21, 0),
    nextprivileges: jspb.Message.getFieldWithDefault(msg, 22, ""),
    background: (f = msg.getBackground()) && proto.douyin.Image.toObject(includeInstance, f),
    backgroundback: (f = msg.getBackgroundback()) && proto.douyin.Image.toObject(includeInstance, f),
    score: jspb.Message.getFieldWithDefault(msg, 25, 0),
    buffinfo: (f = msg.getBuffinfo()) && proto.douyin.GradeBuffInfo.toObject(includeInstance, f),
    gradebanner: jspb.Message.getFieldWithDefault(msg, 1001, ""),
    profiledialogbg: (f = msg.getProfiledialogbg()) && proto.douyin.Image.toObject(includeInstance, f),
    profiledialogbgback: (f = msg.getProfiledialogbgback()) && proto.douyin.Image.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.PayGrade}
 */
proto.douyin.PayGrade.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.PayGrade;
  return proto.douyin.PayGrade.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.PayGrade} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.PayGrade}
 */
proto.douyin.PayGrade.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotaldiamondcount(value);
      break;
    case 2:
      var value = new proto.douyin.Image;
      reader.readMessage(value,proto.douyin.Image.deserializeBinaryFromReader);
      msg.setDiamondicon(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = new proto.douyin.Image;
      reader.readMessage(value,proto.douyin.Image.deserializeBinaryFromReader);
      msg.setIcon(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextname(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLevel(value);
      break;
    case 7:
      var value = new proto.douyin.Image;
      reader.readMessage(value,proto.douyin.Image.deserializeBinaryFromReader);
      msg.setNexticon(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNextdiamond(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNowdiamond(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setThisgrademindiamond(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setThisgrademaxdiamond(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPaydiamondbak(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setGradedescribe(value);
      break;
    case 14:
      var value = new proto.douyin.GradeIcon;
      reader.readMessage(value,proto.douyin.GradeIcon.deserializeBinaryFromReader);
      msg.addGradeiconlist(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setScreenchattype(value);
      break;
    case 16:
      var value = new proto.douyin.Image;
      reader.readMessage(value,proto.douyin.Image.deserializeBinaryFromReader);
      msg.setImicon(value);
      break;
    case 17:
      var value = new proto.douyin.Image;
      reader.readMessage(value,proto.douyin.Image.deserializeBinaryFromReader);
      msg.setImiconwithlevel(value);
      break;
    case 18:
      var value = new proto.douyin.Image;
      reader.readMessage(value,proto.douyin.Image.deserializeBinaryFromReader);
      msg.setLiveicon(value);
      break;
    case 19:
      var value = new proto.douyin.Image;
      reader.readMessage(value,proto.douyin.Image.deserializeBinaryFromReader);
      msg.setNewimiconwithlevel(value);
      break;
    case 20:
      var value = new proto.douyin.Image;
      reader.readMessage(value,proto.douyin.Image.deserializeBinaryFromReader);
      msg.setNewliveicon(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpgradeneedconsume(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextprivileges(value);
      break;
    case 23:
      var value = new proto.douyin.Image;
      reader.readMessage(value,proto.douyin.Image.deserializeBinaryFromReader);
      msg.setBackground(value);
      break;
    case 24:
      var value = new proto.douyin.Image;
      reader.readMessage(value,proto.douyin.Image.deserializeBinaryFromReader);
      msg.setBackgroundback(value);
      break;
    case 25:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setScore(value);
      break;
    case 26:
      var value = new proto.douyin.GradeBuffInfo;
      reader.readMessage(value,proto.douyin.GradeBuffInfo.deserializeBinaryFromReader);
      msg.setBuffinfo(value);
      break;
    case 1001:
      var value = /** @type {string} */ (reader.readString());
      msg.setGradebanner(value);
      break;
    case 1002:
      var value = new proto.douyin.Image;
      reader.readMessage(value,proto.douyin.Image.deserializeBinaryFromReader);
      msg.setProfiledialogbg(value);
      break;
    case 1003:
      var value = new proto.douyin.Image;
      reader.readMessage(value,proto.douyin.Image.deserializeBinaryFromReader);
      msg.setProfiledialogbgback(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.PayGrade.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.PayGrade.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.PayGrade} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.PayGrade.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTotaldiamondcount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getDiamondicon();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.douyin.Image.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIcon();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.douyin.Image.serializeBinaryToWriter
    );
  }
  f = message.getNextname();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getLevel();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getNexticon();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.douyin.Image.serializeBinaryToWriter
    );
  }
  f = message.getNextdiamond();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getNowdiamond();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getThisgrademindiamond();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getThisgrademaxdiamond();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getPaydiamondbak();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = message.getGradedescribe();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getGradeiconlistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      14,
      f,
      proto.douyin.GradeIcon.serializeBinaryToWriter
    );
  }
  f = message.getScreenchattype();
  if (f !== 0) {
    writer.writeInt64(
      15,
      f
    );
  }
  f = message.getImicon();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.douyin.Image.serializeBinaryToWriter
    );
  }
  f = message.getImiconwithlevel();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.douyin.Image.serializeBinaryToWriter
    );
  }
  f = message.getLiveicon();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.douyin.Image.serializeBinaryToWriter
    );
  }
  f = message.getNewimiconwithlevel();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.douyin.Image.serializeBinaryToWriter
    );
  }
  f = message.getNewliveicon();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.douyin.Image.serializeBinaryToWriter
    );
  }
  f = message.getUpgradeneedconsume();
  if (f !== 0) {
    writer.writeInt64(
      21,
      f
    );
  }
  f = message.getNextprivileges();
  if (f.length > 0) {
    writer.writeString(
      22,
      f
    );
  }
  f = message.getBackground();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto.douyin.Image.serializeBinaryToWriter
    );
  }
  f = message.getBackgroundback();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      proto.douyin.Image.serializeBinaryToWriter
    );
  }
  f = message.getScore();
  if (f !== 0) {
    writer.writeInt64(
      25,
      f
    );
  }
  f = message.getBuffinfo();
  if (f != null) {
    writer.writeMessage(
      26,
      f,
      proto.douyin.GradeBuffInfo.serializeBinaryToWriter
    );
  }
  f = message.getGradebanner();
  if (f.length > 0) {
    writer.writeString(
      1001,
      f
    );
  }
  f = message.getProfiledialogbg();
  if (f != null) {
    writer.writeMessage(
      1002,
      f,
      proto.douyin.Image.serializeBinaryToWriter
    );
  }
  f = message.getProfiledialogbgback();
  if (f != null) {
    writer.writeMessage(
      1003,
      f,
      proto.douyin.Image.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 totalDiamondCount = 1;
 * @return {number}
 */
proto.douyin.PayGrade.prototype.getTotaldiamondcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.PayGrade} returns this
 */
proto.douyin.PayGrade.prototype.setTotaldiamondcount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Image diamondIcon = 2;
 * @return {?proto.douyin.Image}
 */
proto.douyin.PayGrade.prototype.getDiamondicon = function() {
  return /** @type{?proto.douyin.Image} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Image, 2));
};


/**
 * @param {?proto.douyin.Image|undefined} value
 * @return {!proto.douyin.PayGrade} returns this
*/
proto.douyin.PayGrade.prototype.setDiamondicon = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.PayGrade} returns this
 */
proto.douyin.PayGrade.prototype.clearDiamondicon = function() {
  return this.setDiamondicon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.PayGrade.prototype.hasDiamondicon = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.douyin.PayGrade.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.PayGrade} returns this
 */
proto.douyin.PayGrade.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Image icon = 4;
 * @return {?proto.douyin.Image}
 */
proto.douyin.PayGrade.prototype.getIcon = function() {
  return /** @type{?proto.douyin.Image} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Image, 4));
};


/**
 * @param {?proto.douyin.Image|undefined} value
 * @return {!proto.douyin.PayGrade} returns this
*/
proto.douyin.PayGrade.prototype.setIcon = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.PayGrade} returns this
 */
proto.douyin.PayGrade.prototype.clearIcon = function() {
  return this.setIcon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.PayGrade.prototype.hasIcon = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string nextName = 5;
 * @return {string}
 */
proto.douyin.PayGrade.prototype.getNextname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.PayGrade} returns this
 */
proto.douyin.PayGrade.prototype.setNextname = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int64 level = 6;
 * @return {number}
 */
proto.douyin.PayGrade.prototype.getLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.PayGrade} returns this
 */
proto.douyin.PayGrade.prototype.setLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional Image nextIcon = 7;
 * @return {?proto.douyin.Image}
 */
proto.douyin.PayGrade.prototype.getNexticon = function() {
  return /** @type{?proto.douyin.Image} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Image, 7));
};


/**
 * @param {?proto.douyin.Image|undefined} value
 * @return {!proto.douyin.PayGrade} returns this
*/
proto.douyin.PayGrade.prototype.setNexticon = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.PayGrade} returns this
 */
proto.douyin.PayGrade.prototype.clearNexticon = function() {
  return this.setNexticon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.PayGrade.prototype.hasNexticon = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int64 nextDiamond = 8;
 * @return {number}
 */
proto.douyin.PayGrade.prototype.getNextdiamond = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.PayGrade} returns this
 */
proto.douyin.PayGrade.prototype.setNextdiamond = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int64 nowDiamond = 9;
 * @return {number}
 */
proto.douyin.PayGrade.prototype.getNowdiamond = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.PayGrade} returns this
 */
proto.douyin.PayGrade.prototype.setNowdiamond = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int64 thisGradeMinDiamond = 10;
 * @return {number}
 */
proto.douyin.PayGrade.prototype.getThisgrademindiamond = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.PayGrade} returns this
 */
proto.douyin.PayGrade.prototype.setThisgrademindiamond = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int64 thisGradeMaxDiamond = 11;
 * @return {number}
 */
proto.douyin.PayGrade.prototype.getThisgrademaxdiamond = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.PayGrade} returns this
 */
proto.douyin.PayGrade.prototype.setThisgrademaxdiamond = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int64 payDiamondBak = 12;
 * @return {number}
 */
proto.douyin.PayGrade.prototype.getPaydiamondbak = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.PayGrade} returns this
 */
proto.douyin.PayGrade.prototype.setPaydiamondbak = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional string gradeDescribe = 13;
 * @return {string}
 */
proto.douyin.PayGrade.prototype.getGradedescribe = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.PayGrade} returns this
 */
proto.douyin.PayGrade.prototype.setGradedescribe = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * repeated GradeIcon gradeIconList = 14;
 * @return {!Array<!proto.douyin.GradeIcon>}
 */
proto.douyin.PayGrade.prototype.getGradeiconlistList = function() {
  return /** @type{!Array<!proto.douyin.GradeIcon>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.douyin.GradeIcon, 14));
};


/**
 * @param {!Array<!proto.douyin.GradeIcon>} value
 * @return {!proto.douyin.PayGrade} returns this
*/
proto.douyin.PayGrade.prototype.setGradeiconlistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 14, value);
};


/**
 * @param {!proto.douyin.GradeIcon=} opt_value
 * @param {number=} opt_index
 * @return {!proto.douyin.GradeIcon}
 */
proto.douyin.PayGrade.prototype.addGradeiconlist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 14, opt_value, proto.douyin.GradeIcon, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.douyin.PayGrade} returns this
 */
proto.douyin.PayGrade.prototype.clearGradeiconlistList = function() {
  return this.setGradeiconlistList([]);
};


/**
 * optional int64 screenChatType = 15;
 * @return {number}
 */
proto.douyin.PayGrade.prototype.getScreenchattype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.PayGrade} returns this
 */
proto.douyin.PayGrade.prototype.setScreenchattype = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional Image imIcon = 16;
 * @return {?proto.douyin.Image}
 */
proto.douyin.PayGrade.prototype.getImicon = function() {
  return /** @type{?proto.douyin.Image} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Image, 16));
};


/**
 * @param {?proto.douyin.Image|undefined} value
 * @return {!proto.douyin.PayGrade} returns this
*/
proto.douyin.PayGrade.prototype.setImicon = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.PayGrade} returns this
 */
proto.douyin.PayGrade.prototype.clearImicon = function() {
  return this.setImicon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.PayGrade.prototype.hasImicon = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional Image imIconWithLevel = 17;
 * @return {?proto.douyin.Image}
 */
proto.douyin.PayGrade.prototype.getImiconwithlevel = function() {
  return /** @type{?proto.douyin.Image} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Image, 17));
};


/**
 * @param {?proto.douyin.Image|undefined} value
 * @return {!proto.douyin.PayGrade} returns this
*/
proto.douyin.PayGrade.prototype.setImiconwithlevel = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.PayGrade} returns this
 */
proto.douyin.PayGrade.prototype.clearImiconwithlevel = function() {
  return this.setImiconwithlevel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.PayGrade.prototype.hasImiconwithlevel = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional Image liveIcon = 18;
 * @return {?proto.douyin.Image}
 */
proto.douyin.PayGrade.prototype.getLiveicon = function() {
  return /** @type{?proto.douyin.Image} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Image, 18));
};


/**
 * @param {?proto.douyin.Image|undefined} value
 * @return {!proto.douyin.PayGrade} returns this
*/
proto.douyin.PayGrade.prototype.setLiveicon = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.PayGrade} returns this
 */
proto.douyin.PayGrade.prototype.clearLiveicon = function() {
  return this.setLiveicon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.PayGrade.prototype.hasLiveicon = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional Image newImIconWithLevel = 19;
 * @return {?proto.douyin.Image}
 */
proto.douyin.PayGrade.prototype.getNewimiconwithlevel = function() {
  return /** @type{?proto.douyin.Image} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Image, 19));
};


/**
 * @param {?proto.douyin.Image|undefined} value
 * @return {!proto.douyin.PayGrade} returns this
*/
proto.douyin.PayGrade.prototype.setNewimiconwithlevel = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.PayGrade} returns this
 */
proto.douyin.PayGrade.prototype.clearNewimiconwithlevel = function() {
  return this.setNewimiconwithlevel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.PayGrade.prototype.hasNewimiconwithlevel = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional Image newLiveIcon = 20;
 * @return {?proto.douyin.Image}
 */
proto.douyin.PayGrade.prototype.getNewliveicon = function() {
  return /** @type{?proto.douyin.Image} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Image, 20));
};


/**
 * @param {?proto.douyin.Image|undefined} value
 * @return {!proto.douyin.PayGrade} returns this
*/
proto.douyin.PayGrade.prototype.setNewliveicon = function(value) {
  return jspb.Message.setWrapperField(this, 20, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.PayGrade} returns this
 */
proto.douyin.PayGrade.prototype.clearNewliveicon = function() {
  return this.setNewliveicon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.PayGrade.prototype.hasNewliveicon = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional int64 upgradeNeedConsume = 21;
 * @return {number}
 */
proto.douyin.PayGrade.prototype.getUpgradeneedconsume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.PayGrade} returns this
 */
proto.douyin.PayGrade.prototype.setUpgradeneedconsume = function(value) {
  return jspb.Message.setProto3IntField(this, 21, value);
};


/**
 * optional string nextPrivileges = 22;
 * @return {string}
 */
proto.douyin.PayGrade.prototype.getNextprivileges = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.PayGrade} returns this
 */
proto.douyin.PayGrade.prototype.setNextprivileges = function(value) {
  return jspb.Message.setProto3StringField(this, 22, value);
};


/**
 * optional Image background = 23;
 * @return {?proto.douyin.Image}
 */
proto.douyin.PayGrade.prototype.getBackground = function() {
  return /** @type{?proto.douyin.Image} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Image, 23));
};


/**
 * @param {?proto.douyin.Image|undefined} value
 * @return {!proto.douyin.PayGrade} returns this
*/
proto.douyin.PayGrade.prototype.setBackground = function(value) {
  return jspb.Message.setWrapperField(this, 23, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.PayGrade} returns this
 */
proto.douyin.PayGrade.prototype.clearBackground = function() {
  return this.setBackground(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.PayGrade.prototype.hasBackground = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional Image backgroundBack = 24;
 * @return {?proto.douyin.Image}
 */
proto.douyin.PayGrade.prototype.getBackgroundback = function() {
  return /** @type{?proto.douyin.Image} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Image, 24));
};


/**
 * @param {?proto.douyin.Image|undefined} value
 * @return {!proto.douyin.PayGrade} returns this
*/
proto.douyin.PayGrade.prototype.setBackgroundback = function(value) {
  return jspb.Message.setWrapperField(this, 24, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.PayGrade} returns this
 */
proto.douyin.PayGrade.prototype.clearBackgroundback = function() {
  return this.setBackgroundback(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.PayGrade.prototype.hasBackgroundback = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional int64 score = 25;
 * @return {number}
 */
proto.douyin.PayGrade.prototype.getScore = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 25, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.PayGrade} returns this
 */
proto.douyin.PayGrade.prototype.setScore = function(value) {
  return jspb.Message.setProto3IntField(this, 25, value);
};


/**
 * optional GradeBuffInfo buffInfo = 26;
 * @return {?proto.douyin.GradeBuffInfo}
 */
proto.douyin.PayGrade.prototype.getBuffinfo = function() {
  return /** @type{?proto.douyin.GradeBuffInfo} */ (
    jspb.Message.getWrapperField(this, proto.douyin.GradeBuffInfo, 26));
};


/**
 * @param {?proto.douyin.GradeBuffInfo|undefined} value
 * @return {!proto.douyin.PayGrade} returns this
*/
proto.douyin.PayGrade.prototype.setBuffinfo = function(value) {
  return jspb.Message.setWrapperField(this, 26, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.PayGrade} returns this
 */
proto.douyin.PayGrade.prototype.clearBuffinfo = function() {
  return this.setBuffinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.PayGrade.prototype.hasBuffinfo = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional string gradeBanner = 1001;
 * @return {string}
 */
proto.douyin.PayGrade.prototype.getGradebanner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1001, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.PayGrade} returns this
 */
proto.douyin.PayGrade.prototype.setGradebanner = function(value) {
  return jspb.Message.setProto3StringField(this, 1001, value);
};


/**
 * optional Image profileDialogBg = 1002;
 * @return {?proto.douyin.Image}
 */
proto.douyin.PayGrade.prototype.getProfiledialogbg = function() {
  return /** @type{?proto.douyin.Image} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Image, 1002));
};


/**
 * @param {?proto.douyin.Image|undefined} value
 * @return {!proto.douyin.PayGrade} returns this
*/
proto.douyin.PayGrade.prototype.setProfiledialogbg = function(value) {
  return jspb.Message.setWrapperField(this, 1002, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.PayGrade} returns this
 */
proto.douyin.PayGrade.prototype.clearProfiledialogbg = function() {
  return this.setProfiledialogbg(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.PayGrade.prototype.hasProfiledialogbg = function() {
  return jspb.Message.getField(this, 1002) != null;
};


/**
 * optional Image profileDialogBgBack = 1003;
 * @return {?proto.douyin.Image}
 */
proto.douyin.PayGrade.prototype.getProfiledialogbgback = function() {
  return /** @type{?proto.douyin.Image} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Image, 1003));
};


/**
 * @param {?proto.douyin.Image|undefined} value
 * @return {!proto.douyin.PayGrade} returns this
*/
proto.douyin.PayGrade.prototype.setProfiledialogbgback = function(value) {
  return jspb.Message.setWrapperField(this, 1003, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.PayGrade} returns this
 */
proto.douyin.PayGrade.prototype.clearProfiledialogbgback = function() {
  return this.setProfiledialogbgback(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.PayGrade.prototype.hasProfiledialogbgback = function() {
  return jspb.Message.getField(this, 1003) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.FansClub.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.FansClub.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.FansClub} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.FansClub.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: (f = msg.getData()) && proto.douyin.FansClubData.toObject(includeInstance, f),
    preferdataMap: (f = msg.getPreferdataMap()) ? f.toObject(includeInstance, proto.douyin.FansClubData.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.FansClub}
 */
proto.douyin.FansClub.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.FansClub;
  return proto.douyin.FansClub.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.FansClub} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.FansClub}
 */
proto.douyin.FansClub.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.douyin.FansClubData;
      reader.readMessage(value,proto.douyin.FansClubData.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 2:
      var value = msg.getPreferdataMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readInt32, jspb.BinaryReader.prototype.readMessage, proto.douyin.FansClubData.deserializeBinaryFromReader, 0, new proto.douyin.FansClubData());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.FansClub.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.FansClub.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.FansClub} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.FansClub.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.douyin.FansClubData.serializeBinaryToWriter
    );
  }
  f = message.getPreferdataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeInt32, jspb.BinaryWriter.prototype.writeMessage, proto.douyin.FansClubData.serializeBinaryToWriter);
  }
};


/**
 * optional FansClubData data = 1;
 * @return {?proto.douyin.FansClubData}
 */
proto.douyin.FansClub.prototype.getData = function() {
  return /** @type{?proto.douyin.FansClubData} */ (
    jspb.Message.getWrapperField(this, proto.douyin.FansClubData, 1));
};


/**
 * @param {?proto.douyin.FansClubData|undefined} value
 * @return {!proto.douyin.FansClub} returns this
*/
proto.douyin.FansClub.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.FansClub} returns this
 */
proto.douyin.FansClub.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.FansClub.prototype.hasData = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * map<int32, FansClubData> preferData = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.douyin.FansClubData>}
 */
proto.douyin.FansClub.prototype.getPreferdataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.douyin.FansClubData>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.douyin.FansClubData));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.douyin.FansClub} returns this
 */
proto.douyin.FansClub.prototype.clearPreferdataMap = function() {
  this.getPreferdataMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.douyin.FansClubData.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.FansClubData.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.FansClubData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.FansClubData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.FansClubData.toObject = function(includeInstance, msg) {
  var f, obj = {
    clubname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    level: jspb.Message.getFieldWithDefault(msg, 2, 0),
    userfansclubstatus: jspb.Message.getFieldWithDefault(msg, 3, 0),
    badge: (f = msg.getBadge()) && proto.douyin.UserBadge.toObject(includeInstance, f),
    availablegiftidsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    anchorid: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.FansClubData}
 */
proto.douyin.FansClubData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.FansClubData;
  return proto.douyin.FansClubData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.FansClubData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.FansClubData}
 */
proto.douyin.FansClubData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClubname(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLevel(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUserfansclubstatus(value);
      break;
    case 4:
      var value = new proto.douyin.UserBadge;
      reader.readMessage(value,proto.douyin.UserBadge.deserializeBinaryFromReader);
      msg.setBadge(value);
      break;
    case 5:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addAvailablegiftids(values[i]);
      }
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAnchorid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.FansClubData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.FansClubData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.FansClubData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.FansClubData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClubname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLevel();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getUserfansclubstatus();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getBadge();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.douyin.UserBadge.serializeBinaryToWriter
    );
  }
  f = message.getAvailablegiftidsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      5,
      f
    );
  }
  f = message.getAnchorid();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * optional string clubName = 1;
 * @return {string}
 */
proto.douyin.FansClubData.prototype.getClubname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.FansClubData} returns this
 */
proto.douyin.FansClubData.prototype.setClubname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 level = 2;
 * @return {number}
 */
proto.douyin.FansClubData.prototype.getLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.FansClubData} returns this
 */
proto.douyin.FansClubData.prototype.setLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 userFansClubStatus = 3;
 * @return {number}
 */
proto.douyin.FansClubData.prototype.getUserfansclubstatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.FansClubData} returns this
 */
proto.douyin.FansClubData.prototype.setUserfansclubstatus = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional UserBadge badge = 4;
 * @return {?proto.douyin.UserBadge}
 */
proto.douyin.FansClubData.prototype.getBadge = function() {
  return /** @type{?proto.douyin.UserBadge} */ (
    jspb.Message.getWrapperField(this, proto.douyin.UserBadge, 4));
};


/**
 * @param {?proto.douyin.UserBadge|undefined} value
 * @return {!proto.douyin.FansClubData} returns this
*/
proto.douyin.FansClubData.prototype.setBadge = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.FansClubData} returns this
 */
proto.douyin.FansClubData.prototype.clearBadge = function() {
  return this.setBadge(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.FansClubData.prototype.hasBadge = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated int64 availableGiftIds = 5;
 * @return {!Array<number>}
 */
proto.douyin.FansClubData.prototype.getAvailablegiftidsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.douyin.FansClubData} returns this
 */
proto.douyin.FansClubData.prototype.setAvailablegiftidsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.douyin.FansClubData} returns this
 */
proto.douyin.FansClubData.prototype.addAvailablegiftids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.douyin.FansClubData} returns this
 */
proto.douyin.FansClubData.prototype.clearAvailablegiftidsList = function() {
  return this.setAvailablegiftidsList([]);
};


/**
 * optional int64 anchorId = 6;
 * @return {number}
 */
proto.douyin.FansClubData.prototype.getAnchorid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.FansClubData} returns this
 */
proto.douyin.FansClubData.prototype.setAnchorid = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.UserBadge.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.UserBadge.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.UserBadge} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.UserBadge.toObject = function(includeInstance, msg) {
  var f, obj = {
    iconsMap: (f = msg.getIconsMap()) ? f.toObject(includeInstance, proto.douyin.Image.toObject) : [],
    title: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.UserBadge}
 */
proto.douyin.UserBadge.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.UserBadge;
  return proto.douyin.UserBadge.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.UserBadge} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.UserBadge}
 */
proto.douyin.UserBadge.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getIconsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readInt32, jspb.BinaryReader.prototype.readMessage, proto.douyin.Image.deserializeBinaryFromReader, 0, new proto.douyin.Image());
         });
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.UserBadge.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.UserBadge.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.UserBadge} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.UserBadge.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIconsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeInt32, jspb.BinaryWriter.prototype.writeMessage, proto.douyin.Image.serializeBinaryToWriter);
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * map<int32, Image> icons = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<number,!proto.douyin.Image>}
 */
proto.douyin.UserBadge.prototype.getIconsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<number,!proto.douyin.Image>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.douyin.Image));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.douyin.UserBadge} returns this
 */
proto.douyin.UserBadge.prototype.clearIconsMap = function() {
  this.getIconsMap().clear();
  return this;};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.douyin.UserBadge.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.UserBadge} returns this
 */
proto.douyin.UserBadge.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.GradeBuffInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.GradeBuffInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.GradeBuffInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.GradeBuffInfo.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.GradeBuffInfo}
 */
proto.douyin.GradeBuffInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.GradeBuffInfo;
  return proto.douyin.GradeBuffInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.GradeBuffInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.GradeBuffInfo}
 */
proto.douyin.GradeBuffInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.GradeBuffInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.GradeBuffInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.GradeBuffInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.GradeBuffInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.Border.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.Border.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.Border} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.Border.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.Border}
 */
proto.douyin.Border.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.Border;
  return proto.douyin.Border.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.Border} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.Border}
 */
proto.douyin.Border.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.Border.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.Border.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.Border} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.Border.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.GradeIcon.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.GradeIcon.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.GradeIcon} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.GradeIcon.toObject = function(includeInstance, msg) {
  var f, obj = {
    icon: (f = msg.getIcon()) && proto.douyin.Image.toObject(includeInstance, f),
    icondiamond: jspb.Message.getFieldWithDefault(msg, 2, 0),
    level: jspb.Message.getFieldWithDefault(msg, 3, 0),
    levelstr: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.GradeIcon}
 */
proto.douyin.GradeIcon.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.GradeIcon;
  return proto.douyin.GradeIcon.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.GradeIcon} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.GradeIcon}
 */
proto.douyin.GradeIcon.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.douyin.Image;
      reader.readMessage(value,proto.douyin.Image.deserializeBinaryFromReader);
      msg.setIcon(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setIcondiamond(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLevel(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLevelstr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.GradeIcon.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.GradeIcon.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.GradeIcon} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.GradeIcon.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIcon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.douyin.Image.serializeBinaryToWriter
    );
  }
  f = message.getIcondiamond();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getLevel();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getLevelstr();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional Image icon = 1;
 * @return {?proto.douyin.Image}
 */
proto.douyin.GradeIcon.prototype.getIcon = function() {
  return /** @type{?proto.douyin.Image} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Image, 1));
};


/**
 * @param {?proto.douyin.Image|undefined} value
 * @return {!proto.douyin.GradeIcon} returns this
*/
proto.douyin.GradeIcon.prototype.setIcon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.GradeIcon} returns this
 */
proto.douyin.GradeIcon.prototype.clearIcon = function() {
  return this.setIcon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.GradeIcon.prototype.hasIcon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 iconDiamond = 2;
 * @return {number}
 */
proto.douyin.GradeIcon.prototype.getIcondiamond = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.GradeIcon} returns this
 */
proto.douyin.GradeIcon.prototype.setIcondiamond = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 level = 3;
 * @return {number}
 */
proto.douyin.GradeIcon.prototype.getLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.GradeIcon} returns this
 */
proto.douyin.GradeIcon.prototype.setLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string levelStr = 4;
 * @return {string}
 */
proto.douyin.GradeIcon.prototype.getLevelstr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.GradeIcon} returns this
 */
proto.douyin.GradeIcon.prototype.setLevelstr = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.FollowInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.FollowInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.FollowInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.FollowInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    followingcount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    followercount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    followstatus: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pushstatus: jspb.Message.getFieldWithDefault(msg, 4, 0),
    remarkname: jspb.Message.getFieldWithDefault(msg, 5, ""),
    followercountstr: jspb.Message.getFieldWithDefault(msg, 6, ""),
    followingcountstr: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.FollowInfo}
 */
proto.douyin.FollowInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.FollowInfo;
  return proto.douyin.FollowInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.FollowInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.FollowInfo}
 */
proto.douyin.FollowInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFollowingcount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFollowercount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setFollowstatus(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPushstatus(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setRemarkname(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setFollowercountstr(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setFollowingcountstr(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.FollowInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.FollowInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.FollowInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.FollowInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFollowingcount();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getFollowercount();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getFollowstatus();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getPushstatus();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getRemarkname();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getFollowercountstr();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getFollowingcountstr();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional uint64 followingCount = 1;
 * @return {number}
 */
proto.douyin.FollowInfo.prototype.getFollowingcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.FollowInfo} returns this
 */
proto.douyin.FollowInfo.prototype.setFollowingcount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 followerCount = 2;
 * @return {number}
 */
proto.douyin.FollowInfo.prototype.getFollowercount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.FollowInfo} returns this
 */
proto.douyin.FollowInfo.prototype.setFollowercount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 followStatus = 3;
 * @return {number}
 */
proto.douyin.FollowInfo.prototype.getFollowstatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.FollowInfo} returns this
 */
proto.douyin.FollowInfo.prototype.setFollowstatus = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 pushStatus = 4;
 * @return {number}
 */
proto.douyin.FollowInfo.prototype.getPushstatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.FollowInfo} returns this
 */
proto.douyin.FollowInfo.prototype.setPushstatus = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string remarkName = 5;
 * @return {string}
 */
proto.douyin.FollowInfo.prototype.getRemarkname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.FollowInfo} returns this
 */
proto.douyin.FollowInfo.prototype.setRemarkname = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string followerCountStr = 6;
 * @return {string}
 */
proto.douyin.FollowInfo.prototype.getFollowercountstr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.FollowInfo} returns this
 */
proto.douyin.FollowInfo.prototype.setFollowercountstr = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string followingCountStr = 7;
 * @return {string}
 */
proto.douyin.FollowInfo.prototype.getFollowingcountstr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.FollowInfo} returns this
 */
proto.douyin.FollowInfo.prototype.setFollowingcountstr = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.douyin.Image.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.Image.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.Image.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.Image} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.Image.toObject = function(includeInstance, msg) {
  var f, obj = {
    urllistlistList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    uri: jspb.Message.getFieldWithDefault(msg, 2, ""),
    height: jspb.Message.getFieldWithDefault(msg, 3, 0),
    width: jspb.Message.getFieldWithDefault(msg, 4, 0),
    avgcolor: jspb.Message.getFieldWithDefault(msg, 5, ""),
    imagetype: jspb.Message.getFieldWithDefault(msg, 6, 0),
    openweburl: jspb.Message.getFieldWithDefault(msg, 7, ""),
    content: (f = msg.getContent()) && proto.douyin.ImageContent.toObject(includeInstance, f),
    isanimated: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    flexsettinglist: (f = msg.getFlexsettinglist()) && proto.douyin.NinePatchSetting.toObject(includeInstance, f),
    textsettinglist: (f = msg.getTextsettinglist()) && proto.douyin.NinePatchSetting.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.Image}
 */
proto.douyin.Image.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.Image;
  return proto.douyin.Image.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.Image} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.Image}
 */
proto.douyin.Image.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addUrllistlist(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUri(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setHeight(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setWidth(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvgcolor(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setImagetype(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setOpenweburl(value);
      break;
    case 8:
      var value = new proto.douyin.ImageContent;
      reader.readMessage(value,proto.douyin.ImageContent.deserializeBinaryFromReader);
      msg.setContent(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsanimated(value);
      break;
    case 10:
      var value = new proto.douyin.NinePatchSetting;
      reader.readMessage(value,proto.douyin.NinePatchSetting.deserializeBinaryFromReader);
      msg.setFlexsettinglist(value);
      break;
    case 11:
      var value = new proto.douyin.NinePatchSetting;
      reader.readMessage(value,proto.douyin.NinePatchSetting.deserializeBinaryFromReader);
      msg.setTextsettinglist(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.Image.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.Image.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.Image} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.Image.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrllistlistList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getUri();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getWidth();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getAvgcolor();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getImagetype();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getOpenweburl();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getContent();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.douyin.ImageContent.serializeBinaryToWriter
    );
  }
  f = message.getIsanimated();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getFlexsettinglist();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.douyin.NinePatchSetting.serializeBinaryToWriter
    );
  }
  f = message.getTextsettinglist();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.douyin.NinePatchSetting.serializeBinaryToWriter
    );
  }
};


/**
 * repeated string urlListList = 1;
 * @return {!Array<string>}
 */
proto.douyin.Image.prototype.getUrllistlistList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.douyin.Image} returns this
 */
proto.douyin.Image.prototype.setUrllistlistList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.douyin.Image} returns this
 */
proto.douyin.Image.prototype.addUrllistlist = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.douyin.Image} returns this
 */
proto.douyin.Image.prototype.clearUrllistlistList = function() {
  return this.setUrllistlistList([]);
};


/**
 * optional string uri = 2;
 * @return {string}
 */
proto.douyin.Image.prototype.getUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.Image} returns this
 */
proto.douyin.Image.prototype.setUri = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 height = 3;
 * @return {number}
 */
proto.douyin.Image.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.Image} returns this
 */
proto.douyin.Image.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 width = 4;
 * @return {number}
 */
proto.douyin.Image.prototype.getWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.Image} returns this
 */
proto.douyin.Image.prototype.setWidth = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string avgColor = 5;
 * @return {string}
 */
proto.douyin.Image.prototype.getAvgcolor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.Image} returns this
 */
proto.douyin.Image.prototype.setAvgcolor = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional uint32 imageType = 6;
 * @return {number}
 */
proto.douyin.Image.prototype.getImagetype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.Image} returns this
 */
proto.douyin.Image.prototype.setImagetype = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string openWebUrl = 7;
 * @return {string}
 */
proto.douyin.Image.prototype.getOpenweburl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.Image} returns this
 */
proto.douyin.Image.prototype.setOpenweburl = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional ImageContent content = 8;
 * @return {?proto.douyin.ImageContent}
 */
proto.douyin.Image.prototype.getContent = function() {
  return /** @type{?proto.douyin.ImageContent} */ (
    jspb.Message.getWrapperField(this, proto.douyin.ImageContent, 8));
};


/**
 * @param {?proto.douyin.ImageContent|undefined} value
 * @return {!proto.douyin.Image} returns this
*/
proto.douyin.Image.prototype.setContent = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.Image} returns this
 */
proto.douyin.Image.prototype.clearContent = function() {
  return this.setContent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.Image.prototype.hasContent = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bool isAnimated = 9;
 * @return {boolean}
 */
proto.douyin.Image.prototype.getIsanimated = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.douyin.Image} returns this
 */
proto.douyin.Image.prototype.setIsanimated = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional NinePatchSetting FlexSettingList = 10;
 * @return {?proto.douyin.NinePatchSetting}
 */
proto.douyin.Image.prototype.getFlexsettinglist = function() {
  return /** @type{?proto.douyin.NinePatchSetting} */ (
    jspb.Message.getWrapperField(this, proto.douyin.NinePatchSetting, 10));
};


/**
 * @param {?proto.douyin.NinePatchSetting|undefined} value
 * @return {!proto.douyin.Image} returns this
*/
proto.douyin.Image.prototype.setFlexsettinglist = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.Image} returns this
 */
proto.douyin.Image.prototype.clearFlexsettinglist = function() {
  return this.setFlexsettinglist(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.Image.prototype.hasFlexsettinglist = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional NinePatchSetting TextSettingList = 11;
 * @return {?proto.douyin.NinePatchSetting}
 */
proto.douyin.Image.prototype.getTextsettinglist = function() {
  return /** @type{?proto.douyin.NinePatchSetting} */ (
    jspb.Message.getWrapperField(this, proto.douyin.NinePatchSetting, 11));
};


/**
 * @param {?proto.douyin.NinePatchSetting|undefined} value
 * @return {!proto.douyin.Image} returns this
*/
proto.douyin.Image.prototype.setTextsettinglist = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.Image} returns this
 */
proto.douyin.Image.prototype.clearTextsettinglist = function() {
  return this.setTextsettinglist(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.Image.prototype.hasTextsettinglist = function() {
  return jspb.Message.getField(this, 11) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.douyin.NinePatchSetting.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.NinePatchSetting.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.NinePatchSetting.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.NinePatchSetting} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.NinePatchSetting.toObject = function(includeInstance, msg) {
  var f, obj = {
    settinglistlistList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.NinePatchSetting}
 */
proto.douyin.NinePatchSetting.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.NinePatchSetting;
  return proto.douyin.NinePatchSetting.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.NinePatchSetting} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.NinePatchSetting}
 */
proto.douyin.NinePatchSetting.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addSettinglistlist(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.NinePatchSetting.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.NinePatchSetting.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.NinePatchSetting} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.NinePatchSetting.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSettinglistlistList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string settingListList = 1;
 * @return {!Array<string>}
 */
proto.douyin.NinePatchSetting.prototype.getSettinglistlistList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.douyin.NinePatchSetting} returns this
 */
proto.douyin.NinePatchSetting.prototype.setSettinglistlistList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.douyin.NinePatchSetting} returns this
 */
proto.douyin.NinePatchSetting.prototype.addSettinglistlist = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.douyin.NinePatchSetting} returns this
 */
proto.douyin.NinePatchSetting.prototype.clearSettinglistlistList = function() {
  return this.setSettinglistlistList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.ImageContent.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.ImageContent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.ImageContent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.ImageContent.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    fontcolor: jspb.Message.getFieldWithDefault(msg, 2, ""),
    level: jspb.Message.getFieldWithDefault(msg, 3, 0),
    alternativetext: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.ImageContent}
 */
proto.douyin.ImageContent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.ImageContent;
  return proto.douyin.ImageContent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.ImageContent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.ImageContent}
 */
proto.douyin.ImageContent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFontcolor(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLevel(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAlternativetext(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.ImageContent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.ImageContent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.ImageContent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.ImageContent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFontcolor();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLevel();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getAlternativetext();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.douyin.ImageContent.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.ImageContent} returns this
 */
proto.douyin.ImageContent.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string fontColor = 2;
 * @return {string}
 */
proto.douyin.ImageContent.prototype.getFontcolor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.ImageContent} returns this
 */
proto.douyin.ImageContent.prototype.setFontcolor = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 level = 3;
 * @return {number}
 */
proto.douyin.ImageContent.prototype.getLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.ImageContent} returns this
 */
proto.douyin.ImageContent.prototype.setLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string alternativeText = 4;
 * @return {string}
 */
proto.douyin.ImageContent.prototype.getAlternativetext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.ImageContent} returns this
 */
proto.douyin.ImageContent.prototype.setAlternativetext = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.douyin.PushFrame.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.PushFrame.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.PushFrame.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.PushFrame} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.PushFrame.toObject = function(includeInstance, msg) {
  var f, obj = {
    seqid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    logid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    service: jspb.Message.getFieldWithDefault(msg, 3, 0),
    method: jspb.Message.getFieldWithDefault(msg, 4, 0),
    headerslistList: jspb.Message.toObjectList(msg.getHeaderslistList(),
    proto.douyin.HeadersList.toObject, includeInstance),
    payloadencoding: jspb.Message.getFieldWithDefault(msg, 6, ""),
    payloadtype: jspb.Message.getFieldWithDefault(msg, 7, ""),
    payload: msg.getPayload_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.PushFrame}
 */
proto.douyin.PushFrame.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.PushFrame;
  return proto.douyin.PushFrame.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.PushFrame} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.PushFrame}
 */
proto.douyin.PushFrame.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSeqid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLogid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setService(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMethod(value);
      break;
    case 5:
      var value = new proto.douyin.HeadersList;
      reader.readMessage(value,proto.douyin.HeadersList.deserializeBinaryFromReader);
      msg.addHeaderslist(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayloadencoding(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayloadtype(value);
      break;
    case 8:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPayload(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.PushFrame.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.PushFrame.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.PushFrame} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.PushFrame.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSeqid();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getLogid();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getService();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getMethod();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getHeaderslistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.douyin.HeadersList.serializeBinaryToWriter
    );
  }
  f = message.getPayloadencoding();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPayloadtype();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getPayload_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      8,
      f
    );
  }
};


/**
 * optional uint64 seqId = 1;
 * @return {number}
 */
proto.douyin.PushFrame.prototype.getSeqid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.PushFrame} returns this
 */
proto.douyin.PushFrame.prototype.setSeqid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 logId = 2;
 * @return {number}
 */
proto.douyin.PushFrame.prototype.getLogid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.PushFrame} returns this
 */
proto.douyin.PushFrame.prototype.setLogid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 service = 3;
 * @return {number}
 */
proto.douyin.PushFrame.prototype.getService = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.PushFrame} returns this
 */
proto.douyin.PushFrame.prototype.setService = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 method = 4;
 * @return {number}
 */
proto.douyin.PushFrame.prototype.getMethod = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.PushFrame} returns this
 */
proto.douyin.PushFrame.prototype.setMethod = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated HeadersList headersList = 5;
 * @return {!Array<!proto.douyin.HeadersList>}
 */
proto.douyin.PushFrame.prototype.getHeaderslistList = function() {
  return /** @type{!Array<!proto.douyin.HeadersList>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.douyin.HeadersList, 5));
};


/**
 * @param {!Array<!proto.douyin.HeadersList>} value
 * @return {!proto.douyin.PushFrame} returns this
*/
proto.douyin.PushFrame.prototype.setHeaderslistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.douyin.HeadersList=} opt_value
 * @param {number=} opt_index
 * @return {!proto.douyin.HeadersList}
 */
proto.douyin.PushFrame.prototype.addHeaderslist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.douyin.HeadersList, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.douyin.PushFrame} returns this
 */
proto.douyin.PushFrame.prototype.clearHeaderslistList = function() {
  return this.setHeaderslistList([]);
};


/**
 * optional string payloadEncoding = 6;
 * @return {string}
 */
proto.douyin.PushFrame.prototype.getPayloadencoding = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.PushFrame} returns this
 */
proto.douyin.PushFrame.prototype.setPayloadencoding = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string payloadType = 7;
 * @return {string}
 */
proto.douyin.PushFrame.prototype.getPayloadtype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.PushFrame} returns this
 */
proto.douyin.PushFrame.prototype.setPayloadtype = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional bytes payload = 8;
 * @return {!(string|Uint8Array)}
 */
proto.douyin.PushFrame.prototype.getPayload = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * optional bytes payload = 8;
 * This is a type-conversion wrapper around `getPayload()`
 * @return {string}
 */
proto.douyin.PushFrame.prototype.getPayload_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPayload()));
};


/**
 * optional bytes payload = 8;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPayload()`
 * @return {!Uint8Array}
 */
proto.douyin.PushFrame.prototype.getPayload_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPayload()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.douyin.PushFrame} returns this
 */
proto.douyin.PushFrame.prototype.setPayload = function(value) {
  return jspb.Message.setProto3BytesField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.kk.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.kk.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.kk} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.kk.toObject = function(includeInstance, msg) {
  var f, obj = {
    k: jspb.Message.getFieldWithDefault(msg, 14, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.kk}
 */
proto.douyin.kk.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.kk;
  return proto.douyin.kk.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.kk} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.kk}
 */
proto.douyin.kk.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 14:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setK(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.kk.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.kk.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.kk} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.kk.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getK();
  if (f !== 0) {
    writer.writeUint32(
      14,
      f
    );
  }
};


/**
 * optional uint32 k = 14;
 * @return {number}
 */
proto.douyin.kk.prototype.getK = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.kk} returns this
 */
proto.douyin.kk.prototype.setK = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.douyin.SendMessageBody.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.SendMessageBody.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.SendMessageBody.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.SendMessageBody} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.SendMessageBody.toObject = function(includeInstance, msg) {
  var f, obj = {
    conversationid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    conversationtype: jspb.Message.getFieldWithDefault(msg, 2, 0),
    conversationshortid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    content: jspb.Message.getFieldWithDefault(msg, 4, ""),
    extList: jspb.Message.toObjectList(msg.getExtList(),
    proto.douyin.ExtList.toObject, includeInstance),
    messagetype: jspb.Message.getFieldWithDefault(msg, 6, 0),
    ticket: jspb.Message.getFieldWithDefault(msg, 7, ""),
    clientmessageid: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.SendMessageBody}
 */
proto.douyin.SendMessageBody.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.SendMessageBody;
  return proto.douyin.SendMessageBody.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.SendMessageBody} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.SendMessageBody}
 */
proto.douyin.SendMessageBody.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConversationid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setConversationtype(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setConversationshortid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 5:
      var value = new proto.douyin.ExtList;
      reader.readMessage(value,proto.douyin.ExtList.deserializeBinaryFromReader);
      msg.addExt(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMessagetype(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTicket(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientmessageid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.SendMessageBody.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.SendMessageBody.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.SendMessageBody} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.SendMessageBody.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConversationtype();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getConversationshortid();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getExtList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.douyin.ExtList.serializeBinaryToWriter
    );
  }
  f = message.getMessagetype();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getTicket();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getClientmessageid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string conversationId = 1;
 * @return {string}
 */
proto.douyin.SendMessageBody.prototype.getConversationid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.SendMessageBody} returns this
 */
proto.douyin.SendMessageBody.prototype.setConversationid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 conversationType = 2;
 * @return {number}
 */
proto.douyin.SendMessageBody.prototype.getConversationtype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.SendMessageBody} returns this
 */
proto.douyin.SendMessageBody.prototype.setConversationtype = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 conversationShortId = 3;
 * @return {number}
 */
proto.douyin.SendMessageBody.prototype.getConversationshortid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.SendMessageBody} returns this
 */
proto.douyin.SendMessageBody.prototype.setConversationshortid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string content = 4;
 * @return {string}
 */
proto.douyin.SendMessageBody.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.SendMessageBody} returns this
 */
proto.douyin.SendMessageBody.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated ExtList ext = 5;
 * @return {!Array<!proto.douyin.ExtList>}
 */
proto.douyin.SendMessageBody.prototype.getExtList = function() {
  return /** @type{!Array<!proto.douyin.ExtList>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.douyin.ExtList, 5));
};


/**
 * @param {!Array<!proto.douyin.ExtList>} value
 * @return {!proto.douyin.SendMessageBody} returns this
*/
proto.douyin.SendMessageBody.prototype.setExtList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.douyin.ExtList=} opt_value
 * @param {number=} opt_index
 * @return {!proto.douyin.ExtList}
 */
proto.douyin.SendMessageBody.prototype.addExt = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.douyin.ExtList, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.douyin.SendMessageBody} returns this
 */
proto.douyin.SendMessageBody.prototype.clearExtList = function() {
  return this.setExtList([]);
};


/**
 * optional uint32 messageType = 6;
 * @return {number}
 */
proto.douyin.SendMessageBody.prototype.getMessagetype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.SendMessageBody} returns this
 */
proto.douyin.SendMessageBody.prototype.setMessagetype = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string ticket = 7;
 * @return {string}
 */
proto.douyin.SendMessageBody.prototype.getTicket = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.SendMessageBody} returns this
 */
proto.douyin.SendMessageBody.prototype.setTicket = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string clientMessageId = 8;
 * @return {string}
 */
proto.douyin.SendMessageBody.prototype.getClientmessageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.SendMessageBody} returns this
 */
proto.douyin.SendMessageBody.prototype.setClientmessageid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.ExtList.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.ExtList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.ExtList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.ExtList.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.ExtList}
 */
proto.douyin.ExtList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.ExtList;
  return proto.douyin.ExtList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.ExtList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.ExtList}
 */
proto.douyin.ExtList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.ExtList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.ExtList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.ExtList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.ExtList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.douyin.ExtList.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.ExtList} returns this
 */
proto.douyin.ExtList.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.douyin.ExtList.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.ExtList} returns this
 */
proto.douyin.ExtList.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.Rsp.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.Rsp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.Rsp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.Rsp.toObject = function(includeInstance, msg) {
  var f, obj = {
    a: jspb.Message.getFieldWithDefault(msg, 1, 0),
    b: jspb.Message.getFieldWithDefault(msg, 2, 0),
    c: jspb.Message.getFieldWithDefault(msg, 3, 0),
    d: jspb.Message.getFieldWithDefault(msg, 4, ""),
    e: jspb.Message.getFieldWithDefault(msg, 5, 0),
    f: (f = msg.getF()) && proto.douyin.Rsp.F.toObject(includeInstance, f),
    g: jspb.Message.getFieldWithDefault(msg, 7, ""),
    h: jspb.Message.getFieldWithDefault(msg, 10, 0),
    i: jspb.Message.getFieldWithDefault(msg, 11, 0),
    j: jspb.Message.getFieldWithDefault(msg, 13, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.Rsp}
 */
proto.douyin.Rsp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.Rsp;
  return proto.douyin.Rsp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.Rsp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.Rsp}
 */
proto.douyin.Rsp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setA(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setB(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setC(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setD(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setE(value);
      break;
    case 6:
      var value = new proto.douyin.Rsp.F;
      reader.readMessage(value,proto.douyin.Rsp.F.deserializeBinaryFromReader);
      msg.setF(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setG(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setH(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setI(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setJ(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.Rsp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.Rsp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.Rsp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.Rsp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getA();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getB();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getC();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getD();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getE();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getF();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.douyin.Rsp.F.serializeBinaryToWriter
    );
  }
  f = message.getG();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getH();
  if (f !== 0) {
    writer.writeUint64(
      10,
      f
    );
  }
  f = message.getI();
  if (f !== 0) {
    writer.writeUint64(
      11,
      f
    );
  }
  f = message.getJ();
  if (f !== 0) {
    writer.writeUint64(
      13,
      f
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.Rsp.F.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.Rsp.F.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.Rsp.F} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.Rsp.F.toObject = function(includeInstance, msg) {
  var f, obj = {
    q1: jspb.Message.getFieldWithDefault(msg, 1, 0),
    q3: jspb.Message.getFieldWithDefault(msg, 3, 0),
    q4: jspb.Message.getFieldWithDefault(msg, 4, ""),
    q5: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.Rsp.F}
 */
proto.douyin.Rsp.F.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.Rsp.F;
  return proto.douyin.Rsp.F.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.Rsp.F} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.Rsp.F}
 */
proto.douyin.Rsp.F.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setQ1(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setQ3(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setQ4(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setQ5(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.Rsp.F.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.Rsp.F.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.Rsp.F} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.Rsp.F.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQ1();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getQ3();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getQ4();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getQ5();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
};


/**
 * optional uint64 q1 = 1;
 * @return {number}
 */
proto.douyin.Rsp.F.prototype.getQ1 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.Rsp.F} returns this
 */
proto.douyin.Rsp.F.prototype.setQ1 = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 q3 = 3;
 * @return {number}
 */
proto.douyin.Rsp.F.prototype.getQ3 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.Rsp.F} returns this
 */
proto.douyin.Rsp.F.prototype.setQ3 = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string q4 = 4;
 * @return {string}
 */
proto.douyin.Rsp.F.prototype.getQ4 = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.Rsp.F} returns this
 */
proto.douyin.Rsp.F.prototype.setQ4 = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint64 q5 = 5;
 * @return {number}
 */
proto.douyin.Rsp.F.prototype.getQ5 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.Rsp.F} returns this
 */
proto.douyin.Rsp.F.prototype.setQ5 = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 a = 1;
 * @return {number}
 */
proto.douyin.Rsp.prototype.getA = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.Rsp} returns this
 */
proto.douyin.Rsp.prototype.setA = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 b = 2;
 * @return {number}
 */
proto.douyin.Rsp.prototype.getB = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.Rsp} returns this
 */
proto.douyin.Rsp.prototype.setB = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 c = 3;
 * @return {number}
 */
proto.douyin.Rsp.prototype.getC = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.Rsp} returns this
 */
proto.douyin.Rsp.prototype.setC = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string d = 4;
 * @return {string}
 */
proto.douyin.Rsp.prototype.getD = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.Rsp} returns this
 */
proto.douyin.Rsp.prototype.setD = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 e = 5;
 * @return {number}
 */
proto.douyin.Rsp.prototype.getE = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.Rsp} returns this
 */
proto.douyin.Rsp.prototype.setE = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional F f = 6;
 * @return {?proto.douyin.Rsp.F}
 */
proto.douyin.Rsp.prototype.getF = function() {
  return /** @type{?proto.douyin.Rsp.F} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Rsp.F, 6));
};


/**
 * @param {?proto.douyin.Rsp.F|undefined} value
 * @return {!proto.douyin.Rsp} returns this
*/
proto.douyin.Rsp.prototype.setF = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.Rsp} returns this
 */
proto.douyin.Rsp.prototype.clearF = function() {
  return this.setF(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.Rsp.prototype.hasF = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string g = 7;
 * @return {string}
 */
proto.douyin.Rsp.prototype.getG = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.Rsp} returns this
 */
proto.douyin.Rsp.prototype.setG = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional uint64 h = 10;
 * @return {number}
 */
proto.douyin.Rsp.prototype.getH = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.Rsp} returns this
 */
proto.douyin.Rsp.prototype.setH = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional uint64 i = 11;
 * @return {number}
 */
proto.douyin.Rsp.prototype.getI = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.Rsp} returns this
 */
proto.douyin.Rsp.prototype.setI = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional uint64 j = 13;
 * @return {number}
 */
proto.douyin.Rsp.prototype.getJ = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.Rsp} returns this
 */
proto.douyin.Rsp.prototype.setJ = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.douyin.PreMessage.repeatedFields_ = [15];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.PreMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.PreMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.PreMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.PreMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    cmd: jspb.Message.getFieldWithDefault(msg, 1, 0),
    sequenceid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    sdkversion: jspb.Message.getFieldWithDefault(msg, 3, ""),
    token: jspb.Message.getFieldWithDefault(msg, 4, ""),
    refer: jspb.Message.getFieldWithDefault(msg, 5, 0),
    inboxtype: jspb.Message.getFieldWithDefault(msg, 6, 0),
    buildnumber: jspb.Message.getFieldWithDefault(msg, 7, ""),
    sendmessagebody: (f = msg.getSendmessagebody()) && proto.douyin.SendMessageBody.toObject(includeInstance, f),
    aa: jspb.Message.getFieldWithDefault(msg, 9, ""),
    deviceplatform: jspb.Message.getFieldWithDefault(msg, 11, ""),
    headersList: jspb.Message.toObjectList(msg.getHeadersList(),
    proto.douyin.HeadersList.toObject, includeInstance),
    authtype: jspb.Message.getFieldWithDefault(msg, 18, 0),
    biz: jspb.Message.getFieldWithDefault(msg, 21, ""),
    access: jspb.Message.getFieldWithDefault(msg, 22, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.PreMessage}
 */
proto.douyin.PreMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.PreMessage;
  return proto.douyin.PreMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.PreMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.PreMessage}
 */
proto.douyin.PreMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCmd(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSequenceid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSdkversion(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRefer(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setInboxtype(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setBuildnumber(value);
      break;
    case 8:
      var value = new proto.douyin.SendMessageBody;
      reader.readMessage(value,proto.douyin.SendMessageBody.deserializeBinaryFromReader);
      msg.setSendmessagebody(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setAa(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceplatform(value);
      break;
    case 15:
      var value = new proto.douyin.HeadersList;
      reader.readMessage(value,proto.douyin.HeadersList.deserializeBinaryFromReader);
      msg.addHeaders(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAuthtype(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readString());
      msg.setBiz(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccess(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.PreMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.PreMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.PreMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.PreMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCmd();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getSequenceid();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getSdkversion();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRefer();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getInboxtype();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getBuildnumber();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getSendmessagebody();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.douyin.SendMessageBody.serializeBinaryToWriter
    );
  }
  f = message.getAa();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getDeviceplatform();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getHeadersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      15,
      f,
      proto.douyin.HeadersList.serializeBinaryToWriter
    );
  }
  f = message.getAuthtype();
  if (f !== 0) {
    writer.writeUint32(
      18,
      f
    );
  }
  f = message.getBiz();
  if (f.length > 0) {
    writer.writeString(
      21,
      f
    );
  }
  f = message.getAccess();
  if (f.length > 0) {
    writer.writeString(
      22,
      f
    );
  }
};


/**
 * optional uint32 cmd = 1;
 * @return {number}
 */
proto.douyin.PreMessage.prototype.getCmd = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.PreMessage} returns this
 */
proto.douyin.PreMessage.prototype.setCmd = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 sequenceId = 2;
 * @return {number}
 */
proto.douyin.PreMessage.prototype.getSequenceid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.PreMessage} returns this
 */
proto.douyin.PreMessage.prototype.setSequenceid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string sdkVersion = 3;
 * @return {string}
 */
proto.douyin.PreMessage.prototype.getSdkversion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.PreMessage} returns this
 */
proto.douyin.PreMessage.prototype.setSdkversion = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string token = 4;
 * @return {string}
 */
proto.douyin.PreMessage.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.PreMessage} returns this
 */
proto.douyin.PreMessage.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint32 refer = 5;
 * @return {number}
 */
proto.douyin.PreMessage.prototype.getRefer = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.PreMessage} returns this
 */
proto.douyin.PreMessage.prototype.setRefer = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 inboxType = 6;
 * @return {number}
 */
proto.douyin.PreMessage.prototype.getInboxtype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.PreMessage} returns this
 */
proto.douyin.PreMessage.prototype.setInboxtype = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string buildNumber = 7;
 * @return {string}
 */
proto.douyin.PreMessage.prototype.getBuildnumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.PreMessage} returns this
 */
proto.douyin.PreMessage.prototype.setBuildnumber = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional SendMessageBody sendMessageBody = 8;
 * @return {?proto.douyin.SendMessageBody}
 */
proto.douyin.PreMessage.prototype.getSendmessagebody = function() {
  return /** @type{?proto.douyin.SendMessageBody} */ (
    jspb.Message.getWrapperField(this, proto.douyin.SendMessageBody, 8));
};


/**
 * @param {?proto.douyin.SendMessageBody|undefined} value
 * @return {!proto.douyin.PreMessage} returns this
*/
proto.douyin.PreMessage.prototype.setSendmessagebody = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.PreMessage} returns this
 */
proto.douyin.PreMessage.prototype.clearSendmessagebody = function() {
  return this.setSendmessagebody(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.PreMessage.prototype.hasSendmessagebody = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string aa = 9;
 * @return {string}
 */
proto.douyin.PreMessage.prototype.getAa = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.PreMessage} returns this
 */
proto.douyin.PreMessage.prototype.setAa = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string devicePlatform = 11;
 * @return {string}
 */
proto.douyin.PreMessage.prototype.getDeviceplatform = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.PreMessage} returns this
 */
proto.douyin.PreMessage.prototype.setDeviceplatform = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * repeated HeadersList headers = 15;
 * @return {!Array<!proto.douyin.HeadersList>}
 */
proto.douyin.PreMessage.prototype.getHeadersList = function() {
  return /** @type{!Array<!proto.douyin.HeadersList>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.douyin.HeadersList, 15));
};


/**
 * @param {!Array<!proto.douyin.HeadersList>} value
 * @return {!proto.douyin.PreMessage} returns this
*/
proto.douyin.PreMessage.prototype.setHeadersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 15, value);
};


/**
 * @param {!proto.douyin.HeadersList=} opt_value
 * @param {number=} opt_index
 * @return {!proto.douyin.HeadersList}
 */
proto.douyin.PreMessage.prototype.addHeaders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 15, opt_value, proto.douyin.HeadersList, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.douyin.PreMessage} returns this
 */
proto.douyin.PreMessage.prototype.clearHeadersList = function() {
  return this.setHeadersList([]);
};


/**
 * optional uint32 authType = 18;
 * @return {number}
 */
proto.douyin.PreMessage.prototype.getAuthtype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.PreMessage} returns this
 */
proto.douyin.PreMessage.prototype.setAuthtype = function(value) {
  return jspb.Message.setProto3IntField(this, 18, value);
};


/**
 * optional string biz = 21;
 * @return {string}
 */
proto.douyin.PreMessage.prototype.getBiz = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.PreMessage} returns this
 */
proto.douyin.PreMessage.prototype.setBiz = function(value) {
  return jspb.Message.setProto3StringField(this, 21, value);
};


/**
 * optional string access = 22;
 * @return {string}
 */
proto.douyin.PreMessage.prototype.getAccess = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.PreMessage} returns this
 */
proto.douyin.PreMessage.prototype.setAccess = function(value) {
  return jspb.Message.setProto3StringField(this, 22, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.HeadersList.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.HeadersList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.HeadersList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.HeadersList.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.HeadersList}
 */
proto.douyin.HeadersList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.HeadersList;
  return proto.douyin.HeadersList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.HeadersList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.HeadersList}
 */
proto.douyin.HeadersList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.HeadersList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.HeadersList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.HeadersList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.HeadersList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.douyin.HeadersList.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.HeadersList} returns this
 */
proto.douyin.HeadersList.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.douyin.HeadersList.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.HeadersList} returns this
 */
proto.douyin.HeadersList.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.LiveShoppingMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.LiveShoppingMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.LiveShoppingMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.LiveShoppingMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && proto.douyin.Common.toObject(includeInstance, f),
    msgtype: jspb.Message.getFieldWithDefault(msg, 2, 0),
    promotionid: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.LiveShoppingMessage}
 */
proto.douyin.LiveShoppingMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.LiveShoppingMessage;
  return proto.douyin.LiveShoppingMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.LiveShoppingMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.LiveShoppingMessage}
 */
proto.douyin.LiveShoppingMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.douyin.Common;
      reader.readMessage(value,proto.douyin.Common.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMsgtype(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPromotionid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.LiveShoppingMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.LiveShoppingMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.LiveShoppingMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.LiveShoppingMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.douyin.Common.serializeBinaryToWriter
    );
  }
  f = message.getMsgtype();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getPromotionid();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional Common common = 1;
 * @return {?proto.douyin.Common}
 */
proto.douyin.LiveShoppingMessage.prototype.getCommon = function() {
  return /** @type{?proto.douyin.Common} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Common, 1));
};


/**
 * @param {?proto.douyin.Common|undefined} value
 * @return {!proto.douyin.LiveShoppingMessage} returns this
*/
proto.douyin.LiveShoppingMessage.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.LiveShoppingMessage} returns this
 */
proto.douyin.LiveShoppingMessage.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.LiveShoppingMessage.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 msgType = 2;
 * @return {number}
 */
proto.douyin.LiveShoppingMessage.prototype.getMsgtype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.LiveShoppingMessage} returns this
 */
proto.douyin.LiveShoppingMessage.prototype.setMsgtype = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 promotionId = 4;
 * @return {number}
 */
proto.douyin.LiveShoppingMessage.prototype.getPromotionid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.LiveShoppingMessage} returns this
 */
proto.douyin.LiveShoppingMessage.prototype.setPromotionid = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.RoomStatsMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.RoomStatsMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.RoomStatsMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.RoomStatsMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && proto.douyin.Common.toObject(includeInstance, f),
    displayshort: jspb.Message.getFieldWithDefault(msg, 2, ""),
    displaymiddle: jspb.Message.getFieldWithDefault(msg, 3, ""),
    displaylong: jspb.Message.getFieldWithDefault(msg, 4, ""),
    displayvalue: jspb.Message.getFieldWithDefault(msg, 5, 0),
    displayversion: jspb.Message.getFieldWithDefault(msg, 6, 0),
    incremental: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    ishidden: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    total: jspb.Message.getFieldWithDefault(msg, 9, 0),
    displaytype: jspb.Message.getFieldWithDefault(msg, 10, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.RoomStatsMessage}
 */
proto.douyin.RoomStatsMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.RoomStatsMessage;
  return proto.douyin.RoomStatsMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.RoomStatsMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.RoomStatsMessage}
 */
proto.douyin.RoomStatsMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.douyin.Common;
      reader.readMessage(value,proto.douyin.Common.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayshort(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplaymiddle(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplaylong(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDisplayvalue(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDisplayversion(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncremental(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIshidden(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotal(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDisplaytype(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.RoomStatsMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.RoomStatsMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.RoomStatsMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.RoomStatsMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.douyin.Common.serializeBinaryToWriter
    );
  }
  f = message.getDisplayshort();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDisplaymiddle();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDisplaylong();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDisplayvalue();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getDisplayversion();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getIncremental();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getIshidden();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getDisplaytype();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
};


/**
 * optional Common common = 1;
 * @return {?proto.douyin.Common}
 */
proto.douyin.RoomStatsMessage.prototype.getCommon = function() {
  return /** @type{?proto.douyin.Common} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Common, 1));
};


/**
 * @param {?proto.douyin.Common|undefined} value
 * @return {!proto.douyin.RoomStatsMessage} returns this
*/
proto.douyin.RoomStatsMessage.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.RoomStatsMessage} returns this
 */
proto.douyin.RoomStatsMessage.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.RoomStatsMessage.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string displayShort = 2;
 * @return {string}
 */
proto.douyin.RoomStatsMessage.prototype.getDisplayshort = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.RoomStatsMessage} returns this
 */
proto.douyin.RoomStatsMessage.prototype.setDisplayshort = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string displayMiddle = 3;
 * @return {string}
 */
proto.douyin.RoomStatsMessage.prototype.getDisplaymiddle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.RoomStatsMessage} returns this
 */
proto.douyin.RoomStatsMessage.prototype.setDisplaymiddle = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string displayLong = 4;
 * @return {string}
 */
proto.douyin.RoomStatsMessage.prototype.getDisplaylong = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.RoomStatsMessage} returns this
 */
proto.douyin.RoomStatsMessage.prototype.setDisplaylong = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 displayValue = 5;
 * @return {number}
 */
proto.douyin.RoomStatsMessage.prototype.getDisplayvalue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.RoomStatsMessage} returns this
 */
proto.douyin.RoomStatsMessage.prototype.setDisplayvalue = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 displayVersion = 6;
 * @return {number}
 */
proto.douyin.RoomStatsMessage.prototype.getDisplayversion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.RoomStatsMessage} returns this
 */
proto.douyin.RoomStatsMessage.prototype.setDisplayversion = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional bool incremental = 7;
 * @return {boolean}
 */
proto.douyin.RoomStatsMessage.prototype.getIncremental = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.douyin.RoomStatsMessage} returns this
 */
proto.douyin.RoomStatsMessage.prototype.setIncremental = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional bool isHidden = 8;
 * @return {boolean}
 */
proto.douyin.RoomStatsMessage.prototype.getIshidden = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.douyin.RoomStatsMessage} returns this
 */
proto.douyin.RoomStatsMessage.prototype.setIshidden = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional int64 total = 9;
 * @return {number}
 */
proto.douyin.RoomStatsMessage.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.RoomStatsMessage} returns this
 */
proto.douyin.RoomStatsMessage.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int64 displayType = 10;
 * @return {number}
 */
proto.douyin.RoomStatsMessage.prototype.getDisplaytype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.RoomStatsMessage} returns this
 */
proto.douyin.RoomStatsMessage.prototype.setDisplaytype = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.douyin.ProductInfo.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.ProductInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.ProductInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.ProductInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.ProductInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    promotionid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    index: jspb.Message.getFieldWithDefault(msg, 2, 0),
    targetflashuidslistList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    explaintype: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.ProductInfo}
 */
proto.douyin.ProductInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.ProductInfo;
  return proto.douyin.ProductInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.ProductInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.ProductInfo}
 */
proto.douyin.ProductInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPromotionid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIndex(value);
      break;
    case 3:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addTargetflashuidslist(values[i]);
      }
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExplaintype(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.ProductInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.ProductInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.ProductInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.ProductInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPromotionid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getIndex();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getTargetflashuidslistList();
  if (f.length > 0) {
    writer.writePackedInt64(
      3,
      f
    );
  }
  f = message.getExplaintype();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional int64 promotionId = 1;
 * @return {number}
 */
proto.douyin.ProductInfo.prototype.getPromotionid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.ProductInfo} returns this
 */
proto.douyin.ProductInfo.prototype.setPromotionid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 index = 2;
 * @return {number}
 */
proto.douyin.ProductInfo.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.ProductInfo} returns this
 */
proto.douyin.ProductInfo.prototype.setIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated int64 targetFlashUidsList = 3;
 * @return {!Array<number>}
 */
proto.douyin.ProductInfo.prototype.getTargetflashuidslistList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.douyin.ProductInfo} returns this
 */
proto.douyin.ProductInfo.prototype.setTargetflashuidslistList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.douyin.ProductInfo} returns this
 */
proto.douyin.ProductInfo.prototype.addTargetflashuidslist = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.douyin.ProductInfo} returns this
 */
proto.douyin.ProductInfo.prototype.clearTargetflashuidslistList = function() {
  return this.setTargetflashuidslistList([]);
};


/**
 * optional int64 explainType = 4;
 * @return {number}
 */
proto.douyin.ProductInfo.prototype.getExplaintype = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.ProductInfo} returns this
 */
proto.douyin.ProductInfo.prototype.setExplaintype = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.douyin.CategoryInfo.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.CategoryInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.CategoryInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.CategoryInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.CategoryInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    promotionidslistList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    type: jspb.Message.getFieldWithDefault(msg, 4, ""),
    uniqueindex: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.CategoryInfo}
 */
proto.douyin.CategoryInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.CategoryInfo;
  return proto.douyin.CategoryInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.CategoryInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.CategoryInfo}
 */
proto.douyin.CategoryInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addPromotionidslist(values[i]);
      }
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUniqueindex(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.CategoryInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.CategoryInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.CategoryInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.CategoryInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPromotionidslistList();
  if (f.length > 0) {
    writer.writePackedInt64(
      3,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUniqueindex();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.douyin.CategoryInfo.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.CategoryInfo} returns this
 */
proto.douyin.CategoryInfo.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.douyin.CategoryInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.CategoryInfo} returns this
 */
proto.douyin.CategoryInfo.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated int64 promotionIdsList = 3;
 * @return {!Array<number>}
 */
proto.douyin.CategoryInfo.prototype.getPromotionidslistList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.douyin.CategoryInfo} returns this
 */
proto.douyin.CategoryInfo.prototype.setPromotionidslistList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.douyin.CategoryInfo} returns this
 */
proto.douyin.CategoryInfo.prototype.addPromotionidslist = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.douyin.CategoryInfo} returns this
 */
proto.douyin.CategoryInfo.prototype.clearPromotionidslistList = function() {
  return this.setPromotionidslistList([]);
};


/**
 * optional string type = 4;
 * @return {string}
 */
proto.douyin.CategoryInfo.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.CategoryInfo} returns this
 */
proto.douyin.CategoryInfo.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string uniqueIndex = 5;
 * @return {string}
 */
proto.douyin.CategoryInfo.prototype.getUniqueindex = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.CategoryInfo} returns this
 */
proto.douyin.CategoryInfo.prototype.setUniqueindex = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.douyin.ProductChangeMessage.repeatedFields_ = [4,8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.ProductChangeMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.ProductChangeMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.ProductChangeMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.ProductChangeMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && proto.douyin.Common.toObject(includeInstance, f),
    updatetimestamp: jspb.Message.getFieldWithDefault(msg, 2, 0),
    updatetoast: jspb.Message.getFieldWithDefault(msg, 3, ""),
    updateproductinfolistList: jspb.Message.toObjectList(msg.getUpdateproductinfolistList(),
    proto.douyin.ProductInfo.toObject, includeInstance),
    total: jspb.Message.getFieldWithDefault(msg, 5, 0),
    updatecategoryinfolistList: jspb.Message.toObjectList(msg.getUpdatecategoryinfolistList(),
    proto.douyin.CategoryInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.ProductChangeMessage}
 */
proto.douyin.ProductChangeMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.ProductChangeMessage;
  return proto.douyin.ProductChangeMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.ProductChangeMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.ProductChangeMessage}
 */
proto.douyin.ProductChangeMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.douyin.Common;
      reader.readMessage(value,proto.douyin.Common.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdatetimestamp(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatetoast(value);
      break;
    case 4:
      var value = new proto.douyin.ProductInfo;
      reader.readMessage(value,proto.douyin.ProductInfo.deserializeBinaryFromReader);
      msg.addUpdateproductinfolist(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotal(value);
      break;
    case 8:
      var value = new proto.douyin.CategoryInfo;
      reader.readMessage(value,proto.douyin.CategoryInfo.deserializeBinaryFromReader);
      msg.addUpdatecategoryinfolist(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.ProductChangeMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.ProductChangeMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.ProductChangeMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.ProductChangeMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.douyin.Common.serializeBinaryToWriter
    );
  }
  f = message.getUpdatetimestamp();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getUpdatetoast();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUpdateproductinfolistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.douyin.ProductInfo.serializeBinaryToWriter
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getUpdatecategoryinfolistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.douyin.CategoryInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional Common common = 1;
 * @return {?proto.douyin.Common}
 */
proto.douyin.ProductChangeMessage.prototype.getCommon = function() {
  return /** @type{?proto.douyin.Common} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Common, 1));
};


/**
 * @param {?proto.douyin.Common|undefined} value
 * @return {!proto.douyin.ProductChangeMessage} returns this
*/
proto.douyin.ProductChangeMessage.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.ProductChangeMessage} returns this
 */
proto.douyin.ProductChangeMessage.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.ProductChangeMessage.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 updateTimestamp = 2;
 * @return {number}
 */
proto.douyin.ProductChangeMessage.prototype.getUpdatetimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.ProductChangeMessage} returns this
 */
proto.douyin.ProductChangeMessage.prototype.setUpdatetimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string updateToast = 3;
 * @return {string}
 */
proto.douyin.ProductChangeMessage.prototype.getUpdatetoast = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.ProductChangeMessage} returns this
 */
proto.douyin.ProductChangeMessage.prototype.setUpdatetoast = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated ProductInfo updateProductInfoList = 4;
 * @return {!Array<!proto.douyin.ProductInfo>}
 */
proto.douyin.ProductChangeMessage.prototype.getUpdateproductinfolistList = function() {
  return /** @type{!Array<!proto.douyin.ProductInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.douyin.ProductInfo, 4));
};


/**
 * @param {!Array<!proto.douyin.ProductInfo>} value
 * @return {!proto.douyin.ProductChangeMessage} returns this
*/
proto.douyin.ProductChangeMessage.prototype.setUpdateproductinfolistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.douyin.ProductInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.douyin.ProductInfo}
 */
proto.douyin.ProductChangeMessage.prototype.addUpdateproductinfolist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.douyin.ProductInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.douyin.ProductChangeMessage} returns this
 */
proto.douyin.ProductChangeMessage.prototype.clearUpdateproductinfolistList = function() {
  return this.setUpdateproductinfolistList([]);
};


/**
 * optional int64 total = 5;
 * @return {number}
 */
proto.douyin.ProductChangeMessage.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.ProductChangeMessage} returns this
 */
proto.douyin.ProductChangeMessage.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * repeated CategoryInfo updateCategoryInfoList = 8;
 * @return {!Array<!proto.douyin.CategoryInfo>}
 */
proto.douyin.ProductChangeMessage.prototype.getUpdatecategoryinfolistList = function() {
  return /** @type{!Array<!proto.douyin.CategoryInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.douyin.CategoryInfo, 8));
};


/**
 * @param {!Array<!proto.douyin.CategoryInfo>} value
 * @return {!proto.douyin.ProductChangeMessage} returns this
*/
proto.douyin.ProductChangeMessage.prototype.setUpdatecategoryinfolistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.douyin.CategoryInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.douyin.CategoryInfo}
 */
proto.douyin.ProductChangeMessage.prototype.addUpdatecategoryinfolist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.douyin.CategoryInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.douyin.ProductChangeMessage} returns this
 */
proto.douyin.ProductChangeMessage.prototype.clearUpdatecategoryinfolistList = function() {
  return this.setUpdatecategoryinfolistList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.ControlMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.ControlMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.ControlMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.ControlMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && proto.douyin.Common.toObject(includeInstance, f),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.ControlMessage}
 */
proto.douyin.ControlMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.ControlMessage;
  return proto.douyin.ControlMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.ControlMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.ControlMessage}
 */
proto.douyin.ControlMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.douyin.Common;
      reader.readMessage(value,proto.douyin.Common.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.ControlMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.ControlMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.ControlMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.ControlMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.douyin.Common.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional Common common = 1;
 * @return {?proto.douyin.Common}
 */
proto.douyin.ControlMessage.prototype.getCommon = function() {
  return /** @type{?proto.douyin.Common} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Common, 1));
};


/**
 * @param {?proto.douyin.Common|undefined} value
 * @return {!proto.douyin.ControlMessage} returns this
*/
proto.douyin.ControlMessage.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.ControlMessage} returns this
 */
proto.douyin.ControlMessage.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.ControlMessage.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 status = 2;
 * @return {number}
 */
proto.douyin.ControlMessage.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.ControlMessage} returns this
 */
proto.douyin.ControlMessage.prototype.setStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.FansclubMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.FansclubMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.FansclubMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.FansclubMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    commoninfo: (f = msg.getCommoninfo()) && proto.douyin.Common.toObject(includeInstance, f),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    content: jspb.Message.getFieldWithDefault(msg, 3, ""),
    user: (f = msg.getUser()) && proto.douyin.User.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.FansclubMessage}
 */
proto.douyin.FansclubMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.FansclubMessage;
  return proto.douyin.FansclubMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.FansclubMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.FansclubMessage}
 */
proto.douyin.FansclubMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.douyin.Common;
      reader.readMessage(value,proto.douyin.Common.deserializeBinaryFromReader);
      msg.setCommoninfo(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 4:
      var value = new proto.douyin.User;
      reader.readMessage(value,proto.douyin.User.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.FansclubMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.FansclubMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.FansclubMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.FansclubMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommoninfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.douyin.Common.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.douyin.User.serializeBinaryToWriter
    );
  }
};


/**
 * optional Common commonInfo = 1;
 * @return {?proto.douyin.Common}
 */
proto.douyin.FansclubMessage.prototype.getCommoninfo = function() {
  return /** @type{?proto.douyin.Common} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Common, 1));
};


/**
 * @param {?proto.douyin.Common|undefined} value
 * @return {!proto.douyin.FansclubMessage} returns this
*/
proto.douyin.FansclubMessage.prototype.setCommoninfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.FansclubMessage} returns this
 */
proto.douyin.FansclubMessage.prototype.clearCommoninfo = function() {
  return this.setCommoninfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.FansclubMessage.prototype.hasCommoninfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 type = 2;
 * @return {number}
 */
proto.douyin.FansclubMessage.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.douyin.FansclubMessage} returns this
 */
proto.douyin.FansclubMessage.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string content = 3;
 * @return {string}
 */
proto.douyin.FansclubMessage.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.FansclubMessage} returns this
 */
proto.douyin.FansclubMessage.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional User user = 4;
 * @return {?proto.douyin.User}
 */
proto.douyin.FansclubMessage.prototype.getUser = function() {
  return /** @type{?proto.douyin.User} */ (
    jspb.Message.getWrapperField(this, proto.douyin.User, 4));
};


/**
 * @param {?proto.douyin.User|undefined} value
 * @return {!proto.douyin.FansclubMessage} returns this
*/
proto.douyin.FansclubMessage.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.FansclubMessage} returns this
 */
proto.douyin.FansclubMessage.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.FansclubMessage.prototype.hasUser = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.douyin.RoomRankMessage.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.RoomRankMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.RoomRankMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.RoomRankMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.RoomRankMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && proto.douyin.Common.toObject(includeInstance, f),
    rankslistList: jspb.Message.toObjectList(msg.getRankslistList(),
    proto.douyin.RoomRankMessage.RoomRank.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.RoomRankMessage}
 */
proto.douyin.RoomRankMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.RoomRankMessage;
  return proto.douyin.RoomRankMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.RoomRankMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.RoomRankMessage}
 */
proto.douyin.RoomRankMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.douyin.Common;
      reader.readMessage(value,proto.douyin.Common.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new proto.douyin.RoomRankMessage.RoomRank;
      reader.readMessage(value,proto.douyin.RoomRankMessage.RoomRank.deserializeBinaryFromReader);
      msg.addRankslist(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.RoomRankMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.RoomRankMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.RoomRankMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.RoomRankMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.douyin.Common.serializeBinaryToWriter
    );
  }
  f = message.getRankslistList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.douyin.RoomRankMessage.RoomRank.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.RoomRankMessage.RoomRank.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.RoomRankMessage.RoomRank.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.RoomRankMessage.RoomRank} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.RoomRankMessage.RoomRank.toObject = function(includeInstance, msg) {
  var f, obj = {
    user: (f = msg.getUser()) && proto.douyin.User.toObject(includeInstance, f),
    scorestr: jspb.Message.getFieldWithDefault(msg, 2, ""),
    profilehidden: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.RoomRankMessage.RoomRank}
 */
proto.douyin.RoomRankMessage.RoomRank.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.RoomRankMessage.RoomRank;
  return proto.douyin.RoomRankMessage.RoomRank.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.RoomRankMessage.RoomRank} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.RoomRankMessage.RoomRank}
 */
proto.douyin.RoomRankMessage.RoomRank.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.douyin.User;
      reader.readMessage(value,proto.douyin.User.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setScorestr(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setProfilehidden(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.RoomRankMessage.RoomRank.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.RoomRankMessage.RoomRank.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.RoomRankMessage.RoomRank} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.RoomRankMessage.RoomRank.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.douyin.User.serializeBinaryToWriter
    );
  }
  f = message.getScorestr();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProfilehidden();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional User user = 1;
 * @return {?proto.douyin.User}
 */
proto.douyin.RoomRankMessage.RoomRank.prototype.getUser = function() {
  return /** @type{?proto.douyin.User} */ (
    jspb.Message.getWrapperField(this, proto.douyin.User, 1));
};


/**
 * @param {?proto.douyin.User|undefined} value
 * @return {!proto.douyin.RoomRankMessage.RoomRank} returns this
*/
proto.douyin.RoomRankMessage.RoomRank.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.RoomRankMessage.RoomRank} returns this
 */
proto.douyin.RoomRankMessage.RoomRank.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.RoomRankMessage.RoomRank.prototype.hasUser = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string scoreStr = 2;
 * @return {string}
 */
proto.douyin.RoomRankMessage.RoomRank.prototype.getScorestr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.RoomRankMessage.RoomRank} returns this
 */
proto.douyin.RoomRankMessage.RoomRank.prototype.setScorestr = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool profileHidden = 3;
 * @return {boolean}
 */
proto.douyin.RoomRankMessage.RoomRank.prototype.getProfilehidden = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.douyin.RoomRankMessage.RoomRank} returns this
 */
proto.douyin.RoomRankMessage.RoomRank.prototype.setProfilehidden = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional Common common = 1;
 * @return {?proto.douyin.Common}
 */
proto.douyin.RoomRankMessage.prototype.getCommon = function() {
  return /** @type{?proto.douyin.Common} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Common, 1));
};


/**
 * @param {?proto.douyin.Common|undefined} value
 * @return {!proto.douyin.RoomRankMessage} returns this
*/
proto.douyin.RoomRankMessage.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.RoomRankMessage} returns this
 */
proto.douyin.RoomRankMessage.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.RoomRankMessage.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated RoomRank ranksList = 2;
 * @return {!Array<!proto.douyin.RoomRankMessage.RoomRank>}
 */
proto.douyin.RoomRankMessage.prototype.getRankslistList = function() {
  return /** @type{!Array<!proto.douyin.RoomRankMessage.RoomRank>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.douyin.RoomRankMessage.RoomRank, 2));
};


/**
 * @param {!Array<!proto.douyin.RoomRankMessage.RoomRank>} value
 * @return {!proto.douyin.RoomRankMessage} returns this
*/
proto.douyin.RoomRankMessage.prototype.setRankslistList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.douyin.RoomRankMessage.RoomRank=} opt_value
 * @param {number=} opt_index
 * @return {!proto.douyin.RoomRankMessage.RoomRank}
 */
proto.douyin.RoomRankMessage.prototype.addRankslist = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.douyin.RoomRankMessage.RoomRank, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.douyin.RoomRankMessage} returns this
 */
proto.douyin.RoomRankMessage.prototype.clearRankslistList = function() {
  return this.setRankslistList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.douyin.RoomMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.douyin.RoomMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.douyin.RoomMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.RoomMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && proto.douyin.Common.toObject(includeInstance, f),
    content: jspb.Message.getFieldWithDefault(msg, 2, ""),
    supprotlandscape: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    roommessagetype: jspb.Message.getFieldWithDefault(msg, 4, 0),
    systemtopmsg: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    forcedguarantee: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    bizscene: jspb.Message.getFieldWithDefault(msg, 20, ""),
    buriedpointmapMap: (f = msg.getBuriedpointmapMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.douyin.RoomMessage}
 */
proto.douyin.RoomMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.douyin.RoomMessage;
  return proto.douyin.RoomMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.douyin.RoomMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.douyin.RoomMessage}
 */
proto.douyin.RoomMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.douyin.Common;
      reader.readMessage(value,proto.douyin.Common.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSupprotlandscape(value);
      break;
    case 4:
      var value = /** @type {!proto.douyin.RoomMsgTypeEnum} */ (reader.readEnum());
      msg.setRoommessagetype(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSystemtopmsg(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setForcedguarantee(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setBizscene(value);
      break;
    case 30:
      var value = msg.getBuriedpointmapMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.douyin.RoomMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.douyin.RoomMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.douyin.RoomMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.douyin.RoomMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.douyin.Common.serializeBinaryToWriter
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSupprotlandscape();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getRoommessagetype();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getSystemtopmsg();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getForcedguarantee();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getBizscene();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getBuriedpointmapMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(30, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional Common common = 1;
 * @return {?proto.douyin.Common}
 */
proto.douyin.RoomMessage.prototype.getCommon = function() {
  return /** @type{?proto.douyin.Common} */ (
    jspb.Message.getWrapperField(this, proto.douyin.Common, 1));
};


/**
 * @param {?proto.douyin.Common|undefined} value
 * @return {!proto.douyin.RoomMessage} returns this
*/
proto.douyin.RoomMessage.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.douyin.RoomMessage} returns this
 */
proto.douyin.RoomMessage.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.douyin.RoomMessage.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string content = 2;
 * @return {string}
 */
proto.douyin.RoomMessage.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.RoomMessage} returns this
 */
proto.douyin.RoomMessage.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool supprotLandscape = 3;
 * @return {boolean}
 */
proto.douyin.RoomMessage.prototype.getSupprotlandscape = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.douyin.RoomMessage} returns this
 */
proto.douyin.RoomMessage.prototype.setSupprotlandscape = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional RoomMsgTypeEnum roommessagetype = 4;
 * @return {!proto.douyin.RoomMsgTypeEnum}
 */
proto.douyin.RoomMessage.prototype.getRoommessagetype = function() {
  return /** @type {!proto.douyin.RoomMsgTypeEnum} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.douyin.RoomMsgTypeEnum} value
 * @return {!proto.douyin.RoomMessage} returns this
 */
proto.douyin.RoomMessage.prototype.setRoommessagetype = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional bool systemTopMsg = 5;
 * @return {boolean}
 */
proto.douyin.RoomMessage.prototype.getSystemtopmsg = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.douyin.RoomMessage} returns this
 */
proto.douyin.RoomMessage.prototype.setSystemtopmsg = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool forcedGuarantee = 6;
 * @return {boolean}
 */
proto.douyin.RoomMessage.prototype.getForcedguarantee = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.douyin.RoomMessage} returns this
 */
proto.douyin.RoomMessage.prototype.setForcedguarantee = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional string bizScene = 20;
 * @return {string}
 */
proto.douyin.RoomMessage.prototype.getBizscene = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.douyin.RoomMessage} returns this
 */
proto.douyin.RoomMessage.prototype.setBizscene = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * map<string, string> buriedPointMap = 30;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.douyin.RoomMessage.prototype.getBuriedpointmapMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 30, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.douyin.RoomMessage} returns this
 */
proto.douyin.RoomMessage.prototype.clearBuriedpointmapMap = function() {
  this.getBuriedpointmapMap().clear();
  return this;};


/**
 * @enum {number}
 */
proto.douyin.CommentTypeTag = {
  COMMENTTYPETAGUNKNOWN: 0,
  COMMENTTYPETAGSTAR: 1
};

/**
 * @enum {number}
 */
proto.douyin.RoomMsgTypeEnum = {
  DEFAULTROOMMSG: 0,
  ECOMLIVEREPLAYSAVEROOMMSG: 1,
  CONSUMERRELATIONROOMMSG: 2,
  JUMANJIDATAAUTHNOTIFYMSG: 3,
  VSWELCOMEMSG: 4,
  MINORREFUNDMSG: 5,
  PAIDLIVEROOMNOTIFYANCHORMSG: 6,
  HOSTTEAMSYSTEMMSG: 7
};

goog.object.extend(exports, proto.douyin);

},{"google-protobuf":1}],3:[function(require,module,exports){
var MessageBody = require('./douyin_pb');
module.exports = {
    DataProto: MessageBody
}
},{"./douyin_pb":2}]},{},[3]);
