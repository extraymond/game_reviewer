parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Jugo":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.__wbindgen_closure_wrapper87=exports.__wbindgen_closure_wrapper85=exports.__wbindgen_closure_wrapper1072=exports.__wbindgen_closure_wrapper547=exports.__wbindgen_memory=exports.__wbindgen_throw=exports.__wbindgen_debug_string=exports.__wbg_set_a6eff7b20941127b=exports.__wbindgen_is_undefined=exports.__wbg_global_8efdae4f126ac8b4=exports.__wbg_window_db757fdea9443777=exports.__wbg_self_69a78003cf074413=exports.__wbg_globalThis_eb9027a878db64ad=exports.__wbg_then_bca69bfa503c3179=exports.__wbg_then_695aa7e1c262b929=exports.__wbg_resolve_a77ae6f272249390=exports.__wbg_new_4b4544fc91638f83=exports.__wbg_new_fe8db0c1c4a81234=exports.__wbg_newnoargs_4f6527054d7f1f1d=exports.__wbg_call_183c0b733b35a027=exports.__wbg_appendChild_9ff018e3b91d6e6b=exports.__wbg_name_f2a274cfa04afb8a=exports.__wbg_target_07126e2718b21906=exports.__wbg_files_66425c00b7a741fd=exports.__wbg_warn_65c62ab75bfa9a15=exports.__wbg_warn_675d883d869ab7b3=exports.__wbg_info_35137fc022966cc9=exports.__wbg_info_795a6c3061926e92=exports.__wbg_error_111a3edc7ff3d24a=exports.__wbg_error_e28c5fd045114457=exports.__wbg_debug_5f66f9576007da94=exports.__wbg_debug_bb79600e92e09204=exports.__wbg_innerHTML_c659da7951fd218f=exports.__wbg_id_58f3889821dba19c=exports.__wbg_play_4a38ad69b72a3af7=exports.__wbg_pause_085f4de95ce3d4d0=exports.__wbg_paused_45b40222c71a3034=exports.__wbg_currentTime_e23045c23b55c94a=exports.__wbg_currentTime_cf47599b74510e43=exports.__wbg_get_cb2af8513f4065ba=exports.__wbg_key_7bc040dd03933553=exports.__wbg_removeEventListener_bc884fbb2911bd7b=exports.__wbg_addEventListener_095450642c0bb293=exports.__wbg_createObjectURL_381e08cfead4a144=exports.__wbg_getElementById_87fd6611f51eaa51=exports.__wbg_createElement_d1b8191d1ca1103b=exports.__wbg_body_af08254bff460732=exports.__wbg_requestAnimationFrame_c1ca5bf33b036c59=exports.__wbg_document_f023a2b0d5b3d060=exports.__wbg_instanceof_Window_04bba8b54ef81db0=exports.__wbg_initEventsTrampoline_cf7bb7e86502a9dc=exports.__wbg_applyChanges_25b20264911bf1af=exports.__wbg_addChangeListRange_0d991173a03fc15c=exports.__wbg_unmount_50cf7e18a03f5914=exports.__wbg_new_5d8d0f7e7d6a14c0=exports.__wbg_error_4bb6c2a97407129a=exports.__wbg_stack_558ba5917b466edd=exports.__wbg_new_59cb74e423758ede=exports.__wbindgen_json_parse=exports.__wbindgen_string_new=exports.__wbindgen_object_clone_ref=exports.__wbindgen_object_drop_ref=exports.__wbindgen_cb_drop=exports.from_sw=exports.start=exports.default=void 0;var _=e(require("./pkg/game_reviewer_bg.wasm"));function e(_){return _&&_.__esModule?_:{default:_}}var b=_.default;exports.default=b;var a=_.default.start;exports.start=a;var r=_.default.from_sw;exports.from_sw=r;var t=_.default.__wbindgen_cb_drop;exports.__wbindgen_cb_drop=t;var d=_.default.__wbindgen_object_drop_ref;exports.__wbindgen_object_drop_ref=d;var f=_.default.__wbindgen_object_clone_ref;exports.__wbindgen_object_clone_ref=f;var w=_.default.__wbindgen_string_new;exports.__wbindgen_string_new=w;var g=_.default.__wbindgen_json_parse;exports.__wbindgen_json_parse=g;var o=_.default.__wbg_new_59cb74e423758ede;exports.__wbg_new_59cb74e423758ede=o;var n=_.default.__wbg_stack_558ba5917b466edd;exports.__wbg_stack_558ba5917b466edd=n;var s=_.default.__wbg_error_4bb6c2a97407129a;exports.__wbg_error_4bb6c2a97407129a=s;var p=_.default.__wbg_new_5d8d0f7e7d6a14c0;exports.__wbg_new_5d8d0f7e7d6a14c0=p;var c=_.default.__wbg_unmount_50cf7e18a03f5914;exports.__wbg_unmount_50cf7e18a03f5914=c;var x=_.default.__wbg_addChangeListRange_0d991173a03fc15c;exports.__wbg_addChangeListRange_0d991173a03fc15c=x;var l=_.default.__wbg_applyChanges_25b20264911bf1af;exports.__wbg_applyChanges_25b20264911bf1af=l;var u=_.default.__wbg_initEventsTrampoline_cf7bb7e86502a9dc;exports.__wbg_initEventsTrampoline_cf7bb7e86502a9dc=u;var i=_.default.__wbg_instanceof_Window_04bba8b54ef81db0;exports.__wbg_instanceof_Window_04bba8b54ef81db0=i;var v=_.default.__wbg_document_f023a2b0d5b3d060;exports.__wbg_document_f023a2b0d5b3d060=v;var m=_.default.__wbg_requestAnimationFrame_c1ca5bf33b036c59;exports.__wbg_requestAnimationFrame_c1ca5bf33b036c59=m;var h=_.default.__wbg_body_af08254bff460732;exports.__wbg_body_af08254bff460732=h;var y=_.default.__wbg_createElement_d1b8191d1ca1103b;exports.__wbg_createElement_d1b8191d1ca1103b=y;var E=_.default.__wbg_getElementById_87fd6611f51eaa51;exports.__wbg_getElementById_87fd6611f51eaa51=E;var L=_.default.__wbg_createObjectURL_381e08cfead4a144;exports.__wbg_createObjectURL_381e08cfead4a144=L;var T=_.default.__wbg_addEventListener_095450642c0bb293;exports.__wbg_addEventListener_095450642c0bb293=T;var j=_.default.__wbg_removeEventListener_bc884fbb2911bd7b;exports.__wbg_removeEventListener_bc884fbb2911bd7b=j;var C=_.default.__wbg_key_7bc040dd03933553;exports.__wbg_key_7bc040dd03933553=C;var k=_.default.__wbg_get_cb2af8513f4065ba;exports.__wbg_get_cb2af8513f4065ba=k;var R=_.default.__wbg_currentTime_cf47599b74510e43;exports.__wbg_currentTime_cf47599b74510e43=R;var M=_.default.__wbg_currentTime_e23045c23b55c94a;exports.__wbg_currentTime_e23045c23b55c94a=M;var q=_.default.__wbg_paused_45b40222c71a3034;exports.__wbg_paused_45b40222c71a3034=q;var O=_.default.__wbg_pause_085f4de95ce3d4d0;exports.__wbg_pause_085f4de95ce3d4d0=O;var A=_.default.__wbg_play_4a38ad69b72a3af7;exports.__wbg_play_4a38ad69b72a3af7=A;var B=_.default.__wbg_id_58f3889821dba19c;exports.__wbg_id_58f3889821dba19c=B;var F=_.default.__wbg_innerHTML_c659da7951fd218f;exports.__wbg_innerHTML_c659da7951fd218f=F;var H=_.default.__wbg_debug_bb79600e92e09204;exports.__wbg_debug_bb79600e92e09204=H;var I=_.default.__wbg_debug_5f66f9576007da94;exports.__wbg_debug_5f66f9576007da94=I;var U=_.default.__wbg_error_e28c5fd045114457;exports.__wbg_error_e28c5fd045114457=U;var W=_.default.__wbg_error_111a3edc7ff3d24a;exports.__wbg_error_111a3edc7ff3d24a=W;var P=_.default.__wbg_info_795a6c3061926e92;exports.__wbg_info_795a6c3061926e92=P;var z=_.default.__wbg_info_35137fc022966cc9;exports.__wbg_info_35137fc022966cc9=z;var D=_.default.__wbg_warn_675d883d869ab7b3;exports.__wbg_warn_675d883d869ab7b3=D;var G=_.default.__wbg_warn_65c62ab75bfa9a15;exports.__wbg_warn_65c62ab75bfa9a15=G;var J=_.default.__wbg_files_66425c00b7a741fd;exports.__wbg_files_66425c00b7a741fd=J;var K=_.default.__wbg_target_07126e2718b21906;exports.__wbg_target_07126e2718b21906=K;var N=_.default.__wbg_name_f2a274cfa04afb8a;exports.__wbg_name_f2a274cfa04afb8a=N;var Q=_.default.__wbg_appendChild_9ff018e3b91d6e6b;exports.__wbg_appendChild_9ff018e3b91d6e6b=Q;var S=_.default.__wbg_call_183c0b733b35a027;exports.__wbg_call_183c0b733b35a027=S;var V=_.default.__wbg_newnoargs_4f6527054d7f1f1d;exports.__wbg_newnoargs_4f6527054d7f1f1d=V;var X=_.default.__wbg_new_fe8db0c1c4a81234;exports.__wbg_new_fe8db0c1c4a81234=X;var Y=_.default.__wbg_new_4b4544fc91638f83;exports.__wbg_new_4b4544fc91638f83=Y;var Z=_.default.__wbg_resolve_a77ae6f272249390;exports.__wbg_resolve_a77ae6f272249390=Z;var $=_.default.__wbg_then_695aa7e1c262b929;exports.__wbg_then_695aa7e1c262b929=$;var __=_.default.__wbg_then_bca69bfa503c3179;exports.__wbg_then_bca69bfa503c3179=__;var e_=_.default.__wbg_globalThis_eb9027a878db64ad;exports.__wbg_globalThis_eb9027a878db64ad=e_;var b_=_.default.__wbg_self_69a78003cf074413;exports.__wbg_self_69a78003cf074413=b_;var a_=_.default.__wbg_window_db757fdea9443777;exports.__wbg_window_db757fdea9443777=a_;var r_=_.default.__wbg_global_8efdae4f126ac8b4;exports.__wbg_global_8efdae4f126ac8b4=r_;var t_=_.default.__wbindgen_is_undefined;exports.__wbindgen_is_undefined=t_;var d_=_.default.__wbg_set_a6eff7b20941127b;exports.__wbg_set_a6eff7b20941127b=d_;var f_=_.default.__wbindgen_debug_string;exports.__wbindgen_debug_string=f_;var w_=_.default.__wbindgen_throw;exports.__wbindgen_throw=w_;var g_=_.default.__wbindgen_memory;exports.__wbindgen_memory=g_;var o_=_.default.__wbindgen_closure_wrapper547;exports.__wbindgen_closure_wrapper547=o_;var n_=_.default.__wbindgen_closure_wrapper1072;exports.__wbindgen_closure_wrapper1072=n_;var s_=_.default.__wbindgen_closure_wrapper85;exports.__wbindgen_closure_wrapper85=s_;var p_=_.default.__wbindgen_closure_wrapper87;exports.__wbindgen_closure_wrapper87=p_;
},{"./pkg/game_reviewer_bg.wasm":"oV7I"}],"Ns04":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";var r=require("../Cargo.toml");require("bulma"),require("./style.scss"),(0,r.start)();
},{"../Cargo.toml":"Jugo","bulma":"Ns04","./style.scss":"Ns04"}],"i5mv":[function(require,module,exports) {
var t=null;function e(){return t||(t=n()),t}function n(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);if(t)return r(t[0])}return"/"}function r(t){return(""+t).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}exports.getBundleURL=e,exports.getBaseURL=r;
},{}],"pGd9":[function(require,module,exports) {
var r=require("./bundle-url").getBundleURL;function e(r){Array.isArray(r)||(r=[r]);var e=r[r.length-1];try{return Promise.resolve(require(e))}catch(n){if("MODULE_NOT_FOUND"===n.code)return new s(function(n,i){t(r.slice(0,-1)).then(function(){return require(e)}).then(n,i)});throw n}}function t(r){return Promise.all(r.map(u))}var n={};function i(r,e){n[r]=e}module.exports=exports=e,exports.load=t,exports.register=i;var o={};function u(e){var t;if(Array.isArray(e)&&(t=e[1],e=e[0]),o[e])return o[e];var i=(e.substring(e.lastIndexOf(".")+1,e.length)||e).toLowerCase(),u=n[i];return u?o[e]=u(r()+e).then(function(r){return r&&module.bundle.register(t,r),r}).catch(function(r){throw delete o[e],r}):void 0}function s(r){this.executor=r,this.promise=null}s.prototype.then=function(r,e){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.then(r,e)},s.prototype.catch=function(r){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.catch(r)};
},{"./bundle-url":"i5mv"}],"HXpU":[function(require,module,exports) {
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.ChangeListInterpreter=void 0;var r=new TextDecoder;function a(t){return t[t.length-1]}function i(t,e,n){var a=t.subarray(e,e+n);return r.decode(a)}var s=[function(t,e,n,r){var s=i(e,n[r++],n[r++]);return a(t.stack).textContent=s,r},function(t,e,n,r){for(var a=t.stack.pop(),i=a.nextSibling;i;){var s=i.nextSibling;i.remove(),i=s}return a.remove(),r},function(t,e,n,r){var a=t.stack.pop();return t.stack.pop().replaceWith(a),t.stack.push(a),r},function(t,e,n,r){var i=n[r++],s=n[r++],c=t.getCachedString(i),o=t.getCachedString(s),u=a(t.stack);return u.setAttribute(c,o),"value"===c&&(u.value=o),"checked"===c&&(u.checked=!0),"selected"===c&&(u.selected=!0),r},function(t,e,n,r){var i=n[r++],s=t.getCachedString(i),c=a(t.stack);return c.removeAttribute(s),"value"===s&&(c.value=null),"checked"===s&&(c.checked=!1),"selected"===s&&(c.selected=!1),r},function(t,e,n,r){var i=n[r++],s=a(t.stack).childNodes,c=s[s.length-i-1];return t.stack.push(c),r},function(t,e,n,r){var i=n[r++];t.stack.pop();var s=a(t.stack).childNodes[i];return t.stack.push(s),r},function(t,e,n,r){return t.stack.pop(),r},function(t,e,n,r){var i=t.stack.pop();return a(t.stack).appendChild(i),r},function(t,e,n,r){var a=i(e,n[r++],n[r++]);return t.stack.push(document.createTextNode(a)),r},function(t,e,n,r){var a=n[r++],i=t.getCachedString(a);return t.stack.push(document.createElement(i)),r},function(t,e,n,r){var i=n[r++],s=t.getCachedString(i),c=n[r++],o=n[r++],u=a(t.stack);return u.addEventListener(s,t.eventHandler),u["dodrio-a-".concat(s)]=c,u["dodrio-b-".concat(s)]=o,r},function(t,e,n,r){var i=n[r++],s=t.getCachedString(i),c=a(t.stack);return c["dodrio-a-".concat(s)]=n[r++],c["dodrio-b-".concat(s)]=n[r++],r},function(t,e,n,r){var i=n[r++],s=t.getCachedString(i);return a(t.stack).removeEventListener(s,t.eventHandler),r},function(t,e,n,r){var a=n[r++],s=n[r++],c=n[r++],o=i(e,a,s);return t.addCachedString(o,c),r},function(t,e,n,r){var a=n[r++];return t.dropCachedString(a),r},function(t,e,n,r){var a=n[r++],i=t.getCachedString(a),s=n[r++],c=t.getCachedString(s);return t.stack.push(document.createElementNS(c,i)),r},function(t,e,n,r){for(var i=n[r++],s=n[r++],c=n[r++],o=a(t.stack).childNodes,u=s;u<c;u++)t.temporaries[i++]=o[u];return r},function(t,e,n,r){var i=a(t.stack),s=n[r++],c=i.childNodes[s];return t.stack.push(c),r},function(t,e,n,r){var a=n[r++];return t.stack.push(t.temporaries[a]),r},function(t,e,n,r){var a=t.stack.pop(),i=t.stack.pop();return i.parentNode.insertBefore(a,i),t.stack.push(a),r},function(t,e,n,r){var i=n[r++];t.stack.pop();var s=a(t.stack).childNodes,c=s[s.length-i-1];return t.stack.push(c),r},function(t,e,n,r){var i=n[r++];return a(t.stack).childNodes[i].remove(),r},function(t,e,n,r){var i=n[r++],s=t.getCachedString(i);return a(t.stack).className=s,r},function(t,e,n,r){var i=n[r++],s=a(t.stack);return t.saveTemplate(i,s.cloneNode(!0)),r},function(t,e,n,r){var a=n[r++],i=t.getTemplate(a);return t.stack.push(i.cloneNode(!0)),r}],c=function(){function e(n){t(this,e),this.trampoline=null,this.container=n,this.ranges=[],this.stack=[],this.strings=new Map,this.temporaries=[],this.templates=new Map}return n(e,[{key:"unmount",value:function(){this.trampoline.mounted=!1,this.trampoline=null,this.container=null,this.ranges=null,this.stack=null,this.strings=null,this.temporaries=null,this.templates=null}},{key:"addChangeListRange",value:function(t,e){this.ranges.push(t),this.ranges.push(e)}},{key:"applyChanges",value:function(t){if(0!=this.ranges.length){this.stack.push(this.container.firstChild);for(var e=new Uint8Array(t.buffer),n=new Uint32Array(t.buffer),r=0;r<this.ranges.length;r+=2){var a=this.ranges[r],i=this.ranges[r+1];this.applyChangeRange(e,n,a,i)}this.ranges.length=0,this.stack.length=0,this.temporaries.length=0}}},{key:"applyChangeRange",value:function(t,e,n,r){for(var a=(n+r)/4,i=n/4;i<a;){var c=e[i++];i=s[c](this,t,e,i)}}},{key:"addCachedString",value:function(t,e){this.strings.set(e,t)}},{key:"dropCachedString",value:function(t){this.strings.delete(t)}},{key:"getCachedString",value:function(t){return this.strings.get(t)}},{key:"saveTemplate",value:function(t,e){this.templates.set(t,e)}},{key:"getTemplate",value:function(t){return this.templates.get(t)}},{key:"initEventsTrampoline",value:function(t){this.trampoline=t,t.mounted=!0,this.eventHandler=function(e){if(!t.mounted)throw new Error("invocation of listener after VDOM has been unmounted");var n=e.type,r=this["dodrio-a-".concat(n)],a=this["dodrio-b-".concat(n)];t(e,r,a)}}}]),e}();exports.ChangeListInterpreter=c;
},{}],"lOZi":[function(require,module,exports) {
module.exports=function(o){return o&&"object"==typeof o&&"function"==typeof o.copy&&"function"==typeof o.fill&&"function"==typeof o.readUInt8};
},{}],"QOI0":[function(require,module,exports) {
"function"==typeof Object.create?module.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:module.exports=function(t,e){t.super_=e;var o=function(){};o.prototype=e.prototype,t.prototype=new o,t.prototype.constructor=t};
},{}],"MsSf":[function(require,module,exports) {

var t,e,n=module.exports={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}function u(t){if(e===clearTimeout)return clearTimeout(t);if((e===o||!e)&&clearTimeout)return e=clearTimeout,clearTimeout(t);try{return e(t)}catch(n){try{return e.call(null,t)}catch(n){return e.call(this,t)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:r}catch(n){t=r}try{e="function"==typeof clearTimeout?clearTimeout:o}catch(n){e=o}}();var c,s=[],l=!1,a=-1;function f(){l&&c&&(l=!1,c.length?s=c.concat(s):a=-1,s.length&&h())}function h(){if(!l){var t=i(f);l=!0;for(var e=s.length;e;){for(c=s,s=[];++a<e;)c&&c[a].run();a=-1,e=s.length}c=null,l=!1,u(t)}}function m(t,e){this.fun=t,this.array=e}function p(){}n.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new m(t,e)),1!==s.length||l||i(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(t){return[]},n.binding=function(t){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(t){throw new Error("process.chdir is not supported")},n.umask=function(){return 0};
},{}],"aras":[function(require,module,exports) {
var process = require("process");
var e=require("process"),t=Object.getOwnPropertyDescriptors||function(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++)r[t[n]]=Object.getOwnPropertyDescriptor(e,t[n]);return r},r=/%[sdj%]/g;exports.format=function(e){if(!v(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(i(arguments[n]));return t.join(" ")}n=1;for(var o=arguments,u=o.length,s=String(e).replace(r,function(e){if("%%"===e)return"%";if(n>=u)return e;switch(e){case"%s":return String(o[n++]);case"%d":return Number(o[n++]);case"%j":try{return JSON.stringify(o[n++])}catch(t){return"[Circular]"}default:return e}}),c=o[n];n<u;c=o[++n])h(c)||!S(c)?s+=" "+c:s+=" "+i(c);return s},exports.deprecate=function(t,r){if(void 0!==e&&!0===e.noDeprecation)return t;if(void 0===e)return function(){return exports.deprecate(t,r).apply(this,arguments)};var n=!1;return function(){if(!n){if(e.throwDeprecation)throw new Error(r);e.traceDeprecation?console.trace(r):console.error(r),n=!0}return t.apply(this,arguments)}};var n,o={};function i(e,t){var r={seen:[],stylize:s};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),b(t)?r.showHidden=t:t&&exports._extend(r,t),j(r.showHidden)&&(r.showHidden=!1),j(r.depth)&&(r.depth=2),j(r.colors)&&(r.colors=!1),j(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=u),p(r,e,r.depth)}function u(e,t){var r=i.styles[t];return r?"["+i.colors[r][0]+"m"+e+"["+i.colors[r][1]+"m":e}function s(e,t){return e}function c(e){var t={};return e.forEach(function(e,r){t[e]=!0}),t}function p(e,t,r){if(e.customInspect&&t&&P(t.inspect)&&t.inspect!==exports.inspect&&(!t.constructor||t.constructor.prototype!==t)){var n=t.inspect(r,e);return v(n)||(n=p(e,n,r)),n}var o=l(e,t);if(o)return o;var i=Object.keys(t),u=c(i);if(e.showHidden&&(i=Object.getOwnPropertyNames(t)),E(t)&&(i.indexOf("message")>=0||i.indexOf("description")>=0))return f(t);if(0===i.length){if(P(t)){var s=t.name?": "+t.name:"";return e.stylize("[Function"+s+"]","special")}if(w(t))return e.stylize(RegExp.prototype.toString.call(t),"regexp");if(z(t))return e.stylize(Date.prototype.toString.call(t),"date");if(E(t))return f(t)}var b,h="",m=!1,x=["{","}"];(d(t)&&(m=!0,x=["[","]"]),P(t))&&(h=" [Function"+(t.name?": "+t.name:"")+"]");return w(t)&&(h=" "+RegExp.prototype.toString.call(t)),z(t)&&(h=" "+Date.prototype.toUTCString.call(t)),E(t)&&(h=" "+f(t)),0!==i.length||m&&0!=t.length?r<0?w(t)?e.stylize(RegExp.prototype.toString.call(t),"regexp"):e.stylize("[Object]","special"):(e.seen.push(t),b=m?a(e,t,r,u,i):i.map(function(n){return y(e,t,r,u,n,m)}),e.seen.pop(),g(b,h,x)):x[0]+h+x[1]}function l(e,t){if(j(t))return e.stylize("undefined","undefined");if(v(t)){var r="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(r,"string")}return x(t)?e.stylize(""+t,"number"):b(t)?e.stylize(""+t,"boolean"):h(t)?e.stylize("null","null"):void 0}function f(e){return"["+Error.prototype.toString.call(e)+"]"}function a(e,t,r,n,o){for(var i=[],u=0,s=t.length;u<s;++u)A(t,String(u))?i.push(y(e,t,r,n,String(u),!0)):i.push("");return o.forEach(function(o){o.match(/^\d+$/)||i.push(y(e,t,r,n,o,!0))}),i}function y(e,t,r,n,o,i){var u,s,c;if((c=Object.getOwnPropertyDescriptor(t,o)||{value:t[o]}).get?s=c.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):c.set&&(s=e.stylize("[Setter]","special")),A(n,o)||(u="["+o+"]"),s||(e.seen.indexOf(c.value)<0?(s=h(r)?p(e,c.value,null):p(e,c.value,r-1)).indexOf("\n")>-1&&(s=i?s.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+s.split("\n").map(function(e){return"   "+e}).join("\n")):s=e.stylize("[Circular]","special")),j(u)){if(i&&o.match(/^\d+$/))return s;(u=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(u=u.substr(1,u.length-2),u=e.stylize(u,"name")):(u=u.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),u=e.stylize(u,"string"))}return u+": "+s}function g(e,t,r){return e.reduce(function(e,t){return 0,t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60?r[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+r[1]:r[0]+t+" "+e.join(", ")+" "+r[1]}function d(e){return Array.isArray(e)}function b(e){return"boolean"==typeof e}function h(e){return null===e}function m(e){return null==e}function x(e){return"number"==typeof e}function v(e){return"string"==typeof e}function O(e){return"symbol"==typeof e}function j(e){return void 0===e}function w(e){return S(e)&&"[object RegExp]"===T(e)}function S(e){return"object"==typeof e&&null!==e}function z(e){return S(e)&&"[object Date]"===T(e)}function E(e){return S(e)&&("[object Error]"===T(e)||e instanceof Error)}function P(e){return"function"==typeof e}function D(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e}function T(e){return Object.prototype.toString.call(e)}function N(e){return e<10?"0"+e.toString(10):e.toString(10)}exports.debuglog=function(t){if(j(n)&&(n=""),t=t.toUpperCase(),!o[t])if(new RegExp("\\b"+t+"\\b","i").test(n)){var r=e.pid;o[t]=function(){var e=exports.format.apply(exports,arguments);console.error("%s %d: %s",t,r,e)}}else o[t]=function(){};return o[t]},exports.inspect=i,i.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},i.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},exports.isArray=d,exports.isBoolean=b,exports.isNull=h,exports.isNullOrUndefined=m,exports.isNumber=x,exports.isString=v,exports.isSymbol=O,exports.isUndefined=j,exports.isRegExp=w,exports.isObject=S,exports.isDate=z,exports.isError=E,exports.isFunction=P,exports.isPrimitive=D,exports.isBuffer=require("./support/isBuffer");var F=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function k(){var e=new Date,t=[N(e.getHours()),N(e.getMinutes()),N(e.getSeconds())].join(":");return[e.getDate(),F[e.getMonth()],t].join(" ")}function A(e,t){return Object.prototype.hasOwnProperty.call(e,t)}exports.log=function(){console.log("%s - %s",k(),exports.format.apply(exports,arguments))},exports.inherits=require("inherits"),exports._extend=function(e,t){if(!t||!S(t))return e;for(var r=Object.keys(t),n=r.length;n--;)e[r[n]]=t[r[n]];return e};var J="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function R(e,t){if(!e){var r=new Error("Promise was rejected with a falsy value");r.reason=e,e=r}return t(e)}function H(r){if("function"!=typeof r)throw new TypeError('The "original" argument must be of type Function');function n(){for(var t=[],n=0;n<arguments.length;n++)t.push(arguments[n]);var o=t.pop();if("function"!=typeof o)throw new TypeError("The last argument must be of type Function");var i=this,u=function(){return o.apply(i,arguments)};r.apply(this,t).then(function(t){e.nextTick(u,null,t)},function(t){e.nextTick(R,t,u)})}return Object.setPrototypeOf(n,Object.getPrototypeOf(r)),Object.defineProperties(n,t(r)),n}exports.promisify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');if(J&&e[J]){var r;if("function"!=typeof(r=e[J]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(r,J,{value:r,enumerable:!1,writable:!1,configurable:!0}),r}function r(){for(var t,r,n=new Promise(function(e,n){t=e,r=n}),o=[],i=0;i<arguments.length;i++)o.push(arguments[i]);o.push(function(e,n){e?r(e):t(n)});try{e.apply(this,o)}catch(u){r(u)}return n}return Object.setPrototypeOf(r,Object.getPrototypeOf(e)),J&&Object.defineProperty(r,J,{value:r,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(r,t(e))},exports.promisify.custom=J,exports.callbackify=H;
},{"./support/isBuffer":"lOZi","inherits":"QOI0","process":"MsSf"}],"fISM":[function(require,module,exports) {
var global = arguments[3];
var __dirname = "/mnt/storages/git/game_reviewer/node_modules/parcel-plugin-wasm.rs";
var n,e=arguments[3],_="/mnt/storages/git/game_reviewer/node_modules/parcel-plugin-wasm.rs",t=require("../../pkg/snippets/dodrio-fb10e775fcadd85a/js/change-list-interpreter.js");const r={},c=new Array(32).fill(void 0);function o(n){return c[n]}c.push(void 0,null,!0,!1);let i=c.length;function u(n){n<36||(c[n]=i,i=n)}function a(n){const e=o(n);return u(n),e}function f(n){i===c.length&&c.push(c.length+1);const e=i;return i=c[e],c[e]=n,e}const b="undefined"==typeof TextDecoder?require("util").TextDecoder:TextDecoder;let s=new b("utf-8",{ignoreBOM:!0,fatal:!0});s.decode();let l=null;function d(){return null!==l&&l.buffer===n.memory.buffer||(l=new Uint8Array(n.memory.buffer)),l}function g(n,e){return s.decode(d().subarray(n,n+e))}function w(n){const e=typeof n;if("number"==e||"boolean"==e||null==n)return`${n}`;if("string"==e)return`"${n}"`;if("symbol"==e){const e=n.description;return null==e?"Symbol":`Symbol(${e})`}if("function"==e){const e=n.name;return"string"==typeof e&&e.length>0?`Function(${e})`:"Function"}if(Array.isArray(n)){const e=n.length;let _="[";e>0&&(_+=w(n[0]));for(let t=1;t<e;t++)_+=", "+w(n[t]);return _+="]"}const _=/\[object ([^\]]+)\]/.exec(toString.call(n));let t;if(!(_.length>1))return toString.call(n);if("Object"==(t=_[1]))try{return"Object("+JSON.stringify(n)+")"}catch(r){return"Object"}return n instanceof Error?`${n.name}: ${n.message}\n${n.stack}`:t}let m=0;const y="undefined"==typeof TextEncoder?require("util").TextEncoder:TextEncoder;let h=new y("utf-8");const p="function"==typeof h.encodeInto?function(n,e){return h.encodeInto(n,e)}:function(n,e){const _=h.encode(n);return e.set(_),{read:n.length,written:_.length}};function v(n,e,_){if(void 0===_){const _=h.encode(n),t=e(_.length);return d().subarray(t,t+_.length).set(_),m=_.length,t}let t=n.length,r=e(t);const c=d();let o=0;for(;o<t;o++){const e=n.charCodeAt(o);if(e>127)break;c[r+o]=e}if(o!==t){0!==o&&(n=n.slice(o)),r=_(r,t,t=o+3*n.length);const e=d().subarray(r+o,r+t);o+=p(n,e).written}return m=o,r}let E=null;function T(){return null!==E&&E.buffer===n.memory.buffer||(E=new Int32Array(n.memory.buffer)),E}function j(e,_,t,r){const c={a:e,b:_,cnt:1},o=(...e)=>{c.cnt++;try{return r(c.a,c.b,...e)}finally{0==--c.cnt&&(n.__wbindgen_export_2.get(t)(c.a,c.b),c.a=0)}};return o.original=c,o}function A(e,_,t,r,c){n._dyn_core__ops__function__Fn__A__B__C___Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__haaaa8423294e2437(e,_,f(t),r,c)}function O(e,_,t,r){const c={a:e,b:_,cnt:1},o=(...e)=>{c.cnt++;const _=c.a;c.a=0;try{return r(_,c.b,...e)}finally{0==--c.cnt?n.__wbindgen_export_2.get(t)(_,c.b):c.a=_}};return o.original=c,o}let k=32;function x(n){if(1==k)throw new Error("out of js stack");return c[--k]=n,k}function C(e,_,t){try{n._dyn_core__ops__function__FnMut___A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hfade94b456af4f48(e,_,x(t))}finally{c[k++]=void 0}}function L(e,_,t){n._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h68b0e404f9c0638e(e,_,f(t))}function F(e,_){n._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hf548bcb295c725d7(e,_)}function R(n){return null==n}function W(e){n.__wbindgen_exn_store(f(e))}function S(e,_,t,r){n.wasm_bindgen__convert__closures__invoke2_mut__h011d01528865487b(e,_,f(t),f(r))}function $(e){const _=fetch(e);let t;return(t="function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(_,{"./game_reviewer.js":r}):_.then(n=>n.arrayBuffer()).then(n=>WebAssembly.instantiate(n,{"./game_reviewer.js":r}))).then(({instance:e})=>{n=$.wasm=e.exports,r.wasm=n})}function q(e){const t=require("fs");return new Promise(function(n,r){t.readFile(_+e,function(e,_){e?r(e):n(_.buffer)})}).then(n=>WebAssembly.instantiate(n,{"./game_reviewer":r})).then(({instance:e})=>{n=$.wasm=e.exports,r.wasm=n})}r.start=function(){n.start()},r.from_sw=function(){n.from_sw()},r.__wbindgen_cb_drop=function(n){const e=a(n).original;if(1==e.cnt--)return e.a=0,!0;return!1},r.__wbindgen_object_drop_ref=function(n){a(n)},r.__wbindgen_object_clone_ref=function(n){return f(o(n))},r.__wbindgen_string_new=function(n,e){return f(g(n,e))},r.__wbindgen_json_parse=function(n,e){return f(JSON.parse(g(n,e)))},r.__wbg_new_59cb74e423758ede=function(){return f(new Error)},r.__wbg_stack_558ba5917b466edd=function(e,_){var t=v(o(_).stack,n.__wbindgen_malloc,n.__wbindgen_realloc),r=m;T()[e/4+1]=r,T()[e/4+0]=t},r.__wbg_error_4bb6c2a97407129a=function(e,_){try{console.error(g(e,_))}finally{n.__wbindgen_free(e,_)}},r.__wbg_new_5d8d0f7e7d6a14c0=function(n){return f(new t.ChangeListInterpreter(o(n)))},r.__wbg_unmount_50cf7e18a03f5914=function(n){o(n).unmount()},r.__wbg_addChangeListRange_0d991173a03fc15c=function(n,e,_){o(n).addChangeListRange(e>>>0,_>>>0)},r.__wbg_applyChanges_25b20264911bf1af=function(n,e){o(n).applyChanges(a(e))},r.__wbg_initEventsTrampoline_cf7bb7e86502a9dc=function(n,e){o(n).initEventsTrampoline(o(e))},r.__wbg_instanceof_Window_04bba8b54ef81db0=function(n){return o(n)instanceof Window},r.__wbg_document_f023a2b0d5b3d060=function(n){var e=o(n).document;return R(e)?0:f(e)},r.__wbg_requestAnimationFrame_c1ca5bf33b036c59=function(n,e){try{return o(n).requestAnimationFrame(o(e))}catch(_){W(_)}},r.__wbg_body_af08254bff460732=function(n){var e=o(n).body;return R(e)?0:f(e)},r.__wbg_createElement_d1b8191d1ca1103b=function(n,e,_){try{return f(o(n).createElement(g(e,_)))}catch(t){W(t)}},r.__wbg_getElementById_87fd6611f51eaa51=function(n,e,_){var t=o(n).getElementById(g(e,_));return R(t)?0:f(t)},r.__wbg_createObjectURL_381e08cfead4a144=function(e,_){try{var t=v(URL.createObjectURL(o(_)),n.__wbindgen_malloc,n.__wbindgen_realloc),r=m;T()[e/4+1]=r,T()[e/4+0]=t}catch(c){W(c)}},r.__wbg_addEventListener_095450642c0bb293=function(n,e,_,t,r){try{o(n).addEventListener(g(e,_),o(t),o(r))}catch(c){W(c)}},r.__wbg_removeEventListener_bc884fbb2911bd7b=function(n,e,_,t,r){try{o(n).removeEventListener(g(e,_),o(t),0!==r)}catch(c){W(c)}},r.__wbg_key_7bc040dd03933553=function(e,_){var t=v(o(_).key,n.__wbindgen_malloc,n.__wbindgen_realloc),r=m;T()[e/4+1]=r,T()[e/4+0]=t},r.__wbg_get_cb2af8513f4065ba=function(n,e){var _=o(n)[e>>>0];return R(_)?0:f(_)},r.__wbg_currentTime_cf47599b74510e43=function(n){return o(n).currentTime},r.__wbg_currentTime_e23045c23b55c94a=function(n,e){o(n).currentTime=e},r.__wbg_paused_45b40222c71a3034=function(n){return o(n).paused},r.__wbg_pause_085f4de95ce3d4d0=function(n){try{o(n).pause()}catch(e){W(e)}},r.__wbg_play_4a38ad69b72a3af7=function(n){try{return f(o(n).play())}catch(e){W(e)}},r.__wbg_id_58f3889821dba19c=function(n,e,_){o(n).id=g(e,_)},r.__wbg_innerHTML_c659da7951fd218f=function(n,e,_){o(n).innerHTML=g(e,_)},r.__wbg_debug_bb79600e92e09204=function(n,e){console.debug(o(n),o(e))},r.__wbg_debug_5f66f9576007da94=function(n,e,_){console.debug(o(n),o(e),o(_))},r.__wbg_error_e28c5fd045114457=function(n,e){console.error(o(n),o(e))},r.__wbg_error_111a3edc7ff3d24a=function(n,e,_){console.error(o(n),o(e),o(_))},r.__wbg_info_795a6c3061926e92=function(n,e){console.info(o(n),o(e))},r.__wbg_info_35137fc022966cc9=function(n,e,_){console.info(o(n),o(e),o(_))},r.__wbg_warn_675d883d869ab7b3=function(n,e){console.warn(o(n),o(e))},r.__wbg_warn_65c62ab75bfa9a15=function(n,e,_){console.warn(o(n),o(e),o(_))},r.__wbg_files_66425c00b7a741fd=function(n){var e=o(n).files;return R(e)?0:f(e)},r.__wbg_target_07126e2718b21906=function(n){var e=o(n).target;return R(e)?0:f(e)},r.__wbg_name_f2a274cfa04afb8a=function(e,_){var t=v(o(_).name,n.__wbindgen_malloc,n.__wbindgen_realloc),r=m;T()[e/4+1]=r,T()[e/4+0]=t},r.__wbg_appendChild_9ff018e3b91d6e6b=function(n,e){try{return f(o(n).appendChild(o(e)))}catch(_){W(_)}},r.__wbg_call_183c0b733b35a027=function(n,e){try{return f(o(n).call(o(e)))}catch(_){W(_)}},r.__wbg_newnoargs_4f6527054d7f1f1d=function(n,e){return f(new Function(g(n,e)))},r.__wbg_new_fe8db0c1c4a81234=function(){return f(new Object)},r.__wbg_new_4b4544fc91638f83=function(n,e){try{var _={a:n,b:e};return f(new Promise((n,e)=>{const t=_.a;_.a=0;try{return S(t,_.b,n,e)}finally{_.a=t}}))}finally{_.a=_.b=0}},r.__wbg_resolve_a77ae6f272249390=function(n){return f(Promise.resolve(o(n)))},r.__wbg_then_695aa7e1c262b929=function(n,e){return f(o(n).then(o(e)))},r.__wbg_then_bca69bfa503c3179=function(n,e,_){return f(o(n).then(o(e),o(_)))},r.__wbg_globalThis_eb9027a878db64ad=function(){try{return f(globalThis.globalThis)}catch(n){W(n)}},r.__wbg_self_69a78003cf074413=function(){try{return f(self.self)}catch(n){W(n)}},r.__wbg_window_db757fdea9443777=function(){try{return f(window.window)}catch(n){W(n)}},r.__wbg_global_8efdae4f126ac8b4=function(){try{return f(e.global)}catch(n){W(n)}},r.__wbindgen_is_undefined=function(n){return void 0===o(n)},r.__wbg_set_a6eff7b20941127b=function(n,e,_){try{return Reflect.set(o(n),o(e),o(_))}catch(t){W(t)}},r.__wbindgen_debug_string=function(e,_){var t=v(w(o(_)),n.__wbindgen_malloc,n.__wbindgen_realloc),r=m;T()[e/4+1]=r,T()[e/4+0]=t},r.__wbindgen_throw=function(n,e){throw new Error(g(n,e))},r.__wbindgen_memory=function(){return f(n.memory)},r.__wbindgen_closure_wrapper547=function(n,e,_){return f(j(n,e,217,A))},r.__wbindgen_closure_wrapper1072=function(n,e,_){return f(O(n,e,222,L))},r.__wbindgen_closure_wrapper85=function(n,e,_){return f(O(n,e,3,C))},r.__wbindgen_closure_wrapper87=function(n,e,_){return f(O(n,e,3,F))};const I=Object.assign($,r);module.exports=function(n){return I(n).then(()=>r)};
},{"../../pkg/snippets/dodrio-fb10e775fcadd85a/js/change-list-interpreter.js":"HXpU","util":"aras","fs":"Ns04"}],0:[function(require,module,exports) {
var b=require("pGd9");b.register("wasm",require("fISM"));b.load([["game_reviewer_bg.cd7468de.wasm","oV7I"]]).then(function(){require("Focm");});
},{}]},{},[0], null)
//# sourceMappingURL=/static.40af5fc6.js.map