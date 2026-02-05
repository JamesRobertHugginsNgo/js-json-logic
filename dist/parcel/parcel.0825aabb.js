// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"3KYlF":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "7d8b1fe20825aabb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"cIdJC":[function(require,module,exports,__globalThis) {
var _insertHtmlJs = require("./insert-html.js");
var _indexJs = require("../lib/index.js");
var _coreJs = require("../lib/core.js");
var _utilitiesJs = require("../lib/utilities.js");
var _intlJs = require("../lib/intl.js");
var _jsonJs = require("../lib/json.js");
var _mathJs = require("../lib/math.js");
var _arrayJs = require("../lib/array.js");
var _arraybufferJs = require("../lib/arraybuffer.js");
var _booleanJs = require("../lib/boolean.js");
var _dateJs = require("../lib/date.js");
var _mapJs = require("../lib/map.js");
var _numberJs = require("../lib/number.js");
var _objectJs = require("../lib/object.js");
var _regexpJs = require("../lib/regexp.js");
var _setJs = require("../lib/set.js");
var _stringJs = require("../lib/string.js");
var _uint8ArrayJs = require("../lib/uint8array.js");
var _urlJs = require("../lib/url.js");
async function insertLogics() {
    (0, _insertHtmlJs.insertHTML)('<h1>JS JSON Logic</h1>');
    (0, _insertHtmlJs.insertHTML)(`<pre><code>${JSON.stringify(Object.keys((0, _indexJs.operators)), null, 2)}</code></pre>`);
    (0, _insertHtmlJs.insertHTML)('<h2>Primary Expressions</h2>');
    (0, _insertHtmlJs.insertHTML)('<h3>Undefined Literal</h3>');
    await (0, _insertHtmlJs.insertLogic)({
        'undefined': []
    });
    await (0, _insertHtmlJs.insertLogic)({
        'typeof': [
            {
                'undefined': []
            }
        ]
    });
    await (0, _insertHtmlJs.insertLogic)({
        '=': [
            {
                'blockof': [
                    'key1'
                ]
            },
            'key1',
            {
                'undefined': []
            }
        ]
    }, {
        'key1': true,
        'key2': 123
    });
    (0, _insertHtmlJs.insertHTML)('<h2>Left Hand Side Expressions</h2>');
    (0, _insertHtmlJs.insertHTML)('<h3>Property Accessors</h3>');
    await (0, _insertHtmlJs.insertLogic)({
        '.': [
            {
                'project': {
                    'name': 'ProjectName'
                }
            },
            'project'
        ]
    });
    await (0, _insertHtmlJs.insertLogic)({
        '.': [
            {
                'project': {
                    'name': 'ProjectName'
                }
            },
            'project',
            'name'
        ]
    });
    (0, _insertHtmlJs.insertHTML)('<h3>Optional Chaining</h3>');
    await (0, _insertHtmlJs.insertLogic)({
        '?.': [
            {
                'project': {
                    'name': 'ProjectName'
                }
            },
            'project'
        ]
    });
    await (0, _insertHtmlJs.insertLogic)({
        '?.': [
            {
                'project': {
                    'name': 'ProjectName'
                }
            },
            'random',
            'random'
        ]
    });
    (0, _insertHtmlJs.insertHTML)('<h2>Unary Operators</h2>');
    (0, _insertHtmlJs.insertHTML)('<h3>delete</h3>');
    await (0, _insertHtmlJs.insertLogic)({
        'delete': [
            {
                'var': [
                    'project'
                ]
            },
            'name'
        ]
    }, {
        'project': {
            'name': 'ProjectName'
        }
    });
    (0, _insertHtmlJs.insertHTML)('<h3>void</h3>');
    await (0, _insertHtmlJs.insertLogic)({
        'void': [
            true,
            123,
            'string'
        ]
    });
    (0, _insertHtmlJs.insertHTML)('<h3>typeof</h3>');
    await (0, _insertHtmlJs.insertLogic)({
        'typeof': [
            true
        ]
    });
    (0, _insertHtmlJs.insertHTML)('<h3>Bitwise NOT</h3>');
    await (0, _insertHtmlJs.insertLogic)({
        '~': [
            5
        ]
    });
    (0, _insertHtmlJs.insertHTML)('<h3>Logical NOT</h3>');
    await (0, _insertHtmlJs.insertLogic)({
        '!': [
            false
        ]
    });
    (0, _insertHtmlJs.insertHTML)('<h2>Arithmetic Operators</h2>');
    (0, _insertHtmlJs.insertHTML)('<h3>Exponentiation</h3>');
    await (0, _insertHtmlJs.insertLogic)({
        '**': [
            3,
            2
        ]
    });
    (0, _insertHtmlJs.insertHTML)('<h3>Multiplication</h3>');
    await (0, _insertHtmlJs.insertLogic)({
        '*': [
            3,
            2
        ]
    });
    (0, _insertHtmlJs.insertHTML)('<h3>Division</h3>');
    await (0, _insertHtmlJs.insertLogic)({
        '/': [
            4,
            2
        ]
    });
    (0, _insertHtmlJs.insertHTML)('<h3>Remainder</h3>');
    await (0, _insertHtmlJs.insertLogic)({
        '%': [
            3,
            2
        ]
    });
    (0, _insertHtmlJs.insertHTML)('<h3>Addition / Unary Plus</h3>');
    await (0, _insertHtmlJs.insertLogic)({
        '+': [
            3,
            2
        ]
    });
    await (0, _insertHtmlJs.insertLogic)({
        '+': [
            '3'
        ]
    });
    (0, _insertHtmlJs.insertHTML)('<h3>Subtraction / Unary Negation</h3>');
    await (0, _insertHtmlJs.insertLogic)({
        '-': [
            3,
            2
        ]
    });
    await (0, _insertHtmlJs.insertLogic)({
        '-': [
            '3'
        ]
    });
    (0, _insertHtmlJs.insertHTML)('<h2>Relational Operators</h2>');
    (0, _insertHtmlJs.insertHTML)('<h3>Less Than</h3>');
    await (0, _insertHtmlJs.insertLogic)({
        '<': [
            3,
            2
        ]
    });
    await (0, _insertHtmlJs.insertLogic)({
        '<': [
            1,
            2,
            3
        ]
    });
    (0, _insertHtmlJs.insertHTML)('<h3>Greater Than</h3>');
    await (0, _insertHtmlJs.insertLogic)({
        '>': [
            3,
            2
        ]
    });
    await (0, _insertHtmlJs.insertLogic)({
        '>': [
            1,
            2,
            3
        ]
    });
    (0, _insertHtmlJs.insertHTML)('<h3>Less Than Or Equal</h3>');
    await (0, _insertHtmlJs.insertLogic)({
        '<=': [
            1,
            2
        ]
    });
    await (0, _insertHtmlJs.insertLogic)({
        '<=': [
            3,
            3
        ]
    });
    await (0, _insertHtmlJs.insertLogic)({
        '<=': [
            2,
            1
        ]
    });
    (0, _insertHtmlJs.insertHTML)('<h3>Greater Than Or Equal</h3>');
    await (0, _insertHtmlJs.insertLogic)({
        '>=': [
            3,
            3
        ]
    });
    (0, _insertHtmlJs.insertHTML)('<h3>Instance Of</h3>');
    await (0, _insertHtmlJs.insertLogic)({
        'instanceof': [
            {
                'String()': [
                    'test'
                ]
            },
            {
                'String': []
            }
        ]
    });
    (0, _insertHtmlJs.insertHTML)('<h3>In</h3>');
    await (0, _insertHtmlJs.insertLogic)({
        'in': [
            'project',
            {
                'project': 'ProjectName'
            }
        ]
    });
    (0, _insertHtmlJs.insertHTML)('<h2>Equality Operators</h2>');
    (0, _insertHtmlJs.insertHTML)('<h3>Equality</h3>');
    await (0, _insertHtmlJs.insertLogic)({
        '==': [
            1,
            '1'
        ]
    });
    (0, _insertHtmlJs.insertHTML)('<h3>Inequality</h3>');
    await (0, _insertHtmlJs.insertLogic)({
        '!=': [
            1,
            '1'
        ]
    });
    (0, _insertHtmlJs.insertHTML)('<h3>Strict Equality</h3>');
    await (0, _insertHtmlJs.insertLogic)({
        '===': [
            1,
            '1'
        ]
    });
    (0, _insertHtmlJs.insertHTML)('<h3>Strict Inequality</h3>');
    await (0, _insertHtmlJs.insertLogic)({
        '!==': [
            1,
            '1'
        ]
    });
    (0, _insertHtmlJs.insertHTML)('<h2>Bitwise Shift Operators</h2>');
    (0, _insertHtmlJs.insertHTML)('<h3>Left Shift</h3>');
    await (0, _insertHtmlJs.insertLogic)({
        '<<': [
            5,
            2
        ]
    });
    (0, _insertHtmlJs.insertHTML)('<h3>Right Shift</h3>');
    await (0, _insertHtmlJs.insertLogic)({
        '>>': [
            5,
            2
        ]
    });
    (0, _insertHtmlJs.insertHTML)('<h3>Unsigned Right Shift</h3>');
    await (0, _insertHtmlJs.insertLogic)({
        '>>>': [
            5,
            2
        ]
    });
    (0, _insertHtmlJs.insertHTML)('<h2>Binary Bitwise Operators</h2>');
    (0, _insertHtmlJs.insertHTML)('<h3>Bitwise AND</h3>');
    await (0, _insertHtmlJs.insertLogic)({
        '&': [
            5,
            3
        ]
    });
    (0, _insertHtmlJs.insertHTML)('<h3>Bitwise OR</h3>');
    await (0, _insertHtmlJs.insertLogic)({
        '|': [
            5,
            3
        ]
    });
    (0, _insertHtmlJs.insertHTML)('<h3>Bitwise XOR</h3>');
    await (0, _insertHtmlJs.insertLogic)({
        '^': [
            5,
            3
        ]
    });
    (0, _insertHtmlJs.insertHTML)('<h2>Binary Logical Operators</h2>');
    (0, _insertHtmlJs.insertHTML)('<h3>Logical AND</h3>');
    await (0, _insertHtmlJs.insertLogic)({
        '&&': [
            true,
            3
        ]
    });
    (0, _insertHtmlJs.insertHTML)('<h3>Logical OR</h3>');
    await (0, _insertHtmlJs.insertLogic)({
        '||': [
            true,
            3
        ]
    });
    (0, _insertHtmlJs.insertHTML)('<h3>Nullish Coalescing</h3>');
    await (0, _insertHtmlJs.insertLogic)({
        '??': [
            null,
            3
        ]
    });
    (0, _insertHtmlJs.insertHTML)('<h2>Conditional (Ternary) Operator</h2>');
    await (0, _insertHtmlJs.insertLogic)({
        '?:': [
            true,
            'truthy',
            'falsy'
        ]
    });
    await (0, _insertHtmlJs.insertLogic)({
        '?:': [
            0,
            'truthy',
            'falsy'
        ]
    });
    (0, _insertHtmlJs.insertHTML)('<h2>Assignment Operators</h2>');
    await (0, _insertHtmlJs.insertLogic)({
        '=': [
            {
                'blockof': [
                    'x'
                ]
            },
            'x',
            123
        ]
    }, {
        x: null
    });
    (0, _insertHtmlJs.insertHTML)('<h3>Multiplication Assignment</h3>');
    await (0, _insertHtmlJs.insertLogic)({
        '*=': [
            {
                'blockof': [
                    'x'
                ]
            },
            'x',
            2
        ]
    }, {
        'x': 2
    });
    (0, _insertHtmlJs.insertHTML)('<h3>Division Assignment</h3>');
    await (0, _insertHtmlJs.insertLogic)({
        '/=': [
            {
                'blockof': [
                    'x'
                ]
            },
            'x',
            2
        ]
    }, {
        'x': 4
    });
    (0, _insertHtmlJs.insertHTML)('<h3>Remainder Assignment</h3>');
    await (0, _insertHtmlJs.insertLogic)({
        '%=': [
            {
                'blockof': [
                    'x'
                ]
            },
            'x',
            2
        ]
    }, {
        'x': 3
    });
    (0, _insertHtmlJs.insertHTML)('<h3>Addition Assignment</h3>');
    await (0, _insertHtmlJs.insertLogic)({
        '+=': [
            {
                'blockof': [
                    'x'
                ]
            },
            'x',
            2
        ]
    }, {
        'x': 1
    });
    (0, _insertHtmlJs.insertHTML)('<h3>Subtraction Assignment</h3>');
    await (0, _insertHtmlJs.insertLogic)({
        '-=': [
            {
                'blockof': [
                    'x'
                ]
            },
            'x',
            2
        ]
    }, {
        'x': 3
    });
    (0, _insertHtmlJs.insertHTML)('<h3>Left Shift Assignment</h3>');
    await (0, _insertHtmlJs.insertLogic)({
        '<<=': [
            {
                'blockof': [
                    'x'
                ]
            },
            'x',
            2
        ]
    }, {
        'x': 5
    });
    (0, _insertHtmlJs.insertHTML)('<h3>Right Shift Assignment</h3>');
    await (0, _insertHtmlJs.insertLogic)({
        '>>=': [
            {
                'blockof': [
                    'x'
                ]
            },
            'x',
            2
        ]
    }, {
        'x': 5
    });
    (0, _insertHtmlJs.insertHTML)('<h3>Unsigned Right Shift Assignment</h3>');
    await (0, _insertHtmlJs.insertLogic)({
        '>>>=': [
            {
                'blockof': [
                    'x'
                ]
            },
            'x',
            2
        ]
    }, {
        'x': 5
    });
    (0, _insertHtmlJs.insertHTML)('<h3>Bitwise AND Assignment</h3>');
    await (0, _insertHtmlJs.insertLogic)({
        '&=': [
            {
                'blockof': [
                    'x'
                ]
            },
            'x',
            3
        ]
    }, {
        'x': 5
    });
    (0, _insertHtmlJs.insertHTML)('<h3>Bitwise OR Assignment</h3>');
    await (0, _insertHtmlJs.insertLogic)({
        '|=': [
            {
                'blockof': [
                    'x'
                ]
            },
            'x',
            3
        ]
    }, {
        'x': 5
    });
    (0, _insertHtmlJs.insertHTML)('<h3>Bitwise XOR Assignment</h3>');
    await (0, _insertHtmlJs.insertLogic)({
        '^=': [
            {
                'blockof': [
                    'x'
                ]
            },
            'x',
            3
        ]
    }, {
        'x': 5
    });
    (0, _insertHtmlJs.insertHTML)('<h3>Exponentiation Assignment</h3>');
    await (0, _insertHtmlJs.insertLogic)({
        '**=': [
            {
                'blockof': [
                    'x'
                ]
            },
            'x',
            2
        ]
    }, {
        'x': 2
    });
    (0, _insertHtmlJs.insertHTML)('<h3>Logical AND Assignment</h3>');
    await (0, _insertHtmlJs.insertLogic)({
        '&&=': [
            {
                'blockof': [
                    'x'
                ]
            },
            'x',
            false
        ]
    }, {
        'x': true
    });
    (0, _insertHtmlJs.insertHTML)('<h3>Logical OR Assignment</h3>');
    await (0, _insertHtmlJs.insertLogic)({
        '||=': [
            {
                'blockof': [
                    'x'
                ]
            },
            'x',
            false
        ]
    }, {
        'x': true
    });
    (0, _insertHtmlJs.insertHTML)('<h3>Nullish Coalescing Assignment</h3>');
    await (0, _insertHtmlJs.insertLogic)({
        '??=': [
            {
                'blockof': [
                    'x'
                ]
            },
            'x',
            123
        ]
    }, {
        'x': null
    });
    await (0, _insertHtmlJs.insertLogic)({
        '??=': [
            {
                'blockof': [
                    'x'
                ]
            },
            'x',
            123
        ]
    }, {
        'x': 'abc'
    });
    (0, _insertHtmlJs.insertHTML)('<h2>Comma Operator</h2>');
    await (0, _insertHtmlJs.insertLogic)({
        ',': [
            null,
            true,
            123,
            'test'
        ]
    });
    (0, _insertHtmlJs.insertHTML)('<h2>Try</h2>');
    await (0, _insertHtmlJs.insertLogic)({
        'try': [
            123,
            {
                'var': [
                    'error'
                ]
            }
        ]
    });
    await (0, _insertHtmlJs.insertLogic)({
        'try': [
            123,
            {
                'var': [
                    'error'
                ]
            },
            'finally'
        ]
    });
    await (0, _insertHtmlJs.insertLogic)({
        'try': [
            {
                '=': [
                    null,
                    null,
                    123
                ]
            },
            {
                '.': [
                    {
                        'var': [
                            'error'
                        ]
                    },
                    'message'
                ]
            }
        ]
    });
    await (0, _insertHtmlJs.insertLogic)({
        'try': [
            {
                '=': [
                    null,
                    null,
                    123
                ]
            },
            {
                '.': [
                    {
                        'var': [
                            'error'
                        ]
                    },
                    'message'
                ]
            },
            'finally'
        ]
    });
    (0, _insertHtmlJs.insertHTML)('<h2>Vars Operator</h2>');
    await (0, _insertHtmlJs.insertLogic)({
        'blockof': [
            'project'
        ]
    }, {
        'project': 'ProjectName'
    });
    await (0, _insertHtmlJs.insertLogic)({
        'block': [
            {
                ',': [
                    {
                        'let': [
                            'a',
                            true
                        ]
                    },
                    {
                        'let': [
                            'b',
                            false
                        ]
                    },
                    {
                        'blockof': [
                            'a'
                        ]
                    }
                ]
            }
        ]
    }, {
        'project': 'ProjectName'
    });
    await (0, _insertHtmlJs.insertLogic)({
        'var': [
            'project'
        ]
    }, {
        'project': 'ProjectName'
    });
    (0, _insertHtmlJs.insertHTML)('<h2>Utilities Operator</h2>');
    await (0, _insertHtmlJs.insertLogic)({
        'decodeURI()': [
            'https%3A%2F%2Fexample.com%2Fpath%3Fquery%3Dvalue'
        ]
    });
    await (0, _insertHtmlJs.insertLogic)({
        'decodeURIComponent()': [
            'https%3A%2F%2Fexample.com%2Fpath%3Fquery%3Dvalue'
        ]
    });
    await (0, _insertHtmlJs.insertLogic)({
        'encodeURI()': [
            'https://example.com/path?query=value'
        ]
    });
    await (0, _insertHtmlJs.insertLogic)({
        'encodeURIComponent()': [
            'https://example.com/path?query=value'
        ]
    });
    await (0, _insertHtmlJs.insertLogic)({
        'isFinite()': [
            123
        ]
    });
    await (0, _insertHtmlJs.insertLogic)({
        'isFinite()': [
            Infinity
        ]
    });
    await (0, _insertHtmlJs.insertLogic)({
        'isNaN()': [
            NaN
        ]
    });
    await (0, _insertHtmlJs.insertLogic)({
        'isNaN()': [
            123
        ]
    });
    await (0, _insertHtmlJs.insertLogic)({
        'parseFloat()': [
            '3.14'
        ]
    });
    await (0, _insertHtmlJs.insertLogic)({
        'parseInt()': [
            '42'
        ]
    });
    // insertHTML('<h2>Intl</h2>');
    // insertHTML('<p><strong>TODO.</strong></p>');
    // insertHTML('<h2>JSON</h2>');
    // insertHTML('<h3>isRawJSON</h3>');
    // await insertLogic({ 'JSON.isRawJSON()': [{ 'JSON.rawJSON()': [12345] }] });
    // await insertLogic({ 'JSON.isRawJSON()': ['12345'] });
    // insertHTML('<h3>parse</h3>');
    // await insertLogic({ 'JSON.parse()': ['{ "x": "abc" }'] });
    // insertHTML('<h3>rawJSON</h3>');
    // await insertLogic({ 'JSON.rawJSON()': ['12345'] });
    // insertHTML('<h3>stringify</h3>');
    // await insertLogic({ 'JSON.stringify()': [{ 'x': 'abc' }] });
    // insertHTML('<h2>Math</h2>');
    // insertHTML('<p><strong>TODO.</strong></p>');
    (0, _insertHtmlJs.insertHTML)('<h2>String</h2>');
    await (0, _insertHtmlJs.insertLogic)({
        'String()': [
            12345
        ]
    });
    await (0, _insertHtmlJs.insertLogic)({
        'String.fromCharCode()': [
            65,
            66,
            67
        ]
    });
    await (0, _insertHtmlJs.insertLogic)({
        'String.fromCodePoint()': [
            128512,
            128513,
            128514
        ]
    });
    await (0, _insertHtmlJs.insertLogic)({
        'String:length': [
            'Hello'
        ]
    });
    await (0, _insertHtmlJs.insertLogic)({
        'String:charAt()': [
            'Hello',
            1
        ]
    });
    await (0, _insertHtmlJs.insertLogic)({
        'String:includes()': [
            'Hello, world!',
            'world'
        ]
    });
    await (0, _insertHtmlJs.insertLogic)({
        'String:toUpperCase()': [
            'Hello, world!'
        ]
    });
}
insertLogics();

},{"./insert-html.js":"hpCQ4","../lib/index.js":"3Rr4P","../lib/core.js":"hjuFe","../lib/utilities.js":"kZfDh","../lib/intl.js":"bp72p","../lib/json.js":"hh43J","../lib/math.js":"7U9Md","../lib/array.js":"ersMf","../lib/arraybuffer.js":"b4lXt","../lib/boolean.js":"8re3F","../lib/date.js":"fKO5F","../lib/map.js":"99zA0","../lib/number.js":"tFS62","../lib/object.js":"lmnXL","../lib/regexp.js":"bJ1JZ","../lib/set.js":"gWYWO","../lib/string.js":"aXZeh","../lib/uint8array.js":"iKZqQ","../lib/url.js":"1zgqO"}],"hpCQ4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "insertHTML", ()=>insertHTML);
parcelHelpers.export(exports, "insertLogic", ()=>insertLogic);
var _indexJs = require("../lib/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
function insertHTML(...htmlStrings) {
    document.body.insertAdjacentHTML('beforeend', htmlStrings.join(''));
}
async function insertLogic(rule, data) {
    insertHTML('<div class="logic">', '<pre><code>jsJsonLogic(', JSON.stringify(rule, null, 2) ?? 'undefined', ', ', JSON.stringify(data, null, 2) ?? 'undefined', ');</code></pre>', '<pre><code>', JSON.stringify(await (0, _indexJsDefault.default)(rule, data), null, 2) ?? 'undefined', '</code></pre>', '<pre><code>', JSON.stringify(data, null, 2) ?? 'undefined', '</code></pre>', '</div>');
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","../lib/index.js":"3Rr4P"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"3Rr4P":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "operators", ()=>operators);
parcelHelpers.export(exports, "evaluate", ()=>evaluate);
parcelHelpers.export(exports, "default", ()=>async function(rule, data) {
        const vars = data === undefined ? [] : [
            data
        ];
        vars.push({});
        return await ev(rule, vars);
    });
const operators = {};
async function evaluate(rule, vars) {
    if (rule && typeof rule === 'object' && !Array.isArray(rule)) for(const key in rule){
        const op = operators[key];
        if (op === undefined) break;
        return await op(rule[key], vars);
    }
    return rule;
}
const ev = evaluate;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hjuFe":[function(require,module,exports,__globalThis) {
var _indexJs = require("./index.js");
// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators
// PRIMARY EXPRESSIONS
(0, _indexJs.operators)['undefined'] = async ()=>{
    return undefined;
};
// LEFT-HAND-SIDE EXPRESSIONS
(0, _indexJs.operators)['.'] = async (args, vars)=>{
    let res = await (0, _indexJs.evaluate)(args[0], vars);
    for(let idx = 1, len = args.length; idx < len; idx++){
        const arg = await (0, _indexJs.evaluate)(args[idx], vars);
        res = res[arg];
    }
    return res;
};
(0, _indexJs.operators)['?.'] = async (args, vars)=>{
    let res = await (0, _indexJs.evaluate)(args[0], vars);
    for(let idx = 1, len = args.length; idx < len; idx++){
        if (res == null) break;
        const arg = await (0, _indexJs.evaluate)(args[idx], vars);
        res = res[arg];
    }
    return res;
};
// UNARY OPERATORS
(0, _indexJs.operators)['delete'] = async (args, vars)=>{
    const obj = await (0, _indexJs.evaluate)(args[0], vars);
    const key = await (0, _indexJs.evaluate)(args[1], vars);
    return delete obj[key];
};
(0, _indexJs.operators)['void'] = async (args, vars)=>{
    for(let idx = 0, len = args.length; idx < len; idx++)await (0, _indexJs.evaluate)(args[idx], vars);
    return undefined;
};
(0, _indexJs.operators)['typeof'] = async (args, vars)=>{
    const val = await (0, _indexJs.evaluate)(args[0], vars);
    return typeof val;
};
(0, _indexJs.operators)['~'] = async (args, vars)=>{
    const val = await (0, _indexJs.evaluate)(args[0], vars);
    return ~val;
};
(0, _indexJs.operators)['!'] = async (args, vars)=>{
    const val = await (0, _indexJs.evaluate)(args[0], vars);
    return !val;
};
// ARITHMETIC OPERATORS
(0, _indexJs.operators)['**'] = async (args, vars)=>{
    let res = await (0, _indexJs.evaluate)(args[0], vars);
    for(let idx = 1, len = args.length; idx < len; idx++){
        const arg = await (0, _indexJs.evaluate)(args[idx], vars);
        res = res ** arg;
    }
    return res;
};
(0, _indexJs.operators)['*'] = async (args, vars)=>{
    let res = await (0, _indexJs.evaluate)(args[0], vars);
    for(let idx = 1, len = args.length; idx < len; idx++){
        const arg = await (0, _indexJs.evaluate)(args[idx], vars);
        res = res * arg;
    }
    return res;
};
(0, _indexJs.operators)['/'] = async (args, vars)=>{
    let res = await (0, _indexJs.evaluate)(args[0], vars);
    for(let idx = 1, len = args.length; idx < len; idx++){
        const arg = await (0, _indexJs.evaluate)(args[idx], vars);
        res = res / arg;
    }
    return res;
};
(0, _indexJs.operators)['%'] = async (args, vars)=>{
    let res = await (0, _indexJs.evaluate)(args[0], vars);
    for(let idx = 1, len = args.length; idx < len; idx++){
        const arg = await (0, _indexJs.evaluate)(args[idx], vars);
        res = res % arg;
    }
    return res;
};
(0, _indexJs.operators)['+'] = async (args, vars)=>{
    let res = await (0, _indexJs.evaluate)(args[0], vars);
    if (args.length === 1) return +res;
    for(let idx = 1, len = args.length; idx < len; idx++){
        const arg = await (0, _indexJs.evaluate)(args[idx], vars);
        res = res + arg;
    }
    return res;
};
(0, _indexJs.operators)['-'] = async (args, vars)=>{
    let res = await (0, _indexJs.evaluate)(args[0], vars);
    if (args.length === 1) return -res;
    for(let idx = 1, len = args.length; idx < len; idx++){
        const arg = await (0, _indexJs.evaluate)(args[idx], vars);
        res = res - arg;
    }
    return res;
};
// RELATIONAL OPERATORS
(0, _indexJs.operators)['<'] = async (args, vars)=>{
    for(let last = await (0, _indexJs.evaluate)(args[0], vars), idx = 1, len = args.length; idx < len; idx++){
        const cur = await (0, _indexJs.evaluate)(args[idx], vars);
        if (!(last < cur)) return false;
        last = cur;
    }
    return true;
};
(0, _indexJs.operators)['>'] = async (args, vars)=>{
    for(let last = await (0, _indexJs.evaluate)(args[0], vars), idx = 1, len = args.length; idx < len; idx++){
        const cur = await (0, _indexJs.evaluate)(args[idx], vars);
        if (!(last > cur)) return false;
        last = cur;
    }
    return true;
};
(0, _indexJs.operators)['<='] = async (args, vars)=>{
    for(let last = await (0, _indexJs.evaluate)(args[0], vars), idx = 1, len = args.length; idx < len; idx++){
        const cur = await (0, _indexJs.evaluate)(args[idx], vars);
        if (!(last <= cur)) return false;
        last = cur;
    }
    return true;
};
(0, _indexJs.operators)['>='] = async (args, vars)=>{
    for(let last = await (0, _indexJs.evaluate)(args[0], vars), idx = 1, len = args.length; idx < len; idx++){
        const cur = await (0, _indexJs.evaluate)(args[idx], vars);
        if (!(last >= cur)) return false;
        last = cur;
    }
    return true;
};
(0, _indexJs.operators)['instanceof'] = async (args, vars)=>{
    const lhs = await (0, _indexJs.evaluate)(args[0], vars);
    const rhs = await (0, _indexJs.evaluate)(args[1], vars);
    return lhs instanceof rhs;
};
(0, _indexJs.operators)['in'] = async (args, vars)=>{
    const lhs = await (0, _indexJs.evaluate)(args[0], vars);
    const rhs = await (0, _indexJs.evaluate)(args[1], vars);
    return lhs in rhs;
};
// EQUALITY OPERATORS
(0, _indexJs.operators)['=='] = async (args, vars)=>{
    for(let last = await (0, _indexJs.evaluate)(args[0], vars), idx = 1, len = args.length; idx < len; idx++){
        const cur = await (0, _indexJs.evaluate)(args[idx], vars);
        if (!(last == cur)) return false;
        last = cur;
    }
    return true;
};
(0, _indexJs.operators)['!='] = async (args, vars)=>{
    for(let last = await (0, _indexJs.evaluate)(args[0], vars), idx = 1, len = args.length; idx < len; idx++){
        const cur = await (0, _indexJs.evaluate)(args[idx], vars);
        if (!(last != cur)) return false;
        last = cur;
    }
    return true;
};
(0, _indexJs.operators)['==='] = async (args, vars)=>{
    for(let last = await (0, _indexJs.evaluate)(args[0], vars), idx = 1, len = args.length; idx < len; idx++){
        const cur = await (0, _indexJs.evaluate)(args[idx], vars);
        if (!(last === cur)) return false;
        last = cur;
    }
    return true;
};
(0, _indexJs.operators)['!=='] = async (args, vars)=>{
    for(let last = await (0, _indexJs.evaluate)(args[0], vars), idx = 1, len = args.length; idx < len; idx++){
        const cur = await (0, _indexJs.evaluate)(args[idx], vars);
        if (!(last !== cur)) return false;
        last = cur;
    }
    return true;
};
// BITWISE SHIFT OPERATORS
(0, _indexJs.operators)['<<'] = async (args, vars)=>{
    let res = await (0, _indexJs.evaluate)(args[0], vars);
    for(let idx = 1, len = args.length; idx < len; idx++){
        const arg = await (0, _indexJs.evaluate)(args[idx], vars);
        res = res << arg;
    }
    return res;
};
(0, _indexJs.operators)['>>'] = async (args, vars)=>{
    let res = await (0, _indexJs.evaluate)(args[0], vars);
    for(let idx = 1, len = args.length; idx < len; idx++){
        const arg = await (0, _indexJs.evaluate)(args[idx], vars);
        res = res >> arg;
    }
    return res;
};
(0, _indexJs.operators)['>>>'] = async (args, vars)=>{
    let res = await (0, _indexJs.evaluate)(args[0], vars);
    for(let idx = 1, len = args.length; idx < len; idx++){
        const arg = await (0, _indexJs.evaluate)(args[idx], vars);
        res = res >>> arg;
    }
    return res;
};
// BINARY BITWISE OPERATORS
(0, _indexJs.operators)['&'] = async (args, vars)=>{
    let res = await (0, _indexJs.evaluate)(args[0], vars);
    for(let idx = 1, len = args.length; idx < len; idx++){
        const arg = await (0, _indexJs.evaluate)(args[idx], vars);
        res = res & arg;
    }
    return res;
};
(0, _indexJs.operators)['|'] = async (args, vars)=>{
    let res = await (0, _indexJs.evaluate)(args[0], vars);
    for(let idx = 1, len = args.length; idx < len; idx++){
        const arg = await (0, _indexJs.evaluate)(args[idx], vars);
        res = res | arg;
    }
    return res;
};
(0, _indexJs.operators)['^'] = async (args, vars)=>{
    let res = await (0, _indexJs.evaluate)(args[0], vars);
    for(let idx = 1, len = args.length; idx < len; idx++){
        const arg = await (0, _indexJs.evaluate)(args[idx], vars);
        res = res ^ arg;
    }
    return res;
};
// BINARY LOGICAL OPERATORS
(0, _indexJs.operators)['&&'] = async (args, vars)=>{
    let res = await (0, _indexJs.evaluate)(args[0], vars);
    for(let idx = 1, len = args.length; idx < len; idx++){
        if (!res) break;
        res = await (0, _indexJs.evaluate)(args[idx], vars);
    }
    return res;
};
(0, _indexJs.operators)['||'] = async (args, vars)=>{
    let res = await (0, _indexJs.evaluate)(args[0], vars);
    for(let idx = 1, len = args.length; idx < len; idx++){
        if (res) break;
        res = await (0, _indexJs.evaluate)(args[idx], vars);
    }
    return res;
};
(0, _indexJs.operators)['??'] = async (args, vars)=>{
    let res = await (0, _indexJs.evaluate)(args[0], vars);
    for(let idx = 1, len = args.length; idx < len; idx++){
        if (res != null) break;
        res = await (0, _indexJs.evaluate)(args[idx], vars);
    }
    return res;
};
// CONDITIONAL (TERNARY) OPERATOR
(0, _indexJs.operators)['?:'] = async (args, vars)=>{
    const cond = await (0, _indexJs.evaluate)(args[0], vars);
    return cond ? await (0, _indexJs.evaluate)(args[1], vars) : await (0, _indexJs.evaluate)(args[2], vars);
};
// ASSIGNMENT OPERATORS
(0, _indexJs.operators)['='] = async (args, vars)=>{
    const obj = await (0, _indexJs.evaluate)(args[0], vars);
    const key = await (0, _indexJs.evaluate)(args[1], vars);
    const val = await (0, _indexJs.evaluate)(args[2], vars);
    return obj[key] = val;
};
(0, _indexJs.operators)['*='] = async (args, vars)=>{
    const obj = await (0, _indexJs.evaluate)(args[0], vars);
    const key = await (0, _indexJs.evaluate)(args[1], vars);
    const val = await (0, _indexJs.evaluate)(args[2], vars);
    return obj[key] *= val;
};
(0, _indexJs.operators)['/='] = async (args, vars)=>{
    const obj = await (0, _indexJs.evaluate)(args[0], vars);
    const key = await (0, _indexJs.evaluate)(args[1], vars);
    const val = await (0, _indexJs.evaluate)(args[2], vars);
    return obj[key] /= val;
};
(0, _indexJs.operators)['%='] = async (args, vars)=>{
    const obj = await (0, _indexJs.evaluate)(args[0], vars);
    const key = await (0, _indexJs.evaluate)(args[1], vars);
    const val = await (0, _indexJs.evaluate)(args[2], vars);
    return obj[key] %= val;
};
(0, _indexJs.operators)['+='] = async (args, vars)=>{
    const obj = await (0, _indexJs.evaluate)(args[0], vars);
    const key = await (0, _indexJs.evaluate)(args[1], vars);
    const val = await (0, _indexJs.evaluate)(args[2], vars);
    return obj[key] += val;
};
(0, _indexJs.operators)['-='] = async (args, vars)=>{
    const obj = await (0, _indexJs.evaluate)(args[0], vars);
    const key = await (0, _indexJs.evaluate)(args[1], vars);
    const val = await (0, _indexJs.evaluate)(args[2], vars);
    return obj[key] -= val;
};
(0, _indexJs.operators)['<<='] = async (args, vars)=>{
    const obj = await (0, _indexJs.evaluate)(args[0], vars);
    const key = await (0, _indexJs.evaluate)(args[1], vars);
    const val = await (0, _indexJs.evaluate)(args[2], vars);
    return obj[key] <<= val;
};
(0, _indexJs.operators)['>>='] = async (args, vars)=>{
    const obj = await (0, _indexJs.evaluate)(args[0], vars);
    const key = await (0, _indexJs.evaluate)(args[1], vars);
    const val = await (0, _indexJs.evaluate)(args[2], vars);
    return obj[key] >>= val;
};
(0, _indexJs.operators)['>>>='] = async (args, vars)=>{
    const obj = await (0, _indexJs.evaluate)(args[0], vars);
    const key = await (0, _indexJs.evaluate)(args[1], vars);
    const val = await (0, _indexJs.evaluate)(args[2], vars);
    return obj[key] >>>= val;
};
(0, _indexJs.operators)['&='] = async (args, vars)=>{
    const obj = await (0, _indexJs.evaluate)(args[0], vars);
    const key = await (0, _indexJs.evaluate)(args[1], vars);
    const val = await (0, _indexJs.evaluate)(args[2], vars);
    return obj[key] &= val;
};
(0, _indexJs.operators)['^='] = async (args, vars)=>{
    const obj = await (0, _indexJs.evaluate)(args[0], vars);
    const key = await (0, _indexJs.evaluate)(args[1], vars);
    const val = await (0, _indexJs.evaluate)(args[2], vars);
    return obj[key] ^= val;
};
(0, _indexJs.operators)['|='] = async (args, vars)=>{
    const obj = await (0, _indexJs.evaluate)(args[0], vars);
    const key = await (0, _indexJs.evaluate)(args[1], vars);
    const val = await (0, _indexJs.evaluate)(args[2], vars);
    return obj[key] |= val;
};
(0, _indexJs.operators)['**='] = async (args, vars)=>{
    const obj = await (0, _indexJs.evaluate)(args[0], vars);
    const key = await (0, _indexJs.evaluate)(args[1], vars);
    const val = await (0, _indexJs.evaluate)(args[2], vars);
    return obj[key] **= val;
};
(0, _indexJs.operators)['&&='] = async (args, vars)=>{
    const obj = await (0, _indexJs.evaluate)(args[0], vars);
    const key = await (0, _indexJs.evaluate)(args[1], vars);
    const val = await (0, _indexJs.evaluate)(args[2], vars);
    return obj[key] &&= val;
};
(0, _indexJs.operators)['||='] = async (args, vars)=>{
    const obj = await (0, _indexJs.evaluate)(args[0], vars);
    const key = await (0, _indexJs.evaluate)(args[1], vars);
    const val = await (0, _indexJs.evaluate)(args[2], vars);
    return obj[key] ||= val;
};
(0, _indexJs.operators)['??='] = async (args, vars)=>{
    const obj = await (0, _indexJs.evaluate)(args[0], vars);
    const key = await (0, _indexJs.evaluate)(args[1], vars);
    const val = await (0, _indexJs.evaluate)(args[2], vars);
    return obj[key] ??= val;
};
// COMMA OPERATOR
(0, _indexJs.operators)[','] = async (args, vars)=>{
    let res;
    for(let idx = 0, len = args.length; idx < len; idx++)res = await (0, _indexJs.evaluate)(args[idx], vars);
    return res;
};
// TRY CATCH FINALLY OPERATOR
(0, _indexJs.operators)['try'] = async (args, vars)=>{
    let res;
    try {
        const tryRes = await (0, _indexJs.evaluate)(args[0], vars);
        res = tryRes;
    } catch (error) {
        vars.push({
            error
        });
        let catchRes;
        try {
            catchRes = await (0, _indexJs.evaluate)(args[1], vars);
        } finally{
            vars.pop();
        }
        if (catchRes !== undefined) res = catchRes;
        else throw error;
    } finally{
        const finalRes = await (0, _indexJs.evaluate)(args[2], vars);
        if (finalRes !== undefined) res = finalRes;
    }
    return res;
};
// VARS OPERATOR
(0, _indexJs.operators)['block'] = async (args, vars)=>{
    let res;
    vars.push({});
    try {
        for(let idx = 0, len = args.length; idx < len; idx++)res = await (0, _indexJs.evaluate)(args[idx], vars);
    } finally{
        vars.pop();
    }
    return res;
};
const blockMap = new WeakMap();
function getBlockOf(vars, name) {
    let curBlock = vars[vars.length - 1];
    let block = blockMap.get(curBlock);
    if (block === undefined) {
        block = {};
        blockMap.set(curBlock, block);
    }
    if (Object.hasOwn(block, name)) return block[name];
    for(let idx = vars.length; --idx >= 0;){
        if (Object.hasOwn(vars[idx], name)) return block[name] = vars[idx];
    }
}
(0, _indexJs.operators)['blockof'] = async (args, vars)=>{
    const name = await (0, _indexJs.evaluate)(args[0], vars);
    return getBlockOf(vars, name);
};
(0, _indexJs.operators)['var'] = async (args, vars)=>{
    const name = await (0, _indexJs.evaluate)(args[0], vars);
    return getBlockOf(vars, name)?.[name];
};
(0, _indexJs.operators)['let'] = async (args, vars)=>{
    const curBlock = vars[vars.length - 1];
    const name = await (0, _indexJs.evaluate)(args[0], vars);
    let block = blockMap.get(curBlock);
    if (block !== undefined) delete block[name];
    const val = await (0, _indexJs.evaluate)(args[1], vars);
    curBlock[name] = await (0, _indexJs.evaluate)(val, vars);
};

},{"./index.js":"3Rr4P"}],"kZfDh":[function(require,module,exports,__globalThis) {
var _indexJs = require("./index.js");
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURI
(0, _indexJs.operators)['decodeURI()'] = async (args, vars)=>{
    const val = await (0, _indexJs.evaluate)(args[0], vars);
    return decodeURI(val);
};
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURI
(0, _indexJs.operators)['decodeURIComponent()'] = async (args, vars)=>{
    const val = await (0, _indexJs.evaluate)(args[0], vars);
    return decodeURIComponent(val);
};
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI
(0, _indexJs.operators)['encodeURI()'] = async (args, vars)=>{
    const val = await (0, _indexJs.evaluate)(args[0], vars);
    return encodeURI(val);
};
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
(0, _indexJs.operators)['encodeURIComponent()'] = async (args, vars)=>{
    const val = await (0, _indexJs.evaluate)(args[0], vars);
    return encodeURIComponent(val);
};
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isFinite
(0, _indexJs.operators)['isFinite()'] = async (args, vars)=>{
    const val = await (0, _indexJs.evaluate)(args[0], vars);
    return isFinite(val);
};
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
(0, _indexJs.operators)['isNaN()'] = async (args, vars)=>{
    const val = await (0, _indexJs.evaluate)(args[0], vars);
    return isNaN(val);
};
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
(0, _indexJs.operators)['parseFloat()'] = async (args, vars)=>{
    const val = await (0, _indexJs.evaluate)(args[0], vars);
    return parseFloat(val);
};
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
(0, _indexJs.operators)['parseInt()'] = async (args, vars)=>{
    const val = await (0, _indexJs.evaluate)(args[0], vars);
    return parseInt(val);
};

},{"./index.js":"3Rr4P"}],"bp72p":[function(require,module,exports,__globalThis) {
var _addOperatorsJs = require("./add-operators.js");
// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl
(0, _addOperatorsJs.addMethodOperators)('Intl.', '()', Intl, [
    'getCanonicalLocales',
    'supportedValuesOf'
]);

},{"./add-operators.js":"6WQvP"}],"6WQvP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addConstructorOperator", ()=>addConstructorOperator);
parcelHelpers.export(exports, "addConstantOperators", ()=>addConstantOperators);
parcelHelpers.export(exports, "addPropOperators", ()=>addPropOperators);
parcelHelpers.export(exports, "addMethodOperators", ()=>addMethodOperators);
parcelHelpers.export(exports, "addInstPropOperators", ()=>addInstPropOperators);
parcelHelpers.export(exports, "addInstMethodOperators", ()=>addInstMethodOperators);
var _indexJs = require("./index.js");
function addConstructorOperator(name, cls) {
    const operator = async (args, vars)=>{
        const len = args.length;
        const arr = new Array(len);
        for(let idx = 0; idx < len; idx++){
            const arg = await (0, _indexJs.evaluate)(args[idx], vars);
            arr[idx] = arg;
        }
        return new cls(...arr);
    };
    (0, _indexJs.operators)[name] = operator;
}
function addConstantOperators(prefix, suffix, obj, names) {
    for(let nameIdx = 0, nameLen = names.length; nameIdx < nameLen; nameIdx++){
        const name = names[nameIdx];
        const operator = async ()=>{
            return obj[name];
        };
        (0, _indexJs.operators)[`${prefix}${name}${suffix}`] = operator;
    }
}
function addPropOperators(prefix, suffix, obj, names) {
    for(let nameIdx = 0, nameLen = names.length; nameIdx < nameLen; nameIdx++){
        const name = names[nameIdx];
        const operator = async (args, vars)=>{
            const val = await (0, _indexJs.evaluate)(args[0], vars);
            if (val === undefined) return obj[name];
            return obj[name] = val;
        };
        (0, _indexJs.operators)[`${prefix}${name}${suffix}`] = operator;
    }
}
function addMethodOperators(prefix, suffix, obj, names) {
    for(let nameIdx = 0, nameLen = names.length; nameIdx < nameLen; nameIdx++){
        const name = names[nameIdx];
        const operator = async (args, vars)=>{
            const len = args.length;
            const arr = new Array(len);
            for(let idx = 0; idx < len; idx++){
                const arg = await (0, _indexJs.evaluate)(args[idx], vars);
                arr[idx] = arg;
            }
            return obj[name](...arr);
        };
        (0, _indexJs.operators)[`${prefix}${name}${suffix}`] = operator;
    }
}
function addInstPropOperators(prefix, suffix, names) {
    for(let nameIdx = 0, nameLen = names.length; nameIdx < nameLen; nameIdx++){
        const name = names[nameIdx];
        const operator = async (args, vars)=>{
            const inst = await (0, _indexJs.evaluate)(args[0], vars);
            const val = await (0, _indexJs.evaluate)(args[1], vars);
            if (val === undefined) return inst[name];
            return inst[name] = val;
        };
        (0, _indexJs.operators)[`${prefix}${name}${suffix}`] = operator;
    }
}
function addInstMethodOperators(prefix, suffix, names) {
    for(let nameIdx = 0, nameLen = names.length; nameIdx < nameLen; nameIdx++){
        const name = names[nameIdx];
        const operator = async (args, vars)=>{
            const inst = await (0, _indexJs.evaluate)(args[0], vars);
            const len = args.length;
            const arr = new Array(len);
            for(let idx = 1; idx < len; idx++){
                const arg = await (0, _indexJs.evaluate)(args[idx], vars);
                arr[idx] = arg;
            }
            return inst[name](...arr);
        };
        (0, _indexJs.operators)[`${prefix}${name}${suffix}`] = operator;
    }
}

},{"./index.js":"3Rr4P","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"hh43J":[function(require,module,exports,__globalThis) {
var _addOperatorsJs = require("./add-operators.js");
// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
(0, _addOperatorsJs.addMethodOperators)('JSON.', '()', JSON, [
    'isRawJSON',
    'parse',
    'rawJSON',
    'stringify'
]);

},{"./add-operators.js":"6WQvP"}],"7U9Md":[function(require,module,exports,__globalThis) {
var _addOperatorsJs = require("./add-operators.js");
// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
(0, _addOperatorsJs.addConstantOperators)('Math.', '', Math, [
    'E',
    'LN10',
    'LN2',
    'LOG10E',
    'LOG2E',
    'PI',
    'SQRT1_2',
    'SQRT2'
]);
(0, _addOperatorsJs.addMethodOperators)('Math.', '()', Math, [
    'abs',
    'acos',
    'acosh',
    'asin',
    'asinh',
    'atan',
    'atan2',
    'atanh',
    'cbrt',
    'ceil',
    'clz32',
    'cos',
    'cosh',
    'exp',
    'expm1',
    'f16round',
    'floor',
    'fround',
    'hypot',
    'imul',
    'log',
    'log10',
    'log1p',
    'log2',
    'max',
    'min',
    'pow',
    'random',
    'round',
    'sign',
    'sin',
    'sinh',
    'sqrt',
    'sumPrecise',
    'tan',
    'tanh',
    'trunc'
]);

},{"./add-operators.js":"6WQvP"}],"ersMf":[function(require,module,exports,__globalThis) {
var _addOperatorsJs = require("./add-operators.js");
var _indexJs = require("./index.js");
// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// CLASS AND CONSTRUCTOR
(0, _indexJs.operators)['Array'] = async ()=>{
    return Array;
};
(0, _addOperatorsJs.addConstructorOperator)('Array()', Array);
// STATIC PROPERTIES
// STATIC METHODS
(0, _indexJs.operators)['Array.from()'] = async (args, vars)=>{
    const block = {};
    vars.push(block);
    const inst = await (0, _indexJs.evaluate)(args[0], vars);
    const arr = [];
    try {
        for(let idx = 0, len = inst.length; idx < len; idx++){
            const el = inst[idx];
            block['element'] = el;
            block['index'] = idx;
            let res;
            for(let argIdx = 1, argLen = args.length; argIdx < argLen; argIdx++)res = await (0, _indexJs.evaluate)(args[argIdx], vars);
            arr.push(res);
        }
    } finally{
        vars.pop();
    }
    return arr;
};
(0, _indexJs.operators)['Array.fromAsync()'] = (0, _indexJs.operators)['Array.from()'];
(0, _addOperatorsJs.addMethodOperators)('Array.', '()', Array, [
    'isArray',
    'of'
]);
// INSTANCE PROPERTIES
(0, _addOperatorsJs.addInstPropOperators)('Array:', '', [
    'length'
]);
// INSTANCE METHODS
(0, _indexJs.operators)['Array:every()'] = async (args, vars)=>{
    const block = {};
    vars.push(block);
    const inst = await (0, _indexJs.evaluate)(args[0], vars);
    let res = true;
    try {
        for(let idx = 0, len = inst.length; idx < len; idx++){
            block['element'] = inst[idx];
            block['index'] = idx;
            let argRes;
            for(let argIdx = 1, argLen = args.length; argIdx < argLen; argIdx++)argRes = await (0, _indexJs.evaluate)(args[argIdx], vars);
            if (!argRes) {
                res = false;
                break;
            }
        }
    } finally{
        vars.pop();
    }
    return res;
};
(0, _indexJs.operators)['Array:filter()'] = async (args, vars)=>{
    const block = {};
    vars.push(block);
    const inst = await (0, _indexJs.evaluate)(args[0], vars);
    const arr = [];
    try {
        for(let idx = 0, len = inst.length; idx < len; idx++){
            const el = inst[idx];
            block['element'] = el;
            block['index'] = idx;
            let res;
            for(let argIdx = 1, argLen = args.length; argIdx < argLen; argIdx++)res = await (0, _indexJs.evaluate)(args[argIdx], vars);
            if (res) arr.push(el);
        }
    } finally{
        vars.pop();
    }
    return arr;
};
(0, _indexJs.operators)['Array:find()'] = async (args, vars)=>{
    const block = {};
    vars.push(block);
    const inst = await (0, _indexJs.evaluate)(args[0], vars);
    let res;
    try {
        for(let idx = 0, len = inst.length; idx < len; idx++){
            const el = inst[idx];
            block['element'] = el;
            block['index'] = idx;
            let argRes;
            for(let argIdx = 1, argLen = args.length; argIdx < argLen; argIdx++)argRes = await (0, _indexJs.evaluate)(args[argIdx], vars);
            if (argRes) {
                res = el;
                break;
            }
        }
    } finally{
        vars.pop();
    }
    return res;
};
(0, _indexJs.operators)['Array:findIndex()'] = async (args, vars)=>{
    const block = {};
    vars.push(block);
    const inst = await (0, _indexJs.evaluate)(args[0], vars);
    let res = -1;
    try {
        for(let idx = 0, len = inst.length; idx < len; idx++){
            const el = inst[idx];
            block['element'] = el;
            block['index'] = idx;
            let argRes;
            for(let argIdx = 1, argLen = args.length; argIdx < argLen; argIdx++)argRes = await (0, _indexJs.evaluate)(args[argIdx], vars);
            if (argRes) {
                res = idx;
                break;
            }
        }
    } finally{
        vars.pop();
    }
    return res;
};
(0, _indexJs.operators)['Array:findLast()'] = async (args, vars)=>{
    const block = {};
    vars.push(block);
    const inst = await (0, _indexJs.evaluate)(args[0], vars);
    let res;
    try {
        for(let idx = inst.length; --idx >= 0;){
            const el = inst[idx];
            block['element'] = el;
            block['index'] = idx;
            let argRes;
            for(let argIdx = 1, argLen = args.length; argIdx < argLen; argIdx++)argRes = await (0, _indexJs.evaluate)(args[argIdx], vars);
            if (argRes) {
                res = el;
                break;
            }
        }
    } finally{
        vars.pop();
    }
    return res;
};
(0, _indexJs.operators)['Array:findLastIndex()'] = async (args, vars)=>{
    const block = {};
    vars.push(block);
    const inst = await (0, _indexJs.evaluate)(args[0], vars);
    let res = -1;
    try {
        for(let idx = inst.length; --idx >= 0;){
            const el = inst[idx];
            block['element'] = el;
            block['index'] = idx;
            let argRes;
            for(let argIdx = 1, argLen = args.length; argIdx < argLen; argIdx++)argRes = await (0, _indexJs.evaluate)(args[argIdx], vars);
            if (argRes) {
                res = idx;
                break;
            }
        }
    } finally{
        vars.pop();
    }
    return res;
};
(0, _indexJs.operators)['Array:flatMap()'] = async (args, vars)=>{
    const block = {};
    vars.push(block);
    const inst = await (0, _indexJs.evaluate)(args[0], vars);
    const arr = [];
    try {
        for(let idx = 0, len = inst.length; idx < len; idx++){
            const el = inst[idx];
            block['element'] = el;
            block['index'] = idx;
            let res;
            for(let argIdx = 1, argLen = args.length; argIdx < argLen; argIdx++)res = await (0, _indexJs.evaluate)(args[argIdx], vars);
            arr.push(res);
        }
    } finally{
        vars.pop();
    }
    return arr.flat(1);
};
(0, _indexJs.operators)['Array:forEach()'] = async (args, vars)=>{
    const block = {};
    vars.push(block);
    const inst = await (0, _indexJs.evaluate)(args[0], vars);
    try {
        for(let idx = 0, len = inst.length; idx < len; idx++){
            block['element'] = inst[idx];
            block['index'] = idx;
            for(let idx = 1, len = args.length; idx < len; idx++)await (0, _indexJs.evaluate)(args[idx], vars);
        }
    } finally{
        vars.pop();
    }
};
(0, _indexJs.operators)['Array:map()'] = (0, _indexJs.operators)['Array.from()'];
(0, _indexJs.operators)['Array:reduce()'] = async (args, vars)=>{
    const block = {};
    vars.push(block);
    const inst = await (0, _indexJs.evaluate)(args[0], vars);
    let res = await (0, _indexJs.evaluate)(args[1], vars);
    try {
        for(let idx = 0, len = inst.length; idx < len; idx++){
            block['accumulator'] = res;
            block['element'] = inst[idx];
            block['index'] = idx;
            for(let argIdx = 2, argLen = args.length; argIdx < argLen; argIdx++)res = await (0, _indexJs.evaluate)(args[argIdx], vars);
        }
    } finally{
        vars.pop();
    }
    return res;
};
(0, _indexJs.operators)['Array:reduceRight()'] = async (args, vars)=>{
    const block = {};
    vars.push(block);
    const inst = await (0, _indexJs.evaluate)(args[0], vars);
    let res = await (0, _indexJs.evaluate)(args[1], vars);
    try {
        for(let idx = inst.length; --idx >= 0;){
            block['accumulator'] = res;
            block['element'] = inst[idx];
            block['index'] = idx;
            for(let argIdx = 2, argLen = args.length; argIdx < argLen; argIdx++)res = await (0, _indexJs.evaluate)(args[argIdx], vars);
        }
    } finally{
        vars.pop();
    }
    return res;
};
(0, _indexJs.operators)['Array:some()'] = async (args, vars)=>{
    const block = {};
    vars.push(block);
    const inst = await (0, _indexJs.evaluate)(args[0], vars);
    let res = false;
    try {
        for(let idx = 0, len = inst.length; idx < len; idx++){
            block['element'] = inst[idx];
            block['index'] = idx;
            let argRes;
            for(let argIdx = 1, argLen = args.length; argIdx < argLen; argIdx++)argRes = await (0, _indexJs.evaluate)(args[argIdx], vars);
            if (argRes) {
                res = true;
                break;
            }
        }
    } finally{
        vars.pop();
    }
    return res;
};
(0, _indexJs.operators)['Array:sort()'] = async (args, vars)=>{
    const inst = await (0, _indexJs.evaluate)(args[0], vars);
    return inst.sort();
};
(0, _indexJs.operators)['Array:toSorted()'] = (0, _indexJs.operators)['Array:sort()'];
(0, _addOperatorsJs.addInstMethodOperators)('Array:', '()', [
    'at',
    'concat',
    'copyWithin',
    'entries',
    'fill',
    'flat',
    'includes',
    'indexOf',
    'join',
    'keys',
    'lastIndexOf',
    'pop',
    'push',
    'reverse',
    'shift',
    'slice',
    'splice',
    'toLocaleString',
    'toReversed',
    'toSpliced',
    'toString',
    'unshift',
    'values',
    'with'
]);

},{"./add-operators.js":"6WQvP","./index.js":"3Rr4P"}],"b4lXt":[function(require,module,exports,__globalThis) {
var _addOperatorsJs = require("./add-operators.js");
var _indexJs = require("./index.js");
// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer
// CLASS AND CONSTRUCTOR
(0, _indexJs.operators)['ArrayBuffer'] = async ()=>{
    return ArrayBuffer;
};
(0, _addOperatorsJs.addConstructorOperator)('ArrayBuffer()', ArrayBuffer);
// STATIC PROPERTIES
// STATIC METHODS
(0, _addOperatorsJs.addMethodOperators)('ArrayBuffer.', '()', ArrayBuffer, [
    'isView'
]);
// INSTANCE PROPERTIES
(0, _addOperatorsJs.addInstPropOperators)('ArrayBuffer:', '', [
    'byteLength',
    'detached',
    'maxByteLength',
    'resizable'
]);
// INSTANCE METHODS
(0, _addOperatorsJs.addInstMethodOperators)('ArrayBuffer:', '()', [
    'resize',
    'slice',
    'transfer',
    'transferToFixedLength'
]);

},{"./add-operators.js":"6WQvP","./index.js":"3Rr4P"}],"8re3F":[function(require,module,exports,__globalThis) {
var _addOperatorsJs = require("./add-operators.js");
var _indexJs = require("./index.js");
// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
// CLASS AND CONSTRUCTOR
(0, _indexJs.operators)['Boolean'] = async ()=>{
    return Boolean;
};
(0, _addOperatorsJs.addConstructorOperator)('Boolean()', Boolean);
// STATIC PROPERTIES
// STATIC METHODS
// INSTANCE PROPERTIES
// INSTANCE METHODS
(0, _addOperatorsJs.addInstMethodOperators)('Boolean:', '()', [
    'toString',
    'valueOf'
]);

},{"./add-operators.js":"6WQvP","./index.js":"3Rr4P"}],"fKO5F":[function(require,module,exports,__globalThis) {
var _addOperatorsJs = require("./add-operators.js");
var _indexJs = require("./index.js");
// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
// CLASS AND CONSTRUCTOR
(0, _indexJs.operators)['Date'] = async ()=>{
    return Date;
};
(0, _addOperatorsJs.addConstructorOperator)('Date()', Date);
// STATIC PROPERTIES
// STATIC METHODS
(0, _addOperatorsJs.addMethodOperators)('Date.', '()', Date, [
    'now',
    'parse',
    'UTC'
]);
// INSTANCE PROPERTIES
// INSTANCE METHODS
(0, _addOperatorsJs.addInstMethodOperators)('Date:', '()', [
    'getDate',
    'getDay',
    'getFullYear',
    'getHours',
    'getMilliseconds',
    'getMinutes',
    'getMonth',
    'getSeconds',
    'getTime',
    'getTimezoneOffset',
    'getUTCDate',
    'getUTCDay',
    'getUTCFullYear',
    'getUTCHours',
    'getUTCMilliseconds',
    'getUTCMinutes',
    'getUTCMonth',
    'getUTCSeconds',
    'getYear',
    'setDate',
    'setFullYear',
    'setHours',
    'setMilliseconds',
    'setMinutes',
    'setMonth',
    'setSeconds',
    'setTime',
    'setUTCDate',
    'setUTCFullYear',
    'setUTCHours',
    'setUTCMilliseconds',
    'setUTCMinutes',
    'setUTCMonth',
    'setUTCSeconds',
    'setYear',
    'toDateString',
    'toGMTString',
    'toISOString',
    'toJSON',
    'toLocaleDateString',
    'toLocaleString',
    'toLocaleTimeString',
    'toString',
    'toTimeString',
    'toUTCString',
    'valueOf'
]);

},{"./add-operators.js":"6WQvP","./index.js":"3Rr4P"}],"99zA0":[function(require,module,exports,__globalThis) {
var _addOperatorsJs = require("./add-operators.js");
var _indexJs = require("./index.js");
// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
// CLASS AND CONSTRUCTOR
(0, _indexJs.operators)['Map'] = async ()=>{
    return Map;
};
(0, _addOperatorsJs.addConstructorOperator)('Map()', Map);
// STATIC PROPERTIES
// STATIC METHODS
(0, _addOperatorsJs.addMethodOperators)('Map.', '()', Map, [
    'groupBy'
]);
// INSTANCE PROPERTIES
(0, _addOperatorsJs.addInstPropOperators)('Map:', '', [
    'size'
]);
// INSTANCE METHODS
(0, _indexJs.operators)['Map:forEach()'] = async (args, vars)=>{
    const block = {};
    vars.push(block);
    const inst = await (0, _indexJs.evaluate)(args[0], vars);
    try {
        for (const [key, value] of inst){
            block['key'] = value;
            block['value'] = value;
            for(let idx = 1, len = args.length; idx < len; idx++)await (0, _indexJs.evaluate)(args[idx], vars);
        }
    } finally{
        vars.pop();
    }
};
(0, _indexJs.operators)['Map:getOrInsertComputed()'] = async (args, vars)=>{
    const inst = await (0, _indexJs.evaluate)(args[0], vars);
    const key = await (0, _indexJs.evaluate)(args[1], vars);
    if (!inst.has(key)) {
        vars.push({
            key
        });
        try {
            let res;
            for(let idx = 2, len = args.length; idx < len; idx++)res = await (0, _indexJs.evaluate)(args[idx], vars);
            inst.set(key, res);
        } finally{
            vars.pop();
        }
    }
    return inst.get(key);
};
(0, _addOperatorsJs.addInstMethodOperators)('Map:', '()', [
    'clear',
    'delete',
    'entries',
    'get',
    'getOrInsert',
    'has',
    'keys',
    'set',
    'values'
]);

},{"./add-operators.js":"6WQvP","./index.js":"3Rr4P"}],"tFS62":[function(require,module,exports,__globalThis) {
var _addOperatorsJs = require("./add-operators.js");
var _indexJs = require("./index.js");
// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
// CLASS AND CONSTRUCTOR
(0, _indexJs.operators)['Number'] = async ()=>{
    return Number;
};
(0, _addOperatorsJs.addConstructorOperator)('Number()', Number);
// STATIC PROPERTIES
(0, _addOperatorsJs.addConstantOperators)('Number.', '', Number, [
    'EPSILON',
    'MAX_SAFE_INTEGER',
    'MAX_VALUE',
    'MIN_SAFE_INTEGER',
    'MIN_VALUE',
    'NaN',
    'NEGATIVE_INFINITY',
    'POSITIVE_INFINITY'
]);
// STATIC METHODS
(0, _addOperatorsJs.addMethodOperators)('Number.', '()', Number, [
    'isFinite',
    'isInteger',
    'isNaN',
    'isSafeInteger',
    'parseFloat',
    'parseInt'
]);
// INSTANCE PROPERTIES
// INSTANCE METHODS
(0, _addOperatorsJs.addInstMethodOperators)('Number:', '()', [
    'toExponential',
    'toFixed',
    'toLocaleString',
    'toPrecision',
    'toString',
    'valueOf'
]);

},{"./add-operators.js":"6WQvP","./index.js":"3Rr4P"}],"lmnXL":[function(require,module,exports,__globalThis) {
var _addOperatorsJs = require("./add-operators.js");
var _indexJs = require("./index.js");
// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
// CLASS AND CONSTRUCTOR
(0, _indexJs.operators)['Object'] = async ()=>{
    return Object;
};
(0, _addOperatorsJs.addConstructorOperator)('Object()', Object);
// STATIC PROPERTIES
// STATIC METHODS
(0, _addOperatorsJs.addMethodOperators)('Object.', '()', Object, [
    'assign',
    'create',
    'defineProperties',
    'defineProperty',
    'entries',
    'freeze',
    'fromEntries',
    'getOwnPropertyDescriptor',
    'getOwnPropertyDescriptors',
    'getOwnPropertyNames',
    'getOwnPropertySymbols',
    'getPrototypeOf',
    'groupBy',
    'hasOwn',
    'is',
    'isExtensible',
    'isFrozen',
    'isSealed',
    'keys',
    'preventExtensions',
    'seal',
    'setPrototypeOf',
    'values'
]);
// INSTANCE PROPERTIES
// INSTANCE METHODS
(0, _addOperatorsJs.addInstMethodOperators)('Object:', '()', [
    // '__defineGetter__',
    // '__defineSetter__',
    // '__lookupGetter__',
    // '__lookupSetter__',
    // '__proto__',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf'
]);

},{"./add-operators.js":"6WQvP","./index.js":"3Rr4P"}],"bJ1JZ":[function(require,module,exports,__globalThis) {
var _addOperatorsJs = require("./add-operators.js");
var _indexJs = require("./index.js");
// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
// CLASS AND CONSTRUCTOR
(0, _indexJs.operators)['RegExp'] = async ()=>{
    return RegExp;
};
(0, _addOperatorsJs.addConstructorOperator)('RegExp()', RegExp);
// STATIC PROPERTIES
// STATIC METHODS
(0, _addOperatorsJs.addMethodOperators)('RegExp.', '()', RegExp, [
    'escape'
]);
// INSTANCE PROPERTIES
(0, _addOperatorsJs.addInstPropOperators)('RegExp:', '', [
    'dotAll',
    'flags',
    'global',
    'hasIndices',
    'ignoreCase',
    'lastIndex',
    'multiline',
    'source',
    'sticky',
    'unicode',
    'unicodeSets'
]);
// INSTANCE METHODS
(0, _addOperatorsJs.addInstMethodOperators)('RegExp:', '()', [
    'exec',
    'test',
    'toString'
]);

},{"./add-operators.js":"6WQvP","./index.js":"3Rr4P"}],"gWYWO":[function(require,module,exports,__globalThis) {
var _addOperatorsJs = require("./add-operators.js");
var _indexJs = require("./index.js");
// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
// CLASS AND CONSTRUCTOR
(0, _indexJs.operators)['Set'] = async ()=>{
    return Set;
};
(0, _addOperatorsJs.addConstructorOperator)('Set()', Set);
// STATIC PROPERTIES
// STATIC METHODS
// INSTANCE PROPERTIES
(0, _addOperatorsJs.addInstPropOperators)('Set:', '', [
    'size'
]);
// INSTANCE METHODS
(0, _indexJs.operators)['Set:forEach()'] = async (args, vars)=>{
    const block = {};
    vars.push(block);
    const inst = await (0, _indexJs.evaluate)(args[0], vars);
    try {
        for (const value of inst){
            block['value'] = value;
            for(let idx = 1, len = args.length; idx < len; idx++)await (0, _indexJs.evaluate)(args[idx], vars);
        }
    } finally{
        vars.pop();
    }
};
(0, _addOperatorsJs.addInstMethodOperators)('Set:', '()', [
    'add',
    'clear',
    'delete',
    'difference',
    'entries',
    'has',
    'intersection',
    'isDisjointFrom',
    'isSubsetOf',
    'isSupersetOf',
    'keys',
    'symmetricDifference',
    'union',
    'values'
]);

},{"./add-operators.js":"6WQvP","./index.js":"3Rr4P"}],"aXZeh":[function(require,module,exports,__globalThis) {
var _addOperatorsJs = require("./add-operators.js");
var _indexJs = require("./index.js");
// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// CLASS AND CONSTRUCTOR
(0, _indexJs.operators)['String'] = async ()=>{
    return String;
};
(0, _addOperatorsJs.addConstructorOperator)('String()', String);
// STATIC PROPERTIES
// STATIC METHODS
(0, _addOperatorsJs.addMethodOperators)('String.', '()', String, [
    'fromCharCode',
    'fromCodePoint'
]);
// INSTANCE PROPERTIES
(0, _addOperatorsJs.addInstPropOperators)('String:', '', [
    'length'
]);
// INSTANCE METHODS
(0, _addOperatorsJs.addInstMethodOperators)('String:', '()', [
    'at',
    'charAt',
    'charCodeAt',
    'codePointAt',
    'concat',
    'endsWith',
    'includes',
    'indexOf',
    'isWellFormed',
    'lastIndexOf',
    'localeCompare',
    'match',
    'matchAll',
    'normalize',
    'padEnd',
    'padStart',
    'repeat',
    'replace',
    'replaceAll',
    'search',
    'slice',
    'split',
    'startsWith',
    'sub',
    'substring',
    'toLocaleLowerCase',
    'toLocaleUpperCase',
    'toLowerCase',
    'toString',
    'toUpperCase',
    'toWellFormed',
    'trim',
    'trimEnd',
    'trimLeft',
    'trimRight',
    'trimStart',
    'valueOf'
]);

},{"./add-operators.js":"6WQvP","./index.js":"3Rr4P"}],"iKZqQ":[function(require,module,exports,__globalThis) {
var _addOperatorsJs = require("./add-operators.js");
var _indexJs = require("./index.js");
// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array
// CLASS AND CONSTRUCTOR
(0, _indexJs.operators)['Uint8Array'] = async ()=>{
    return Uint8Array;
};
(0, _addOperatorsJs.addConstructorOperator)('Uint8Array()', Uint8Array);
// STATIC PROPERTIES
(0, _addOperatorsJs.addPropOperators)('Uint8Array.', '', Uint8Array, [
    'BYTES_PER_ELEMENT'
]);
// STATIC METHODS
(0, _addOperatorsJs.addMethodOperators)('Uint8Array.', '()', Uint8Array, [
    'fromBase64',
    'fromHex'
]);
// INSTANCE PROPERTIES
(0, _addOperatorsJs.addInstPropOperators)('Uint8Array:', '', [
    'BYTES_PER_ELEMENT'
]);
// INSTANCE METHODS
(0, _addOperatorsJs.addInstMethodOperators)('Uint8Array:', '()', [
    'setFromBase64',
    'setFromHex',
    'toBase64',
    'toHex'
]);

},{"./add-operators.js":"6WQvP","./index.js":"3Rr4P"}],"1zgqO":[function(require,module,exports,__globalThis) {
var _addOperatorsJs = require("./add-operators.js");
var _indexJs = require("./index.js");
// REFERENCE: https://developer.mozilla.org/en-US/docs/Web/API/URL
// CLASS AND CONSTRUCTOR
(0, _indexJs.operators)['URL'] = async ()=>{
    return URL;
};
(0, _addOperatorsJs.addConstructorOperator)('URL()', URL);
// STATIC PROPERTIES
// STATIC METHODS
(0, _addOperatorsJs.addMethodOperators)('URL.', '()', URL, [
    'canParse',
    'createObjectURL',
    'parse',
    'revokeObjectURL'
]);
// INSTANCE PROPERTIES
(0, _addOperatorsJs.addInstPropOperators)('URL:', '', [
    'hash',
    'host',
    'hostname',
    'href',
    'origin',
    'password',
    'pathname',
    'port',
    'protocol',
    'search',
    'searchParams',
    'username'
]);
// INSTANCE METHODS
(0, _addOperatorsJs.addInstMethodOperators)('URL:', '()', [
    'toJSON',
    'toString'
]);

},{"./add-operators.js":"6WQvP","./index.js":"3Rr4P"}]},["3KYlF","cIdJC"], "cIdJC", "parcelRequireb8de", {})

//# sourceMappingURL=parcel.0825aabb.js.map
