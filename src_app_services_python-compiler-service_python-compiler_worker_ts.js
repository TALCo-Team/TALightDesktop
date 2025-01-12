/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 3809:
/*!*********************************************************************!*\
  !*** ./src/app/services/compiler-service/compiler-service.types.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompilerMessageType": () => (/* binding */ CompilerMessageType),
/* harmony export */   "CompilerState": () => (/* binding */ CompilerState)
/* harmony export */ });
var CompilerState;
(function (CompilerState) {
    CompilerState["Unknown"] = "Unknown";
    CompilerState["Init"] = "Init";
    CompilerState["Loading"] = "Loading";
    CompilerState["Ready"] = "Ready";
    CompilerState["Run"] = "Run";
    CompilerState["Stdin"] = "Stdin";
    CompilerState["Success"] = "Success";
    CompilerState["Killed"] = "Killed";
    CompilerState["Error"] = "Error";
})(CompilerState || (CompilerState = {}));
var CompilerMessageType;
(function (CompilerMessageType) {
    CompilerMessageType["Ready"] = "Ready";
    CompilerMessageType["Mount"] = "Mount";
    CompilerMessageType["Unmount"] = "Unmount";
    CompilerMessageType["InstallPackages"] = "InstallPackages";
    CompilerMessageType["ExecuteFile"] = "ExecuteFile";
    CompilerMessageType["ExecuteCode"] = "ExecuteCode";
    CompilerMessageType["StopExecution"] = "StopExecution";
    CompilerMessageType["SubscribeNotify"] = "SubscribeNotify";
    CompilerMessageType["SubscribeState"] = "SubscribeState";
    CompilerMessageType["SubscribeStdout"] = "SubscribeStdout";
    CompilerMessageType["SubscribeStderr"] = "SubscribeStderr";
    CompilerMessageType["SendStdin"] = "SendStdin";
    CompilerMessageType["CreateDirectory"] = "CreateDirectory";
    CompilerMessageType["WriteFile"] = "WriteFile";
    CompilerMessageType["ReadFile"] = "ReadFile";
    CompilerMessageType["ReadDirectory"] = "ReadDirectory";
    CompilerMessageType["ScanDirectory"] = "ScanDirectory";
    CompilerMessageType["Delete"] = "Delete";
    CompilerMessageType["Exists"] = "Exists";
    CompilerMessageType["RenameItem"] = "RenameItem";
})(CompilerMessageType || (CompilerMessageType = {}));


/***/ }),

/***/ 3918:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \****************************************************************************************************************/
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
/*!****************************************************************************!*\
  !*** ./src/app/services/python-compiler-service/python-compiler.worker.ts ***!
  \****************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 3918);
/* harmony import */ var _compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../compiler-service/compiler-service.types */ 3809);

/// <reference lib="webworker" />
// Configs

