(()=>{"use strict";var e,t,n,r,o,a,i,s,c,d,l,p,u,f,h={144:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(81),o=n.n(r),a=n(645),i=n.n(a),s=n(667),c=n.n(s),d=new URL(n(716),n.b),l=i()(o());l.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Quicksand&display=swap);"]);var p=c()(d);l.push([e.id,'html{box-sizing:border-box;font-family:"Quicksand",sans-serif;margin:0;padding:0}body{margin:0;padding:0;height:100vh;width:100vw}*,*::before,*::after{box-sizing:inherit;font-family:inherit}#content{height:100vh;display:grid;grid-template-columns:repeat(4, minmax(220px, 1fr));grid-template-rows:repeat(6, 1fr);grid-template-areas:"hd hd hd hd" "sd mn mn mn" "sd mn mn mn" "sd mn mn mn" "sd mn mn mn" "sd mn mn mn";gap:10px}#content>*{box-shadow:rgba(0,0,0,.35) 0px 5px 15px}.header{background-color:#3c5148;grid-area:hd;display:flex;align-items:center;padding-left:50px}.header .title{font-size:3.5rem;overflow:hidden;color:#e0e9f0}.side-nav{background-color:#8aada9;grid-area:sd;display:flex;flex-direction:column;align-items:center}.side-nav .nav-header{display:flex;flex-direction:row;width:100%;justify-content:center;align-items:center;border-bottom:#3c5148 2px solid}.side-nav .nav-header h2{flex-grow:2;display:flex;justify-content:center;align-items:center;height:100%;width:66%;flex-shrink:0}.side-nav .nav-header button{flex-grow:1;flex-shrink:0;min-width:75px;height:100%;font-size:2rem;border:none;color:#3c5148;background-color:#e0e9f0}.side-nav .nav-header button:hover{border:none;cursor:pointer;font-weight:900}.side-nav .nav-project{display:flex;width:100%;justify-content:center;align-items:center;border-bottom:#3c5148 2px solid}.side-nav .nav-project h2{font-style:italic;flex-grow:2;display:flex;justify-content:center;align-items:center;height:100%;width:66%;flex-shrink:0}.side-nav .nav-project h2:hover{cursor:pointer;color:#e0e9f0}.side-nav .nav-project button{flex-grow:1;flex-shrink:0;min-width:75px;height:100%;border:none;background-color:#ad8a8a;background-image:url('+p+");background-repeat:no-repeat;background-size:50px;background-position-x:center;background-position-y:center}.side-nav .nav-project button:hover{cursor:pointer;background-size:55px}.list-area{grid-area:mn;background-color:#e0e9f0}.add-proj{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:200px;width:450px;display:none;flex-direction:column;justify-content:center;align-items:center;gap:10px}.add-proj input{width:50%;height:45px;font-size:1.5rem}.add-proj .buttons{display:flex;justify-content:space-between;width:50%}.add-proj .buttons button{height:35px;width:33%;font-size:1rem;background-color:#8aada9;border:none;color:#e0e9f0}.add-proj .buttons button:hover{cursor:pointer}",""]);const u=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=n(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var h=o(f,r);r.byIndex=s,t.splice(s,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var c=r(e,o),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},716:(e,t,n)=>{e.exports=n.p+"a6fd29509719f079bfd7.png"}},m={};function g(e){var t=m[e];if(void 0!==t)return t.exports;var n=m[e]={id:e,exports:{}};return h[e](n,n.exports,g),n.exports}g.m=h,g.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return g.d(t,{a:t}),t},g.d=(e,t)=>{for(var n in t)g.o(t,n)&&!g.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},g.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),g.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;g.g.importScripts&&(e=g.g.location+"");var t=g.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),g.p=e})(),g.b=document.baseURI||self.location.href,g.nc=void 0,e=g(379),t=g.n(e),n=g(795),r=g.n(n),o=g(569),a=g.n(o),i=g(565),s=g.n(i),c=g(216),d=g.n(c),l=g(589),p=g.n(l),u=g(144),(f={}).styleTagTransform=p(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),t()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals})();