!function(n){var t={};function e(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return n[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var i in n)e.d(r,i,function(t){return n[t]}.bind(null,i));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=5)}([function(n,t,e){var r=e(1);"string"==typeof r&&(r=[[n.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(3)(r,i);r.locals&&(n.exports=r.locals)},function(n,t,e){(t=n.exports=e(2)(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css?family=Nunito:400,700);",""]),t.push([n.i,'* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: "Nunito", sans-serif;\n  color: #555555;\n}\n\n.outer-wrap {\n  min-height: 100vh;\n  background: #f5f5f5;\n  padding: 50px 0;\n}\n\n.content-wrap {\n  width: 90%;\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 0 0 0.1px;\n  background: #ffffff;\n  border-radius: 3px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);\n}\n\na, a:hover, a:active, a:visited {\n  color: inherit;\n  text-decoration: none;\n}\n\n.btn, .btn-border, a.btn, a.btn-border {\n  display: inline-block;\n  text-transform: uppercase;\n  padding: 4px 10px;\n  font-size: 14px;\n  border-radius: 3px;\n  background: #bbbbbb;\n  color: #ffffff;\n  cursor: pointer;\n  border: none;\n  outline: none\n}\n.btn:hover, .btn-border:hover, a.btn:hover, a.btn-border:hover {\n  background: #999999;\n}\n\n.btn-border {\n  padding: 3px 10px;\n  background: none;\n  border: 1px solid #bbbbbb;\n  color: #bbbbbb;\n}\n.btn-border:hover {\n  background: #bbbbbb;\n  color: #ffffff;\n}\n\ninput[type="text"], textarea {\n  display: block;\n  border-radius: 3px;\n  border: 1px solid #dddddd;\n  padding: 8px 12px;\n  margin: 0 auto;\n  outline: none;\n  font-family: inherit;\n}\ninput[type="text"]:focus, textarea:focus {\n  outline: none;\n  border-color: #888888;\n}\ninput[type="text"]::placeholder, textarea::placeholder {\n  color: #bbbbbb;\n}\n\n#header {\n  background: #555555;\n  color: #ffffff;\n  padding: 10px 15px;\n  border-radius: 3px 3px 0 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n#logo {\n  text-transform: uppercase;\n  font-weight: bold;\n}\n\n#site-nav a {\n  display: inline-block;\n  border: 1px solid #777777;\n  padding: 2px 8px;\n  margin: 0 3px;\n  border-radius: 2px;\n}\n#site-nav a.current, #site-nav a:hover {\n  background: #777777;\n}\n\n#task-creator {\n  text-align: center;\n  width: 95%;\n  margin: 30px auto;\n  padding: 25px;\n  border-radius: 3px;\n  background: #f5f5f5;\n}\n\n#task-input {\n  width: 90%;\n  max-width: 300px;\n  font-size: 18px;\n  display: inline-block;\n  vertical-align: middle;\n  border-radius: 3px 0 0 3px;\n  border-right: none;\n}\n\n#create-task {\n  padding: 12px 10px 13px;\n  vertical-align: middle;\n  border-radius: 0 3px 3px 0;\n}\n\n#task-list {\n  width: 95%;\n  margin: 0 auto 25px;\n}\n\n.task-wrap {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid #eeeeee;\n  border-radius: 3px;\n  padding: 12px;\n  margin: 7px auto;\n}\n.task-wrap span {\n  vertical-align: middle;\n}\n\n.mark-done {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0 5px 0 0;\n  height: 20px;\n  width: 20px;\n  border-radius: 50%;\n  border: 2px solid #00bb55;\n  cursor: pointer;\n}\n\n.task-status {\n  font-size: 12px;\n  text-transform: uppercase;\n  border-radius: 99px;\n  border: 1px solid #888888;\n  color: #888888;\n  padding: 3px 10px;\n  margin: 0 5px 0 0;\n  display: inline-block;\n}\n\n.done .mark-done {\n  background: #00bb55;\n}\n.done .task-title {\n  text-decoration: line-through;\n  font-style: italic;\n  color: #aaaaaa;\n}\n.done .task-status {\n  background: #888888;\n  color: #ffffff;\n}\n\n.task-links * {\n  vertical-align: middle;\n}\n\n#task-details-wrap {\n  width: 95%;\n  margin: 30px auto;\n}\n#task-details-wrap h4 {\n  margin-bottom: 3px;\n}\n\n.back-wrap {\n  border-bottom: 1px dashed #dddddd;\n  padding: 0 0 5px;\n  margin: 0 0 15px;\n}\n\n.details-field-wrap {\n  border: 1px solid #ffffff;\n  border-radius: 3px;\n  padding: 4px 0;\n}\n.details-field-wrap:hover {\n  padding: 4px 8px;\n  margin-left: -8px;\n  cursor: pointer;\n  border-color: #dddddd;\n}\n\n.edit-field {\n  display: none !important;\n  width: 100%;\n}\n\n.confirm-edit.btn, .confirm-edit.btn-border {\n  display: none;\n}\n\n.editing .edit-field {\n  display: block !important;\n}\n.editing .edit-target {\n  display: none !important;\n}\n.editing .confirm-edit.btn, .editing .confirm-edit.btn-border {\n  display: block;\n  margin: 5px 0 0;\n  float: right;\n}\n\n.task-details-title h2 {\n  margin: 0;\n}\n\n.task-details-description p {\n  margin: 0;\n}\n\n.task-details-status-wrap .task-status {\n  font-size: initial;\n  cursor: pointer;\n  opacity: 0.7;\n}\n.task-details-status-wrap .task-status.selected-status, .task-details-status-wrap .task-status:hover {\n  opacity: 1;\n}\n',""])},function(n,t){n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var e=function(n,t){var e=n[1]||"",r=n[3];if(!r)return e;if(t&&"function"==typeof btoa){var i=function(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}(r),a=r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"});return[e].concat(a).concat([i]).join("\n")}return[e].join("\n")}(t,n);return t[2]?"@media "+t[2]+"{"+e+"}":e}).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},i=0;i<this.length;i++){var a=this[i][0];"number"==typeof a&&(r[a]=!0)}for(i=0;i<n.length;i++){var o=n[i];"number"==typeof o[0]&&r[o[0]]||(e&&!o[2]?o[2]=e:e&&(o[2]="("+o[2]+") and ("+e+")"),t.push(o))}},t}},function(n,t,e){var r={},i=function(n){var t;return function(){return void 0===t&&(t=n.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),a=function(n){var t={};return function(n,e){if("function"==typeof n)return n();if(void 0===t[n]){var r=function(n,t){return t?t.querySelector(n):document.querySelector(n)}.call(this,n,e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}t[n]=r}return t[n]}}(),o=null,s=0,u=[],l=e(4);function c(n,t){for(var e=0;e<n.length;e++){var i=n[e],a=r[i.id];if(a){a.refs++;for(var o=0;o<a.parts.length;o++)a.parts[o](i.parts[o]);for(;o<i.parts.length;o++)a.parts.push(v(i.parts[o],t))}else{var s=[];for(o=0;o<i.parts.length;o++)s.push(v(i.parts[o],t));r[i.id]={id:i.id,refs:1,parts:s}}}}function d(n,t){for(var e=[],r={},i=0;i<n.length;i++){var a=n[i],o=t.base?a[0]+t.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};r[o]?r[o].parts.push(s):e.push(r[o]={id:o,parts:[s]})}return e}function f(n,t){var e=a(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===n.insertAt)r?r.nextSibling?e.insertBefore(t,r.nextSibling):e.appendChild(t):e.insertBefore(t,e.firstChild),u.push(t);else if("bottom"===n.insertAt)e.appendChild(t);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=a(n.insertAt.before,e);e.insertBefore(t,i)}}function p(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var t=u.indexOf(n);t>=0&&u.splice(t,1)}function h(n){var t=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var r=function(){0;return e.nc}();r&&(n.attrs.nonce=r)}return b(t,n.attrs),f(n,t),t}function b(n,t){Object.keys(t).forEach(function(e){n.setAttribute(e,t[e])})}function v(n,t){var e,r,i,a;if(t.transform&&n.css){if(!(a="function"==typeof t.transform?t.transform(n.css):t.transform.default(n.css)))return function(){};n.css=a}if(t.singleton){var u=s++;e=o||(o=h(t)),r=m.bind(null,e,u,!1),i=m.bind(null,e,u,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(n){var t=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",b(t,n.attrs),f(n,t),t}(t),r=function(n,t,e){var r=e.css,i=e.sourceMap,a=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||a)&&(r=l(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var o=new Blob([r],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(o),s&&URL.revokeObjectURL(s)}.bind(null,e,t),i=function(){p(e),e.href&&URL.revokeObjectURL(e.href)}):(e=h(t),r=function(n,t){var e=t.css,r=t.media;r&&n.setAttribute("media",r);if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}.bind(null,e),i=function(){p(e)});return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else i()}}n.exports=function(n,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var e=d(n,t);return c(e,t),function(n){for(var i=[],a=0;a<e.length;a++){var o=e[a];(s=r[o.id]).refs--,i.push(s)}n&&c(d(n,t),t);for(a=0;a<i.length;a++){var s;if(0===(s=i[a]).refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete r[s.id]}}}};var g=function(){var n=[];return function(t,e){return n[t]=e,n.filter(Boolean).join("\n")}}();function m(n,t,e,r){var i=e?"":r.css;if(n.styleSheet)n.styleSheet.cssText=g(t,i);else{var a=document.createTextNode(i),o=n.childNodes;o[t]&&n.removeChild(o[t]),o.length?n.insertBefore(a,o[t]):n.appendChild(a)}}},function(n,t){n.exports=function(n){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var e=t.protocol+"//"+t.host,r=e+t.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,t){var i,a=t.trim().replace(/^"(.*)"$/,function(n,t){return t}).replace(/^'(.*)'$/,function(n,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?n:(i=0===a.indexOf("//")?a:0===a.indexOf("/")?e+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(n,t,e){"use strict";e.r(t);e(0);function r(n,t,e){arguments.length>3&&void 0!==arguments[3]&&arguments[3];var r=document.createElement(n);if(t)for(var i in t){var a="className"===i?"class":i;r.setAttribute(a,t[i])}return"string"!=typeof e&&e?e.forEach(function(n){return r.appendChild(n)}):r.innerHTML=e||"",r}var i=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return r("header",{id:"header"},[r("div",{id:"logo"},"ToDos"),r("nav",{id:"site-nav"},[r("a",{href:"#/",className:"current"},"All"),r("a",{href:"#/active"},"Active"),r("a",{href:"#/unstarted"},"Unstarted"),r("a",{href:"#/ongoing"},"Ongoing"),r("a",{href:"#/revising"},"Revising"),r("a",{href:"#/done"},"Done")])])};function a(n){return function(n){if(Array.isArray(n)){for(var t=0,e=new Array(n.length);t<n.length;t++)e[t]=n[t];return e}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function o(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var s=function(){function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.hook=t,this.data=e,this.el=i(),this.render(),this.cacheDOM(),this.bindEvents(),this.handleClickNavLink=this.handleClickNavLink.bind(this)}return function(n,t,e){t&&o(n.prototype,t),e&&o(n,e)}(n,[{key:"cacheDOM",value:function(){this.DOM={navLink:this.el.querySelectorAll("#site-nav a")}}},{key:"bindEvents",value:function(){var n=this;a(this.DOM.navLink).forEach(function(t){t.addEventListener("click",function(t){return n.handleClickNavLink(t)})})}},{key:"render",value:function(){this.hook.appendChild(this.el)}},{key:"handleClickNavLink",value:function(n){this.data.pubsub.emit("route changed",n.target.href)}}]),n}(),u=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return r("div",{id:"task-creator"},[r("input",{type:"text",id:"task-input",placeholder:"Enter title..."}),r("button",{id:"create-task",className:"btn"},"Add Task")])};function l(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var c=function(){function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.hook=t,this.data=e,this.el=u(),this.render(),this.cacheDOM(),this.bindEvents(),this.submitForm=this.submitForm.bind(this)}return function(n,t,e){t&&l(n.prototype,t),e&&l(n,e)}(n,[{key:"cacheDOM",value:function(){this.DOM={taskInput:this.el.querySelector("#task-input"),taskButton:this.el.querySelector("#create-task")}}},{key:"bindEvents",value:function(){var n=this;this.DOM.taskButton.addEventListener("click",function(t){return n.submitForm(t)}),this.DOM.taskInput.addEventListener("keypress",function(t){return n.submitForm(t)})}},{key:"render",value:function(){this.hook.appendChild(this.el)}},{key:"submitForm",value:function(n){if("keypress"===n.type&&13!==n.which)return!1;this.data.pubsub.emit("new task",{title:this.DOM.taskInput.value,status:"unstarted",description:"no description"}),this.DOM.taskInput.value=""}}]),n}(),d=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r("article",{className:"task-wrap"},[r("div",{className:"task-title-wrap ".concat("done"===n.status?"done":null)},[r("span",{className:"mark-done"}),r("span",{className:"task-status"},n.status),r("span",{className:"task-title"},n.title)]),r("div",{className:"task-links"},[r("a",{href:"#",className:"btn task-details"},"Details"),r("span",{className:"delete-task btn-border"},"x")])])};function f(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var p=function(){function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.hook=t,this.data=e,this.el=d(this.data),this.render()}return function(n,t,e){t&&f(n.prototype,t),e&&f(n,e)}(n,[{key:"render",value:function(){this.hook.appendChild(this.el)}}]),n}();function h(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var b=function(){function n(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.hook=t,this.data=i,this.el=r("div",{id:"task-list"}),this.data.tasks=[{title:"Do a thing",status:"ongoing",description:"Descriptive description here."},{title:"Do a second thing",status:"revising",description:"Descriptive description here."},{title:"Do another thing",status:"done",description:"Descriptive description here."}],this.child=p,this.render(this.data.tasks),this.data.pubsub.on("new task",function(n){return e.handleNewTask(n)})}return function(n,t,e){t&&h(n.prototype,t),e&&h(n,e)}(n,[{key:"render",value:function(){var n=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!this.data.tasks||0===this.data.tasks.length)return this.el.innerHTML='<p style="text-align: center;">There are currently no tasks.</p>',void this.hook.appendChild(this.el);this.el.innerHTML="",t.forEach(function(t){return new n.child(n.el,t)}),this.hook.appendChild(this.el)}},{key:"handleNewTask",value:function(n){this.data.tasks.push(n),this.render(this.data.tasks)}}]),n}();function v(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var g=function(){function n(t,e){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.hook=t,this.data=e,this.el=r("main",{id:"body"}),this.children=[c,b],this.render(),this.data.pubsub.on("route changed",this.handleRouteChange),this.handleRouteChange=this.handleRouteChange.bind(this)}return function(n,t,e){t&&v(n.prototype,t),e&&v(n,e)}(n,[{key:"render",value:function(){var n=this;this.children.forEach(function(t){new t(n.el,{pubsub:n.data.pubsub})}),this.hook.appendChild(this.el)}},{key:"handleRouteChange",value:function(n){console.log("route: ",n)}}]),n}();function m(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var y=function(){function n(){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.events={}}return function(n,t,e){t&&m(n.prototype,t),e&&m(n,e)}(n,[{key:"on",value:function(n,t){this.events[n]=this.events[n]||[],this.events[n].push(t)}},{key:"emit",value:function(n,t){this.events[n].forEach(function(n){return n(t)})}}]),n}();function k(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}new(function(){function n(t){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.hook=t,this.pubsub=new y,this.el=r("div",{className:"content-wrap"}),this.children=[s,g],this.render()}return function(n,t,e){t&&k(n.prototype,t),e&&k(n,e)}(n,[{key:"render",value:function(){var n=this;this.children.forEach(function(t){return new t(n.el,{pubsub:n.pubsub})}),this.hook.appendChild(this.el)}}]),n}())(document.getElementById("app"))}]);