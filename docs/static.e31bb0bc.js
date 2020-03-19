// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../Cargo.toml":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__wbindgen_closure_wrapper672 = exports.__wbindgen_closure_wrapper9618 = exports.__wbindgen_closure_wrapper6924 = exports.__wbindgen_closure_wrapper6922 = exports.__wbindgen_memory = exports.__wbindgen_throw = exports.__wbindgen_debug_string = exports.__wbg_set_a6eff7b20941127b = exports.__wbindgen_is_undefined = exports.__wbg_global_8efdae4f126ac8b4 = exports.__wbg_window_db757fdea9443777 = exports.__wbg_self_69a78003cf074413 = exports.__wbg_globalThis_eb9027a878db64ad = exports.__wbg_then_bca69bfa503c3179 = exports.__wbg_then_695aa7e1c262b929 = exports.__wbg_resolve_a77ae6f272249390 = exports.__wbg_new_4b4544fc91638f83 = exports.__wbg_new_fe8db0c1c4a81234 = exports.__wbg_call_183c0b733b35a027 = exports.__wbg_newnoargs_4f6527054d7f1f1d = exports.__wbg_appendChild_9ff018e3b91d6e6b = exports.__wbg_name_f2a274cfa04afb8a = exports.__wbg_target_07126e2718b21906 = exports.__wbg_files_66425c00b7a741fd = exports.__wbg_warn_65c62ab75bfa9a15 = exports.__wbg_warn_675d883d869ab7b3 = exports.__wbg_info_35137fc022966cc9 = exports.__wbg_info_795a6c3061926e92 = exports.__wbg_error_111a3edc7ff3d24a = exports.__wbg_error_e28c5fd045114457 = exports.__wbg_debug_5f66f9576007da94 = exports.__wbg_debug_bb79600e92e09204 = exports.__wbg_innerHTML_c659da7951fd218f = exports.__wbg_id_58f3889821dba19c = exports.__wbg_play_4a38ad69b72a3af7 = exports.__wbg_pause_085f4de95ce3d4d0 = exports.__wbg_paused_45b40222c71a3034 = exports.__wbg_currentTime_e23045c23b55c94a = exports.__wbg_currentTime_cf47599b74510e43 = exports.__wbg_removeEventListener_bc884fbb2911bd7b = exports.__wbg_addEventListener_095450642c0bb293 = exports.__wbg_key_7bc040dd03933553 = exports.__wbg_get_cb2af8513f4065ba = exports.__wbg_createObjectURL_381e08cfead4a144 = exports.__wbg_getElementById_87fd6611f51eaa51 = exports.__wbg_createElement_d1b8191d1ca1103b = exports.__wbg_body_af08254bff460732 = exports.__wbg_requestAnimationFrame_c1ca5bf33b036c59 = exports.__wbg_document_f023a2b0d5b3d060 = exports.__wbg_instanceof_Window_04bba8b54ef81db0 = exports.__wbg_initEventsTrampoline_cf7bb7e86502a9dc = exports.__wbg_applyChanges_25b20264911bf1af = exports.__wbg_addChangeListRange_0d991173a03fc15c = exports.__wbg_unmount_50cf7e18a03f5914 = exports.__wbg_new_5d8d0f7e7d6a14c0 = exports.__wbindgen_object_drop_ref = exports.__wbg_stack_558ba5917b466edd = exports.__wbg_new_59cb74e423758ede = exports.__wbg_error_4bb6c2a97407129a = exports.__wbindgen_string_new = exports.__wbindgen_json_parse = exports.__wbindgen_object_clone_ref = exports.__wbindgen_cb_drop = exports.from_sw = exports.start = exports.default = void 0;

