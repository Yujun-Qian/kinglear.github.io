!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=4)}([function(e,t,o){"use strict";(function(t){var r=o(2),n=o(3),c=/^[A-Za-z][A-Za-z0-9+-.]*:[\\/]+/,i=/^([a-z][a-z0-9.+-]*:)?([\\/]{1,})?([\S\s]*)/i,a=new RegExp("^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+");function s(e){return(e||"").toString().replace(a,"")}var u=[["#","hash"],["?","query"],function(e){return e.replace("\\","/")},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],f={hash:1,query:1};function l(e){var o,r=("undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{}).location||{},n={},i=typeof(e=e||r);if("blob:"===e.protocol)n=new h(unescape(e.pathname),{});else if("string"===i)for(o in n=new h(e,{}),f)delete n[o];else if("object"===i){for(o in e)o in f||(n[o]=e[o]);void 0===n.slashes&&(n.slashes=c.test(e.href))}return n}function p(e){e=s(e);var t=i.exec(e);return{protocol:t[1]?t[1].toLowerCase():"",slashes:!!(t[2]&&t[2].length>=2),rest:t[3]}}function h(e,t,o){if(e=s(e),!(this instanceof h))return new h(e,t,o);var c,i,a,f,d,w,m=u.slice(),y=typeof t,v=this,g=0;for("object"!==y&&"string"!==y&&(o=t,t=null),o&&"function"!=typeof o&&(o=n.parse),t=l(t),c=!(i=p(e||"")).protocol&&!i.slashes,v.slashes=i.slashes||c&&t.slashes,v.protocol=i.protocol||t.protocol||"",e=i.rest,i.slashes||(m[3]=[/(.*)/,"pathname"]);g<m.length;g++)"function"!=typeof(f=m[g])?(a=f[0],w=f[1],a!=a?v[w]=e:"string"==typeof a?~(d=e.indexOf(a))&&("number"==typeof f[2]?(v[w]=e.slice(0,d),e=e.slice(d+f[2])):(v[w]=e.slice(d),e=e.slice(0,d))):(d=a.exec(e))&&(v[w]=d[1],e=e.slice(0,d.index)),v[w]=v[w]||c&&f[3]&&t[w]||"",f[4]&&(v[w]=v[w].toLowerCase())):e=f(e);o&&(v.query=o(v.query)),c&&t.slashes&&"/"!==v.pathname.charAt(0)&&(""!==v.pathname||""!==t.pathname)&&(v.pathname=function(e,t){if(""===e)return t;for(var o=(t||"/").split("/").slice(0,-1).concat(e.split("/")),r=o.length,n=o[r-1],c=!1,i=0;r--;)"."===o[r]?o.splice(r,1):".."===o[r]?(o.splice(r,1),i++):i&&(0===r&&(c=!0),o.splice(r,1),i--);return c&&o.unshift(""),"."!==n&&".."!==n||o.push(""),o.join("/")}(v.pathname,t.pathname)),"/"!==v.pathname.charAt(0)&&v.hostname&&(v.pathname="/"+v.pathname),r(v.port,v.protocol)||(v.host=v.hostname,v.port=""),v.username=v.password="",v.auth&&(f=v.auth.split(":"),v.username=f[0]||"",v.password=f[1]||""),v.origin=v.protocol&&v.host&&"file:"!==v.protocol?v.protocol+"//"+v.host:"null",v.href=v.toString()}h.prototype={set:function(e,t,o){var c=this;switch(e){case"query":"string"==typeof t&&t.length&&(t=(o||n.parse)(t)),c[e]=t;break;case"port":c[e]=t,r(t,c.protocol)?t&&(c.host=c.hostname+":"+t):(c.host=c.hostname,c[e]="");break;case"hostname":c[e]=t,c.port&&(t+=":"+c.port),c.host=t;break;case"host":c[e]=t,/:\d+$/.test(t)?(t=t.split(":"),c.port=t.pop(),c.hostname=t.join(":")):(c.hostname=t,c.port="");break;case"protocol":c.protocol=t.toLowerCase(),c.slashes=!o;break;case"pathname":case"hash":if(t){var i="pathname"===e?"/":"#";c[e]=t.charAt(0)!==i?i+t:t}else c[e]=t;break;default:c[e]=t}for(var a=0;a<u.length;a++){var s=u[a];s[4]&&(c[s[1]]=c[s[1]].toLowerCase())}return c.origin=c.protocol&&c.host&&"file:"!==c.protocol?c.protocol+"//"+c.host:"null",c.href=c.toString(),c},toString:function(e){e&&"function"==typeof e||(e=n.stringify);var t,o=this,r=o.protocol;r&&":"!==r.charAt(r.length-1)&&(r+=":");var c=r+(o.slashes?"//":"");return o.username&&(c+=o.username,o.password&&(c+=":"+o.password),c+="@"),c+=o.host+o.pathname,(t="object"==typeof o.query?e(o.query):o.query)&&(c+="?"!==t.charAt(0)?"?"+t:t),o.hash&&(c+=o.hash),c}},h.extractProtocol=p,h.location=l,h.trimLeft=s,h.qs=n,e.exports=h}).call(this,o(1))},function(e,t){var o;o=function(){return this}();try{o=o||new Function("return this")()}catch(e){"object"==typeof window&&(o=window)}e.exports=o},function(e,t,o){"use strict";e.exports=function(e,t){if(t=t.split(":")[0],!(e=+e))return!1;switch(t){case"http":case"ws":return 80!==e;case"https":case"wss":return 443!==e;case"ftp":return 21!==e;case"gopher":return 70!==e;case"file":return!1}return 0!==e}},function(e,t,o){"use strict";var r=Object.prototype.hasOwnProperty;function n(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(e){return null}}function c(e){try{return encodeURIComponent(e)}catch(e){return null}}t.stringify=function(e,t){t=t||"";var o,n,i=[];for(n in"string"!=typeof t&&(t="?"),e)if(r.call(e,n)){if((o=e[n])||null!=o&&!isNaN(o)||(o=""),n=c(n),o=c(o),null===n||null===o)continue;i.push(n+"="+o)}return i.length?t+i.join("&"):""},t.parse=function(e){for(var t,o=/([^=?#&]+)=?([^&]*)/g,r={};t=o.exec(e);){var c=n(t[1]),i=n(t[2]);null===c||null===i||c in r||(r[c]=i)}return r}},function(e,t,o){"use strict";o.r(t);var r={getACSRFToken:function(){var e=OPC_COOKIE.cookieProcess.getCookie("skey")||OPC_COOKIE.cookieProcess.getCookie("p_skey"),t=5381;if(e){for(var o=0,r=e.length;o<r;++o)t+=(t<<5)+e.charCodeAt(o);return 2147483647&t}},getUin:function(){var e=OPC_COOKIE.cookieProcess.getCookie("uin");return e&&(e=e.replace(/^o(0)*/gi,"")),e}},n=o(0),c=o.n(n);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}var a=function(){try{var e={height:200,width:200},t=r.getUin(),o=r.getACSRFToken(),n=Date.now(),a=new Date,s=window.innerHeight,u=window.innerWidth,f={genTime:"".concat(a.getFullYear(),"-").concat((b=a.getMonth(),b<10?"0".concat(b+1):b+1),"-").concat(a.getDate()," ").concat(a.getHours(),":").concat(a.getMinutes(),":").concat(a.getSeconds()),ip:window.SHARED_CONFIG&&window.SHARED_CONFIG.ip,isIframe:window.top!==window.self,topPage:function(){if(window.top===window.self)return location.href;try{return window.top.location.href}catch(e){return document.referrer}}(),topStatus:function(){if(window.top===window.self)return JSON.stringify({code:3,href:location.href});try{return JSON.stringify({code:1,location:window.top.location,href:!!window.top.location&&window.top.location.href})}catch(e){return JSON.stringify({code:2,errorInfo:e.message,href:document.referrer})}}(),referrer:document.referrer,selfPage:location.href,height:s,width:u},l=function(e){var r,n=e.cpskey,c=e.eventDescp,a=e.genTime,s=e.processedCookieParams;n&&/[0-9a-fA-F]{32}/.test(n)&&(s.trafficparams_cpskey=n,s.cps_time=a,r={cpskey:n},t&&o&&r.cpskey&&$.ajax({url:"//cloud.tencent.com/act/cps/ajax?uin=".concat(t,"&csrfCode=").concat(o),method:"POST",xhrFields:{withCredentials:!0},data:{action:"createCpsRelation",cpskey:r.cpskey},success:function(){},error:function(e){console.error(e)}}),OPC_COOKIE.cookieProcess.setCookie("cpskey",n)),Object.keys(s).length>0?(OPC_COOKIE.cookieProcess.setTrafficParams(s,{expires:30/1440}),window.QC_SENSORS&&window.QC_SENSORS.track("cps_iframe_report",i(f,{cpskey:n})),window.QC_SENSORS&&window.QC_SENSORS.track("cps_cookie_event",i(f,{cookieEventStatus:"success",eventDescp:c,cpskey:n}))):window.QC_SENSORS&&window.QC_SENSORS.track("cps_cookie_event",i(f,{cookieEventStatus:"fail",eventDescp:"fail_set_traffic_cps_cookie",cpskey:n}))},p=window.top===window.self||s>e.height&&u>e.width;if(window.SHARED_CONFIG){var h=window.SHARED_CONFIG,d=h.redirectUrl,w=h.cpskey;return p?l({cpskey:w,eventDescp:"success_first_broadcast_satisfied",genTime:n,processedCookieParams:{}}):window.QC_SENSORS&&window.QC_SENSORS.track("cps_cookie_event",i(f,{cookieEventStatus:"fail_first_broadcast_not_satisfied",cpskey:w})),location.href=d}var m=c()(location.href,!0).query,y=c()(document.referrer,!0).query,v=m.cps_key||m.cpskey||"",g=m.opc_hash_key||"",k=m.gclid||y.gclid,_=m.gclsrc||y.gclsrc,S=m.bd_vid||y.bd_vid,O=m.qhclickid||y.qhclickid,C={};if(!p)return window.QC_SENSORS&&window.QC_SENSORS.track("cps_cookie_event",i(f,{cookieEventStatus:"fail",eventDescp:"fail_second_broadcast_not_satisfied",cpskey:v})),!1;k&&(C.gclid=k),_&&(C.gclsrc=_),S&&(C.bd_vid=S),O&&(C.qhclickid=O),g&&(C.opc_hash_key=g,C.opc_time=n),l({cpskey:v,eventDescp:"success_second_broadcast_satisfied",genTime:n,processedCookieParams:C})}catch(e){console.log(e),console.log("trafficParams write error")}var b};function s(){var e=navigator.userAgent;return e.indexOf("Android")>0?"android":e.indexOf("iPhone")>0||e.indexOf("iPad")>0||e.indexOf("iPod")>0?"ios":e.indexOf("SymbianOS")>0||e.indexOf("Windows Phone")>0?"other":"pc"}var u=function(){var e=new Image;return function(t){e.onload=e.onerror=e.onabort=function(){e.onload=e.onerror=e.onabort=null,e=null},e.src=t}},f=function(){try{var e=[1,2,3,10,60,120,300,600],t=0,o=setInterval((function(){(t++,~e.indexOf(t))&&function(e){var t={type:"heartbeat",url:window.location.href,clientDevice:s(),expKey:"heartbeat",expValue:e.heartbeat_time},o=[];for(var r in t)o.push(r+"="+encodeURIComponent(t[r]));var n="//cloud.tencent.com/act/common/report?action=heartbeatReport&t="+Math.random()+"&"+o.join("&");u()(n)}({heartbeat_time:t});t>=e[e.length-1]&&clearInterval(o)}),1e3)}catch(e){console.log(e)}};function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var p=function(){var e={path:"/",expires:30,domain:function(){var e="cloud.tencent.com";-1!==window.location.href.indexOf("qcloud.com")&&(e="qcloud.com");return e}()};function t(){for(var e={},t=0;t<arguments.length;t++){var o=arguments[t];for(var r in o)e[r]=o[r]}return e}function o(e){var t="";for(var o in e)t+=";"+o,t+="expires"!==o?"="+e[o]:"="+new Date(1*new Date+parseInt(864e5*e[o])).toUTCString();return t}return function(){var r={};function n(e){try{if(void 0===e)throw new Error("cookie的键必传");for(var t="",o=document.cookie?document.cookie.split(";"):[],r=0;r<o.length;r++){var n=(String.prototype.trim?o[r].trim():o[r].replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")).split("=");if(e===decodeURIComponent(n[0])){t=n[1];break}}return t}catch(e){console.error(e.message)}}return r.setTrafficParams=function(r,c){try{var i=n("trafficParams");if(void 0===r)throw new Error("trafficParams必须传值");if("object"!==l(r))throw new Error("trafficParams的值必须为对象");var a="";for(var s in r)r.hasOwnProperty(s)&&""!==r[s]&&(a+=s+"="+r[s]+";");var u=function(e,t){for(var o=t.split(";"),r=e.split(";"),n=0;n<r.length;n++){for(var c=-1,i=r[n],a=i.split("=")[0],s=0;s<o.length;s++){o[s].split("=")[0]===a&&(c=s)}-1===c?o.push(i):o.splice(c,1,i)}var u,f,l,p=(o=o.filter((function(e){return""!==e}))).join(";");return"***$;"+(u=p,f=";",(void 0===l||l>u.length)&&(l=u.length),(u.substring(l-f.length,l)===f?p:p+";")+"$***")}(a,i=decodeURIComponent(i).replace(/(^\*{3}\$)|(\$\*{3}$)/gi,""));if(encodeURIComponent(u).length>500)throw new Error("trafficParams的值的字符个数不能超过500");var f=o(c=t(e,c));return document.cookie=encodeURIComponent("trafficParams")+"="+encodeURIComponent(u)+f}catch(e){console.error(e.message||"写入trafficParams失败")}},r.getCookie=n,r.setCookie=function(r,n,c){try{var i=JSON.stringify(n);/^[\{\]]/.test(i)&&(n=i);var a=o(c=t(e,c));return document.cookie=encodeURIComponent(r)+"="+encodeURIComponent(n)+a}catch(e){console.log(e.message||"写入cookie失败")}},r}()};try{var h=window.location.hostname;~["cloud.tencent.com","buy.cloud.tencent.com"].indexOf(h)&&(window.OPC_COOKIE={cookieProcess:p()},a(),f())}catch(e){console.error(e)}}]);