/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 8046:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@angular-builders/custom-webpack/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************************************!*\
  !*** ./src/app/workers/python-compiler.worker.ts ***!
  \***************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PyodideMessageType": () => (/* binding */ PyodideMessageType),
/* harmony export */   "PyodideState": () => (/* binding */ PyodideState)
/* harmony export */ });
/* harmony import */ var _home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-builders/custom-webpack/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 8046);

/// <reference lib="webworker" />
// Configs
let pyodideRoot = "/";
let pyodideMount = "/mnt";
// Bootstrap pyodide
importScripts("https://cdn.jsdelivr.net/pyodide/v0.21.3/full/pyodide.js");
//let worker: PyodideFsWorker;
function main() {
  return _main.apply(this, arguments);
}
function _main() {
  _main = (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
    let worker = new PyodideWorker(pyodideRoot, pyodideMount);
  });
  return _main.apply(this, arguments);
}
var PyodideState;
(function (PyodideState) {
  PyodideState["Unknown"] = "Unknown";
  PyodideState["Loading"] = "Loading";
  PyodideState["Ready"] = "Ready";
  PyodideState["Run"] = "Run";
  PyodideState["Stdin"] = "Stdin";
  PyodideState["Success"] = "Success";
  PyodideState["Killed"] = "Killed";
  PyodideState["Error"] = "Error";
})(PyodideState || (PyodideState = {}));
var PyodideMessageType;
(function (PyodideMessageType) {
  PyodideMessageType["Ready"] = "Ready";
  PyodideMessageType["Mount"] = "Mount";
  PyodideMessageType["Unmount"] = "Unmount";
  PyodideMessageType["InstallPackages"] = "InstallPackages";
  PyodideMessageType["ExecuteFile"] = "ExecuteFile";
  PyodideMessageType["ExecuteCode"] = "ExecuteCode";
  PyodideMessageType["StopExecution"] = "StopExecution";
  PyodideMessageType["SubscribeNotify"] = "SubscribeNotify";
  PyodideMessageType["SubscribeState"] = "SubscribeState";
  PyodideMessageType["SubscribeStdout"] = "SubscribeStdout";
  PyodideMessageType["SubscribeStderr"] = "SubscribeStderr";
  PyodideMessageType["SendStdin"] = "SendStdin";
  PyodideMessageType["CreateDirectory"] = "CreateDirectory";
  PyodideMessageType["WriteFile"] = "WriteFile";
  PyodideMessageType["ReadFile"] = "ReadFile";
  PyodideMessageType["ReadDirectory"] = "ReadDirectory";
  PyodideMessageType["ScanDirectory"] = "ScanDirectory";
  PyodideMessageType["Exists"] = "Exists";
  PyodideMessageType["Delete"] = "Delete";
})(PyodideMessageType || (PyodideMessageType = {}));
class PyodideWorker {
  constructor(root, mount) {
    var _this = this;
    this.requestQueueNotify = new Map();
    this.requestQueueState = new Map();
    this.requestQueueStdout = new Map();
    this.requestQueueStderr = new Map();
    this.binEncoder = new TextEncoder(); // always utf-8
    this.binDecoder = new TextDecoder("utf-8");
    this.isReady = false;
    this.stdinPending = false;
    this.isSync = false;
    this.needSync = false;
    this.stdinBuffer = new Array();
    this.lastState = PyodideState.Unknown;
    this.interruptBuffer = new Uint8Array(1);
    this.root = root;
    this.mount = mount;
    this.requestQueueStdout = new Map();
    this.requestQueueStderr = new Map();
    //onReady
    let readyResolver;
    this.readyPromise = new Promise((resolve, reject) => {
      readyResolver = resolve;
    });
    this.readyResolver = value => {
      readyResolver(value);
    };
    addEventListener("message", /*#__PURE__*/function () {
      var _ref = (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (payload) {
        _this.onData(payload.data);
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    //Send Init event, but outside the constructor
    setTimeout(() => {
      this.sendState(PyodideState.Loading);
    });
    this.initPydiode().then(() => {
      this.load(this.root, this.mount);
      this.fs.syncfs(true, () => {
        this.interruptBuffer[0] = 0;
        this.pyodide.setInterruptBuffer(this.interruptBuffer);
        this.isReady = true;
        this.sendState(PyodideState.Ready);
        this.readyResolver(this.isReady);
      });
    }).catch(error => {
      this.sendState(PyodideState.Error, error);
    });
  }
  initPydiode() {
    var _this2 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("loadPyodide: ...");
      let options = {
        stdin: () => {
          return _this2.onStdin();
        },
        stdout: msg => {
          _this2.sendStdout(msg);
        },
        stderr: msg => {
          _this2.sendStderr(msg);
        }
      };
      //console.log(loadPyodide)
      _this2.pyodide = yield loadPyodide(options);
      _this2.fs = _this2.pyodide.FS;
      yield _this2.pyodide.loadPackage(["micropip"]);
      _this2.micropip = _this2.pyodide.pyimport("micropip");
      console.log("loadPyodide: done");
      //console.log(pyodide)
      _this2.setCustomHooks();
    })();
  }
  setCustomHooks() {
    var _this3 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let oldInput = _this3.pyodide.globals.input;
      console.log("setCustomHooks:oldInput:", oldInput);
      //Globals: Input
      let localThis = _this3;
      _this3.pyodide.globals.set('input', /*#__PURE__*/function () {
        var _ref2 = (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (prompt) {
          if (prompt && prompt.trim().length > 0) {
            localThis.sendStdout(prompt);
          }
          localThis.sendState(PyodideState.Stdin);
          console.log("setCustomHooks:scrivo sulla consolle!!!!");
          let stdinResolver;
          let promise = new Promise((resolve, reject) => {
            stdinResolver = resolve;
          });
          localThis.stdinResolver = message => {
            stdinResolver(message);
          };
          if (localThis.stdinBuffer.length > 0) {
            let line = localThis.stdinBuffer.shift();
            localThis.stdinResolver(line);
          }
          return promise;
        });
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
      let sys = _this3.pyodide.pyimport("signal");
      let signal = _this3.pyodide.pyimport("signal");
      signal.signal(signal.SIGINT, (signal, frame) => {
        sys.exit(0);
      });
    })();
  }
  load(root, mount) {
    var _this4 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.root = root;
      _this4.mount = mount;
      console.log("PyodideFsWorker: load");
      _this4.fs.mkdir(_this4.mount);
      _this4.fs.mount(_this4.fs.filesystems.IDBFS, {
        root: root
      }, _this4.mount);
      console.log("PyodideFsWorker: load: done");
      console.log(_this4.fs.mounts);
      console.log(_this4.fs.root);
      console.log(_this4.fs.root.mount);
    })();
  }
  toString(data) {
    if (data instanceof ArrayBuffer) {
      return this.binDecoder.decode(data);
    }
    return data;
  }
  toArrayBuffer(data) {
    if (data instanceof ArrayBuffer) {
      return data;
    }
    return this.binEncoder.encode(data);
  }
  responseFromRequest(request, success = true, errors = []) {
    let response = {
      uid: request.uid,
      timestamp: Date.now(),
      success: success,
      errors: errors,
      message: {
        uid: request.message.uid,
        type: request.message.type,
        args: [],
        contents: []
      }
    };
    return response;
  }
  responseError(response, error) {
    response.success = false;
    if (error) {
      response.errors.push(error);
    }
    ;
    return response;
  }
  syncFS() {
    if (!this.isSync) {
      this.isSync = true;
      this.needSync = false;
      console.log('syncFS: do!');
      this.fs.syncfs(err => {
        if (err) {
          console.log('syncFS: error while syncing, retrying');
          this.needSync = true;
        }
        this.isSync = false;
        if (this.needSync) {
          this.needSync = false;
          console.log('syncFS: repeat!');
          this.syncFS();
        }
      });
    } else {
      console.log('syncFS: queued');
      this.needSync = true;
    }
  }
  onStdin() {
    //TOD: unused??
    // localThis.sendState(PyodideState.Stdin)
    console.log('PyodideWorker:onStdin:');
    if (this.stdinBuffer.length > 0) {}
    let item = this.stdinBuffer.shift();
    console.log('PyodideWorker:onStdin:', item);
    return item;
  }
  execCodeAsync(code) {
    console.log("execCode:", code);
    this.interruptBuffer[0] = 0;
    this.pyodide.setInterruptBuffer(this.interruptBuffer);
    this.interruptTimer = setInterval(() => {
      try {
        this.pyodide.checkInterrupt();
      } catch (_) {
        this.sendStderr("Process terminated by user request");
        this.sendState(PyodideState.Killed);
      }
    }, 10);
    this.stdinBuffer = [];
    this.pyodide.runPythonAsync(code).then(result => {
      console.log("execCode: result:\n", result);
      this.sendState(PyodideState.Success, result);
    }).catch(error => {
      let sysmodule = this.pyodide.pyimport("sys");
      console.log("execCode: exception:\n", sysmodule.exception);
      console.log("execCode: error:\n", error);
      this.sendState(PyodideState.Error, error);
    });
  }
  sendNotify(title, msg, kind = "") {
    console.log("sendNotify: ", msg);
    this.requestQueueNotify.forEach((request, uid) => {
      let response = this.responseFromRequest(request);
      response.message.contents = [title, msg, kind];
      console.log("sendNotify:uid:\n", response); //,res)
      postMessage(response);
    });
  }
  sendState(state, content) {
    if (!state) {
      state = this.lastState;
    } //Resend the same state, used onSubscribe
    else {
      this.lastState = state;
    }
    console.log("sendState: ", state);
    this.requestQueueState.forEach((request, uid) => {
      let response = this.responseFromRequest(request);
      response.message.contents = [state ?? PyodideState.Unknown];
      if (content) {
        response.message.contents.push(content);
      }
      console.log("sendState:uid:\n", response);
      postMessage(response);
    });
  }
  sendStdout(msg) {
    console.log("sendStdout: " + msg);
    this.requestQueueStdout.forEach((request, uid) => {
      let response = this.responseFromRequest(request);
      response.message.contents = [msg];
      console.log("sendStdout:uid:\n", response); //,res)
      postMessage(response);
    });
  }
  sendStderr(msg) {
    console.log("sendStderr: " + msg);
    this.requestQueueStderr.forEach((request, uid) => {
      let response = this.responseFromRequest(request);
      response.message.contents = [msg];
      console.log("sendStderr:uid:\n", response); //,res)
      postMessage(response);
    });
  }
  onData(request) {
    console.log('PyodideFsWorker:onData:', request);
    let action = null;
    switch (request.message.type) {
      case PyodideMessageType.Ready:
        this.ready(request);
        break;
      case PyodideMessageType.SubscribeNotify:
        action = request => {
          return this.subscribeNotify(request);
        };
        break;
      case PyodideMessageType.SubscribeState:
        action = request => {
          return this.subscribeState(request);
        };
        break;
      case PyodideMessageType.SubscribeStdout:
        action = request => {
          return this.subscribeStdout(request);
        };
        break;
      case PyodideMessageType.SubscribeStderr:
        action = request => {
          return this.subscribeStderr(request);
        };
        break;
      case PyodideMessageType.SendStdin:
        action = request => {
          return this.sendStdin(request);
        };
        break;
      case PyodideMessageType.InstallPackages:
        action = request => {
          return this.installPackages(request);
        };
        break;
      case PyodideMessageType.ExecuteCode:
        action = request => {
          return this.executeCode(request);
        };
        break;
      case PyodideMessageType.ExecuteFile:
        action = request => {
          return this.executeFile(request);
        };
        break;
      case PyodideMessageType.StopExecution:
        action = request => {
          return this.stopExecution(request);
        };
        break;
      case PyodideMessageType.CreateDirectory:
        action = request => {
          return this.createDirectory(request);
        };
        break;
      case PyodideMessageType.ReadDirectory:
        action = request => {
          return this.readDirectory(request);
        };
        break;
      case PyodideMessageType.WriteFile:
        action = request => {
          return this.writeFile(request);
        };
        break;
      case PyodideMessageType.ReadFile:
        action = request => {
          return this.readFile(request);
        };
        break;
      case PyodideMessageType.ScanDirectory:
        action = request => {
          return this.scanDirectory(request);
        };
        break;
      case PyodideMessageType.Delete:
        action = request => {
          return this.delete(request);
        };
        break;
      case PyodideMessageType.Exists:
        action = request => {
          return this.exists(request);
        };
        break;
      default:
        break;
    }
    if (action) {
      let response = action(request);
      if (response) {
        postMessage(response);
      }
    }
  }
  ready(request) {
    let response = this.responseFromRequest(request);
    response.message.args = ['true'];
    if (this.isReady) {
      postMessage(response);
    } else {
      this.readyPromise.then(ready => {
        response.message.args = [ready ? 'true' : 'false'];
        postMessage(response);
      });
    }
  }
  installPackages(request) {
    let response = this.responseFromRequest(request);
    let packages = request.message.args;
    console.log("installPackages:\n", packages); //,res)
    let res = this.micropip.install(packages);
    this.syncFS();
    console.log("installPackages: DONE!\n", res);
    response.message.contents.push(""); //res+": "+res)
    return response;
  }
  executeCode(request) {
    let response = this.responseFromRequest(request);
    let rawContent = request.message.contents[0];
    let code;
    if (rawContent instanceof ArrayBuffer) {
      code = new TextDecoder().decode(rawContent);
    } else {
      code = rawContent;
    }
    console.log("executeCode:\n", code); //,res)
    this.execCodeAsync(code);
    response.message.contents = ["true"];
    return response;
  }
  stopExecution(request) {
    let response = this.responseFromRequest(request);
    let wasRunning = this.lastState == PyodideState.Run || this.lastState == PyodideState.Stdin;
    let arg = request.message.args[0] ?? "2";
    let signal = parseInt(arg); // 2 stands for SIGINT.
    if (isNaN(signal)) {
      signal = 2;
    }
    console.log("stopExecution:", signal); //,res)
    setTimeout(() => {
      this.interruptBuffer[0] = signal;
    });
    response.message.args = [wasRunning ? "true" : "false"];
    return response;
  }
  executeFile(request) {
    let response = this.responseFromRequest(request);
    let fullpath = request.message.args[0];
    let path = this.mount + "/" + fullpath;
    console.log("executeFile:", path); //,res)
    let rawContent = this.fs.readFile(path);
    let code = new TextDecoder().decode(rawContent.buffer);
    this.stdinBuffer = [];
    this.execCodeAsync(code);
    response.message.contents = ["true"];
    return response;
  }
  subscribeNotify(request) {
    let response = this.responseFromRequest(request);
    let enable = request.message.args[0] == 'true';
    if (enable) {
      this.requestQueueNotify.set(request.uid, request);
    } else {
      this.requestQueueNotify.delete(request.uid);
    }
    console.log("subscribeNotify:\n", enable); //,res)
    response.message.args = [enable ? 'true' : 'false'];
    return response;
  }
  subscribeState(request) {
    let response = this.responseFromRequest(request);
    let enable = request.message.args[0] == 'true';
    if (enable) {
      this.requestQueueState.set(request.uid, request);
      setTimeout(() => {
        this.sendState(PyodideState.Loading);
      });
    } else {
      this.requestQueueState.delete(request.uid);
    }
    console.log("subscribeState:\n", enable); //,res)
    response.message.args = [enable ? 'true' : 'false'];
    return response;
  }
  subscribeStdout(request) {
    let response = this.responseFromRequest(request);
    let enable = request.message.args[0] == 'true';
    if (enable) {
      this.requestQueueStdout.set(request.uid, request);
    } else {
      this.requestQueueStdout.delete(request.uid);
    }
    console.log("subscribeStdout:\n", enable); //,res)
    response.message.args = [enable ? 'true' : 'false'];
    return response;
  }
  subscribeStderr(request) {
    let response = this.responseFromRequest(request);
    let enable = request.message.args[0] == 'true';
    if (enable) {
      this.requestQueueStderr.set(request.uid, request);
    } else {
      this.requestQueueStderr.delete(request.uid);
    }
    console.log("subscribeStderr:\n", enable); //,res)
    response.message.args = [enable ? 'true' : 'false'];
    return response;
  }
  sendStdin(request) {
    let response = this.responseFromRequest(request);
    let data = request.message.contents[0];
    console.log("PyodideWorker:sendStdin:\n", data);
    this.sendState(PyodideState.Run);
    if (this.stdinResolver) {
      this.stdinResolver(this.toString(data));
      this.stdinResolver = undefined;
    } else {
      this.stdinBuffer.push(this.toString(data));
    }
    response.message.args = ['true'];
    return response;
  }
  createDirectory(request) {
    let response = this.responseFromRequest(request);
    if (request.message.args.length < 1) {
      return this.responseError(response, "createDirectory: Requires at least 1 path as argument");
    }
    //TODO: allow for multiple queries;
    let fullpath = request.message.args[0];
    if (!this.internal_exists(this.mount + fullpath)) {
      let res = this.fs.mkdir(this.mount + fullpath);
      console.log('pydiode:mkdir:', res);
      this.syncFS();
    }
    response.message.args = [fullpath];
    return response;
  }
  getPath(node) {
    //any: https://emscripten.org/docs/api_reference/Filesystem-API.html#FS.getPath
    let path = this.fs.getPath(node);
    let pattern = new RegExp("^" + this.mount);
    return path.replace(pattern, "/").replace(/\/\/+/, "/");
  }
  readDirectory(request) {
    let response = this.responseFromRequest(request);
    if (request.message.args.length < 1) {
      return this.responseError(response, "readDirectory: Requires at least 1 path as argument and 1 content");
    }
    let fullpath = request.message.args[0];
    let curDir = this.scanDirectory_recursive(fullpath);
    response.message.args = [fullpath];
    response.message.contents = [JSON.stringify(curDir, this.jsonReplacer)];
    return response;
  }
  scanDirectory(request) {
    let response = this.responseFromRequest(request);
    if (request.message.args.length < 1) {
      return this.responseError(response, "readDirectory: Requires at least 1 path as argument and 1 content");
    }
    let fullpath = request.message.args[0];
    console.log("scanDirectory: ", fullpath);
    let curDir = this.scanDirectory_recursive(fullpath, true);
    response.message.args = [fullpath];
    response.message.contents = [JSON.stringify(curDir, this.jsonReplacer)];
    return response;
  }
  jsonReplacer(key, value) {
    if (value instanceof ArrayBuffer) {
      let buffer = new Uint8Array(value);
      return {
        constructor: value.constructor.name,
        data: Array.from(buffer),
        flags: []
      };
    }
    return value;
  }
  scanDirectory_recursive(fullpath, recursive = false) {
    let res = this.fs.lookupPath(this.mount + fullpath);
    console.log("scanDirectory_recursive: ", res);
    console.log("scanDirectory_recursive:contents: ", res.node.contents);
    let curDir = {
      folders: [],
      files: [],
      name: res.node.name,
      path: this.getPath(res.node)
    };
    for (let name in res.node.contents) {
      let item = res.node.contents[name];
      let path = this.getPath(item);
      if (this.fs.isDir(item.mode)) {
        let childDir;
        if (recursive) {
          childDir = this.scanDirectory_recursive(path, true);
        } else {
          childDir = {
            folders: [],
            files: [],
            name: name,
            path: path
          };
        }
        curDir.folders.push(childDir);
      } else {
        let content = this.fs.readFile(this.mount + path);
        curDir.files.push({
          name: name,
          path: path,
          content: content.buffer
        });
      }
    }
    return curDir;
  }
  writeFile(request) {
    let response = this.responseFromRequest(request);
    let nargs = request.message.args.length;
    let ncont = request.message.contents.length;
    if (nargs < 1 || nargs < ncont) {
      return this.responseError(response, "writeFile: Requires at least 1 path as argument and 1 content");
    }
    let fullpath = request.message.args[0];
    let data = request.message.contents[0];
    let content;
    let options = {
      encoding: "binary"
    };
    if (data instanceof ArrayBuffer) {
      content = new Uint8Array(data);
      options.encoding = "utf8";
    } else {
      content = data;
    }
    console.log("writeFile: ", fullpath);
    console.log("writeFile:content: ", content);
    let res = this.fs.writeFile(this.mount + fullpath, content, options);
    console.log("writeFile:res: ", res);
    this.syncFS();
    return response;
  }
  readFile(request) {
    let response = this.responseFromRequest(request);
    if (request.message.args.length < 1) {
      return this.responseError(response, "readFile: Requires at least 1 path as argument");
    }
    let fullpath = request.message.args[0];
    let opts = {
      encoding: 'utf8'
    };
    if (request.message.args.length == 2 && request.message.args[1] == 'binary') {
      opts = {
        encoding: 'binary'
      };
    }
    console.log("readFile: ", fullpath);
    let content = this.fs.readFile(this.mount + fullpath, opts);
    console.log('readFile:content:\n', content.length);
    if (content instanceof Uint8Array) {
      console.log('readFile:content: BUFFER', content);
      response.message.contents = [content.buffer];
    } else {
      console.log('readFile:content: STRING');
      response.message.contents = [content];
    }
    return response;
  }
  delete(request) {
    let response = this.responseFromRequest(request);
    if (request.message.args.length < 1) {
      response.message.args = ["false"];
      return response;
    }
    let fullpath = request.message.args[0];
    console.log("delete: ", fullpath);
    //TODO: use lookupPath and isDir/isFile
    // https://emscripten.org/docs/api_reference/Filesystem-API.html#FS.lookupPath
    //TODO: do it recursive
    try {
      this.fs.rmdir(this.mount + fullpath);
    } catch (_) {}
    try {
      this.fs.unlink(this.mount + fullpath);
    } catch (_) {}
    this.syncFS();
    response.message.args = ["true"];
    return response;
  }
  exists(request) {
    let response = this.responseFromRequest(request);
    if (request.message.args.length < 1) {
      response.message.args = ["false"];
      return response;
    }
    let fullpath = request.message.args[0];
    console.log("exists: ", this.mount + fullpath);
    // https://emscripten.org/docs/api_reference/Filesystem-API.html#FS.analyzePath
    let exists = this.internal_exists(this.mount + fullpath);
    console.log("exists:", exists);
    response.message.args = [exists ? 'true' : 'false'];
    return response;
  }
  internal_exists(path) {
    let res = this.fs.analyzePath(path);
    console.log("internal_file_exists:analyzePath", res);
    return res["exists"];
  }
}
main();
})();

/******/ })()
;
//# sourceMappingURL=src_app_workers_python-compiler_worker_ts.js.map