var _game_reviewer_bg = _interopRequireDefault(require("./pkg/game_reviewer_bg.wasm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _game_reviewer_bg.default;
exports.default = _default;
var start = _game_reviewer_bg.default.start;
exports.start = start;
var from_sw = _game_reviewer_bg.default.from_sw;
exports.from_sw = from_sw;
var __wbindgen_cb_drop = _game_reviewer_bg.default.__wbindgen_cb_drop;
exports.__wbindgen_cb_drop = __wbindgen_cb_drop;
var __wbindgen_object_clone_ref = _game_reviewer_bg.default.__wbindgen_object_clone_ref;
exports.__wbindgen_object_clone_ref = __wbindgen_object_clone_ref;
var __wbindgen_json_parse = _game_reviewer_bg.default.__wbindgen_json_parse;
exports.__wbindgen_json_parse = __wbindgen_json_parse;
var __wbindgen_string_new = _game_reviewer_bg.default.__wbindgen_string_new;
exports.__wbindgen_string_new = __wbindgen_string_new;
var __wbg_error_4bb6c2a97407129a = _game_reviewer_bg.default.__wbg_error_4bb6c2a97407129a;
exports.__wbg_error_4bb6c2a97407129a = __wbg_error_4bb6c2a97407129a;
var __wbg_new_59cb74e423758ede = _game_reviewer_bg.default.__wbg_new_59cb74e423758ede;
exports.__wbg_new_59cb74e423758ede = __wbg_new_59cb74e423758ede;
var __wbg_stack_558ba5917b466edd = _game_reviewer_bg.default.__wbg_stack_558ba5917b466edd;
exports.__wbg_stack_558ba5917b466edd = __wbg_stack_558ba5917b466edd;
var __wbindgen_object_drop_ref = _game_reviewer_bg.default.__wbindgen_object_drop_ref;
exports.__wbindgen_object_drop_ref = __wbindgen_object_drop_ref;
var __wbg_new_5d8d0f7e7d6a14c0 = _game_reviewer_bg.default.__wbg_new_5d8d0f7e7d6a14c0;
exports.__wbg_new_5d8d0f7e7d6a14c0 = __wbg_new_5d8d0f7e7d6a14c0;
var __wbg_unmount_50cf7e18a03f5914 = _game_reviewer_bg.default.__wbg_unmount_50cf7e18a03f5914;
exports.__wbg_unmount_50cf7e18a03f5914 = __wbg_unmount_50cf7e18a03f5914;
var __wbg_addChangeListRange_0d991173a03fc15c = _game_reviewer_bg.default.__wbg_addChangeListRange_0d991173a03fc15c;
exports.__wbg_addChangeListRange_0d991173a03fc15c = __wbg_addChangeListRange_0d991173a03fc15c;
var __wbg_applyChanges_25b20264911bf1af = _game_reviewer_bg.default.__wbg_applyChanges_25b20264911bf1af;
exports.__wbg_applyChanges_25b20264911bf1af = __wbg_applyChanges_25b20264911bf1af;
var __wbg_initEventsTrampoline_cf7bb7e86502a9dc = _game_reviewer_bg.default.__wbg_initEventsTrampoline_cf7bb7e86502a9dc;
exports.__wbg_initEventsTrampoline_cf7bb7e86502a9dc = __wbg_initEventsTrampoline_cf7bb7e86502a9dc;
var __wbg_instanceof_Window_04bba8b54ef81db0 = _game_reviewer_bg.default.__wbg_instanceof_Window_04bba8b54ef81db0;
exports.__wbg_instanceof_Window_04bba8b54ef81db0 = __wbg_instanceof_Window_04bba8b54ef81db0;
var __wbg_document_f023a2b0d5b3d060 = _game_reviewer_bg.default.__wbg_document_f023a2b0d5b3d060;
exports.__wbg_document_f023a2b0d5b3d060 = __wbg_document_f023a2b0d5b3d060;
var __wbg_requestAnimationFrame_c1ca5bf33b036c59 = _game_reviewer_bg.default.__wbg_requestAnimationFrame_c1ca5bf33b036c59;
exports.__wbg_requestAnimationFrame_c1ca5bf33b036c59 = __wbg_requestAnimationFrame_c1ca5bf33b036c59;
var __wbg_body_af08254bff460732 = _game_reviewer_bg.default.__wbg_body_af08254bff460732;
exports.__wbg_body_af08254bff460732 = __wbg_body_af08254bff460732;
var __wbg_createElement_d1b8191d1ca1103b = _game_reviewer_bg.default.__wbg_createElement_d1b8191d1ca1103b;
exports.__wbg_createElement_d1b8191d1ca1103b = __wbg_createElement_d1b8191d1ca1103b;
var __wbg_getElementById_87fd6611f51eaa51 = _game_reviewer_bg.default.__wbg_getElementById_87fd6611f51eaa51;
exports.__wbg_getElementById_87fd6611f51eaa51 = __wbg_getElementById_87fd6611f51eaa51;
var __wbg_createObjectURL_381e08cfead4a144 = _game_reviewer_bg.default.__wbg_createObjectURL_381e08cfead4a144;
exports.__wbg_createObjectURL_381e08cfead4a144 = __wbg_createObjectURL_381e08cfead4a144;
var __wbg_get_cb2af8513f4065ba = _game_reviewer_bg.default.__wbg_get_cb2af8513f4065ba;
exports.__wbg_get_cb2af8513f4065ba = __wbg_get_cb2af8513f4065ba;
var __wbg_key_7bc040dd03933553 = _game_reviewer_bg.default.__wbg_key_7bc040dd03933553;
exports.__wbg_key_7bc040dd03933553 = __wbg_key_7bc040dd03933553;
var __wbg_addEventListener_095450642c0bb293 = _game_reviewer_bg.default.__wbg_addEventListener_095450642c0bb293;
exports.__wbg_addEventListener_095450642c0bb293 = __wbg_addEventListener_095450642c0bb293;
var __wbg_removeEventListener_bc884fbb2911bd7b = _game_reviewer_bg.default.__wbg_removeEventListener_bc884fbb2911bd7b;
exports.__wbg_removeEventListener_bc884fbb2911bd7b = __wbg_removeEventListener_bc884fbb2911bd7b;
var __wbg_currentTime_cf47599b74510e43 = _game_reviewer_bg.default.__wbg_currentTime_cf47599b74510e43;
exports.__wbg_currentTime_cf47599b74510e43 = __wbg_currentTime_cf47599b74510e43;
var __wbg_currentTime_e23045c23b55c94a = _game_reviewer_bg.default.__wbg_currentTime_e23045c23b55c94a;
exports.__wbg_currentTime_e23045c23b55c94a = __wbg_currentTime_e23045c23b55c94a;
var __wbg_paused_45b40222c71a3034 = _game_reviewer_bg.default.__wbg_paused_45b40222c71a3034;
exports.__wbg_paused_45b40222c71a3034 = __wbg_paused_45b40222c71a3034;
var __wbg_pause_085f4de95ce3d4d0 = _game_reviewer_bg.default.__wbg_pause_085f4de95ce3d4d0;
exports.__wbg_pause_085f4de95ce3d4d0 = __wbg_pause_085f4de95ce3d4d0;
var __wbg_play_4a38ad69b72a3af7 = _game_reviewer_bg.default.__wbg_play_4a38ad69b72a3af7;
exports.__wbg_play_4a38ad69b72a3af7 = __wbg_play_4a38ad69b72a3af7;
var __wbg_id_58f3889821dba19c = _game_reviewer_bg.default.__wbg_id_58f3889821dba19c;
exports.__wbg_id_58f3889821dba19c = __wbg_id_58f3889821dba19c;
var __wbg_innerHTML_c659da7951fd218f = _game_reviewer_bg.default.__wbg_innerHTML_c659da7951fd218f;
exports.__wbg_innerHTML_c659da7951fd218f = __wbg_innerHTML_c659da7951fd218f;
var __wbg_debug_bb79600e92e09204 = _game_reviewer_bg.default.__wbg_debug_bb79600e92e09204;
exports.__wbg_debug_bb79600e92e09204 = __wbg_debug_bb79600e92e09204;
var __wbg_debug_5f66f9576007da94 = _game_reviewer_bg.default.__wbg_debug_5f66f9576007da94;
exports.__wbg_debug_5f66f9576007da94 = __wbg_debug_5f66f9576007da94;
var __wbg_error_e28c5fd045114457 = _game_reviewer_bg.default.__wbg_error_e28c5fd045114457;
exports.__wbg_error_e28c5fd045114457 = __wbg_error_e28c5fd045114457;
var __wbg_error_111a3edc7ff3d24a = _game_reviewer_bg.default.__wbg_error_111a3edc7ff3d24a;
exports.__wbg_error_111a3edc7ff3d24a = __wbg_error_111a3edc7ff3d24a;
var __wbg_info_795a6c3061926e92 = _game_reviewer_bg.default.__wbg_info_795a6c3061926e92;
exports.__wbg_info_795a6c3061926e92 = __wbg_info_795a6c3061926e92;
var __wbg_info_35137fc022966cc9 = _game_reviewer_bg.default.__wbg_info_35137fc022966cc9;
exports.__wbg_info_35137fc022966cc9 = __wbg_info_35137fc022966cc9;
var __wbg_warn_675d883d869ab7b3 = _game_reviewer_bg.default.__wbg_warn_675d883d869ab7b3;
exports.__wbg_warn_675d883d869ab7b3 = __wbg_warn_675d883d869ab7b3;
var __wbg_warn_65c62ab75bfa9a15 = _game_reviewer_bg.default.__wbg_warn_65c62ab75bfa9a15;
exports.__wbg_warn_65c62ab75bfa9a15 = __wbg_warn_65c62ab75bfa9a15;
var __wbg_files_66425c00b7a741fd = _game_reviewer_bg.default.__wbg_files_66425c00b7a741fd;
exports.__wbg_files_66425c00b7a741fd = __wbg_files_66425c00b7a741fd;
var __wbg_target_07126e2718b21906 = _game_reviewer_bg.default.__wbg_target_07126e2718b21906;
exports.__wbg_target_07126e2718b21906 = __wbg_target_07126e2718b21906;
var __wbg_name_f2a274cfa04afb8a = _game_reviewer_bg.default.__wbg_name_f2a274cfa04afb8a;
exports.__wbg_name_f2a274cfa04afb8a = __wbg_name_f2a274cfa04afb8a;
var __wbg_appendChild_9ff018e3b91d6e6b = _game_reviewer_bg.default.__wbg_appendChild_9ff018e3b91d6e6b;
exports.__wbg_appendChild_9ff018e3b91d6e6b = __wbg_appendChild_9ff018e3b91d6e6b;
var __wbg_newnoargs_4f6527054d7f1f1d = _game_reviewer_bg.default.__wbg_newnoargs_4f6527054d7f1f1d;
exports.__wbg_newnoargs_4f6527054d7f1f1d = __wbg_newnoargs_4f6527054d7f1f1d;
var __wbg_call_183c0b733b35a027 = _game_reviewer_bg.default.__wbg_call_183c0b733b35a027;
exports.__wbg_call_183c0b733b35a027 = __wbg_call_183c0b733b35a027;
var __wbg_new_fe8db0c1c4a81234 = _game_reviewer_bg.default.__wbg_new_fe8db0c1c4a81234;
exports.__wbg_new_fe8db0c1c4a81234 = __wbg_new_fe8db0c1c4a81234;
var __wbg_new_4b4544fc91638f83 = _game_reviewer_bg.default.__wbg_new_4b4544fc91638f83;
exports.__wbg_new_4b4544fc91638f83 = __wbg_new_4b4544fc91638f83;
var __wbg_resolve_a77ae6f272249390 = _game_reviewer_bg.default.__wbg_resolve_a77ae6f272249390;
exports.__wbg_resolve_a77ae6f272249390 = __wbg_resolve_a77ae6f272249390;
var __wbg_then_695aa7e1c262b929 = _game_reviewer_bg.default.__wbg_then_695aa7e1c262b929;
exports.__wbg_then_695aa7e1c262b929 = __wbg_then_695aa7e1c262b929;
var __wbg_then_bca69bfa503c3179 = _game_reviewer_bg.default.__wbg_then_bca69bfa503c3179;
exports.__wbg_then_bca69bfa503c3179 = __wbg_then_bca69bfa503c3179;
var __wbg_globalThis_eb9027a878db64ad = _game_reviewer_bg.default.__wbg_globalThis_eb9027a878db64ad;
exports.__wbg_globalThis_eb9027a878db64ad = __wbg_globalThis_eb9027a878db64ad;
var __wbg_self_69a78003cf074413 = _game_reviewer_bg.default.__wbg_self_69a78003cf074413;
exports.__wbg_self_69a78003cf074413 = __wbg_self_69a78003cf074413;
var __wbg_window_db757fdea9443777 = _game_reviewer_bg.default.__wbg_window_db757fdea9443777;
exports.__wbg_window_db757fdea9443777 = __wbg_window_db757fdea9443777;
var __wbg_global_8efdae4f126ac8b4 = _game_reviewer_bg.default.__wbg_global_8efdae4f126ac8b4;
exports.__wbg_global_8efdae4f126ac8b4 = __wbg_global_8efdae4f126ac8b4;
var __wbindgen_is_undefined = _game_reviewer_bg.default.__wbindgen_is_undefined;
exports.__wbindgen_is_undefined = __wbindgen_is_undefined;
var __wbg_set_a6eff7b20941127b = _game_reviewer_bg.default.__wbg_set_a6eff7b20941127b;
exports.__wbg_set_a6eff7b20941127b = __wbg_set_a6eff7b20941127b;
var __wbindgen_debug_string = _game_reviewer_bg.default.__wbindgen_debug_string;
exports.__wbindgen_debug_string = __wbindgen_debug_string;
var __wbindgen_throw = _game_reviewer_bg.default.__wbindgen_throw;
exports.__wbindgen_throw = __wbindgen_throw;
var __wbindgen_memory = _game_reviewer_bg.default.__wbindgen_memory;
exports.__wbindgen_memory = __wbindgen_memory;
var __wbindgen_closure_wrapper6922 = _game_reviewer_bg.default.__wbindgen_closure_wrapper6922;
exports.__wbindgen_closure_wrapper6922 = __wbindgen_closure_wrapper6922;
var __wbindgen_closure_wrapper6924 = _game_reviewer_bg.default.__wbindgen_closure_wrapper6924;
exports.__wbindgen_closure_wrapper6924 = __wbindgen_closure_wrapper6924;
var __wbindgen_closure_wrapper9618 = _game_reviewer_bg.default.__wbindgen_closure_wrapper9618;
exports.__wbindgen_closure_wrapper9618 = __wbindgen_closure_wrapper9618;
var __wbindgen_closure_wrapper672 = _game_reviewer_bg.default.__wbindgen_closure_wrapper672;
exports.__wbindgen_closure_wrapper672 = __wbindgen_closure_wrapper672;
},{"./pkg/game_reviewer_bg.wasm":"../pkg/game_reviewer_bg.wasm"}],"../../../../../home/extraymond/.npm-global/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../../../home/extraymond/.npm-global/lib/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../../../../home/extraymond/.npm-global/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../node_modules/bulma/bulma.sass":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../../../../../home/extraymond/.npm-global/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"style.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../../../home/extraymond/.npm-global/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _Cargo = require("../Cargo.toml");

