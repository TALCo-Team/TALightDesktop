(self["webpackChunkTALightDesktop"] = self["webpackChunkTALightDesktop"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _widgets_topbar_topbar_widget_topbar_widget_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widgets/topbar/topbar-widget/topbar-widget.component */ 3547);
/* harmony import */ var _widgets_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widgets/tutorial/tutorial.component */ 75);




class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 0, consts: [["rel", "preload", "href", "https://alcdn.msauth.net/browser/2.13.1/js/msal-browser.min.js", "as", "script"], [1, "tal-page-container"], [1, "tal-page-tutorial"], [1, "tal-page-topbar"], [1, "tal-page-content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "tal-tutorial");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "tal-topbar-widget");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _widgets_topbar_topbar_widget_topbar_widget_component__WEBPACK_IMPORTED_MODULE_0__.TopbarWidgetComponent, _widgets_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_1__.TutorialComponent], styles: [".blur[_ngcontent-%COMP%] {\n  position: relative;\n  background-size: cover;\n  position: relative;\n  overflow: hidden;\n  filter: blur(10px); \n  -webkit-backdrop-filter: blur(3px); \n  backdrop-filter: blur(100%);\n  \n  pointer-events: none;\n  \n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.a[_ngcontent-%COMP%] {\n  color: red;\n  pointer-events: auto;\n  -webkit-user-select: auto;\n          user-select: auto;\n}\n\n.blur[_ngcontent-%COMP%] {\n  z-index: 1;\n}\n\ndiv.tal-page-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100vw;\n  height: 100vh;\n}\n\ndiv.tal-page-container[_ngcontent-%COMP%]   div.tal-page-tutorial[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n}\n\ndiv.tal-page-container[_ngcontent-%COMP%]   div.tal-page-topbar[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: solid 1px var(--surface-border);\n  padding: 0;\n  margin: 0;\n  z-index: 0;\n}\n\ndiv.tal-page-container[_ngcontent-%COMP%]   div.tal-page-content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  flex: 1;\n  z-index: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpZGdldHMvY29kZS1lZGl0b3IvYmx1ci5zY3NzIiwiYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQSxFQUFBLGdEQUFBO0VBQ0Esa0NBQUEsRUFFRyxvREFBQTtFQUNILDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdEQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQ0RGOztBRElBO0VBQ0UsVUFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQ0RGOztBQWhCQTtFQUVFLFVBQUE7QUFrQkY7O0FBZkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBa0JGOztBQWhCRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQWtCSjs7QUFmRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLDhDQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBaUJKOztBQWRFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7QUFnQkoiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsdXJ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmaWx0ZXI6IGJsdXIoMTBweCk7IC8qIE1vZGlmaWNhIGlsIHZhbG9yZSBkaSBibHVyIGEgdHVvIHBpYWNpbWVudG8gKi9cbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoXG4gICAgM3B4XG4gICk7IC8qIFBlciBpIGJyb3dzZXIgYmFzYXRpIHN1IFdlYktpdCAoQ2hyb21lLCBTYWZhcmkpICovXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMDAlKTtcbiAgLyogQmxvY2NhIGlsIGNsaWNrIGFpIGJvdHRvbmkgKi9cbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIC8qIFBlcm1ldHRlIGRpIGJsb2NjYXJlIGxhIHNlbGV6aW9uZSBkZWwgdGVzdG8gKi9cbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5hIHtcbiAgY29sb3I6IHJlZDtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIHVzZXItc2VsZWN0OiBhdXRvO1xufVxuIiwiQGltcG9ydCBcIi4vd2lkZ2V0cy9jb2RlLWVkaXRvci9ibHVyLnNjc3NcIjtcblxuLmJsdXIge1xuICBAZXh0ZW5kIC5ibHVyO1xuICB6LWluZGV4OiAxO1xufVxuXG5kaXYudGFsLXBhZ2UtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuXG4gIGRpdi50YWwtcGFnZS10dXRvcmlhbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cblxuICBkaXYudGFsLXBhZ2UtdG9wYmFyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCB2YXIoLS1zdXJmYWNlLWJvcmRlcik7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgei1pbmRleDogMDtcbiAgfVxuXG4gIGRpdi50YWwtcGFnZS1jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgZmxleDogMTtcbiAgICB6LWluZGV4OiAwO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ 1311);
/* harmony import */ var _views_home_view_home_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/home-view/home-view.component */ 8126);
/* harmony import */ var _views_connect_view_connect_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/connect-view/connect-view.component */ 4854);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/inputswitch */ 3585);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/dropdown */ 8992);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/fileupload */ 6193);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/tooltip */ 4329);
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/scrollpanel */ 4250);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/selectbutton */ 205);
/* harmony import */ var primeng_splitter__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/splitter */ 330);
/* harmony import */ var ngx_monaco_editor_v2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-monaco-editor-v2 */ 9247);
/* harmony import */ var _widgets_code_editor_code_editor_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./widgets/code-editor/code-editor.module */ 5130);
/* harmony import */ var _views_select_problem_view_select_problem_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/select-problem-view/select-problem-view.component */ 5770);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/radiobutton */ 9902);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _widgets_topbar_topbar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./widgets/topbar/topbar.module */ 7199);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _widgets_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./widgets/tutorial/tutorial.component */ 75);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);


























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule,
        ngx_monaco_editor_v2__WEBPACK_IMPORTED_MODULE_11__.MonacoEditorModule.forRoot(),
        _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forRoot(_routes__WEBPACK_IMPORTED_MODULE_1__.routes),
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__.InputTextModule,
        primeng_inputswitch__WEBPACK_IMPORTED_MODULE_15__.InputSwitchModule,
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_16__.DropdownModule,
        primeng_fileupload__WEBPACK_IMPORTED_MODULE_17__.FileUploadModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__.InputTextModule,
        primeng_tooltip__WEBPACK_IMPORTED_MODULE_18__.TooltipModule,
        primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_19__.ScrollPanelModule,
        primeng_selectbutton__WEBPACK_IMPORTED_MODULE_20__.SelectButtonModule,
        primeng_splitter__WEBPACK_IMPORTED_MODULE_21__.SplitterModule,
        primeng_radiobutton__WEBPACK_IMPORTED_MODULE_22__.RadioButtonModule,
        _widgets_code_editor_code_editor_module__WEBPACK_IMPORTED_MODULE_4__.CodeEditorModule,
        _widgets_topbar_topbar_module__WEBPACK_IMPORTED_MODULE_6__.TopbarModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_23__.HttpClientModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _views_home_view_home_view_component__WEBPACK_IMPORTED_MODULE_2__.HomeViewComponent,
        _views_connect_view_connect_view_component__WEBPACK_IMPORTED_MODULE_3__.ConnectViewComponent,
        _views_select_problem_view_select_problem_view_component__WEBPACK_IMPORTED_MODULE_5__.SelectProblemViewComponent,
        _widgets_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_7__.TutorialComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule, ngx_monaco_editor_v2__WEBPACK_IMPORTED_MODULE_11__.MonacoEditorModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__.InputTextModule,
        primeng_inputswitch__WEBPACK_IMPORTED_MODULE_15__.InputSwitchModule,
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_16__.DropdownModule,
        primeng_fileupload__WEBPACK_IMPORTED_MODULE_17__.FileUploadModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__.InputTextModule,
        primeng_tooltip__WEBPACK_IMPORTED_MODULE_18__.TooltipModule,
        primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_19__.ScrollPanelModule,
        primeng_selectbutton__WEBPACK_IMPORTED_MODULE_20__.SelectButtonModule,
        primeng_splitter__WEBPACK_IMPORTED_MODULE_21__.SplitterModule,
        primeng_radiobutton__WEBPACK_IMPORTED_MODULE_22__.RadioButtonModule,
        _widgets_code_editor_code_editor_module__WEBPACK_IMPORTED_MODULE_4__.CodeEditorModule,
        _widgets_topbar_topbar_module__WEBPACK_IMPORTED_MODULE_6__.TopbarModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_23__.HttpClientModule] }); })();


/***/ }),

/***/ 5107:
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_connection_manager_service_connection_manager_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/connection-manager-service/connection-manager.service */ 5581);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);




class AuthGuard {
    constructor(connectionManagerService, router) {
        this.connectionManagerService = connectionManagerService;
        this.router = router;
    }
    canActivate(route, state) {
        const isConnected = this.connectionManagerService.isConnected;
        if (!isConnected) {
            //this.router.navigate(['/connect']);
        }
        return true;
        return isConnected;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_connection_manager_service_connection_manager_service__WEBPACK_IMPORTED_MODULE_0__.ConnectionManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1311:
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/auth.guard */ 5107);
/* harmony import */ var _views_home_view_home_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/home-view/home-view.component */ 8126);
/* harmony import */ var _views_demo_view_demo_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/demo-view/demo-view */ 9425);



const routes = [
    /*
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        canActivate: [AuthGuard],
        component: HomeViewComponent
    },
    */
    {
        path: '',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        component: _views_home_view_home_view_component__WEBPACK_IMPORTED_MODULE_1__.HomeViewComponent
    },
    /*
    {
        path: 'connect',
        component: ConnectViewComponent
    },

    {
        path: 'select-problem',
        component: SelectProblemViewComponent
    },
    */
    {
        path: 'demo',
        component: _views_demo_view_demo_view__WEBPACK_IMPORTED_MODULE_2__.DemoViewComponent
    },
];


/***/ }),

/***/ 9846:
/*!******************************************************!*\
  !*** ./src/app/services/api-service/api.commands.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Commands": () => (/* binding */ Commands)
/* harmony export */ });
/* harmony import */ var _home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 3918);
/* harmony import */ var _api_socket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.socket */ 7940);
/* harmony import */ var _api_packets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.packets */ 6371);
/* harmony import */ var hash_wasm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hash-wasm */ 3021);




var JSONbig = __webpack_require__(/*! json-bigint */ 7324);
var Commands;
(function (Commands) {
  class Command {
    constructor(url, decodeBinary) {
      this.debug = false;
      this.url = url;
      this.tal = new _api_socket__WEBPACK_IMPORTED_MODULE_1__.TALightSocket(this.url);
      if (decodeBinary === false) {
        this.tal.decode = decodeBinary;
      }
      this.tal.onError = error => {
        this.didError(error);
      };
      this.tal.onClose = () => {
        this.didClose();
      };
      this.tal.onRecive = payload => {
        this.didRecive(payload);
      };
      this.tal.onReciveBinary = payload => {
        this.didReciveBinary(payload);
      };
      this.tal.onReciveUndecodedBinary = payload => {
        this.didReciveUndecodedBinary(payload);
      };
    }
    run() {
      let msg = new _api_packets__WEBPACK_IMPORTED_MODULE_2__.Packets.Request.Handshake();
      this.tal.send(msg);
    }
    sendBinary(data) {
      this.log("didSendBinary: " + data);
      this.tal.sendBinary(data);
    }
    log(...args) {
      let prefix = this.constructor.name + ": ";
      console.log(prefix, ...args);
      if (this.debug) alert(prefix + args.join(" "));
    }
    didClose() {
      this.log("didClose");
      if (this.onClose) {
        this.onClose();
      }
    }
    didError(error) {
      this.log("didError ", error);
      if (this.onError) {
        this.onError(error);
      }
    }
    didReciveBinary(payload) {
      this.log("didReciveBinary:\n" + payload);
      if (this.onReciveBinary) {
        this.onReciveBinary(payload);
      }
    }
    didReciveUndecodedBinary(payload) {
      this.log("didReciveUndecodedBinary:\n");
      if (this.onReciveUndecodedBinary) {
        this.onReciveUndecodedBinary(payload);
      }
    }
    didRecive(payload) {
      var _this = this;
      return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this.log("didRecive");
        if (_this.onRecive) {
          _this.onRecive(payload);
        }
        let message = payload.getMessage(_api_packets__WEBPACK_IMPORTED_MODULE_2__.Packets.Reply.Handshake);
        if (message) {
          _this.didReciveHandshake(message);
        }
      })();
    }
    didReciveHandshake(message) {
      this.log("didRecieveHandshake");
      if (this.onReciveHandshake) {
        this.onReciveHandshake(message);
      }
    }
  }
  Commands.Command = Command;
  class ProblemList extends Command {
    didReciveHandshake(handshake) {
      super.didReciveHandshake(handshake);
      let msg = new _api_packets__WEBPACK_IMPORTED_MODULE_2__.Packets.Request.MetaList();
      this.tal.send(msg);
    }
    didRecive(payload) {
      var _superprop_getDidRecive = () => super.didRecive,
        _this2 = this;
      return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _superprop_getDidRecive().call(_this2, payload);
        let message = payload.getMessage_MetaList(_api_packets__WEBPACK_IMPORTED_MODULE_2__.Packets.Reply.MetaList);
        if (message) {
          _this2.didReciveProblemList(message);
        }
      })();
    }
    didReciveProblemList(message) {
      this.log("onRecieveProblemList");
      if (this.onRecieveProblemList) {
        this.onRecieveProblemList(message);
      }
    }
  }
  Commands.ProblemList = ProblemList;
  class Attchment extends Command {
    constructor(url, problem_name) {
      super(url, false);
      this.msg = new _api_packets__WEBPACK_IMPORTED_MODULE_2__.Packets.Request.Attachment(problem_name);
    }
    didReciveHandshake(handshake) {
      super.didReciveHandshake(handshake);
      this.tal.send(this.msg);
    }
    didRecive(payload) {
      var _superprop_getDidRecive2 = () => super.didRecive,
        _this3 = this;
      return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _superprop_getDidRecive2().call(_this3, payload);
        let message;
        message = payload.getMessage(_api_packets__WEBPACK_IMPORTED_MODULE_2__.Packets.Reply.Attachment);
        if (message) {
          _this3.didRecieveAttachment(message);
        }
        message = payload.getMessage(_api_packets__WEBPACK_IMPORTED_MODULE_2__.Packets.Reply.BinaryDataHeader);
        if (message) {
          _this3.didRecieveAttachmentInfo(message);
        }
      })();
    }
    didRecieveAttachment(message) {
      this.log("Attachment");
      if (this.onReciveAttachment) {
        this.onReciveAttachment(message);
      }
    }
    didRecieveAttachmentInfo(message) {
      this.log("AttachmentInfo");
      if (this.onReciveAttachmentInfo) {
        this.onReciveAttachmentInfo(message);
      }
    }
  }
  Commands.Attchment = Attchment;
  class Connect extends Command {
    constructor(url, problem_name, service, args, tty, token, files) {
      super(url);
      this.files = new Map();
      if (files) {
        this.files = files;
      }
      let fileArgNames = [...this.files.keys()];
      this.msg = new _api_packets__WEBPACK_IMPORTED_MODULE_2__.Packets.Request.ConnectBegin(problem_name, service, args, tty, token, fileArgNames);
    }
    didReciveHandshake(handshake) {
      super.didReciveHandshake(handshake);
      this.tal.send(this.msg);
    }
    didRecive(payload) {
      var _superprop_getDidRecive3 = () => super.didRecive,
        _this4 = this;
      return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _superprop_getDidRecive3().call(_this4, payload);
        let message;
        message = payload.getMessage(_api_packets__WEBPACK_IMPORTED_MODULE_2__.Packets.Reply.ConnectBegin);
        if (message) {
          _this4.didRecieveConnectBegin(message);
          if (_this4.files.size > 0 && message.status.Ok.length > 0 && message.status.Ok[0] !== "") {
            const byteSize = str => new Blob([str]).size;
            for (let [nameArgFile, content] of _this4.files.entries()) {
              let hashHex = yield (0,hash_wasm__WEBPACK_IMPORTED_MODULE_3__.sha256)(content);
              console.log("hash: ");
              console.log("hash: ", fromHexString(hashHex));
              let hash = fromHexString(hashHex);
              let hash_list = [];
              let i = 0;
              hash.forEach(elem => {
                hash_list[i] = parseInt(elem.toString(), 10);
                i++;
              });
              let size = byteSize(content);
              let header = new _api_packets__WEBPACK_IMPORTED_MODULE_2__.Packets.Request.BinaryDataHeader(nameArgFile, size, hash_list);
              //console.log("header: ", header);
              //console.log("header:string", header.toString());
              //var header_parsed = JSONbig.stringify(header);
              //console.log("header:parsed: ", header_parsed);
              //console.log("header:parsed:type ", typeof header_parsed);
              _this4.tal.send(header);
              _this4.tal.sendBinary(content);
            }
          }
        }
        message = payload.getMessage(_api_packets__WEBPACK_IMPORTED_MODULE_2__.Packets.Reply.ConnectStart);
        if (message) {
          _this4.didRecieveConnectStart(message);
        }
        message = payload.getMessage(_api_packets__WEBPACK_IMPORTED_MODULE_2__.Packets.Reply.ConnectStop);
        if (message) {
          _this4.didRecieveConnectStop(message);
        }
        message = payload.getMessage(_api_packets__WEBPACK_IMPORTED_MODULE_2__.Packets.Reply.BinaryDataHeader);
        if (message) {
          _this4.didRecieveBinaryHeader(message);
        }
      })();
    }
    didRecieveConnectBegin(message) {
      this.log("didRecieveConnectBegin");
      if (this.onReciveConnectBegin) {
        this.onReciveConnectBegin(message);
      }
    }
    didRecieveConnectStart(message) {
      this.log("didRecieveConnectStart");
      if (this.onReciveConnectStart) {
        this.onReciveConnectStart(message);
      }
    }
    didRecieveConnectStop(message) {
      this.log("didRecieveConnectStop", message);
      /* download result files */
      if (this.onReciveConnectStop) {
        this.onReciveConnectStop(message);
        if (this.tal.isOpen() === true) {
          this.sendConnectStop();
        }
      }
    }
    didRecieveBinaryHeader(message) {
      this.log("BinaryHeader");
      if (this.onReciveBinaryHeader) {
        this.onReciveBinaryHeader(message);
      }
    }
    sendConnectStop() {
      this.tal.send(new _api_packets__WEBPACK_IMPORTED_MODULE_2__.Packets.Request.ConnectStop());
      //this.tal.closeConnection();
    }
  }
  Commands.Connect = Connect;
  class CloseConnection extends Command {
    didReciveHandshake(handshake) {
      super.didReciveHandshake(handshake);
      let msg = new _api_packets__WEBPACK_IMPORTED_MODULE_2__.Packets.Request.ConnectStop();
      this.tal.send(msg);
    }
    didRecive(payload) {
      var _superprop_getDidRecive4 = () => super.didRecive,
        _this5 = this;
      return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _superprop_getDidRecive4().call(_this5, payload);
        let message = payload.getMessage(_api_packets__WEBPACK_IMPORTED_MODULE_2__.Packets.Reply.ConnectStop);
        if (message) {
          _this5.didReciveConnectStop(message);
        }
      })();
    }
    didReciveConnectStop(message) {
      this.log("didRecieveGameList");
      if (this.onReciveConnectStop) {
        this.onReciveConnectStop(message);
      }
    }
  }
  Commands.CloseConnection = CloseConnection;
})(Commands || (Commands = {}));
function fromHexString(hexString) {
  return Uint8Array.from(hexString.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));
}

/***/ }),

/***/ 6371:
/*!*****************************************************!*\
  !*** ./src/app/services/api-service/api.packets.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Packets": () => (/* binding */ Packets)
/* harmony export */ });
var Packets;
(function (Packets) {
    class PacketsPayload {
        constructor(data) {
            this.packetTypes = [];
            this.data = data;
            this.packets = JSON.parse(this.data);
            for (var pkttype in this.packets) {
                this.packetTypes.push(pkttype);
            }
            /*
            if(this.packetTypes.length === 3 &&
              this.packetTypes.indexOf("name") === 0 &&
              this.packetTypes.indexOf("size") === 1 &&
              this.packetTypes.indexOf("hash") === 2
              ) {
                this.packetTypes = ["AttachmentInfo"];
                this.packets = {"AttachmentInfo" : this.packets};
            }
            */
        }
        getMessage(packetClass) {
            let packetType = packetClass.name;
            for (var pkttype in this.packets) {
                if (pkttype != packetType) {
                    continue;
                }
                let packet = this.packets[packetType];
                console.log("Packet:", packet);
                let message = new packetClass(packet);
                message.fromPacket(packet);
                console.log("Packet:Message:", message);
                return message;
            }
            return null;
        }
        getMessage_MetaList(packetClass) {
            let packetType = packetClass.name;
            for (var pkttype in this.packets) {
                if (pkttype != packetType) {
                    continue;
                }
                let packet = this.packets[packetType];
                console.log("Packet:", packet);
                let message = new packetClass(packet);
                console.log("Packet:Message:", message);
                return message;
            }
            return null;
        }
    }
    Packets.PacketsPayload = PacketsPayload;
    class Message {
        constructor(packet) {
            console.log("packet:message:constructor:", packet);
            if (packet) {
                this.fromPacket(packet);
            }
        }
        static dataToPayload(data) {
            let raw = JSON.parse(data);
            return raw;
        }
        static findPacketName(msgClasses, packet) {
            var msgClass = "";
            msgClasses.forEach((msgName) => {
                if (msgName in JSON.parse(packet)) {
                    msgClass = msgName;
                }
            });
            return msgClass;
        }
        messageName() {
            return this.constructor.name;
        }
        toPacketWithName(messageName) {
            const packet = { [messageName]: this };
            return packet;
        }
        toPacket() {
            const packetName = this.messageName();
            const packet = { [packetName]: this };
            return packet;
        }
        fromPacket(packet) {
            console.log("packet:message:fromPacket:", this);
            if ("name" in this) {
                console.log("packet:message:fromPacket:", this["name"]);
            }
            else {
                console.log("packet:message:fromPacket:", false);
            }
            for (var msgField in this) {
                console.log("packet:message:fromPacket:var:checkprint");
                console.log("packet:message:fromPacket:var:", msgField);
            }
            for (var msgField in this) {
                if (!(msgField in packet)) {
                    continue;
                }
                let value = packet[msgField];
                const varType = typeof value;
                if (varType in ["function", "undefined", "symbol"]) {
                    continue;
                }
                if (varType === "object") {
                    console.log("packet:message:copyObject:", value);
                    this[msgField] = Object.assign(value);
                }
                else {
                    console.log("packet:message:copyValue:", value);
                    this[msgField] = value;
                }
            }
            return true;
        }
    }
    Packets.Message = Message;
    class Meta {
        constructor(data) {
            this.public_folder = "";
            this.services = new Map();
            //console.log("Meta:constructor:", data)
            this.public_folder = data.public_folder;
            let servicesMap = new Map();
            for (var attr in data.services) {
                let value = data.services[attr];
                //console.log("Meta:constructor:services:",attr,value)
                let service = new Service(value);
                servicesMap.set(attr, service);
            }
            this.services = servicesMap;
        }
    }
    Packets.Meta = Meta;
    class Service {
        constructor(data) {
            this.evaluator = [];
            //console.log("Service:constructor:", data)
            this.evaluator = data.evaluator;
            this.files = data.files;
            let argsMap = new Map();
            for (var attr in data.args) {
                let value = data.args[attr];
                let arg = new Arg(value);
                argsMap.set(attr, arg);
            }
            this.args = argsMap;
        }
    }
    Packets.Service = Service;
    class Arg {
        constructor(data) {
            this.regex = data.regex;
            this.default = data.default;
        }
    }
    Packets.Arg = Arg;
    // Requests ---------------------------------
    let Request;
    (function (Request) {
        class Message extends Packets.Message {
        }
        Request.Message = Message;
        class Handshake extends Message {
            constructor() {
                super(...arguments);
                this.magic = "rtal";
                this.version = 4;
            }
        }
        Request.Handshake = Handshake;
        class MetaList extends Message {
        }
        Request.MetaList = MetaList;
        class Attachment extends Message {
            constructor(problem_name) {
                super();
                this.problem = problem_name;
            }
        }
        Request.Attachment = Attachment;
        class ConnectBegin extends Message {
            constructor(problem, service, args = {}, tty = false, token = null, files = []) {
                super();
                this.problem = "";
                this.service = "";
                this.args = {};
                this.tty = false;
                this.token = null;
                this.files = [];
                this.problem = problem;
                this.service = service;
                this.args = args;
                this.tty = tty;
                this.token = token;
                this.files = files;
            }
        }
        Request.ConnectBegin = ConnectBegin;
        class BinaryDataHeader extends Message {
            constructor(name, size, hash) {
                super();
                this.name = "";
                this.size = 0;
                this.hash = [];
                this.name = name;
                this.size = size;
                this.hash = hash;
            }
        }
        Request.BinaryDataHeader = BinaryDataHeader;
        class ConnectStop extends Message {
        }
        Request.ConnectStop = ConnectStop;
    })(Request = Packets.Request || (Packets.Request = {}));
    let Reply;
    (function (Reply) {
        class Message extends Packets.Message {
        }
        Reply.Message = Message;
        class Handshake extends Message {
            constructor() {
                super(...arguments);
                this.magic = "";
                this.version = 2;
            }
        }
        Reply.Handshake = Handshake;
        class MetaList extends Message {
            constructor(packet) {
                super(packet);
                this.meta = new Map();
                let metaMap = new Map();
                for (var attr in packet.meta) {
                    let value = packet.meta[attr];
                    let meta = new Meta(value);
                    metaMap.set(attr, meta);
                }
                this.meta = metaMap;
            }
        }
        Reply.MetaList = MetaList;
        class Attachment extends Message {
            constructor() {
                super(...arguments);
                this.status = { "Ok": undefined, "Err": "" };
            }
        }
        Reply.Attachment = Attachment;
        class BinaryDataHeader extends Message {
            constructor() {
                super(...arguments);
                this.name = "";
                this.size = "";
                this.hash = "";
            }
        }
        Reply.BinaryDataHeader = BinaryDataHeader;
        class ConnectBegin extends Message {
            constructor() {
                super(...arguments);
                this.status = { "Ok": [""], "Err": "" };
            }
        }
        Reply.ConnectBegin = ConnectBegin;
        class ConnectStart extends Message {
            constructor() {
                super(...arguments);
                this.status = { "Ok": undefined, "Err": "" };
            }
        }
        Reply.ConnectStart = ConnectStart;
        class ConnectStop extends Message {
            constructor() {
                super(...arguments);
                this.status = { "Ok": [""], "Err": "" };
            }
        }
        Reply.ConnectStop = ConnectStop;
        class Result {
            constructor(data) {
                this.Ok = null;
                this.Err = "";
                if ("Ok" in data) {
                    this.Err = data["Ok"];
                }
                if ("Err" in data) {
                    this.Err = data["Err"];
                }
            }
            success() { return this.Err == ""; }
        }
        Reply.Result = Result;
        /*
        Attachment { status: Result<(), String> },
        ConnectBegin { status: Result<Vec<String>, String> },
        ConnectStart { status: Result<(), String> },
        ConnectStop { status: Result<Vec<String>, String> }
        */
    })(Reply = Packets.Reply || (Packets.Reply = {}));
})(Packets || (Packets = {}));


/***/ }),

/***/ 7829:
/*!*****************************************************!*\
  !*** ./src/app/services/api-service/api.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService),
/* harmony export */   "ApiState": () => (/* binding */ ApiState),
/* harmony export */   "Meta": () => (/* binding */ Meta)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _api_packets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.packets */ 6371);
/* harmony import */ var _api_commands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.commands */ 9846);




class Meta extends _api_packets__WEBPACK_IMPORTED_MODULE_0__.Packets.Meta {
}
var ApiState;
(function (ApiState) {
    ApiState[ApiState["Idle"] = 0] = "Idle";
    ApiState[ApiState["Good"] = 1] = "Good";
    ApiState[ApiState["Maybe"] = 2] = "Maybe";
    ApiState[ApiState["Bad"] = 3] = "Bad";
})(ApiState || (ApiState = {}));
class ApiService {
    constructor() {
        this.lastState = ApiState.Idle;
        this.onApiStateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this._url = 'wss://ta.di.univr.it/algo';
        this.urlCache = [
            'wss://ta.di.univr.it/algo',
            'wss://ta.di.univr.it/sfide',
            'ws://localhost:8008/',
        ];
    }
    get url() {
        return this._url;
    }
    addToCache(url) {
        this.removeFromCache(url);
        this.urlCache.unshift(url);
    }
    removeFromCache(url) {
        let idx = this.urlCache.indexOf(url);
        if (idx != -1) {
            this.urlCache.splice(idx, 1);
            return true;
        }
        return false;
    }
    setUrl(value) {
        let url;
        console.log("setUrl");
        try {
            url = new URL(value);
        }
        catch (_) {
            return false;
        }
        if (!(url.protocol == 'ws:' || url.protocol == 'wss:')) {
            return false;
        }
        console.log("setUrl:valid!");
        this.resetAllConnections();
        this._url = url.href;
        console.log("setUrl:href:", url.href);
        this.addToCache(this._url);
        return true;
    }
    updateState(state) {
        if (this.lastState != state) {
            this.lastState = state;
            this.onApiStateChange.emit(state);
        }
    }
    stateIdle() { this.updateState(ApiState.Idle); }
    stateGood() { this.updateState(ApiState.Good); }
    stateMaybe() { this.updateState(ApiState.Maybe); }
    stateBad() { this.updateState(ApiState.Bad); }
    resetAllConnections() {
        //TODO: is it necessary to kill all old connection upon URL change ?
    }
    problemList(onResult, onError) {
        this.stateMaybe();
        console.log("problemList:");
        let cmdList = new _api_commands__WEBPACK_IMPORTED_MODULE_1__.Commands.ProblemList(this._url);
        cmdList.onRecieveProblemList = (message) => {
            console.log("problemList:onRecieveProblemList:", message);
            this.stateGood();
            if (onResult) {
                onResult(message.meta);
            }
        };
        cmdList.onError = (error) => {
            this.stateBad();
            console.log("problemList:onError:");
            if (onError) {
                onError(error);
            }
        };
        cmdList.run();
        return cmdList;
    }
    GetAttachment(problemName, onAttachment, onAttachmentInfo, onData, onError) {
        this.stateMaybe();
        let cmdGet = new _api_commands__WEBPACK_IMPORTED_MODULE_1__.Commands.Attchment(this._url, problemName);
        cmdGet.onReciveAttachment = (message) => {
            if (message.status.Err) {
                this.stateBad();
                if (cmdGet.onError) {
                    cmdGet.onError("Failed to receive attachment: " + message.status.Ok);
                }
                return;
            }
            this.stateGood();
            if (onAttachment) {
                onAttachment();
            }
        };
        cmdGet.onReciveAttachmentInfo = (message) => {
            this.stateGood();
            if (onAttachmentInfo) {
                onAttachmentInfo(message);
            }
        };
        cmdGet.onReciveUndecodedBinary = (message) => {
            this.stateGood();
            if (onData) {
                onData(message);
            }
        };
        cmdGet.onError = (error) => {
            this.stateBad();
            if (onError) {
                onError(error);
            }
        };
        cmdGet.run();
        return cmdGet;
    }
    Connect(problem_name, service, args, tty, token, files, onConnectBegin, onConnectStart, onConnectStop, onData, onBinaryHeader, onError) {
        this.stateMaybe();
        let cmdConnect = new _api_commands__WEBPACK_IMPORTED_MODULE_1__.Commands.Connect(this._url, problem_name, service, args, tty, token, files);
        cmdConnect.onReciveConnectBegin = (message) => {
            if (message.status.Err) {
                this.stateBad();
                if (cmdConnect.onError) {
                    cmdConnect.onError("Failed to begin connection: " + message.status.Err);
                }
                return;
            }
            this.stateGood();
            if (onConnectBegin && message.status.Ok) {
                onConnectBegin(message.status.Ok);
            }
        };
        cmdConnect.onReciveConnectStart = (message) => {
            if (message.status.Err) {
                this.stateBad();
                if (cmdConnect.onError) {
                    cmdConnect.onError("Failed to start connect: " + message.status.Err);
                }
                return;
            }
            this.stateGood();
            if (onConnectStart) {
                onConnectStart();
            }
        };
        cmdConnect.onReciveConnectStop = (message) => {
            if (message.status.Err) {
                this.stateBad();
                if (cmdConnect.onError) {
                    cmdConnect.onError("Failed to stop connection: " + message.status.Err);
                }
                return;
            }
            this.stateGood();
            if (onConnectStop && message.status.Ok) {
                onConnectStop(message.status.Ok);
            }
        };
        cmdConnect.onReciveBinary = (message) => {
            this.stateGood();
            if (onData) {
                onData(message);
            }
        };
        cmdConnect.onReciveBinaryHeader = (message) => {
            this.stateGood();
            if (onBinaryHeader) {
                onBinaryHeader(message);
            }
        };
        cmdConnect.onError = (error) => {
            this.stateBad();
            if (onError) {
                onError(error);
            }
        };
        cmdConnect.run();
        return cmdConnect;
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(); };
ApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7940:
/*!****************************************************!*\
  !*** ./src/app/services/api-service/api.socket.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TALightSocket": () => (/* binding */ TALightSocket)
/* harmony export */ });
/* harmony import */ var rxjs_webSocket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/webSocket */ 3526);
/* harmony import */ var _api_packets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.packets */ 6371);


class TALightSocket {
    constructor(url) {
        this.url = 'ws://localhost:8008';
        this.decode = true;
        this.binEncoder = new TextEncoder(); // always utf-8
        this.binDecoder = new TextDecoder("utf-8");
        this.url = url;
        if (!this.ws || this.ws.closed) {
            this.ws = new rxjs_webSocket__WEBPACK_IMPORTED_MODULE_1__.WebSocketSubject({
                url: this.url,
                binaryType: "arraybuffer",
                deserializer: msg => msg,
                serializer: msg => {
                    if (msg instanceof ArrayBuffer)
                        return msg;
                    else if (typeof msg === "string")
                        return msg;
                    else
                        return JSON.stringify(msg);
                }
            });
            this.ws.subscribe({
                next: (payload) => { this.didRecieve(payload); },
                error: (error) => { this.didError(error); },
                complete: () => { this.didClose(); },
            });
            console.log("Created new socket");
        }
    }
    isOpen() {
        return (!!this.ws) && !this.ws.closed;
    }
    closeConnection() {
        this.ws.unsubscribe();
        this.ws.complete();
        console.log("TALightSocket:closeConnection");
    }
    send(request) {
        if (!this.isOpen()) {
            this.didError("TALightSocket:send: unable to send, socket is null");
            return false;
        }
        let packet = request.toPacket();
        this.ws.next(packet);
        return true;
    }
    sendBinary(data) {
        let payload = this.binEncoder.encode(data);
        if (!this.isOpen()) {
            this.didError("TALightSocket:sendBinary: unable to send, socket is null");
            return false;
        }
        console.log("TALightSocket:sendBinary: sending payload \n" + payload);
        this.ws.next(payload.buffer);
        return true;
    }
    didRecieve(payload) {
        let data = payload.data;
        console.log("TALightSocket:didRecieve:type: " + payload.constructor.name + "<" + payload.data.constructor.name + ">");
        if (typeof data === "object" && data instanceof ArrayBuffer) {
            if (this.decode) {
                if (data.byteLength == 0) {
                    return;
                }
                data = this.binDecoder.decode(data);
                console.log("TALightSocket:didRecieve:binary:\n" + data);
                if (this.onReciveBinary) {
                    this.onReciveBinary(data);
                }
            }
            else {
                if (this.onReciveUndecodedBinary) {
                    this.onReciveUndecodedBinary(data);
                }
            }
        }
        else {
            let packetsPayload = new _api_packets__WEBPACK_IMPORTED_MODULE_0__.Packets.PacketsPayload(data);
            console.log("TALightSocket:didRecieve:packets: " + packetsPayload.packetTypes);
            if (this.onRecive) {
                this.onRecive(packetsPayload);
            }
        }
    }
    didError(error) {
        //let errorMsg = JSON.stringify(err);
        if (this.onError) {
            this.onError(error);
        }
    }
    didClose() {
        this.closeConnection();
        if (this.onClose) {
            this.onClose();
        }
    }
}


/***/ }),

/***/ 3997:
/*!**********************************************************************!*\
  !*** ./src/app/services/compiler-service/compiler-service-driver.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompilerDriver": () => (/* binding */ CompilerDriver)
/* harmony export */ });
/* harmony import */ var _home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 3918);
/* harmony import */ var _compiler_service_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compiler-service.types */ 3809);
/* harmony import */ var _fs_service_fs_service_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fs-service/fs.service.types */ 118);



// --- CompilerDriver --- 
class CompilerDriver {
  constructor(mountPoint, mountRoot, worker) {
    this.worker = worker;
    this.fsRoot = _fs_service_fs_service_types__WEBPACK_IMPORTED_MODULE_2__.FsNodeEmptyFolder;
    this.fsList = [];
    this.fsListfiles = [];
    this.mountPoint = "/TALight";
    this.mountRoot = ".";
    this.requestIndex = new Map();
    this.binEncoder = new TextEncoder(); // always utf-8
    this.binDecoder = new TextDecoder("utf-8");
    this.driverName = "CompilerDriver";
    this.mountPoint = mountPoint;
    this.mountRoot = mountRoot;
    this.worker.onmessage = event => {
      this.didRecieve(event.data);
    };
    this.worker.addEventListener('error', event => {
      console.log('CompilerDriver: Worker error!');
    });
  }
  didRecieve(response) {
    if (!response) {
      return;
    }
    console.log('CompilerDriver:didRecieve:', response.message.type, response);
    let requestHandler = this.requestIndex.get(response.uid);
    if (requestHandler != null) {
      let removeRequest = true;
      let msgSent = requestHandler.request.message;
      let msgRecived = response.message;
      let resolvePromise = requestHandler.resolvePromise;
      switch (response.message.type) {
        case _compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.Ready:
          this.didReceiveReady(msgSent, msgRecived, resolvePromise);
          break;
        case _compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.InstallPackages:
          this.didReceiveInstallPackages(msgSent, msgRecived, resolvePromise);
          break;
        case _compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.ExecuteCode:
          this.didReceiveExecuteCode(msgSent, msgRecived, resolvePromise);
          break;
        case _compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.ExecuteFile:
          this.didReceiveExecuteFile(msgSent, msgRecived, resolvePromise);
          break;
        case _compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.StopExecution:
          this.didReceiveStopExecution(msgSent, msgRecived, resolvePromise);
          break;
        case _compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.SubscribeNotify:
          this.didReceiveSubscribeNotify(msgSent, msgRecived, resolvePromise);
          removeRequest = false;
          break;
        case _compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.SubscribeState:
          this.didReceiveSubscribeState(msgSent, msgRecived, resolvePromise);
          removeRequest = false;
          break;
        case _compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.SubscribeStdout:
          this.didReceiveSubscribeStdout(msgSent, msgRecived, resolvePromise);
          removeRequest = false;
          break;
        case _compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.SubscribeStderr:
          this.didReceiveSubscribeStderr(msgSent, msgRecived, resolvePromise);
          removeRequest = false;
          break;
        case _compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.SendStdin:
          this.didReceiveSendStdin(msgSent, msgRecived, resolvePromise);
          break;
        case _compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.CreateDirectory:
          this.didReceiveCreateDirectory(msgSent, msgRecived, resolvePromise);
          break;
        case _compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.ReadDirectory:
          this.didReceiveReadDirectory(msgSent, msgRecived, resolvePromise);
          break;
        case _compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.ScanDirectory:
          this.didReceiveScanDirectory(msgSent, msgRecived, resolvePromise);
          break;
        case _compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.WriteFile:
          this.didReceiveWriteFile(msgSent, msgRecived, resolvePromise);
          break;
        case _compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.ReadFile:
          this.didReceiveReadFile(msgSent, msgRecived, resolvePromise);
          break;
        case _compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.RenameItem:
          this.didReceiveRenameItem(msgSent, msgRecived, resolvePromise);
          break;
        case _compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.Delete:
          this.didReceiveDelete(msgSent, msgRecived, resolvePromise);
          break;
        case _compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.Exists:
          this.didReceiveExists(msgSent, msgRecived, resolvePromise);
          break;
      }
      if (removeRequest) {
        this.requestIndex.delete(response.uid);
      }
    }
  }
  didReceiveReady(msgSent, msgRecived, resolvePromise) {
    console.log("didReceiveReady: ");
    let ready = msgRecived.args[0];
    resolvePromise(ready == 'true' ? true : false);
  }
  didReceiveInstallPackages(msgSent, msgRecived, resolvePromise) {
    console.log("didReceiveInstallPackages: ");
    if (msgSent.contents.length != 1) {
      resolvePromise("");
    }
    console.log(msgRecived.contents);
    resolvePromise(this.dataToString(msgRecived.contents[0]));
  }
  didReceiveExecuteCode(msgSent, msgRecived, resolvePromise) {
    console.log("didReceiveExecuteCode: ");
    if (msgSent.contents.length != 1) {
      resolvePromise("");
    }
    console.log(msgRecived.contents);
    resolvePromise(this.dataToString(msgRecived.contents[0]));
  }
  didReceiveExecuteFile(msgSent, msgRecived, resolvePromise) {
    console.log("didReceiveExecuteFile: ");
    if (msgSent.contents.length != 1) {
      resolvePromise("");
    }
    console.log(msgRecived.contents);
    resolvePromise(this.dataToString(msgRecived.contents[0]));
  }
  didReceiveStopExecution(msgSent, msgRecived, resolvePromise) {
    console.log("didReceiveStopExecution: ", msgRecived.args);
    if (msgSent.args.length != 1) {
      resolvePromise(false);
    }
    resolvePromise(true);
  }
  didReceiveSubscribeNotify(msgSent, msgRecived, resolvePromise) {
    console.log("didReceiveSubscribeNotify: ");
    if (msgRecived.args.length == 1) {
      let result = msgRecived.args[0] == 'true';
      resolvePromise(result);
    }
    if (this.onNotify && msgRecived.contents.length > 1) {
      console.log(msgRecived.contents);
      let [title, msg, kind] = msgRecived.contents;
      this.onNotify(this.dataToString(title), this.dataToString(msg), this.dataToString(kind));
    }
  }
  didReceiveSubscribeState(msgSent, msgRecived, resolvePromise) {
    console.log("didReceiveSubscribeState: ");
    if (msgRecived.args.length == 1) {
      let result = msgRecived.args[0] == 'true';
      resolvePromise(result);
    }
    console.log("didReceiveSubscribeState: ", msgRecived.contents);
    if (this.onState && msgRecived.contents.length > 0) {
      console.log("didReceiveSubscribeState: ", msgRecived.contents);
      let state = msgRecived.contents[0];
      let content;
      if (msgRecived.contents.length > 1) {
        content = this.dataToString(msgRecived.contents[1]);
      }
      this.onState(state, content);
    }
  }
  didReceiveSubscribeStdout(msgSent, msgRecived, resolvePromise) {
    console.log("didReceiveSubscribeStdout: ");
    if (msgRecived.args.length == 1) {
      let result = msgRecived.args[0] == 'true';
      resolvePromise(result);
    }
    if (this.onStdout && msgRecived.contents.length > 0) {
      console.log(msgRecived.contents);
      let content = msgRecived.contents[0];
      this.onStdout(this.dataToString(content));
    }
  }
  didReceiveSubscribeStderr(msgSent, msgRecived, resolvePromise) {
    console.log("didReceiveSubscribeStderr: ");
    if (msgRecived.args.length == 1) {
      let result = msgRecived.args[0] == 'true';
      resolvePromise(result);
    }
    if (this.onStderr && msgRecived.contents.length > 0) {
      console.log(msgRecived.contents);
      let content = msgRecived.contents[0];
      this.onStderr(this.dataToString(content));
    }
  }
  didReceiveSendStdin(msgSent, msgRecived, resolvePromise) {
    console.log("didReceiveSendStdin: ");
    if (msgRecived.args.length > 0) {
      let result = msgRecived.args[0] == 'true';
      resolvePromise(result);
    }
    resolvePromise(false);
  }
  didReceiveCreateDirectory(msgSent, msgRecived, resolvePromise) {
    console.log("didReceiveCreateDirectory: ");
    if (msgSent.args.length != 1) {
      resolvePromise(false);
    }
    let pathSent = msgSent.args[0];
    let pathRecived = msgRecived.args[0];
    resolvePromise(pathSent == pathRecived);
  }
  didReceiveReadDirectory(msgSent, msgRecived, resolvePromise) {
    //TODO: do the actual thing 
    let replacer = (key, value) => {
      if (value instanceof ArrayBuffer) {
        let buffer = new Uint8Array(value);
        return Array.from(buffer);
      }
      return value;
    };
    let node = JSON.parse(this.dataToString(msgRecived.contents[0]), this.internal_jsonReplacer);
    console.log("didReceiveReadDirectory: ", node);
    resolvePromise(node);
  }
  didReceiveScanDirectory(msgSent, msgRecived, resolvePromise) {
    //TODO: do the actual thing 
    let node = JSON.parse(this.dataToString(msgRecived.contents[0]), this.internal_jsonReplacer);
    console.log("didReceiveScanDirectory: ", node);
    resolvePromise(node);
  }
  didReceiveRenameItem(msgSent, msgRecived, resolvePromise) {
    //TODO: do the actual thing 
    //let node = JSON.parse(this.dataToString(msgRecived.contents[0]),this.internal_jsonReplacer)
    //console.log("didReceiveRenameItem: ", node)
    if (msgSent.args.length != 1) {
      resolvePromise(false);
    }
    let pathSent = msgSent.args[0];
    let pathRecived = msgRecived.args[0];
    resolvePromise(pathSent == pathRecived);
  }
  internal_jsonReplacer(key, value) {
    if (typeof value !== 'object') {
      return value;
    }
    //console.log('jsonReplacer:object:',key,value)
    if (!("flags" in value && "constructor" in value && "data" in value)) {
      return value;
    }
    //console.log('jsonReplacer:constructor',value.constructor)
    if (value.constructor == 'ArrayBuffer' && value.data instanceof Array) {
      //console.log('jsonReplacer:ArrayBuffer')
      let buffer = Uint8Array.from(value.data).buffer;
      console.log('jsonReplacer:ArrayBuffer', buffer);
      return buffer;
    }
    return value;
  }
  didReceiveReadFile(msgSent, msgRecived, resolvePromise) {
    console.log("didReceiveReadFile:\n", msgRecived.contents.length);
    resolvePromise(msgRecived.contents[0]);
  }
  didReceiveWriteFile(msgSent, msgRecived, resolvePromise) {
    console.log("didReceiveWriteFile: ");
    console.log(msgRecived.args.length);
    console.log(msgRecived.contents.length);
    //TODO:
    resolvePromise(msgRecived.contents.length);
  }
  didReceiveDelete(msgSent, msgRecived, resolvePromise) {
    console.log("didReceiveDelete: ");
    resolvePromise(true);
  }
  didReceiveExists(msgSent, msgRecived, resolvePromise) {
    console.log("didReceiveExists: ");
    let res = msgRecived.args[0];
    resolvePromise(res == 'true');
  }
  // SEND: INTERNAL
  sendMessage(message) {
    console.log("CompilerDriver:sendMessage:" + message.type);
    let request = {
      uid: message.uid,
      timestamp: Date.now(),
      message: message
    };
    let promiseResolver;
    let resultPromise = new Promise((resolve, reject) => {
      promiseResolver = resolve;
    });
    let requestHandler = {
      uid: message.uid,
      request: request,
      resolvePromise: value => {
        promiseResolver(value);
      }
    };
    this.requestIndex.set(message.uid, requestHandler);
    this.worker.postMessage(request);
    return resultPromise;
  }
  //SEND: PUBLIC
  mount(path) {
    //TODO
    let message = {
      uid: this.requestUID(),
      type: _compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.Mount,
      args: [path],
      contents: []
    };
    let resultPromise = this.sendMessage(message);
    return resultPromise;
  }
  unmount(path) {
    //TODO
    let message = {
      uid: this.requestUID(),
      type: _compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.Unmount,
      args: [path],
      contents: []
    };
    let resultPromise = this.sendMessage(message);
    return resultPromise;
  }
  ready() {
    var _this = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let message = {
        uid: _this.requestUID(),
        type: _compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.Ready,
        args: [],
        contents: []
      };
      let resultPromise = _this.sendMessage(message);
      return resultPromise;
    })();
  }
  installPackages(packages) {
    var _this2 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let message = {
        uid: _this2.requestUID(),
        type: _compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.InstallPackages,
        args: packages,
        contents: []
      };
      let resultPromise = _this2.sendMessage(message);
      return resultPromise;
    })();
  }
  executeCode(code) {
    var _this3 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let message = {
        uid: _this3.requestUID(),
        type: _compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.ExecuteCode,
        args: [],
        contents: [code]
      };
      let resultPromise = _this3.sendMessage(message);
      return resultPromise;
    })();
  }
  executeFile(fullpath) {
    var _this4 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let message = {
        uid: _this4.requestUID(),
        type: _compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.ExecuteFile,
        args: [fullpath],
        contents: []
      };
      let resultPromise = _this4.sendMessage(message);
      return resultPromise;
    })();
  }
  stopExecution(signal = 2) {
    var _this5 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let message = {
        uid: _this5.requestUID(),
        type: _compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.StopExecution,
        args: [signal.toString()],
        contents: []
      };
      let resultPromise = _this5.sendMessage(message);
      return resultPromise;
    })();
  }
  subscribeNotify(enable = true, onNotify) {
    let message = {
      uid: this.requestUID(),
      type: _compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.SubscribeNotify,
      args: [enable ? 'true' : 'false'],
      contents: []
    };
    if (onNotify && enable) {
      this.onNotify = (title, msg, kind = "") => {
        onNotify(title, msg, kind);
      };
    } else {
      this.onNotify = undefined;
    }
    let resultPromise = this.sendMessage(message);
    return resultPromise;
  }
  subscribeState(enable = true, onState) {
    let message = {
      uid: this.requestUID(),
      type: _compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.SubscribeState,
      args: [enable ? 'true' : 'false'],
      contents: []
    };
    if (onState && enable) {
      this.onState = (state, content) => {
        onState(state, content);
      };
    } else {
      this.onState = undefined;
    }
    let resultPromise = this.sendMessage(message);
    return resultPromise;
  }
  subscribeStdout(enable = true, onStdout) {
    let message = {
      uid: this.requestUID(),
      type: _compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.SubscribeStdout,
      args: [enable ? 'true' : 'false'],
      contents: []
    };
    if (onStdout && enable) {
      this.onStdout = msg => {
        onStdout(msg);
      };
    } else {
      this.onStdout = undefined;
    }
    let resultPromise = this.sendMessage(message);
    return resultPromise;
  }
  subscribeStderr(enable = true, onStderr) {
    let message = {
      uid: this.requestUID(),
      type: _compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.SubscribeStderr,
      args: [enable ? 'true' : 'false'],
      contents: []
    };
    if (onStderr && enable) {
      this.onStderr = msg => {
        onStderr(msg);
      };
    } else {
      this.onStderr = undefined;
    }
    let resultPromise = this.sendMessage(message);
    return resultPromise;
  }
  sendStdin(msg) {
    let message = {
      uid: this.requestUID(),
      type: _compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.SendStdin,
      args: [],
      contents: [msg]
    };
    let resultPromise = this.sendMessage(message);
    return resultPromise;
  }
  createDirectory(fullpath) {
    var _this6 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let message = {
        uid: _this6.requestUID(),
        type: _compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.CreateDirectory,
        args: [fullpath],
        contents: []
      };
      let resultPromise = _this6.sendMessage(message);
      return resultPromise;
    })();
  }
  readFile(fullpath, binary = true) {
    var _this7 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let message = {
        uid: _this7.requestUID(),
        type: _compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.ReadFile,
        args: [fullpath],
        contents: []
      };
      if (binary) {
        message.args.push('binary');
      }
      let resultPromise = _this7.sendMessage(message);
      return resultPromise;
    })();
  }
  writeFile(fullpath, content) {
    var _this8 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("writeFile: " + fullpath);
      let message = {
        uid: _this8.requestUID(),
        type: _compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.WriteFile,
        args: [fullpath],
        contents: []
      };
      message.contents.push(content);
      let resultPromise = _this8.sendMessage(message);
      return resultPromise;
    })();
  }
  readDirectory(fullpath) {
    var _this9 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let message = {
        uid: _this9.requestUID(),
        type: _compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.ReadDirectory,
        args: [fullpath],
        contents: []
      };
      let resultPromise = _this9.sendMessage(message);
      return resultPromise;
    })();
  }
  scanDirectory(fullpath, recursive = false, parent) {
    var _this10 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!fullpath) {
        fullpath = './';
      }
      let message = {
        uid: _this10.requestUID(),
        type: _compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.ScanDirectory,
        args: [fullpath, recursive ? 'recursive' : 'flat'],
        contents: []
      };
      let resultPromise = _this10.sendMessage(message);
      return resultPromise;
    })();
  }
  renameItem(oldpath, newpath) {
    var _this11 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let message = {
        uid: _this11.requestUID(),
        type: _compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.RenameItem,
        args: [oldpath, newpath],
        contents: []
      };
      let resultPromise = _this11.sendMessage(message);
      return resultPromise;
    })();
  }
  delete(fullpath) {
    var _this12 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let message = {
        uid: _this12.requestUID(),
        type: _compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.Delete,
        args: [fullpath],
        contents: []
      };
      let resultPromise = _this12.sendMessage(message);
      return resultPromise;
    })();
  }
  exists(fullpath) {
    var _this13 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let message = {
        uid: _this13.requestUID(),
        type: _compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerMessageType.Exists,
        args: [fullpath],
        contents: []
      };
      let resultPromise = _this13.sendMessage(message);
      return resultPromise;
    })();
  }
  dataToString(data) {
    if (data instanceof ArrayBuffer) {
      return this.binDecoder.decode(data);
    }
    return data;
  }
  dataToArrayBuffer(data) {
    if (data instanceof ArrayBuffer) {
      return data;
    }
    return this.binEncoder.encode(data);
  }
  requestUID() {
    var timestap = new Date().getTime();
    let seed = Math.floor(Math.random() * 100000000);
    return 'uid-' + timestap + '-' + seed;
  }
}

/***/ }),

/***/ 6639:
/*!***********************************************************************!*\
  !*** ./src/app/services/compiler-service/compiler-service.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompilerService": () => (/* binding */ CompilerService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 3918);
/* harmony import */ var _project_manager_service_project_manager_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../project-manager-service/project-manager.types */ 4711);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _project_manager_service_project_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../project-manager-service/project-manager.service */ 9102);




class CompilerService {
  constructor(prj) {
    this.prj = prj;
    this.drivers = new Map();
    this.project = null;
    this.prj.onProjectChanged.subscribe(project => {
      this.didProjectChanged(project);
    });
  }
  didProjectChanged(project) {
    console.log("FileExplorerWidgetComponent:didProjectChanged");
    this.project = project;
  }
  registerDriver(name, driver) {
    //if (name in this.drivers){return false;}
    //alert('register: '+driver)
    this.drivers.set(name, driver);
    //alert('register: '+driver.constructor.name+' | all: '+this.getDriverNames())
    return true;
  }
  getDriver(name) {
    //alert(name + ' '  + this.getDriverNames() )
    if (this.drivers.has(name)) {
      return this.drivers.get(name);
    }
    alert(name + ' NOT found in: ' + this.getDriverNames() + " | getDriver: undefined !!!");
    return undefined;
  }
  getDriverNames() {
    return Array.from(this.drivers.keys());
  }
  readConfig() {
    var _this = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.project?.driver) {
        return null;
      }
      let defaultConfig = new _project_manager_service_project_manager_types__WEBPACK_IMPORTED_MODULE_1__.ProjectConfig();
      if (!(yield _this.project?.driver.exists(defaultConfig.CONFIG_PATH))) {
        console.log("PythonCompilerService:readPythonConfig: config file doesn't exisit!");
        return null;
      }
      let configContent = yield _this.project?.driver.readFile(defaultConfig.CONFIG_PATH, false);
      let config = JSON.parse(configContent);
      return config;
    })();
  }
  runProject() {
    var _this2 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("PythonCompilerService:runProject");
      let config = yield _this2.readConfig();
      if (!config) {
        return null;
      }
      yield _this2.project?.driver.installPackages(config.EXTRA_PACKAGES);
      let result = yield _this2.project?.driver.executeFile(config.RUN);
      console.log(result);
      return result;
    })();
  }
  installPackages(packages) {
    var _this3 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.project?.driver.installPackages(packages);
    })();
  }
  executeFile(fullpath) {
    var _this4 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("PythonCompilerService:executeFile:", fullpath);
      _this4.project?.driver.executeFile(fullpath);
    })();
  }
}
CompilerService.ɵfac = function CompilerService_Factory(t) {
  return new (t || CompilerService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_project_manager_service_project_manager_service__WEBPACK_IMPORTED_MODULE_2__.ProjectManagerService));
};
CompilerService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: CompilerService,
  factory: CompilerService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3809:
/*!*********************************************************************!*\
  !*** ./src/app/services/compiler-service/compiler-service.types.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompilerMessageType": () => (/* binding */ CompilerMessageType),
/* harmony export */   "CompilerState": () => (/* binding */ CompilerState)
/* harmony export */ });
var CompilerState;
(function (CompilerState) {
    CompilerState["Unknown"] = "Unknown";
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

/***/ 5581:
/*!***********************************************************************************!*\
  !*** ./src/app/services/connection-manager-service/connection-manager.service.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectionManagerService": () => (/* binding */ ConnectionManagerService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _api_service_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api-service/api.service */ 7829);



class ConnectionManagerService {
    constructor(router, api) {
        this.router = router;
        this.api = api;
        this._url = "";
        this._isConnected = false;
    }
    get isConnected() {
        return this._isConnected;
    }
    get url() {
        return this._url;
    }
    set url(value) {
        if (this.api.setUrl(value)) {
            this._url = value;
        }
    }
    disconnect() {
        this._isConnected = false;
        this.router.navigate(['/home']);
    }
}
ConnectionManagerService.ɵfac = function ConnectionManagerService_Factory(t) { return new (t || ConnectionManagerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_service_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService)); };
ConnectionManagerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ConnectionManagerService, factory: ConnectionManagerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9056:
/*!***************************************************!*\
  !*** ./src/app/services/fs-service/fs.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FsService": () => (/* binding */ FsService),
/* harmony export */   "Tar": () => (/* binding */ Tar),
/* harmony export */   "xxhash": () => (/* binding */ xxhash)
/* harmony export */ });
/* harmony import */ var _home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 3918);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class FsService {
  constructor() {
    this.drivers = new Map();
    //TODO: Remove test driver FS from constructor
    //this.registerDriver('example', new IndexeddbFsDriver());   
  }
  registerDriver(name, driver) {
    //if (name in this.drivers){return false;}
    //alert('register: '+driver)
    this.drivers.set(name, driver);
    //alert('register: '+driver.constructor.name+' | all: '+this.getDriverNames())
    return true;
  }
  getDriver(name) {
    //alert(name + ' '  + this.getDriverNames() )
    if (this.drivers.has(name)) {
      return this.drivers.get(name);
    }
    alert(name + ' NOT found in: ' + this.getDriverNames() + " | getDriver: undefined !!!");
    return undefined;
  }
  getDriverNames() {
    return Array.from(this.drivers.keys());
  }
  treeToList(root) {
    let items = new Array();
    let queue = new Array();
    queue.push(root);
    console.log('treeToList:root', root);
    console.log('treeToList:queue:0:', queue.length);
    while (queue.length > 0) {
      let dir = queue.shift();
      console.log('treeToList:dir:', dir);
      if (!dir) {
        break;
      }
      items = items.concat(dir.files, dir.folders);
      queue = queue.concat(dir.folders);
      console.log('treeToList:queue:', queue.length);
    }
    return items;
  }
}
FsService.EmptyFolder = {
  name: "",
  path: "/",
  files: [],
  folders: []
};
FsService.EmptyFile = {
  name: "",
  path: "/",
  content: ""
};
FsService.ɵfac = function FsService_Factory(t) {
  return new (t || FsService)();
};
FsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: FsService,
  factory: FsService.ɵfac,
  providedIn: 'root'
});
class Tar {
  static unpack(tarball, cb) {
    var extract = this.tarstream.extract();
    var files = new Array();
    var folders = new Array();
    extract.on('entry', function (header, stream, next) {
      // header is the tar header
      // stream is the content body (might be an empty stream)
      // call next when you are done with this entry
      console.log('Tar:unpack:entry:header', header);
      console.log('Tar:unpack:entry:stream', stream);
      let fullpath = header.name;
      let filetype = header.type;
      if (filetype == 'file') {
        stream.on('data', data => {
          console.log('Tar:unpack:entry:data', data);
          let filename = fullpath.split("/").slice(0, -1)[0];
          let file = {
            path: fullpath,
            name: filename,
            content: data
          };
          console.log('Tar:unpack:entry:file', file, stream.read);
          files.push(file);
        });
      } else if (filetype == 'directory') {
        let dirname = fullpath;
        if (dirname.slice(-1) == '/') {
          dirname = dirname.slice(0, -1);
        }
        let forder = {
          path: fullpath,
          name: dirname,
          files: [],
          folders: []
        };
        console.log('Tar:unpack:entry:forder', forder);
        folders.push(forder);
      }
      // ready for next entry
      stream.on('end', () => {
        console.log('Tar:unpack:entry:end');
        next();
      });
      stream.resume(); // just auto drain the stream
    });
    extract.on('finish', function () {
      console.log('Tar:unpack:finish');
      console.log('Tar:unpack:files', files);
      console.log('Tar:unpack:folders', folders);
      files.sort((a, b) => a.path.length - b.path.length);
      folders.sort((a, b) => a.path.length - b.path.length);
      // all entries read
      if (cb) {
        cb(files, folders);
      }
    });
    console.log('Tar:unpack:tarball', tarball);
    console.log('Tar:unpack:extract', extract);
    let tarData = new Uint8Array(tarball);
    extract.write(tarData, errr => {
      console.log("Tar:unpack:extract:write:", errr);
    });
    extract.end();
  }
  static pack(items, cb) {
    let pack = this.tarstream.pack(); // pack is a stream
    console.log(pack);
    var length = 0;
    var chunks = new Array();
    pack.on('data', chunk => {
      console.log('data:chunk:prototype:', chunk.constructor.name);
      console.log('data:chunk:', chunk);
      length += chunk.byteLength;
      chunks.push(chunk);
    });
    pack.on('end', () => {
      // Create a new array with total length and merge all source arrays.
      console.log(chunks);
      let data = new Uint8Array(length);
      let offset = 0;
      chunks.forEach(item => {
        data.set(item, offset);
        offset += item.length;
      });
      console.log(data);
      if (cb) {
        cb(data);
      }
    });
    let processItems = function (items) {
      let item = items.shift();
      let file = item;
      console.log("Tar:pack:item", item);
      let content;
      let header;
      if (file.content) {
        console.log("Tar:pack:file", file);
        if (file.content instanceof ArrayBuffer) {
          content = new Uint8Array(file.content);
        } else {
          content = file.content;
        }
        header = {
          name: file.path
        };
      } else {
        header = {
          name: item.path,
          type: "directory"
        };
      }
      pack.entry(header, content, error => {
        console.log("Tar:pack:onFinishEntry", error);
        if (error) {
          throw error;
        }
        if (items.length == 0) {
          pack.finalize();
        } else {
          processItems(items);
        }
      });
    };
    console.log("Tar:pack:processItems", items);
    processItems(items);
  }
}
Tar.tarstream = __webpack_require__(/*! tar-web */ 9857);
Tar.b4a = __webpack_require__(/*! b4a */ 3506);
Tar.binEncoder = new TextEncoder(); // always utf-8
Tar.binDecoder = new TextDecoder("utf-8");
class xxhash {
  static load() {
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const response = yield fetch('/assets/xxhsum.wasm');
      console.log("xxhash:load:response", response);
      const buffer = yield response.arrayBuffer();
      console.log("xxhash:load:buffer", buffer);
      WebAssembly.instantiate(buffer).then(result => {
        console.log("xxhash:load:instance", result.instance);
        xxhash.sharedInstance = result.instance.exports;
        console.log("xxhash:load:DONE");
      }).catch(error => {
        console.log("xxhash:load:error", error);
      });
    })();
  }
  static xxh128(data) {
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return xxhash.sharedInstance.XXH128(data, data.length);
    })();
  }
}

/***/ }),

/***/ 118:
/*!*********************************************************!*\
  !*** ./src/app/services/fs-service/fs.service.types.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FsNodeEmptyFolder": () => (/* binding */ FsNodeEmptyFolder),
/* harmony export */   "FsNodeFileList": () => (/* binding */ FsNodeFileList),
/* harmony export */   "FsNodeFolderList": () => (/* binding */ FsNodeFolderList),
/* harmony export */   "FsNodeList": () => (/* binding */ FsNodeList)
/* harmony export */ });
class FsNodeList extends Array {
}
;
class FsNodeFileList extends Array {
}
;
class FsNodeFolderList extends Array {
}
;
const FsNodeEmptyFolder = { name: '', path: '', files: [], folders: [] };



/***/ }),

/***/ 7791:
/*!*******************************************************************!*\
  !*** ./src/app/services/github-api-service/github-api.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GithubApiService": () => (/* binding */ GithubApiService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 3918);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class GithubApiService {
  constructor() {
    this.baseUrl = 'http://localhost:4000/';
  }
  getAccessToken(codeParam) {
    var _this = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield fetch(_this.baseUrl + "getAccessToken?code=" + codeParam, {
        method: "GET"
      }).then(response => {
        return response.json();
      }).then(data => {
        console.log(data);
        if (data.access_token) {
          localStorage.setItem("accessToken", data.access_token);
        }
      });
    })();
  }
  getUserData() {
    var _this2 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("GET USER DATA");
      yield fetch(_this2.baseUrl + "getUserData", {
        method: "GET",
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("accessToken") // Bearer ACCESSTOKEN
        }
      }).then(response => {
        return response.json();
      }).then(data => {
        localStorage.setItem("username", data.login);
      });
    })();
  }
  getRepoList() {
    var _this3 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield fetch(_this3.baseUrl + "getRepoList?username=" + localStorage.getItem("username"), {
        method: "GET",
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("accessToken") // Bearer ACCESSTOKEN
        }
      }).then(response => response.json());
    })();
  }
  getRepository(repository) {
    var _this4 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("GET REPO");
      return yield fetch(_this4.baseUrl + "getRepository?username=" + localStorage.getItem("username") + "&repository=" + repository, {
        method: "GET",
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("accessToken") // Bearer ACCESSTOKEN
        }
      }).then(response => response.json());
    })();
  }
  createRepository(repository) {
    var _this5 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("CREATE REPO");
      yield fetch(_this5.baseUrl + "createRepository?repository=" + repository, {
        method: "GET",
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("accessToken") // Bearer ACCESSTOKEN
        }
      }).then(response => {
        return response.json();
      });
    })();
  }
  getReference(repository) {
    var _this6 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("GET REFERENCE");
      return yield fetch(_this6.baseUrl + "getReference?username=" + localStorage.getItem("username") + "&repository=" + repository, {
        method: "GET",
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("accessToken"),
          "Content-Type": "application/json"
        }
      }).then(response => response.json());
    })();
  }
  createTree(repository, tree) {
    var _this7 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("CREATE TREE");
      var bodyObj = JSON.stringify({
        "content": tree
      });
      return yield fetch(_this7.baseUrl + "createTree?username=" + localStorage.getItem("username") + "&repository=" + repository, {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("accessToken"),
          "Content-Type": "application/json"
        },
        body: bodyObj
      }).then(response => response.json());
    })();
  }
  createCommit(repository, data, sha) {
    var _this8 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("CREATE COMMIT");
      let parentCommitsha = sha;
      let bodyObj = JSON.stringify({
        "sha": parentCommitsha,
        "content": data
      });
      return yield fetch(_this8.baseUrl + "createCommit?username=" + localStorage.getItem("username") + "&repository=" + repository, {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("accessToken"),
          "Content-Type": "application/json"
        },
        body: bodyObj
      }).then(response => response.json());
    })();
  }
  updateReference(repository, data) {
    var _this9 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("UPDATE REFERENCE");
      let bodyObj = JSON.stringify({
        "content": data
      });
      return yield fetch(_this9.baseUrl + "updateReference?username=" + localStorage.getItem("username") + "&repository=" + repository, {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("accessToken"),
          "Content-Type": "application/json"
        },
        body: bodyObj
      }).then(response => response.json());
    })();
  }
  getRepositoryAsTar(repository) {
    var _this10 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("GET TAR URL");
      return yield fetch(_this10.baseUrl + "getRepositoryAsTar?username=" + localStorage.getItem("username") + "&repository=" + repository, {
        method: "GET",
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("accessToken") // Bearer ACCESSTOKEN
        }
      }).then(response => response.json());
    })();
  }
  getTar(url) {
    var _this11 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("GET TAR");
      return yield fetch(_this11.baseUrl + "getTar?url=" + url, {
        method: "GET",
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("accessToken") // Bearer ACCESSTOKEN
        }
      });
    })();
  }
}
GithubApiService.ɵfac = function GithubApiService_Factory(t) {
  return new (t || GithubApiService)();
};
GithubApiService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: GithubApiService,
  factory: GithubApiService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1383:
/*!****************************************************************************************!*\
  !*** ./src/app/services/notification-mananger-service/notification-manager.service.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationManagerService": () => (/* binding */ NotificationManagerService),
/* harmony export */   "NotificationMessage": () => (/* binding */ NotificationMessage),
/* harmony export */   "NotificationType": () => (/* binding */ NotificationType)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


var NotificationType;
(function (NotificationType) {
    NotificationType["Debug"] = "debug";
    NotificationType["Info"] = "info";
    NotificationType["Warning"] = "warning";
    NotificationType["Error"] = "error";
    NotificationType["System"] = "system";
    NotificationType["Default"] = "info";
})(NotificationType || (NotificationType = {}));
class NotificationMessage {
    constructor(title, message, type = NotificationType.Info, timestamp = Date.now()) {
        this.title = title;
        this.message = message;
        this.type = type;
        this.timestamp = timestamp;
    }
}
class NotificationManagerService {
    constructor() {
        this.history = new Array();
        this.onNotification = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    sendNotification(title, message, type = NotificationType.Info) {
        let notification = new NotificationMessage(title, message, type);
        this.onNotification.emit(notification);
        this.history.push(notification);
    }
}
NotificationManagerService.ɵfac = function NotificationManagerService_Factory(t) { return new (t || NotificationManagerService)(); };
NotificationManagerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotificationManagerService, factory: NotificationManagerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8125:
/*!*****************************************************************************!*\
  !*** ./src/app/services/problem-manager-service/problem-manager.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProblemManagerService": () => (/* binding */ ProblemManagerService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _problem_manager_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./problem-manager.types */ 9957);
/* harmony import */ var _api_service_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api-service/api.service */ 7829);




class ProblemManagerService {
    constructor(api) {
        this.api = api;
        this.problemList = new _problem_manager_types__WEBPACK_IMPORTED_MODULE_0__.ProblemList();
        this.problems = new _problem_manager_types__WEBPACK_IMPORTED_MODULE_0__.ProblemMap();
        this.services = new _problem_manager_types__WEBPACK_IMPORTED_MODULE_0__.ServiceMap();
        this.savedParams = new _problem_manager_types__WEBPACK_IMPORTED_MODULE_0__.ParamsMap();
        this.onProblemsChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.onError = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    updateProblems() {
        this.selectedProblem = undefined;
        this.selectedService = undefined;
        this.problemList = [];
        this.problems.clear();
        this.services.clear();
        this.onProblemsChanged.emit(true);
        let req = this.api.problemList((problemMap) => {
            console.log('apiProblemList:problemList:', problemMap);
            problemMap.forEach((problem, name) => {
                let problemDesc = new _problem_manager_types__WEBPACK_IMPORTED_MODULE_0__.ProblemDescriptor(name, problem);
                this.problemList.push(problemDesc);
                this.problems.set(problemDesc.key, problemDesc);
                problemDesc.services.forEach((serviceDesc) => {
                    this.services.set(serviceDesc.key, serviceDesc);
                });
            });
            this.onProblemsChanged.emit(false);
        });
        req.onError = (error) => {
            this.onProblemsChanged.emit(false);
            this.onError.emit(error);
        };
    }
    selectProblem(selectedProblem) {
        this.selectedProblem = selectedProblem;
        this.selectedService = undefined;
    }
    selectService(selectedService) {
        let name = selectedService.key;
        if (this.savedParams.has(name)) {
            //TODO: Deep copy param values from  to selectedProblem object, to account for changes in the problem structure.
            this.selectedService = this.savedParams.get(name);
        }
        else {
            this.savedParams.set(name, selectedService);
            this.selectedService = selectedService;
        }
    }
    validateArgs(service) {
        let issues = new Map();
        service.args.forEach((arg) => {
            let issue = this.validateArg(arg);
            if (issue) {
                issues.set(arg.key, issue);
            }
        });
        return issues;
    }
    validateArg(arg) {
        //set
        if (arg.regex === null) {
            console.log("validateArg:regex:null");
            return null;
        }
        //valid re
        let pattern;
        try {
            pattern = new RegExp(arg.regex);
        }
        catch (error) {
            console.log("validateArg:regex:invalid");
            return null;
        }
        //match
        let match = arg.value.match(pattern);
        console.log("validateArg:value:", arg.value);
        console.log("validateArg:pattern:", pattern);
        console.log("validateArg:match:", match);
        if (!match || match.length == 0) {
            console.log("validateArg:match:no");
            return arg.name + ": Validation error";
        }
        console.log("validateArg:match:yes");
        return null;
    }
}
ProblemManagerService.ɵfac = function ProblemManagerService_Factory(t) { return new (t || ProblemManagerService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_api_service_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService)); };
ProblemManagerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ProblemManagerService, factory: ProblemManagerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9957:
/*!***************************************************************************!*\
  !*** ./src/app/services/problem-manager-service/problem-manager.types.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArgDescriptor": () => (/* binding */ ArgDescriptor),
/* harmony export */   "ArgsMap": () => (/* binding */ ArgsMap),
/* harmony export */   "FileDescriptor": () => (/* binding */ FileDescriptor),
/* harmony export */   "FilesMap": () => (/* binding */ FilesMap),
/* harmony export */   "ParamsMap": () => (/* binding */ ParamsMap),
/* harmony export */   "ProblemDescriptor": () => (/* binding */ ProblemDescriptor),
/* harmony export */   "ProblemList": () => (/* binding */ ProblemList),
/* harmony export */   "ProblemMap": () => (/* binding */ ProblemMap),
/* harmony export */   "RawMap": () => (/* binding */ RawMap),
/* harmony export */   "ServiceDescriptor": () => (/* binding */ ServiceDescriptor),
/* harmony export */   "ServiceMap": () => (/* binding */ ServiceMap)
/* harmony export */ });
class RawMap extends Map {
}
;
class ProblemList extends Array {
}
;
class ProblemMap extends Map {
}
;
class ServiceMap extends Map {
}
;
class ParamsMap extends ServiceMap {
}
;
class ArgsMap extends Map {
}
;
class FilesMap extends Map {
}
;
class ProblemDescriptor {
    constructor(name, meta) {
        this.name = name;
        this.services = new ServiceMap();
        meta.services.forEach((service, serviceName) => {
            let serviceDesc = new ServiceDescriptor(serviceName, service, this);
            this.services.set(serviceDesc.getKey(), serviceDesc);
        });
        this.key = this.getKey();
    }
    getKey() {
        let key = this.name.trim();
        key = key.toLowerCase();
        key = key.replace("_+", "_");
        key = key.replace(" ", "-");
        key = key.replace("-+", "-");
        key = key.replace("[^a-z0-9_-]", "");
        return key;
    }
}
class ServiceDescriptor {
    constructor(name, service, parent) {
        this.name = name;
        this.parent = parent;
        this.args = new ArgsMap();
        this.files = new FilesMap();
        this.evaluator = service.evaluator;
        this.filesOrder = service.files ?? [];
        this.filesOrder.forEach(name => {
            let file = new FileDescriptor(name, this);
            this.files.set(file.name, file);
        });
        service.args.forEach((arg, argName) => {
            //console.log('ServiceDescriptor:constructor:arg', arg)
            let argDesc = new ArgDescriptor(argName, arg, this);
            this.args.set(argName, argDesc);
        });
        console.log('ServiceDescriptor:constructor:args', this.args);
        this.key = this.getKey();
    }
    getKey() {
        let key = this.name.trim();
        key = key.toLowerCase().trim();
        key = key.replace(" ", "-");
        key = key.replace("[^a-z0-9_-]", "");
        key = key.replace("-+", "-");
        key = key.replace("_+", "_");
        return this.parent.getKey() + "_" + key;
    }
    exportArgs() {
        let args = {};
        this.args.forEach(arg => {
            if (arg.value !== arg.default) {
                args[arg.name] = arg.value;
            }
        });
        return args;
    }
    exportFilesPaths() {
        let fileArgs = new Map();
        this.filesOrder.forEach((name) => {
            let file = this.files.get(name);
            if (!file || file.value == "") {
                return;
            }
            fileArgs.set(name, file.value);
        });
        return fileArgs;
    }
}
class ArgDescriptor {
    constructor(name, arg, parent) {
        this.name = name;
        this.parent = parent;
        this.default = arg.default;
        this.regex = arg.regex;
        this.value = arg.default;
        this.key = this.getKey();
    }
    getKey() {
        let key = this.name.trim();
        key = key.toLowerCase().trim();
        key = key.replace(" ", "-");
        key = key.replace("[^a-z0-9_-]", "");
        key = key.replace("-+", "-");
        key = key.replace("_+", "_");
        return this.parent.getKey() + "_" + key;
    }
}
class FileDescriptor {
    constructor(name, parent) {
        this.name = name;
        this.parent = parent;
        this.value = "";
        this.key = this.getKey();
    }
    getKey() {
        let key = this.name.trim();
        key = key.toLowerCase().trim();
        key = key.replace(" ", "-");
        key = key.replace("[^a-z0-9_-]", "");
        key = key.replace("-+", "-");
        key = key.replace("_+", "_");
        return this.parent.getKey() + "_" + key;
    }
}


/***/ }),

/***/ 9102:
/*!*****************************************************************************!*\
  !*** ./src/app/services/project-manager-service/project-manager.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectManagerService": () => (/* binding */ ProjectManagerService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _project_manager_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-manager.types */ 4711);



class ProjectManagerService {
    constructor() {
        this.projects = new Array();
        this.currentProject = null;
        this.onProjectChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.onProjectListChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    clearCurrentProject() {
        this.currentProject = null;
        this.onProjectChanged.emit();
    }
    setCurrentProject(project) {
        console.log("ProjectManagerService:setCurrentProject");
        this.addProject(project);
        this.currentProject = project;
        console.log("ProjectManagerService:setCurrentProject:willEmit", project);
        this.onProjectChanged.emit(project);
        console.log("ProjectManagerService:setCurrentProject:sent");
    }
    getCurrentProject() {
        return this.currentProject;
    }
    listProject() {
        return this.projects.slice();
    }
    addProject(project) {
        if (this.projects.indexOf(project) == -1) {
            this.projects.push(project);
            this.onProjectListChanged.emit();
        }
    }
    openProject(project) {
        //TODO: 
        return project;
    }
    closeProject(project) {
        //TODO: 
        this.onProjectListChanged.emit();
        return project;
    }
}
ProjectManagerService.ɵfac = function ProjectManagerService_Factory(t) { return new (t || ProjectManagerService)(); };
ProjectManagerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProjectManagerService, factory: ProjectManagerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4711:
/*!***************************************************************************!*\
  !*** ./src/app/services/project-manager-service/project-manager.types.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectConfig": () => (/* binding */ ProjectConfig),
/* harmony export */   "ProjectEnvironment": () => (/* binding */ ProjectEnvironment),
/* harmony export */   "ProjectLanguage": () => (/* binding */ ProjectLanguage),
/* harmony export */   "ProjectList": () => (/* binding */ ProjectList)
/* harmony export */ });
/* harmony import */ var _home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 3918);

var ProjectLanguage;
(function (ProjectLanguage) {
  ProjectLanguage["PY"] = "PY";
  ProjectLanguage["C"] = "C";
  ProjectLanguage["CPP"] = "CPP";
})(ProjectLanguage || (ProjectLanguage = {}));
class ProjectList extends Array {}
;
;
class ProjectEnvironment {
  constructor(laguange, driver) {
    this.laguange = laguange;
    this.driver = driver;
    this.config = null;
    console.log("ProjectEnvironment:constructor");
  }
}
class ProjectConfig {
  constructor() {
    this.RUN = "/main.py";
    this.DEBUG = false; //TODO
    this.PROJECT_NAME = "My solution"; //TODO
    this.PREFERED_LANG = "it";
    this.TAL_SERVERS = ['wss://ta.di.univr.it/algo', "wss://ta.di.univr.it/sfide", "ws://localhost:8008/"];
    this.TAL_SERVER = "wss://ta.di.univr.it/algo"; //TODO
    this.TAL_PROBLEM = ""; //TODO
    this.TAL_SERVICE = ""; //TODO
    this.TAL_TOKEN = ""; //TODO
    this.DIR_PROJECT = '/.talight/';
    this.DIR_ATTACHMENTS = '/data/';
    this.DIR_RESULTS = '/results/'; //TODO
    this.DIR_ARGSFILE = '/files/'; //TODO
    this.DIR_EXAMPLES = '/examples/';
    this.CREATE_EXAMPLES = true;
    //TODO: hotkey manager service
    this.HOTKEY_RUN = "f8";
    this.HOTKEY_TEST = "f9";
    this.HOTKEY_SAVE = "ctrl+s";
    this.CONFIG_NAME = 'talight.json';
    this.CONFIG_PATH = this.DIR_PROJECT + this.CONFIG_NAME;
    this.EXTRA_PACKAGES = [];
  }
  static load(fs, path) {
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("ProjectConfig:load");
      if (!path) {
        path = ProjectConfig.defaultConfig.CONFIG_PATH;
      }
      let config;
      if (!(yield fs.exists(path))) {
        return null;
      }
      let configContent = yield fs.readFile(path, false);
      console.log("ProjectConfig:load:found:", configContent);
      try {
        config = JSON.parse(configContent);
      } catch {
        console.log("ProjectConfig:load:cofig:JSON:parse: failed");
        return null;
      }
      console.log("ProjectConfig:load:config:", config);
      return config;
    })();
  }
  save(fs) {
    var _this = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let content = JSON.stringify(_this, null, 4);
      let res = yield fs.writeFile(_this.CONFIG_PATH, content);
      return true;
    })();
  }
}
ProjectConfig.defaultConfig = new ProjectConfig();

/***/ }),

/***/ 6140:
/*!****************************************************************************!*\
  !*** ./src/app/services/python-compiler-service/python-compiler.driver.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PyodideDriver": () => (/* binding */ PyodideDriver)
/* harmony export */ });
/* harmony import */ var _compiler_service_compiler_service_driver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../compiler-service/compiler-service-driver */ 3997);

class PyodideDriver extends _compiler_service_compiler_service_driver__WEBPACK_IMPORTED_MODULE_0__.CompilerDriver {
    constructor(mountPoint, mountRoot) {
        let worker = new Worker(__webpack_require__.tu(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u("src_app_services_python-compiler-service_python-compiler_worker_ts"), __webpack_require__.b)), { type: undefined });
        super(mountPoint, mountRoot, worker);
        this.driverName = 'pyodide';
    }
}


/***/ }),

/***/ 382:
/*!******************************************************************************!*\
  !*** ./src/app/services/python-compiler-service/python-compiler.examples.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PyodideExamples": () => (/* binding */ PyodideExamples)
/* harmony export */ });
let PyodideExamples = new Map();
PyodideExamples.set('input.py', `# Esempio che mostra come utilizzare la funzione di input in ambiente asincrono
nome = await input("Ciao, come ti chiami?")
print(f'Ciao {nome}, posso farti una domanda ?')    

async def main():
  while(True):
    lati = await input("quanti lati ha un triangolo?")
    if lati=="3": break;
    print(f'No, mi dispiace non ha {lati} lati')    
  print('Congratulazioni!')

main()`);
PyodideExamples.set('freesum.py', `# Example: sum -> free sum
while True:
    line = await input()
    #print(f"# BOT: line={line}")
    if line[0] == '#':   # this is a commented line (sent by the service server)
        if '# WE HAVE FINISHED' == line:
            exit(0)   # exit upon termination of the service server
    else:
        n = int(line)
        print(f"{n} 0")`);
PyodideExamples.set('sum.py', `# Example: sfilde: somma, sovle
cnt = int(await input())
for i in range(cnt):
    line = await input()
    #print("line:", line)
    nums = line.split(" ")
    a = int(nums[0])
    b = int(nums[1])
    print(a+b)`);
let files = new Array();
PyodideExamples.forEach((content, filename) => {
  files.push([filename, content]);
});


/***/ }),

/***/ 5708:
/*!*****************************************************************************!*\
  !*** ./src/app/services/python-compiler-service/python-compiler.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PythonCompilerService": () => (/* binding */ PythonCompilerService)
/* harmony export */ });
/* harmony import */ var _python_compiler_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./python-compiler.types */ 6547);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _fs_service_fs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fs-service/fs.service */ 9056);



class PythonCompilerService {
    constructor(fs) {
        this.fs = fs;
    }
    createPythonProject() {
        console.log("PythonCompilerService:createPythonProject");
        let pyodideRoot = "/";
        let pyodideMount = "/TALight";
        let ppe = new _python_compiler_types__WEBPACK_IMPORTED_MODULE_0__.PyodideProjectEnvironment(pyodideRoot, pyodideMount);
        return ppe;
    }
}
PythonCompilerService.ɵfac = function PythonCompilerService_Factory(t) { return new (t || PythonCompilerService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_fs_service_fs_service__WEBPACK_IMPORTED_MODULE_1__.FsService)); };
PythonCompilerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: PythonCompilerService, factory: PythonCompilerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6547:
/*!***************************************************************************!*\
  !*** ./src/app/services/python-compiler-service/python-compiler.types.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PyodideProjectEnvironment": () => (/* binding */ PyodideProjectEnvironment)
/* harmony export */ });
/* harmony import */ var _home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 3918);
/* harmony import */ var _project_manager_service_project_manager_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../project-manager-service/project-manager.types */ 4711);
/* harmony import */ var _python_compiler_driver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./python-compiler.driver */ 6140);
/* harmony import */ var _python_compiler_examples__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./python-compiler.examples */ 382);




class PyodideProjectEnvironment extends _project_manager_service_project_manager_types__WEBPACK_IMPORTED_MODULE_1__.ProjectEnvironment {
  constructor(pyodideRoot, pyodideMount) {
    console.log("PyodideProjectEnvironment:constructor:");
    let driver = new _python_compiler_driver__WEBPACK_IMPORTED_MODULE_2__.PyodideDriver(pyodideRoot, pyodideMount);
    super(_project_manager_service_project_manager_types__WEBPACK_IMPORTED_MODULE_1__.ProjectLanguage.PY, driver);
    this.driver = driver;
  }
  loadProject() {
    var _this = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("PyodideProjectEnvironment:loadProject");
      let config = yield _project_manager_service_project_manager_types__WEBPACK_IMPORTED_MODULE_1__.ProjectConfig.load(_this.driver);
      if (!config) {
        console.log("PyodideProjectEnvironment:loadProject:not found");
        config = new _project_manager_service_project_manager_types__WEBPACK_IMPORTED_MODULE_1__.ProjectConfig();
        config.save(_this.driver);
      }
      _this.config = config;
      //Starter files
      let folders = [config.DIR_PROJECT, config.DIR_ATTACHMENTS];
      if (config.CREATE_EXAMPLES) {
        folders.push(config.DIR_EXAMPLES);
      }
      for (let i = 0; i < folders.length; i++) {
        console.log("PyodideProjectEnvironment:loadProject:createDirectory:", folders[i]);
        yield _this.driver?.createDirectory(folders[i]);
      }
      let files = [];
      let configContent = JSON.stringify(config, null, 4);
      files.unshift([config.CONFIG_PATH, configContent]);
      let mainContent = `print("Hello World!")`;
      files.push([config.RUN, mainContent]);
      if (config.CREATE_EXAMPLES) {
        _python_compiler_examples__WEBPACK_IMPORTED_MODULE_3__.PyodideExamples.forEach((content, filename) => {
          files.push([config.DIR_EXAMPLES + filename, content]);
        });
      }
      for (let i = 0; i < files.length; i++) {
        let path = files[i][0];
        let content = files[i][1];
        console.log("PyodideProjectEnvironment:loadProject:files:", path, content);
        if (yield _this.driver.exists(path)) {
          console.log("PyodideProjectEnvironment:loadProject:files:SKIP:", path);
          continue;
        }
        yield _this.driver?.writeFile(path, content);
      }
      return true;
    })();
  }
}

/***/ }),

/***/ 914:
/*!***********************************************************************!*\
  !*** ./src/app/services/terminal-api-service/terminal-api.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Meta": () => (/* binding */ Meta),
/* harmony export */   "TerminalApiService": () => (/* binding */ TerminalApiService)
/* harmony export */ });
/* harmony import */ var _api_service_api_packets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api-service/api.packets */ 6371);
/* harmony import */ var _api_service_api_commands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api-service/api.commands */ 9846);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);



class Meta extends _api_service_api_packets__WEBPACK_IMPORTED_MODULE_0__.Packets.Meta {
}
class TerminalApiService {
    constructor() {
        this._url = 'wss://ta.di.univr.it/algo';
    }
    get url() {
        return this._url;
    }
    setUrl(value) {
        let url;
        try {
            url = new URL(value);
            console.log(url);
        }
        catch (_) {
            return -1;
        }
        if (!(url.protocol == 'ws:' || url.protocol == 'wss:')) {
            return -2;
        }
        if (!(value.startsWith('ws://') || value.startsWith('wss://'))) {
            return -1;
        }
        console.log("setUrl:valid!");
        this.resetAllConnections();
        this._url = url.href;
        console.log("setUrl:href:", url.href);
        return 0;
    }
    resetAllConnections() {
        //TODO: is it necessary to kill all old connection upon URL change ?
    }
    problemList(onResult, onError) {
        console.log("problemList:");
        let cmdList = new _api_service_api_commands__WEBPACK_IMPORTED_MODULE_1__.Commands.ProblemList(this._url);
        cmdList.onRecieveProblemList = (message) => {
            console.log("problemList:onRecieveProblemList:", message);
            if (onResult) {
                onResult(message.meta);
            }
        };
        cmdList.onError = (error) => {
            console.log("problemList:onError:");
            if (onError) {
                onError(error);
            }
        };
        cmdList.run();
        return cmdList;
    }
    GetAttachment(problemName, onAttachment, onAttachmentInfo, onData, onError) {
        let cmdGet = new _api_service_api_commands__WEBPACK_IMPORTED_MODULE_1__.Commands.Attchment(this._url, problemName);
        cmdGet.onReciveAttachment = (message) => {
            if (message.status.Err) {
                if (cmdGet.onError) {
                    cmdGet.onError("Failed to receive attachment: " + message.status.Ok);
                }
                return;
            }
            if (onAttachment) {
                onAttachment();
            }
        };
        cmdGet.onReciveAttachmentInfo = (message) => {
            if (onAttachmentInfo) {
                onAttachmentInfo(message);
            }
        };
        cmdGet.onReciveUndecodedBinary = (message) => {
            if (onData) {
                onData(message);
            }
        };
        cmdGet.onError = (error) => {
            if (onError) {
                onError(error);
            }
        };
        cmdGet.run();
        return cmdGet;
    }
    Connect(problem_name, service, args, tty, token, files, onConnectBegin, onConnectStart, onConnectStop, onData, onBinaryHeader, onError) {
        let cmdConnect = new _api_service_api_commands__WEBPACK_IMPORTED_MODULE_1__.Commands.Connect(this._url, problem_name, service, args, tty, token, files);
        cmdConnect.onReciveConnectBegin = (message) => {
            if (message.status.Err) {
                if (cmdConnect.onError) {
                    cmdConnect.onError("Failed to begin connection: " + message.status.Err);
                }
                return;
            }
            if (onConnectBegin && message.status.Ok) {
                onConnectBegin(message.status.Ok);
            }
        };
        cmdConnect.onReciveConnectStart = (message) => {
            if (message.status.Err) {
                if (cmdConnect.onError) {
                    cmdConnect.onError("Failed to start connect: " + message.status.Err);
                }
                return;
            }
            if (onConnectStart) {
                onConnectStart();
            }
        };
        cmdConnect.onReciveConnectStop = (message) => {
            if (message.status.Err) {
                if (cmdConnect.onError) {
                    cmdConnect.onError("Failed to stop connection: " + message.status.Err);
                }
                return;
            }
            if (onConnectStop && message.status.Ok) {
                onConnectStop(message.status.Ok);
            }
        };
        cmdConnect.onReciveBinary = (message) => {
            if (onData) {
                onData(message);
            }
        };
        cmdConnect.onReciveBinaryHeader = (message) => {
            if (onBinaryHeader) {
                onBinaryHeader(message);
            }
        };
        cmdConnect.onError = (error) => {
            if (onError) {
                onError(error);
            }
        };
        cmdConnect.run();
        return cmdConnect;
    }
}
TerminalApiService.ɵfac = function TerminalApiService_Factory(t) { return new (t || TerminalApiService)(); };
TerminalApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TerminalApiService, factory: TerminalApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2655:
/*!*********************************************************!*\
  !*** ./src/app/services/theme-service/theme.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppTheme": () => (/* binding */ AppTheme),
/* harmony export */   "ThemeService": () => (/* binding */ ThemeService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



var AppTheme;
(function (AppTheme) {
    AppTheme["light"] = "light-theme.css";
    AppTheme["dark"] = "dark-theme.css";
})(AppTheme || (AppTheme = {}));
class ThemeService {
    constructor(document) {
        this.document = document;
        this.themeChanged = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        const storedTheme = localStorage.getItem('theme') || AppTheme.light;
        this.setTheme(storedTheme);
    }
    get currentTheme() {
        const storedTheme = localStorage.getItem('theme') || AppTheme.light;
        return storedTheme;
    }
    setTheme(theme) {
        if (theme === AppTheme.light || theme === AppTheme.dark) {
            let themeLink = this.document.getElementById('app-theme');
            if (themeLink) {
                localStorage.setItem('theme', theme);
                themeLink.href = theme;
                this.themeChanged.next(theme);
            }
        }
    }
    toggleTheme() {
        const storedTheme = localStorage.getItem('theme') || AppTheme.light;
        const newTheme = storedTheme === AppTheme.light ? AppTheme.dark : AppTheme.light;
        this.setTheme(newTheme);
    }
    themeName() {
        switch (this.currentTheme) {
            case AppTheme.dark:
                return "vs-dark";
            default:
                return "vs";
        }
    }
}
ThemeService.ɵfac = function ThemeService_Factory(t) { return new (t || ThemeService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT)); };
ThemeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ThemeService, factory: ThemeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8352:
/*!***************************************************************!*\
  !*** ./src/app/services/tutorial-service/tutorial.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TutorialService": () => (/* binding */ TutorialService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class TutorialService {
    constructor() {
        this.onTutorialClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.onTutorialChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.onIndexTutorialChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.tutorials = [
            {
                componentName: "Begin",
                text: `Benvenuto in TALight Desktop! Iniziamo con un tutorial con la spiegazione dei vari componenti.
            Nel caso volessi uscire subito, basta che schiacci il tasto 'Chiudi' in alto a destra su questa finestra.`,
            },
            {
                componentName: "TopbarWidgetComponent",
                text: `Nella topbar potrai trovare la disponibilitá del server,
              l'URL del server a cui ti sei connesso e potrai passare anche alla dark mode!`,
            },
            {
                componentName: "FileExplorerWidgetComponent",
                text: "É un file explorer",
            },
            {
                componentName: "ExecbarWidgetComponent",
                text: `Qui invece sono presenti i bottoni per avviare l'esecuzione,
              fermarla oppure per verificare la soluzione con il server`
            },
            {
                componentName: "FileEditorWidgetComponent",
                text: "Come dice il nome, questo é un semplice file editor",
            },
            {
                componentName: "ProblemWidgetComponent",
                text: "Seleziona il problema",
            },
            {
                componentName: "CodeEditorComponent",
                text: "In questa sezione avrai 3 strumenti importanti: output, Log API ed un terminale",
            },
            {
                componentName: "OutputWidgetComponent",
                text: "OutputWidgetComponent",
            },
            {
                componentName: "LogApiWidgetComponent",
                text: "LogApiWidgetComponent",
            },
            {
                componentName: "TerminalWidgetComponent",
                text: "TerminalWidgetComponent",
            },
            {
                componentName: "End",
                text: "Grazie per aver completato il tour! Buon coding!",
            },
        ];
    }
    nextTutorial(indexCurrentTutorial) {
        console.log("TutorialService:nextTutorial");
        if (this.tutorials.length > indexCurrentTutorial) {
            this.onTutorialChange.emit(this.tutorials[indexCurrentTutorial + 1]);
            this.onIndexTutorialChange.emit(indexCurrentTutorial + 1);
        }
        else {
            this.closeTutorial();
        }
    }
    previousTutorial(indexCurrentTutorial) {
        console.log("TutorialService:previousTutorial");
        if (indexCurrentTutorial >= 0) {
            this.onTutorialChange.emit(this.tutorials[indexCurrentTutorial - 1]);
            this.onIndexTutorialChange.emit(indexCurrentTutorial - 1);
        }
        //Altrimenti blocca il pulsante
        else {
            console.log("Impossibile andare indietro");
        }
    }
    closeTutorial() {
        console.log("TutorialService:closeTutorial");
        if (this.getCachedTutorial() !== "true") {
            localStorage.setItem('tutorialCached', 'true');
        }
        this.onTutorialClose.emit();
    }
    getCachedTutorial() {
        console.log("TutorialService:getCachedTutorial " + localStorage.getItem('tutorialCached'));
        return localStorage.getItem('tutorialCached');
    }
    getSizeTutorial() {
        console.log("TutorialService:getSizeTutorial");
        return this.tutorials.length;
    }
}
TutorialService.ɵfac = function TutorialService_Factory(t) { return new (t || TutorialService)(); };
TutorialService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TutorialService, factory: TutorialService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4854:
/*!**************************************************************!*\
  !*** ./src/app/views/connect-view/connect-view.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectViewComponent": () => (/* binding */ ConnectViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/button */ 6328);



class ConnectViewComponent {
    constructor() { }
    ngOnInit() {
    }
}
ConnectViewComponent.ɵfac = function ConnectViewComponent_Factory(t) { return new (t || ConnectViewComponent)(); };
ConnectViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConnectViewComponent, selectors: [["tal-connect-view"]], decls: 14, vars: 0, consts: [[1, "tal-center-page"], [1, "tal-center-form"], [1, "tal-form-input"], ["for", "serverurl"], ["name", "serverurl", "input", "", "type", "text", "pInputText", "", "placeholder", "https://..."], [1, "tal-error"], [1, "pi", "pi-times-circle"], ["pButton", ""]], template: function ConnectViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Connettiti ad un server");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1)(4, "div", 2)(5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Server Url");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Questo \u00E8 un errore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Connetti");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, dependencies: [primeng_inputtext__WEBPACK_IMPORTED_MODULE_1__.InputText, primeng_button__WEBPACK_IMPORTED_MODULE_2__.ButtonDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25uZWN0LXZpZXcuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 9425:
/*!**********************************************!*\
  !*** ./src/app/views/demo-view/demo-view.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoViewComponent": () => (/* binding */ DemoViewComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 3918);
/* harmony import */ var hash_wasm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hash-wasm */ 3021);
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! buffer */ 3195);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_api_service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api-service/api.service */ 7829);






class DemoViewComponent {
  constructor(zone, api) {
    this.zone = zone;
    this.api = api;
    this.output = "";
  }
  ngOnInit() {
    //this.hashTest()
  }
  //API Test
  onApiError(message) {
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      alert("Error: " + message);
    })();
  }
  refreshOutput() {
    this.zone.run(() => this.output += "");
  }
  apiProblemList() {
    var _this = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let onSuccess = problemList => {
        console.log(problemList);
        _this.refreshOutput();
      };
      let req = _this.api.problemList(onSuccess);
      req.onError = _this.onApiError;
    })();
  }
  apiGetAttachment() {
    var _this2 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let problem_name = "piastrelle";
      let onAttachment = () => {
        console.log("Attachment packet received");
      };
      let onAttachmentInfo = onAttachmentInfo => {
        console.log(onAttachmentInfo);
      };
      let onData = data => {
        console.log(data);
        _this2.refreshOutput();
      };
      let req = _this2.api.GetAttachment(problem_name, onAttachment, onAttachmentInfo, onData);
      req.onError = _this2.onApiError;
    })();
  }
  apiConnect() {
    var _this3 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let problem_name = "sum_testAPI";
      let service = "free_sum";
      let onConnectionBegin = onConnectionBegin => {
        console.log("Connection Begin -> " + onConnectionBegin);
      };
      let onConnectionStart = () => {
        console.log("Connection Start");
      };
      let onConnectionClose = onConnectionClose => {
        console.log(onConnectionClose);
      };
      let onData = data => {
        _this3.output += '' + data;
        console.log("Binary data: " + data);
        _this3.refreshOutput();
      };
      let req = _this3.api.Connect(problem_name, service, undefined, undefined, undefined, undefined, onConnectionBegin, onConnectionStart, onConnectionClose, onData);
      req.onError = _this3.onApiError;
      _this3.cmdConnect = req;
      _this3.sendBinary();
    })();
  }
  //OLD
  apiConnectOld() {
    var _this4 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let problem_name = "sum_testAPI";
      let service = "free_sum";
      let onConnectionBegin = onConnectionBegin => {
        console.log("Connection Begin -> " + onConnectionBegin);
      };
      let onConnectionStart = () => {
        console.log("Connection Start");
      };
      let onConnectionClose = onConnectionClose => {
        console.log(onConnectionClose);
      };
      let onData = data => {
        _this4.output += '' + data;
        console.log("Binary data: " + data);
        _this4.refreshOutput();
      };
      let req = _this4.api.Connect(problem_name, service, undefined, undefined, undefined, undefined, onConnectionBegin, onConnectionStart, onConnectionClose, onData);
      req.onError = _this4.onApiError;
      _this4.cmdConnect = req;
      _this4.sendBinary();
    })();
  }
  sendBinary() {
    var _this5 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      setTimeout(() => {
        _this5.cmdConnect?.sendBinary("100 0\n");
      }, 1500);
      //setTimeout(() => {this.cmdConnect?.sendConnectStop();}, 2500);
      /*
      setTimeout(async () => {this.cmdConnect?.sendBinary("100 0");}, 2500);
      setTimeout(async () => {this.cmdConnect?.sendBinary("100 0");}, 3500);
      setTimeout(async () => {this.cmdConnect?.sendBinary("100 0");}, 4500);
      setTimeout(async () => {this.cmdConnect?.sendBinary("100 0");}, 5500);
      setTimeout(async () => {this.cmdConnect?.sendBinary("100 0");}, 6500);
      setTimeout(async () => {this.cmdConnect?.sendBinary("100 0");}, 7500);
      setTimeout(async () => {this.cmdConnect?.sendBinary("100 0");}, 8500);
      setTimeout(async () => {this.cmdConnect?.sendBinary("100 0");}, 9500);
      setTimeout(async () => {this.cmdConnect?.sendBinary("100 0");}, 10500);
      */
      setTimeout(() => {
        console.log("this.cmdConnect!.tal.isOpen()");
        console.log(_this5.cmdConnect.tal.isOpen());
      }, 2500);
    })();
  }
  hashTest() {
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let hex = yield (0,hash_wasm__WEBPACK_IMPORTED_MODULE_3__.xxhash128)(buffer__WEBPACK_IMPORTED_MODULE_1__.Buffer.from("ciao"));
      let dec = parseInt(hex, 16);
      alert(hex);
      alert(dec);
    })();
  }
}
DemoViewComponent.ɵfac = function DemoViewComponent_Factory(t) {
  return new (t || DemoViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_api_service_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService));
};
DemoViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: DemoViewComponent,
  selectors: [["app-demo-view"]],
  decls: 18,
  vars: 1,
  consts: [[2, "display", "flex", "flex-direction", "column"], [3, "click"]],
  template: function DemoViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " API Demo ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div")(5, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DemoViewComponent_Template_button_click_5_listener() {
        return ctx.apiProblemList();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Problem List");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DemoViewComponent_Template_button_click_7_listener() {
        return ctx.apiGetAttachment();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Get Attachment");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DemoViewComponent_Template_button_click_9_listener() {
        return ctx.apiConnectOld();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Connect Old");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DemoViewComponent_Template_button_click_11_listener() {
        return ctx.apiConnect();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Connect");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DemoViewComponent_Template_button_click_13_listener() {
        return ctx.hashTest();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Hash");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div")(16, "pre");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.output);
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZW1vLXZpZXcuY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 8126:
/*!********************************************************!*\
  !*** ./src/app/views/home-view/home-view.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeViewComponent": () => (/* binding */ HomeViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _widgets_code_editor_code_editor_code_editor_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../widgets/code-editor/code-editor/code-editor.component */ 519);


const _c0 = ["codeEditor"];
class HomeViewComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
HomeViewComponent.ɵfac = function HomeViewComponent_Factory(t) { return new (t || HomeViewComponent)(); };
HomeViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeViewComponent, selectors: [["tal-home-view"]], viewQuery: function HomeViewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.codeEditor = _t.first);
    } }, decls: 4, vars: 0, consts: [[1, "tal-home-container"], [1, "tal-home-editor"], ["codeEditor", ""]], template: function HomeViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "tal-code-editor", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } }, dependencies: [_widgets_code_editor_code_editor_code_editor_component__WEBPACK_IMPORTED_MODULE_0__.CodeEditorComponent], styles: ["div.tal-home-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\ndiv.tal-home-container[_ngcontent-%COMP%]   div.tal-home-editor[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFlBQUE7QUFESjtBQUdJO0VBQ0ksYUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQURSIiwiZmlsZSI6ImhvbWUtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5kaXYudGFsLWhvbWUtY29udGFpbmVye1xuICAgIGhlaWdodDoxMDAlO1xuXG4gICAgZGl2LnRhbC1ob21lLWVkaXRvcntcbiAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgICAgaGVpZ2h0OjEwMCU7XG4gICAgXG4gICAgICBcbiAgICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 5770:
/*!****************************************************************************!*\
  !*** ./src/app/views/select-problem-view/select-problem-view.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectProblemViewComponent": () => (/* binding */ SelectProblemViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/radiobutton */ 9902);





function SelectProblemViewComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectProblemViewComponent_ng_container_5_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const problem_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.selectedProblem = problem_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p-radioButton", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SelectProblemViewComponent_ng_container_5_Template_p_radioButton_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.selectedProblem = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7)(4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const problem_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", problem_r1.id)("ngModel", ctx_r0.selectedProblem);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](problem_r1.name);
} }
class SelectProblemViewComponent {
    constructor() {
        this.problems = [
            {
                id: 1, name: 'Problem 1',
            },
            {
                id: 2, name: 'Problem 2',
            },
            {
                id: 3, name: 'Problem 3',
            },
            {
                id: 4, name: 'Problem 4',
            },
        ];
        this.selectedProblem = null;
    }
    ngOnInit() {
    }
}
SelectProblemViewComponent.ɵfac = function SelectProblemViewComponent_Factory(t) { return new (t || SelectProblemViewComponent)(); };
SelectProblemViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectProblemViewComponent, selectors: [["tal-select-problem-view"]], decls: 8, vars: 1, consts: [[1, "tal-center-page"], [1, "tal-center-form"], [1, "tal-problems-list"], [4, "ngFor", "ngForOf"], ["pButton", ""], [1, "tal-problem", 3, "click"], ["name", "groupname", 3, "value", "ngModel", "ngModelChange"], [1, "tal-problem-details"]], template: function SelectProblemViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Seleziona un problema da risolvere");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1)(4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SelectProblemViewComponent_ng_container_5_Template, 6, 3, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Inizia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.problems);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, primeng_button__WEBPACK_IMPORTED_MODULE_3__.ButtonDirective, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_4__.RadioButton], styles: ["div.tal-problems-list[_ngcontent-%COMP%] {\n  max-height: 70vh;\n  overflow-y: auto;\n}\ndiv.tal-problems-list[_ngcontent-%COMP%]   div.tal-problem[_ngcontent-%COMP%] {\n  width: 500px;\n  max-width: 90vw;\n  padding: 1rem;\n  display: flex;\n  align-items: center;\n  border-bottom: solid 1px var(--surface-border);\n  cursor: pointer;\n}\ndiv.tal-problems-list[_ngcontent-%COMP%]   div.tal-problem[_ngcontent-%COMP%]:hover {\n  background-color: var(--surface-hover);\n}\ndiv.tal-problems-list[_ngcontent-%COMP%]   div.tal-problem[_ngcontent-%COMP%]:active {\n  background-color: var(--surface-active);\n}\ndiv.tal-problems-list[_ngcontent-%COMP%]   div.tal-problem[_ngcontent-%COMP%]   div.tal-problem-details[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC1wcm9ibGVtLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFBSTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhDQUFBO0VBQ0EsZUFBQTtBQUVSO0FBQVE7RUFDSSxzQ0FBQTtBQUVaO0FBQ1E7RUFDSSx1Q0FBQTtBQUNaO0FBR1E7RUFDSSxtQkFBQTtBQURaIiwiZmlsZSI6InNlbGVjdC1wcm9ibGVtLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYudGFsLXByb2JsZW1zLWxpc3Qge1xuICBtYXgtaGVpZ2h0OiA3MHZoO1xuICBvdmVyZmxvdy15OmF1dG87XG4gICAgZGl2LnRhbC1wcm9ibGVte1xuICAgICAgICB3aWR0aDo1MDBweDtcbiAgICAgICAgbWF4LXdpZHRoOjkwdnc7XG4gICAgICAgIHBhZGRpbmc6MXJlbTtcbiAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBib3JkZXItYm90dG9tOnNvbGlkIDFweCB2YXIoLS1zdXJmYWNlLWJvcmRlcik7XG4gICAgICAgIGN1cnNvcjpwb2ludGVyO1xuICAgICAgICBcbiAgICAgICAgJjpob3ZlcntcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tc3VyZmFjZS1ob3Zlcik7XG4gICAgICAgIH1cblxuICAgICAgICAmOmFjdGl2ZXtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tc3VyZmFjZS1hY3RpdmUpO1xuICAgICAgICB9XG5cblxuICAgICAgICBkaXYudGFsLXByb2JsZW0tZGV0YWlsc3tcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjAuNXJlbTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"] });


/***/ }),

/***/ 5130:
/*!***********************************************************!*\
  !*** ./src/app/widgets/code-editor/code-editor.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodeEditorModule": () => (/* binding */ CodeEditorModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _file_explorer_widget_file_explorer_widget_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file-explorer-widget/file-explorer-widget.component */ 3842);
/* harmony import */ var _code_editor_code_editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./code-editor/code-editor.component */ 519);
/* harmony import */ var ngx_monaco_editor_v2__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-monaco-editor-v2 */ 9247);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/overlaypanel */ 6664);
/* harmony import */ var primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/tieredmenu */ 1487);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/dialog */ 1837);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/confirmdialog */ 97);
/* harmony import */ var primeng_splitter__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/splitter */ 330);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/tooltip */ 4329);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/toast */ 9129);
/* harmony import */ var _file_editor_widget_file_editor_widget_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./file-editor-widget/file-editor-widget.component */ 7717);
/* harmony import */ var _execbar_widget_execbar_widget_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./execbar-widget/execbar-widget.component */ 9672);
/* harmony import */ var _problem_widget_problem_widget_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./problem-widget/problem-widget.component */ 520);
/* harmony import */ var _terminal_widget_terminal_widget_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./terminal-widget/terminal-widget.component */ 1498);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/dropdown */ 8992);
/* harmony import */ var _monaco_editor_widget_monaco_editor_widget_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./monaco-editor-widget/monaco-editor-widget.component */ 9128);
/* harmony import */ var _output_widget_output_widget_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./output-widget/output-widget.component */ 7366);
/* harmony import */ var _log_api_widget_log_api_widget_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./log-api-widget/log-api-widget.component */ 4150);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/tabview */ 9504);
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/scrollpanel */ 4250);
/* harmony import */ var primeng_terminal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/terminal */ 8593);
/* harmony import */ var _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @abacritt/angularx-social-login */ 3218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);




























class CodeEditorModule {
}
CodeEditorModule.ɵfac = function CodeEditorModule_Factory(t) { return new (t || CodeEditorModule)(); };
CodeEditorModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: CodeEditorModule });
CodeEditorModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [primeng_api__WEBPACK_IMPORTED_MODULE_10__.ConfirmationService,
        primeng_terminal__WEBPACK_IMPORTED_MODULE_11__.TerminalService,
        primeng_api__WEBPACK_IMPORTED_MODULE_10__.MessageService,
        {
            provide: 'SocialAuthServiceConfig',
            useValue: {
                autoLogin: false,
                providers: [
                    {
                        id: _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_12__.GoogleLoginProvider.PROVIDER_ID,
                        provider: new _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_12__.GoogleLoginProvider('317384189263-2l11jni1gvvfc71paoo2m6mkincms264.apps.googleusercontent.com', {
                            scopes: 'https://www.googleapis.com/auth/drive',
                            prompt: '',
                            oneTapEnabled: false,
                        }),
                    },
                    {
                        id: _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_12__.MicrosoftLoginProvider.PROVIDER_ID,
                        provider: new _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_12__.MicrosoftLoginProvider('a1d6b14c-7b0c-45fe-afaf-63173ac453f9', {
                            scopes: ["offline_access files.readwrite.all files.readwrite,"],
                            prompt: '', // '' | 'none' | 'consent' |  'select_account'
                            //oneTapEnabled: false,
                        }),
                    },
                ],
                onError: (err) => {
                    console.error(err);
                }
            },
        }
    ], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
        ngx_monaco_editor_v2__WEBPACK_IMPORTED_MODULE_15__.MonacoEditorModule,
        primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_16__.ConfirmDialogModule,
        primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_17__.OverlayPanelModule,
        primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_18__.TieredMenuModule,
        primeng_dialog__WEBPACK_IMPORTED_MODULE_19__.DialogModule,
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_20__.InputTextModule,
        primeng_splitter__WEBPACK_IMPORTED_MODULE_21__.SplitterModule,
        primeng_api__WEBPACK_IMPORTED_MODULE_10__.SharedModule,
        primeng_tooltip__WEBPACK_IMPORTED_MODULE_22__.TooltipModule,
        primeng_toast__WEBPACK_IMPORTED_MODULE_23__.ToastModule,
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_24__.DropdownModule,
        primeng_tabview__WEBPACK_IMPORTED_MODULE_25__.TabViewModule,
        primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_26__.ScrollPanelModule,
        _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_12__.SocialLoginModule,
        primeng_terminal__WEBPACK_IMPORTED_MODULE_11__.TerminalModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](CodeEditorModule, { declarations: [_file_explorer_widget_file_explorer_widget_component__WEBPACK_IMPORTED_MODULE_0__.FileExplorerWidgetComponent,
        _file_editor_widget_file_editor_widget_component__WEBPACK_IMPORTED_MODULE_2__.FileEditorWidgetComponent,
        _code_editor_code_editor_component__WEBPACK_IMPORTED_MODULE_1__.CodeEditorComponent,
        _execbar_widget_execbar_widget_component__WEBPACK_IMPORTED_MODULE_3__.ExecbarWidgetComponent,
        _problem_widget_problem_widget_component__WEBPACK_IMPORTED_MODULE_4__.ProblemWidgetComponent,
        _monaco_editor_widget_monaco_editor_widget_component__WEBPACK_IMPORTED_MODULE_6__.MonacoEditorWidgetComponent,
        _output_widget_output_widget_component__WEBPACK_IMPORTED_MODULE_7__.OutputWidgetComponent,
        _terminal_widget_terminal_widget_component__WEBPACK_IMPORTED_MODULE_5__.TerminalWidgetComponent,
        _log_api_widget_log_api_widget_component__WEBPACK_IMPORTED_MODULE_8__.LogApiWidgetComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
        ngx_monaco_editor_v2__WEBPACK_IMPORTED_MODULE_15__.MonacoEditorModule,
        primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_16__.ConfirmDialogModule,
        primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_17__.OverlayPanelModule,
        primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_18__.TieredMenuModule,
        primeng_dialog__WEBPACK_IMPORTED_MODULE_19__.DialogModule,
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_20__.InputTextModule,
        primeng_splitter__WEBPACK_IMPORTED_MODULE_21__.SplitterModule,
        primeng_api__WEBPACK_IMPORTED_MODULE_10__.SharedModule,
        primeng_tooltip__WEBPACK_IMPORTED_MODULE_22__.TooltipModule,
        primeng_toast__WEBPACK_IMPORTED_MODULE_23__.ToastModule,
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_24__.DropdownModule,
        primeng_tabview__WEBPACK_IMPORTED_MODULE_25__.TabViewModule,
        primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_26__.ScrollPanelModule,
        _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_12__.SocialLoginModule,
        primeng_terminal__WEBPACK_IMPORTED_MODULE_11__.TerminalModule], exports: [_file_explorer_widget_file_explorer_widget_component__WEBPACK_IMPORTED_MODULE_0__.FileExplorerWidgetComponent,
        _code_editor_code_editor_component__WEBPACK_IMPORTED_MODULE_1__.CodeEditorComponent] }); })();


/***/ }),

/***/ 519:
/*!**************************************************************************!*\
  !*** ./src/app/widgets/code-editor/code-editor/code-editor.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CodeEditorComponent": () => (/* binding */ CodeEditorComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 3918);
/* harmony import */ var src_app_services_compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/compiler-service/compiler-service.types */ 3809);
/* harmony import */ var src_app_services_fs_service_fs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/fs-service/fs.service */ 9056);
/* harmony import */ var _output_widget_output_widget_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../output-widget/output-widget.component */ 7366);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_compiler_service_compiler_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/compiler-service/compiler-service.service */ 6639);
/* harmony import */ var src_app_services_python_compiler_service_python_compiler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/python-compiler-service/python-compiler.service */ 5708);
/* harmony import */ var src_app_services_api_service_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/api-service/api.service */ 7829);
/* harmony import */ var src_app_services_project_manager_service_project_manager_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/project-manager-service/project-manager.service */ 9102);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var src_app_services_tutorial_service_tutorial_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/tutorial-service/tutorial.service */ 8352);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_splitter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/splitter */ 330);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/toast */ 9129);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/tabview */ 9504);
/* harmony import */ var _file_explorer_widget_file_explorer_widget_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../file-explorer-widget/file-explorer-widget.component */ 3842);
/* harmony import */ var _file_editor_widget_file_editor_widget_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../file-editor-widget/file-editor-widget.component */ 7717);
/* harmony import */ var _execbar_widget_execbar_widget_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../execbar-widget/execbar-widget.component */ 9672);
/* harmony import */ var _problem_widget_problem_widget_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../problem-widget/problem-widget.component */ 520);
/* harmony import */ var _terminal_widget_terminal_widget_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../terminal-widget/terminal-widget.component */ 1498);
/* harmony import */ var _log_api_widget_log_api_widget_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../log-api-widget/log-api-widget.component */ 4150);
























const _c0 = ["fileExplorer"];
const _c1 = ["fileEditor"];
const _c2 = ["execBar"];
const _c3 = ["problemWidget"];
const _c4 = ["outputWidget"];
const _c5 = ["logApiWidget"];
const _c6 = ["terminalWidget"];
function CodeEditorComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 4)(1, "tal-file-explorer-widget", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("onUpdateRoot", function CodeEditorComponent_ng_template_2_Template_tal_file_explorer_widget_onUpdateRoot_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r4.onUpdateRoot($event));
    })("onSelectFile", function CodeEditorComponent_ng_template_2_Template_tal_file_explorer_widget_onSelectFile_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r6.selectFile($event));
    })("onFileDeleted", function CodeEditorComponent_ng_template_2_Template_tal_file_explorer_widget_onFileDeleted_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r5);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r7.onFileDeleted($event));
    })("onItemRenamed", function CodeEditorComponent_ng_template_2_Template_tal_file_explorer_widget_onItemRenamed_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r5);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r8.onItemRenamed($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function CodeEditorComponent_ng_template_3_ng_container_7_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const name_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](name_r12);
  }
}
function CodeEditorComponent_ng_template_3_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "p-tabPanel", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, CodeEditorComponent_ng_template_3_ng_container_7_ng_template_2_Template, 2, 1, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("closable", true);
  }
}
function CodeEditorComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "tal-execbar-widget", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("onStop", function CodeEditorComponent_ng_template_3_Template_tal_execbar_widget_onStop_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r15.stopAll());
    })("onRun", function CodeEditorComponent_ng_template_3_Template_tal_execbar_widget_onRun_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r16);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r17.runProjectLocal());
    })("onConnect", function CodeEditorComponent_ng_template_3_Template_tal_execbar_widget_onConnect_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r16);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r18.runConnectAPI());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "div", 8)(5, "div", 11)(6, "p-tabView", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("onClose", function CodeEditorComponent_ng_template_3_Template_p_tabView_onClose_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r16);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r19.removeItem($event));
    })("onChange", function CodeEditorComponent_ng_template_3_Template_p_tabView_onChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r16);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r20.changeFile($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](7, CodeEditorComponent_ng_template_3_ng_container_7_Template, 3, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "div", 7)(9, "div", 14)(10, "tal-file-editor-widget", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("onChange", function CodeEditorComponent_ng_template_3_Template_tal_file_editor_widget_onChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r16);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r21.editorDidChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("selectedFile", ctx_r1.selectedFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("scrollable", true)("activeIndex", ctx_r1.activeIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r1.isPresentName);
  }
}
function CodeEditorComponent_ng_template_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "tal-problem-widget", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("onAttachments", function CodeEditorComponent_ng_template_4_ng_template_1_Template_tal_problem_widget_onAttachments_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r25.onAttachments($event, "problemWidget"));
    })("onProblemChanged", function CodeEditorComponent_ng_template_4_ng_template_1_Template_tal_problem_widget_onProblemChanged_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r26);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r27.onProblemChanged($event));
    })("onServiceChanged", function CodeEditorComponent_ng_template_4_ng_template_1_Template_tal_problem_widget_onServiceChanged_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r26);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r28.onServiceChanged($event));
    })("onProblemListChanged", function CodeEditorComponent_ng_template_4_ng_template_1_Template_tal_problem_widget_onProblemListChanged_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r26);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r29.onProblemListChanged());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function CodeEditorComponent_ng_template_4_ng_template_3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Output");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function CodeEditorComponent_ng_template_4_ng_template_3_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Log API");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function CodeEditorComponent_ng_template_4_ng_template_3_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Terminal");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function CodeEditorComponent_ng_template_4_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 23)(1, "p-tabView", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("onChange", function CodeEditorComponent_ng_template_4_ng_template_3_Template_p_tabView_onChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r37);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r36.changeWidget($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "p-tabPanel", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, CodeEditorComponent_ng_template_4_ng_template_3_ng_template_3_Template, 3, 0, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "tal-output-widget", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("onStdin", function CodeEditorComponent_ng_template_4_ng_template_3_Template_tal_output_widget_onStdin_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r37);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r38.sendStdin($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "p-tabPanel", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](7, CodeEditorComponent_ng_template_4_ng_template_3_ng_template_7_Template, 3, 0, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](8, "tal-log-api-widget", null, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "p-tabPanel", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](11, CodeEditorComponent_ng_template_4_ng_template_3_ng_template_11_Template, 3, 0, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "tal-terminal-widget", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("onAttachments", function CodeEditorComponent_ng_template_4_ng_template_3_Template_tal_terminal_widget_onAttachments_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r37);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r39.onAttachments($event, "terminalWidget"));
    })("onProblemChanged", function CodeEditorComponent_ng_template_4_ng_template_3_Template_tal_terminal_widget_onProblemChanged_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r37);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r40.onProblemChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("blur", ctx_r23.isBlurred);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("activeIndex", ctx_r23.activeWidget);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", ctx_r23.OutputDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", ctx_r23.LogApiDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", ctx_r23.TerminalDisabled);
  }
}
const _c7 = function () {
  return [15, 50];
};
const _c8 = function () {
  return [12, 20];
};
function CodeEditorComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p-splitter", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, CodeEditorComponent_ng_template_4_ng_template_1_Template, 2, 0, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, " ---------------------------------------------------------------------- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, CodeEditorComponent_ng_template_4_ng_template_3_Template, 14, 6, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("panelSizes", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](2, _c7))("minSizes", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](3, _c8));
  }
}
const _c9 = function () {
  return {
    "height": "100%"
  };
};
const _c10 = function () {
  return [15, 50, 35];
};
const _c11 = function () {
  return [12, 20, 20];
};
class CodeEditorComponent {
  constructor(fs, compiler, python, api, prj, cdRef, messageService, tutorialService, elementRef) {
    this.fs = fs;
    this.compiler = compiler;
    this.python = python;
    this.api = api;
    this.prj = prj;
    this.cdRef = cdRef;
    this.messageService = messageService;
    this.tutorialService = tutorialService;
    this.elementRef = elementRef;
    this.binEncoder = new TextEncoder(); // always utf-8
    this.binDecoder = new TextDecoder("utf-8");
    this.project = null;
    this.pyodideState = src_app_services_compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerState.Unknown;
    this.pyodideStateContent = "";
    this.apiRun = false;
    this.fsroot = src_app_services_fs_service_fs_service__WEBPACK_IMPORTED_MODULE_2__.FsService.EmptyFolder;
    this.fslist = [];
    this.fslistfile = [];
    this.isPresent = [];
    this.isPresentName = [];
    this.files = [];
    this.activeIndex = 0;
    this.activeWidget = 0;
    this.output_files = undefined;
    this.current_output_file = undefined;
    this.LogApiDisabled = true;
    this.OutputDisabled = true;
    this.TerminalDisabled = true;
    this.isBlurred = false;
    this.tutorialService.onTutorialChange.subscribe(tutorial => {
      this.isTutorialShown(tutorial);
    });
    this.tutorialService.onTutorialClose.subscribe(() => {
      this.isTutorialShown();
    });
    console.log("CodeEditorComponent:constructor", this.prj);
    //TODO: add switch python/cpp
  }
  ngOnInit() {
    this.isBlurred = true;
  }
  isTutorialShown(tutorial) {
    console.log("CodeEditorComponent:isTutorialShown");
    if (typeof tutorial === 'undefined') {
      this.LogApiDisabled = false;
      this.OutputDisabled = false;
      this.TerminalDisabled = false;
      this.isBlurred = false;
    } else if (tutorial.componentName === "CodeEditorComponent" || tutorial.componentName === "OutputWidgetComponent" || tutorial.componentName === "LogApiWidgetComponent" || tutorial.componentName === "TerminalWidgetComponent") {
      this.isBlurred = false;
      if (tutorial.componentName === "OutputWidgetComponent") {
        this.activeWidget = 0;
        this.LogApiDisabled = true;
        this.OutputDisabled = false;
        this.TerminalDisabled = true;
      } else if (tutorial.componentName === "LogApiWidgetComponent") {
        this.activeWidget = 1;
        this.LogApiDisabled = false;
        this.OutputDisabled = true;
        this.TerminalDisabled = true;
      } else if (tutorial.componentName === "TerminalWidgetComponent") {
        this.activeWidget = 2;
        this.LogApiDisabled = true;
        this.OutputDisabled = true;
        this.TerminalDisabled = false;
      }
    } else {
      this.isBlurred = true;
    }
  }
  ngAfterViewInit() {
    this.outputWidget.enableStdin(false);
    this.setPythonProject();
    const componentElement = this.elementRef.nativeElement;
  }
  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }
  didStateChangeReady(content) {
    if (this.project) {
      console.log("didStateChange:Ready:loadProject");
      this.project.loadProject();
    }
  }
  setPythonProject(forceCreate = false) {
    console.log("CodeEditorComponent:constructor:createPythonProject");
    this.project = this.prj.getCurrentProject();
    if (forceCreate || !this.project) {
      console.log("CodeEditorComponent:constructor:createPythonProject:do!");
      this.project = this.python.createPythonProject();
      this.prj.setCurrentProject(this.project);
    }
    this.project?.driver.subscribeNotify(true, msg => {
      this.didNotify(msg);
    });
    this.project?.driver.subscribeState(true, (state, content) => {
      this.didStateChange(state, content);
    });
    this.project?.driver.subscribeStdout(true, msg => {
      this.didStdout(msg);
    });
    this.project?.driver.subscribeStderr(true, msg => {
      this.didStderr(msg);
    });
    console.log("CodeEditorComponent:constructor:createPythonProject:", this.project);
  }
  onUpdateRoot(fsroot) {
    this.fsroot = fsroot;
    this.fslist = this.fs.treeToList(fsroot);
    this.fslistfile = this.fslist.filter(item => "content" in item);
    let filePathList = new Array();
    this.fslistfile.forEach(item => filePathList.push(item.path));
    this.problemWidget.filePathList = filePathList;
    this.terminalWidget.fslistfile = this.fslistfile;
  }
  didNotify(data) {
    console.log("didNotify:");
    this.outputWidget.print(data);
    //TODO: if API connect then:
    if (!this.cmdConnect) {
      return;
    }
    this.cmdConnect.sendBinary(data + "\n"); // The \n must be added to the python bot output
  }
  didStateChange(state, content) {
    console.log("CodeEditorComponent:didStateChange:");
    //this.outputWidget!.print(state,OutputType.SYSTEM);
    if (state == src_app_services_compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerState.Ready) {
      this.didStateChangeReady(content);
    }
    if (state == src_app_services_compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerState.Success || state == src_app_services_compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerState.Error || state == src_app_services_compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerState.Killed) {
      this.apiConnectReset();
    }
    this.pyodideState = state;
    this.pyodideStateContent = content;
    console.log("CodeEditorComponent:didStateChange:", state);
    if (!this.apiRun || state != src_app_services_compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerState.Stdin) {
      this.outputWidget.didStateChange(state, content);
    }
  }
  didStdout(data) {
    console.log("onStdout:");
    this.outputWidget.print(data);
    //TODO: if API connect then:
    if (!this.cmdConnect) {
      return;
    }
    this.cmdConnect.sendBinary(data + "\n"); // The \n must be added to the python bot output
  }
  didStderr(data) {
    console.log("onStderr:");
    //alert("STDERR: "+data)
    //this.nm.sendNotification("ERROR:",data,NotificationType.Error)
    this.outputWidget.print(data, _output_widget_output_widget_component__WEBPACK_IMPORTED_MODULE_3__.OutputType.STDERR);
  }
  sendStdin(msg, fromAPI = false) {
    console.log("sendStdin:");
    let msgs = msg.split("\n");
    if (msgs[msgs.length - 1] === "") {
      msgs.pop();
    }
    console.log("sendStdin:split: ", msgs);
    for (let i = 0; i < msgs.length; i++) {
      this.outputWidget.print(msgs[i], fromAPI ? _output_widget_output_widget_component__WEBPACK_IMPORTED_MODULE_3__.OutputType.STDINAPI : _output_widget_output_widget_component__WEBPACK_IMPORTED_MODULE_3__.OutputType.STDIN);
      this.project?.driver.sendStdin(msgs[i]);
    }
    if (!fromAPI || this.pyodideState != src_app_services_compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_1__.CompilerState.Stdin) {
      this.outputWidget.enableStdin(false);
    }
  }
  onProblemChanged(selectedProblem) {
    console.log("onProblemChanged:", selectedProblem);
    this.selectedProblem = selectedProblem;
    this.selectedService = undefined;
  }
  onServiceChanged(selectedService) {
    console.log("onServiceChanged:", selectedService);
    this.selectedService = selectedService;
  }
  onProblemListChanged() {
    this.selectedProblem = undefined;
    this.selectedService = undefined;
    if (this.logApiWidget.isActive) {
      this.logApiWidget.addLine("rtal -s " + this.api.url + " list");
      this.activeWidget = 1;
    }
  }
  onAttachments(data, widget) {
    var _this = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("onAttachments:EVENT: ", event?.target);
      console.log("onAttachments:", data);
      if (!_this.selectedProblem) {
        return;
      }
      console.log("onAttachments:selectedProblem:", _this.selectedProblem);
      if (!(data instanceof ArrayBuffer)) {
        return;
      }
      console.log("onAttachments:data:", data);
      console.log("extractTar:unpack:");
      yield _this.project?.driver.createDirectory('/data');
      src_app_services_fs_service_fs_service__WEBPACK_IMPORTED_MODULE_2__.Tar.unpack(data, /*#__PURE__*/function () {
        var _ref = (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (files, folders) {
          console.log("extractTar:unpack:folders", folders);
          for (var idx in folders) {
            console.log("extractTar:createDirectory:");
            let folder = folders[idx];
            let path = '/data/' + folder.path;
            console.log("extractTar:createDirectory:", path);
            yield _this.project?.driver.createDirectory(path);
          }
          console.log("extractTar:createDirectory:DONE");
          console.log("extractTar:unpack:files", files);
          for (var idx in files) {
            console.log("extractTar:writeFile:");
            let file = files[idx];
            let path = '/data/' + file.path;
            let content = file.content;
            console.log("extractTar:writeFile:", path, content);
            yield _this.project?.driver.writeFile(path, content);
          }
          console.log("extractTar:writeFile:DONE");
          if (_this.logApiWidget.isActive && widget === "problemWidget") {
            _this.logApiWidget.addLine("rtal -s " + _this.api.url + " get " + _this.selectedProblem?.name);
            _this.activeWidget = 1;
          }
          _this.fileExplorer.refreshRoot();
        });
        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  onItemRenamed(event) {
    var renamedFileIndex = this.isPresent.indexOf(event.oldpath);
    if (renamedFileIndex != -1) {
      this.removeItem({
        "index": renamedFileIndex
      });
    }
  }
  onFileDeleted(filePath) {
    var removedFileIndex = this.isPresent.indexOf(filePath);
    // Removed file is open on the code editor, so now close all associated tabs
    if (removedFileIndex != -1) {
      this.removeItem({
        "index": removedFileIndex
      });
    }
  }
  // When a tab is closed, the file is removed from array of paths and names
  removeItem(event) {
    var Removeindex = event.index;
    this.isPresentName.splice(Removeindex, 1);
    this.isPresent.splice(Removeindex, 1);
    this.files.splice(Removeindex, 1);
    console.log("Tab is closed: ", this.isPresentName);
    if (Removeindex == this.activeIndex) {
      setTimeout(() => {
        this.activeIndex = 0;
        this.execBar.selectedFile = this.files[this.activeIndex];
        this.fileEditor.selectedFile = this.files[this.activeIndex];
        this.fileExplorer.selectedFile = this.files[this.activeIndex];
      }, 0);
    }
    if (Removeindex < this.activeIndex) {
      setTimeout(() => this.activeIndex = this.activeIndex - 1, 0);
    }
  }
  changeFile(event) {
    setTimeout(() => {
      this.activeIndex = event.index;
      this.execBar.selectedFile = this.files[this.activeIndex];
      this.fileEditor.selectedFile = this.files[this.activeIndex];
      this.fileExplorer.selectedFile = this.files[this.activeIndex];
    }, 0);
  }
  selectFile(file) {
    this.selectedFile = file;
    this.execBar.selectedFile = this.selectedFile;
    this.fileEditor.selectedFile = this.selectedFile;
    if (!this.isPresent.includes(this.selectedFile.path)) {
      this.isPresentName.push(this.selectedFile.name);
      this.files.push(this.selectedFile);
      setTimeout(() => this.activeIndex = this.isPresentName.length - 1, 0);
      this.isPresent.push(this.selectedFile.path);
    } else {
      this.setActiveIndex(this.selectedFile.path);
    }
  }
  setActiveIndex(path) {
    setTimeout(() => this.activeIndex = this.isPresent.indexOf(path), 0);
  }
  editorDidChange(file) {
    console.log("editorDidChange:");
    this.saveFile();
  }
  editorDidInput(event) {
    console.log("Input: ", this.fileEditor);
    this.saveFile();
  }
  saveFile() {
    if (this.selectedFile) {
      console.log("saveFile:", this.selectedFile.path, this.fileEditor);
      this.project?.driver.writeFile(this.selectedFile.path, this.selectedFile.content);
    } else {
      console.log("saveFile:failed");
    }
  }
  stopAll() {
    var _this2 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.apiRun = false;
      console.log("stopAll:");
      if (_this2.cmdConnect) {
        _this2.cmdConnect.tal.closeConnection();
      }
      console.log("stopAll:cmdConnect:DONE");
      yield _this2.project?.driver.stopExecution();
      console.log("stopAll:cmdConnect:DONE");
    })();
  }
  changeWidget(event) {
    this.logApiWidget.flashLine();
  }
  //-------------- API CONNECT
  runProjectLocal() {
    var _this3 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.apiRun = false;
      yield _this3.runProject();
      _this3.apiRun = false;
    })();
  }
  runProject() {
    var _this4 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("runProject:");
      _this4.outputWidget.clearOutput();
      let config = yield _this4.compiler.readConfig();
      if (!config) {
        return false;
      }
      console.log("runProject:config:ok");
      console.log("runProject:main:", config.RUN);
      let mainFile = _this4.fslistfile.find(item => item.path == config.RUN);
      if (!mainFile) {
        return false;
      }
      console.log("runProject:main:ok");
      _this4.fileExplorer.selectFile(mainFile);
      _this4.outputWidget.print("RUN: " + config.RUN, _output_widget_output_widget_component__WEBPACK_IMPORTED_MODULE_3__.OutputType.SYSTEM);
      _this4.saveFile();
      yield _this4.compiler.runProject();
      return true;
    })();
  }
  runConnectAPI() {
    var _this5 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.apiRun = true;
      _this5.outputWidget.clearOutput();
      _this5.saveFile();
      yield _this5.apiConnect();
      _this5.apiRun = false;
      _this5.fileExplorer.refreshRoot();
    })();
  }
  apiConnectReset() {
    var _this6 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6.current_output_file = undefined;
      _this6.cmdConnect = undefined;
      _this6.outputWidget.enableStdin(false);
      console.log("apiConnect:didConnectData:cmdConnect:", _this6.cmdConnect);
    })();
  }
  apiConnect() {
    var _this7 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("apiConnect");
      if (!_this7.selectedProblem) {
        _this7.messageService.add({
          key: 'br',
          severity: 'error',
          summary: 'Error',
          detail: 'No problem selected'
        });
        _this7.outputWidget.print("No problem selected", _output_widget_output_widget_component__WEBPACK_IMPORTED_MODULE_3__.OutputType.STDERR);
        return false;
      }
      if (!_this7.selectedService) {
        _this7.messageService.add({
          key: 'br',
          severity: 'error',
          summary: 'Error',
          detail: 'No service selected'
        });
        _this7.outputWidget.print("No service selected", _output_widget_output_widget_component__WEBPACK_IMPORTED_MODULE_3__.OutputType.STDERR);
        return false;
      }
      console.log("apiConnect:service:ok");
      let config = yield _this7.compiler.readConfig();
      if (!config) {
        return false;
      }
      console.log("apiConnect:config:ok");
      let ArgsInvalid = yield _this7.problemWidget.validateArgs();
      //console.log("CODE EDITOR:CONNECT:VALIDATE ARGS: ", result)
      if (ArgsInvalid && ArgsInvalid.size > 0) {
        _this7.messageService.add({
          key: 'br',
          severity: 'error',
          summary: 'Error',
          detail: 'Args setted are invalid. Please correct'
        });
        return false;
      }
      //Run MAIN
      console.log("apiConnect:runProject");
      _this7.saveFile();
      yield _this7.compiler.runProject();
      _this7.outputWidget.print("API: " + config.RUN, _output_widget_output_widget_component__WEBPACK_IMPORTED_MODULE_3__.OutputType.SYSTEM);
      console.log("apiConnect:runProject:running");
      //Open Connection
      console.log("CODE EDITOR:CONNECT:ARGS: ", _this7.selectedService.args);
      let problem = _this7.selectedService.parent.name;
      let service = _this7.selectedService.name;
      let args = _this7.selectedService.exportArgs();
      let tty = false; //true: bash code coloring, backspaces, etc
      let token = config.TAL_TOKEN && config.TAL_TOKEN != "" ? config.TAL_TOKEN : undefined;
      let filePaths = _this7.selectedService.exportFilesPaths();
      let files = new Map();
      filePaths.forEach((fileArgPath, fileArgName) => {
        console.log("apiConnect:params:problem:path:", fileArgName, fileArgPath);
        let found = _this7.fslistfile.find(item => item.path == fileArgPath);
        console.log("apiConnect:params:problem:found:", found);
        if (!found) {
          return;
        }
        let content = found.content;
        if (content instanceof ArrayBuffer) {
          content = _this7.binDecoder.decode(content);
        }
        files.set(fileArgName, content);
      });
      console.log("apiConnect:params:problem", problem);
      console.log("apiConnect:params:service", service);
      console.log("apiConnect:params:args", args);
      console.log("apiConnect:params:tty", tty);
      console.log("apiConnect:params:token", token);
      console.log("apiConnect:params:files", files);
      let onConnectionStart = () => {
        _this7.didConnectStart();
      };
      let onConnectionBegin = msg => {
        _this7.didConnectBegin(msg);
      };
      let onConnectionClose = msg => {
        _this7.didConnectClose(msg);
      };
      let onData = data => {
        _this7.didConnectData(data);
      };
      let onBinaryHeader = msg => {
        _this7.didRecieveBinaryHeader(msg);
      };
      let newLogLine = "rtal -s " + _this7.api.url + " connect " + problem + " " + service;
      let keys = Object.keys(args);
      let values = Object.values(args);
      for (let i = 0; i < keys.length; i++) {
        newLogLine += " -a " + keys[i] + "=" + values[i];
      }
      if (_this7.logApiWidget.isActive) {
        _this7.logApiWidget.addLine(newLogLine);
      }
      _this7.activeWidget = 0;
      _this7.cmdConnect = yield _this7.api.Connect(problem, service, args, tty, token, files, onConnectionBegin, onConnectionStart, onConnectionClose, onData, onBinaryHeader);
      console.log("apiConnect:DONE");
      return true;
    })();
  }
  didConnectError(error) {
    var _this8 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("apiConnect:didConnectError:", error);
      _this8.outputWidget.print("API Error: " + error, _output_widget_output_widget_component__WEBPACK_IMPORTED_MODULE_3__.OutputType.STDERR);
      _this8.cmdConnect = undefined;
      _this8.outputWidget.enableStdin(false);
      _this8.project?.driver.stopExecution();
    })();
  }
  didConnectStart() {
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("apiConnect:didConnectStart");
    })();
  }
  didConnectBegin(message) {
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("apiConnect:didConnectBegin:", message);
    })();
  }
  didConnectClose(message) {
    var _this9 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("apiConnect:didConnectionClose:", message);
      if (message && message.length > 0 && message[0] !== "") {
        _this9.output_files = message;
      } else {
        _this9.apiConnectReset();
        console.log("apiConnect:didConnectClose:cmdConnect:", _this9.cmdConnect);
      }
    })();
  }
  didConnectData(data) {
    var _this10 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("apiConnect:didConnectData:", data);
      if (_this10.output_files && _this10.current_output_file) {
        if (_this10.current_output_file) {
          _this10.project?.driver.writeFile("/" + _this10.current_output_file, data);
        }
        ;
        if (_this10.current_output_file === _this10.output_files[_this10.output_files.length - 1]) {
          _this10.apiConnectReset();
        }
        console.log("apiConnect:didConnectData:cmdConnect:", _this10.cmdConnect);
      } else {
        _this10.sendStdin(data, true);
      }
    })();
  }
  didRecieveBinaryHeader(message) {
    var _this11 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("apiConnect:didRecieveBinaryHeader:", message);
      _this11.current_output_file = message.name;
      if (_this11.current_output_file) {
        _this11.project?.driver.writeFile("/" + _this11.current_output_file, "");
      }
      ;
    })();
  }
}
CodeEditorComponent.ɵfac = function CodeEditorComponent_Factory(t) {
  return new (t || CodeEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_services_fs_service_fs_service__WEBPACK_IMPORTED_MODULE_2__.FsService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_services_compiler_service_compiler_service_service__WEBPACK_IMPORTED_MODULE_4__.CompilerService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_services_python_compiler_service_python_compiler_service__WEBPACK_IMPORTED_MODULE_5__.PythonCompilerService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_services_api_service_api_service__WEBPACK_IMPORTED_MODULE_6__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_services_project_manager_service_project_manager_service__WEBPACK_IMPORTED_MODULE_7__.ProjectManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_15__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_16__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_services_tutorial_service_tutorial_service__WEBPACK_IMPORTED_MODULE_8__.TutorialService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_15__.ElementRef));
};
CodeEditorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
  type: CodeEditorComponent,
  selectors: [["tal-code-editor"]],
  viewQuery: function CodeEditorComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c2, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c3, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c5, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c6, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.fileExplorer = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.fileEditor = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.execBar = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.problemWidget = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.outputWidget = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.logApiWidget = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.terminalWidget = _t.first);
    }
  },
  decls: 6,
  vars: 7,
  consts: [[1, "tal-editor"], ["stateStorage", "local", 3, "panelSizes", "minSizes"], ["pTemplate", ""], ["position", "bottom-right", "key", "br"], [1, "tal-editor-files"], [3, "onUpdateRoot", "onSelectFile", "onFileDeleted", "onItemRenamed"], ["fileExplorer", ""], [1, "tal-code-editor-container", 2, "height", "700px", "overflow-y", "hidden"], [1, "tal-code-editor-header"], [3, "selectedFile", "onStop", "onRun", "onConnect"], ["execBar", ""], [1, "mywrapper2"], [3, "scrollable", "activeIndex", "onClose", "onChange"], [4, "ngFor", "ngForOf"], [1, "tal-code-editor"], [3, "onChange"], ["fileEditor", ""], [3, "closable"], ["pTemplate", "header", "class", "tal-problem-widget-args-row"], [1, "tal-problem-widget-label"], ["id", "tal-problem-column", "layout", "vertical", "stateStorage", "local", 3, "panelSizes", "minSizes"], [3, "onAttachments", "onProblemChanged", "onServiceChanged", "onProblemListChanged"], ["problemWidget", ""], [1, "mywrapper"], [3, "activeIndex", "onChange"], [3, "disabled"], ["pTemplate", "header"], [3, "onStdin"], ["outputWidget", ""], ["logApiWidget", ""], [3, "onAttachments", "onProblemChanged"], ["terminalWidget", ""], [1, "pi", "pi-desktop"], [1, "labelPanel"], [1, "pi", "pi-list"], [1, "pi", "pi-code"]],
  template: function CodeEditorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 0)(1, "p-splitter", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, CodeEditorComponent_ng_template_2_Template, 3, 0, "ng-template", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, CodeEditorComponent_ng_template_3_Template, 12, 4, "ng-template", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, CodeEditorComponent_ng_template_4_Template, 4, 4, "ng-template", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](5, "p-toast", 3);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](4, _c9));
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("panelSizes", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](5, _c10))("minSizes", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](6, _c11));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, primeng_api__WEBPACK_IMPORTED_MODULE_16__.PrimeTemplate, primeng_splitter__WEBPACK_IMPORTED_MODULE_18__.Splitter, primeng_toast__WEBPACK_IMPORTED_MODULE_19__.Toast, primeng_tabview__WEBPACK_IMPORTED_MODULE_20__.TabView, primeng_tabview__WEBPACK_IMPORTED_MODULE_20__.TabPanel, _file_explorer_widget_file_explorer_widget_component__WEBPACK_IMPORTED_MODULE_9__.FileExplorerWidgetComponent, _file_editor_widget_file_editor_widget_component__WEBPACK_IMPORTED_MODULE_10__.FileEditorWidgetComponent, _execbar_widget_execbar_widget_component__WEBPACK_IMPORTED_MODULE_11__.ExecbarWidgetComponent, _problem_widget_problem_widget_component__WEBPACK_IMPORTED_MODULE_12__.ProblemWidgetComponent, _output_widget_output_widget_component__WEBPACK_IMPORTED_MODULE_3__.OutputWidgetComponent, _terminal_widget_terminal_widget_component__WEBPACK_IMPORTED_MODULE_13__.TerminalWidgetComponent, _log_api_widget_log_api_widget_component__WEBPACK_IMPORTED_MODULE_14__.LogApiWidgetComponent],
  styles: [".blur[_ngcontent-%COMP%] {\n  position: relative;\n  background-size: cover;\n  position: relative;\n  overflow: hidden;\n  filter: blur(10px); \n  -webkit-backdrop-filter: blur(3px); \n  backdrop-filter: blur(100%);\n  \n  pointer-events: none;\n  \n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.a[_ngcontent-%COMP%] {\n  color: red;\n  pointer-events: auto;\n  -webkit-user-select: auto;\n          user-select: auto;\n}\n\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n  div.tal-editor {\n  flex: 1;\n  width: 100%;\n  height: 100%;\n}\n\n  div.tal-code-editor-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 1500px;\n}\n\n  div.tal-code-editor-container div.tal-code-editor-header {\n  display: flex;\n  width: 100%;\n}\n\n  div.tal-code-editor-container div.tal-code-editor {\n  flex: 1;\n  width: 100%;\n}\n\ndiv.tal-editor-files[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mywrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  width: 100%;\n}\n\n.mywrapper[_ngcontent-%COMP%]    > p-tabView[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.mywrapper2[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  width: 100%;\n}\n\n.mywrapper2[_ngcontent-%COMP%]    > p-tabView[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.labelPanel[_ngcontent-%COMP%] {\n  padding-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2JsdXIuc2NzcyIsImNvZGUtZWRpdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQSxFQUFBLGdEQUFBO0VBQ0Esa0NBQUEsRUFFRyxvREFBQTtFQUNILDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdEQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQ0RGOztBRElBO0VBQ0UsVUFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQ0RGOztBQVpBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFlRjs7QUFYRTtFQUNFLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWNKOztBQVhFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFhSjs7QUFYSTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FBYU47O0FBVkk7RUFDRSxPQUFBO0VBQ0EsV0FBQTtBQVlOOztBQVBBO0VBQ0UsV0FBQTtBQVVGOztBQVBBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FBVUY7O0FBTkE7RUFDRSxPQUFBO0FBU0Y7O0FBTkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUFTRjs7QUFMQTtFQUNFLE9BQUE7QUFRRjs7QUFMQTtFQUNFLGlCQUFBO0FBUUYiLCJmaWxlIjoiY29kZS1lZGl0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmx1cntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZpbHRlcjogYmx1cigxMHB4KTsgLyogTW9kaWZpY2EgaWwgdmFsb3JlIGRpIGJsdXIgYSB0dW8gcGlhY2ltZW50byAqL1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cihcbiAgICAzcHhcbiAgKTsgLyogUGVyIGkgYnJvd3NlciBiYXNhdGkgc3UgV2ViS2l0IChDaHJvbWUsIFNhZmFyaSkgKi9cbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwMCUpO1xuICAvKiBCbG9jY2EgaWwgY2xpY2sgYWkgYm90dG9uaSAqL1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgLyogUGVybWV0dGUgZGkgYmxvY2NhcmUgbGEgc2VsZXppb25lIGRlbCB0ZXN0byAqL1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmEge1xuICBjb2xvcjogcmVkO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgdXNlci1zZWxlY3Q6IGF1dG87XG59XG4iLCJAaW1wb3J0IFwiLi4vYmx1ci5zY3NzXCI7XG5cbi5ibHVyIHtcbiAgQGV4dGVuZCAuYmx1cjtcbn1cblxuOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG46Om5nLWRlZXAge1xuICBkaXYudGFsLWVkaXRvciB7XG4gICAgZmxleDogMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICBkaXYudGFsLWNvZGUtZWRpdG9yLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTUwMHB4O1xuXG4gICAgZGl2LnRhbC1jb2RlLWVkaXRvci1oZWFkZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIGRpdi50YWwtY29kZS1lZGl0b3Ige1xuICAgICAgZmxleDogMTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxufVxuXG5kaXYudGFsLWVkaXRvci1maWxlcyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubXl3cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIHdpZHRoOiAxMDAlO1xuICAvL2hlaWdodDogNWVtO1xufVxuXG4ubXl3cmFwcGVyID4gcC10YWJWaWV3IHtcbiAgZmxleDogMTtcbn1cblxuLm15d3JhcHBlcjIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgd2lkdGg6IDEwMCU7XG4gIC8vaGVpZ2h0OiA1ZW07XG59XG5cbi5teXdyYXBwZXIyID4gcC10YWJWaWV3IHtcbiAgZmxleDogMTtcbn1cblxuLmxhYmVsUGFuZWwge1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 9672:
/*!********************************************************************************!*\
  !*** ./src/app/widgets/code-editor/execbar-widget/execbar-widget.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExecbarWidgetComponent": () => (/* binding */ ExecbarWidgetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_fs_service_fs_service_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/fs-service/fs.service.types */ 118);
/* harmony import */ var src_app_services_tutorial_service_tutorial_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/tutorial-service/tutorial.service */ 8352);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/tooltip */ 4329);






class ExecbarWidgetComponent {
    constructor(tutorialService) {
        this.tutorialService = tutorialService;
        this.onStop = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.onRun = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.onConnect = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.isBlurred = true;
        this.tutorialService.onTutorialChange.subscribe((tutorial) => { this.isTutorialShown(tutorial); });
        this.tutorialService.onTutorialClose.subscribe(() => { this.isTutorialShown(); });
    }
    ngOnInit() {
        // this.isBlurred = true;
    }
    isTutorialShown(tutorial) {
        console.log("ExecbarWidgetComponent:isTutorialShown");
        if (typeof tutorial === 'undefined' || tutorial.componentName === "ExecbarWidgetComponent") {
            this.isBlurred = false;
        }
        else {
            this.isBlurred = true;
        }
    }
    onStopClick() {
        this.onStop.emit();
    }
    onRunClick() {
        this.onRun.emit(this.selectedFile);
    }
    onConnectClick() {
        this.onConnect.emit(this.selectedFile);
    }
}
ExecbarWidgetComponent.ɵfac = function ExecbarWidgetComponent_Factory(t) { return new (t || ExecbarWidgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_tutorial_service_tutorial_service__WEBPACK_IMPORTED_MODULE_1__.TutorialService)); };
ExecbarWidgetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ExecbarWidgetComponent, selectors: [["tal-execbar-widget"]], inputs: { selectedFile: "selectedFile" }, outputs: { onStop: "onStop", onRun: "onRun", onConnect: "onConnect" }, decls: 8, vars: 3, consts: [[1, "tal-code-editor-execbar"], [1, "tal-code-editor-execbar-left"], [1, "tal-code-editor-execbar-right"], ["pButton", "", "icon", "pi pi-stop", "pTooltip", "Stop Pyodide", "tooltipPosition", "bottom", 1, "tal-square-button", 3, "click"], ["pButton", "", "icon", "pi pi-play", "pTooltip", "Run locally", "tooltipPosition", "bottom", 1, "tal-square-button", 3, "click"], ["pButton", "", "icon", "pi pi-cloud-upload", "pTooltip", "Verify solution with TALight server", "tooltipPosition", "bottom", 1, "tal-square-button", 3, "click"]], template: function ExecbarWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2)(5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ExecbarWidgetComponent_Template_button_click_5_listener() { return ctx.onStopClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ExecbarWidgetComponent_Template_button_click_6_listener() { return ctx.onRunClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ExecbarWidgetComponent_Template_button_click_7_listener() { return ctx.onConnectClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("blur", ctx.isBlurred);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.selectedFile == null ? null : ctx.selectedFile.name);
    } }, dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_3__.ButtonDirective, primeng_tooltip__WEBPACK_IMPORTED_MODULE_4__.Tooltip], styles: [".blur[_ngcontent-%COMP%] {\n  position: relative;\n  background-size: cover;\n  position: relative;\n  overflow: hidden;\n  filter: blur(10px); \n  -webkit-backdrop-filter: blur(3px); \n  backdrop-filter: blur(100%);\n  \n  pointer-events: none;\n  \n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.a[_ngcontent-%COMP%] {\n  color: red;\n  pointer-events: auto;\n  -webkit-user-select: auto;\n          user-select: auto;\n}\n\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.tal-code-editor-execbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 5px;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\n.tal-code-editor-execbar[_ngcontent-%COMP%]   .tal-code-editor-execbar-left[_ngcontent-%COMP%], .tal-code-editor-execbar[_ngcontent-%COMP%]   .tal-code-editor-execbar-right[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.tal-code-editor-execbar[_ngcontent-%COMP%]   .tal-code-editor-execbar-left[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .tal-code-editor-execbar[_ngcontent-%COMP%]   .tal-code-editor-execbar-right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2JsdXIuc2NzcyIsImV4ZWNiYXItd2lkZ2V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQSxFQUFBLGdEQUFBO0VBQ0Esa0NBQUEsRUFFRyxvREFBQTtFQUNILDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdEQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQ0RGOztBRElBO0VBQ0UsVUFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQ0RGOztBQVhBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFjSjs7QUFYQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0FBY0o7O0FBWkk7RUFDSSxhQUFBO0FBY1I7O0FBYlE7RUFDSSxnQkFBQTtBQWVaIiwiZmlsZSI6ImV4ZWNiYXItd2lkZ2V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsdXJ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmaWx0ZXI6IGJsdXIoMTBweCk7IC8qIE1vZGlmaWNhIGlsIHZhbG9yZSBkaSBibHVyIGEgdHVvIHBpYWNpbWVudG8gKi9cbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoXG4gICAgM3B4XG4gICk7IC8qIFBlciBpIGJyb3dzZXIgYmFzYXRpIHN1IFdlYktpdCAoQ2hyb21lLCBTYWZhcmkpICovXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMDAlKTtcbiAgLyogQmxvY2NhIGlsIGNsaWNrIGFpIGJvdHRvbmkgKi9cbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIC8qIFBlcm1ldHRlIGRpIGJsb2NjYXJlIGxhIHNlbGV6aW9uZSBkZWwgdGVzdG8gKi9cbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5hIHtcbiAgY29sb3I6IHJlZDtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIHVzZXItc2VsZWN0OiBhdXRvO1xufVxuIiwiQGltcG9ydCAnLi4vYmx1ci5zY3NzJztcblxuLmJsdXJ7XG4gICAgQGV4dGVuZCAuYmx1cjtcbn1cblxuXG46aG9zdHtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDoxMDAlO1xufVxuXG4udGFsLWNvZGUtZWRpdG9yLWV4ZWNiYXJ7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzo1cHg7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogIzAwMDAwMCwgJGFscGhhOiAwLjEpO1xuXG4gICAgLnRhbC1jb2RlLWVkaXRvci1leGVjYmFyLWxlZnQsIC50YWwtY29kZS1lZGl0b3ItZXhlY2Jhci1yaWdodHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYnV0dG9ue1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6NXB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgXG59XG5cbiJdfQ== */"] });


/***/ }),

/***/ 7717:
/*!****************************************************************************************!*\
  !*** ./src/app/widgets/code-editor/file-editor-widget/file-editor-widget.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditorOptions": () => (/* binding */ EditorOptions),
/* harmony export */   "EditorOptionsBrowser": () => (/* binding */ EditorOptionsBrowser),
/* harmony export */   "EditorOptionsMonaco": () => (/* binding */ EditorOptionsMonaco),
/* harmony export */   "EditorType": () => (/* binding */ EditorType),
/* harmony export */   "FileAssociation": () => (/* binding */ FileAssociation),
/* harmony export */   "FileAssociationChoiceList": () => (/* binding */ FileAssociationChoiceList),
/* harmony export */   "FileEditorWidgetComponent": () => (/* binding */ FileEditorWidgetComponent),
/* harmony export */   "MatchMethod": () => (/* binding */ MatchMethod),
/* harmony export */   "MatchType": () => (/* binding */ MatchType)
/* harmony export */ });
/* harmony import */ var _home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 3918);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var base64_arraybuffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! base64-arraybuffer */ 478);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! marked */ 4611);
/* harmony import */ var src_app_services_theme_service_theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/theme-service/theme.service */ 2655);
/* harmony import */ var src_app_services_tutorial_service_tutorial_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tutorial-service/tutorial.service */ 8352);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var _monaco_editor_widget_monaco_editor_widget_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../monaco-editor-widget/monaco-editor-widget.component */ 9128);









const _c0 = ["monacoEditor"];
const _c1 = ["browserEditor"];
const _c2 = ["imageViewer"];
const _c3 = ["markdownPreview"];
// Editor UI
var EditorType;
(function (EditorType) {
  EditorType[EditorType["None"] = 0] = "None";
  EditorType[EditorType["Code"] = 1] = "Code";
  EditorType[EditorType["Archive"] = 2] = "Archive";
  EditorType[EditorType["Markdown"] = 3] = "Markdown";
  EditorType[EditorType["Image"] = 4] = "Image";
  EditorType[EditorType["Browser"] = 5] = "Browser";
  EditorType[EditorType["Unknown"] = 6] = "Unknown";
  EditorType[EditorType["Default"] = 5] = "Default";
})(EditorType || (EditorType = {}));
var MatchMethod;
(function (MatchMethod) {
  MatchMethod[MatchMethod["Auto"] = 0] = "Auto";
  MatchMethod[MatchMethod["Exact"] = 1] = "Exact";
  MatchMethod[MatchMethod["Glob"] = 2] = "Glob";
  MatchMethod[MatchMethod["Regex"] = 3] = "Regex";
  MatchMethod[MatchMethod["Default"] = 0] = "Default";
})(MatchMethod || (MatchMethod = {}));
var MatchType;
(function (MatchType) {
  MatchType[MatchType["Auto"] = 0] = "Auto";
  MatchType[MatchType["Extension"] = 1] = "Extension";
  MatchType[MatchType["Mime"] = 2] = "Mime";
  MatchType[MatchType["Default"] = 0] = "Default";
})(MatchType || (MatchType = {}));
//Editor Options
class EditorOptions {}
class EditorOptionsMonaco extends EditorOptions {
  constructor(language = "python") {
    super();
    this.language = language;
  }
}
class EditorOptionsBrowser extends EditorOptions {
  constructor(embedded = true, mime = 'application/octet') {
    super();
    this.embedded = embedded;
    this.mime = mime;
  }
}
//File Assoc
class FileAssociation {
  constructor(pattern = ".*", editorType = EditorType.None, editorOption, priority = 0, matchMethod = MatchMethod.Auto, matchType = MatchType.Auto) {
    this.pattern = pattern;
    this.editorType = editorType;
    this.editorOption = editorOption;
    this.priority = priority;
    this.matchMethod = matchMethod;
    this.matchType = matchType;
  }
  match(file) {
    let parts = file.name.split(".");
    console.log('FileAssociation:match:', parts);
    if (parts.length > 1) {
      let ext = parts.splice(-1)[0];
      console.log('FileAssociation:ext:', ext);
      if (this.pattern == ext) {
        return true;
      }
      if (ext.match(this.pattern)) {
        return true;
      }
    } else {
      //TODO: mime-magic matching
    }
    return false; //No match
  }
  static matchAll(file, associations) {
    let matches = [];
    associations.forEach(association => {
      if (association.match(file)) {
        matches.push(association);
      }
    });
    matches = matches.sort((a, b) => {
      return b.priority - a.priority;
    });
    return matches;
  }
}
class FileAssociationChoiceList {
  constructor(items) {
    this.associations = Array.from(items);
  }
  add(item) {
    if (this.associations.includes(item)) {
      return;
    }
    this.associations.push(item);
  }
  match(file) {
    let matches = FileAssociation.matchAll(file, this.associations);
    console.log('FileAssociationChoiceList:match:', matches);
    if (matches.length == 0) {
      return null;
    }
    let bestMatch = matches[0];
    return bestMatch;
  }
}
class FileEditorWidgetComponent {
  constructor(themeService, tutorialService) {
    this.themeService = themeService;
    this.tutorialService = tutorialService;
    this.EditorType = EditorType;
    this.editorType = EditorType.None;
    this.binEncoder = new TextEncoder(); // always utf-8
    this.binDecoder = new TextDecoder("utf-8");
    this.fileAssocList = new FileAssociationChoiceList([
    //Code
    new FileAssociation('py', EditorType.Code, new EditorOptionsMonaco('python')), new FileAssociation('csv', EditorType.Code, new EditorOptionsMonaco('csv')), new FileAssociation('json', EditorType.Code, new EditorOptionsMonaco('json')), new FileAssociation('txt', EditorType.Code, new EditorOptionsMonaco('text')), new FileAssociation('js', EditorType.Code, new EditorOptionsMonaco('javascript')), new FileAssociation('yaml', EditorType.Code, new EditorOptionsMonaco('yaml')),
    //Markdown
    new FileAssociation('md', EditorType.Markdown, new EditorOptionsMonaco('markdown')),
    //Archive
    new FileAssociation('tar', EditorType.Archive), new FileAssociation('zip', EditorType.Archive),
    //PDF
    new FileAssociation('pdf', EditorType.Browser, new EditorOptionsBrowser(true, 'application/pdf')),
    //Images
    new FileAssociation('png', EditorType.Browser, new EditorOptionsBrowser(true, 'image/png')), new FileAssociation('jpg', EditorType.Browser, new EditorOptionsBrowser(true, 'image/jpg')),
    //Other
    new FileAssociation('.*', EditorType.Browser, new EditorOptionsBrowser(true), -10)]);
    this._selectedFile = null;
    this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.isBlurred = false;
    this.tutorialService.onTutorialChange.subscribe(tutorial => {
      this.isTutorialShown(tutorial);
    });
    this.tutorialService.onTutorialClose.subscribe(() => {
      this.isTutorialShown();
    });
  }
  ngOnInit() {
    this.isBlurred = true;
  }
  isTutorialShown(tutorial) {
    console.log("FileEditorWidgetComponent:isTutorialShown");
    if (typeof tutorial === 'undefined' || tutorial.componentName === "FileEditorWidgetComponent") {
      this.isBlurred = false;
    } else {
      this.isBlurred = true;
    }
  }
  get selectedFile() {
    return this._selectedFile;
  }
  set selectedFile(selectedFile) {
    this._selectedFile = selectedFile;
    console.log('selectedFile:', selectedFile);
    this.selectEditor();
  }
  selectEditor() {
    if (!this._selectedFile) {
      this.editorType = EditorType.None;
      this.openEditor();
      return;
    }
    let bestMatch = this.fileAssocList.match(this._selectedFile);
    if (!bestMatch) {
      this.editorType = EditorType.None;
      this.openEditor();
      return;
    }
    this.editorType = bestMatch.editorType;
    this.editorOption = bestMatch.editorOption;
    console.log("selectEditor:", this.editorType);
    console.log("selectEditor:editorOption:", this.editorOption);
    this.openEditor();
  }
  openEditor() {
    var _this = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.selectedFile) {
        return;
      }
      console.log('openEditor:', _this.editorType.toString());
      switch (_this.editorType) {
        case EditorType.Markdown:
          let markdownBox = _this.markdownPreview.nativeElement;
          if (_this.selectedFile.content instanceof ArrayBuffer) {
            _this.selectedFile.content = _this.binDecoder.decode(_this.selectedFile.content);
          }
          markdownBox.innerHTML = yield (0,marked__WEBPACK_IMPORTED_MODULE_2__.marked)(_this.selectedFile.content);
          break;
        case EditorType.Code:
          let monacoOptions = _this.editorOption;
          if (_this.selectedFile.content instanceof ArrayBuffer) {
            _this.selectedFile.content = _this.binDecoder.decode(_this.selectedFile.content);
          }
          _this.monacoEditor.selectedFile = _this.selectedFile;
          _this.monacoEditor.language = monacoOptions.language;
          _this.monacoEditor.updateEditorOptions();
          break;
        case EditorType.Browser:
          let browserOptions = _this.editorOption;
          let iframe = _this.browserEditor.nativeElement;
          let header = 'data:' + browserOptions.mime + ';';
          let body;
          if (_this.selectedFile.content instanceof ArrayBuffer) {
            console.log('openEditor:Browser:', Array.from(new Uint8Array(_this.selectedFile.content)));
            body = (0,base64_arraybuffer__WEBPACK_IMPORTED_MODULE_1__.encode)(_this.selectedFile.content);
          } else {
            body = btoa(_this.selectedFile.content);
          }
          let daraurl = header + 'base64,' + body;
          /*
          let id = 'doclink'
          let filename = this.selectedFile.name
          let link = `<a id="${id}" download="${filename}" href="${daraurl}"></a>`
          let script = `<script>document.getElementById('${id}').click()</script>`
          let template = `<html><body>${link}${script}</body></html>`
          */
          iframe.src = daraurl;
          break;
      }
    })();
  }
  shouldHide(editorType) {
    return this.editorType !== editorType;
  }
  //MonacoEditor
  monacoEditorDidChange(file) {
    this.onChange.emit(file);
  }
}
FileEditorWidgetComponent.ɵfac = function FileEditorWidgetComponent_Factory(t) {
  return new (t || FileEditorWidgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_theme_service_theme_service__WEBPACK_IMPORTED_MODULE_3__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_tutorial_service_tutorial_service__WEBPACK_IMPORTED_MODULE_4__.TutorialService));
};
FileEditorWidgetComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: FileEditorWidgetComponent,
  selectors: [["tal-file-editor-widget"]],
  viewQuery: function FileEditorWidgetComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c2, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c3, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.monacoEditor = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.browserEditor = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.imageViewer = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.markdownPreview = _t.first);
    }
  },
  inputs: {
    _selectedFile: ["selectedFile", "_selectedFile"]
  },
  outputs: {
    onChange: "onChange"
  },
  decls: 41,
  vars: 11,
  consts: [[1, "tal-file-editor-switch"], [1, "tal-file-editor-case-unknown", "tal-file-editor-case", 3, "hidden"], [1, "tal-center-page"], [1, "tal-placeholder-message"], [1, "tal-file-editor-case-none", "tal-file-editor-case", 3, "hidden"], [1, "tal-file-editor-case-image", "tal-file-editor-case", 3, "hidden"], [1, "tal-file-editor-image"], ["imageViewer", ""], [1, "tal-file-editor-case-code", "tal-file-editor-case", 3, "hidden"], [1, "tal-file-editor-code"], [1, "tal-file-editor-monaco-widget", 3, "onChange"], ["monacoEditor", ""], [1, "tal-file-editor-case-markdown", "tal-file-editor-case", 3, "hidden"], [1, "tal-markdown-preview"], [1, "tal-markdown-preview-content"], ["markdownPreview", ""], [1, "tal-file-editor-case-browser", "tal-file-editor-case", 3, "hidden"], [1, "tal-browser-viewer"], [1, "tal-browser-viewer-iframe"], ["browserEditor", ""], [1, "tal-file-editor-case-archive", "tal-file-editor-case", 3, "hidden"], [1, "tal-archive-viewer", "tal-center-page"], ["pButton", "", "label", "Decompress", "onclick", "alert('TODO: Decompress')", 1, "tal-square-button", 3, "title"], ["untarButton", ""]],
  template: function FileEditorWidgetComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Unknown file format");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4)(6, "div", 2)(7, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Select or create a file");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 5)(10, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "img", null, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 8)(14, "div", 9)(15, "tal-monaco-editor-widget", 10, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onChange", function FileEditorWidgetComponent_Template_tal_monaco_editor_widget_onChange_15_listener($event) {
        return ctx.monacoEditorDidChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 12)(18, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "div", 14, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 16)(22, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "iframe", 18, 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 20)(26, "div", 21)(27, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, " TODO: file preview ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "ul")(32, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "fileA.zip");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "main.py");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, ".talight/talight.json");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](39, "button", 22, 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("blur", ctx.isBlurred);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx.shouldHide(ctx.EditorType.Unknown));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx.shouldHide(ctx.EditorType.None));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx.shouldHide(ctx.EditorType.Image));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx.shouldHide(ctx.EditorType.Code));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx.shouldHide(ctx.EditorType.Markdown));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx.shouldHide(ctx.EditorType.Browser));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx.shouldHide(ctx.EditorType.Archive));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.selectedFile == null ? null : ctx.selectedFile.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", "Untar: " + (ctx.selectedFile == null ? null : ctx.selectedFile.name));
    }
  },
  dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonDirective, _monaco_editor_widget_monaco_editor_widget_component__WEBPACK_IMPORTED_MODULE_5__.MonacoEditorWidgetComponent],
  styles: [".blur[_ngcontent-%COMP%] {\n  position: relative;\n  background-size: cover;\n  position: relative;\n  overflow: hidden;\n  filter: blur(10px); \n  -webkit-backdrop-filter: blur(3px); \n  backdrop-filter: blur(100%);\n  \n  pointer-events: none;\n  \n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.a[_ngcontent-%COMP%] {\n  color: red;\n  pointer-events: auto;\n  -webkit-user-select: auto;\n          user-select: auto;\n}\n\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.tal-file-editor-switch[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n}\n\n.tal-file-editor-switch[_ngcontent-%COMP%]   .tal-file-editor-case[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.tal-file-editor-switch[_ngcontent-%COMP%]   .tal-file-editor-code[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 100%;\n}\n\n.tal-file-editor-switch[_ngcontent-%COMP%]   .tal-file-editor-code[_ngcontent-%COMP%]   .tal-file-editor-monaco-widget[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.tal-file-editor-switch[_ngcontent-%COMP%]   .tal-browser-viewer-iframe[_ngcontent-%COMP%], .tal-file-editor-switch[_ngcontent-%COMP%]   .tal-browser-viewer[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  flex-grow: 1;\n  border: none;\n}\n\n.tal-file-editor-switch[_ngcontent-%COMP%]   .tal-markdown-preview-content[_ngcontent-%COMP%] {\n  padding: 10px;\n  background-color: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2JsdXIuc2NzcyIsImZpbGUtZWRpdG9yLXdpZGdldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUEsRUFBQSxnREFBQTtFQUNBLGtDQUFBLEVBRUcsb0RBQUE7RUFDSCwyQkFBQTtFQUNBLCtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnREFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7QUNERjs7QURJQTtFQUNFLFVBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7QUNERjs7QUFaQTtFQUVJLFdBQUE7RUFDQSxZQUFBO0FBY0o7O0FBWEE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQWNKOztBQVpJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFjUjs7QUFYSTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWFSOztBQVhRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFhWjs7QUFUSTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBV1I7O0FBUkk7RUFDSSxhQUFBO0VBQ0EseUJBQUE7QUFVUiIsImZpbGUiOiJmaWxlLWVkaXRvci13aWRnZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmx1cntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZpbHRlcjogYmx1cigxMHB4KTsgLyogTW9kaWZpY2EgaWwgdmFsb3JlIGRpIGJsdXIgYSB0dW8gcGlhY2ltZW50byAqL1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cihcbiAgICAzcHhcbiAgKTsgLyogUGVyIGkgYnJvd3NlciBiYXNhdGkgc3UgV2ViS2l0IChDaHJvbWUsIFNhZmFyaSkgKi9cbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwMCUpO1xuICAvKiBCbG9jY2EgaWwgY2xpY2sgYWkgYm90dG9uaSAqL1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgLyogUGVybWV0dGUgZGkgYmxvY2NhcmUgbGEgc2VsZXppb25lIGRlbCB0ZXN0byAqL1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmEge1xuICBjb2xvcjogcmVkO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgdXNlci1zZWxlY3Q6IGF1dG87XG59XG4iLCJAaW1wb3J0ICcuLi9ibHVyLnNjc3MnO1xuXG4uYmx1cntcbiAgICBAZXh0ZW5kIC5ibHVyO1xufVxuXG46aG9zdHtcblxuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGFsLWZpbGUtZWRpdG9yLXN3aXRjaHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDoxMDAlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAudGFsLWZpbGUtZWRpdG9yLWNhc2V7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6MTAwJTtcbiAgICB9XG5cbiAgICAudGFsLWZpbGUtZWRpdG9yLWNvZGV7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIGhlaWdodDoxMDAlO1xuXG4gICAgICAgIC50YWwtZmlsZS1lZGl0b3ItbW9uYWNvLXdpZGdldHtcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6MTAwJTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC50YWwtYnJvd3Nlci12aWV3ZXItaWZyYW1lLCAudGFsLWJyb3dzZXItdmlld2Vye1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICBoZWlnaHQ6MTAwJTtcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxuXG4gICAgLnRhbC1tYXJrZG93bi1wcmV2aWV3LWNvbnRlbnR7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgfVxufVxuIl19 */"]
});

/***/ }),

/***/ 3842:
/*!********************************************************************************************!*\
  !*** ./src/app/widgets/code-editor/file-explorer-widget/file-explorer-widget.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileExplorerWidgetComponent": () => (/* binding */ FileExplorerWidgetComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 3918);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/overlaypanel */ 6664);
/* harmony import */ var src_app_services_fs_service_fs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/fs-service/fs.service */ 9056);
/* harmony import */ var src_app_services_fs_service_fs_service_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/fs-service/fs.service.types */ 118);
/* harmony import */ var _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @abacritt/angularx-social-login */ 3218);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var src_app_services_project_manager_service_project_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/project-manager-service/project-manager.service */ 9102);
/* harmony import */ var src_app_services_github_api_service_github_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/github-api-service/github-api.service */ 7791);
/* harmony import */ var src_app_services_tutorial_service_tutorial_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/tutorial-service/tutorial.service */ 8352);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/confirmdialog */ 97);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/tieredmenu */ 1487);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/tooltip */ 4329);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/dialog */ 1837);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/toast */ 9129);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/dropdown */ 8992);
























const _c0 = ["nameEditing"];
const _c1 = ["newItemName"];
function FileExplorerWidgetComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0);
  }
}
function FileExplorerWidgetComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p-button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onClick", function FileExplorerWidgetComponent_ng_template_27_Template_p_button_onClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r14.uploadFiles());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r1.exportButtonRepoDisabled);
  }
}
function FileExplorerWidgetComponent_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p-button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onClick", function FileExplorerWidgetComponent_ng_template_33_Template_p_button_onClick_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r16.importGithubClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r2.importButtonRepoDisabled);
  }
}
function FileExplorerWidgetComponent_button_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FileExplorerWidgetComponent_button_46_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      ctx_r18.closeAllContextMenus($event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r18.toggleHidden());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function FileExplorerWidgetComponent_button_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FileExplorerWidgetComponent_button_47_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      ctx_r20.closeAllContextMenus($event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r20.toggleHidden());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function FileExplorerWidgetComponent_ng_template_50_ng_container_1_div_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const subfolder_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](subfolder_r26.name);
  }
}
function FileExplorerWidgetComponent_ng_template_50_ng_container_1_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 59)(1, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FileExplorerWidgetComponent_ng_template_50_ng_container_1_div_1_div_5_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](7);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](_r30.show($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function FileExplorerWidgetComponent_ng_template_50_ng_container_1_div_1_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 62)(1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FileExplorerWidgetComponent_ng_template_50_ng_container_1_div_1_ng_template_8_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r37);
      const subfolder_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      ctx_r36.closeAllContextMenus($event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r36.addNewItem(subfolder_r26, "file"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "New file");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FileExplorerWidgetComponent_ng_template_50_ng_container_1_div_1_ng_template_8_Template_div_click_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r37);
      const subfolder_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      ctx_r39.closeAllContextMenus($event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r39.addNewItem(subfolder_r26, "folder"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "New folder");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FileExplorerWidgetComponent_ng_template_50_ng_container_1_div_1_ng_template_8_Template_div_click_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r37);
      const subfolder_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const folder_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      ctx_r41.closeAllContextMenus($event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r41.startEditing(folder_r22, subfolder_r26));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Rename folder");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FileExplorerWidgetComponent_ng_template_50_ng_container_1_div_1_ng_template_8_Template_div_click_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r37);
      const subfolder_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      ctx_r44.closeAllContextMenus($event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r44.deleteFolderClick($event, subfolder_r26));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Delete folder");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
function FileExplorerWidgetComponent_ng_template_50_ng_container_1_div_1_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0);
  }
}
const _c2 = function (a0) {
  return {
    $implicit: a0
  };
};
function FileExplorerWidgetComponent_ng_template_50_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 49)(1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("contextmenu", function FileExplorerWidgetComponent_ng_template_50_ng_container_1_div_1_Template_div_contextmenu_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r47);
      const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](7);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      ctx_r46.closeAllContextMenus($event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](_r30.show($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FileExplorerWidgetComponent_ng_template_50_ng_container_1_div_1_Template_div_click_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r47);
      const subfolder_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      ctx_r48.closeAllContextMenus($event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r48.selectFolder(subfolder_r26));
    })("dblclick", function FileExplorerWidgetComponent_ng_template_50_ng_container_1_div_1_Template_div_dblclick_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r47);
      const subfolder_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const folder_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      ctx_r50.closeAllContextMenus($event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r50.startEditing(folder_r22, subfolder_r26));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, FileExplorerWidgetComponent_ng_template_50_ng_container_1_div_1_ng_container_4_Template, 4, 1, "ng-container", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, FileExplorerWidgetComponent_ng_template_50_ng_container_1_div_1_div_5_Template, 3, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "p-overlayPanel", null, 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, FileExplorerWidgetComponent_ng_template_50_ng_container_1_div_1_ng_template_8_Template, 17, 0, "ng-template", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, FileExplorerWidgetComponent_ng_template_50_ng_container_1_div_1_ng_container_10_Template, 1, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const subfolder_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](53);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("opened", subfolder_r26 === ctx_r27.selectedFolder);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r27.editingItem != subfolder_r26)("ngIfElse", _r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r27.editingItem != subfolder_r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", _r8)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](7, _c2, subfolder_r26));
  }
}
function FileExplorerWidgetComponent_ng_template_50_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, FileExplorerWidgetComponent_ng_template_50_ng_container_1_div_1_Template, 11, 9, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const subfolder_r26 = ctx.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r23.isVisibile(subfolder_r26));
  }
}
function FileExplorerWidgetComponent_ng_template_50_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0);
  }
}
function FileExplorerWidgetComponent_ng_template_50_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, FileExplorerWidgetComponent_ng_template_50_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", _r12);
  }
}
function FileExplorerWidgetComponent_ng_template_50_ng_container_3_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const file_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](file_r55.name);
  }
}
function FileExplorerWidgetComponent_ng_template_50_ng_container_3_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 59)(1, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FileExplorerWidgetComponent_ng_template_50_ng_container_3_div_1_div_3_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](_r59.show($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function FileExplorerWidgetComponent_ng_template_50_ng_container_3_div_1_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 62)(1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FileExplorerWidgetComponent_ng_template_50_ng_container_3_div_1_ng_template_6_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r65);
      const file_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const folder_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      ctx_r64.closeAllContextMenus($event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r64.startEditing(folder_r22, file_r55));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Rename file");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FileExplorerWidgetComponent_ng_template_50_ng_container_3_div_1_ng_template_6_Template_div_click_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r65);
      const file_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      ctx_r68.closeAllContextMenus($event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r68.deleteFileClick($event, file_r55));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Delete file");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
function FileExplorerWidgetComponent_ng_template_50_ng_container_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("contextmenu", function FileExplorerWidgetComponent_ng_template_50_ng_container_3_div_1_Template_div_contextmenu_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r71);
      const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](5);
      const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      ctx_r70.closeAllContextMenus($event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](_r59.show($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FileExplorerWidgetComponent_ng_template_50_ng_container_3_div_1_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r71);
      const file_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      ctx_r72.closeAllContextMenus($event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r72.selectFile(file_r55));
    })("dblclick", function FileExplorerWidgetComponent_ng_template_50_ng_container_3_div_1_Template_div_dblclick_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r71);
      const file_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const folder_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      ctx_r74.closeAllContextMenus($event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r74.startEditing(folder_r22, file_r55));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, FileExplorerWidgetComponent_ng_template_50_ng_container_3_div_1_ng_container_2_Template, 3, 1, "ng-container", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, FileExplorerWidgetComponent_ng_template_50_ng_container_3_div_1_div_3_Template, 3, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "p-overlayPanel", null, 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, FileExplorerWidgetComponent_ng_template_50_ng_container_3_div_1_ng_template_6_Template, 9, 0, "ng-template", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const file_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("opened", file_r55 === ctx_r56.selectedFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r56.editingItem != file_r55)("ngIfElse", _r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r56.editingItem != file_r55);
  }
}
function FileExplorerWidgetComponent_ng_template_50_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, FileExplorerWidgetComponent_ng_template_50_ng_container_3_div_1_Template, 7, 5, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const file_r55 = ctx.$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r25.isVisibile(file_r55));
  }
}
function FileExplorerWidgetComponent_ng_template_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, FileExplorerWidgetComponent_ng_template_50_ng_container_1_Template, 2, 1, "ng-container", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, FileExplorerWidgetComponent_ng_template_50_ng_container_2_Template, 2, 1, "ng-container", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, FileExplorerWidgetComponent_ng_template_50_ng_container_3_Template, 2, 1, "ng-container", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const folder_r22 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", folder_r22.folders);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r9.newItemFolder === folder_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", folder_r22.files);
  }
}
function FileExplorerWidgetComponent_ng_template_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "input", 72, 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function FileExplorerWidgetComponent_ng_template_52_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r80);
      const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r79.editingValue = $event);
    })("blur", function FileExplorerWidgetComponent_ng_template_52_Template_input_blur_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r80);
      const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r81.saveEditing());
    })("keyup.enter", function FileExplorerWidgetComponent_ng_template_52_Template_input_keyup_enter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r80);
      const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r82.saveEditing());
    })("keyup.esc", function FileExplorerWidgetComponent_ng_template_52_Template_input_keyup_esc_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r80);
      const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r83.cancelEditing());
    })("input", function FileExplorerWidgetComponent_ng_template_52_Template_input_input_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r80);
      const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r84.editItemChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("error", ctx_r11.editingItemError);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r11.editingValue);
  }
}
function FileExplorerWidgetComponent_ng_template_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 74)(1, "input", 72, 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function FileExplorerWidgetComponent_ng_template_54_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r87);
      const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r86.newItemValue = $event);
    })("blur", function FileExplorerWidgetComponent_ng_template_54_Template_input_blur_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r87);
      const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r88.saveNewItem());
    })("keyup.enter", function FileExplorerWidgetComponent_ng_template_54_Template_input_keyup_enter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r87);
      const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r89.saveNewItem());
    })("keyup.esc", function FileExplorerWidgetComponent_ng_template_54_Template_input_keyup_esc_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r87);
      const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r90.cancelNewItem());
    })("input", function FileExplorerWidgetComponent_ng_template_54_Template_input_input_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r87);
      const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r91.newItemChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("error", ctx_r13.newItemError);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r13.newItemValue);
  }
}
const _c3 = function () {
  return {
    width: "50vw"
  };
};
const _c4 = function () {
  return {
    width: "22vw"
  };
};
const _c5 = function () {
  return {
    width: "23vw"
  };
};
const _c6 = function () {
  return {
    width: "30vw"
  };
};
class FileExplorerWidgetComponent {
  constructor(confirmationService, fs, pm, authService, messageService, githubService, tutorialService) {
    this.confirmationService = confirmationService;
    this.fs = fs;
    this.pm = pm;
    this.authService = authService;
    this.messageService = messageService;
    this.githubService = githubService;
    this.tutorialService = tutorialService;
    this.project = null;
    this.rootDir = "/";
    this.showHidden = false;
    this.fsroot = src_app_services_fs_service_fs_service__WEBPACK_IMPORTED_MODULE_1__.FsService.EmptyFolder;
    this.editingValue = "";
    this.editingItem = null;
    this.editingItemFolder = null;
    this.editingItemError = false;
    this.newItemValue = "";
    this.newItemType = "file";
    this.newItemFolder = null;
    this.newItemError = false;
    this.selectedFile = null;
    this.selectedFolder = null;
    this.accessToken = '';
    this.loggedIn = false;
    // TODO: decide if use only a variable or two
    this.googleLogin = false;
    this.microsoftLogin = false;
    this.exportVisible = false;
    this.importVisible = false;
    this.exportDropDisabled = false;
    this.exportButtonRepoDisabled = true;
    this.importDropDisabled = false;
    this.importButtonRepoDisabled = true;
    this.onUpdateRoot = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.onSelectFile = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.showHiddenChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.onFileDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.onItemRenamed = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.isBlurred = false;
    this.pm.onProjectChanged.subscribe(project => {
      this.didProjectChanged(project);
    }), this.tutorialService.onTutorialChange.subscribe(tutorial => {
      this.isTutorialShown(tutorial);
    }), this.tutorialService.onTutorialClose.subscribe(() => {
      this.isTutorialShown();
    });
  }
  isTutorialShown(tutorial) {
    console.log("FileExplorerWidgetComponent:isTutorialShown");
    if (typeof tutorial === 'undefined' || tutorial.componentName === "FileExplorerWidgetComponent") {
      this.isBlurred = false;
    } else {
      this.isBlurred = true;
    }
  }
  ngOnInit() {
    this.bindCollapseEvent();
    this.isBlurred = true;
    // Setting import menù options
    this.ImportItems = [{
      label: 'Import from Github',
      icon: 'pi pi-cloud-download',
      command: event => {
        this.closeAllContextMenus(event.originalEvent);
        this.downloadGithub();
      }
    }, {
      label: 'Import from local ',
      icon: 'pi pi-database',
      command: event => {
        this.closeAllContextMenus(event.originalEvent);
        const fileUpload = document.getElementById('fileUpload');
        fileUpload?.click();
      }
    }];
    // Setting export menù options
    this.ExportItems = [{
      label: 'Export on Github',
      icon: 'pi pi-github',
      items: [{
        label: 'Export as archive',
        icon: 'pi pi-folder-open',
        command: event => {
          this.closeAllContextMenus(event.originalEvent);
          this.export('Github-archive');
        }
      }, {
        label: 'Export code',
        icon: 'pi pi-code',
        command: event => {
          this.closeAllContextMenus(event.originalEvent);
          this.export('Github-code'); /*this.visible = true;*/
        }
      }]
    }, {
      label: 'Export on Google Drive',
      icon: 'pi pi-google',
      command: event => {
        this.closeAllContextMenus(event.originalEvent);
        this.signIn();
      }
    }, {
      label: 'Export on One Drive',
      icon: 'pi pi-microsoft',
      command: event => {
        this.closeAllContextMenus(event.originalEvent);
        this.export('Microsoft');
      }
    }, {
      label: 'Save locally ',
      icon: 'pi pi-download',
      command: event => {
        this.closeAllContextMenus(event.originalEvent);
        this.export('Local');
      }
    }];
    this.authService.authState.subscribe(user => {
      this.user = user;
      this.loggedIn = user != null;
      // User is logged. Now it's possible to proceed with token request
      // to access Drive API and then export/upload files on Google Drive
      if (this.googleLogin) {
        this.authService.getAccessToken(_abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_7__.GoogleLoginProvider.PROVIDER_ID).then(accessToken => this.accessToken = accessToken).then(() => this.export('Google'));
      }
    });
  }
  didProjectChanged(project) {
    console.log("FileExplorerWidgetComponent:didProjectChanged");
    this.project = project;
    this.project?.driver.ready().then(ready => {
      this.refreshRoot();
    });
  }
  refreshRoot(onDone) {
    this.project?.driver.scanDirectory(this.rootDir).then(folder => {
      this.fsroot = folder ?? src_app_services_fs_service_fs_service__WEBPACK_IMPORTED_MODULE_1__.FsService.EmptyFolder;
      this.bindCollapseEvent();
      this.onUpdateRoot?.emit(this.fsroot);
      if (onDone) {
        onDone();
      }
    });
  }
  bindCollapseEvent() {
    setTimeout(() => {
      const rows = document.getElementsByClassName("collapse-toggle");
      for (let i = 0; i < rows.length; i++) {
        if (!rows[i].classList.contains("bound")) {
          let row = rows[i];
          row.addEventListener("click", event => {
            this.handleClickEvent(event);
          });
          row.classList.add("bound");
        }
      }
    }, 0);
  }
  handleClickEvent(event) {
    event.preventDefault();
    event.stopPropagation();
    const row = event.target;
    let newParent = row;
    let safeCount = 0;
    do {
      newParent = newParent.parentElement;
      safeCount++;
    } while (!newParent.classList.contains("tal-folder-subtree") && safeCount < 10);
    if (safeCount < 10) {
      newParent.classList.toggle("collapsed");
    }
  }
  closeAllContextMenus(event) {
    event.preventDefault();
    console.log("EVENT: \n", event);
    if (this.panels) {
      this.panels.forEach(p => p.hide());
    }
  }
  selectFile(file) {
    console.log('selectFile', file);
    this.project?.driver.readFile(file.path).then(content => {
      file.content = content ?? "";
      this.selectedFile = file;
      this.onSelectFile?.emit(file);
    });
  }
  selectFolder(folder) {
    if (this.selectedFolder == folder) {
      this.selectedFolder == null;
    }
  }
  openSettings() {
    if (!this.showHidden) {
      this.showHidden = true;
      this.refreshRoot(() => {
        this.openSettings();
      });
    }
    console.log("openSettings");
    let projectFolder = this.fsroot.folders.find(item => {
      return item.path + "/" == this.project?.config?.DIR_PROJECT;
    });
    if (!projectFolder) {
      return;
    }
    console.log("openSettings:projectFolder:", projectFolder);
    let configFile = projectFolder.files.find(file => {
      return file.path == this.project?.config?.CONFIG_PATH;
    });
    if (!configFile) {
      return;
    }
    console.log("openSettings:configFile:", configFile);
    this.selectFile(configFile);
  }
  toggleHidden() {
    this.showHidden = !this.showHidden;
    this.refreshRoot();
  }
  isVisibile(fsitem) {
    let isHidden = fsitem.name.startsWith('.');
    return this.showHidden || !this.showHidden && !isHidden;
  }
  /** EDITING METHODS  **/
  startEditing(folder, item) {
    console.log("START EDITING");
    console.log("FOLDER: ", folder);
    console.log("ITEM: ", item);
    this.editingItem = item;
    this.editingValue = item.name; //new_name
    this.editingItemFolder = folder;
    this.editingItemError = false;
    setTimeout(() => {
      if (this.nameEditingElement) {
        this.nameEditingElement.nativeElement.focus();
      }
    }, 0);
  }
  saveEditing() {
    if (!this.editingItemError) {
      if (this.editingItem) {
        this.editingValue = this.editingValue.trim();
        if (this.editingValue.length > 0) {
          // change name item
          this.editingItem.name = this.editingValue;
          // create new path item
          const directoryList = this.editingItem.path.split('/');
          if (directoryList.length <= 1) {
            this.editingItem.path = "/" + this.editingValue;
          }
          const newpath = directoryList.slice(0, -1) // Remove last element ( previous name )
          .concat(this.editingValue) // Add new name at the end
          .join('/'); // Rebuild the path
          // Change path item in the FS
          this.project?.driver.renameItem(this.editingItem.path, newpath).then(() => {
            this.refreshRoot();
          });
          this.onItemRenamed.emit({
            "oldpath": this.editingItem.path
          });
          // Change path item
          this.editingItem.path = newpath;
          this.onUpdateRoot?.emit(this.fsroot);
        }
      }
    }
    this.cancelEditing();
  }
  cancelEditing() {
    this.editingItem = null;
    this.editingValue = "";
    this.editingItemFolder = null;
  }
  editItemChange() {
    this.editingItemError = false;
    if (this.editingItemFolder) {
      const existingFile = this.editingItemFolder.files.find(f => f.name === this.editingValue);
      const existingFolder = this.editingItemFolder.folders.find(f => f.name === this.editingValue);
      if (existingFile || existingFolder) {
        this.editingItemError = true;
      }
    }
  }
  /***************/
  /** DELETE METHODS **/
  deleteFileClick(event, file) {
    if (!this.fsroot) {
      return;
    }
    if (event.target) {
      this.confirmationService.confirm({
        target: event.target,
        message: 'Are you sure you want to delete this file?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          //confirm action
          this.deleteFile(this.fsroot, file);
        },
        reject: () => {
          //reject action
        },
        key: 'dialogDelete'
      });
    }
  }
  deleteFile(currentFolder, file) {
    this.project?.driver.delete(file.path).then(() => {
      this.refreshRoot();
      this.onFileDeleted.emit(file.path);
    });
  }
  importGithubClick(event) {
    if (event.target) {
      this.confirmationService.confirm({
        target: event.target,
        message: 'Are you sure you want to proceed with the import?\n\nNOTE: Make sure you have saved or exported the current project otherwise you will lose any changes.',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          //confirm action
          this.downloadFiles();
        },
        reject: () => {
          //reject action
        },
        key: 'dialogImport'
      });
    }
  }
  deleteFolderClick(event, folder) {
    if (event.target) {
      this.confirmationService.confirm({
        target: event.target,
        message: 'Are you sure you want to delete this folder? All files and folders it contains will be deleted.',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          //confirm action
          this.deleteFolder(this.fsroot, folder);
        },
        reject: () => {
          //reject action
        },
        key: 'dialogDelete'
      });
    }
  }
  deleteFolder(currentFolder, folder) {
    //Delete all files in the folder
    folder.files.forEach(item => {
      this.project?.driver.delete(item.path).then(() => {
        this.refreshRoot();
        this.onFileDeleted.emit(item.path);
      });
    });
    //Delete all subfolders recursively
    if (folder.folders.length !== 0) {
      folder.folders.forEach(item => {
        this.deleteFolder(item, item);
        this.project?.driver.delete(folder.path).then(() => {
          this.refreshRoot();
        });
      });
    } else {
      this.project?.driver.delete(folder.path).then(() => {
        this.refreshRoot();
      });
    }
  }
  /***************/
  /** CREATE METHODS **/
  syncFilesystem(folder) {
    setTimeout(() => {
      this.refreshRoot();
    }, 0);
  }
  addNewItem(folder, type) {
    this.newItemValue = "";
    this.newItemFolder = folder;
    this.newItemType = type;
    this.newItemError = false;
    setTimeout(() => {
      if (this.newItemNameElement) {
        this.newItemNameElement.nativeElement.focus();
      }
    }, 0);
  }
  cancelNewItem() {
    this.newItemValue = "";
    this.newItemFolder = null;
  }
  saveNewItem() {
    if (!this.newItemError) {
      this.newItemValue = this.newItemValue.trim();
      if (this.newItemValue.length > 0) {
        if (this.newItemFolder) {
          if (this.newItemType === "file") {
            let path = this.newItemFolder.path + "/" + this.newItemValue;
            this.project?.driver.writeFile(path, "").then(() => {
              this.refreshRoot();
            });
          } else {
            // Double slash on path when folder is created under root does not create problems
            let path = this.newItemFolder.path + "/" + this.newItemValue;
            console.log(path);
            this.project?.driver.createDirectory(path).then(() => {
              this.refreshRoot();
            });
            this.newItemFolder.folders.push({
              name: this.newItemValue,
              path: "./" + this.newItemValue,
              files: [],
              folders: []
            });
          }
        }
      }
    }
    this.newItemValue = "";
    this.newItemFolder = null;
  }
  newItemChange() {
    this.newItemError = false;
    if (this.newItemFolder) {
      const existingFile = this.newItemFolder.files.find(f => f.name === this.newItemValue);
      const existingFolder = this.newItemFolder.folders.find(f => f.name === this.newItemValue);
      if (existingFile || existingFolder) {
        this.newItemError = true;
      }
    }
  }
  /***************/
  upload(event) {
    var _this = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!(event.target instanceof HTMLInputElement)) {
        return false;
      }
      let target = event.target;
      if (!target.files || target.files.length == 0) {
        return false;
      }
      if (target.files.length == 1 && target.files[0].name.endsWith('.tal.tar')) {
        let content = yield target.files[0].arrayBuffer();
        yield _this.importProject(content);
      } else {
        for (let i = 0; i < target.files.length; i++) {
          let file = target.files[i];
          let content = yield file.arrayBuffer();
          console.log("upload:content:", new Uint8Array(content));
          let path = (!_this.selectedFolder ? "/" : _this.selectedFolder.path) + file.name;
          console.log('upload:', path, content);
          yield _this.project?.driver.writeFile(path, content);
        }
      }
      _this.refreshRoot();
      return true;
    })();
  }
  importProject(tarball) {
    var _this2 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      src_app_services_fs_service_fs_service__WEBPACK_IMPORTED_MODULE_1__.Tar.unpack(tarball, /*#__PURE__*/function () {
        var _ref = (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (files, folders) {
          console.log("extractTar:unpack:files", files);
          console.log("extractTar:unpack:folders", folders);
          for (var idx in folders) {
            console.log("extractTar:createDirectory:");
            let folder = folders[idx];
            let path = folder.path;
            let pathMOD = path.substring(path.indexOf("/"));
            console.log("extractTar:createDirectory:", pathMOD);
            yield _this2.project?.driver.createDirectory(pathMOD);
          }
          console.log("extractTar:createDirectory:DONE");
          for (var idx in files) {
            console.log("extractTar:writeFile:");
            let file = files[idx];
            let path = file.path;
            let pathMOD = path.substring(path.indexOf("/"));
            let content = file.content;
            console.log("extractTar:writeFile:", path, content);
            yield _this2.project?.driver.writeFile(pathMOD, content);
          }
          console.log("extractTar:writeFile:DONE");
          _this2.refreshRoot();
        });
        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
      console.log("import:data:", tarball);
      return true;
    })();
  }
  export(mode) {
    if (mode != 'Github-code') {
      let items = this.fs.treeToList(this.fsroot);
      if (items.length == 0) {
        console.log("export: No files found to be exported");
      }
      console.log("export:items:", items);
      src_app_services_fs_service_fs_service__WEBPACK_IMPORTED_MODULE_1__.Tar.pack(items, tarball => {
        let tarname = "tal-project-" + Date.now() + ".tal.tar";
        console.log('export:tarball:', tarname, tarball);
        switch (mode) {
          case 'Local':
            this.triggerDownload(tarname, tarball, "application/x-tar");
            break;
          case 'Google':
            this.uploadGoogleDrive(tarname, tarball, "application/x-tar");
            break;
          case 'Microsoft':
            this.uploadOneDrive(tarname, tarball, "application/x-tar");
            break;
          case 'Github-archive':
            this.uploadGitHub('Github-archive', tarname, tarball, "application/x-tar");
            break;
          default:
            break;
        }
      });
    } else {
      this.uploadGitHub('Github-code');
    }
  }
  //----------------------------------------------//
  //------------------- GITHUB -------------------//
  //----------------------------------------------//
  popupwindow(url, title, w, h) {
    var left = screen.width / 2 - w / 2;
    var top = screen.height / 2 - h / 2;
    return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
  }
  uploadGitHub(mode, filename, content, mime = "application/octet-stream") {
    console.log("GitHub");
    var url = `https://github.com/login/oauth/authorize?client_id=8fd3343f822c2429ad95&scope=user%20repo`;
    var popupWindow = this.popupwindow(url, "GitHub Login", 400, 530);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("username");
    var codeParam = "";
    var self = this;
    const checkURLChange = setInterval(function () {
      if (!popupWindow || popupWindow.closed) {
        clearInterval(checkURLChange);
        console.log('Popup window closed.');
      } else if (popupWindow.location.href.indexOf("github.com") === -1) {
        //url does not contains "github.com"
        console.log('URL in popup window changed:', popupWindow.location.href);
        const queryString = popupWindow.location.search;
        const urlParams = new URLSearchParams(queryString);
        codeParam = urlParams.get("code");
        console.log("CODE:", codeParam);
        popupWindow.close();
        if (codeParam && localStorage.getItem("accessToken") === null) {
          if (mode === 'Github-archive') {
            self.githubService.getAccessToken(codeParam).then(() => self.githubService.getUserData()).then(() => self.githubService.getRepository('TALightProject-Archives')).then(data => {
              if (data.message == "Not Found") {
                self.githubService.createRepository('TALightProject-Archives').then(() => {
                  if (filename && content) {
                    self.uploadFile('TALightProject-Archives', filename, content, mime);
                  }
                });
              } else {
                if (filename && content) {
                  self.uploadFile('TALightProject-Archives', filename, content, mime);
                }
              }
            });
          } else {
            self.githubService.getAccessToken(codeParam).then(() => self.githubService.getUserData()).then(() => self.githubService.getRepoList()).then(data => {
              let condition = repo => repo.name == 'TALightProject-Archives';
              let isPresentRepo = data.findIndex(condition);
              if (isPresentRepo !== -1) {
                data.splice(isPresentRepo, 1);
              }
              self.reposList = data;
            }).then(() => self.newRepoOwner = localStorage.getItem("username")).then(() => {
              self.newRepoName = '';
              self.selectedRepo = undefined;
              self.exportVisible = true;
              self.detectInput();
            });
          }
        }
      }
    }, 1000); // Check every second until condition on the url is satisfied
  }
  downloadGithub() {
    console.log("GitHub");
    var url = `https://github.com/login/oauth/authorize?client_id=8fd3343f822c2429ad95&scope=user%20repo`;
    var popupWindow = this.popupwindow(url, "GitHub Login", 400, 530);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("username");
    var codeParam = "";
    var self = this;
    const checkURLChange = setInterval(function () {
      if (!popupWindow || popupWindow.closed) {
        clearInterval(checkURLChange);
        console.log('Popup window closed.');
      } else if (popupWindow.location.href.indexOf("github.com") === -1) {
        //url does not contains "github.com"
        console.log('URL in popup window changed:', popupWindow.location.href);
        const queryString = popupWindow.location.search;
        const urlParams = new URLSearchParams(queryString);
        codeParam = urlParams.get("code");
        console.log("CODE:", codeParam);
        popupWindow.close();
        if (codeParam && localStorage.getItem("accessToken") === null) {
          self.githubService.getAccessToken(codeParam).then(() => self.githubService.getUserData()).then(() => self.githubService.getRepoList()).then(data => {
            let condition = repo => repo.name == 'TALightProject-Archives';
            let isPresentRepo = data.findIndex(condition);
            if (isPresentRepo !== -1) {
              data.splice(isPresentRepo, 1);
            }
            self.reposList = data;
          }).then(() => {
            self.selectedRepo = '';
            self.importButtonRepoDisabled = true;
            self.importVisible = true;
          });
        }
      }
    }, 1000); // Check every second until condition on the url is satisfied
  }
  uploadFiles() {
    this.exportVisible = false;
    let items = this.fs.treeToList(this.fsroot);
    let tree = [];
    while (items.length !== 0) {
      let item = items.shift();
      let file = item;
      let content;
      if (file.content) {
        console.log("Process:file", file);
        if (file.content instanceof ArrayBuffer) {
          content = new TextDecoder().decode(file.content);
        } else {
          content = file.content;
        }
        tree.push({
          path: file.path.slice(1),
          mode: '100644',
          type: 'blob',
          content: content
        });
      }
    }
    console.log("TREE: ", tree);
    let parentCommitsha;
    let repository;
    if (this.exportDropDisabled) {
      repository = this.newRepoName;
      this.githubService.createRepository(repository).then(() => this.githubService.getReference(repository)).then(data => {
        parentCommitsha = data.object.sha;
      }).then(() => this.githubService.createTree(repository, tree)).then(data => this.githubService.createCommit(repository, data.sha, parentCommitsha)).then(data => this.githubService.updateReference(repository, data.sha)).then(data => {
        // Show notify on screen
        if (!data.error) {
          this.showToastMessage('success', 'Upload successful');
        } else {
          this.showToastMessage('error', 'Upload failed');
        }
      });
    } else {
      repository = this.selectedRepo.name;
      this.githubService.getReference(repository).then(data => {
        parentCommitsha = data.object.sha;
      }).then(() => this.githubService.createTree(repository, tree)).then(data => this.githubService.createCommit(repository, data.sha, parentCommitsha)).then(data => this.githubService.updateReference(repository, data.sha)).then(data => {
        // Show notify on screen
        if (!data.error) {
          this.showToastMessage('success', 'Upload successful');
        } else {
          this.showToastMessage('error', 'Upload failed');
        }
      });
    }
  }
  replaceProject(data) {
    // Before delete files and folders from root, then import project from Github
    this.project?.driver.scanDirectory('/').then(folder => {
      this.fsroot = folder ?? src_app_services_fs_service_fs_service__WEBPACK_IMPORTED_MODULE_1__.FsService.EmptyFolder;
      this.deleteFolder(this.fsroot, this.fsroot);
      this.refreshRoot();
    }).then(() => this.importProject(data));
  }
  downloadFiles() {
    var _this3 = this;
    this.importVisible = false;
    this.githubService.getRepositoryAsTar(this.selectedRepo.name).then(url => this.githubService.getTar(url)).then( /*#__PURE__*/function () {
      var _ref2 = (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response) {
        let data = yield response.arrayBuffer();
        _this3.replaceProject(data);
      });
      return function (_x3) {
        return _ref2.apply(this, arguments);
      };
    }());
  }
  uploadFile(repository, filename, content, mime) {
    var _this4 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("UPLOAD FILE");
      // Prepare data to upload on GitHub
      var binary = '';
      var bytes = new Uint8Array(content);
      var len = bytes.byteLength;
      for (var i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      var bodyObj = JSON.stringify({
        "content": binary
      });
      yield fetch("http://localhost:4000/uploadFile?username=" + localStorage.getItem("username") + "&filename=" + filename + "&repository=" + repository, {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("accessToken"),
          "Content-Type": "application/json"
        },
        body: bodyObj
      }).then(response => {
        return response.json();
      }).then(data => {
        console.log("UPLOAD RESPONSE:", data);
        // Show notify on screen
        if (data.commit) {
          _this4.showToastMessage('success', 'Upload successful');
        } else {
          _this4.showToastMessage('error', 'Upload failed');
        }
      });
    })();
  }
  enableButton(mode) {
    if (mode === 'export') {
      this.exportButtonRepoDisabled = false;
    } else {
      this.importButtonRepoDisabled = false;
    }
  }
  detectInput() {
    this.repoNameHelp = "Enter new repository name.";
    setTimeout(() => {
      let repoLabel = document.getElementById('repoName-help');
      repoLabel.style.color = "black";
    }, 0);
    if (this.newRepoName.length > 0) {
      this.exportDropDisabled = true;
      let condition = repo => repo.name == this.newRepoName;
      let repoFound = this.reposList.findIndex(condition);
      if (repoFound !== -1) {
        this.repoNameHelp = "The repository '" + this.newRepoName + "' already exists on this account.";
        setTimeout(() => {
          let repoLabel = document.getElementById('repoName-help');
          repoLabel.style.color = "red";
        }, 0);
        this.exportButtonRepoDisabled = true;
      } else if (this.newRepoName === 'TALightProject-Archives') {
        this.repoNameHelp = "The repository '" + this.newRepoName + "' is only for uploading archives.";
        setTimeout(() => {
          let repoLabel = document.getElementById('repoName-help');
          repoLabel.style.color = "red";
        }, 0);
        this.exportButtonRepoDisabled = true;
      } else {
        this.repoNameHelp = "Enter new repository name.";
        setTimeout(() => {
          let repoLabel = document.getElementById('repoName-help');
          repoLabel.style.color = "black";
        }, 0);
        this.exportButtonRepoDisabled = false;
      }
    } else {
      this.exportDropDisabled = false;
      if (this.selectedRepo == undefined) {
        this.exportButtonRepoDisabled = true;
      }
    }
  }
  signIn() {
    // Google sign-in
    // asl-google-signin-button is a wrapper of a clickable div which is responsible to open sign-in popup
    this.googleLogin = true; // -> TODO: Verify when set tt/ff this flag
    let element = document.getElementById("g_upload")?.children[0].children[0].children[0];
    element.click();
  }
  uploadGoogleDrive(filename, content, mime = "application/octet-stream") {
    var _this5 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var folderId;
      var fileMetadata;
      var data;
      var response;
      // Search for TALightProjects Folder
      response = yield fetch("https://www.googleapis.com/drive/v3/files?q=mimeType='application/vnd.google-apps.folder' and name='TALightProjects'", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + _this5.accessToken
        }
      });
      data = yield response.json();
      if (data.files.length == 0) {
        // Create TALightProjects Folder
        fileMetadata = {
          name: 'TALightProjects',
          mimeType: 'application/vnd.google-apps.folder'
        };
        const response = yield fetch("https://www.googleapis.com/drive/v3/files", {
          method: "POST",
          headers: {
            Authorization: "Bearer " + _this5.accessToken,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(fileMetadata)
        });
        data = yield response.json();
        folderId = data.id;
      } else {
        folderId = data.files[0].id;
      }
      // Upload file under TALightProjects Folder on Drive
      var formData = new FormData();
      fileMetadata = {
        name: filename,
        parents: [folderId]
      };
      formData.append("metadata", new Blob([JSON.stringify(fileMetadata)], {
        type: "application/json"
      }));
      formData.append("data", new Blob([content], {
        type: mime
      }), filename);
      const res = yield fetch("https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: "Bearer " + _this5.accessToken
        }
      });
      data = yield res.json();
      // Reset user connection params
      _this5.user = undefined;
      _this5.accessToken = '';
      // Show notify on screen
      if (!data.error) {
        _this5.showToastMessage('success', 'Upload successful');
      } else {
        _this5.showToastMessage('error', 'Upload failed');
      }
      _this5.googleLogin = false;
    })();
  }
  showToastMessage(severity, detail) {
    this.messageService.add({
      key: 'tl',
      severity: severity,
      summary: 'Info',
      detail: detail
    });
  }
  uploadOneDrive(filename, content, mime = "application/octet-stream") {
    var _this6 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6.microsoftLogin = true;
      const response = yield _this6.authService.signIn(_abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_7__.MicrosoftLoginProvider.PROVIDER_ID);
      var res;
      var accessToken = response.authToken;
      // NOTE: With OneDrive it is not necessary to check if the TALightsProjects folder
      // exists and possibly create it because this is done automatically by the service
      // Prepare data for request
      var formData = new FormData();
      var fileMetadata = {
        name: filename
      };
      formData.append("metadata", new Blob([JSON.stringify(fileMetadata)], {
        type: "application/json"
      }));
      formData.append("content", new Blob([content], {
        type: mime
      }), filename);
      res = yield fetch("https://graph.microsoft.com/v1.0/me/drive/root:/TALightsProjects/" + filename + ":/content", {
        method: "PUT",
        body: content,
        headers: {
          Authorization: "Bearer " + accessToken,
          'Content-Type': mime
        }
      });
      const data = yield res.json();
      _this6.microsoftLogin = false;
      // Show notify on screen
      if (!data.error) {
        _this6.showToastMessage('success', 'Upload successful');
      } else {
        _this6.showToastMessage('error', 'Upload failed');
      }
    })();
  }
  triggerDownload(filename, content, mime = "application/octet-stream") {
    let a = document.createElement("a");
    const blob = new Blob([content], {
      type: mime
    });
    let url = window.URL.createObjectURL(blob);
    a.style.display = "none";
    a.download = filename;
    a.href = url;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }
}
FileExplorerWidgetComponent.ɵfac = function FileExplorerWidgetComponent_Factory(t) {
  return new (t || FileExplorerWidgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_8__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_fs_service_fs_service__WEBPACK_IMPORTED_MODULE_1__.FsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_project_manager_service_project_manager_service__WEBPACK_IMPORTED_MODULE_3__.ProjectManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_7__.SocialAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_8__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_github_api_service_github_api_service__WEBPACK_IMPORTED_MODULE_4__.GithubApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_tutorial_service_tutorial_service__WEBPACK_IMPORTED_MODULE_5__.TutorialService));
};
FileExplorerWidgetComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: FileExplorerWidgetComponent,
  selectors: [["tal-file-explorer-widget"]],
  viewQuery: function FileExplorerWidgetComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_9__.OverlayPanel, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.nameEditingElement = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.newItemNameElement = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.panels = _t);
    }
  },
  outputs: {
    onUpdateRoot: "onUpdateRoot",
    onSelectFile: "onSelectFile",
    showHiddenChanged: "showHiddenChanged",
    onFileDeleted: "onFileDeleted",
    onItemRenamed: "onItemRenamed"
  },
  decls: 58,
  vars: 35,
  consts: [[1, "tal-editor-files-tree"], [1, "tal-editor-files-header"], [1, "tal-editor-files-left-bar"], ["pButton", "", "icon", "pi pi-folder", "pTooltip", "New folder", 1, "tal-square-button", 3, "click"], ["pButton", "", "icon", "pi pi-file", "pTooltip", "New file", 1, "tal-square-button", 3, "click"], [1, "tal-editor-files-right-bar"], ["pButton", "", "icon", "pi pi-sync", "pTooltip", "Refresh", 1, "tal-square-button", 3, "click"], [1, "tal-editor-files-body"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["header", "Choose or create a repository..", 3, "visible", "visibleChange"], ["htmlFor", "exportRepoList", 2, "margin-top", "20px", "font-weight", "bold"], [1, "flex", "flex-column", "gap-2", 2, "margin-top", "10px"], ["id", "exportRepoList", "appendTo", "body", "placeholder", "Select a repository", "optionLabel", "full_name", 3, "disabled", "options", "ngModel", "onChange", "ngModelChange"], [1, "flex", "flex-column", "gap-2"], ["htmlFor", "repoName", 2, "margin-top", "20px", "font-weight", "bold"], ["pInputText", "", "disabled", "", 3, "ngModel", "ngModelChange"], [2, "font-size", "xx-large"], ["pInputText", "", "id", "repoName", 3, "ngModel", "input", "ngModelChange"], ["id", "repoName-help"], ["pTemplate", "footer"], ["header", "Choose a repository..", 3, "visible", "visibleChange"], ["htmlFor", "importRepoList", 2, "margin-top", "20px", "font-weight", "bold"], ["id", "importRepoList", "appendTo", "body", "placeholder", "Select a repository", "optionLabel", "full_name", 3, "disabled", "options", "ngModel", "onChange", "ngModelChange"], [1, "tal-editor-files-footer"], ["pButton", "", "icon", "pi pi-save", "pTooltip", "Save/Export", 1, "p-button-secondary", "tal-square-button", 3, "click"], ["id", "g_upload", 1, "gbtn"], [3, "model", "popup"], ["menuExport", ""], ["pButton", "", "icon", "pi pi-upload", "pTooltip", "Upload/Import", 1, "p-button-secondary", "tal-square-button", 3, "click"], ["id", "fileUpload", "type", "file", 2, "display", "none", 3, "change"], ["fileUpload", ""], ["menuImport", ""], ["pButton", "", "icon", "pi pi-eye", "class", "tal-square-button", "pTooltip", "Hide hidden files", 3, "click", 4, "ngIf"], ["pButton", "", "icon", "pi pi-eye-slash", "class", "tal-square-button", "pTooltip", "Show hidden files", 3, "click", 4, "ngIf"], ["pButton", "", "icon", "pi pi-cog", "pTooltip", "Settings", 1, "tal-square-button", 3, "click"], ["position", "top-left", "key", "tl"], ["TalFolder", ""], ["ItemEditingTemplate", ""], ["NewItemTemplate", ""], ["key", "dialogDelete", "acceptLabel", "Yes, delete it", "acceptIcon", "pi pi-trash", "rejectLabel", "No, keep it"], ["key", "dialogImport", "acceptLabel", "Yes, I'll proceed", "acceptIcon", "pi pi-file-import", "rejectLabel", "No, maybe later"], ["id", "exportRepoButton", "icon", "pi pi-check", "label", "Ok", 3, "disabled", "onClick"], ["id", "importRepoButton", "icon", "pi pi-check", "label", "Ok", 3, "disabled", "onClick"], ["pButton", "", "icon", "pi pi-eye", "pTooltip", "Hide hidden files", 1, "tal-square-button", 3, "click"], ["pButton", "", "icon", "pi pi-eye-slash", "pTooltip", "Show hidden files", 1, "tal-square-button", 3, "click"], [1, "tal-folder"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "tal-folder-subtree", 4, "ngIf"], [1, "tal-folder-subtree"], [1, "tal-folder-row", 3, "contextmenu"], [1, "tal-folder-title", "collapse-toggle", 3, "click", "dblclick"], [1, "pi", "pi-chevron-down"], [4, "ngIf", "ngIfElse"], ["class", "tal-row-settings", 4, "ngIf"], ["folderOverlayPanel", ""], ["pTemplate", ""], [1, "tal-subfolder"], [1, "pi", "pi-folder"], [1, "tal-row-settings"], [1, "tal-row-button", 3, "click"], [1, "pi", "pi-ellipsis-h"], [1, "tal-contextmenu-container"], [1, "tal-contextmenu-item", 3, "click"], [1, "pi", "pi-plus"], [1, "pi", "pi-pencil"], [1, "pi", "pi-trash"], [4, "ngTemplateOutlet"], ["class", "tal-file", 3, "opened", "contextmenu", 4, "ngIf"], [1, "tal-file", 3, "contextmenu"], [1, "tal-file-title", 3, "click", "dblclick"], ["fileOverlayPanel", ""], ["type", "text", 1, "tal-item-input", 3, "ngModel", "ngModelChange", "blur", "keyup.enter", "keyup.esc", "input"], ["nameEditing", ""], [1, "tal-new-item"], ["newItemName", ""]],
  template: function FileExplorerWidgetComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FileExplorerWidgetComponent_Template_button_click_3_listener($event) {
        ctx.closeAllContextMenus($event);
        return ctx.addNewItem(ctx.fsroot, "folder");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FileExplorerWidgetComponent_Template_button_click_4_listener($event) {
        ctx.closeAllContextMenus($event);
        return ctx.addNewItem(ctx.fsroot, "file");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 5)(6, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FileExplorerWidgetComponent_Template_button_click_6_listener($event) {
        ctx.closeAllContextMenus($event);
        return ctx.syncFilesystem(ctx.fsroot);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, FileExplorerWidgetComponent_ng_container_8_Template, 1, 0, "ng-container", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "p-dialog", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("visibleChange", function FileExplorerWidgetComponent_Template_p_dialog_visibleChange_9_listener($event) {
        return ctx.exportVisible = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Repository list:");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 11)(13, "p-dropdown", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onChange", function FileExplorerWidgetComponent_Template_p_dropdown_onChange_13_listener() {
        return ctx.enableButton("export");
      })("ngModelChange", function FileExplorerWidgetComponent_Template_p_dropdown_ngModelChange_13_listener($event) {
        return ctx.selectedRepo = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 13)(15, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Repository name:");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "tr")(18, "td")(19, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function FileExplorerWidgetComponent_Template_input_ngModelChange_19_listener($event) {
        return ctx.newRepoOwner = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "td")(21, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, " / ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "td")(24, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("input", function FileExplorerWidgetComponent_Template_input_input_24_listener() {
        return ctx.detectInput();
      })("ngModelChange", function FileExplorerWidgetComponent_Template_input_ngModelChange_24_listener($event) {
        return ctx.newRepoName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "small", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, FileExplorerWidgetComponent_ng_template_27_Template, 1, 1, "ng-template", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "p-dialog", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("visibleChange", function FileExplorerWidgetComponent_Template_p_dialog_visibleChange_28_listener($event) {
        return ctx.importVisible = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "label", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Repository list:");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 11)(32, "p-dropdown", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onChange", function FileExplorerWidgetComponent_Template_p_dropdown_onChange_32_listener() {
        return ctx.enableButton("import");
      })("ngModelChange", function FileExplorerWidgetComponent_Template_p_dropdown_ngModelChange_32_listener($event) {
        return ctx.selectedRepo = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, FileExplorerWidgetComponent_ng_template_33_Template, 1, 1, "ng-template", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 23)(35, "div", 2)(36, "button", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FileExplorerWidgetComponent_Template_button_click_36_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r92);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](39);
        return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](_r3.toggle($event));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](37, "asl-google-signin-button", 25)(38, "p-tieredMenu", 26, 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "button", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FileExplorerWidgetComponent_Template_button_click_40_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r92);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](44);
        return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](_r5.toggle($event));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "input", 29, 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function FileExplorerWidgetComponent_Template_input_change_41_listener($event) {
        return ctx.upload($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](43, "p-tieredMenu", 26, 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](46, FileExplorerWidgetComponent_button_46_Template, 1, 0, "button", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](47, FileExplorerWidgetComponent_button_47_Template, 1, 0, "button", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "button", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FileExplorerWidgetComponent_Template_button_click_48_listener($event) {
        ctx.closeAllContextMenus($event);
        return ctx.openSettings();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](49, "p-toast", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](50, FileExplorerWidgetComponent_ng_template_50_Template, 4, 3, "ng-template", null, 36, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](52, FileExplorerWidgetComponent_ng_template_52_Template, 2, 3, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](54, FileExplorerWidgetComponent_ng_template_54_Template, 3, 3, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](56, "p-confirmDialog", 39)(57, "p-confirmDialog", 40);
    }
    if (rf & 2) {
      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](51);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("blur", ctx.isBlurred);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", _r8)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](29, _c2, ctx.fsroot));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](31, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("visible", ctx.exportVisible);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.exportDropDisabled)("options", ctx.reposList)("ngModel", ctx.selectedRepo);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](32, _c4));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.newRepoOwner);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](33, _c5));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.newRepoName);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.repoNameHelp);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](34, _c6));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("visible", ctx.importVisible);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.importDropDisabled)("options", ctx.reposList)("ngModel", ctx.selectedRepo);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("model", ctx.ExportItems)("popup", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("model", ctx.ImportItems)("popup", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showHidden);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.showHidden);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgTemplateOutlet, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_12__.ConfirmDialog, primeng_button__WEBPACK_IMPORTED_MODULE_13__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_13__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_8__.PrimeTemplate, primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_9__.OverlayPanel, primeng_tieredmenu__WEBPACK_IMPORTED_MODULE_14__.TieredMenu, primeng_tooltip__WEBPACK_IMPORTED_MODULE_15__.Tooltip, primeng_dialog__WEBPACK_IMPORTED_MODULE_16__.Dialog, primeng_inputtext__WEBPACK_IMPORTED_MODULE_17__.InputText, primeng_toast__WEBPACK_IMPORTED_MODULE_18__.Toast, primeng_dropdown__WEBPACK_IMPORTED_MODULE_19__.Dropdown, _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_7__.GoogleSigninButtonDirective],
  styles: [".blur[_ngcontent-%COMP%] {\n  position: relative;\n  background-size: cover;\n  position: relative;\n  overflow: hidden;\n  filter: blur(10px); \n  -webkit-backdrop-filter: blur(3px); \n  backdrop-filter: blur(100%);\n  \n  pointer-events: none;\n  \n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.a[_ngcontent-%COMP%] {\n  color: red;\n  pointer-events: auto;\n  -webkit-user-select: auto;\n          user-select: auto;\n}\n\n.tal-editor-files-tree[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  background: var(--surface-50);\n  display: flex;\n  flex-direction: column;\n}\n\n.tal-editor-files-tree[_ngcontent-%COMP%]   .tal-editor-files-header[_ngcontent-%COMP%], .tal-editor-files-tree[_ngcontent-%COMP%]   .tal-editor-files-footer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  padding: 5px;\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\n.tal-editor-files-tree[_ngcontent-%COMP%]   .tal-editor-files-header[_ngcontent-%COMP%]   .tal-editor-files-left-bar[_ngcontent-%COMP%], .tal-editor-files-tree[_ngcontent-%COMP%]   .tal-editor-files-footer[_ngcontent-%COMP%]   .tal-editor-files-left-bar[_ngcontent-%COMP%] {\n  flex-wrap: nowrap;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\n\n.tal-editor-files-tree[_ngcontent-%COMP%]   .tal-editor-files-header[_ngcontent-%COMP%]   .tal-editor-files-left-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .tal-editor-files-tree[_ngcontent-%COMP%]   .tal-editor-files-footer[_ngcontent-%COMP%]   .tal-editor-files-left-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.tal-editor-files-tree[_ngcontent-%COMP%]   .tal-editor-files-header[_ngcontent-%COMP%]   .tal-editor-files-right-bar[_ngcontent-%COMP%], .tal-editor-files-tree[_ngcontent-%COMP%]   .tal-editor-files-footer[_ngcontent-%COMP%]   .tal-editor-files-right-bar[_ngcontent-%COMP%] {\n  flex-wrap: nowrap;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\n\n.tal-editor-files-tree[_ngcontent-%COMP%]   .tal-editor-files-header[_ngcontent-%COMP%]   .tal-editor-files-right-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .tal-editor-files-tree[_ngcontent-%COMP%]   .tal-editor-files-footer[_ngcontent-%COMP%]   .tal-editor-files-right-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.tal-editor-files-tree[_ngcontent-%COMP%]   .tal-editor-files-body[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  overflow-y: scroll;\n}\n\ndiv.tal-folder-row[_ngcontent-%COMP%], div.tal-file[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 0 0.2rem;\n  margin: 0.2rem 0;\n  border-radius: 0.2rem;\n  cursor: pointer;\n}\n\ndiv.tal-folder-row[_ngcontent-%COMP%]:hover, div.tal-file[_ngcontent-%COMP%]:hover {\n  background-color: var(--surface-hover);\n}\n\ndiv.tal-folder-row[_ngcontent-%COMP%]:hover   div.tal-row-settings[_ngcontent-%COMP%], div.tal-file[_ngcontent-%COMP%]:hover   div.tal-row-settings[_ngcontent-%COMP%] {\n  opacity: 1 !important;\n}\n\ndiv.tal-file[_ngcontent-%COMP%] {\n  max-width: 100%;\n  border: solid 1px transparent;\n}\n\ndiv.tal-file.opened[_ngcontent-%COMP%] {\n  background-color: var(--surface-c);\n  border: solid 1px var(--surface-border);\n}\n\ndiv.tal-file[_ngcontent-%COMP%]   div.tal-file-title[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n}\n\ndiv.tal-file[_ngcontent-%COMP%]   div.tal-file-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 1rem;\n}\n\ndiv.tal-folder-row[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\ndiv.tal-folder-row[_ngcontent-%COMP%]   div.tal-folder-title[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n}\n\ndiv.tal-folder-row[_ngcontent-%COMP%]   div.tal-folder-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 1rem;\n}\n\ndiv.tal-folder-row[_ngcontent-%COMP%]   div.tal-folder-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:first-child {\n  font-size: 0.8rem;\n  margin-right: 0.4rem;\n  color: var(--gray-500);\n}\n\ndiv.tal-folder-row[_ngcontent-%COMP%]   div.tal-folder-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 0.8rem;\n  margin-right: 0.2rem;\n}\n\ndiv.tal-row-settings[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  opacity: 0;\n}\n\ndiv.tal-row-settings[_ngcontent-%COMP%]   div.tal-row-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-items: center;\n  margin-left: 0.2rem;\n  padding: 0.4rem;\n  border-radius: 4px;\n  text-align: center;\n}\n\ndiv.tal-row-settings[_ngcontent-%COMP%]   div.tal-row-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--gray-500);\n}\n\ndiv.tal-row-settings[_ngcontent-%COMP%]   div.tal-row-button[_ngcontent-%COMP%]:hover {\n  background-color: var(--surface-100);\n}\n\ndiv.tal-row-settings[_ngcontent-%COMP%]   div.tal-row-button[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: var(--text-color);\n}\n\ndiv.tal-row-settings[_ngcontent-%COMP%]   div.tal-row-button[_ngcontent-%COMP%]:active {\n  background-color: var(--surface-200);\n}\n\ndiv.tal-folder-subtree.collapsed[_ngcontent-%COMP%]   div.tal-subfolder[_ngcontent-%COMP%] {\n  display: none;\n}\n\ndiv.tal-folder-subtree.collapsed[_ngcontent-%COMP%]   div.tal-folder-row[_ngcontent-%COMP%]   div.tal-folder-title[_ngcontent-%COMP%]   i.pi-chevron-down[_ngcontent-%COMP%] {\n  transform: rotate(-90deg);\n}\n\ndiv.tal-subfolder[_ngcontent-%COMP%] {\n  padding-left: 0.6rem;\n  border-left: solid 1px var(--surface-border);\n}\n\ninput.tal-item-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: none;\n  outline: none;\n  background-color: var(--surface-0);\n  font-size: 1rem;\n  padding: 0.2rem;\n  border-radius: 0.2rem;\n  color: var(--text-color);\n  border: 1px solid transparent;\n}\n\ninput.tal-item-input.error[_ngcontent-%COMP%] {\n  border: 1px solid var(--red-500);\n}\n\n.gbtn[_ngcontent-%COMP%] {\n  display: none;\n}\n\n  .p-tieredmenu {\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n  .p-dialog-title {\n  color: rgb(63, 81, 179);\n}\n\n  .p-dialog-content {\n  white-space: pre-line;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2JsdXIuc2NzcyIsImZpbGUtZXhwbG9yZXItd2lkZ2V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQSxFQUFBLGdEQUFBO0VBQ0Esa0NBQUEsRUFFRyxvREFBQTtFQUNILDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdEQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQ0RGOztBRElBO0VBQ0UsVUFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQ0RGOztBQVhBO0VBSUksWUFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQVdKOztBQVRJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBQUEsc0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7QUFXTjs7QUFSTTtFQUNFLGlCQUFBO0VBQ0EsMkJBQUE7RUFBQSxzQkFBQTtBQVVSOztBQVRRO0VBQ0UsaUJBQUE7QUFXVjs7QUFQTTtFQUNFLGlCQUFBO0VBQ0EsMkJBQUE7RUFBQSxzQkFBQTtBQVNSOztBQVJRO0VBQ0UsZ0JBQUE7QUFVVjs7QUFKSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQU1SOztBQURBOztFQUVFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFJRjs7QUFGRTs7RUFDRSxzQ0FBQTtBQUtKOztBQUhJOztFQUNFLHFCQUFBO0FBTU47O0FBQUE7RUFDRSxlQUFBO0VBQ0EsNkJBQUE7QUFHRjs7QUFERTtFQUNFLGtDQUFBO0VBQ0EsdUNBQUE7QUFHSjs7QUFBSTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUVOOztBQUFNO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUVSOztBQUdBO0VBQ0ksZUFBQTtBQUFKOztBQUVFO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBRUk7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBQU47O0FBR0k7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7QUFETjs7QUFJSTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUFGTjs7QUFPQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFKRjs7QUFNRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUpKOztBQU1JO0VBQ0UsaUJBQUE7RUFDQSxzQkFBQTtBQUpOOztBQU9JO0VBQ0Usb0NBQUE7QUFMTjs7QUFPTTtFQUNFLHdCQUFBO0FBTFI7O0FBU0k7RUFDRSxvQ0FBQTtBQVBOOztBQWVJO0VBQ0UsYUFBQTtBQVpOOztBQWlCUTtFQUNFLHlCQUFBO0FBZlY7O0FBdUJBO0VBQ0Usb0JBQUE7RUFDQSw0Q0FBQTtBQXBCRjs7QUF1QkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLDZCQUFBO0FBcEJKOztBQXNCSTtFQUNJLGdDQUFBO0FBcEJSOztBQXdCQTtFQUVFLGFBQUE7QUF0QkY7O0FBMkJFO0VBQ0UsdUJBQUE7RUFBQSxrQkFBQTtBQXhCSjs7QUEyQkU7RUFDRSx1QkFBQTtBQXpCSjs7QUE0QkU7RUFDRSxxQkFBQTtBQTFCSiIsImZpbGUiOiJmaWxlLWV4cGxvcmVyLXdpZGdldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibHVye1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZmlsdGVyOiBibHVyKDEwcHgpOyAvKiBNb2RpZmljYSBpbCB2YWxvcmUgZGkgYmx1ciBhIHR1byBwaWFjaW1lbnRvICovXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKFxuICAgIDNweFxuICApOyAvKiBQZXIgaSBicm93c2VyIGJhc2F0aSBzdSBXZWJLaXQgKENocm9tZSwgU2FmYXJpKSAqL1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTAwJSk7XG4gIC8qIEJsb2NjYSBpbCBjbGljayBhaSBib3R0b25pICovXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAvKiBQZXJtZXR0ZSBkaSBibG9jY2FyZSBsYSBzZWxlemlvbmUgZGVsIHRlc3RvICovXG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uYSB7XG4gIGNvbG9yOiByZWQ7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICB1c2VyLXNlbGVjdDogYXV0bztcbn1cbiIsIkBpbXBvcnQgJy4uL2JsdXIuc2Nzcyc7XG5cblxuLmJsdXJ7XG4gIEBleHRlbmQgLmJsdXI7XG59XG5cbi50YWwtZWRpdG9yLWZpbGVzLXRyZWUge1xuXG5cbiAgICAvL3BhZGRpbmc6IDVweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS01MCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgLnRhbC1lZGl0b3ItZmlsZXMtaGVhZGVyLCAudGFsLWVkaXRvci1maWxlcy1mb290ZXJ7XG4gICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgcGFkZGluZzo1cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogIzAwMDAwMCwgJGFscGhhOiAwLjEpO1xuXG5cbiAgICAgIC50YWwtZWRpdG9yLWZpbGVzLWxlZnQtYmFye1xuICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgYnV0dG9ue1xuICAgICAgICAgIG1hcmdpbi1yaWdodDo1cHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnRhbC1lZGl0b3ItZmlsZXMtcmlnaHQtYmFye1xuICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgYnV0dG9ue1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OjVweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuXG4gICAgLnRhbC1lZGl0b3ItZmlsZXMtYm9keXtcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICBvdmVyZmxvdy15OnNjcm9sbDtcbiAgICB9XG59XG5cblxuZGl2LnRhbC1mb2xkZXItcm93LFxuZGl2LnRhbC1maWxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAwLjJyZW07XG4gIG1hcmdpbjowLjJyZW0gMDtcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VyZmFjZS1ob3Zlcik7XG5cbiAgICBkaXYudGFsLXJvdy1zZXR0aW5ncyB7XG4gICAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbn1cblxuZGl2LnRhbC1maWxlIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3JkZXI6c29saWQgMXB4IHRyYW5zcGFyZW50O1xuXG4gICYub3BlbmVke1xuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tc3VyZmFjZS1jKTtcbiAgICBib3JkZXI6c29saWQgMXB4IHZhcigtLXN1cmZhY2UtYm9yZGVyKTtcbiAgfVxuXG4gICAgZGl2LnRhbC1maWxlLXRpdGxlIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgIHB7XG4gICAgICAgIHdoaXRlLXNwYWNlOm5vd3JhcDtcbiAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO1xuICAgICAgICBmb250LXNpemU6MXJlbTtcbiAgICAgIH1cbiAgICB9XG59XG5cbmRpdi50YWwtZm9sZGVyLXJvdyB7XG4gICAgbWF4LXdpZHRoOjEwMCU7XG5cbiAgZGl2LnRhbC1mb2xkZXItdGl0bGUge1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICBwIHtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICBmb250LXNpemU6MXJlbTtcbiAgICB9XG5cbiAgICBpOmZpcnN0LWNoaWxkIHtcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjRyZW07XG4gICAgICBjb2xvcjogdmFyKC0tZ3JheS01MDApO1xuICAgIH1cblxuICAgIGk6bnRoLWNoaWxkKDIpIHtcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjJyZW07XG4gICAgfVxuICB9XG59XG5cbmRpdi50YWwtcm93LXNldHRpbmdzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3BhY2l0eTogMDtcblxuICBkaXYudGFsLXJvdy1idXR0b24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDAuMnJlbTtcbiAgICBwYWRkaW5nOiAwLjRyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIGkge1xuICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICBjb2xvcjogdmFyKC0tZ3JheS01MDApO1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VyZmFjZS0xMDApO1xuXG4gICAgICBpIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6YWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cmZhY2UtMjAwKTtcblxuICAgIH1cbiAgfVxufVxuXG5kaXYudGFsLWZvbGRlci1zdWJ0cmVlIHtcbiAgJi5jb2xsYXBzZWQge1xuICAgIGRpdi50YWwtc3ViZm9sZGVyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgZGl2LnRhbC1mb2xkZXItcm93IHtcbiAgICAgIGRpdi50YWwtZm9sZGVyLXRpdGxlIHtcbiAgICAgICAgaS5waS1jaGV2cm9uLWRvd24ge1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cbiAgfVxufVxuXG5kaXYudGFsLXN1YmZvbGRlciB7XG4gIHBhZGRpbmctbGVmdDogMC42cmVtO1xuICBib3JkZXItbGVmdDogc29saWQgMXB4IHZhcigtLXN1cmZhY2UtYm9yZGVyKTtcbn1cblxuaW5wdXQudGFsLWl0ZW0taW5wdXR7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBib3JkZXI6bm9uZTtcbiAgICBvdXRsaW5lOm5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1zdXJmYWNlLTApO1xuICAgIGZvbnQtc2l6ZToxcmVtO1xuICAgIHBhZGRpbmc6MC4ycmVtO1xuICAgIGJvcmRlci1yYWRpdXM6MC4ycmVtO1xuICAgIGNvbG9yOnZhcigtLXRleHQtY29sb3IpO1xuICAgIGJvcmRlcjoxcHggc29saWQgdHJhbnNwYXJlbnQ7XG5cbiAgICAmLmVycm9ye1xuICAgICAgICBib3JkZXI6MXB4IHNvbGlkIHZhcigtLXJlZC01MDApO1xuICAgIH1cbn1cblxuLmdidG57XG4gIC8vYm9yZGVyOm5vbmU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIC8vY3Vyc29yOiBwb2ludGVyO1xufVxuXG46Om5nLWRlZXAge1xuICAucC10aWVyZWRtZW51IHtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIH1cblxuICAucC1kaWFsb2ctdGl0bGUge1xuICAgIGNvbG9yOiByZ2IoNjMsIDgxLCAxNzkpO1xuICB9XG5cbiAgLnAtZGlhbG9nLWNvbnRlbnQge1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbiAgfVxufVxuIl19 */"]
});

/***/ }),

/***/ 4150:
/*!********************************************************************************!*\
  !*** ./src/app/widgets/code-editor/log-api-widget/log-api-widget.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogApiWidgetComponent": () => (/* binding */ LogApiWidgetComponent)
/* harmony export */ });
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/tooltip */ 4329);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_tutorial_service_tutorial_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/tutorial-service/tutorial.service */ 8352);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ 6328);







function LogApiWidgetComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LogApiWidgetComponent_div_6_Template_i_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const line_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.copy(line_r1.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const line_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "flash-div-", line_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "icon-", line_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("life", 1000);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", line_r1.content, " ");
} }
class LogApiWidgetComponent {
    constructor(zone, tutorialService) {
        this.zone = zone;
        this.tutorialService = tutorialService;
        this.outputLines = [];
        this.icon = 'pi-check-circle';
        this.label = 'Log Active';
        this.isActive = true;
        this.isBlurred = false;
        this.tutorialService.onTutorialChange.subscribe((tutorial) => { this.isTutorialShown(tutorial); }),
            this.tutorialService.onTutorialClose.subscribe(() => { this.isTutorialShown(); });
    }
    ngOnInit() {
        this.isBlurred = true;
    }
    isTutorialShown(tutorial) {
        console.log("LogApiWidgetComponent:isTutorialShown");
        if (typeof tutorial === 'undefined' || tutorial.componentName === "LogApiWidgetComponent") {
            this.isBlurred = false;
        }
        else {
            this.isBlurred = true;
        }
    }
    clearOutput() {
        this.zone.run(() => this.outputLines = []);
    }
    addLine(content) {
        let index = this.outputLines.length;
        console.log('addLine:index: ', index);
        this.outputLines.push({ 'id': index, 'content': content });
        setTimeout(() => {
            const flashDiv = document.getElementById('flash-div-' + index);
            if (flashDiv) {
                flashDiv.style.animationPlayState = 'running';
            }
        }, 0);
    }
    flashLine() {
        for (let i = 0; i < this.outputLines.length; i++) {
            const flashDiv = document.getElementById('flash-div-' + i);
            if (flashDiv) {
                flashDiv.style.animationPlayState = 'paused';
            }
        }
    }
    findTooltipById(searchId) {
        return this.tooltips.find(tooltip => tooltip.el.nativeElement.id === ("icon-" + searchId));
    }
    copy(index) {
        navigator.clipboard.writeText(this.outputLines[index].content);
        const foundTooltip = this.findTooltipById(index);
        if (foundTooltip) {
            foundTooltip.activate();
        }
    }
    active() {
        const icon = document.getElementById('logIcon');
        if (icon) {
            if (this.icon === 'pi-check-circle') {
                this.icon = 'pi-ban';
                this.label = 'Log Disabled';
                this.isActive = false;
            }
            else {
                this.icon = 'pi-check-circle';
                this.label = 'Log Active';
                this.isActive = true;
            }
        }
    }
}
LogApiWidgetComponent.ɵfac = function LogApiWidgetComponent_Factory(t) { return new (t || LogApiWidgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_tutorial_service_tutorial_service__WEBPACK_IMPORTED_MODULE_0__.TutorialService)); };
LogApiWidgetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LogApiWidgetComponent, selectors: [["tal-log-api-widget"]], viewQuery: function LogApiWidgetComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](primeng_tooltip__WEBPACK_IMPORTED_MODULE_2__.Tooltip, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.tooltips = _t);
    } }, decls: 7, vars: 6, consts: [[1, "log-container"], [1, "p-button-bar"], ["id", "logIcon", "styleClass", "p-button-raised", 3, "label", "badge", "icon", "click"], ["styleClass", "p-button-raised", "label", "Delete", "icon", "pi pi-trash", 3, "click"], [1, "log"], [1, "tal-output-widget-pscroll"], ["class", "content-api", 4, "ngFor", "ngForOf"], [1, "content-api"], [1, "log-line", "flash-div", 3, "id"], [1, "row-icon"], ["pTooltip", "Copied", "tooltipPosition", "left", "tooltipEvent", "focus", 1, "pi", "pi-copy", 3, "id", "life", "click"], [1, "log-text"], [1, "pi", "pi-angle-right", 2, "vertical-align", "middle"]], template: function LogApiWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LogApiWidgetComponent_Template_p_button_click_2_listener() { return ctx.active(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LogApiWidgetComponent_Template_p_button_click_3_listener() { return ctx.clearOutput(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, LogApiWidgetComponent_div_6_Template, 7, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("blur", ctx.isBlurred);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("label", ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("badge", ctx.outputLines.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("icon", "pi ", ctx.icon, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.outputLines);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, primeng_button__WEBPACK_IMPORTED_MODULE_4__.Button, primeng_tooltip__WEBPACK_IMPORTED_MODULE_2__.Tooltip], styles: [".blur[_ngcontent-%COMP%] {\n  position: relative;\n  background-size: cover;\n  position: relative;\n  overflow: hidden;\n  filter: blur(10px); \n  -webkit-backdrop-filter: blur(3px); \n  backdrop-filter: blur(100%);\n  \n  pointer-events: none;\n  \n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.a[_ngcontent-%COMP%] {\n  color: red;\n  pointer-events: auto;\n  -webkit-user-select: auto;\n          user-select: auto;\n}\n\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.row-icon[_ngcontent-%COMP%] {\n  display: flex;\n  font-size: 1.2rem;\n  position: absolute;\n  right: 5px;\n  top: 5px;\n}\n\n.log-text[_ngcontent-%COMP%] {\n  line-height: 30px;\n  margin-right: 30px;\n}\n\n.log-line[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 0;\n  vertical-align: middle;\n  min-height: 30px;\n  font-family: monospace;\n  position: relative;\n  overflow: auto;\n  max-height: 100px;\n}\n\n.flash-div[_ngcontent-%COMP%] {\n  animation: flash 1s ease-in-out 3;\n  animation-play-state: paused;\n}\n\n@keyframes flash {\n  0%, 100% {\n    border: 0px;\n  }\n  50% {\n    box-shadow: 2px 2px 2px red, -2px -2px 2px red, 2px -2px 2px red, -2px 2px 2px red;\n  }\n}\n\n.container-div[_ngcontent-%COMP%] {\n  width: 500px;\n  height: 600px;\n  margin: 0 auto;\n  padding: 5px;\n}\n\n.content-api[_ngcontent-%COMP%] {\n  height: auto;\n  box-shadow: 2px 2px 2px rgb(63, 81, 179), -2px -2px 2px rgb(63, 81, 179), 2px -2px 2px rgb(63, 81, 179), -2px 2px 2px rgb(63, 81, 179);\n  padding: 1px;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  margin-left: 3px;\n  margin-right: 3px;\n  vertical-align: middle;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 1.5;\n  overflow-wrap: break-word;\n}\n\n[_nghost-%COMP%]     .p-button {\n  margin-left: 10px;\n  margin-right: 3px;\n}\n\n[_nghost-%COMP%]     .log-container {\n  border-radius: 3px;\n  border: 1px solid rgb(63, 81, 179);\n  background-color: rgb(213, 216, 228);\n  max-height: 500px;\n  height: auto;\n  padding: 4px;\n  position: relative;\n}\n\n[_nghost-%COMP%]     .p-button-bar {\n  position: absolute;\n  right: 0;\n  margin-bottom: 5px;\n  border-radius: 5px;\n  background-color: rgb(213, 216, 228);\n  padding: 5px;\n}\n\n[_nghost-%COMP%]     .log {\n  padding-top: 30px;\n  border-radius: 3px;\n  background-color: white;\n  border: 1px solid rgb(63, 81, 179);\n  padding: 5px;\n  margin-top: 60px;\n  max-height: 300px;\n  overflow-y: auto;\n  margin-bottom: 5px;\n  margin-left: 3px;\n  margin-right: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2JsdXIuc2NzcyIsImxvZy1hcGktd2lkZ2V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQSxFQUFBLGdEQUFBO0VBQ0Esa0NBQUEsRUFFRyxvREFBQTtFQUNILDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdEQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQ0RGOztBRElBO0VBQ0UsVUFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQ0RGOztBQVhBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFjSjs7QUFYQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUFjSjs7QUFYQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFjSjs7QUFYQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBY0o7O0FBWEE7RUFDSSxpQ0FBQTtFQUNBLDRCQUFBO0FBY0o7O0FBWEU7RUFDRTtJQUNJLFdBQUE7RUFjTjtFQVpFO0lBQ0ksa0ZBQUE7RUFjTjtBQUNGOztBQVBBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQVNKOztBQU5BO0VBQ0ksWUFBQTtFQUNBLHNJQUFBO0VBSUEsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQU1KOztBQUhBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFNSjs7QUFESTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUFJUjs7QUFESTtFQUNJLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUdSOztBQUFJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtBQUVSOztBQUNJO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ1IiLCJmaWxlIjoibG9nLWFwaS13aWRnZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmx1cntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZpbHRlcjogYmx1cigxMHB4KTsgLyogTW9kaWZpY2EgaWwgdmFsb3JlIGRpIGJsdXIgYSB0dW8gcGlhY2ltZW50byAqL1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cihcbiAgICAzcHhcbiAgKTsgLyogUGVyIGkgYnJvd3NlciBiYXNhdGkgc3UgV2ViS2l0IChDaHJvbWUsIFNhZmFyaSkgKi9cbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwMCUpO1xuICAvKiBCbG9jY2EgaWwgY2xpY2sgYWkgYm90dG9uaSAqL1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgLyogUGVybWV0dGUgZGkgYmxvY2NhcmUgbGEgc2VsZXppb25lIGRlbCB0ZXN0byAqL1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmEge1xuICBjb2xvcjogcmVkO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgdXNlci1zZWxlY3Q6IGF1dG87XG59XG4iLCJAaW1wb3J0ICcuLi9ibHVyLnNjc3MnO1xuXG5cbi5ibHVye1xuICBAZXh0ZW5kIC5ibHVyO1xufVxuXG46aG9zdHtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDoxMDAlO1xufVxuXG4ucm93LWljb257XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDVweDtcbiAgICB0b3A6IDVweDtcbn1cblxuLmxvZy10ZXh0IHtcbiAgICBsaW5lLWhlaWdodDogMzBweDsgXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xufVxuXG4ubG9nLWxpbmUge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzphdXRvO1xuICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xufVxuXG4uZmxhc2gtZGl2IHtcbiAgICBhbmltYXRpb246IGZsYXNoIDFzIGVhc2UtaW4tb3V0IDM7XG4gICAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcbn1cbiAgXG4gIEBrZXlmcmFtZXMgZmxhc2gge1xuICAgIDAlLCAxMDAlIHtcbiAgICAgICAgYm9yZGVyOiAwcHg7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIGJveC1zaGFkb3c6ICAycHggMnB4IDJweCByZWQsXG4gICAgICAgICAgICAgIC0ycHggLTJweCAycHggcmVkLFxuICAgICAgICAgICAgICAgMnB4IC0ycHggMnB4IHJlZCxcbiAgICAgICAgICAgICAgLTJweCAgMnB4IDJweCByZWQ7XG4gICAgfVxuICB9XG5cblxuLmNvbnRhaW5lci1kaXYge1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBoZWlnaHQ6IDYwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLmNvbnRlbnQtYXBpe1xuICAgIGhlaWdodDogYXV0bztcbiAgICBib3gtc2hhZG93OiAgMnB4IDJweCAycHggcmdiKDYzLCA4MSwgMTc5KSxcbiAgICAgICAgICAgICAgLTJweCAtMnB4IDJweCByZ2IoNjMsIDgxLCAxNzkpLFxuICAgICAgICAgICAgICAgMnB4IC0ycHggMnB4IHJnYig2MywgODEsIDE3OSksXG4gICAgICAgICAgICAgIC0ycHggIDJweCAycHggcmdiKDYzLCA4MSwgMTc5KTtcbiAgICBwYWRkaW5nOiAxcHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XG59XG5cbnAge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCB7XG5cbiAgICAucC1idXR0b24ge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gICAgfVxuXG4gICAgLmxvZy1jb250YWluZXIge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7IFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNjMsIDgxLCAxNzkpOyBcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMywgMjE2LCAyMjgpOyBcbiAgICAgICAgbWF4LWhlaWdodDo1MDBweDsgXG4gICAgICAgIGhlaWdodDphdXRvOyBcbiAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgLnAtYnV0dG9uLWJhciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDsgXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDsgXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTMsIDIxNiwgMjI4KTsgXG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICB9XG5cbiAgICAubG9nIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7IFxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7IFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig2MywgODEsIDE3OSk7IFxuICAgICAgICBwYWRkaW5nOiA1cHg7IFxuICAgICAgICBtYXJnaW4tdG9wOiA2MHB4OyBcbiAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7IFxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzcHg7IFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDsgXG4gICAgfVxufVxuXG5cblxuXG5cblxuXG4iXX0= */"] });


/***/ }),

/***/ 9128:
/*!********************************************************************************************!*\
  !*** ./src/app/widgets/code-editor/monaco-editor-widget/monaco-editor-widget.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonacoEditorWidgetComponent": () => (/* binding */ MonacoEditorWidgetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9635);
/* harmony import */ var src_app_services_theme_service_theme_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/theme-service/theme.service */ 2655);
/* harmony import */ var src_app_services_tutorial_service_tutorial_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/tutorial-service/tutorial.service */ 8352);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_monaco_editor_v2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-monaco-editor-v2 */ 9247);







const _c0 = ["monacoEditor"];
class MonacoEditorWidgetComponent {
    constructor(themeService, tutorialService) {
        this.themeService = themeService;
        this.tutorialService = tutorialService;
        this._selectedFile = null;
        this.language = "";
        //Code
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.binEncoder = new TextEncoder(); // always utf-8
        this.binDecoder = new TextDecoder("utf-8");
        this.isBlurred = false;
        // CodeEditorControls
        this.onTouchedCallback = rxjs__WEBPACK_IMPORTED_MODULE_3__.noop;
        this.onChangeCallback = rxjs__WEBPACK_IMPORTED_MODULE_3__.noop;
        this.tutorialService.onTutorialChange.subscribe((tutorial) => { this.isTutorialShown(tutorial); }),
            this.tutorialService.onTutorialClose.subscribe(() => { this.isTutorialShown(); });
    }
    ngOnInit() {
        this.themeService.themeChanged.subscribe((theme) => {
            this.updateEditorOptions();
        });
        this.isBlurred = true;
        this.updateEditorOptions();
    }
    isTutorialShown(tutorial) {
        console.log("LogApiWidgetComponent:isTutorialShown");
        if (typeof tutorial === 'undefined' || tutorial.componentName === "LogApiWidgetComponent") {
            this.isBlurred = false;
        }
        else {
            this.isBlurred = true;
        }
    }
    ngAfterViewInit() {
        //this.monacoEditor.registerOnChange((event:any)=>{ this.change(event) })
        //this.monacoEditor.registerOnTouched((event:any)=>{ this.input(event) })
        // this returns null
    }
    ngOnChanges() {
        this.updateEditorOptions();
    }
    get selectedFile() {
        return this._selectedFile;
    }
    set selectedFile(selectedFile) {
        this._selectedFile = selectedFile;
        if (!this._selectedFile) {
            this.value = "";
            return;
        }
        let content = this._selectedFile.content;
        if (typeof content === 'string') {
            this.value = content;
        }
    }
    getFileContent() {
        if (!this._selectedFile) {
            return "";
        }
        let content = this._selectedFile.content;
        if (content instanceof ArrayBuffer) {
            content = this.binDecoder.decode(content);
            this._selectedFile.content = content;
        }
        return content;
    }
    setFileContent(text) {
        if (!this._selectedFile) {
            return;
        }
        this._selectedFile.content = text;
    }
    // get accessor
    get value() {
        //console.log("MonacoEditor:value:get")
        return this.getFileContent();
    }
    // Set accessor including call the onchange callback
    set value(text) {
        console.log("MonacoEditor:value:set");
        if (!this._selectedFile) {
            return;
        }
        let content = this.getFileContent();
        console.log("MonacoEditor:value:old", content);
        console.log("MonacoEditor:value:new", text);
        if (text !== content) {
            console.log("MonacoEditor:value:set:changed");
            this.setFileContent(text);
            this.didChange();
        }
    }
    // From ControlValueAccessor interface
    writeValue(text) {
        console.log("MonacoEditor:writeValue");
        if (text !== this.value) {
            this.value = text;
        }
    }
    didChange() {
        console.log("MonacoEditor:didChange");
        this.onChangeCallback();
        this.onTouchedCallback();
        if (!this.selectedFile) {
            return;
        }
        this.onChange.emit(this.selectedFile);
    }
    // From ControlValueAccessor interface
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    // From ControlValueAccessor interface
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    updateEditorOptions() {
        console.log(this.language);
        this.editorOptions = {
            language: this.language,
            theme: this.themeService.themeName(),
            automaticLayout: true
        };
    }
}
MonacoEditorWidgetComponent.ɵfac = function MonacoEditorWidgetComponent_Factory(t) { return new (t || MonacoEditorWidgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_theme_service_theme_service__WEBPACK_IMPORTED_MODULE_0__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_tutorial_service_tutorial_service__WEBPACK_IMPORTED_MODULE_1__.TutorialService)); };
MonacoEditorWidgetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MonacoEditorWidgetComponent, selectors: [["tal-monaco-editor-widget"]], viewQuery: function MonacoEditorWidgetComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.monacoEditor = _t.first);
    } }, inputs: { _selectedFile: ["selectedFile", "_selectedFile"], language: "language" }, outputs: { onChange: "onChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 5, consts: [[1, "tal-monaco-editor"], [1, "tal-monaco-editor-ngx", 3, "lang", "options", "ngModel", "ngModelChange"], ["monacoEditor", ""]], template: function MonacoEditorWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "ngx-monaco-editor", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function MonacoEditorWidgetComponent_Template_ngx_monaco_editor_ngModelChange_1_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("blur", ctx.isBlurred);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("lang", ctx.language)("options", ctx.editorOptions)("ngModel", ctx.value);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, ngx_monaco_editor_v2__WEBPACK_IMPORTED_MODULE_5__.EditorComponent], styles: [".blur[_ngcontent-%COMP%] {\n  position: relative;\n  background-size: cover;\n  position: relative;\n  overflow: hidden;\n  filter: blur(10px); \n  -webkit-backdrop-filter: blur(3px); \n  backdrop-filter: blur(100%);\n  \n  pointer-events: none;\n  \n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.a[_ngcontent-%COMP%] {\n  color: red;\n  pointer-events: auto;\n  -webkit-user-select: auto;\n          user-select: auto;\n}\n\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.tal-monaco-editor[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.tal-monaco-editor[_ngcontent-%COMP%]   .tal-monaco-editor-ngx[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2JsdXIuc2NzcyIsIm1vbmFjby1lZGl0b3Itd2lkZ2V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQSxFQUFBLGdEQUFBO0VBQ0Esa0NBQUEsRUFFRyxvREFBQTtFQUNILDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdEQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQ0RGOztBRElBO0VBQ0UsVUFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQ0RGOztBQVpBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFlSjs7QUFYQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBY0o7O0FBWkk7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBY1IiLCJmaWxlIjoibW9uYWNvLWVkaXRvci13aWRnZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmx1cntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZpbHRlcjogYmx1cigxMHB4KTsgLyogTW9kaWZpY2EgaWwgdmFsb3JlIGRpIGJsdXIgYSB0dW8gcGlhY2ltZW50byAqL1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cihcbiAgICAzcHhcbiAgKTsgLyogUGVyIGkgYnJvd3NlciBiYXNhdGkgc3UgV2ViS2l0IChDaHJvbWUsIFNhZmFyaSkgKi9cbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwMCUpO1xuICAvKiBCbG9jY2EgaWwgY2xpY2sgYWkgYm90dG9uaSAqL1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgLyogUGVybWV0dGUgZGkgYmxvY2NhcmUgbGEgc2VsZXppb25lIGRlbCB0ZXN0byAqL1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmEge1xuICBjb2xvcjogcmVkO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgdXNlci1zZWxlY3Q6IGF1dG87XG59XG4iLCJAaW1wb3J0ICcuLi9ibHVyLnNjc3MnO1xuXG4uYmx1cntcbiAgQGV4dGVuZCAuYmx1cjtcbn1cblxuOmhvc3R7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cblxuLnRhbC1tb25hY28tZWRpdG9ye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIC50YWwtbW9uYWNvLWVkaXRvci1uZ3h7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICB9XG5cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 7366:
/*!******************************************************************************!*\
  !*** ./src/app/widgets/code-editor/output-widget/output-widget.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OutputMessage": () => (/* binding */ OutputMessage),
/* harmony export */   "OutputType": () => (/* binding */ OutputType),
/* harmony export */   "OutputWidgetComponent": () => (/* binding */ OutputWidgetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/compiler-service/compiler-service.types */ 3809);
/* harmony import */ var src_app_services_tutorial_service_tutorial_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/tutorial-service/tutorial.service */ 8352);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/tooltip */ 4329);







const _c0 = ["output"];
const _c1 = ["sdtinInput"];
const _c2 = ["sdtinButton"];
const _c3 = ["pyodideIcon"];
function OutputWidgetComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const line_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("tal-output-widget-inner-row tal-output-widget-inner-row-", line_r4.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("pi ", ctx_r1.iconForType(line_r4), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](line_r4.content);
} }
class OutputMessage {
    constructor(content, type, index = -1, timestamp = Date.now()) {
        this.content = content;
        this.type = type;
        this.index = index;
        this.timestamp = timestamp;
    }
}
var OutputType;
(function (OutputType) {
    OutputType["STDIN"] = "stdin";
    OutputType["STDINAPI"] = "stdinapi";
    OutputType["STDOUT"] = "stdout";
    OutputType["STDERR"] = "stderr";
    OutputType["SYSTEM"] = "system";
})(OutputType || (OutputType = {}));
class OutputWidgetComponent {
    constructor(zone, tutorialService) {
        this.zone = zone;
        this.tutorialService = tutorialService;
        this.onInput = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.onStdin = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.outputLines = new Array();
        this.pyodideState = src_app_services_compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_0__.CompilerState.Unknown;
        this.pyodideStateIcon = "pi-circle";
        this.pyodideStateColor = ""; //default: lightgray
        this.pyodideStateTooltip = "State: Unknown";
        this.isBlurred = false;
        this.tutorialService.onTutorialChange.subscribe((tutorial) => { this.isTutorialShown(tutorial); }),
            this.tutorialService.onTutorialClose.subscribe(() => { this.isTutorialShown(); });
    }
    ngOnInit() {
        this.isBlurred = true;
    }
    isTutorialShown(tutorial) {
        console.log("OutputWidgetComponent:isTutorialShown");
        if (typeof tutorial === 'undefined' || tutorial.componentName === "OutputWidgetComponent") {
            this.isBlurred = false;
        }
        else {
            this.isBlurred = true;
        }
    }
    ngOnDestroy() { }
    clearOutput() {
        this.zone.run(() => this.outputLines = []);
    }
    print(content, outputType = OutputType.STDOUT) {
        let msg = new OutputMessage(content, outputType, this.outputLines.length);
        this.zone.run(() => this.outputLines.push(msg));
        this.scrollToBottom();
    }
    iconForType(message) {
        let icon = '';
        let idx = message.index;
        if (idx > 0 && this.outputLines[idx - 1].type == message.type) {
            return icon;
        }
        switch (message.type) {
            default:
            case OutputType.STDIN:
                icon = 'pi-angle-left';
                break;
            case OutputType.STDINAPI:
                icon = 'pi-cloud-download';
                break;
            case OutputType.STDOUT:
                icon = 'pi-angle-right';
                break;
            case OutputType.STDERR:
                icon = 'pi-exclamation-triangle';
                break;
            case OutputType.SYSTEM:
                icon = 'pi-info-circle';
                break;
        }
        return icon;
    }
    didStateChange(state, content) {
        console.log("didStateChange:", state);
        this.pyodideState = state;
        this.pyodideStateTooltip = 'State: ' + this.pyodideState;
        switch (state) {
            default:
            case src_app_services_compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_0__.CompilerState.Unknown:
                this.pyodideStateIcon = "pi-circle";
                this.pyodideStateColor = "";
                this.enableStdin(false);
                break;
            case src_app_services_compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_0__.CompilerState.Loading:
                this.pyodideStateIcon = "pi-spin pi-spinner";
                this.pyodideStateColor = "orange";
                this.enableStdin(false);
                break;
            case src_app_services_compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_0__.CompilerState.Ready:
                this.pyodideStateIcon = "pi-circle";
                this.pyodideStateColor = "green";
                this.enableStdin(false);
                break;
            case src_app_services_compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_0__.CompilerState.Run:
                this.pyodideStateIcon = "pi-spin pi-spinner";
                this.pyodideStateColor = "green";
                this.enableStdin(false);
                break;
            case src_app_services_compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_0__.CompilerState.Stdin:
                this.pyodideStateIcon = "pi-spin pi-spinner";
                this.pyodideStateColor = "orange";
                this.enableStdin(true);
                break;
            case src_app_services_compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_0__.CompilerState.Error:
                this.pyodideStateIcon = "pi-circle-fill";
                this.pyodideStateColor = "darkred";
                this.print("END: Error", OutputType.STDERR);
                this.print(content ?? "Uknown error", OutputType.STDERR);
                this.enableStdin(false);
                break;
            case src_app_services_compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_0__.CompilerState.Success:
                this.pyodideStateIcon = "pi-circle-fill";
                this.pyodideStateColor = "green";
                this.print("END: Success", OutputType.SYSTEM);
                if (content) {
                    this.print(content, OutputType.SYSTEM);
                }
                this.enableStdin(false);
                break;
        }
    }
    enableStdin(enable = true) {
        let btn = this.sdtinButton.nativeElement;
        let ipt = this.sdtinInput.nativeElement;
        btn.disabled = !enable;
        ipt.disabled = !enable;
        this.enableHighlight(enable);
    }
    enableHighlight(enable = true, color) {
        let ipt = this.sdtinInput.nativeElement;
        let toggleColor = (clear) => {
            if (clear) {
                ipt.style.borderColor == "";
                return;
            }
            ipt.style.borderColor = ipt.style.borderColor == "" ? color ?? "orange" : "";
        };
        //if(enable && this.stdinHighlight){ return; }
        //if(!enable && !this.stdinHighlight){ return; }
        if (enable) {
            if (this.stdinHighlight) {
                clearInterval(this.stdinHighlight);
            }
            this.stdinHighlight = window.setInterval(toggleColor, 1000); //window.setInterval -> number; setInterval -> strange object
        }
        else {
            clearInterval(this.stdinHighlight);
            this.stdinHighlight = undefined;
            setTimeout(() => { toggleColor(true); });
        }
    }
    focusStdin() {
        let ipt = this.sdtinInput.nativeElement;
        ipt.style.backgroundColor = "";
        this.enableHighlight(false);
    }
    blurStdin() {
        let ipt = this.sdtinInput.nativeElement;
        ipt.style.backgroundColor = "";
        let shouldHighlight = this.pyodideState == src_app_services_compiler_service_compiler_service_types__WEBPACK_IMPORTED_MODULE_0__.CompilerState.Stdin;
        this.enableHighlight(shouldHighlight);
    }
    sendStdin() {
        let msg = this.sdtinInput.nativeElement.value ?? "";
        msg = msg.trim();
        console.log("sendStdin:", this.sdtinInput);
        console.log("sendStdin:msg", msg);
        if (msg == "") {
            return;
        }
        this.sdtinInput.nativeElement.value = "";
        this.onStdin.emit(msg + "\n");
    }
    sendOnEnter(event) {
        if (event.key == 'Enter') {
            this.sendStdin();
        }
    }
    scrollToBottom() {
        // Scroll #console-bottom-scroll to bottom
        setTimeout(() => {
            const scrollEl = document.getElementById("tal-output-widget-scroll-id");
            if (scrollEl) {
                scrollEl.scrollTop = scrollEl.scrollHeight;
                console.log(scrollEl.scrollTop, scrollEl.scrollHeight);
            }
        });
    }
}
OutputWidgetComponent.ɵfac = function OutputWidgetComponent_Factory(t) { return new (t || OutputWidgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_tutorial_service_tutorial_service__WEBPACK_IMPORTED_MODULE_1__.TutorialService)); };
OutputWidgetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: OutputWidgetComponent, selectors: [["tal-output-widget"]], viewQuery: function OutputWidgetComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c3, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.output = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.sdtinInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.sdtinButton = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.pyodideIcon = _t.first);
    } }, outputs: { onInput: "onInput", onStdin: "onStdin" }, decls: 16, vars: 9, consts: [[1, "tal-output-widget", 2, "border-radius", "3px", "border", "1px solid rgb(63, 81, 179)", "background-color", "rgb(213, 216, 228)", "max-height", "500px", "height", "auto", "padding", "4px", "position", "relative"], [1, "tal-output-widget-row", "tal-output-widget-title"], [1, "tal-output-widget-row-label"], [1, "tal-output-widget-row-icon"], ["tooltipPosition", "left", 3, "pTooltip"], ["pyodideIcon", ""], [2, "max-height", "300px", "overflow-y", "auto", "border-radius", "3px", "border", "1px solid rgb(63, 81, 179)", "background-color", "white"], [1, "tal-output-widget-row", "tal-output-widget-row-scroll"], ["id", "tal-output-widget-scroll-id", 1, "tal-output-widget-pscroll"], [3, "class", 4, "ngFor", "ngForOf"], [1, "tal-output-widget-row", "tal-output-widget-row-stdin"], ["pButton", "", "icon", "pi pi-trash", "pTooltip", "Clear output", 1, "tal-square-button", 3, "click"], ["pInput", "", "placeholder", "Write here input program", 1, "tal-output-widget-stdin-input", 3, "focus", "blur", "keydown"], ["sdtinInput", ""], ["pButton", "", "icon", "pi pi-send", "pTooltip", "Send", 1, "tal-output-widget-stdin-button", "tal-square-button", 3, "click"], ["sdtinButton", ""], [1, "tal-output-widget-icon"], [1, "tal-output-widget-text"]], template: function OutputWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, OutputWidgetComponent_div_9_Template, 6, 7, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 10)(11, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OutputWidgetComponent_Template_button_click_11_listener() { return ctx.clearOutput(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focus", function OutputWidgetComponent_Template_input_focus_12_listener() { return ctx.focusStdin(); })("blur", function OutputWidgetComponent_Template_input_blur_12_listener() { return ctx.blurStdin(); })("keydown", function OutputWidgetComponent_Template_input_keydown_12_listener($event) { return ctx.sendOnEnter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OutputWidgetComponent_Template_button_click_14_listener() { return ctx.sendStdin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("blur", ctx.isBlurred);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"]("font-size:100%; color:" + ctx.pyodideStateColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("pi ", ctx.pyodideStateIcon, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pTooltip", ctx.pyodideStateTooltip);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.outputLines);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonDirective, primeng_tooltip__WEBPACK_IMPORTED_MODULE_5__.Tooltip], styles: [".blur[_ngcontent-%COMP%] {\n  position: relative;\n  background-size: cover;\n  position: relative;\n  overflow: hidden;\n  filter: blur(10px); \n  -webkit-backdrop-filter: blur(3px); \n  backdrop-filter: blur(100%);\n  \n  pointer-events: none;\n  \n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.a[_ngcontent-%COMP%] {\n  color: red;\n  pointer-events: auto;\n  -webkit-user-select: auto;\n          user-select: auto;\n}\n\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%; \n  height: 100%; \n}\n\n\n\n\n\n.tal-output-widget[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  max-width: 100%;\n  \n}\n\n.tal-output-widget[_ngcontent-%COMP%]     .p-scrollpanel-wrapper, .tal-output-widget[_ngcontent-%COMP%]     .p-scrollpanel-content, .tal-output-widget[_ngcontent-%COMP%]     .tal-output-widget-pscroll {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin: 0px;\n  padding: 0px;\n  overflow-x: unset;\n  word-wrap: break-word;\n  flex-wrap: wrap;\n  overflow-x: hidden;\n  position: relative;\n}\n\n.tal-output-widget[_ngcontent-%COMP%]   .tal-output-widget-row[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 5px;\n}\n\n.tal-output-widget[_ngcontent-%COMP%]   .tal-output-widget-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-content: center;\n}\n\n.tal-output-widget[_ngcontent-%COMP%]   .tal-output-widget-row-icon[_ngcontent-%COMP%] {\n  display: flex;\n  font-size: 1.2rem;\n  padding: 5px;\n}\n\n.tal-output-widget[_ngcontent-%COMP%]   .tal-output-widget-row-label[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 5px;\n  font-weight: 600;\n}\n\n.tal-output-widget[_ngcontent-%COMP%]   .tal-output-widget-row-scroll[_ngcontent-%COMP%] {\n  flex-grow: 2;\n  display: flex;\n}\n\n.tal-output-widget[_ngcontent-%COMP%]   .tal-output-widget-row-stdin[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: 0;\n}\n\n.tal-output-widget[_ngcontent-%COMP%]   .tal-output-widget-scroll[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n}\n\n.tal-output-widget[_ngcontent-%COMP%]   .tal-output-widget-inner-row-stdin[_ngcontent-%COMP%] {\n  background-color: rgba(0, 128, 0, 0.1);\n}\n\n.tal-output-widget[_ngcontent-%COMP%]   .tal-output-widget-inner-row-stdinapi[_ngcontent-%COMP%] {\n  background-color: rgba(0, 255, 0, 0.1);\n}\n\n.tal-output-widget[_ngcontent-%COMP%]   .tal-output-widget-inner-row-stdout[_ngcontent-%COMP%] {\n  background-color: rgba(0, 191, 255, 0.1);\n}\n\n.tal-output-widget[_ngcontent-%COMP%]   .tal-output-widget-inner-row-stderr[_ngcontent-%COMP%] {\n  background-color: rgba(255, 0, 0, 0.1);\n}\n\n.tal-output-widget[_ngcontent-%COMP%]   .tal-output-widget-inner-row-system[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\n.tal-output-widget[_ngcontent-%COMP%]   .tal-output-widget-inner-row[_ngcontent-%COMP%] {\n  padding: 5px;\n  display: flex;\n  flex-direction: row;\n}\n\n.tal-output-widget[_ngcontent-%COMP%]   .tal-output-widget-inner-row[_ngcontent-%COMP%]   .tal-output-widget-icon[_ngcontent-%COMP%] {\n  width: 24px;\n  min-width: 24px;\n  max-width: 24px;\n}\n\n.tal-output-widget[_ngcontent-%COMP%]   .tal-output-widget-inner-row[_ngcontent-%COMP%]   .tal-output-widget-text[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  flex-wrap: wrap;\n}\n\n.tal-output-widget[_ngcontent-%COMP%]   .tal-output-widget-stdin[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.tal-output-widget[_ngcontent-%COMP%]   .tal-output-widget-stdin[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin: 0 5px;\n  padding: 0 5px;\n}\n\n.tal-output-widget[_ngcontent-%COMP%]   .tal-output-widget-stdin-input[_ngcontent-%COMP%] {\n  flex-grow: 2;\n  margin: 0px 5px;\n  padding: 0px 5px;\n}\n\n.tal-output-widget[_ngcontent-%COMP%]   .tal-output-widget-text[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  unicode-bidi: embed;\n  font-family: monospace;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2JsdXIuc2NzcyIsIm91dHB1dC13aWRnZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBLEVBQUEsZ0RBQUE7RUFDQSxrQ0FBQSxFQUVHLG9EQUFBO0VBQ0gsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0RBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0FDREY7O0FESUE7RUFDRSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0FDREY7O0FBWkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQWVGOztBQVpBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBLEVBQUEseUNBQUE7RUFDQSxZQUFBLEVBQUEsc0NBQUE7QUFlRjs7QUFaQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQUE7O0FBNENBOzs7Ozs7Q0FBQTs7QUFRQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQTRIQTs7Ozs7O01BQUE7QUF4R0Y7O0FBVkk7OztFQUdFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQVlOOztBQVBFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUFTSjs7QUFORTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0FBUUo7O0FBTEU7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFFQSxZQUFBO0FBTUo7O0FBSEU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBS0o7O0FBRkU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQUlKOztBQUFFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FBRUo7O0FBR0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFESjs7QUFJRTtFQUNFLHNDQUFBO0FBRko7O0FBSUU7RUFDRSxzQ0FBQTtBQUZKOztBQUlFO0VBQ0Usd0NBQUE7QUFGSjs7QUFJRTtFQUNFLHNDQUFBO0FBRko7O0FBSUU7RUFDRSwwQ0FBQTtBQUZKOztBQUtFO0VBRUUsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUpKOztBQU1JO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBSk47O0FBT0k7RUFDRSxzQkFBQTtFQUVBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBTk47O0FBVUU7RUFFRSxhQUFBO0VBQ0EsbUJBQUE7QUFUSjs7QUFXSTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FBVE47O0FBYUU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBWEo7O0FBc0JFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBcEJKIiwiZmlsZSI6Im91dHB1dC13aWRnZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmx1cntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZpbHRlcjogYmx1cigxMHB4KTsgLyogTW9kaWZpY2EgaWwgdmFsb3JlIGRpIGJsdXIgYSB0dW8gcGlhY2ltZW50byAqL1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cihcbiAgICAzcHhcbiAgKTsgLyogUGVyIGkgYnJvd3NlciBiYXNhdGkgc3UgV2ViS2l0IChDaHJvbWUsIFNhZmFyaSkgKi9cbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwMCUpO1xuICAvKiBCbG9jY2EgaWwgY2xpY2sgYWkgYm90dG9uaSAqL1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgLyogUGVybWV0dGUgZGkgYmxvY2NhcmUgbGEgc2VsZXppb25lIGRlbCB0ZXN0byAqL1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmEge1xuICBjb2xvcjogcmVkO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgdXNlci1zZWxlY3Q6IGF1dG87XG59XG4iLCJAaW1wb3J0IFwiLi4vYmx1ci5zY3NzXCI7XG5cbi5ibHVyIHtcbiAgQGV4dGVuZCAuYmx1cjtcbn1cblxuOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTsgLyogSW1wb3N0YSBsYSBsYXJnaGV6emEgZGVsIGNvbnRlbml0b3JlICovXG4gIGhlaWdodDogMTAwJTsgLyogSW1wb3N0YSBsJ2FsdGV6emEgZGVsIGNvbnRlbml0b3JlICovXG59XG5cbi8qXG46aG9zdCA6Om5nLWRlZXAgLmRhcmstcGFuZWwucC10ZXJtaW5hbCB7XG5cbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgY29sb3I6cmdiKDc0LCAyMjksIDE5OCk7XG5cbiAgICAucC10ZXJtaW5hbC13ZWxjb21lTWVzc2FnZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMyMTIxMjE7XG4gICAgfVxuXG4gICAgLnAtdGVybWluYWwtcmVzcG9uc2Uge1xuICAgICAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xuICAgICAgICBmb250LXNpemU6IGxhcmdlO1xuICAgICAgICBjb2xvcjpyZ2IoMTk3LCAxMzQsIDE5Mik7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIH1cblxuICAgIC5wLXRlcm1pbmFsLXJlc3BvbnNlOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIihzZXJ2ZXIpIFwiO1xuICAgICAgICAvL2ZvbnQtd2VpZ2h0OjYwMDtcbiAgICB9XG5cbiAgICAucC10ZXJtaW5hbC1pbnB1dHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICB9XG5cbiAgICAucC10ZXJtaW5hbC1jb250ZW50e1xuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICB9XG5cblxuICAgIC8qXG4gICAgLnAtdGVybWluYWwtcHJvbXB0IHtcbiAgICAgICAgZm9udC13ZWlnaHQ6NjAwO1xuICAgIH1cbn1cbiovXG5cbi8qXG4ucC10YWJ2aWV3LXBhbmVscyAucC10YWJwYW5lbCB7XG4gICAgaGVpZ2h0OiAxMDAlOyAgSW1wb3N0YSBsJ2FsdGV6emEgZGVsIHRhYiBwYW5lbCBhbCAxMDAlIGRlbGwnYWx0ZXp6YSBkZWwgY29udGVuaXRvcmVcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XG59XG4qL1xuXG4udGFsLW91dHB1dC13aWRnZXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG5cbiAgLy8vLy8vL1xuICAvL3Bvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLy93aWR0aDogMzAwcHg7XG4gIC8vaGVpZ2h0OiAyMDBweDtcbiAgLy9ib3JkZXI6IDFweCBzb2xpZCAjZmYwMDAwO1xuICAvLy8vLy8vXG5cbiAgOjpuZy1kZWVwIHtcbiAgICAucC1zY3JvbGxwYW5lbC13cmFwcGVyLFxuICAgIC5wLXNjcm9sbHBhbmVsLWNvbnRlbnQsXG4gICAgLnRhbC1vdXRwdXQtd2lkZ2V0LXBzY3JvbGwge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgb3ZlcmZsb3cteDogdW5zZXQ7XG4gICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAvL292ZXJmbG93LXk6IHNjcm9sbDtcbiAgICB9XG4gIH1cblxuICAudGFsLW91dHB1dC13aWRnZXQtcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxuXG4gIC50YWwtb3V0cHV0LXdpZGdldC10aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLnRhbC1vdXRwdXQtd2lkZ2V0LXJvdy1pY29uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuXG4gICAgcGFkZGluZzogNXB4O1xuICB9XG5cbiAgLnRhbC1vdXRwdXQtd2lkZ2V0LXJvdy1sYWJlbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuXG4gIC50YWwtb3V0cHV0LXdpZGdldC1yb3ctc2Nyb2xsIHtcbiAgICBmbGV4LWdyb3c6IDI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAvL292ZXJmbG93OiBhdXRvO1xuICB9XG5cbiAgLnRhbC1vdXRwdXQtd2lkZ2V0LXJvdy1zdGRpbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvdHRvbTogMDtcbiAgICAvL3dpZHRoOiA5NSU7IC8qIEFkIGVzZW1waW8sIGwnZWxlbWVudG8gYXZyw6AgbGEgbWV0w6AgZGVsbGEgbGFyZ2hlenphIGRlbCBjb250ZW5pdG9yZSAqL1xuICAgIC8vaGVpZ2h0OiA1MCU7IC8qIEFkIGVzZW1waW8sIGwnZWxlbWVudG8gYXZyw6AgbGEgbWV0w6AgZGVsbCdhbHRlenphIGRlbCBjb250ZW5pdG9yZSAqL1xuICB9XG5cbiAgLnRhbC1vdXRwdXQtd2lkZ2V0LXNjcm9sbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cblxuICAudGFsLW91dHB1dC13aWRnZXQtaW5uZXItcm93LXN0ZGluIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogZ3JlZW4sICRhbHBoYTogMC4xKTtcbiAgfVxuICAudGFsLW91dHB1dC13aWRnZXQtaW5uZXItcm93LXN0ZGluYXBpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogbGltZSwgJGFscGhhOiAwLjEpO1xuICB9XG4gIC50YWwtb3V0cHV0LXdpZGdldC1pbm5lci1yb3ctc3Rkb3V0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogZGVlcHNreWJsdWUsICRhbHBoYTogMC4xKTtcbiAgfVxuICAudGFsLW91dHB1dC13aWRnZXQtaW5uZXItcm93LXN0ZGVyciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6IHJlZCwgJGFscGhhOiAwLjEpO1xuICB9XG4gIC50YWwtb3V0cHV0LXdpZGdldC1pbm5lci1yb3ctc3lzdGVtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogd2hpdGUsICRhbHBoYTogMC4xKTtcbiAgfVxuXG4gIC50YWwtb3V0cHV0LXdpZGdldC1pbm5lci1yb3cge1xuICAgIC8vUFJFXG4gICAgcGFkZGluZzogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcblxuICAgIC50YWwtb3V0cHV0LXdpZGdldC1pY29uIHtcbiAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgbWluLXdpZHRoOiAyNHB4O1xuICAgICAgbWF4LXdpZHRoOiAyNHB4O1xuICAgIH1cblxuICAgIC50YWwtb3V0cHV0LXdpZGdldC10ZXh0IHtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgfVxuICB9XG5cbiAgLnRhbC1vdXRwdXQtd2lkZ2V0LXN0ZGluIHtcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgICBpbnB1dCB7XG4gICAgICBtYXJnaW46IDAgNXB4O1xuICAgICAgcGFkZGluZzogMCA1cHg7XG4gICAgfVxuICB9XG5cbiAgLnRhbC1vdXRwdXQtd2lkZ2V0LXN0ZGluLWlucHV0IHtcbiAgICBmbGV4LWdyb3c6IDI7XG4gICAgbWFyZ2luOiAwcHggNXB4O1xuICAgIHBhZGRpbmc6IDBweCA1cHg7XG4gIH1cblxuICAvKi50YWwtb3V0cHV0LXdpZGdldC1zdGRpbi1pbnB1dDpkaXNhYmxlZHtcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcbiAgICB9XG5cbiAgICAudGFsLW91dHB1dC13aWRnZXQtc3RkaW4taW5wdXQ6ZGlzYWJsZWQsIC50YWwtb3V0cHV0LXdpZGdldC1zdGRpbi1idXR0b246ZGlzYWJsZWR7XG4gICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XG4gICAgfSovXG5cbiAgLnRhbC1vdXRwdXQtd2lkZ2V0LXRleHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdW5pY29kZS1iaWRpOiBlbWJlZDtcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICAgIC8vd2hpdGUtc3BhY2U6IHByZTtcbiAgICAvL2JvcmRlcjpzb2xpZCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 520:
/*!********************************************************************************!*\
  !*** ./src/app/widgets/code-editor/problem-widget/problem-widget.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProblemMenuEntry": () => (/* binding */ ProblemMenuEntry),
/* harmony export */   "ProblemWidgetComponent": () => (/* binding */ ProblemWidgetComponent),
/* harmony export */   "ServiceMenuEntry": () => (/* binding */ ServiceMenuEntry)
/* harmony export */ });
/* harmony import */ var _home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 3918);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dropdown */ 8992);
/* harmony import */ var src_app_services_api_service_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api-service/api.service */ 7829);
/* harmony import */ var src_app_services_problem_manager_service_problem_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/problem-manager-service/problem-manager.service */ 8125);
/* harmony import */ var src_app_services_project_manager_service_project_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/project-manager-service/project-manager.service */ 9102);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var src_app_services_tutorial_service_tutorial_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tutorial-service/tutorial.service */ 8352);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/tooltip */ 4329);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/toast */ 9129);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/tabview */ 9504);
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/scrollpanel */ 4250);


















const _c0 = ["problemDropdown"];
const _c1 = ["serviceDropdown"];
function ProblemWidgetComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r14 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.cleanupName(option_r14.name));
  }
}
function ProblemWidgetComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r15 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.cleanupName(option_r15.name));
  }
}
function ProblemWidgetComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProblemWidgetComponent_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r16.reloadProblemList());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ProblemWidgetComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "button", 23);
  }
}
function ProblemWidgetComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r18 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r6.cleanupName(option_r18.name));
  }
}
function ProblemWidgetComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r19 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r7.cleanupName(option_r19.name));
  }
}
function ProblemWidgetComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Arguments");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ProblemWidgetComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 25)(1, "div", 26)(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "No arguments found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function ProblemWidgetComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "div", 27)(2, "div", 28)(3, "i", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProblemWidgetComponent_div_21_Template_i_click_3_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23);
      const arg_r20 = restoredCtx.$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r22.toggleShowRegex(arg_r20.value, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 32)(8, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProblemWidgetComponent_div_21_Template_input_ngModelChange_8_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23);
      const arg_r20 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](arg_r20.value.value = $event);
    })("change", function ProblemWidgetComponent_div_21_Template_input_change_8_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23);
      const arg_r20 = restoredCtx.$implicit;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r25.argDidChange(arg_r20.value, $event));
    })("blur", function ProblemWidgetComponent_div_21_Template_input_blur_8_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23);
      const arg_r20 = restoredCtx.$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r26.argDidChange(arg_r20.value, $event));
    })("focus", function ProblemWidgetComponent_div_21_Template_input_focus_8_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23);
      const arg_r20 = restoredCtx.$implicit;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r27.argDidFocus(arg_r20.value, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 34)(10, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProblemWidgetComponent_div_21_Template_button_click_10_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23);
      const arg_r20 = restoredCtx.$implicit;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r28.argDidReset(arg_r20.value, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("dblclick", function ProblemWidgetComponent_div_21_Template_div_dblclick_11_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23);
      const arg_r20 = restoredCtx.$implicit;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r29.toggleRegexFormat(arg_r20.value, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const arg_r20 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("id", "args-icon-" + arg_r20.value.key)("title", arg_r20.value.regex + "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", arg_r20.value.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", arg_r20.value.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", arg_r20.value.value)("placeholder", arg_r20.value.default)("title", arg_r20.value.name + ": " + arg_r20.value.regex);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("id", "args-regex-panel-" + arg_r20.value.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("id", "args-regex-" + arg_r20.value.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r10.clenupRegex(arg_r20.value.regex));
  }
}
function ProblemWidgetComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Files");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ProblemWidgetComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 25)(1, "div", 26)(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "No files found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function ProblemWidgetComponent_div_28_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 41)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const option_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](option_r34);
  }
}
function ProblemWidgetComponent_div_28_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 42)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const option_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](option_r35);
  }
}
function ProblemWidgetComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11)(1, "div", 27)(2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 38, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 32)(8, "p-dropdown", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onChange", function ProblemWidgetComponent_div_28_Template_p_dropdown_onChange_8_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r37);
      const file_r30 = restoredCtx.$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r36.fileDidChange(file_r30.value, $event));
    })("ngModelChange", function ProblemWidgetComponent_div_28_Template_p_dropdown_ngModelChange_8_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r37);
      const file_r30 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](file_r30.value.value = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, ProblemWidgetComponent_div_28_ng_template_9_Template, 3, 1, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, ProblemWidgetComponent_div_28_ng_template_10_Template, 3, 1, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const file_r30 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](file_r30.value.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("id", "file-dropdown-" + file_r30.value.key)("overlayOptions", ctx_r13.dropdownOptions)("options", ctx_r13.filePathList)("ngModel", file_r30.value.value)("showClear", true);
  }
}
class ServiceMenuEntry {
  constructor(name = "", descriptor) {
    this.name = name;
    this.descriptor = descriptor;
  }
}
class ProblemMenuEntry {
  constructor(name = "", descriptor) {
    this.name = name;
    this.descriptor = descriptor;
  }
}
class ProblemWidgetComponent {
  constructor(zone, api, pm, prjmnrg, messageService, tutorialService) {
    this.zone = zone;
    this.api = api;
    this.pm = pm;
    this.prjmnrg = prjmnrg;
    this.messageService = messageService;
    this.tutorialService = tutorialService;
    this.onProblemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.onServiceSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.onAttachments = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.onProblemListChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.problemsMenu = new Array();
    this.servicesMenu = new Array();
    this.filePathList = new Array();
    this.project = null;
    this.regexFormat = true;
    this.showRegex = true;
    this.loading = false;
    this.isBlurred = false;
    this.project = prjmnrg.getCurrentProject();
    this.problemSub = this.pm.onProblemsChanged.subscribe(clear => {
      this.problemsDidChange(clear);
    });
    this.tutorialService.onTutorialChange.subscribe(tutorial => {
      this.isTutorialShown(tutorial);
    }), this.tutorialService.onTutorialClose.subscribe(() => {
      this.isTutorialShown();
    });
    // https://primefaces.org/primeng/overlay
    //this.dropdownOptions = {appendTo:'body', mode: 'modal'}
    this.dropdownOptions = {
      appendTo: 'body'
    };
  }
  ngOnInit() {
    this.reloadProblemList();
    this.isBlurred = true;
  }
  isTutorialShown(tutorial) {
    console.log("ProblemWidgetComponent:isTutorialShown");
    if (typeof tutorial === 'undefined' || tutorial.componentName === "ProblemWidgetComponent") {
      this.isBlurred = false;
    } else {
      this.isBlurred = true;
    }
  }
  ngOnDestroy() {
    this.problemSub?.unsubscribe();
  }
  isLoading() {
    return this.loading;
  }
  refreshFilePathList() {
    this.filePathList = [...this.filePathList];
  }
  //args
  clenupRegex(re) {
    let text = re + "";
    text = text.replace(/\/(.*)\//, '$1');
    text = text.replace(/\^(.*)\$/, '$1');
    text = text.replace(/\((.*)\)/, '$1');
    text = text.replace(/\|/g, ' OR ');
    return text;
  }
  cleanupName(name) {
    var pattern = new RegExp('[-_. ]+', 'g');
    name = name.replace(pattern, " ");
    name = name.charAt(0).toUpperCase() + name.slice(1);
    return name;
  }
  readableRegex(re) {
    let text = re + "";
    text = text.replace(/\/(.*)\//, '$1');
    text = text.replace(/\^(.*)\$/, '$1');
    text = text.replace(/\[([^\]]*)\]/, (match, content) => {
      if (content.startsWith('^')) {
        return ' invalid(' + content.slice(1) + ') ';
      }
      return ' valid(' + content.slice(1) + ') ';
    });
    text = text.replace(/\(([^|]+|)*([^|]+)*\)/g, (match, options, last) => {
      console.log('OROR:', match, options, last);
      return text.replace(/\((.*)\)/, '$1').replace(/\|/g, ' OR ');
    });
    return text;
  }
  argDidFocus(arg, event) {
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('argDidFocus:', arg, event);
      let idPanel = 'args-regex-panel-' + arg.key;
      let idRegex = 'args-regex-' + arg.key;
      let panel = document.getElementById(idPanel);
      let regex = document.getElementById(idRegex);
      if (!(panel instanceof HTMLElement)) {
        return;
      }
      if (!(regex instanceof HTMLElement)) {
        return;
      }
      console.log('argDidFocus:show!');
      panel.style.display = "flex";
      if (regex.style.color == "red") {
        regex.style.color = "orange";
      } else {
        regex.style.color = "";
      }
    })();
  }
  argDidChange(arg, event) {
    var _this = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('argDidChange:', arg, event);
      let idPanel = 'args-regex-panel-' + arg.key;
      let idRegex = 'args-regex-' + arg.key;
      let panel = document.getElementById(idPanel);
      let regex = document.getElementById(idRegex);
      if (!(panel instanceof HTMLElement)) {
        return;
      }
      if (!(regex instanceof HTMLElement)) {
        return;
      }
      console.log('argDidFocus:validate');
      let issues = _this.pm.validateArg(arg);
      if (issues !== null) {
        regex.style.color = "red";
        panel.style.display = "flex";
      } else if (arg.value != arg.default) {
        regex.style.color = "green";
        panel.style.display = "flex";
      } else {
        regex.style.color = "";
        panel.style.display = "none";
      }
    })();
  }
  argDidReset(arg, event) {
    var _this2 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('argDidReset:', arg.key, event);
      arg.value = arg.default ?? "";
      _this2.argDidChange(arg, event);
    })();
  }
  validateArgs() {
    var _this3 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let result = undefined;
      if (_this3.selectedService) {
        result = _this3.pm.validateArgs(_this3.selectedService);
      }
      return result;
    })();
  }
  //files
  fileDidChange(file, event) {
    var _this4 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('fileDidChange:', file.key, event);
      let path = event.value ?? "";
      let idDropdown = 'file-dropdown-' + file.key;
      let dropdown = document.getElementById(idDropdown);
      if (!(dropdown instanceof HTMLElement)) {
        return;
      }
      console.log('fileDidChange:dropdown:found', dropdown);
      if (path == "") {
        dropdown.style.color = "";
        //file.value = ""
        return;
      }
      let pathExist = yield _this4.project?.driver.exists(path);
      console.log('fileDidChange:pathExist:', pathExist);
      if (!pathExist) {
        dropdown.style.color = "red";
        //file.value = ""
      } else {
        dropdown.style.color = "green";
        //file.value = path
      }
    })();
  }
  fileDidReset(file, event) {
    var _this5 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('fileDidReset:', file.key, event);
      let idDropdown = 'file-dropdown-' + file.key;
      let dropdown = document.getElementById(idDropdown);
      console.log('fileDidReset:', dropdown);
      if (!(dropdown instanceof primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__.Dropdown)) {
        return;
      }
      dropdown.clear(event);
      file.value = "";
      _this5.refreshFilePathList();
    })();
  }
  //UI
  toggleShowRegex(arg, event) {
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let idPanel = 'args-regex-panel-' + arg.key;
      let panel = document.getElementById(idPanel);
      if (!(panel instanceof HTMLElement)) {
        return;
      }
      panel.style.display = panel.style.display == 'none' ? 'flex' : 'none';
    })();
  }
  toggleRegexFormat(arg, event) {
    var _this6 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let idRegex = 'args-regex-' + arg.key;
      let regex = document.getElementById(idRegex);
      if (!(regex instanceof HTMLElement)) {
        return;
      }
      if (regex.classList.contains('format-regex-simple')) {
        regex.classList.remove('format-regex-simple');
        regex.innerText = arg.regex + "";
      } else {
        regex.classList.add('format-regex-simple');
        regex.innerText = _this6.clenupRegex(arg.regex);
      }
    })();
  }
  reloadProblemList() {
    var _this7 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this7.selectedProblem = undefined;
      _this7.selectedService = undefined;
      _this7.selectedArgs = undefined;
      _this7.selectedFiles = undefined;
      _this7.problemsMenu = [];
      _this7.servicesMenu = [];
      _this7.loading = true;
      console.log;
      _this7.pm.updateProblems();
    })();
  }
  problemsDidChange(clear) {
    var _this8 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this8.problemsMenu = [];
      _this8.servicesMenu = [];
      _this8.loading = true;
      if (clear) return;
      let problemsMenu = new Array(); // [...this.pm.problemList] // ez ?
      _this8.pm.problemList.forEach(problemDesc => {
        problemsMenu.push(problemDesc);
      });
      problemsMenu = problemsMenu.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 0);
      console.log('updateProblemsUI:problemsMenu:', problemsMenu);
      _this8.problemsMenu = problemsMenu;
      _this8.loading = false;
      _this8.onProblemListChanged.emit();
    })();
  }
  //API
  onApiError(message) {
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("API Error: ", message);
    })();
  }
  didSelectProblem() {
    var _this9 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this9.selectedService = undefined;
      _this9.selectedArgs = undefined;
      _this9.selectedFiles = undefined;
      console.log('didSelectProblem:', _this9.selectedProblem);
      if (!_this9.selectedProblem) {
        return;
      }
      _this9.pm.selectProblem(_this9.selectedProblem);
      let servicesMenu = new Array();
      _this9.selectedProblem.services.forEach(serviceDesc => {
        servicesMenu.push(serviceDesc);
      });
      servicesMenu = servicesMenu.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 0);
      _this9.servicesMenu = servicesMenu;
      console.log('didSelectProblem:servicesMenu:', servicesMenu);
      _this9.servicesMenu = servicesMenu;
      _this9.onProblemSelected.emit(_this9.selectedProblem);
    })();
  }
  didSelectService() {
    var _this10 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('didSelectService:', _this10.selectedService);
      if (!_this10.selectedService) {
        return;
      }
      _this10.pm.selectService(_this10.selectedService);
      _this10.selectedArgs = _this10.selectedService.args;
      _this10.selectedFiles = _this10.selectedService.files;
      console.log('didSelectService:selectedArgs:', _this10.selectedArgs);
      _this10.onServiceSelected.emit(_this10.selectedService);
      _this10.refreshFilePathList();
    })();
  }
  apiDownloadAttachment() {
    var _this11 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('apiDownloadAttachment:', _this11.selectedProblem);
      if (!_this11.selectedProblem) {
        _this11.messageService.add({
          key: 'br',
          severity: 'error',
          summary: 'Error',
          detail: 'No problem selected'
        });
        return;
      }
      let onAttachment = () => {
        console.log("Attachment packet received");
      };
      let onAttachmentInfo = info => {
        console.log('apiDownloadAttachment:info:', info);
      };
      let onData = data => {
        console.log("apiDownloadAttachment:onData:", data);
        _this11.onAttachments.emit(data);
      };
      let req = _this11.api.GetAttachment(_this11.selectedProblem.name, onAttachment, onAttachmentInfo, onData);
      req.onError = error => {
        _this11.onApiError(error);
      };
    })();
  }
}
ProblemWidgetComponent.ɵfac = function ProblemWidgetComponent_Factory(t) {
  return new (t || ProblemWidgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_api_service_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_problem_manager_service_problem_manager_service__WEBPACK_IMPORTED_MODULE_2__.ProblemManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_project_manager_service_project_manager_service__WEBPACK_IMPORTED_MODULE_3__.ProjectManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_tutorial_service_tutorial_service__WEBPACK_IMPORTED_MODULE_4__.TutorialService));
};
ProblemWidgetComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: ProblemWidgetComponent,
  selectors: [["tal-problem-widget"]],
  viewQuery: function ProblemWidgetComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.problemDropdown = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.serviceDropdown = _t.first);
    }
  },
  outputs: {
    onProblemSelected: "onProblemChanged",
    onServiceSelected: "onServiceChanged",
    onAttachments: "onAttachments",
    onProblemListChanged: "onProblemListChanged"
  },
  decls: 31,
  vars: 18,
  consts: [[1, "tal-problem-widget"], [1, "tal-problem-widget-row", "tal-problem-widget-row-problem"], ["placeholder", "Select a problem", "scrollHeight", "50rem", "panelStyleClass", "tal-problem-widget-problem-selector-panel", "optionLabel", "name", 1, "tal-problem-widget-problem-selector", 3, "overlayOptions", "options", "ngModel", "ngModelChange", "onChange"], ["problemDropdown", ""], ["pTemplate", "selectedItem"], ["pTemplate", "item"], ["pButton", "", "class", "p-button-danger tal-square-button", "icon", "pi pi-refresh", "pTooltip", "Refresh", 3, "click", 4, "ngIf"], ["pButton", "", "class", "p-button-danger tal-square-button", "icon", "pi pi-spin pi-spinner", "pTooltip", "Refresh", "disabled", "", 4, "ngIf"], ["placeholder", "Select a service", "scrollHeight", "50rem", "panelStyleClass", "tal-problem-widget-problem-selector-panel", "optionLabel", "name", 1, "tal-problem-widget-problem-selector", 3, "overlayOptions", "options", "ngModel", "ngModelChange", "onChange"], ["serviceDropdown", ""], ["pButton", "", "icon", "pi pi-download", "pTooltip", "Download Attachments", 1, "p-button-help", "tal-square-button", 3, "click"], [1, "tal-problem-widget-args-row"], ["header", "Arguments"], ["pTemplate", "header", "class", "tal-problem-widget-args-row"], [1, "tal-problem-widget-row", "tal-problem-widget-args"], ["class", "tal-problem-widget-args-row stretch-flex", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["header", "Files"], ["class", "tal-problem-widget-args-row", 4, "ngFor", "ngForOf"], ["position", "bottom-right", "key", "br"], [1, "tal-problem-widget-problem-selected"], [1, "tal-problem-widget-problem-item"], ["pButton", "", "icon", "pi pi-refresh", "pTooltip", "Refresh", 1, "p-button-danger", "tal-square-button", 3, "click"], ["pButton", "", "icon", "pi pi-spin pi-spinner", "pTooltip", "Refresh", "disabled", "", 1, "p-button-danger", "tal-square-button"], [1, "tal-problem-widget-label"], [1, "tal-problem-widget-args-row", "stretch-flex"], [1, "tal-problem-widget-args-row-no-params"], [1, "tal-problem-widget-args-subrow"], [1, "tal-problem-widget-args-row-info"], [1, "pi", "pi-info-circle", 2, "cursor", "pointer", 3, "id", "title", "click"], ["argsIcons", ""], [1, "tal-problem-widget-args-row-name", 2, "margin-right", "30px", 3, "title"], [1, "tal-problem-widget-args-row-field"], ["pInputText", "", "type", "text", 1, "p-inputtext-sm", 3, "ngModel", "placeholder", "title", "ngModelChange", "change", "blur", "focus"], [1, "tal-problem-widget-args-row-actions"], ["pButton", "", "icon", "pi pi-delete-left", "title", "Reset to default", "pTooltip", "Reset to default", 1, "p-button-lg", 3, "click"], [1, "tal-problem-widget-args-subrow", 2, "display", "none", "cursor", "pointer", 3, "id", "dblclick"], [1, "tal-problem-widget-args-subrow-regexpr", "format-regex-simple", 3, "id"], [1, "pi", "pi-file"], [1, "tal-problem-widget-args-row-name"], ["placeholder", "Select a file", "styleClass", "tal-problem-widget-files-dropdown", "panelStyleClass", "tal-problem-widget-files-dropdown-panel", 3, "id", "overlayOptions", "options", "ngModel", "showClear", "onChange", "ngModelChange"], [1, "tal-problem-widget-files-selected"], [1, "tal-problem-widget-files-item"]],
  template: function ProblemWidgetComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p-dropdown", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProblemWidgetComponent_Template_p_dropdown_ngModelChange_2_listener($event) {
        return ctx.selectedProblem = $event;
      })("onChange", function ProblemWidgetComponent_Template_p_dropdown_onChange_2_listener() {
        return ctx.didSelectProblem();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ProblemWidgetComponent_ng_template_4_Template, 2, 1, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ProblemWidgetComponent_ng_template_5_Template, 2, 1, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, ProblemWidgetComponent_button_6_Template, 1, 0, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ProblemWidgetComponent_button_7_Template, 1, 0, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 1)(9, "p-dropdown", 8, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ProblemWidgetComponent_Template_p_dropdown_ngModelChange_9_listener($event) {
        return ctx.selectedService = $event;
      })("onChange", function ProblemWidgetComponent_Template_p_dropdown_onChange_9_listener() {
        return ctx.didSelectService();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, ProblemWidgetComponent_ng_template_11_Template, 2, 1, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, ProblemWidgetComponent_ng_template_12_Template, 2, 1, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProblemWidgetComponent_Template_button_click_13_listener() {
        return ctx.apiDownloadAttachment();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 11)(15, "p-tabView")(16, "p-tabPanel", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, ProblemWidgetComponent_ng_template_17_Template, 2, 0, "ng-template", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, ProblemWidgetComponent_div_19_Template, 4, 0, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "p-scrollPanel", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, ProblemWidgetComponent_div_21_Template, 14, 10, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](22, "keyvalue");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "p-tabPanel", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, ProblemWidgetComponent_ng_template_24_Template, 2, 0, "ng-template", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "p-scrollPanel", 14)(26, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, ProblemWidgetComponent_div_27_Template, 4, 0, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, ProblemWidgetComponent_div_28_Template, 11, 6, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](29, "keyvalue");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "p-toast", 19);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("blur", ctx.isBlurred);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("overlayOptions", ctx.dropdownOptions)("options", ctx.problemsMenu)("ngModel", ctx.selectedProblem);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isLoading());
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoading());
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("overlayOptions", ctx.dropdownOptions)("options", ctx.servicesMenu)("ngModel", ctx.selectedService);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.selectedArgs || ctx.selectedArgs.size == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](22, 14, ctx.selectedArgs));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.selectedFiles || ctx.selectedFiles.size == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](29, 16, ctx.selectedFiles));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, primeng_button__WEBPACK_IMPORTED_MODULE_10__.ButtonDirective, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, primeng_tooltip__WEBPACK_IMPORTED_MODULE_11__.Tooltip, primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__.InputText, primeng_toast__WEBPACK_IMPORTED_MODULE_13__.Toast, primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__.Dropdown, primeng_tabview__WEBPACK_IMPORTED_MODULE_14__.TabView, primeng_tabview__WEBPACK_IMPORTED_MODULE_14__.TabPanel, primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_15__.ScrollPanel, _angular_common__WEBPACK_IMPORTED_MODULE_8__.KeyValuePipe],
  styles: [".blur[_ngcontent-%COMP%] {\n  position: relative;\n  background-size: cover;\n  position: relative;\n  overflow: hidden;\n  filter: blur(10px); \n  -webkit-backdrop-filter: blur(3px); \n  backdrop-filter: blur(100%);\n  \n  pointer-events: none;\n  \n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.a[_ngcontent-%COMP%] {\n  color: red;\n  pointer-events: auto;\n  -webkit-user-select: auto;\n          user-select: auto;\n}\n\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n[_nghost-%COMP%]     .tal-problem-widget-args-row .p-inputtext {\n  min-height: 20px;\n  height: 20px;\n}\n\n[_nghost-%COMP%]     .tal-problem-widget-args-row .tal-square-button {\n  margin-top: 7px;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n\n    .p-scrollpanel-wrapper,     .p-scrollpanel-content,     .p-scrollpanel {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin: 0px;\n  padding: 0px;\n  word-wrap: break-word;\n  flex-wrap: wrap;\n}\n\n  .tal-problem-widget-row-problem .p-dropdown,   .tal-problem-widget-row-service .p-dropdown {\n  height: 30px;\n  margin-right: 5px;\n}\n\n  .tal-problem-widget-row-problem .p-dropdown-label,   .tal-problem-widget-row-service .p-dropdown-label {\n  height: 30px;\n  padding: 5px !important;\n}\n\n  .tal-problem-widget-args-subrow .p-dropdown {\n  height: 22px;\n}\n\n  .tal-problem-widget-args-subrow .p-dropdown-label {\n  height: 22px;\n  padding: 2px !important;\n}\n\n  .tal-problem-widget-args-subrow .tal-problem-widget-files-selected {\n  width: 100%;\n}\n\n  .tal-problem-widget-args-row-field {\n  display: flex;\n  flex-direction: row;\n  flex-grow: 5;\n}\n\n  .tal-problem-widget-args-row-field p-dropdown,   .tal-problem-widget-args-row-field .p-inputwrapper {\n  display: flex;\n  width: 100%;\n}\n\n  .tal-problem-widget .p-tabview-nav li {\n  width: 50%;\n  align-content: center;\n}\n\n  .tal-problem-widget .p-tabview-ink-bar {\n  width: 50% !important;\n}\n\n  .tal-problem-widget .p-tabview-nav-link {\n  margin: 0px !important;\n  padding: 0px !important;\n  width: 100%;\n  height: 100%;\n}\n\n  .tal-problem-widget .p-tabview-panels {\n  margin: 0px;\n  padding: 0px;\n}\n\n  .tal-problem-widget-problem-selector-panel .p-dropdown-item {\n  height: 30px;\n  margin: 5px !important;\n  padding: 5px !important;\n}\n\n  .tal-problem-widget-files-dropdown-panel .p-dropdown-item {\n  height: 22px;\n  margin: 2px !important;\n  padding: 2px !important;\n}\n\n.tal-problem-widget[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.tal-problem-widget[_ngcontent-%COMP%]   .tal-problem-widget-row-problem[_ngcontent-%COMP%], .tal-problem-widget[_ngcontent-%COMP%]   .tal-problem-widget-row-service[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 5px;\n}\n\n.tal-problem-widget[_ngcontent-%COMP%]   .tal-problem-widget-row-problem[_ngcontent-%COMP%]   .tal-problem-widget-problem-selector[_ngcontent-%COMP%], .tal-problem-widget[_ngcontent-%COMP%]   .tal-problem-widget-row-problem[_ngcontent-%COMP%]   .tal-problem-widget-service-selector[_ngcontent-%COMP%], .tal-problem-widget[_ngcontent-%COMP%]   .tal-problem-widget-row-service[_ngcontent-%COMP%]   .tal-problem-widget-problem-selector[_ngcontent-%COMP%], .tal-problem-widget[_ngcontent-%COMP%]   .tal-problem-widget-row-service[_ngcontent-%COMP%]   .tal-problem-widget-service-selector[_ngcontent-%COMP%] {\n  flex-grow: 2;\n  display: flex;\n  align-items: center;\n}\n\n.tal-problem-widget[_ngcontent-%COMP%]   .tal-problem-widget-row-problem[_ngcontent-%COMP%]:first-child {\n  padding-bottom: 0px;\n}\n\n.tal-problem-widget[_ngcontent-%COMP%]   .tal-problem-widget-label[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  font-weight: 600;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\n\n.tal-problem-widget[_ngcontent-%COMP%]   .tal-problem-widget-args-row-title[_ngcontent-%COMP%] {\n  display: flex;\n  font-weight: bold;\n}\n\n.tal-problem-widget[_ngcontent-%COMP%]   .tal-problem-widget-args-row-no-params[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  height: 100%;\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid #444;\n}\n\n.tal-problem-widget[_ngcontent-%COMP%]   .tal-problem-widget-args[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  font-family: monospace;\n}\n\n.tal-problem-widget[_ngcontent-%COMP%]   .tal-problem-widget-args[_ngcontent-%COMP%]   .tal-problem-widget-args-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 5px;\n  border-bottom: 1px solid #333;\n}\n\n.tal-problem-widget[_ngcontent-%COMP%]   .tal-problem-widget-args[_ngcontent-%COMP%]   .tal-problem-widget-args-subrow[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  flex-direction: row;\n  align-items: center;\n}\n\n.tal-problem-widget[_ngcontent-%COMP%]   .tal-problem-widget-args[_ngcontent-%COMP%]   .tal-problem-widget-args-subrow[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  min-height: 20px;\n  max-height: 20px;\n}\n\n.tal-problem-widget[_ngcontent-%COMP%]   .tal-problem-widget-args[_ngcontent-%COMP%]   .tal-problem-widget-args-row[_ngcontent-%COMP%]:last-child {\n  border: 0px;\n}\n\n.tal-problem-widget[_ngcontent-%COMP%]   .tal-problem-widget-args[_ngcontent-%COMP%]   .tal-problem-widget-args-row-info[_ngcontent-%COMP%] {\n  display: flex;\n  width: 20px;\n  padding: 5px;\n}\n\n.tal-problem-widget[_ngcontent-%COMP%]   .tal-problem-widget-args[_ngcontent-%COMP%]   .tal-problem-widget-args-row-name[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n  width: 10em;\n  padding-left: 5px;\n  font-size: 80%;\n}\n\n.tal-problem-widget[_ngcontent-%COMP%]   .tal-problem-widget-args[_ngcontent-%COMP%]   .tal-problem-widget-args-row-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 6;\n  padding: 0px 5px;\n}\n\n.tal-problem-widget[_ngcontent-%COMP%]   .tal-problem-widget-args[_ngcontent-%COMP%]   .tal-problem-widget-args-row-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.tal-problem-widget[_ngcontent-%COMP%]   .tal-problem-widget-args[_ngcontent-%COMP%]   .tal-problem-widget-args-row-actions[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 5px;\n}\n\n.tal-problem-widget[_ngcontent-%COMP%]   .tal-problem-widget-args[_ngcontent-%COMP%]   .tal-problem-widget-args-subrow-regexpr[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: gray;\n  word-wrap: break-word;\n  font-family: monospace;\n}\n\n.tal-problem-widget-problem-selected[_ngcontent-%COMP%]   .problem-label[_ngcontent-%COMP%], .tal-problem-widget-problem-item[_ngcontent-%COMP%]   .problem-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-transform: c-talize;\n  padding: 1px 10px 1px 10px;\n  background-color: #555;\n  border-radius: 20px;\n}\n\n.tal-problem-widget-problem-selected[_ngcontent-%COMP%]   .service-label[_ngcontent-%COMP%], .tal-problem-widget-problem-item[_ngcontent-%COMP%]   .service-label[_ngcontent-%COMP%] {\n  padding-left: 3px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2JsdXIuc2NzcyIsInByb2JsZW0td2lkZ2V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQSxFQUFBLGdEQUFBO0VBQ0Esa0NBQUEsRUFFRyxvREFBQTtFQUNILDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdEQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQ0RGOztBRElBO0VBQ0UsVUFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQ0RGOztBQVpBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFlRjs7QUFYRTtFQUlFLGdCQUFBO0VBQ0EsWUFBQTtBQVdKOztBQU5FO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBUUo7O0FBRkk7OztFQUdFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQUtOOztBQUNJOztFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQUVOOztBQUFJOztFQUNFLFlBQUE7RUFDQSx1QkFBQTtBQUdOOztBQUVJO0VBQ0UsWUFBQTtBQUFOOztBQUVJO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0FBQU47O0FBRUk7RUFDRSxXQUFBO0FBQU47O0FBSUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBRko7O0FBSUk7O0VBRUUsYUFBQTtFQUNBLFdBQUE7QUFGTjs7QUFPSTtFQUNFLFVBQUE7RUFDQSxxQkFBQTtBQUxOOztBQVFJO0VBQ0UscUJBQUE7QUFOTjs7QUFTSTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtBQVJOOztBQVdJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFUTjs7QUFlSTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBYk47O0FBa0JJO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFoQk47O0FBcUJBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQWxCRjs7QUFvQkU7O0VBRUUsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBbEJKOztBQW9CSTs7OztFQUVFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFoQk47O0FBb0JFO0VBQ0UsbUJBQUE7QUFsQko7O0FBcUJFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQW5CSjs7QUFzQkU7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUFwQko7O0FBdUJFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQXJCSjs7QUF3QkU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFJQSxzQkFBQTtBQXpCSjs7QUEyQkk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQXpCTjs7QUE0Qkk7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUVBLG1CQUFBO0VBQ0EsbUJBQUE7QUEzQk47O0FBNkJNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBM0JSOztBQStCSTtFQUNFLFdBQUE7QUE3Qk47O0FBZ0NJO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBOUJOOztBQWlDSTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQS9CTjs7QUFrQ0k7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBaENOOztBQWlDTTtFQUNFLFdBQUE7QUEvQlI7O0FBbUNJO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUFqQ047O0FBb0NJO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FBbENOOztBQXlDRTs7RUFDRSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBckNKOztBQXVDRTs7RUFDRSxpQkFBQTtBQXBDSjs7QUF3Q0E7RUFDRSxrQkFBQTtBQXJDRiIsImZpbGUiOiJwcm9ibGVtLXdpZGdldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibHVye1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZmlsdGVyOiBibHVyKDEwcHgpOyAvKiBNb2RpZmljYSBpbCB2YWxvcmUgZGkgYmx1ciBhIHR1byBwaWFjaW1lbnRvICovXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKFxuICAgIDNweFxuICApOyAvKiBQZXIgaSBicm93c2VyIGJhc2F0aSBzdSBXZWJLaXQgKENocm9tZSwgU2FmYXJpKSAqL1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTAwJSk7XG4gIC8qIEJsb2NjYSBpbCBjbGljayBhaSBib3R0b25pICovXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAvKiBQZXJtZXR0ZSBkaSBibG9jY2FyZSBsYSBzZWxlemlvbmUgZGVsIHRlc3RvICovXG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uYSB7XG4gIGNvbG9yOiByZWQ7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICB1c2VyLXNlbGVjdDogYXV0bztcbn1cbiIsIkBpbXBvcnQgXCIuLi9ibHVyLnNjc3NcIjtcblxuLmJsdXIge1xuICBAZXh0ZW5kIC5ibHVyO1xufVxuXG46aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAudGFsLXByb2JsZW0td2lkZ2V0LWFyZ3Mtcm93IHtcbiAgLnAtaW5wdXR0ZXh0IHtcbiAgICAvL2JvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICAvL21hcmdpbi10b3A6IDdweDtcbiAgICAvL21hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbWluLWhlaWdodDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgLy9tYXJnaW4tbGVmdDogMTBweDtcbiAgICAvL3BhZGRpbmctYm90dG9tOiAxMHB4O1xuICB9XG5cbiAgLnRhbC1zcXVhcmUtYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiA3cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIH1cbn1cblxuOjpuZy1kZWVwIHtcbiAgOjpuZy1kZWVwIHtcbiAgICAucC1zY3JvbGxwYW5lbC13cmFwcGVyLFxuICAgIC5wLXNjcm9sbHBhbmVsLWNvbnRlbnQsXG4gICAgLnAtc2Nyb2xscGFuZWwge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgIH1cbiAgfVxuXG4gIC50YWwtcHJvYmxlbS13aWRnZXQtcm93LXByb2JsZW0sXG4gIC50YWwtcHJvYmxlbS13aWRnZXQtcm93LXNlcnZpY2Uge1xuICAgIC5wLWRyb3Bkb3duIHtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIH1cbiAgICAucC1kcm9wZG93bi1sYWJlbCB7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcbiAgICB9XG4gIH1cblxuICAudGFsLXByb2JsZW0td2lkZ2V0LWFyZ3Mtc3Vicm93IHtcbiAgICAucC1kcm9wZG93biB7XG4gICAgICBoZWlnaHQ6IDIycHg7XG4gICAgfVxuICAgIC5wLWRyb3Bkb3duLWxhYmVsIHtcbiAgICAgIGhlaWdodDogMjJweDtcbiAgICAgIHBhZGRpbmc6IDJweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAudGFsLXByb2JsZW0td2lkZ2V0LWZpbGVzLXNlbGVjdGVkIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuXG4gIC50YWwtcHJvYmxlbS13aWRnZXQtYXJncy1yb3ctZmllbGQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LWdyb3c6IDU7XG5cbiAgICBwLWRyb3Bkb3duLFxuICAgIC5wLWlucHV0d3JhcHBlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG5cbiAgLnRhbC1wcm9ibGVtLXdpZGdldCB7XG4gICAgLnAtdGFidmlldy1uYXYgbGkge1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAucC10YWJ2aWV3LWluay1iYXIge1xuICAgICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5wLXRhYnZpZXctbmF2LWxpbmsge1xuICAgICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuXG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICAucC10YWJ2aWV3LXBhbmVscyB7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIHBhZGRpbmc6IDBweDtcbiAgICB9XG4gIH1cblxuICAvL29wZW5zIGRldGFjaGVkIGluc2lkZSA8Ym9keT5cbiAgLnRhbC1wcm9ibGVtLXdpZGdldC1wcm9ibGVtLXNlbGVjdG9yLXBhbmVsIHtcbiAgICAucC1kcm9wZG93bi1pdGVtIHtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIG1hcmdpbjogNXB4ICFpbXBvcnRhbnQ7XG4gICAgICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcbiAgICB9XG4gIH1cblxuICAudGFsLXByb2JsZW0td2lkZ2V0LWZpbGVzLWRyb3Bkb3duLXBhbmVsIHtcbiAgICAucC1kcm9wZG93bi1pdGVtIHtcbiAgICAgIGhlaWdodDogMjJweDtcbiAgICAgIG1hcmdpbjogMnB4ICFpbXBvcnRhbnQ7XG4gICAgICBwYWRkaW5nOiAycHggIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cblxuLnRhbC1wcm9ibGVtLXdpZGdldCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcblxuICAudGFsLXByb2JsZW0td2lkZ2V0LXJvdy1wcm9ibGVtLFxuICAudGFsLXByb2JsZW0td2lkZ2V0LXJvdy1zZXJ2aWNlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA1cHg7XG5cbiAgICAudGFsLXByb2JsZW0td2lkZ2V0LXByb2JsZW0tc2VsZWN0b3IsXG4gICAgLnRhbC1wcm9ibGVtLXdpZGdldC1zZXJ2aWNlLXNlbGVjdG9yIHtcbiAgICAgIGZsZXgtZ3JvdzogMjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gIC50YWwtcHJvYmxlbS13aWRnZXQtcm93LXByb2JsZW06Zmlyc3QtY2hpbGQge1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIH1cblxuICAudGFsLXByb2JsZW0td2lkZ2V0LWxhYmVsIHtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLnRhbC1wcm9ibGVtLXdpZGdldC1hcmdzLXJvdy10aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC50YWwtcHJvYmxlbS13aWRnZXQtYXJncy1yb3ctbm8tcGFyYW1zIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8vIGxlZnQtcmlnaHRcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAvLyB0b3AtYm90dG9tXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzQ0NDtcbiAgfVxuXG4gIC50YWwtcHJvYmxlbS13aWRnZXQtYXJncyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC8vd2lkdGg6IDEwMCU7XG4gICAgLy9vdmVyZmxvdzogYXV0bztcblxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG5cbiAgICAudGFsLXByb2JsZW0td2lkZ2V0LWFyZ3Mtcm93IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzO1xuICAgIH1cblxuICAgIC50YWwtcHJvYmxlbS13aWRnZXQtYXJncy1zdWJyb3cge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDIwcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRhbC1wcm9ibGVtLXdpZGdldC1hcmdzLXJvdzpsYXN0LWNoaWxkIHtcbiAgICAgIGJvcmRlcjogMHB4O1xuICAgIH1cblxuICAgIC50YWwtcHJvYmxlbS13aWRnZXQtYXJncy1yb3ctaW5mbyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgfVxuXG4gICAgLnRhbC1wcm9ibGVtLXdpZGdldC1hcmdzLXJvdy1uYW1lIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICB3aWR0aDogMTBlbTtcbiAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgZm9udC1zaXplOiA4MCU7XG4gICAgfVxuXG4gICAgLnRhbC1wcm9ibGVtLXdpZGdldC1hcmdzLXJvdy1maWVsZCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1ncm93OiA2O1xuICAgICAgcGFkZGluZzogMHB4IDVweDtcbiAgICAgIGlucHV0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRhbC1wcm9ibGVtLXdpZGdldC1hcmdzLXJvdy1hY3Rpb25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgfVxuXG4gICAgLnRhbC1wcm9ibGVtLXdpZGdldC1hcmdzLXN1YnJvdy1yZWdleHByIHtcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICB9XG4gIH1cbn1cblxuLnRhbC1wcm9ibGVtLXdpZGdldC1wcm9ibGVtLXNlbGVjdGVkLFxuLnRhbC1wcm9ibGVtLXdpZGdldC1wcm9ibGVtLWl0ZW0ge1xuICAucHJvYmxlbS1sYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IGMtdGFsaXplO1xuICAgIHBhZGRpbmc6IDFweCAxMHB4IDFweCAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgfVxuICAuc2VydmljZS1sYWJlbCB7XG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XG4gIH1cbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuIl19 */"]
});

/***/ }),

/***/ 1498:
/*!**********************************************************************************!*\
  !*** ./src/app/widgets/code-editor/terminal-widget/terminal-widget.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TerminalWidgetComponent": () => (/* binding */ TerminalWidgetComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 3918);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_problem_manager_service_problem_manager_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/problem-manager-service/problem-manager.types */ 9957);
/* harmony import */ var src_app_services_fs_service_fs_service_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/fs-service/fs.service.types */ 118);
/* harmony import */ var src_app_services_api_service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-service/api.service */ 7829);
/* harmony import */ var src_app_services_api_service_api_packets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-service/api.packets */ 6371);
/* harmony import */ var primeng_terminal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/terminal */ 8593);
/* harmony import */ var src_app_services_terminal_api_service_terminal_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/terminal-api-service/terminal-api.service */ 914);
/* harmony import */ var src_app_services_compiler_service_compiler_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/compiler-service/compiler-service.service */ 6639);
/* harmony import */ var src_app_services_tutorial_service_tutorial_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/tutorial-service/tutorial.service */ 8352);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);












class TerminalWidgetComponent {
  ////////////////////////////////////////////////////////////////////////
  constructor(zone, terminalService, api, compiler, tutorialService) {
    this.zone = zone;
    this.terminalService = terminalService;
    this.api = api;
    this.compiler = compiler;
    this.tutorialService = tutorialService;
    this.onAttachments = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.onProblemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.problemList = new _services_problem_manager_service_problem_manager_types__WEBPACK_IMPORTED_MODULE_1__.ProblemList();
    this.problems = new _services_problem_manager_service_problem_manager_types__WEBPACK_IMPORTED_MODULE_1__.ProblemMap();
    this.services = new _services_problem_manager_service_problem_manager_types__WEBPACK_IMPORTED_MODULE_1__.ServiceMap();
    this.savedParams = new _services_problem_manager_service_problem_manager_types__WEBPACK_IMPORTED_MODULE_1__.ParamsMap();
    this.onError = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.onProblemsChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.onResponseComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.terminalHistory = [];
    this.terminalHistoryIndex = -1;
    this.prompt = "TALight>";
    this.commandConnectState = false;
    ////////////////////////////////////////////////////////////////////////
    this.binEncoder = new TextEncoder(); // always utf-8
    this.binDecoder = new TextDecoder("utf-8");
    this.project = null;
    this.apiRun = false;
    this.fslistfile = [];
    this.output_files = undefined;
    this.current_output_file = undefined;
    this.connectParams = {};
    this.isBlurred = false;
    this.tutorialService.onTutorialChange.subscribe(tutorial => {
      this.isTutorialShown(tutorial);
    }), this.tutorialService.onTutorialClose.subscribe(() => {
      this.isTutorialShown();
    });
  }
  ngOnInit() {
    this.isBlurred = true;
    this.terminalService.commandHandler.subscribe(command => {
      this.onResponseComplete.subscribe({
        next: payload => {
          this.terminalService.sendResponse(this.response);
        }
      });
      // Prepare command string to analysis
      command = command.trim();
      this.commandSplit = command.split(' ');
      console.log("CommandSplit: ", this.commandSplit);
      // When 'rtal connect' is running
      if (this.commandConnectState) {
        if (!this.cmdConnect) {
          return;
        }
        this.cmdConnect.sendBinary(command + "\n");
        this.response = '';
      } else {
        // save command in terminal history/cache
        this.terminalHistory.push(command);
        this.terminalHistoryIndex = this.terminalHistory.length;
        if (this.commandSplit[0] === 'rtal') {
          if (this.commandSplit.length == 1) {
            this.response = this.HelpMessage();
            this.onResponseComplete.emit();
          } else {
            switch (this.commandSplit[1]) {
              case 'help':
              case '--help':
              case '-h':
                this.response = this.HelpMessage();
                this.onResponseComplete.emit();
                break;
              case '-s':
              case '--server-url':
                if (this.commandSplit.length == 2) {
                  this.response = this.ErrorMessage02();
                  this.onResponseComplete.emit();
                } else {
                  this.url = this.commandSplit[2];
                  if (this.commandSplit.length == 3) {
                    this.response = this.HelpMessage();
                    this.onResponseComplete.emit();
                  } else {
                    if (this.commandSplit[3] == 'get') {
                      if (this.commandSplit.length === 5) {
                        this.problemSearch = this.commandSplit[4];
                        this.onGetCommand();
                      } else {
                        this.response = this.ErrorMessage07(this.commandSplit[5]);
                        this.onResponseComplete.emit();
                      }
                    } else if (this.commandSplit[3] == 'list') {
                      this.command = 'list';
                      this.getListProblems(this.url);
                    } else if (this.commandSplit[3] == "connect") {
                      this.onConnectCommand();
                    } else {
                      this.response = this.ErrorMessage03(this.commandSplit[3]);
                      this.onResponseComplete.emit();
                    }
                  }
                }
                break;
              case '-V':
              case '--version':
                this.response = "rtal 0.2.5";
                this.onResponseComplete.emit();
                break;
              default:
                this.response = this.ErrorMessage01(this.commandSplit[1]);
                this.onResponseComplete.emit();
            }
          }
        } else if (this.commandSplit[0] === 'clear' && this.commandSplit.length === 1) {
          let terminalContent = document.getElementsByClassName('p-terminal-content')[0];
          let children = terminalContent.children;
          setTimeout(() => {
            let length = children.length;
            for (let index = 0; index < length; index++) {
              terminalContent.removeChild(children[0]);
            }
          }, 0);
        } else {
          this.response = "Unknown command: '" + command + "'";
          this.onResponseComplete.emit();
        }
      }
    });
  }
  isTutorialShown(tutorial) {
    console.log("TerminalWidgetComponent:isTutorialShown");
    if (typeof tutorial === 'undefined' || tutorial.componentName === "TerminalWidgetComponent") {
      this.isBlurred = false;
    } else {
      this.isBlurred = true;
    }
  }
  ngOnDestroy() {}
  onGetCommand() {
    this.apiDownloadAttachment();
    this.response = '';
    this.selectedProblem = new _services_problem_manager_service_problem_manager_types__WEBPACK_IMPORTED_MODULE_1__.ProblemDescriptor(this.problemSearch, new src_app_services_api_service_api_service__WEBPACK_IMPORTED_MODULE_3__.Meta(''));
    this.onProblemSelected.emit(this.selectedProblem);
    this.onResponseComplete.emit();
  }
  pressedCtrlC() {
    this.prompt = "TALight> ";
    this.commandConnectState = false;
    this.cmdConnect?.sendConnectStop();
  }
  onConnectCommand() {
    switch (this.api.setUrl(this.url)) {
      case 0:
        this.selectedService = undefined;
        this.response = "";
        this.selectedService = new _services_problem_manager_service_problem_manager_types__WEBPACK_IMPORTED_MODULE_1__.ServiceDescriptor('', new src_app_services_api_service_api_packets__WEBPACK_IMPORTED_MODULE_4__.Packets.Service(''), new _services_problem_manager_service_problem_manager_types__WEBPACK_IMPORTED_MODULE_1__.ProblemDescriptor('', new src_app_services_api_service_api_service__WEBPACK_IMPORTED_MODULE_3__.Meta('')));
        let condition = sub => sub == '-a';
        let isPresentArg = this.commandSplit.findIndex(condition);
        if (isPresentArg != -1) {
          let problem;
          let service;
          if (isPresentArg === 4) {
            problem = this.commandSplit[this.commandSplit.length - 2];
            service = this.commandSplit[this.commandSplit.length - 1];
          } else if (isPresentArg === 5) {
            problem = this.commandSplit[4];
            service = this.commandSplit[this.commandSplit.length - 1];
          } else if (isPresentArg === 6) {
            problem = this.commandSplit[4];
            service = this.commandSplit[5];
          } else {
            this.response = "Syntax Error";
            this.onResponseComplete.emit();
            break;
          }
          let params = new Map();
          // rtal connect -a param1=value -a param2=value
          for (let index = isPresentArg; index < this.commandSplit.length; index++) {
            if (this.commandSplit[index] === '-a' && index < this.commandSplit.length - 1) {
              index = index + 1;
              if (this.commandSplit[index].includes('=')) {
                let paramAssignment = this.commandSplit[index].split('=');
                if (paramAssignment.length === 2) {
                  params.set(paramAssignment[0], paramAssignment[1]);
                }
              }
            } else {
              this.response = this.ErrorMessage08();
              this.onResponseComplete.emit();
              return;
            }
          }
          if (problem != undefined && service != undefined) {
            this.selectedService.parent.name = problem;
            this.selectedService.name = service;
            this.connectParams = Object.fromEntries(params);
          }
        } else {
          this.selectedService.parent.name = this.commandSplit[4];
          this.selectedService.name = this.commandSplit[5];
          this.connectParams = {};
        }
        this.prompt = "";
        this.runConnectAPI();
        break;
      case -1:
        this.response = this.ErrorMessage04();
        this.onResponseComplete.emit();
        break;
      case -2:
        this.response = this.ErrorMessage05();
        this.onResponseComplete.emit();
        break;
    }
    this.onResponseComplete.emit();
  }
  apiDownloadAttachment() {
    var _this = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      switch (_this.api.setUrl(_this.url)) {
        case 0:
          let onAttachment = () => {
            console.log("Attachment packet received");
          };
          let onAttachmentInfo = info => {
            console.log('apiDownloadAttachment:info:', info);
          };
          let onData = data => {
            console.log("apiDownloadAttachment:onData:", data);
            _this.onAttachments.emit(data);
          };
          let req = _this.api.GetAttachment(_this.problemSearch, onAttachment, onAttachmentInfo, onData);
          req.onError = error => {
            _this.response = "ERROR Cannot download attachment: Problem '" + _this.problemSearch + "' does not exists";
            _this.onResponseComplete.emit();
          };
          break;
        case -1:
          _this.response = _this.ErrorMessage04();
          _this.onResponseComplete.emit();
          break;
        case -2:
          _this.response = _this.ErrorMessage05();
          _this.onResponseComplete.emit();
          break;
      }
    })();
  }
  getListProblems(url) {
    var _this2 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.selectedProblem = undefined;
      _this2.selectedService = undefined;
      _this2.problemList = [];
      _this2.problems.clear();
      _this2.services.clear();
      switch (_this2.api.setUrl(url)) {
        case 0:
          let req = _this2.api.problemList(problemMap => {
            console.log('apiProblemList:problemList:', problemMap);
            problemMap.forEach((problem, name) => {
              let problemDesc = new _services_problem_manager_service_problem_manager_types__WEBPACK_IMPORTED_MODULE_1__.ProblemDescriptor(name, problem);
              _this2.problemList.push(problemDesc);
              _this2.problems.set(problemDesc.key, problemDesc);
              problemDesc.services.forEach(serviceDesc => {
                _this2.services.set(serviceDesc.key, serviceDesc);
              });
            });
            _this2.onListCommand();
          });
          req.onError = error => {
            _this2.response = "ERROR: Cannot connect to '" + _this2.url + "'";
            _this2.onResponseComplete.emit();
          };
          break;
        case -1:
          _this2.response = _this2.ErrorMessage04();
          _this2.onResponseComplete.emit();
          break;
        case -2:
          _this2.response = _this2.ErrorMessage05();
          _this2.onResponseComplete.emit();
          break;
      }
    })();
  }
  onListCommand() {
    if (this.commandSplit.length == 4) {
      // eg. rtal -s <server-url> list
      this.problemList.sort((a, b) => a.name.localeCompare(b.name));
      this.response = "";
      this.problemList.forEach(problem => this.response += "- " + problem.name + "\n");
    } else if (this.commandSplit.length == 5) {
      if (this.commandSplit[4] == '-v' || this.commandSplit[4] == '--verbose') {
        // eg. rtal -s <server-url> list -v
        this.problemList.sort((a, b) => a.name.localeCompare(b.name));
        this.response = "";
        this.problemList.forEach(problem => {
          this.response += "- " + problem.name + "\n";
          var ArrayService = [];
          problem.services.forEach(service => ArrayService.push(service));
          ArrayService.sort((a, b) => a.name.localeCompare(b.name));
          ArrayService.forEach(service => {
            this.response += "  * " + service.name + "\n";
            var ArrayArg = [];
            service.args.forEach(arg => ArrayArg.push(arg));
            ArrayArg.sort((a, b) => a.name.localeCompare(b.name));
            ArrayArg.forEach(arg => {
              this.response += "    # " + arg.name + " [" + arg.default + "]\n";
            });
            service.files.forEach(file => {
              this.response += "    \u{00A7} " + file.name + "\n";
            });
          });
        });
      } else {
        // eg. rtal -s <server-url> list problem_name
        this.problemList.sort((a, b) => a.name.localeCompare(b.name));
        this.response = "";
        let condition = problem => problem.name == this.commandSplit[4];
        let problemFound = this.problemList.find(condition);
        if (problemFound != undefined) {
          var ArrayService = [];
          problemFound.services.forEach(service => ArrayService.push(service));
          ArrayService.sort((a, b) => a.name.localeCompare(b.name));
          ArrayService.forEach(service => {
            this.response += "  * " + service.name + "\n";
            var ArrayArg = [];
            service.args.forEach(arg => ArrayArg.push(arg));
            ArrayArg.sort((a, b) => a.name.localeCompare(b.name));
            ArrayArg.forEach(arg => {
              this.response += "    # " + arg.name + " [" + arg.default + "]\n";
            });
            service.files.forEach(file => {
              this.response += "    \u{00A7} " + file.name + "\n";
            });
          });
        } else {
          this.response = "ERROR: Problem '" + this.commandSplit[4] + "' does not exists\n";
        }
      }
    } else if (this.commandSplit.length == 6) {
      this.response = "";
      let condition = undefined;
      if (this.commandSplit[4] == '-v' || this.commandSplit[4] == '--verbose') {
        condition = problem => problem.name == this.commandSplit[5];
      }
      if (this.commandSplit[5] == '-v' || this.commandSplit[5] == '--verbose') {
        condition = problem => problem.name == this.commandSplit[4];
      }
      if (condition != undefined) {
        let problemFound = this.problemList.find(condition);
        if (problemFound != undefined) {
          // eg. rtal -s <server-url> list -v problem_name OR rtal -s <server-url> list problem_name -v
          var ArrayService = [];
          problemFound.services.forEach(service => ArrayService.push(service));
          ArrayService.sort((a, b) => a.name.localeCompare(b.name));
          ArrayService.forEach(service => {
            this.response += "  * " + service.name + "\n";
            var ArrayArg = [];
            service.args.forEach(arg => ArrayArg.push(arg));
            ArrayArg.sort((a, b) => a.name.localeCompare(b.name));
            ArrayArg.forEach(arg => {
              this.response += "    # " + arg.name + " [" + arg.default + "] " + arg.regex + "\n";
            });
            service.files.forEach(file => {
              this.response += "    \u{00A7} " + file.name + "\n";
            });
          });
        } else {
          this.response = "ERROR: Problem '" + this.commandSplit[4] + "' does not exists\n";
        }
      } else {
        if (this.commandSplit[4].startsWith('-')) {
          this.response = this.ErrorMessage01(this.commandSplit[4]);
        } else if (this.commandSplit[5].startsWith('-')) {
          this.response = this.ErrorMessage01(this.commandSplit[5]);
        } else {
          this.response = this.ErrorMessage06(this.commandSplit[5]);
        }
      }
    } else {
      this.response = this.ErrorMessage06(this.commandSplit[6]);
    }
    this.onResponseComplete.emit();
  }
  ErrorMessage01(option) {
    var res = "ERROR: Found argument '" + option + "' which wasn't expected, or isn't valid in this context" + "\n\n\tIf you tried to supply '" + option + "' as a value rather than a flag, use '-- " + option + "'" + "\n\n USAGE: \n \trtal [OPTIONS] <SUBCOMMAND> \n\n For more information try --help";
    return res;
  }
  ErrorMessage02() {
    var res = "ERROR: The argument '--server-url <SERVER_URL>' requires a value but none was supplied" + "\n\nFor more information try --help";
    return res;
  }
  ErrorMessage03(subcommand) {
    var res = "ERROR: The subcommand '" + subcommand + "' wasn't recognized" + "\n\n USAGE: \n \trtal [OPTIONS] <SUBCOMMAND> \n\n For more information try --help";
    return res;
  }
  ErrorMessage04() {
    var res = "ERROR: Cannot connect to '" + this.url + "': HTTP format error: invalid format";
    return res;
  }
  ErrorMessage05() {
    var res = "ERROR: Cannot connect to '" + this.url + "': URL error: URL scheme not supported";
    return res;
  }
  ErrorMessage06(argument) {
    var res = "ERROR: Found argument '" + argument + "' which wasn't expected, or isn't valid in this context" + "\n\n USAGE: \n \trtal list [OPTIONS] <SUBCOMMAND> \n\n For more information try --help";
    return res;
  }
  ErrorMessage07(argument) {
    var res = "ERROR: Found argument '" + argument + "' which wasn't expected, or isn't valid in this context" + "\n\n USAGE: \n \trtal get [OPTIONS] <PROBLEM> \n\n For more information try --help";
    return res;
  }
  ErrorMessage08() {
    var res = "ERROR: The argument '--service-arg <SERVICE_ARG>' requires a value but none was supplied" + "\n\n For more information try --help";
    return res;
  }
  HelpMessage() {
    var res = "rtal 0.2.5" + "\n\nUSAGE:\n\trtal [OPTIONS] <SUBCOMMAND>" + "\n\nOPTIONS:" + "\n\t-h, --help\t\t\tPrint help information" + "\n\t-s, --server-url <SERVER_URL>\tServer URL [default ws://127.0.0.1:8008/]" + "\n\t-V, --version\t\t\tPrint version information" + "\n\nSUBCOMMANDS:" + "\n\tconnect\tConnect to problem evaluator" + "\n\tget\tDownload problem attachments" + "\n\thelp\tPrint this message or the help of the given subcommand(s)" + "\n\tlist\tList available problems";
    return res;
  }
  UndoHistory() {
    if (this.terminalHistory.length > 0) {
      if (this.terminalHistoryIndex == -1) {
        this.terminalHistoryIndex = this.terminalHistory.length - 1;
      } else {
        if (this.terminalHistoryIndex >= 1) {
          this.terminalHistoryIndex -= 1;
        }
      }
      var my_obj = document.querySelectorAll('.p-terminal-input')[0];
      my_obj.value = this.terminalHistory[this.terminalHistoryIndex];
      var event = document.createEvent('Event');
      event.initEvent('input', true, true);
      my_obj.dispatchEvent(event);
    }
  }
  RedoHistory() {
    if (this.terminalHistory.length > 0) {
      var my_obj = document.querySelectorAll('.p-terminal-input')[0];
      if (this.terminalHistoryIndex == -1) {
        return;
      } else {
        if (this.terminalHistoryIndex < this.terminalHistory.length - 1) {
          this.terminalHistoryIndex += 1;
          my_obj.value = this.terminalHistory[this.terminalHistoryIndex];
        } else {
          my_obj.value = "";
        }
      }
      var event = document.createEvent('Event');
      event.initEvent('input', true, true);
      my_obj.dispatchEvent(event);
    }
  }
  runConnectAPI() {
    var _this3 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.apiRun = true;
      yield _this3.apiConnect();
      _this3.apiRun = false;
    })();
  }
  apiConnectReset() {
    var _this4 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.current_output_file = undefined;
      _this4.cmdConnect = undefined;
      console.log("apiConnect:didConnectData:cmdConnect:", _this4.cmdConnect);
    })();
  }
  apiConnect() {
    var _this5 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("apiConnect");
      if (!_this5.selectedService) {
        return false;
      }
      console.log("apiConnect:service:ok");
      let config = yield _this5.compiler.readConfig();
      if (!config) {
        return false;
      }
      console.log("apiConnect:config:ok");
      //Open Connection
      let problem = _this5.selectedService.parent.name;
      let service = _this5.selectedService.name;
      let args = _this5.connectParams;
      let tty = false; //true: bash code coloring, backspaces, etc
      let token = config.TAL_TOKEN && config.TAL_TOKEN != "" ? config.TAL_TOKEN : undefined;
      let files = new Map();
      console.log("apiConnect:params:problem", problem);
      console.log("apiConnect:params:service", service);
      console.log("apiConnect:params:args", args);
      console.log("apiConnect:params:tty", tty);
      console.log("apiConnect:params:token", token);
      console.log("apiConnect:params:files", files);
      let onConnectionStart = () => {
        _this5.didConnectStart();
      };
      let onConnectionBegin = msg => {
        _this5.didConnectBegin(msg);
      };
      let onConnectionClose = msg => {
        _this5.didConnectClose(msg);
      };
      let onData = data => {
        _this5.didConnectData(data);
      };
      let onBinaryHeader = msg => {
        _this5.didRecieveBinaryHeader(msg);
      };
      let onError = msg => {
        _this5.didError(msg);
      };
      _this5.cmdConnect = yield _this5.api.Connect(problem, service, args, tty, token, files, onConnectionBegin, onConnectionStart, onConnectionClose, onData, onBinaryHeader, onError);
      console.log("apiConnect:DONE");
      return true;
    })();
  }
  didError(msg) {
    var _this6 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6.cmdConnect = undefined;
      _this6.project?.driver.stopExecution();
      _this6.prompt = "TALight> ";
      _this6.commandConnectState = false;
      _this6.response = "ERROR: " + msg;
      _this6.onResponseComplete.emit();
    })();
  }
  didConnectStart() {
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("apiConnect:didConnectStart");
    })();
  }
  didConnectBegin(message) {
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("apiConnect:didConnectBegin:", message);
    })();
  }
  didConnectClose(message) {
    var _this7 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("apiConnect:didConnectionClose:", message);
      if (message && message.length > 0 && message[0] !== "") {
        _this7.output_files = message;
      } else {
        _this7.apiConnectReset();
        console.log("apiConnect:didConnectClose:cmdConnect:", _this7.cmdConnect);
      }
      _this7.prompt = "TALight> ";
      _this7.commandConnectState = false;
    })();
  }
  didConnectData(data) {
    var _this8 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("apiConnect:didConnectData:", data);
      if (_this8.output_files && _this8.current_output_file) {
        if (_this8.current_output_file) {
          _this8.project?.driver.writeFile("/" + _this8.current_output_file, data);
        }
        ;
        if (_this8.current_output_file === _this8.output_files[_this8.output_files.length - 1]) {
          _this8.apiConnectReset();
        }
        console.log("apiConnect:didConnectData:cmdConnect:", _this8.cmdConnect);
        _this8.response = "RESULTS:\n\n" + data;
        _this8.onResponseComplete.emit();
      } else {
        _this8.sendStdin(data, true);
      }
    })();
  }
  didRecieveBinaryHeader(message) {
    var _this9 = this;
    return (0,_home_runner_work_TALightDesktop_TALightDesktop_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("apiConnect:didRecieveBinaryHeader:", message);
      _this9.current_output_file = message.name;
      if (_this9.current_output_file) {
        _this9.project?.driver.writeFile("/" + _this9.current_output_file, "");
      }
      ;
    })();
  }
  sendStdin(msg, fromAPI = false) {
    console.log("sendStdin:");
    this.response += msg;
    this.onResponseComplete.emit();
    this.commandConnectState = true;
  }
}
TerminalWidgetComponent.ɵfac = function TerminalWidgetComponent_Factory(t) {
  return new (t || TerminalWidgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](primeng_terminal__WEBPACK_IMPORTED_MODULE_9__.TerminalService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_terminal_api_service_terminal_api_service__WEBPACK_IMPORTED_MODULE_5__.TerminalApiService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_compiler_service_compiler_service_service__WEBPACK_IMPORTED_MODULE_6__.CompilerService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_tutorial_service_tutorial_service__WEBPACK_IMPORTED_MODULE_7__.TutorialService));
};
TerminalWidgetComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: TerminalWidgetComponent,
  selectors: [["tal-terminal-widget"]],
  outputs: {
    onAttachments: "onAttachments",
    onProblemSelected: "onProblemChanged"
  },
  decls: 8,
  vars: 4,
  consts: [[2, "font-size", "large"], ["spellcheck", "false"], ["ngDefaultControl", "", "styleClass", "dark-panel", "welcomeMessage", "TALight Terminal [Version 1.0]", 3, "ngModel", "prompt", "keyup.control.C", "keyup.arrowup", "keyup.arrowdown", "ngModelChange"]],
  template: function TerminalWidgetComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "p", 0)(2, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " Playground mode");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, " allows you to interact directly with the server");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 1)(7, "p-terminal", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keyup.control.C", function TerminalWidgetComponent_Template_p_terminal_keyup_control_C_7_listener() {
        return ctx.pressedCtrlC();
      })("keyup.arrowup", function TerminalWidgetComponent_Template_p_terminal_keyup_arrowup_7_listener() {
        return ctx.UndoHistory();
      })("keyup.arrowdown", function TerminalWidgetComponent_Template_p_terminal_keyup_arrowdown_7_listener() {
        return ctx.RedoHistory();
      })("ngModelChange", function TerminalWidgetComponent_Template_p_terminal_ngModelChange_7_listener($event) {
        return ctx.response = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("blur", ctx.isBlurred);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.response)("prompt", ctx.prompt);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, primeng_terminal__WEBPACK_IMPORTED_MODULE_9__.Terminal],
  styles: [".blur[_ngcontent-%COMP%] {\n  position: relative;\n  background-size: cover;\n  position: relative;\n  overflow: hidden;\n  filter: blur(10px); \n  -webkit-backdrop-filter: blur(3px); \n  backdrop-filter: blur(100%);\n  \n  pointer-events: none;\n  \n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.a[_ngcontent-%COMP%] {\n  color: red;\n  pointer-events: auto;\n  -webkit-user-select: auto;\n          user-select: auto;\n}\n\n[_nghost-%COMP%]     .dark-panel.p-terminal {\n  height: 400px;\n  font-family: \"Courier New\", Courier, monospace;\n  font-size: large;\n  line-height: 1.2;\n  border-color: black;\n  background: black;\n  color: rgb(74, 229, 198);\n}\n\n[_nghost-%COMP%]     .dark-panel.p-terminal .p-terminal-welcomeMessage {\n  background: #212121;\n}\n\n[_nghost-%COMP%]     .dark-panel.p-terminal .p-terminal-response {\n  font-family: \"Courier New\", Courier, monospace;\n  font-size: large;\n  color: rgb(197, 134, 192);\n  padding-bottom: 10px;\n}\n\n[_nghost-%COMP%]     .dark-panel.p-terminal .p-terminal-response {\n  white-space: pre-wrap;\n}\n\n[_nghost-%COMP%]     .dark-panel.p-terminal .p-terminal-input {\n  font-family: \"Courier New\", Courier, monospace;\n  font-size: large;\n}\n\n[_nghost-%COMP%]     .dark-panel.p-terminal .p-terminal-content {\n  padding-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2JsdXIuc2NzcyIsInRlcm1pbmFsLXdpZGdldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUEsRUFBQSxnREFBQTtFQUNBLGtDQUFBLEVBRUcsb0RBQUE7RUFDSCwyQkFBQTtFQUNBLCtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnREFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7QUNERjs7QURJQTtFQUNFLFVBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7QUNERjs7QUFYQTtFQUVJLGFBQUE7RUFDQSw4Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7QUFhSjs7QUFWSTtFQUNJLG1CQUFBO0FBWVI7O0FBVEk7RUFDSSw4Q0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtBQVdSOztBQVJJO0VBQ0kscUJBQUE7QUFVUjs7QUFQSTtFQUNJLDhDQUFBO0VBQ0EsZ0JBQUE7QUFTUjs7QUFOSTtFQUNJLGlCQUFBO0FBUVIiLCJmaWxlIjoidGVybWluYWwtd2lkZ2V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsdXJ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmaWx0ZXI6IGJsdXIoMTBweCk7IC8qIE1vZGlmaWNhIGlsIHZhbG9yZSBkaSBibHVyIGEgdHVvIHBpYWNpbWVudG8gKi9cbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoXG4gICAgM3B4XG4gICk7IC8qIFBlciBpIGJyb3dzZXIgYmFzYXRpIHN1IFdlYktpdCAoQ2hyb21lLCBTYWZhcmkpICovXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMDAlKTtcbiAgLyogQmxvY2NhIGlsIGNsaWNrIGFpIGJvdHRvbmkgKi9cbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIC8qIFBlcm1ldHRlIGRpIGJsb2NjYXJlIGxhIHNlbGV6aW9uZSBkZWwgdGVzdG8gKi9cbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5hIHtcbiAgY29sb3I6IHJlZDtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIHVzZXItc2VsZWN0OiBhdXRvO1xufVxuIiwiQGltcG9ydCAnLi4vYmx1ci5zY3NzJztcblxuXG4uYmx1cntcbiAgQGV4dGVuZCAuYmx1cjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5kYXJrLXBhbmVsLnAtdGVybWluYWwge1xuICAgIFxuICAgIGhlaWdodDogNDAwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICBjb2xvcjpyZ2IoNzQsIDIyOSwgMTk4KTtcbiAgICBcblxuICAgIC5wLXRlcm1pbmFsLXdlbGNvbWVNZXNzYWdlIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzIxMjEyMTtcbiAgICB9XG5cbiAgICAucC10ZXJtaW5hbC1yZXNwb25zZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgICAgIGNvbG9yOnJnYigxOTcsIDEzNCwgMTkyKTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgfVxuXG4gICAgLnAtdGVybWluYWwtcmVzcG9uc2Uge1xuICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgfVxuXG4gICAgLnAtdGVybWluYWwtaW5wdXR7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgfVxuXG4gICAgLnAtdGVybWluYWwtY29udGVudHtcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgfVxufSJdfQ== */"]
});

/***/ }),

/***/ 3547:
/*!*************************************************************************!*\
  !*** ./src/app/widgets/topbar/topbar-widget/topbar-widget.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopbarWidgetComponent": () => (/* binding */ TopbarWidgetComponent)
/* harmony export */ });
/* harmony import */ var src_app_services_api_service_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/api-service/api.service */ 7829);
/* harmony import */ var src_app_services_notification_mananger_service_notification_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/notification-mananger-service/notification-manager.service */ 1383);
/* harmony import */ var src_app_services_theme_service_theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/theme-service/theme.service */ 2655);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_problem_manager_service_problem_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/problem-manager-service/problem-manager.service */ 8125);
/* harmony import */ var src_app_services_tutorial_service_tutorial_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tutorial-service/tutorial.service */ 8352);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/autocomplete */ 5630);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/tooltip */ 4329);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ 6328);
















const _c0 = ["urlInput"];
const _c1 = ["statusDot"];
const _c2 = ["messageBox"];
function TopbarWidgetComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TopbarWidgetComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r5.showTutorial()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TopbarWidgetComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", null, 13)(2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 14)(5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("tal-message-box-main tal-message-box-", ctx_r1.currentNotification.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("pi ", ctx_r1.iconForNotification(), " tal-message-row tal-message-row-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currentNotification.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.currentNotification.message);
} }
function TopbarWidgetComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 17)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TopbarWidgetComponent_ng_template_13_Template_button_click_3_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const url_r8 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.removeURL(url_r8, $event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const url_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](url_r8);
} }
class TopbarWidgetComponent {
    constructor(themeService, api, zone, pm, nm, tutorialService) {
        this.themeService = themeService;
        this.api = api;
        this.zone = zone;
        this.pm = pm;
        this.nm = nm;
        this.tutorialService = tutorialService;
        this.urlCache = [];
        this.escapeRegEx = /[.*+?^${}()|[\]\\]/g;
        this.urlInputClass = "";
        this.isBlurred = false;
        this.isTutorialButtonVisible = false;
        this.url = api.url;
        this.lastUrl = this.url + "";
        this.urlCache = [...this.api.urlCache];
        this.subApiState = this.api.onApiStateChange.subscribe((state) => { this.updateState(state); });
        this.subProblemError = this.pm.onError.subscribe((_) => { this.stateBad(); });
        this.subOnNotify = this.nm.onNotification.subscribe((msg) => { this.showNotification(msg); });
        this.tutorialService.onTutorialChange.subscribe((tutorial) => { this.isTutorialShown(tutorial); }),
            this.tutorialService.onTutorialClose.subscribe(() => { this.isTutorialShown(); });
    }
    ngOnInit() {
        this.isBlurred = true;
    }
    showTutorial() {
        localStorage.setItem("tutorialCached", "false");
        this.tutorialService.nextTutorial(-1);
    }
    get changeThemIcon() {
        return this.themeService.currentTheme == src_app_services_theme_service_theme_service__WEBPACK_IMPORTED_MODULE_2__.AppTheme.dark ? 'pi-sun' : 'pi-moon';
    }
    isTutorialShown(tutorial) {
        console.log("TopbarWidgetComponent:isTutorialShown");
        if (typeof tutorial === 'undefined' || tutorial.componentName === "TopbarWidgetComponent") {
            this.isBlurred = false;
        }
        else {
            this.isBlurred = true;
        }
        // Se la card è già stata mostrata oppure sta venendo mostrata, non mostrare il pulsante..
        if (typeof tutorial !== 'undefined' && localStorage.getItem("tutorialCached") !== "true") {
            this.isTutorialButtonVisible = false;
        }
        //..altrimenti mostralo
        else {
            this.isTutorialButtonVisible = true;
        }
    }
    toggleTheme() {
        this.themeService.toggleTheme();
    }
    iconForNotification() {
        let icon = "pi-info";
        switch (this.currentNotification?.type) {
            default:
            case src_app_services_notification_mananger_service_notification_manager_service__WEBPACK_IMPORTED_MODULE_1__.NotificationType.System:
            case src_app_services_notification_mananger_service_notification_manager_service__WEBPACK_IMPORTED_MODULE_1__.NotificationType.Debug:
            case src_app_services_notification_mananger_service_notification_manager_service__WEBPACK_IMPORTED_MODULE_1__.NotificationType.Info:
                icon = "pi-info";
                break;
            case src_app_services_notification_mananger_service_notification_manager_service__WEBPACK_IMPORTED_MODULE_1__.NotificationType.Warning:
            case src_app_services_notification_mananger_service_notification_manager_service__WEBPACK_IMPORTED_MODULE_1__.NotificationType.Error:
                icon = "pi-error";
        }
        return icon;
    }
    showNotification(msg, timeout = 3) {
        let box = this.messageBox?.nativeElement;
        box.style.display = "flex";
        this.currentNotification = msg;
        setTimeout(() => { this.hideNotification(); }, timeout * 1000);
    }
    hideNotification() {
        let box = this.messageBox?.nativeElement;
        box.style.display = "none";
        this.currentNotification = undefined;
    }
    filterSuggestions(event) {
        let query = event.query.replace(this.escapeRegEx, '\\$&');
        let filter = new RegExp(".*" + query + ".*");
        let urlCache = [];
        this.api.urlCache.forEach((url) => {
            if (url.match(filter)) {
                urlCache.push(url);
            }
        });
        this.urlCache = urlCache;
    }
    updateState(state) {
        let dot = this.statusDot.nativeElement;
        switch (state) {
            case src_app_services_api_service_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiState.Idle:
                dot.style.color = "";
                break;
            case src_app_services_api_service_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiState.Good:
                dot.style.color = "green";
                break;
            case src_app_services_api_service_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiState.Maybe:
                dot.style.color = "orange";
                break;
            case src_app_services_api_service_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiState.Bad:
                dot.style.color = "darkred";
                break;
        }
    }
    stateIdle() { this.updateState(src_app_services_api_service_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiState.Idle); }
    stateGood() { this.updateState(src_app_services_api_service_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiState.Good); }
    stateMaybe() { this.updateState(src_app_services_api_service_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiState.Maybe); }
    stateBad() { this.updateState(src_app_services_api_service_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiState.Bad); }
    changeURL(event) {
        if (this.lastUrl == this.url) {
            return;
        }
        this.stateIdle();
        let dot = this.statusDot.nativeElement;
        console.log("changeURL:dot:", dot);
        console.log("changeURL:event:", event);
        let url = this.url;
        console.log("changeURL:urlCache:before:", this.urlCache);
        if (!this.api.setUrl(url)) {
            this.stateBad();
            console.log("changeURL:setURL:failed");
        }
        else {
            this.url = this.api.url;
            console.log("changeURL:setURL:success");
            this.urlCache = this.api.urlCache;
            this.stateMaybe();
            this.pm.updateProblems();
        }
        console.log("changeURL:urlCache:after:", this.urlCache);
        console.log("changeURL:url:", this.url);
        this.lastUrl = this.url + "";
    }
    removeURL(url, event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();
        }
        console.log("changeURL:urlCache:before:", this.urlCache);
        if (!this.api.removeFromCache(url)) {
            console.log("changeURL:removeURL:done");
        }
        this.urlCache = this.api.urlCache;
        console.log("changeURL:urlCache:after:", this.urlCache);
        console.log("changeURL:url:", url);
    }
}
TopbarWidgetComponent.ɵfac = function TopbarWidgetComponent_Factory(t) { return new (t || TopbarWidgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_theme_service_theme_service__WEBPACK_IMPORTED_MODULE_2__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_api_service_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_problem_manager_service_problem_manager_service__WEBPACK_IMPORTED_MODULE_3__.ProblemManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_notification_mananger_service_notification_manager_service__WEBPACK_IMPORTED_MODULE_1__.NotificationManagerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_tutorial_service_tutorial_service__WEBPACK_IMPORTED_MODULE_4__.TutorialService)); };
TopbarWidgetComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: TopbarWidgetComponent, selectors: [["tal-topbar-widget"]], viewQuery: function TopbarWidgetComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c2, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.urlInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.statusDot = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.messageBox = _t.first);
    } }, decls: 15, vars: 8, consts: [[1, "tal-topbar"], [1, "tal-brand"], ["pButton", "", "class", "tutorial", "pTooltip", "Mostra il tutorial", "label", "Mostra il tutorial", 3, "click", 4, "ngIf"], [1, "tal-message-box"], [3, "class", 4, "ngIf"], [1, "tal-bar-url"], ["pTooltip", "Status", "tooltipPosition", "left", 1, "pi", "pi-circle-fill"], ["statusDot", ""], ["pTooltip", "Change URL", "tooltipPosition", "bottom", 1, "top-bar-url-input", "p-inputtext-sm", 3, "ngModel", "suggestions", "dropdown", "placeholder", "ngModelChange", "change", "onSelect", "onBlur", "completeMethod"], ["urlInput", ""], ["pTemplate", "item"], ["pButton", "", "pTooltip", "Change theme", 1, "tal-square-button", 3, "icon", "click"], ["pButton", "", "pTooltip", "Mostra il tutorial", "label", "Mostra il tutorial", 1, "tutorial", 3, "click"], ["messageBox", ""], [1, "tal-message-col"], [1, "tal-message-row", "tal-message-row-title"], [1, "tal-message-row", "tal-message-row-message"], [1, "url-item"], [1, "url-item-label"], ["pButton", "", "icon", "pi pi-trash", "pTooltip", "Remove URL", 1, "tal-square-button", 3, "click"]], template: function TopbarWidgetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "TALight Desktop");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, TopbarWidgetComponent_button_5_Template, 1, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, TopbarWidgetComponent_div_7_Template, 9, 8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "i", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "p-autoComplete", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("placeholder", function TopbarWidgetComponent_Template_p_autoComplete_placeholder_11_listener() { return ctx.urlCache; })("ngModelChange", function TopbarWidgetComponent_Template_p_autoComplete_ngModelChange_11_listener($event) { return ctx.url = $event; })("change", function TopbarWidgetComponent_Template_p_autoComplete_change_11_listener($event) { return ctx.changeURL($event); })("onSelect", function TopbarWidgetComponent_Template_p_autoComplete_onSelect_11_listener($event) { return ctx.changeURL($event); })("onBlur", function TopbarWidgetComponent_Template_p_autoComplete_onBlur_11_listener($event) { return ctx.changeURL($event); })("completeMethod", function TopbarWidgetComponent_Template_p_autoComplete_completeMethod_11_listener($event) { return ctx.filterSuggestions($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, TopbarWidgetComponent_ng_template_13_Template, 4, 1, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TopbarWidgetComponent_Template_button_click_14_listener() { return ctx.toggleTheme(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("blur", ctx.isBlurred);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isTutorialButtonVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !!ctx.currentNotification);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.url)("suggestions", ctx.urlCache)("dropdown", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("icon", "pi ", ctx.changeThemIcon, "");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_8__.AutoComplete, primeng_api__WEBPACK_IMPORTED_MODULE_9__.PrimeTemplate, primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__.Tooltip, primeng_button__WEBPACK_IMPORTED_MODULE_11__.ButtonDirective], styles: [".blur[_ngcontent-%COMP%] {\n  position: absolute;\n  background-size: cover;\n  position: relative;\n  overflow: hidden;\n  filter: blur(3px); \n  -webkit-backdrop-filter: blur(3px); \n  backdrop-filter: blur(3px);\n  \n  pointer-events: none;\n  \n  -webkit-user-select: none;\n          user-select: none;\n}\n\n[_nghost-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 100%;\n}\n\ndiv.tal-topbar[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: row;\n  padding: 5px;\n}\n\n.tal-brand[_ngcontent-%COMP%] {\n  height: 30px;\n  display: flex;\n  flex-grow: 1;\n}\n\n.tal-brand[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n\n.tal-message-box[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n  flex-grow: 10;\n}\n\n.tal-message-box[_ngcontent-%COMP%]   .tal-message-box-main[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n}\n\n.tal-message-box[_ngcontent-%COMP%]   .tal-message-box-main[_ngcontent-%COMP%]   .tal-message-col[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n}\n\n.tal-message-box[_ngcontent-%COMP%]   .tal-message-box-main[_ngcontent-%COMP%]   .tal-message-box-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.tal-bar-url[_ngcontent-%COMP%] {\n  height: 30px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-end;\n  flex-grow: 1;\n}\n\n  .top-bar-url-input .p-autocomplete {\n  height: 30px;\n}\n\n  .top-bar-url-input .p-autocomplete-label,   .top-bar-url-input .p-autocomplete-item {\n  height: 30px;\n  padding: 5px !important;\n  margin: 5px !important;\n}\n\n  .top-bar-url-input button {\n  width: 30px;\n  max-width: 30px;\n}\n\n.top-bar-url-input[_ngcontent-%COMP%] {\n  margin: 5px;\n  height: 30px;\n}\n\n.top-bar-url-input[_ngcontent-%COMP%]   .url-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 16px !important;\n}\n\n.top-bar-url-input[_ngcontent-%COMP%]   .url-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 16px !important;\n  height: 16px !important;\n  max-height: 16px !important;\n  min-height: 16px !important;\n  margin: 0;\n  display: none;\n  background-color: darkred;\n  color: white;\n}\n\n.top-bar-url-input[_ngcontent-%COMP%]   .url-item[_ngcontent-%COMP%]:hover   .p-button[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.tutorial[_ngcontent-%COMP%] {\n  width: auto;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2JsdXIuc2NzcyIsInRvcGJhci13aWRnZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBLEVBQUEsZ0RBQUE7RUFDQSxrQ0FBQSxFQUVHLG9EQUFBO0VBQ0gsMEJBQUE7RUFDQSwrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0RBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0FDREY7O0FBTkE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFTRjs7QUFOQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUFTRjs7QUFOQTtFQUNFLFlBQUE7RUFJQSxhQUFBO0VBQ0EsWUFBQTtBQU1GOztBQVZFO0VBQ0UsZUFBQTtBQVlKOztBQUxBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUFRRjs7QUFORTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFRSjs7QUFOSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFRTjs7QUFMSTtFQUNFLGlCQUFBO0FBT047O0FBRkE7RUFFRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFJRjs7QUFDSTtFQUNFLFlBQUE7QUFFTjs7QUFDSTs7RUFFRSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQUNOOztBQUVJO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFBTjs7QUFLQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBRkY7O0FBSUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBRko7O0FBSUk7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBRk47O0FBT0k7RUFDRSxhQUFBO0FBTE47O0FBU0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQU5GIiwiZmlsZSI6InRvcGJhci13aWRnZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmx1ciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmaWx0ZXI6IGJsdXIoM3B4KTsgLyogTW9kaWZpY2EgaWwgdmFsb3JlIGRpIGJsdXIgYSB0dW8gcGlhY2ltZW50byAqL1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cihcbiAgICAzcHhcbiAgKTsgLyogUGVyIGkgYnJvd3NlciBiYXNhdGkgc3UgV2ViS2l0IChDaHJvbWUsIFNhZmFyaSkgKi9cbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XG4gIC8qIEJsb2NjYSBpbCBjbGljayBhaSBib3R0b25pICovXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAvKiBQZXJtZXR0ZSBkaSBibG9jY2FyZSBsYSBzZWxlemlvbmUgZGVsIHRlc3RvICovXG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuIiwiQGltcG9ydCBcIi4uL2JsdXIuc2Nzc1wiO1xuXG4uYmx1ciB7XG4gIEBleHRlbmQgLmJsdXI7XG59XG5cbjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuZGl2LnRhbC10b3BiYXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiByb3c7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLnRhbC1icmFuZCB7XG4gIGhlaWdodDogMzBweDtcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgfVxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWdyb3c6IDE7XG4gIC8vYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbn1cblxuLnRhbC1tZXNzYWdlLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1ncm93OiAxMDtcblxuICAudGFsLW1lc3NhZ2UtYm94LW1haW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgLnRhbC1tZXNzYWdlLWNvbCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgLnRhbC1tZXNzYWdlLWJveC10aXRsZSB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gIH1cbn1cblxuLnRhbC1iYXItdXJsIHtcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgaGVpZ2h0OiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbjo6bmctZGVlcCB7XG4gIC50b3AtYmFyLXVybC1pbnB1dCB7XG4gICAgLnAtYXV0b2NvbXBsZXRlIHtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICB9XG5cbiAgICAucC1hdXRvY29tcGxldGUtbGFiZWwsXG4gICAgLnAtYXV0b2NvbXBsZXRlLWl0ZW0ge1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XG4gICAgICBtYXJnaW46IDVweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIGJ1dHRvbiB7XG4gICAgICB3aWR0aDogMzBweDtcbiAgICAgIG1heC13aWR0aDogMzBweDtcbiAgICB9XG4gIH1cbn1cblxuLnRvcC1iYXItdXJsLWlucHV0IHtcbiAgbWFyZ2luOiA1cHg7XG4gIGhlaWdodDogMzBweDtcblxuICAudXJsLWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxNnB4ICFpbXBvcnRhbnQ7XG5cbiAgICBidXR0b24ge1xuICAgICAgd2lkdGg6IDE2cHggIWltcG9ydGFudDtcbiAgICAgIGhlaWdodDogMTZweCAhaW1wb3J0YW50O1xuICAgICAgbWF4LWhlaWdodDogMTZweCAhaW1wb3J0YW50O1xuICAgICAgbWluLWhlaWdodDogMTZweCAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtyZWQ7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICB9XG5cbiAgLnVybC1pdGVtOmhvdmVyIHtcbiAgICAucC1idXR0b24ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gIH1cbn1cbi50dXRvcmlhbHtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 7199:
/*!*************************************************!*\
  !*** ./src/app/widgets/topbar/topbar.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopbarModule": () => (/* binding */ TopbarModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _topbar_widget_topbar_widget_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topbar-widget/topbar-widget.component */ 3547);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/autocomplete */ 5630);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/tooltip */ 4329);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);








class TopbarModule {
}
TopbarModule.ɵfac = function TopbarModule_Factory(t) { return new (t || TopbarModule)(); };
TopbarModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TopbarModule });
TopbarModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule,
        primeng_autocomplete__WEBPACK_IMPORTED_MODULE_4__.AutoCompleteModule,
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__.InputTextModule,
        primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__.TooltipModule,
        primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TopbarModule, { declarations: [_topbar_widget_topbar_widget_component__WEBPACK_IMPORTED_MODULE_0__.TopbarWidgetComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule,
        primeng_autocomplete__WEBPACK_IMPORTED_MODULE_4__.AutoCompleteModule,
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__.InputTextModule,
        primeng_tooltip__WEBPACK_IMPORTED_MODULE_6__.TooltipModule,
        primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonModule], exports: [_topbar_widget_topbar_widget_component__WEBPACK_IMPORTED_MODULE_0__.TopbarWidgetComponent] }); })();


/***/ }),

/***/ 75:
/*!********************************************************!*\
  !*** ./src/app/widgets/tutorial/tutorial.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TutorialComponent": () => (/* binding */ TutorialComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_tutorial_service_tutorial_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/tutorial-service/tutorial.service */ 8352);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ 6328);




const _c0 = function (a0) { return { "display": a0 }; };
const _c1 = function () { return { "margin-right": "8px" }; };
class TutorialComponent {
    constructor(tutorialService) {
        this.tutorialService = tutorialService;
        this.isVisible = false;
        this.indexCurrentTutorial = -1;
        this.tutorialText = "";
        this.backButtonDisabled = true;
        this.testo = "Avanti";
        this.theme = "light";
        this.tutorialService.onTutorialChange.subscribe((tutorial) => { this.showTutorial(tutorial); });
        this.tutorialService.onTutorialClose.subscribe(() => { this.closeTutorial(); });
        this.tutorialService.onIndexTutorialChange.subscribe((indexCurrentTutorials) => { this.setIndex(indexCurrentTutorials); });
    }
    // É sporca ma l'abbiamo fatto cosí perché é piú facile da capire, meno dispendioso in termini di tempo e risorse
    // e non abbiamo bisogno di un componente in piú
    ngAfterViewInit() {
        setTimeout(() => {
            if (this.tutorialService.getCachedTutorial() === "true") {
                console.log("Tutorial già completato");
                this.closeTutorialButton();
            }
            else {
                console.log("Tutorial non ancora completato");
                // this.isTutorialCompleted()
                this.tutorialService.nextTutorial(this.indexCurrentTutorial); //ÑON BLURRA GLI ALTRI COMPONENTI
            }
        }, 1);
    }
    setIndex(indexCurrentTutorials) {
        console.log("TutorialComponent:setIndex");
        this.indexCurrentTutorial = indexCurrentTutorials;
    }
    nextTutorialButton() {
        console.log("TutorialComponent:nextTutorialButton");
        if (this.indexCurrentTutorial < this.tutorialService.getSizeTutorial() - 1) {
            this.tutorialService.nextTutorial(this.indexCurrentTutorial);
        }
        else {
            this.tutorialService.closeTutorial();
        }
    }
    prevTutorialButton() {
        console.log("TutorialComponent:previousTutorialButton");
        this.tutorialService.previousTutorial(this.indexCurrentTutorial);
        if (this.indexCurrentTutorial === 0) {
            this.backButtonDisabled = true;
        }
    }
    closeTutorialButton() {
        console.log("TutorialComponent:closeTutorialButton");
        this.tutorialService.closeTutorial();
    }
    showTutorial(tutorial) {
        console.log("TutorialComponent:showTutorial");
        if (tutorial.componentName === "Begin") {
            this.testo = "Avanti";
            this.backButtonDisabled = true;
        }
        else if (tutorial.componentName === "End") {
            this.testo = "Fine";
        }
        else {
            this.testo = "Avanti";
            this.backButtonDisabled = false;
        }
        this.tutorialText = tutorial.text;
        this.isVisible = true;
    }
    closeTutorial() {
        console.log("TutorialComponent:closeTutorial");
        this.isVisible = false;
    }
}
TutorialComponent.ɵfac = function TutorialComponent_Factory(t) { return new (t || TutorialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_tutorial_service_tutorial_service__WEBPACK_IMPORTED_MODULE_0__.TutorialService)); };
TutorialComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TutorialComponent, selectors: [["tal-tutorial"]], decls: 9, vars: 8, consts: [[1, "tutorial_card", 3, "ngStyle"], ["icon", "pi pi-times", "styleClass", "p-button-text", 1, "close", 3, "onClick"], [1, "text"], [1, "alignButtons"], [1, "buttons", 3, "ngStyle", "label", "onClick"], ["label", "Indietro", 1, "buttons", 3, "disabled", "onClick"]], template: function TutorialComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "p-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function TutorialComponent_Template_p_button_onClick_2_listener() { return ctx.closeTutorialButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3)(7, "p-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function TutorialComponent_Template_p_button_onClick_7_listener() { return ctx.nextTutorialButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function TutorialComponent_Template_p_button_onClick_8_listener() { return ctx.prevTutorialButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, ctx.isVisible ? "grid" : "none"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.tutorialText);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("label", ctx.testo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.backButtonDisabled);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, primeng_button__WEBPACK_IMPORTED_MODULE_3__.Button], styles: [".tutorial_card[_ngcontent-%COMP%] {\n  position: relative;\n  \n  width: 400px;\n  overflow: auto;\n  word-wrap: break-word;\n  top: 100px;\n  padding: 40px 15px 10px;\n  border: 3px solid #1893e6;\n  border-radius: 10px;\n  box-shadow: 5px 5px 7px 5px #006ec9;\n  z-index: 2;\n}\n\n.close[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 2px; \n  top: 2px; \n  line-height: 1px;\n}\n\n.text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-bottom: 7px;\n  margin-top: auto;\n}\n\n.alignButtons[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR1dG9yaWFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCQTtFQUNFLGtCQUFBO0VBQ0EsbUVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0EsVUFBQTtBQXRCRjs7QUF5QkE7RUFDRSxrQkFBQTtFQUNBLFVBQUEsRUFBQSxpRUFBQTtFQUNBLFFBQUEsRUFBQSxvRUFBQTtFQUNBLGdCQUFBO0FBdEJGOztBQXlCQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBdEJGOztBQXlCQTtFQUNFLGNBQUE7QUF0QkYiLCJmaWxlIjoidHV0b3JpYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAudHV0b3JpYWxfY2FyZHtcbi8vICAgICB3aWR0aDogMzUlO1xuLy8gICAgIHRvcDogMTAwcHg7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgICBwYWRkaW5nOiA1MHB4O1xuLy8gICAgIGJvcmRlcjogM3B4IHNvbGlkICMxODkzZTY7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbi8vICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDVweCA1cHggN3B4IDBweCByZ2JhKDAsMCwwLDAuNSk7XG4vLyAgICAgYm94LXNoYWRvdzogNXB4IDVweCA3cHggMHB4IHJnYmEoMCwwLDAsMC41KTtcbi8vICAgICB6LWluZGV4OiAyO1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4vLyB9XG5cbi8vIC5jbG9zZXtcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICB0b3A6IDA7XG4vLyAgIHJpZ2h0OiAwO1xuLy8gICBwYWRkaW5nOiA1cHg7XG4vLyAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuLy8gICBtaW4td2lkdGg6IGF1dG87XG4vLyB9XG5cbi50dXRvcmlhbF9jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvKiBSaW11b3ZpIGlsIHBvc2l0aW9uOiBhYnNvbHV0ZSBlIGlsIHRvcDogMDsgZGFsbGEgY2xhc3NlIC5jbG9zZSAqL1xuICB3aWR0aDogNDAwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHRvcDogMTAwcHg7XG4gIHBhZGRpbmc6IDQwcHggMTVweCAxMHB4O1xuICBib3JkZXI6IDNweCBzb2xpZCAjMTg5M2U2O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiA1cHggNXB4IDdweCA1cHggIzAwNmVjOTtcbiAgei1pbmRleDogMjtcbn1cblxuLmNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMnB4OyAvKiBQb3NpemlvbmEgaWwgYm90dG9uZSBhIDIgcGl4ZWwgZGFsbGEgcGFydGUgZGVzdHJhIGRlbGxhIGNhcmQgKi9cbiAgdG9wOiAycHg7IC8qIFBvc2l6aW9uYSBpbCBib3R0b25lIGEgMiBwaXhlbCBkYWxsYSBwYXJ0ZSBzdXBlcmlvcmUgZGVsbGEgY2FyZCAqL1xuICBsaW5lLWhlaWdodDogMXB4O1xufVxuXG4udGV4dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICBtYXJnaW4tdG9wOiBhdXRvO1xufVxuXG4uYWxpZ25CdXR0b25zIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4iXX0= */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 3138:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map