// Bootstrap pyodide
importScripts("assets/pyodide/pyodide.js");
//let worker: PyodideFsWorker;
function main() {
  return _main.apply(this, arguments);
}
function _main() {
  _main = (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
    let worker = new PyodideWorker();
  });
  return _main.apply(this, arguments);
}
class PyodideWorker {
  constructor() {
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
    this.lastState = _compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerState.Unknown;
    this.interruptBuffer = new Uint8Array(1);
    addEventListener("message", /*#__PURE__*/function () {
      var _ref = (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (payload) {
        _this.onData(payload.data);
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
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
    //Send Init event, but outside the constructor
    setTimeout(() => {
      this.sendState(_compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerState.Loading);
    });
    this.init().then(() => {
      //this.load(this.mountPoint);
      this.interruptBuffer[0] = 0;
      this.pyodide.setInterruptBuffer(this.interruptBuffer);
      this.sendState(_compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerState.Init);
      // Send Init state to the driver
      console.log("PyodideWorker:ready");
    }).catch(error => {
      this.sendState(_compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerState.Error, error);
    });
  }
  init() {
    var _this2 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("PyodideFsWorker:init:");
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
      console.log("PyodideFsWorker:init:load:");
      _this2.pyodide = yield loadPyodide(options);
      _this2.fs = _this2.pyodide.FS;
      yield _this2.pyodide.loadPackage(["micropip"]);
      _this2.micropip = _this2.pyodide.pyimport("micropip");
      console.log("PyodideFsWorker:init:load:done");
      _this2.setCustomHooks();
    })();
  }
  setCustomHooks() {
    var _this3 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let oldInput = _this3.pyodide.globals.input;
      console.log("PyodideFsWorker:setCustomHooks:oldInput:", oldInput);
      //Globals: Input
      let localThis = _this3;
      _this3.pyodide.globals.set('input', /*#__PURE__*/function () {
        var _ref2 = (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (prompt) {
          if (prompt && prompt.trim().length > 0) {
            localThis.sendStdout(prompt);
          }
          localThis.sendState(_compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerState.Stdin);
          console.log("PyodideFsWorker:setCustomHooks:scrivo sulla consolle!!!!");
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
      /*
      let signal = this.pyodide.pyimport("signal");
      signal.signal(signal.SIGINT, (signal:any, frame:any)=>{
        console.log('setCustomHooks:signal:signal:', signal);
        console.log('setCustomHooks:signal:frame:', frame);
      })
      */
    })();
  }
  /*
  async load(mountPoint:string)
  {
    this.mountPoint = mountPoint;
    console.log("PyodideFsWorker: load")
    this.fs.mkdir(this.mountPoint);
    this.fs.mount(this.fs.filesystems.IDBFS, { root: '/' }, this.mountPoint);
    console.log("PyodideFsWorker: load: done")
       console.log("PyodideFsWorker: load: fs",this.fs)
    console.log("PyodideFsWorker: load: mounts",this.fs.mounts)
    console.log("PyodideFsWorker: load: root",this.fs.root)
    console.log("PyodideFsWorker: load: root mount",this.fs.root.mount)
  }
  */
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
        } else {
          console.log('syncFS: success!');
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
    // localThis.sendState(CompilerState.Stdin)
    console.log('PyodideWorker:onStdin:');
    //if (this.stdinBuffer.length > 0){}    -> What does this do?
    //let item = this.stdinBuffer.shift()
    let item = this.stdinBuffer[0];
    console.log('PyodideWorker:onStdin:', item);
    return item;
  }
  execCodeAsync(code) {
    console.log("PyodideFsWorker:execCode:", code);
    this.interruptBuffer[0] = 0;
    this.pyodide.setInterruptBuffer(this.interruptBuffer);
    this.interruptTimer = setInterval(() => {
      try {
        this.pyodide.checkInterrupt();
      } catch (e) {
        this.sendStderr("Process terminated by user request.");
        this.sendState(_compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerState.Killed);
        throw e;
      }
    }, 10);
    /*
    async pyodide.loadPackagesFromImports(code, options)
        code (string) – The code to inspect.
             options.checkIntegrity (boolean) – If true, check the integrity of the downloaded packages (default: true)
             options.errorCallback ((message: string) => void) – A callback, called with error/warning messages (optional)
             options.messageCallback ((message: string) => void) – A callback, called with progress messages (optional)
    */
    let options = {
      checkIntegrity: true,
      errorCallback: msg => {
        this.sendStderr(msg);
      },
      messageCallback: msg => {
        this.sendStdout(msg);
      }
    };
    this.stdinBuffer = [];
    this.pyodide.loadPackagesFromImports(code, options);
    this.pyodide.runPythonAsync(code).then(result => {
      console.log("PyodideFsWorker:execCode:result:\n", result);
      this.sendState(_compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerState.Success, result);
    }).catch(error => {
      this.handleExecError(error);
    }).finally(() => {
      clearInterval(this.interruptTimer);
    });
  }
  handleExecError(error) {
    let sys = this.pyodide.pyimport("sys");
    let errorType = error.type;
    if (errorType == "SystemExit") {
      let exitCode = sys.last_value.code.toString();
      if (exitCode == "0") {
        this.sendState(_compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerState.Success);
      } else {
        this.sendState(_compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerState.Error, "Execution terminated with exit code: " + exitCode);
      }
      return;
    }
    this.sendState(_compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerState.Error, error.message);
    //throw error
    /*
    let props = Object.getOwnPropertyNames(sys.last_value)
    let propArgs = Object.getOwnPropertyNames(sys.last_value.args)
    let propTB = Object.getOwnPropertyNames(sys.last_value.__traceback__)
         let exceptionType = sys.last_type.toJs();
    let errorValue = sys.last_value.toJs();
    let errorTraceback = sys.last_traceback.toJs();
    console.log("execCode: error.type:", errorType)
    console.log("execCode: error.type:", errorType)
    console.log("execCode: sys.last_type:", exceptionType)
    console.log("execCode: sys.last_value:", errorValue)
    console.log("execCode: sys.last_traceback:", errorTraceback)
         console.log("execCode: error.message:", error.message )
    */
    //console.log("execCode: sys:\n", sys)
    //throw error;
  }
  sendNotify(title, msg, kind = "") {
    console.log("PyodideFsWorker:sendNotify: ", msg);
    this.requestQueueNotify.forEach((request, uid) => {
      let response = this.responseFromRequest(request);
      response.message.contents = [title, msg, kind];
      console.log("PyodideFsWorker:sendNotify:uid:\n", response); //,res)
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
    console.log("PyodideWorker:sendState: ", state);
    this.requestQueueState.forEach((request, uid) => {
      let response = this.responseFromRequest(request);
      response.message.contents = [state ?? _compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerState.Unknown];
      if (content) {
        response.message.contents.push(content);
      }
      console.log("PyodideFsWorker:sendState:uid:\n", response);
      postMessage(response);
    });
  }
  sendStdout(msg) {
    console.log("PyodideFsWorker:sendStdout: " + msg);
    this.requestQueueStdout.forEach((request, uid) => {
      let response = this.responseFromRequest(request);
      response.message.contents = [msg];
      console.log("PyodideFsWorker:sendStdout:uid:\n", response); //,res)
      postMessage(response);
    });
  }
  sendStderr(msg) {
    console.log("PyodideFsWorker:sendStderr: " + msg);
    this.requestQueueStderr.forEach((request, uid) => {
      let response = this.responseFromRequest(request);
      response.message.contents = [msg];
      console.log("PyodideFsWorker:sendStderr:uid:\n", response); //,res)
      postMessage(response);
    });
  }
  onData(request) {
    //console.log('PyodideFsWorker:onData:',request);
    let action = null;
    switch (request.message.type) {
      case _compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.Ready:
        this.ready(request);
        break;
      case _compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.SubscribeNotify:
        action = request => {
          return this.subscribeNotify(request);
        };
        break;
      case _compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.SubscribeState:
        action = request => {
          return this.subscribeState(request);
        };
        break;
      case _compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.SubscribeStdout:
        action = request => {
          return this.subscribeStdout(request);
        };
        break;
      case _compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.SubscribeStderr:
        action = request => {
          return this.subscribeStderr(request);
        };
        break;
      case _compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.SendStdin:
        action = request => {
          return this.sendStdin(request);
        };
        break;
      case _compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.InstallPackages:
        action = request => {
          return this.installPackages(request);
        };
        break;
      case _compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.ExecuteCode:
        action = request => {
          return this.executeCode(request);
        };
        break;
      case _compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.ExecuteFile:
        action = request => {
          return this.executeFile(request);
        };
        break;
      case _compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.StopExecution:
        action = request => {
          return this.stopExecution(request);
        };
        break;
      case _compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.Mount:
        action = request => {
          return this.mount(request);
        };
        break;
      case _compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.Unmount:
        action = request => {
          return this.unmount(request);
        };
        break;
      case _compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.CreateDirectory:
        action = request => {
          return this.createDirectory(request);
        };
        break;
      case _compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.ReadDirectory:
        action = request => {
          return this.readDirectory(request);
        };
        break;
      case _compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.WriteFile:
        action = request => {
          return this.writeFile(request);
        };
        break;
      case _compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.ReadFile:
        action = request => {
          return this.readFile(request);
        };
        break;
      case _compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.ScanDirectory:
        action = request => {
          return this.scanDirectory(request);
        };
        break;
      case _compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.RenameItem:
        action = request => {
          return this.renameItem(request);
        };
        break;
      case _compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.Delete:
        action = request => {
          return this.delete(request);
        };
        break;
      case _compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.Exists:
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
    console.log("PyodideFsWorker:installPackages:\n", packages); //,res)
    let res = this.micropip.install(packages);
    this.syncFS();
    console.log("PyodideFsWorker:installPackages: DONE!\n", res);
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
    console.log("PyodideFsWorker:executeCode:\n", code); //,res)
    this.execCodeAsync(code);
    response.message.contents = ["true"];
    return response;
  }
  stopExecution(request) {
    let response = this.responseFromRequest(request);
    let wasRunning = this.lastState == _compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerState.Run || this.lastState == _compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerState.Stdin;
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
    let path = this.mountPoint + "/" + fullpath;
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
        this.sendState(_compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerState.Loading);
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
    this.sendState(_compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerState.Run);
    if (this.stdinResolver) {
      this.stdinResolver(this.toString(data));
      this.stdinResolver = undefined;
    } else {
      this.stdinBuffer.push(this.toString(data));
    }
    response.message.args = ['true'];
    return response;
  }
  mount(request) {
    let response = this.responseFromRequest(request);
    if (request.message.args.length < 1) {
      return this.responseError(response, "createDirectory: Requires at least 1 path as argument");
    }
    let mountPoint = request.message.args[0];
    this.mountPoint = mountPoint;
    console.log("PyodideFsWorker:mount:", mountPoint);
    this.sendState(_compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerState.Loading);
    console.log("PyodideFsWorker:mount:loading");
    if (!this.internal_exists(this.mountPoint)) this.fs.mkdir(this.mountPoint);
    this.fs.mount(this.fs.filesystems.IDBFS, {
      root: '/'
    }, this.mountPoint);
    this.fs.syncfs(true, () => {
      if (!this.isReady) {
        console.log("PyodideFsWorker:mount:ready");
        this.sendState(_compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerState.Ready);
        console.log("PyodideFsWorker:mount:ready:done");
      }
      ////Send it just after the execution of this.initPydiode(), not the first mount
      this.isReady = true;
      this.readyResolver(this.isReady);
    });
    console.log("PyodideFsWorker:mount:done");
    response.message.args = [mountPoint];
    return response;
  }
  unmount(request) {
    let response = this.responseFromRequest(request);
    if (request.message.args.length < 1) {
      return this.responseError(response, "createDirectory: Requires at least 1 path as argument");
    }
    let mountPoint = request.message.args[0];
    console.log("PyodideFsWorker:unmount:", mountPoint);
    this.sendState(_compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerState.Loading);
    this.fs.unmount(mountPoint);
    this.mountPoint = "";
    this.isReady = false;
    this.fs.syncfs(true, () => {
      this.isReady = false;
      this.sendState(_compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerState.Ready);
      this.readyResolver(this.isReady);
    });
    console.log("PyodideFsWorker:unmount:done");
    response.message.args = [mountPoint];
    return response;
  }
  createDirectory(request) {
    console.log("PyodideFsWorker:createDirectory:");
    let response = this.responseFromRequest(request);
    if (request.message.args.length < 1) {
      return this.responseError(response, "createDirectory: Requires at least 1 path as argument");
    }
    //TODO: allow for multiple queries;
    let fullpath = request.message.args[0];
    if (!this.internal_exists(this.mountPoint + fullpath)) {
      console.log("CI ENTRO");
      console.log("ABC: ", this.mountPoint + " " + fullpath);
      //var str = this.mount + fullpath.replace('.', '')
      //console.log(str)
      let res = this.fs.mkdir(this.mountPoint + fullpath);
      console.log('pydiode:createDirectory:', res);
      this.syncFS();
    }
    response.message.args = [fullpath];
    return response;
  }
  getPath(node) {
    //any: https://emscripten.org/docs/api_reference/Filesystem-API.html#FS.getPath
    let path = this.fs.getPath(node);
    let pattern = new RegExp("^" + this.mountPoint);
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
    console.log("PyodideFsWorker:scanDirectory:", fullpath);
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
  renameItem(request) {
    console.log("PyodideFsWorker:renameItem:");
    let response = this.responseFromRequest(request);
    const oldpath = this.mountPoint + request.message.args[0];
    const newpath = this.mountPoint + request.message.args[1];
    //var res = this.fs.rename(oldpath, newpath);
    this.fs.rename(oldpath, newpath);
    this.syncFS();
    //console.log("NEW FS: ", res)
    response.message.args = [oldpath, newpath];
    return response;
  }
  scanDirectory_recursive(fullpath, recursive = false) {
    let res = this.fs.lookupPath(this.mountPoint + fullpath);
    console.log("PyodideFsWorker:scanDirectory_recursive: ", res);
    console.log("PyodideFsWorker:scanDirectory_recursive:contents: ", res.node.contents);
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
        let content = this.fs.readFile(this.mountPoint + path);
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
    console.log("PyodideFsWorker:writeFile: ", fullpath);
    //console.log("PyodideFsWorker:writeFile:content: ", content)
    let res = this.fs.writeFile(this.mountPoint + fullpath, content, options);
    console.log("PyodideFsWorker:writeFile:res: ", res);
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
    console.log("PyodideFsWorker:readFile: ", fullpath);
    let content = this.fs.readFile(this.mountPoint + fullpath, opts);
    console.log('PyodideFsWorker:readFile:content:\n', content.length);
    if (content instanceof Uint8Array) {
      console.log('PyodideFsWorker:readFile:content: BUFFER', content);
      response.message.contents = [content.buffer];
    } else {
      console.log('PyodideFsWorker:readFile:content: STRING');
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
    console.log("PyodideFsWorker:delete: ", fullpath);
    //TODO: use lookupPath and isDir/isFile
    // https://emscripten.org/docs/api_reference/Filesystem-API.html#FS.lookupPath
    //TODO: do it recursive
    try {
      this.fs.rmdir(this.mountPoint + fullpath);
    } catch (_) {}
    try {
      this.fs.unlink(this.mountPoint + fullpath);
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
    console.log("PyodideFsWorker:exists:", this.mountPoint + fullpath);
    // https://emscripten.org/docs/api_reference/Filesystem-API.html#FS.analyzePath
    let exists = this.internal_exists(this.mountPoint + fullpath);
    console.log("PyodideFsWorker:exists:", exists);
    response.message.args = [exists ? 'true' : 'false'];
    return response;
  }
  internal_exists(path) {
    console.log("PyodideFsWorker:internal_file_exists:internal_exists", path);
    let res = this.fs.analyzePath(path);
    console.log("PyodideFsWorker:internal_file_exists:analyzePath", res);
    return res["exists"];
  }
}
main();
})();

/******/ })()
;
//# sourceMappingURL=src_app_services_python-compiler-service_python-compiler_worker_ts.js.map