require("bulma");

require("./style.scss");

(0, _Cargo.start)();
},{"../Cargo.toml":"../Cargo.toml","bulma":"../node_modules/bulma/bulma.sass","./style.scss":"style.scss"}],"../../../../../home/extraymond/.npm-global/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "45937" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}],"../../../../../home/extraymond/.npm-global/lib/node_modules/parcel-bundler/src/builtins/bundle-loader.js":[function(require,module,exports) {
var getBundleURL = require('./bundle-url').getBundleURL;

function loadBundlesLazy(bundles) {
  if (!Array.isArray(bundles)) {
    bundles = [bundles];
  }

  var id = bundles[bundles.length - 1];

  try {
    return Promise.resolve(require(id));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return new LazyPromise(function (resolve, reject) {
        loadBundles(bundles.slice(0, -1)).then(function () {
          return require(id);
        }).then(resolve, reject);
      });
    }

    throw err;
  }
}

function loadBundles(bundles) {
  return Promise.all(bundles.map(loadBundle));
}

var bundleLoaders = {};

function registerBundleLoader(type, loader) {
  bundleLoaders[type] = loader;
}

module.exports = exports = loadBundlesLazy;
exports.load = loadBundles;
exports.register = registerBundleLoader;
var bundles = {};

function loadBundle(bundle) {
  var id;

  if (Array.isArray(bundle)) {
    id = bundle[1];
    bundle = bundle[0];
  }

  if (bundles[bundle]) {
    return bundles[bundle];
  }

  var type = (bundle.substring(bundle.lastIndexOf('.') + 1, bundle.length) || bundle).toLowerCase();
  var bundleLoader = bundleLoaders[type];

  if (bundleLoader) {
    return bundles[bundle] = bundleLoader(getBundleURL() + bundle).then(function (resolved) {
      if (resolved) {
        module.bundle.register(id, resolved);
      }

      return resolved;
    }).catch(function (e) {
      delete bundles[bundle];
      throw e;
    });
  }
}

function LazyPromise(executor) {
  this.executor = executor;
  this.promise = null;
}

LazyPromise.prototype.then = function (onSuccess, onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.then(onSuccess, onError);
};

