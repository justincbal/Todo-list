(()=>{"use strict";var t={144:(t,e,o)=>{o.d(e,{Z:()=>c});var n=o(81),r=o.n(n),s=o(645),i=o.n(s)()(r());i.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Quicksand&display=swap);"]),i.push([t.id,'html{box-sizing:border-box;font-family:"Quicksand",sans-serif;margin:0;padding:0}body{margin:0;padding:0;height:100vh;width:100vw}*,*::before,*::after{box-sizing:inherit;font-family:inherit}#content{display:grid;grid-template-columns:380px 4fr;grid-template-rows:200px 100vh;grid-template-areas:"hd hd hd hd hd" "sd mn mn mn mn" "sd mn mn mn mn" "sd mn mn mn mn"}#content .main-heading-section{grid-area:hd;background-color:#3c5148;color:#e0e9f0;font-size:2rem;display:flex;justify-content:center;align-items:center}#content .side-navigation{grid-area:sd;background-color:#8aada9;display:flex;flex-direction:column;align-items:center;gap:10px}#content .side-navigation .nav-heading{background-color:#3c5148;font-size:2rem;color:#e0e9f0;height:60px;width:80%;display:flex;justify-content:center;align-items:center}#content .side-navigation .add-project-form{width:80%;display:flex;height:50px}#content .side-navigation .add-project-form .project-input{flex-grow:1;border:none;font-size:1.2rem;padding-left:10px}#content .side-navigation .add-project-form .project-input:focus{outline:none}#content .side-navigation .add-project-form .project-button{width:50px;border:none;background-color:#3c5148;color:#e0e9f0;font-size:2rem}#content .side-navigation .add-project-form .project-button:hover{cursor:pointer;background-color:rgba(60,81,72,.7176470588)}#content .side-navigation .project-list{width:80%;display:flex;flex-direction:column;gap:10px}#content .side-navigation .project-list .project{display:flex;height:50px;display:flex;justify-content:center;align-items:center;border-left:#3c5148 1px solid}#content .side-navigation .project-list .project .delete-project-button{background-color:#ad8a8a;border:none;width:50px;height:50px}#content .side-navigation .project-list .project .delete-project-button:hover{cursor:pointer;color:#e0e9f0;font-weight:900}#content .side-navigation .project-list .project .project-name{color:#3c5148;flex-grow:1;padding-left:10px;height:50px;display:flex;align-items:center}#content .side-navigation .project-list .project .project-name:hover{color:#e0e9f0;cursor:pointer}#content .list-section{grid-area:mn;display:flex;flex-direction:column;align-items:center;gap:10px}#content .list-section .list-heading{margin-top:26.56px;margin-bottom:26.56px;font-size:2rem;background-color:#3c5148;height:60px;display:flex;justify-content:center;align-items:center;width:50%;color:#e0e9f0;box-shadow:rgba(0,0,0,.24) 0px 3px 8px}#content .list-section .list-button{height:60px;font-size:1.2rem;background-color:#8aada9;color:#e0e9f0;border:none;width:120px;font-weight:900;box-shadow:rgba(0,0,0,.02) 0px 1px 3px 0px,rgba(27,31,35,.15) 0px 0px 0px 1px}#content .list-section .list-button:hover{cursor:pointer}#content .list-section .task-list{display:flex;flex-direction:column;align-items:center;width:50%}#content .list-section .task-list .task{display:flex;background-color:#e0e9f0;width:100%;height:60px;padding:0 10px;justify-content:space-between;align-items:center;box-shadow:rgba(0,0,0,.16) 0px 3px 6px,rgba(0,0,0,.23) 0px 3px 6px}#content .list-section .task-list .task>*{margin:0}#content .list-section .task-list .task .task-checkbox{width:40px;height:40px}#content .list-section .task-list .task .task-checkbox:hover{cursor:pointer}#content .list-section .task-list .task .task-name{font-size:1.5rem;font-weight:100;width:500px}#content .list-section .task-list .task .task-urgency{font-size:.89rem;font-weight:100;font-style:italic;width:100px}.planned{color:orange}.urgent{color:red}.completed{color:green}.task-completed{font-style:italic;text-decoration:line-through}.blur{display:none;position:absolute;backdrop-filter:blur(1rem);height:100%;width:100%;border:1px solid #000}.blur .task-form{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:clamp(500px,100%,900px);height:200px;background-color:#e0e9f0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px}.blur .task-form input,.blur .task-form select{width:50%;height:40px;font-size:1.3rem;padding-left:10px}.blur .task-form .task-form-buttons{width:50%;display:flex;justify-content:space-between}.blur .task-form .task-form-buttons .cancel-button{background-color:#ad8a8a;height:40px;border:none;width:100px;font-size:1.3rem;color:#e0e9f0;font-weight:900}.blur .task-form .task-form-buttons .cancel-button:hover{cursor:pointer}.blur .task-form .task-form-buttons .submit-button{background-color:#8aada9;height:40px;border:none;width:100px;font-size:1.3rem;color:#e0e9f0;font-weight:900}.blur .task-form .task-form-buttons .submit-button:hover{cursor:pointer}',""]);const c=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var o="",n=void 0!==e[5];return e[4]&&(o+="@supports (".concat(e[4],") {")),e[2]&&(o+="@media ".concat(e[2]," {")),n&&(o+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),o+=t(e),n&&(o+="}"),e[2]&&(o+="}"),e[4]&&(o+="}"),o})).join("")},e.i=function(t,o,n,r,s){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(n)for(var c=0;c<this.length;c++){var a=this[c][0];null!=a&&(i[a]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);n&&i[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),o&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=o):d[2]=o),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function o(t){for(var o=-1,n=0;n<e.length;n++)if(e[n].identifier===t){o=n;break}return o}function n(t,n){for(var s={},i=[],c=0;c<t.length;c++){var a=t[c],l=n.base?a[0]+n.base:a[0],d=s[l]||0,p="".concat(l," ").concat(d);s[l]=d+1;var u=o(p),h={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==u)e[u].references++,e[u].updater(h);else{var m=r(h,n);n.byIndex=c,e.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function r(t,e){var o=e.domAPI(e);return o.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;o.update(t=e)}else o.remove()}}t.exports=function(t,r){var s=n(t=t||[],r=r||{});return function(t){t=t||[];for(var i=0;i<s.length;i++){var c=o(s[i]);e[c].references--}for(var a=n(t,r),l=0;l<s.length;l++){var d=o(s[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}s=a}}},569:t=>{var e={};t.exports=function(t,o){var n=function(t){if(void 0===e[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}e[t]=o}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(o)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,o)=>{t.exports=function(t){var e=o.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(o){!function(t,e,o){var n="";o.supports&&(n+="@supports (".concat(o.supports,") {")),o.media&&(n+="@media ".concat(o.media," {"));var r=void 0!==o.layer;r&&(n+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),n+=o.css,r&&(n+="}"),o.media&&(n+="}"),o.supports&&(n+="}");var s=o.sourceMap;s&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,o)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function o(n){var r=e[n];if(void 0!==r)return r.exports;var s=e[n]={id:n,exports:{}};return t[n](s,s.exports,o),s.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.nc=void 0,(()=>{var t=o(379),e=o.n(t),n=o(795),r=o.n(n),s=o(569),i=o.n(s),c=o(565),a=o.n(c),l=o(216),d=o.n(l),p=o(589),u=o.n(p),h=o(144),m={};m.styleTagTransform=u(),m.setAttributes=a(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=d(),e()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;class f{constructor(t,e){this._projectName=t,this._projectID=e,this._taskID=0,this._taskList=[],console.clear(),console.log(`\nProject created:\nName: ${this._projectName}\nID: ${this._projectID}\n\n`)}}class g{constructor(t,e){this._name=t,this._id=e}}const j=t=>console.log(t);j(`Local storage connected: ${function(){var t="test";try{return localStorage.setItem(t,t),localStorage.removeItem(t),!0}catch(t){return!1}}()}`);const x=new class{constructor(){console.log("Project list has been created"),this.projList=[],this.projID=0,this.currentProjectID}saveLocal(){localStorage.setItem("projectObject",JSON.stringify(this)),this.displayProjectConsole()}addProject(){const t=document.querySelector(".project-input"),e=new f(t.value,this.projID++);this.projList.push(e),this.saveLocal(),this.renderProjects(),t.value=""}displayProjectConsole(){let t=[];for(const e in this.projList)t.push(this.projList[e]._projectName);console.log(`\nProject List: ${t}\n\n`)}renderProjects(){const t=document.querySelector(".project-list");for(;t.firstChild;)t.firstChild.remove();for(const e in this.projList){const o=document.createElement("div"),n=document.createElement("h3"),r=document.createElement("button");o.classList.add("project"),n.classList.add("project-name"),r.classList.add("delete-project-button"),n.textContent=this.projList[e]._projectName,r.textContent="DEL",o.setAttribute("id",`${this.projList[e]._projectID}`),r.addEventListener("click",(t=>{this.deleteProject(t.target.parentNode.id)})),n.addEventListener("click",(t=>{this.currentProjectID=t.target.parentNode.id,console.log(`Current ID is: ${this.currentProjectID}`),console.log(this.projList[this.currentProjectID]),this.displayTasks()})),o.append(n),o.append(r),t.append(o)}}deleteProject(t){for(const e in this.projList)this.projList[e]._projectID==t&&(console.clear(),console.log(`\nDeleting ${this.projList[e]._projectName}\n\n`),this.projList.splice(e,1));0===this.projList.length&&(this.projID=0),this.saveLocal(),this.renderProjects()}displayTasks(){const t=document.querySelector(".list-section");for(;t.firstChild;)t.lastChild.remove();const e=document.createElement("h2"),o=document.createElement("button");e.classList.add("list-heading"),o.classList.add("list-button"),e.textContent=this.projList[this.currentProjectID]._projectName,o.textContent="Add Task",t.append(e),t.append(o),o.addEventListener("click",(()=>{this.taskForm()})),this.tasks()}deleteTask(t){for(const e in this.projList[this.currentProjectID]._taskList)this.projList[this.currentProjectID]._taskList[e]._id==t&&this.projList[this.currentProjectID]._taskList.splice(e,1);this.saveLocal(),this.displayTasks()}tasks(){const t=document.querySelector(".list-section");for(const e in this.projList[this.currentProjectID]._taskList){const o=document.createElement("div");o.classList.add("task-list"),o.setAttribute("id",this.projList[this.currentProjectID]._taskList[e]._id);const n=document.createElement("div");n.classList.add("task");const r=document.createElement("input");r.type="checkbox",r.classList.add("task-checkbox");const s=document.createElement("h3");s.classList.add("task-name"),s.textContent=this.projList[this.currentProjectID]._taskList[e]._name,n.append(r),n.append(s),o.append(n),t.append(o),r.addEventListener("click",(t=>{this.deleteTask(t.target.parentNode.parentNode.id)}))}}taskForm(){console.clear(),console.log("Task form called");const t=document.querySelector(".blur"),e=(document.querySelector("#status"),document.querySelector("#taskName"));var o=this;t.style.display="block",document.querySelector(".cancel-button").addEventListener("click",(()=>{t.style.display="none",e.value=""})),document.querySelector(".submit-button").addEventListener("click",(function n(){console.log("Submit called"),t.style.display="none";const r=new g(e.value,o.projList[o.currentProjectID]._taskID++);o.projList[o.currentProjectID]._taskList.push(r),console.log(o),e.value="",o.saveLocal(),o.displayTasks(),this.removeEventListener("click",n)}))}};if(0!==localStorage.length){let t=JSON.parse(localStorage.getItem("projectObject"));j(t),j(x),x.projID=t.projID,x.projList=t.projList.slice(0),j(t),j(x),x.renderProjects()}document.querySelector(".project-button").addEventListener("click",(()=>{x.addProject()}))})()})();