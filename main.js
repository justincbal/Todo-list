(()=>{"use strict";var e,t,n,o,r,i,a,c,s,l,d,p,f,u,g={144:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(81),r=n.n(o),i=n(645),a=n.n(i)()(r());a.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Quicksand&display=swap);"]),a.push([e.id,'html{box-sizing:border-box;font-family:"Quicksand",sans-serif;margin:0;padding:0}body{margin:0;padding:0;height:100vh;width:100vw}*,*::before,*::after{box-sizing:inherit;font-family:inherit}#content{display:grid;grid-template-columns:380px 4fr;grid-template-rows:200px 100vh;grid-template-areas:"hd hd hd hd hd" "sd mn mn mn mn" "sd mn mn mn mn" "sd mn mn mn mn"}#content .main-heading-section{grid-area:hd;background-color:#3c5148;color:#e0e9f0;font-size:2rem;display:flex;justify-content:center;align-items:center}#content .side-navigation{grid-area:sd;background-color:#8aada9;display:flex;flex-direction:column;align-items:center;gap:10px}#content .side-navigation .nav-heading{background-color:#3c5148;font-size:2rem;color:#e0e9f0;height:60px;width:80%;display:flex;justify-content:center;align-items:center}#content .side-navigation .add-project-form{width:80%;display:flex;height:50px}#content .side-navigation .add-project-form .project-input{flex-grow:1;border:none;font-size:1.2rem;padding-left:10px}#content .side-navigation .add-project-form .project-input:focus{outline:none}#content .side-navigation .add-project-form .project-button{width:50px;border:none;background-color:#3c5148;color:#e0e9f0;font-size:2rem}#content .side-navigation .add-project-form .project-button:hover{cursor:pointer;background-color:rgba(60,81,72,.7176470588)}#content .side-navigation .project-list{width:80%;display:flex;flex-direction:column;gap:10px}#content .side-navigation .project-list .project{display:flex;height:50px;display:flex;justify-content:center;align-items:center;border-left:#3c5148 1px solid}#content .side-navigation .project-list .project .delete-project-button{background-color:#ad8a8a;border:none;width:50px;height:50px}#content .side-navigation .project-list .project .delete-project-button:hover{cursor:pointer;color:#e0e9f0;font-weight:900}#content .side-navigation .project-list .project .project-name{color:#3c5148;flex-grow:1;padding-left:10px;height:50px;display:flex;align-items:center}#content .side-navigation .project-list .project .project-name:hover{color:#e0e9f0;cursor:pointer}#content .list-section{grid-area:mn;display:flex;flex-direction:column;align-items:center;gap:10px}#content .list-section .list-heading{margin-top:26.56px;margin-bottom:26.56px;font-size:2rem;background-color:#3c5148;height:60px;display:flex;justify-content:center;align-items:center;width:50%;color:#e0e9f0;box-shadow:rgba(0,0,0,.24) 0px 3px 8px}#content .list-section .list-button{height:60px;font-size:1.2rem;background-color:#8aada9;color:#e0e9f0;border:none;width:120px;font-weight:900;box-shadow:rgba(0,0,0,.02) 0px 1px 3px 0px,rgba(27,31,35,.15) 0px 0px 0px 1px}#content .list-section .list-button:hover{cursor:pointer}#content .list-section .task-list{display:flex;flex-direction:column;align-items:center;width:50%}#content .list-section .task-list .task{display:flex;background-color:#e0e9f0;width:100%}#content .list-section .task-list .task .task-checkbox{width:40px}#content .list-section .task-list .task .task-details{flex-grow:1;display:flex;flex-direction:column;align-items:center}',""]);const c=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],l=o.base?s[0]+o.base:s[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var f=n(p),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)t[f].references++,t[f].updater(u);else{var g=r(u,o);o.byIndex=c,t.splice(c,0,{identifier:p,updater:g,references:1})}a.push(p)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var s=o(e,r),l=0;l<i.length;l++){var d=n(i[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},m={};function h(e){var t=m[e];if(void 0!==t)return t.exports;var n=m[e]={id:e,exports:{}};return g[e](n,n.exports,h),n.exports}h.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return h.d(t,{a:t}),t},h.d=(e,t)=>{for(var n in t)h.o(t,n)&&!h.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},h.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),h.nc=void 0,e=h(379),t=h.n(e),n=h(795),o=h.n(n),r=h(569),i=h.n(r),a=h(565),c=h.n(a),s=h(216),l=h.n(s),d=h(589),p=h.n(d),f=h(144),(u={}).styleTagTransform=p(),u.setAttributes=c(),u.insert=i().bind(null,"head"),u.domAPI=o(),u.insertStyleElement=l(),t()(f.Z,u),f.Z&&f.Z.locals&&f.Z.locals})();