LazyPromise.prototype.catch = function (onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.catch(onError);
};
},{"./bundle-url":"../../../../../home/extraymond/.npm-global/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../pkg/snippets/dodrio-fb10e775fcadd85a/js/change-list-interpreter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChangeListInterpreter = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var decoder = new TextDecoder();

function top(stack) {
  return stack[stack.length - 1];
}

function string(mem, pointer, length) {
  var buf = mem.subarray(pointer, pointer + length);
  return decoder.decode(buf);
}

var OP_TABLE = [// 0
function setText(interpreter, mem8, mem32, i) {
  var pointer = mem32[i++];
  var length = mem32[i++];
  var str = string(mem8, pointer, length);
  top(interpreter.stack).textContent = str;
  return i;
}, // 1
function removeSelfAndNextSiblings(interpreter, mem8, mem32, i) {
  var node = interpreter.stack.pop();
  var sibling = node.nextSibling;

  while (sibling) {
    var temp = sibling.nextSibling;
    sibling.remove();
    sibling = temp;
  }

  node.remove();
  return i;
}, // 2
function replaceWith(interpreter, mem8, mem32, i) {
  var newNode = interpreter.stack.pop();
  var oldNode = interpreter.stack.pop();
  oldNode.replaceWith(newNode);
  interpreter.stack.push(newNode);
  return i;
}, // 3
function setAttribute(interpreter, mem8, mem32, i) {
  var nameId = mem32[i++];
  var valueId = mem32[i++];
  var name = interpreter.getCachedString(nameId);
  var value = interpreter.getCachedString(valueId);
  var node = top(interpreter.stack);
  node.setAttribute(name, value); // Some attributes are "volatile" and don't work through `setAttribute`.

  if (name === "value") {
    node.value = value;
  }

  if (name === "checked") {
    node.checked = true;
  }

  if (name === "selected") {
    node.selected = true;
  }

  return i;
}, // 4
function removeAttribute(interpreter, mem8, mem32, i) {
  var nameId = mem32[i++];
  var name = interpreter.getCachedString(nameId);
  var node = top(interpreter.stack);
  node.removeAttribute(name); // Some attributes are "volatile" and don't work through `removeAttribute`.

  if (name === "value") {
    node.value = null;
  }

  if (name === "checked") {
    node.checked = false;
  }

  if (name === "selected") {
    node.selected = false;
  }

  return i;
}, // 5
function pushReverseChild(interpreter, mem8, mem32, i) {
  var n = mem32[i++];
  var parent = top(interpreter.stack);
  var children = parent.childNodes;
  var child = children[children.length - n - 1];
  interpreter.stack.push(child);
  return i;
}, // 6
function popPushChild(interpreter, mem8, mem32, i) {
  var n = mem32[i++];
  interpreter.stack.pop();
  var parent = top(interpreter.stack);
  var children = parent.childNodes;
  var child = children[n];
  interpreter.stack.push(child);
  return i;
}, // 7
function pop(interpreter, mem8, mem32, i) {
  interpreter.stack.pop();
  return i;
}, // 8
function appendChild(interpreter, mem8, mem32, i) {
  var child = interpreter.stack.pop();
  top(interpreter.stack).appendChild(child);
  return i;
}, // 9
function createTextNode(interpreter, mem8, mem32, i) {
  var pointer = mem32[i++];
  var length = mem32[i++];
  var text = string(mem8, pointer, length);
  interpreter.stack.push(document.createTextNode(text));
  return i;
}, // 10
function createElement(interpreter, mem8, mem32, i) {
  var tagNameId = mem32[i++];
  var tagName = interpreter.getCachedString(tagNameId);
  interpreter.stack.push(document.createElement(tagName));
  return i;
}, // 11
function newEventListener(interpreter, mem8, mem32, i) {
  var eventId = mem32[i++];
  var eventType = interpreter.getCachedString(eventId);
  var a = mem32[i++];
  var b = mem32[i++];
  var el = top(interpreter.stack);
  el.addEventListener(eventType, interpreter.eventHandler);
  el["dodrio-a-".concat(eventType)] = a;
  el["dodrio-b-".concat(eventType)] = b;
  return i;
}, // 12
function updateEventListener(interpreter, mem8, mem32, i) {
  var eventId = mem32[i++];
  var eventType = interpreter.getCachedString(eventId);
  var el = top(interpreter.stack);
  el["dodrio-a-".concat(eventType)] = mem32[i++];
  el["dodrio-b-".concat(eventType)] = mem32[i++];
  return i;
}, // 13
function removeEventListener(interpreter, mem8, mem32, i) {
  var eventId = mem32[i++];
  var eventType = interpreter.getCachedString(eventId);
  var el = top(interpreter.stack);
  el.removeEventListener(eventType, interpreter.eventHandler);
  return i;
}, // 14
function addCachedString(interpreter, mem8, mem32, i) {
  var pointer = mem32[i++];
  var length = mem32[i++];
  var id = mem32[i++];
  var str = string(mem8, pointer, length);
  interpreter.addCachedString(str, id);
  return i;
}, // 15
function dropCachedString(interpreter, mem8, mem32, i) {
  var id = mem32[i++];
  interpreter.dropCachedString(id);
  return i;
}, // 16
function createElementNS(interpreter, mem8, mem32, i) {
  var tagNameId = mem32[i++];
  var tagName = interpreter.getCachedString(tagNameId);
  var nsId = mem32[i++];
  var ns = interpreter.getCachedString(nsId);
  interpreter.stack.push(document.createElementNS(ns, tagName));
  return i;
}, // 17
function saveChildrenToTemporaries(interpreter, mem8, mem32, i) {
  var temp = mem32[i++];
  var start = mem32[i++];
  var end = mem32[i++];
  var parent = top(interpreter.stack);
  var children = parent.childNodes;

  for (var _i = start; _i < end; _i++) {
    interpreter.temporaries[temp++] = children[_i];
  }

  return i;
}, // 18
function pushChild(interpreter, mem8, mem32, i) {
  var parent = top(interpreter.stack);
  var n = mem32[i++];
  var child = parent.childNodes[n];
  interpreter.stack.push(child);
  return i;
}, // 19
function pushTemporary(interpreter, mem8, mem32, i) {
  var temp = mem32[i++];
  interpreter.stack.push(interpreter.temporaries[temp]);
  return i;
}, // 20
function insertBefore(interpreter, mem8, mem32, i) {
  var before = interpreter.stack.pop();
  var after = interpreter.stack.pop();
  after.parentNode.insertBefore(before, after);
  interpreter.stack.push(before);
  return i;
}, // 21
function popPushReverseChild(interpreter, mem8, mem32, i) {
  var n = mem32[i++];
  interpreter.stack.pop();
  var parent = top(interpreter.stack);
  var children = parent.childNodes;
  var child = children[children.length - n - 1];
  interpreter.stack.push(child);
  return i;
}, // 22
function removeChild(interpreter, mem8, mem32, i) {
  var n = mem32[i++];
  var parent = top(interpreter.stack);
  var child = parent.childNodes[n];
  child.remove();
  return i;
}, // 23
function setClass(interpreter, mem8, mem32, i) {
  var classId = mem32[i++];
  var className = interpreter.getCachedString(classId);
  top(interpreter.stack).className = className;
  return i;
}, // 24
function saveTemplate(interpreter, mem8, mem32, i) {
  var id = mem32[i++];
  var template = top(interpreter.stack);
  interpreter.saveTemplate(id, template.cloneNode(true));
  return i;
}, // 25
function pushTemplate(interpreter, mem8, mem32, i) {
  var id = mem32[i++];
  var template = interpreter.getTemplate(id);
  interpreter.stack.push(template.cloneNode(true));
  return i;
}];

var ChangeListInterpreter = /*#__PURE__*/function () {
  function ChangeListInterpreter(container) {
    _classCallCheck(this, ChangeListInterpreter);

    this.trampoline = null;
    this.container = container;
    this.ranges = [];
    this.stack = [];
    this.strings = new Map();
    this.temporaries = [];
    this.templates = new Map();
  }

  _createClass(ChangeListInterpreter, [{
    key: "unmount",
    value: function unmount() {
      this.trampoline.mounted = false; // Null out all of our properties just to ensure that if we mistakenly ever
      // call a method on this instance again, it will throw.

      this.trampoline = null;
      this.container = null;
      this.ranges = null;
      this.stack = null;
      this.strings = null;
      this.temporaries = null;
      this.templates = null;
    }
  }, {
    key: "addChangeListRange",
    value: function addChangeListRange(start, len) {
      this.ranges.push(start);
      this.ranges.push(len);
    }
  }, {
    key: "applyChanges",
    value: function applyChanges(memory) {
      if (this.ranges.length == 0) {
        return;
      }

      this.stack.push(this.container.firstChild);
      var mem8 = new Uint8Array(memory.buffer);
      var mem32 = new Uint32Array(memory.buffer);

      for (var i = 0; i < this.ranges.length; i += 2) {
        var start = this.ranges[i];
        var len = this.ranges[i + 1];
        this.applyChangeRange(mem8, mem32, start, len);
      }

      this.ranges.length = 0;
      this.stack.length = 0;
      this.temporaries.length = 0;
    }
  }, {
    key: "applyChangeRange",
    value: function applyChangeRange(mem8, mem32, start, len) {
      var end = (start + len) / 4;

      for (var i = start / 4; i < end;) {
        var op = mem32[i++];
        i = OP_TABLE[op](this, mem8, mem32, i);
      }
    }
  }, {
    key: "addCachedString",
    value: function addCachedString(str, id) {
      this.strings.set(id, str);
    }
  }, {
    key: "dropCachedString",
    value: function dropCachedString(id) {
      this.strings.delete(id);
    }
  }, {
    key: "getCachedString",
    value: function getCachedString(id) {
      return this.strings.get(id);
    }
  }, {
    key: "saveTemplate",
    value: function saveTemplate(id, template) {
      this.templates.set(id, template);
    }
  }, {
    key: "getTemplate",
    value: function getTemplate(id) {
      return this.templates.get(id);
    }
  }, {
    key: "initEventsTrampoline",
    value: function initEventsTrampoline(trampoline) {
      this.trampoline = trampoline;
      trampoline.mounted = true;

      this.eventHandler = function (event) {
        if (!trampoline.mounted) {
          throw new Error("invocation of listener after VDOM has been unmounted");
        } // `this` always refers to the element the handler was added to.
        // Since we're adding the handler to all elements our content wants
        // to listen for events on, this ensures that we always get the right
        // values for `a` and `b`.


        var type = event.type;
        var a = this["dodrio-a-".concat(type)];
        var b = this["dodrio-b-".concat(type)];
        trampoline(event, a, b);
      };
    }
  }]);

  return ChangeListInterpreter;
}();

exports.ChangeListInterpreter = ChangeListInterpreter;
},{}],"../../../../../home/extraymond/.npm-global/lib/node_modules/parcel-bundler/node_modules/util/support/isBufferBrowser.js":[function(require,module,exports) {
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],"../../../../../home/extraymond/.npm-global/lib/node_modules/parcel-bundler/node_modules/util/node_modules/inherits/inherits_browser.js":[function(require,module,exports) {
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],"../../../../../home/extraymond/.npm-global/lib/node_modules/parcel-bundler/node_modules/process/browser.js":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};
},{}],"../../../../../home/extraymond/.npm-global/lib/node_modules/parcel-bundler/node_modules/util/util.js":[function(require,module,exports) {
var process = require("process");
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(obj) {
  var keys = Object.keys(obj);
  var descriptors = {};

  for (var i = 0; i < keys.length; i++) {
    descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
  }

  return descriptors;
};

var formatRegExp = /%[sdj%]/g;

exports.format = function (f) {
  if (!isString(f)) {
    var objects = [];

    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }

    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function (x) {
    if (x === '%%') return '%';
    if (i >= len) return x;

    switch (x) {
      case '%s':
        return String(args[i++]);

      case '%d':
        return Number(args[i++]);

      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }

      default:
        return x;
    }
  });

  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }

  return str;
}; // Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.


exports.deprecate = function (fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  } // Allow for deprecating things in the process of starting up.


  if (typeof process === 'undefined') {
    return function () {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;

  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }

      warned = true;
    }

    return fn.apply(this, arguments);
  }

  return deprecated;
};

var debugs = {};
var debugEnviron;

exports.debuglog = function (set) {
  if (isUndefined(debugEnviron)) debugEnviron = undefined || '';
  set = set.toUpperCase();

  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;

      debugs[set] = function () {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function () {};
    }
  }

  return debugs[set];
};
/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */

/* legacy: obj, showHidden, depth, colors*/


function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  }; // legacy...

  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];

  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  } // set default options


  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}

exports.inspect = inspect; // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics

inspect.colors = {
  'bold': [1, 22],
  'italic': [3, 23],
  'underline': [4, 24],
  'inverse': [7, 27],
  'white': [37, 39],
  'grey': [90, 39],
  'black': [30, 39],
  'blue': [34, 39],
  'cyan': [36, 39],
  'green': [32, 39],
  'magenta': [35, 39],
  'red': [31, 39],
  'yellow': [33, 39]
}; // Don't use 'blue' not visible on cmd.exe

inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};

function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str + '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}

function stylizeNoColor(str, styleType) {
  return str;
}

function arrayToHash(array) {
  var hash = {};
  array.forEach(function (val, idx) {
    hash[val] = true;
  });
  return hash;
}

function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect && value && isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
  value.inspect !== exports.inspect && // Also filter out any prototype objects using the circular check.
  !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);

    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }

    return ret;
  } // Primitive types cannot have properties


  var primitive = formatPrimitive(ctx, value);

  if (primitive) {
    return primitive;
  } // Look up the keys of the object.


  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  } // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx


  if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  } // Some type of object without properties can be shortcutted.


  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }

    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }

    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }

    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '',
      array = false,
      braces = ['{', '}']; // Make Array say that they are Array

  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  } // Make functions say that they are functions


  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  } // Make RegExps say that they are RegExps


  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  } // Make dates with properties first say the date


  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  } // Make error with message first say the error


  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);
  var output;

  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function (key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();
  return reduceToSingleString(output, base, braces);
}

function formatPrimitive(ctx, value) {
  if (isUndefined(value)) return ctx.stylize('undefined', 'undefined');

  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }

  if (isNumber(value)) return ctx.stylize('' + value, 'number');
  if (isBoolean(value)) return ctx.stylize('' + value, 'boolean'); // For some reason typeof null is "object", so special case here.

  if (isNull(value)) return ctx.stylize('null', 'null');
}

function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}

function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];

  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
    } else {
      output.push('');
    }
  }

  keys.forEach(function (key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
    }
  });
  return output;
}

function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || {
    value: value[key]
  };

  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }

  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }

  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }

      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function (line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function (line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }

  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }

    name = JSON.stringify('' + key);

    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}

function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function (prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
} // NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.


function isArray(ar) {
  return Array.isArray(ar);
}

exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}

exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}

exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}

exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}

exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}

exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}

exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}

exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}

exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}

exports.isDate = isDate;

function isError(e) {
  return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
}

exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}

exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || typeof arg === 'symbol' || // ES6 symbol
  typeof arg === 'undefined';
}

exports.isPrimitive = isPrimitive;
exports.isBuffer = require('./support/isBuffer');

function objectToString(o) {
  return Object.prototype.toString.call(o);
}

function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']; // 26 Feb 16:19:34

function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
} // log is just a thin wrapper to console.log that prepends a timestamp


exports.log = function () {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};
/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */


exports.inherits = require('inherits');

exports._extend = function (origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;
  var keys = Object.keys(add);
  var i = keys.length;

  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }

  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function') throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];

    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }

    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn,
      enumerable: false,
      writable: false,
      configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });
    var args = [];

    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn,
    enumerable: false,
    writable: false,
    configurable: true
  });
  return Object.defineProperties(fn, getOwnPropertyDescriptors(original));
};

exports.promisify.custom = kCustomPromisifiedSymbol;

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }

  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  } // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.


  function callbackified() {
    var args = [];

    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();

    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }

    var self = this;

    var cb = function () {
      return maybeCb.apply(self, arguments);
    }; // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)


    original.apply(this, args).then(function (ret) {
      process.nextTick(cb, null, ret);
    }, function (rej) {
      process.nextTick(callbackifyOnRejected, rej, cb);
    });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified, getOwnPropertyDescriptors(original));
  return callbackified;
}

exports.callbackify = callbackify;
},{"./support/isBuffer":"../../../../../home/extraymond/.npm-global/lib/node_modules/parcel-bundler/node_modules/util/support/isBufferBrowser.js","inherits":"../../../../../home/extraymond/.npm-global/lib/node_modules/parcel-bundler/node_modules/util/node_modules/inherits/inherits_browser.js","process":"../../../../../home/extraymond/.npm-global/lib/node_modules/parcel-bundler/node_modules/process/browser.js"}],"../../../../../home/extraymond/.npm-global/lib/node_modules/parcel-bundler/src/builtins/_empty.js":[function(require,module,exports) {

},{}],"../node_modules/parcel-plugin-wasm.rs/wasm-loader.js":[function(require,module,exports) {
var global = arguments[3];
var __dirname = "/mnt/storages/git/game_reviewer/node_modules/parcel-plugin-wasm.rs";
"use strict";

var _changeListInterpreter = require("../../pkg/snippets/dodrio-fb10e775fcadd85a/js/change-list-interpreter.js");

var wasm;
const __exports = {};
const heap = new Array(32).fill(undefined);
heap.push(undefined, null, true, false);

function getObject(idx) {
  return heap[idx];
}

let heap_next = heap.length;

function dropObject(idx) {
  if (idx < 36) return;
  heap[idx] = heap_next;
  heap_next = idx;
}

function takeObject(idx) {
  const ret = getObject(idx);
  dropObject(idx);
  return ret;
}

function _assertBoolean(n) {
  if (typeof n !== 'boolean') {
    throw new Error('expected a boolean argument');
  }
}

function addHeapObject(obj) {
  if (heap_next === heap.length) heap.push(heap.length + 1);
  const idx = heap_next;
  heap_next = heap[idx];
  if (typeof heap_next !== 'number') throw new Error('corrupt heap');
  heap[idx] = obj;
  return idx;
}

const lTextDecoder = typeof TextDecoder === 'undefined' ? require('util').TextDecoder : TextDecoder;
let cachedTextDecoder = new lTextDecoder('utf-8', {
  ignoreBOM: true,
  fatal: true
});
cachedTextDecoder.decode();
let cachegetUint8Memory0 = null;

function getUint8Memory0() {
  if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
    cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
  }

  return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
  return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

function debugString(val) {
  // primitive types
  const type = typeof val;

  if (type == 'number' || type == 'boolean' || val == null) {
    return `${val}`;
  }

  if (type == 'string') {
    return `"${val}"`;
  }

  if (type == 'symbol') {
    const description = val.description;

    if (description == null) {
      return 'Symbol';
    } else {
      return `Symbol(${description})`;
    }
  }

  if (type == 'function') {
    const name = val.name;

    if (typeof name == 'string' && name.length > 0) {
      return `Function(${name})`;
    } else {
      return 'Function';
    }
  } // objects


  if (Array.isArray(val)) {
    const length = val.length;
    let debug = '[';

    if (length > 0) {
      debug += debugString(val[0]);
    }

    for (let i = 1; i < length; i++) {
      debug += ', ' + debugString(val[i]);
    }

    debug += ']';
    return debug;
  } // Test for built-in


  const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
  let className;

  if (builtInMatches.length > 1) {
    className = builtInMatches[1];
  } else {
    // Failed to match the standard '[object ClassName]'
    return toString.call(val);
  }

  if (className == 'Object') {
    // we're a user defined class or Object
    // JSON.stringify avoids problems with cycles, and is generally much
    // easier than looping through ownProperties of `val`.
    try {
      return 'Object(' + JSON.stringify(val) + ')';
    } catch (_) {
      return 'Object';
    }
  } // errors


  if (val instanceof Error) {
    return `${val.name}: ${val.message}\n${val.stack}`;
  } // TODO we could test for more things here, like `Set`s and `Map`s.


  return className;
}

let WASM_VECTOR_LEN = 0;
const lTextEncoder = typeof TextEncoder === 'undefined' ? require('util').TextEncoder : TextEncoder;
let cachedTextEncoder = new lTextEncoder('utf-8');
const encodeString = typeof cachedTextEncoder.encodeInto === 'function' ? function (arg, view) {
  return cachedTextEncoder.encodeInto(arg, view);
} : function (arg, view) {
  const buf = cachedTextEncoder.encode(arg);
  view.set(buf);
  return {
    read: arg.length,
    written: buf.length
  };
};

function passStringToWasm0(arg, malloc, realloc) {
  if (typeof arg !== 'string') throw new Error('expected a string argument');

  if (realloc === undefined) {
    const buf = cachedTextEncoder.encode(arg);
    const ptr = malloc(buf.length);
    getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
    WASM_VECTOR_LEN = buf.length;
    return ptr;
  }

  let len = arg.length;
  let ptr = malloc(len);
  const mem = getUint8Memory0();
  let offset = 0;

  for (; offset < len; offset++) {
    const code = arg.charCodeAt(offset);
    if (code > 0x7F) break;
    mem[ptr + offset] = code;
  }

  if (offset !== len) {
    if (offset !== 0) {
      arg = arg.slice(offset);
    }

    ptr = realloc(ptr, len, len = offset + arg.length * 3);
    const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
    const ret = encodeString(arg, view);
    if (ret.read !== arg.length) throw new Error('failed to pass whole string');
    offset += ret.written;
  }

  WASM_VECTOR_LEN = offset;
  return ptr;
}

let cachegetInt32Memory0 = null;

function getInt32Memory0() {
  if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {
    cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
  }

  return cachegetInt32Memory0;
}

function makeMutClosure(arg0, arg1, dtor, f) {
  const state = {
    a: arg0,
    b: arg1,
    cnt: 1
  };

  const real = (...args) => {
    // First up with a closure we increment the internal reference
    // count. This ensures that the Rust closure environment won't
    // be deallocated while we're invoking it.
    state.cnt++;
    const a = state.a;
    state.a = 0;

    try {
      return f(a, state.b, ...args);
    } finally {
      if (--state.cnt === 0) wasm.__wbindgen_export_2.get(dtor)(a, state.b);else state.a = a;
    }
  };

  real.original = state;
  return real;
}

function logError(e) {
  let error = function () {
    try {
      return e instanceof Error ? `${e.message}\n\nStack:\n${e.stack}` : e.toString();
    } catch (_) {
      return "<failed to stringify thrown value>";
    }
  }();

  console.error("wasm-bindgen: imported JS function that was not marked as `catch` threw an error:", error);
  throw e;
}

function _assertNum(n) {
  if (typeof n !== 'number') throw new Error('expected a number argument');
}

function __wbg_adapter_20(arg0, arg1, arg2) {
  _assertNum(arg0);

  _assertNum(arg1);

  wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hd4d1e1ba1beba674(arg0, arg1, addHeapObject(arg2));
}

function makeClosure(arg0, arg1, dtor, f) {
  const state = {
    a: arg0,
    b: arg1,
    cnt: 1
  };

  const real = (...args) => {
    // First up with a closure we increment the internal reference
    // count. This ensures that the Rust closure environment won't
    // be deallocated while we're invoking it.
    state.cnt++;

    try {
      return f(state.a, state.b, ...args);
    } finally {
      if (--state.cnt === 0) {
        wasm.__wbindgen_export_2.get(dtor)(state.a, state.b);

        state.a = 0;
      }
    }
  };

  real.original = state;
  return real;
}

function __wbg_adapter_23(arg0, arg1, arg2, arg3, arg4) {
  _assertNum(arg0);

  _assertNum(arg1);

  _assertNum(arg3);

  _assertNum(arg4);

  wasm._dyn_core__ops__function__Fn__A__B__C___Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h99c37c16ac243462(arg0, arg1, addHeapObject(arg2), arg3, arg4);
}

function __wbg_adapter_26(arg0, arg1) {
  _assertNum(arg0);

  _assertNum(arg1);

  wasm._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h84309730ed5c9dd3(arg0, arg1);
}

let stack_pointer = 32;

function addBorrowedObject(obj) {
  if (stack_pointer == 1) throw new Error('out of js stack');
  heap[--stack_pointer] = obj;
  return stack_pointer;
}

function __wbg_adapter_29(arg0, arg1, arg2) {
  try {
    _assertNum(arg0);

    _assertNum(arg1);

    wasm._dyn_core__ops__function__FnMut___A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h9622f57ba37ffcdd(arg0, arg1, addBorrowedObject(arg2));
  } finally {
    heap[stack_pointer++] = undefined;
  }
}
/**
*/


__exports.start = function () {
  wasm.start();
};
/**
*/


__exports.from_sw = function () {
  wasm.from_sw();
};

function isLikeNone(x) {
  return x === undefined || x === null;
}

function handleError(e) {
  wasm.__wbindgen_exn_store(addHeapObject(e));
}

function __wbg_adapter_114(arg0, arg1, arg2, arg3) {
  _assertNum(arg0);

  _assertNum(arg1);

  wasm.wasm_bindgen__convert__closures__invoke2_mut__h3018753e84474093(arg0, arg1, addHeapObject(arg2), addHeapObject(arg3));
}

__exports.__wbindgen_cb_drop = function (arg0) {
  const obj = takeObject(arg0).original;

  if (obj.cnt-- == 1) {
    obj.a = 0;
    return true;
  }

  var ret = false;

  _assertBoolean(ret);

  return ret;
};

__exports.__wbindgen_object_clone_ref = function (arg0) {
  var ret = getObject(arg0);
  return addHeapObject(ret);
};

__exports.__wbindgen_json_parse = function (arg0, arg1) {
  var ret = JSON.parse(getStringFromWasm0(arg0, arg1));
  return addHeapObject(ret);
};

__exports.__wbindgen_string_new = function (arg0, arg1) {
  var ret = getStringFromWasm0(arg0, arg1);
  return addHeapObject(ret);
};

__exports.__wbg_error_4bb6c2a97407129a = function (arg0, arg1) {
  try {
    try {
      console.error(getStringFromWasm0(arg0, arg1));
    } finally {
      wasm.__wbindgen_free(arg0, arg1);
    }
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_new_59cb74e423758ede = function () {
  try {
    var ret = new Error();
    return addHeapObject(ret);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_stack_558ba5917b466edd = function (arg0, arg1) {
  try {
    var ret = getObject(arg1).stack;
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
  } catch (e) {
    logError(e);
  }
};

__exports.__wbindgen_object_drop_ref = function (arg0) {
  takeObject(arg0);
};

__exports.__wbg_new_5d8d0f7e7d6a14c0 = function (arg0) {
  try {
    var ret = new _changeListInterpreter.ChangeListInterpreter(getObject(arg0));
    return addHeapObject(ret);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_unmount_50cf7e18a03f5914 = function (arg0) {
  try {
    getObject(arg0).unmount();
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_addChangeListRange_0d991173a03fc15c = function (arg0, arg1, arg2) {
  try {
    getObject(arg0).addChangeListRange(arg1 >>> 0, arg2 >>> 0);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_applyChanges_25b20264911bf1af = function (arg0, arg1) {
  try {
    getObject(arg0).applyChanges(takeObject(arg1));
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_initEventsTrampoline_cf7bb7e86502a9dc = function (arg0, arg1) {
  try {
    getObject(arg0).initEventsTrampoline(getObject(arg1));
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_instanceof_Window_04bba8b54ef81db0 = function (arg0) {
  try {
    var ret = getObject(arg0) instanceof Window;

    _assertBoolean(ret);

    return ret;
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_document_f023a2b0d5b3d060 = function (arg0) {
  try {
    var ret = getObject(arg0).document;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_requestAnimationFrame_c1ca5bf33b036c59 = function (arg0, arg1) {
  try {
    try {
      var ret = getObject(arg0).requestAnimationFrame(getObject(arg1));

      _assertNum(ret);

      return ret;
    } catch (e) {
      handleError(e);
    }
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_body_af08254bff460732 = function (arg0) {
  try {
    var ret = getObject(arg0).body;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_createElement_d1b8191d1ca1103b = function (arg0, arg1, arg2) {
  try {
    try {
      var ret = getObject(arg0).createElement(getStringFromWasm0(arg1, arg2));
      return addHeapObject(ret);
    } catch (e) {
      handleError(e);
    }
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_getElementById_87fd6611f51eaa51 = function (arg0, arg1, arg2) {
  try {
    var ret = getObject(arg0).getElementById(getStringFromWasm0(arg1, arg2));
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_createObjectURL_381e08cfead4a144 = function (arg0, arg1) {
  try {
    try {
      var ret = URL.createObjectURL(getObject(arg1));
      var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len0 = WASM_VECTOR_LEN;
      getInt32Memory0()[arg0 / 4 + 1] = len0;
      getInt32Memory0()[arg0 / 4 + 0] = ptr0;
    } catch (e) {
      handleError(e);
    }
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_get_cb2af8513f4065ba = function (arg0, arg1) {
  try {
    var ret = getObject(arg0)[arg1 >>> 0];
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_key_7bc040dd03933553 = function (arg0, arg1) {
  try {
    var ret = getObject(arg1).key;
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_addEventListener_095450642c0bb293 = function (arg0, arg1, arg2, arg3, arg4) {
  try {
    try {
      getObject(arg0).addEventListener(getStringFromWasm0(arg1, arg2), getObject(arg3), getObject(arg4));
    } catch (e) {
      handleError(e);
    }
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_removeEventListener_bc884fbb2911bd7b = function (arg0, arg1, arg2, arg3, arg4) {
  try {
    try {
      getObject(arg0).removeEventListener(getStringFromWasm0(arg1, arg2), getObject(arg3), arg4 !== 0);
    } catch (e) {
      handleError(e);
    }
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_currentTime_cf47599b74510e43 = function (arg0) {
  try {
    var ret = getObject(arg0).currentTime;
    return ret;
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_currentTime_e23045c23b55c94a = function (arg0, arg1) {
  try {
    getObject(arg0).currentTime = arg1;
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_paused_45b40222c71a3034 = function (arg0) {
  try {
    var ret = getObject(arg0).paused;

    _assertBoolean(ret);

    return ret;
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_pause_085f4de95ce3d4d0 = function (arg0) {
  try {
    try {
      getObject(arg0).pause();
    } catch (e) {
      handleError(e);
    }
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_play_4a38ad69b72a3af7 = function (arg0) {
  try {
    try {
      var ret = getObject(arg0).play();
      return addHeapObject(ret);
    } catch (e) {
      handleError(e);
    }
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_id_58f3889821dba19c = function (arg0, arg1, arg2) {
  try {
    getObject(arg0).id = getStringFromWasm0(arg1, arg2);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_innerHTML_c659da7951fd218f = function (arg0, arg1, arg2) {
  try {
    getObject(arg0).innerHTML = getStringFromWasm0(arg1, arg2);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_debug_bb79600e92e09204 = function (arg0, arg1) {
  try {
    console.debug(getObject(arg0), getObject(arg1));
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_debug_5f66f9576007da94 = function (arg0, arg1, arg2) {
  try {
    console.debug(getObject(arg0), getObject(arg1), getObject(arg2));
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_error_e28c5fd045114457 = function (arg0, arg1) {
  try {
    console.error(getObject(arg0), getObject(arg1));
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_error_111a3edc7ff3d24a = function (arg0, arg1, arg2) {
  try {
    console.error(getObject(arg0), getObject(arg1), getObject(arg2));
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_info_795a6c3061926e92 = function (arg0, arg1) {
  try {
    console.info(getObject(arg0), getObject(arg1));
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_info_35137fc022966cc9 = function (arg0, arg1, arg2) {
  try {
    console.info(getObject(arg0), getObject(arg1), getObject(arg2));
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_warn_675d883d869ab7b3 = function (arg0, arg1) {
  try {
    console.warn(getObject(arg0), getObject(arg1));
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_warn_65c62ab75bfa9a15 = function (arg0, arg1, arg2) {
  try {
    console.warn(getObject(arg0), getObject(arg1), getObject(arg2));
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_files_66425c00b7a741fd = function (arg0) {
  try {
    var ret = getObject(arg0).files;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_target_07126e2718b21906 = function (arg0) {
  try {
    var ret = getObject(arg0).target;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_name_f2a274cfa04afb8a = function (arg0, arg1) {
  try {
    var ret = getObject(arg1).name;
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_appendChild_9ff018e3b91d6e6b = function (arg0, arg1) {
  try {
    try {
      var ret = getObject(arg0).appendChild(getObject(arg1));
      return addHeapObject(ret);
    } catch (e) {
      handleError(e);
    }
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_newnoargs_4f6527054d7f1f1d = function (arg0, arg1) {
  try {
    var ret = new Function(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_call_183c0b733b35a027 = function (arg0, arg1) {
  try {
    try {
      var ret = getObject(arg0).call(getObject(arg1));
      return addHeapObject(ret);
    } catch (e) {
      handleError(e);
    }
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_new_fe8db0c1c4a81234 = function () {
  try {
    var ret = new Object();
    return addHeapObject(ret);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_new_4b4544fc91638f83 = function (arg0, arg1) {
  try {
    try {
      var state0 = {
        a: arg0,
        b: arg1
      };

      var cb0 = (arg0, arg1) => {
        const a = state0.a;
        state0.a = 0;

        try {
          return __wbg_adapter_114(a, state0.b, arg0, arg1);
        } finally {
          state0.a = a;
        }
      };

      var ret = new Promise(cb0);
      return addHeapObject(ret);
    } finally {
      state0.a = state0.b = 0;
    }
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_resolve_a77ae6f272249390 = function (arg0) {
  try {
    var ret = Promise.resolve(getObject(arg0));
    return addHeapObject(ret);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_then_695aa7e1c262b929 = function (arg0, arg1) {
  try {
    var ret = getObject(arg0).then(getObject(arg1));
    return addHeapObject(ret);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_then_bca69bfa503c3179 = function (arg0, arg1, arg2) {
  try {
    var ret = getObject(arg0).then(getObject(arg1), getObject(arg2));
    return addHeapObject(ret);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_globalThis_eb9027a878db64ad = function () {
  try {
    try {
      var ret = globalThis.globalThis;
      return addHeapObject(ret);
    } catch (e) {
      handleError(e);
    }
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_self_69a78003cf074413 = function () {
  try {
    try {
      var ret = self.self;
      return addHeapObject(ret);
    } catch (e) {
      handleError(e);
    }
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_window_db757fdea9443777 = function () {
  try {
    try {
      var ret = window.window;
      return addHeapObject(ret);
    } catch (e) {
      handleError(e);
    }
  } catch (e) {
    logError(e);
  }
};

__exports.__wbg_global_8efdae4f126ac8b4 = function () {
  try {
    try {
      var ret = global.global;
      return addHeapObject(ret);
    } catch (e) {
      handleError(e);
    }
  } catch (e) {
    logError(e);
  }
};

__exports.__wbindgen_is_undefined = function (arg0) {
  var ret = getObject(arg0) === undefined;

  _assertBoolean(ret);

  return ret;
};

__exports.__wbg_set_a6eff7b20941127b = function (arg0, arg1, arg2) {
  try {
    try {
      var ret = Reflect.set(getObject(arg0), getObject(arg1), getObject(arg2));

      _assertBoolean(ret);

      return ret;
    } catch (e) {
      handleError(e);
    }
  } catch (e) {
    logError(e);
  }
};

__exports.__wbindgen_debug_string = function (arg0, arg1) {
  var ret = debugString(getObject(arg1));
  var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
  var len0 = WASM_VECTOR_LEN;
  getInt32Memory0()[arg0 / 4 + 1] = len0;
  getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

__exports.__wbindgen_throw = function (arg0, arg1) {
  throw new Error(getStringFromWasm0(arg0, arg1));
};

__exports.__wbindgen_memory = function () {
  var ret = wasm.memory;
  return addHeapObject(ret);
};

__exports.__wbindgen_closure_wrapper6922 = function (arg0, arg1, arg2) {
  try {
    var ret = makeClosure(arg0, arg1, 236, __wbg_adapter_23);
    return addHeapObject(ret);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbindgen_closure_wrapper6924 = function (arg0, arg1, arg2) {
  try {
    var ret = makeMutClosure(arg0, arg1, 234, __wbg_adapter_26);
    return addHeapObject(ret);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbindgen_closure_wrapper9618 = function (arg0, arg1, arg2) {
  try {
    var ret = makeMutClosure(arg0, arg1, 261, __wbg_adapter_20);
    return addHeapObject(ret);
  } catch (e) {
    logError(e);
  }
};

__exports.__wbindgen_closure_wrapper672 = function (arg0, arg1, arg2) {
  try {
    var ret = makeMutClosure(arg0, arg1, 46, __wbg_adapter_29);
    return addHeapObject(ret);
  } catch (e) {
    logError(e);
  }
};

function init(wasm_path) {
  const fetchPromise = fetch(wasm_path);
  let resultPromise;

  if (typeof WebAssembly.instantiateStreaming === 'function') {
    resultPromise = WebAssembly.instantiateStreaming(fetchPromise, {
      './game_reviewer.js': __exports
    });
  } else {
    resultPromise = fetchPromise.then(response => response.arrayBuffer()).then(buffer => WebAssembly.instantiate(buffer, {
      './game_reviewer.js': __exports
    }));
  }

  return resultPromise.then(({
    instance
  }) => {
    wasm = init.wasm = instance.exports;
    __exports.wasm = wasm;
    return;
  });
}

;

function init_node(wasm_path) {
  const fs = require('fs');

  return new Promise(function (resolve, reject) {
    fs.readFile(__dirname + wasm_path, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data.buffer);
      }
    });
  }).then(data => WebAssembly.instantiate(data, {
    './game_reviewer': __exports
  })).then(({
    instance
  }) => {
    wasm = init.wasm = instance.exports;
    __exports.wasm = wasm;
    return;
  });
}

const wasm_bindgen = Object.assign(false ? init_node : init, __exports);

module.exports = function loadWASMBundle(bundle) {
  return wasm_bindgen(bundle).then(() => __exports);
};
},{"../../pkg/snippets/dodrio-fb10e775fcadd85a/js/change-list-interpreter.js":"../pkg/snippets/dodrio-fb10e775fcadd85a/js/change-list-interpreter.js","util":"../../../../../home/extraymond/.npm-global/lib/node_modules/parcel-bundler/node_modules/util/util.js","fs":"../../../../../home/extraymond/.npm-global/lib/node_modules/parcel-bundler/src/builtins/_empty.js"}],0:[function(require,module,exports) {
var b=require("../../../../../home/extraymond/.npm-global/lib/node_modules/parcel-bundler/src/builtins/bundle-loader.js");b.register("wasm",require("../node_modules/parcel-plugin-wasm.rs/wasm-loader.js"));b.load([["game_reviewer_bg.81510668.wasm","../pkg/game_reviewer_bg.wasm"]]).then(function(){require("index.js");});
},{}]},{},["../../../../../home/extraymond/.npm-global/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js",0], null)
//# sourceMappingURL=/static.e31bb0bc.js.map