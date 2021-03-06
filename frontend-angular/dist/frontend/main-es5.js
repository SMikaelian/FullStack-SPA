var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login.component.html": 
        /*!****************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login.component.html ***!
          \****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\r\n    <form [formGroup]=\"form\" (ngSubmit)=\"auth.login(form.value)\">\r\n        <mat-form-field>\r\n            <input matInput type=\"email\" placeholder=\"Email\" formControlName=\"email\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\">\r\n        </mat-form-field>\r\n        <button mat-raised-button color=\"primary\" [disabled]=\"!form.valid\">Login</button>\r\n    </form>\r\n</mat-card>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/play.component.html": 
        /*!***************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/play.component.html ***!
          \***************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\r\n    <mat-card-content>\r\n        <mat-list *ngFor=\"let game of games\"> \r\n            <mat-list-item class=\"clickLink\" [routerLink]=\"['/playGame', game.id]\">{{game.title}}</mat-list-item>\r\n        </mat-list>\r\n    </mat-card-content>\r\n    <mat-card-actions> \r\n    </mat-card-actions>\r\n</mat-card>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/playGame.component.html": 
        /*!*******************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/playGame.component.html ***!
          \*******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\r\n    <mat-card-content>\r\n        \r\n        <mat-accordion>\r\n            <mat-expansion-panel *ngFor=\"let question of questions; \r\n                let i = index\" [expanded]=\"step === i\" (opened)=\"setStep(i)\">\r\n              <mat-expansion-panel-header>\r\n                <mat-panel-title>\r\n                    {{question.text}}\r\n                </mat-panel-title>\r\n                <mat-panel-description>\r\n                  \r\n                </mat-panel-description>\r\n              </mat-expansion-panel-header>\r\n\r\n              <mat-radio-group \r\n              aria-labelledby=\"example-radio-group-label\"\r\n              [(ngModel)]=\"question.selectedAnswer\">\r\n              <mat-radio-button class=\"fullWidth\" *ngFor=\"let answer of question.answers\" [value]=\"answer\">\r\n                  {{answer}}\r\n              </mat-radio-button>\r\n\r\n              </mat-radio-group>\r\n              <mat-action-row>\r\n                <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\r\n              </mat-action-row>\r\n            </mat-expansion-panel>\r\n          </mat-accordion>\r\n          \r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n            <button mat-button color=\"primary\" (click)=\"finish()\">Finish</button>\r\n    </mat-card-actions>\r\n</mat-card>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/question.component.html": 
        /*!*******************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/question.component.html ***!
          \*******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\r\n  <mat-card-title>\r\n    <span *ngIf=\"question.id\">Edit Question</span>\r\n    <span *ngIf=\"!question.id\">New Question</span>\r\n  </mat-card-title>\r\n  <mat-card-content>\r\n    <form>\r\n      <mat-form-field class=\"fullWidth\">\r\n        <input [(ngModel)]=\"question.text\" name=\"question\" matInput placeholder=\"Question\">\r\n      </mat-form-field>\r\n      <mat-form-field class=\"fullWidth\">\r\n        <input [(ngModel)]=\"question.correctAnswer\" name=\"correctAnswer\" matInput placeholder=\" Correct Guess\">\r\n      </mat-form-field>\r\n      <mat-form-field class=\"fullWidth\">\r\n        <input [(ngModel)]=\"question.answer1\" name=\"answer1\" matInput placeholder=\"Wrong Guess 1\">\r\n      </mat-form-field>\r\n      <mat-form-field class=\"fullWidth\">\r\n        <input [(ngModel)]=\"question.answer2\" name=\"answer2\" matInput placeholder=\"Wrong Guess 2\">\r\n      </mat-form-field>\r\n      <mat-form-field class=\"fullWidth\">\r\n        <input [(ngModel)]=\"question.answer3\" name=\"answer3\" matInput placeholder=\"Wrong Guess 3\">\r\n      </mat-form-field>\r\n    </form>\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n      <button mat-button *ngIf=\"question.id\" (click)=\"api.putQuestion(question)\">EDIT</button>\r\n      <button mat-button *ngIf=\"question.id\" (click)=\"question = {}\">NEW</button>\r\n      <button mat-button *ngIf=\"!question.id\" (click)=\"post(question)\">POST</button>   \r\n  </mat-card-actions>\r\n</mat-card>\r\n<questions></questions>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/questions.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/questions.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\r\n    <mat-card-content>\r\n        <mat-list *ngFor=\"let question of questions\"> \r\n            <mat-list-item class=\"clickLink\" (click)=\"api.selectQuestion(question)\">{{question.text}}</mat-list-item>\r\n        </mat-list>\r\n    </mat-card-content>\r\n    <mat-card-actions> \r\n    </mat-card-actions>\r\n</mat-card>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/game.component.html": 
        /*!***************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/game.component.html ***!
          \***************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\r\n        <mat-card-title>\r\n          <span *ngIf=\"game.id\">Edit Game</span>\r\n          <span *ngIf=\"!game.id\">New Game</span>\r\n        </mat-card-title>\r\n        <mat-card-content>\r\n          <form>\r\n            <mat-form-field class=\"fullWidth\">\r\n              <input [(ngModel)]=\"game.title\" name=\"title\" matInput placeholder=\"Name of the game\">\r\n            </mat-form-field>\r\n\r\n          </form>\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n            <button mat-button *ngIf=\"game.id\" (click)=\"api.putGame(game)\">EDIT</button>\r\n            <button mat-button *ngIf=\"game.id\" (click)=\"game = {}\">NEW</button>\r\n            <button mat-button *ngIf=\"game.id\" [routerLink]=\"['/question', game.id]\">EDIT QUESTIONS</button>\r\n            <button mat-button *ngIf=\"!game.id\" (click)=\"api.postGame(game)\">POST</button>\r\n            <!-- <button mat-button *ngIf=\"game.id\" (click)=\"api.deleteGame(game)\">DELETE</button> -->\r\n        </mat-card-actions>\r\n      </mat-card>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/games.component.html": 
        /*!******************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/games.component.html ***!
          \******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<br>\r\n<mat-card>\r\n    <mat-card-content>\r\n        <h3>My Games:</h3>\r\n        <mat-list *ngFor=\"let game of games\"> \r\n            <mat-list-item class=\"clickLink\" (click)=\"api.selectGame(game)\">{{game.title}}</mat-list-item>\r\n        </mat-list>\r\n    </mat-card-content>\r\n    <mat-card-actions> \r\n    </mat-card-actions>\r\n</mat-card>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register.component.html": 
        /*!*******************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register.component.html ***!
          \*******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\r\n    <form [formGroup]=\"form\" (ngSubmit)=\"auth.register(form.value)\">\r\n        <mat-form-field>\r\n            <input matInput type=\"email\" placeholder=\"Email\" formControlName=\"email\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\">\r\n        </mat-form-field>\r\n        <button mat-raised-button color=\"primary\" [disabled]=\"!form.valid\">Register</button>\r\n    </form>\r\n</mat-card>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/api.service.ts": 
        /*!********************************!*\
          !*** ./src/app/api.service.ts ***!
          \********************************/
        /*! exports provided: ApiService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function () { return ApiService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var ApiService = /** @class */ (function () {
                function ApiService(http) {
                    this.http = http;
                    this.selectedQuestion = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"](); //selectedQ. property will hold reference to the question we clicked on and select it.
                    this.questionSelected = this.selectedQuestion.asObservable();
                    this.selectedGame = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"](); //selectedQ. property will hold reference to the question we clicked on and select it.
                    this.gameSelected = this.selectedGame.asObservable();
                }
                ApiService.prototype.getQuestions = function (gameId) {
                    return this.http.get("https://guessinggame20191216110748.azurewebsites.net/api/questions/" + gameId);
                };
                //https://localhost:44351
                ApiService.prototype.getGames = function () {
                    return this.http.get('https://guessinggame20191216110748.azurewebsites.net/api/quizzes');
                };
                ApiService.prototype.getAllGames = function () {
                    return this.http.get('https://guessinggame20191216110748.azurewebsites.net/api/quizzes/all');
                };
                ApiService.prototype.postQuestion = function (question) {
                    this.http.post('https://guessinggame20191216110748.azurewebsites.net/api/questions', question).subscribe(function (res) {
                        console.log(res);
                        //window.location.reload(true);
                    });
                };
                ApiService.prototype.putQuestion = function (question) {
                    this.http.put("https://guessinggame20191216110748.azurewebsites.net/api/questions/" + question.id, question).subscribe(function (res) {
                        console.log(res);
                    });
                };
                ApiService.prototype.postGame = function (game) {
                    this.http.post('https://guessinggame20191216110748.azurewebsites.net/api/quizzes', game).subscribe(function (res) {
                        console.log(res);
                    });
                };
                ApiService.prototype.putGame = function (game) {
                    this.http.put("https://guessinggame20191216110748.azurewebsites.net/api/quizzes/" + game.id, game).subscribe(function (res) {
                        console.log(res);
                    });
                };
                ApiService.prototype.deleteGame = function (game) {
                    this.http.delete('https://guessinggame20191216110748.azurewebsites.net/api/quizzes', game).subscribe(function (res) {
                        console.log(res);
                    });
                };
                ApiService.prototype.selectQuestion = function (question) {
                    this.selectedQuestion.next(question);
                };
                ApiService.prototype.selectGame = function (game) {
                    this.selectedGame.next(game);
                };
                return ApiService;
            }());
            ApiService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], ApiService);
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var routes = [];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: "<nav></nav><router-outlet></router-outlet>"
                })
            ], AppComponent);
            //Router-outlet let's angular know where to render the view you are trying to route to
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
            /* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
            /* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
            /* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _question_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./question.component */ "./src/app/question.component.ts");
            /* harmony import */ var _questions_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./questions.component */ "./src/app/questions.component.ts");
            /* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./home.component */ "./src/app/home.component.ts");
            /* harmony import */ var _nav_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./nav.component */ "./src/app/nav.component.ts");
            /* harmony import */ var _game_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./game.component */ "./src/app/game.component.ts");
            /* harmony import */ var _games_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./games.component */ "./src/app/games.component.ts");
            /* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./register.component */ "./src/app/register.component.ts");
            /* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./login.component */ "./src/app/login.component.ts");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
            /* harmony import */ var _auth_interceptor__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./auth.interceptor */ "./src/app/auth.interceptor.ts");
            /* harmony import */ var _play_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./play.component */ "./src/app/play.component.ts");
            /* harmony import */ var _playGame_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./playGame.component */ "./src/app/playGame.component.ts");
            /* harmony import */ var _finished_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./finished.component */ "./src/app/finished.component.ts");
            /* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @okta/okta-angular */ "./node_modules/@okta/okta-angular/dist/src/index.js");
            /* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/ __webpack_require__.n(_okta_okta_angular__WEBPACK_IMPORTED_MODULE_31__);
            /* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./profile.component */ "./src/app/profile.component.ts");
            //Creating routes in angular - URL routes
            var routes = [
                { path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_20__["HomeComponent"] },
                { path: 'question', component: _question_component__WEBPACK_IMPORTED_MODULE_18__["QuestionComponent"] },
                { path: 'question/:gameId', component: _question_component__WEBPACK_IMPORTED_MODULE_18__["QuestionComponent"] },
                { path: 'register', component: _register_component__WEBPACK_IMPORTED_MODULE_24__["RegisterComponent"] },
                { path: 'login', component: _login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"] },
                { path: 'game', component: _game_component__WEBPACK_IMPORTED_MODULE_22__["GameComponent"] },
                { path: 'play', component: _play_component__WEBPACK_IMPORTED_MODULE_28__["PlayComponent"] },
                { path: 'playGame/:gameId', component: _playGame_component__WEBPACK_IMPORTED_MODULE_29__["playGameComponent"] },
                { path: 'implicit/callback', component: _okta_okta_angular__WEBPACK_IMPORTED_MODULE_31__["OktaCallbackComponent"] },
                { path: 'profile', component: _profile_component__WEBPACK_IMPORTED_MODULE_32__["ProfileComponent"] }
            ];
            var config = {
                issuer: 'https://dev-504074.okta.com/oauth2/default',
                redirectUri: 'https://myguessing-game.netlify.com/implicit/callback',
                clientId: '0oa287p32jLLOd1ri357',
                scopes: ['openid', 'profile', 'email'],
                pkce: true
            };
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"],
                        _question_component__WEBPACK_IMPORTED_MODULE_18__["QuestionComponent"],
                        _questions_component__WEBPACK_IMPORTED_MODULE_19__["QuestionsComponent"],
                        _home_component__WEBPACK_IMPORTED_MODULE_20__["HomeComponent"],
                        _nav_component__WEBPACK_IMPORTED_MODULE_21__["NavComponent"],
                        _game_component__WEBPACK_IMPORTED_MODULE_22__["GameComponent"],
                        _games_component__WEBPACK_IMPORTED_MODULE_23__["GamesComponent"],
                        _register_component__WEBPACK_IMPORTED_MODULE_24__["RegisterComponent"],
                        _login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"],
                        _profile_component__WEBPACK_IMPORTED_MODULE_32__["ProfileComponent"],
                        _play_component__WEBPACK_IMPORTED_MODULE_28__["PlayComponent"],
                        _playGame_component__WEBPACK_IMPORTED_MODULE_29__["playGameComponent"],
                        _finished_component__WEBPACK_IMPORTED_MODULE_30__["FinishedComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot(routes),
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                        _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
                        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
                        _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
                        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
                        _okta_okta_angular__WEBPACK_IMPORTED_MODULE_31__["OktaAuthModule"].initAuth(config)
                    ],
                    providers: [_api_service__WEBPACK_IMPORTED_MODULE_15__["ApiService"], _auth_service__WEBPACK_IMPORTED_MODULE_26__["AuthService"], {
                            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                            useClass: _auth_interceptor__WEBPACK_IMPORTED_MODULE_27__["AuthInterceptor"],
                            multi: true
                        }],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]],
                    //for dialogs we need to register them differently.
                    entryComponents: [_finished_component__WEBPACK_IMPORTED_MODULE_30__["FinishedComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/auth.interceptor.ts": 
        /*!*************************************!*\
          !*** ./src/app/auth.interceptor.ts ***!
          \*************************************/
        /*! exports provided: AuthInterceptor */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () { return AuthInterceptor; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AuthInterceptor = /** @class */ (function () {
                function AuthInterceptor() {
                }
                AuthInterceptor.prototype.intercept = function (req, next) {
                    var token = localStorage.getItem('token');
                    var authRequest = req.clone({
                        headers: req.headers.set('Authorization', "Bearer " + token)
                    });
                    //console.log(req) to test it out we console log
                    return next.handle(authRequest);
                };
                return AuthInterceptor;
            }());
            AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], AuthInterceptor);
            /***/ 
        }),
        /***/ "./src/app/auth.service.ts": 
        /*!*********************************!*\
          !*** ./src/app/auth.service.ts ***!
          \*********************************/
        /*! exports provided: AuthService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function () { return AuthService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var AuthService = /** @class */ (function () {
                function AuthService(http, router) {
                    this.http = http;
                    this.router = router;
                }
                Object.defineProperty(AuthService.prototype, "isAuthenticated", {
                    get: function () {
                        return !!localStorage.getItem('token'); //will return true if it does exist since !!
                    },
                    enumerable: true,
                    configurable: true
                });
                AuthService.prototype.register = function (credentials) {
                    var _this = this;
                    this.http.post("https://guessinggame20191216110748.azurewebsites.net/api/Account/", credentials).subscribe(function (res) {
                        _this.authenticate(res);
                    });
                };
                AuthService.prototype.login = function (credentials) {
                    var _this = this;
                    this.http.post("https://guessinggame20191216110748.azurewebsites.net/api/login/", credentials).subscribe(function (res) {
                        _this.authenticate(res);
                    });
                };
                AuthService.prototype.authenticate = function (res) {
                    localStorage.setItem('token', res);
                    this.router.navigate(['/']);
                };
                AuthService.prototype.logout = function () {
                    localStorage.removeItem('token');
                };
                return AuthService;
            }());
            AuthService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], AuthService);
            /***/ 
        }),
        /***/ "./src/app/finished.component.ts": 
        /*!***************************************!*\
          !*** ./src/app/finished.component.ts ***!
          \***************************************/
        /*! exports provided: FinishedComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinishedComponent", function () { return FinishedComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            var FinishedComponent = /** @class */ (function () {
                function FinishedComponent(data) {
                    this.data = data;
                }
                return FinishedComponent;
            }());
            FinishedComponent.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
            ]; };
            FinishedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    template: "\n        <h1 *ngIf=\"data.correct != 0; else elseBlock\"> Correct Guess! </h1>\n        <ng-template #elseBlock><div style=\"font-weight: bold\">Wrong Guess! Better luck next time. </div></ng-template>\n        <h2>You Guessed {{data.correct}}/{{data.total}}</h2>\n        "
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], FinishedComponent);
            /***/ 
        }),
        /***/ "./src/app/home.component.ts": 
        /*!***********************************!*\
          !*** ./src/app/home.component.ts ***!
          \***********************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent() {
                }
                return HomeComponent;
            }());
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    template: '<game></game><games><games>'
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/login.component.ts": 
        /*!************************************!*\
          !*** ./src/app/login.component.ts ***!
          \************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
            var LoginComponent = /** @class */ (function () {
                //Inject a form builder inside the constructor
                function LoginComponent(auth, fb) {
                    this.auth = auth;
                    this.fb = fb;
                    this.form = fb.group({
                        email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                    });
                }
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login.component.html")).default
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/nav.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/nav.component.ts ***!
          \**********************************/
        /*! exports provided: NavComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function () { return NavComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @okta/okta-angular */ "./node_modules/@okta/okta-angular/dist/src/index.js");
            /* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(_okta_okta_angular__WEBPACK_IMPORTED_MODULE_2__);
            var NavComponent = /** @class */ (function () {
                function NavComponent(oktaAuth) {
                    var _this = this;
                    this.oktaAuth = oktaAuth;
                    //Inject with a constructor
                    this.title = 'my frontend';
                    // Subscribe to authentication state changes
                    this.oktaAuth.$authenticationState.subscribe(function (isAuthenticated) { return _this.isAuthenticated = isAuthenticated; });
                }
                NavComponent.prototype.ngOnInit = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    // Get the authentication state for immediate use
                                    _a = this;
                                    return [4 /*yield*/, this.oktaAuth.isAuthenticated()];
                                case 1:
                                    // Get the authentication state for immediate use
                                    _a.isAuthenticated = _b.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                NavComponent.prototype.login = function () {
                    this.oktaAuth.loginRedirect('/profile');
                };
                NavComponent.prototype.logout = function () {
                    this.oktaAuth.logout('/');
                };
                return NavComponent;
            }());
            NavComponent.ctorParameters = function () { return [
                { type: _okta_okta_angular__WEBPACK_IMPORTED_MODULE_2__["OktaAuthService"] }
            ]; };
            NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'nav',
                    template: "\n  <mat-toolbar>\n    <button mat-button routerLink=\"/\">My Games</button>\n    <button mat-button routerLink=\"/play\">Play</button>\n    <span style=\"flex: 1 1 auto;\"></span>\n    <button mat-button *ngIf=\"!isAuthenticated\" (click)=\"login()\"> Login </button>\n    <button mat-buttonn *ngIf=\"isAuthenticated\" (click)=\"logout()\"> Logout </button>\n  </mat-toolbar>\n  "
                })
            ], NavComponent);
            //Router-outlet let's angular know where to render the view you are trying to route to
            // <span style="flex: 1 1 auto;"></span>
            // <button *ngIf="!isAuthenticated" (click)="login()"> Login </button>
            // <button *ngIf="isAuthenticated" (click)="logout()"> Logout </button>
            // <button *ngIf="!auth.isAuthenticated" mat-button routerLink="/register">Register</button>
            // <button *ngIf="!auth.isAuthenticated" mat-button routerLink="/login">Login</button>
            // <button *ngIf="auth.isAuthenticated" mat-button (click)="auth.logout()">Logout</button>
            /***/ 
        }),
        /***/ "./src/app/play.component.ts": 
        /*!***********************************!*\
          !*** ./src/app/play.component.ts ***!
          \***********************************/
        /*! exports provided: PlayComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayComponent", function () { return PlayComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
            var PlayComponent = /** @class */ (function () {
                function PlayComponent(api) {
                    this.api = api;
                }
                PlayComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.api.getAllGames().subscribe(function (res) {
                        _this.games = res;
                    });
                };
                return PlayComponent;
            }());
            PlayComponent.ctorParameters = function () { return [
                { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
            ]; };
            PlayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'play',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./play.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/play.component.html")).default
                })
            ], PlayComponent);
            /***/ 
        }),
        /***/ "./src/app/playGame.component.ts": 
        /*!***************************************!*\
          !*** ./src/app/playGame.component.ts ***!
          \***************************************/
        /*! exports provided: playGameComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playGameComponent", function () { return playGameComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
            /* harmony import */ var _finished_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./finished.component */ "./src/app/finished.component.ts");
            var playGameComponent = /** @class */ (function () {
                //Inject the MatDialog in the constructor
                function playGameComponent(api, route, dialog) {
                    this.api = api;
                    this.route = route;
                    this.dialog = dialog;
                    this.step = 0;
                }
                playGameComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.gameId = this.route.snapshot.paramMap.get('gameId');
                    this.api.getQuestions(this.gameId).subscribe(function (res) {
                        _this.questions = res;
                        //Create an orders list.
                        _this.questions.forEach(function (q) {
                            q.answers = [q.correctAnswer, q.answer1, q.answer2, q.answer3];
                            shuffle(q.answers);
                        });
                    });
                };
                //Total of the order $
                playGameComponent.prototype.finish = function () {
                    var correct = 0;
                    this.questions.forEach(function (q) {
                        if (q.correctAnswer == q.selectedAnswer)
                            correct++;
                    });
                    var dialogRef = this.dialog.open(_finished_component__WEBPACK_IMPORTED_MODULE_5__["FinishedComponent"], {
                        data: { correct: correct, total: this.questions.length }
                    });
                    console.log(correct);
                };
                playGameComponent.prototype.setStep = function (index) {
                    this.step = index;
                };
                playGameComponent.prototype.nextStep = function () {
                    this.step++;
                };
                playGameComponent.prototype.prevStep = function () {
                    this.step--;
                };
                return playGameComponent;
            }());
            playGameComponent.ctorParameters = function () { return [
                { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
            ]; };
            playGameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./playGame.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/playGame.component.html")).default
                })
            ], playGameComponent);
            function shuffle(a) {
                var _a;
                for (var i = a.length; i; i--) {
                    var j = Math.floor(Math.random() * i);
                    _a = [a[j], a[i - 1]], a[i - 1] = _a[0], a[j] = _a[1];
                }
            }
            /***/ 
        }),
        /***/ "./src/app/profile.component.ts": 
        /*!**************************************!*\
          !*** ./src/app/profile.component.ts ***!
          \**************************************/
        /*! exports provided: ProfileComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () { return ProfileComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @okta/okta-angular */ "./node_modules/@okta/okta-angular/dist/src/index.js");
            /* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(_okta_okta_angular__WEBPACK_IMPORTED_MODULE_2__);
            var ProfileComponent = /** @class */ (function () {
                function ProfileComponent(oktaAuth) {
                    this.oktaAuth = oktaAuth;
                }
                ProfileComponent.prototype.ngOnInit = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var userClaims;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.oktaAuth.getUser()];
                                case 1:
                                    userClaims = _a.sent();
                                    // user name is exposed directly as property
                                    this.userName = userClaims.name;
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                return ProfileComponent;
            }());
            ProfileComponent.ctorParameters = function () { return [
                { type: _okta_okta_angular__WEBPACK_IMPORTED_MODULE_2__["OktaAuthService"] }
            ]; };
            ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    template: 'Welcome back, {{ userName }}'
                })
            ], ProfileComponent);
            /***/ 
        }),
        /***/ "./src/app/question.component.ts": 
        /*!***************************************!*\
          !*** ./src/app/question.component.ts ***!
          \***************************************/
        /*! exports provided: QuestionComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionComponent", function () { return QuestionComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var QuestionComponent = /** @class */ (function () {
                function QuestionComponent(api, route) {
                    this.api = api;
                    this.route = route;
                    this.question = {};
                    this.arrayQ = [];
                }
                QuestionComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.gameId = this.route.snapshot.paramMap.get('gameId');
                    this.api.questionSelected.subscribe(function (question) { return _this.question = question; });
                };
                QuestionComponent.prototype.post = function (question) {
                    question.gameId = this.gameId;
                    this.api.postQuestion(question);
                    //this.question="";
                    window.location.reload(true);
                    //this.arrayQ.push(question);
                };
                return QuestionComponent;
            }());
            QuestionComponent.ctorParameters = function () { return [
                { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
            ]; };
            QuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'question',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./question.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/question.component.html")).default
                })
            ], QuestionComponent);
            /***/ 
        }),
        /***/ "./src/app/questions.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/questions.component.ts ***!
          \****************************************/
        /*! exports provided: QuestionsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsComponent", function () { return QuestionsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var QuestionsComponent = /** @class */ (function () {
                function QuestionsComponent(api, route) {
                    this.api = api;
                    this.route = route;
                    this.question = {};
                }
                QuestionsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var gameId = this.route.snapshot.paramMap.get('gameId');
                    this.api.getQuestions(gameId).subscribe(function (res) {
                        _this.questions = res;
                    });
                };
                QuestionsComponent.prototype.post = function (question) {
                    this.api.postQuestion(question);
                };
                return QuestionsComponent;
            }());
            QuestionsComponent.ctorParameters = function () { return [
                { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
            ]; };
            QuestionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'questions',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./questions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/questions.component.html")).default
                })
            ], QuestionsComponent);
            /***/ 
        }),
        /***/ "./src/app/game.component.ts": 
        /*!***********************************!*\
          !*** ./src/app/game.component.ts ***!
          \***********************************/
        /*! exports provided: GameComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function () { return GameComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
            var GameComponent = /** @class */ (function () {
                function GameComponent(api) {
                    this.api = api;
                    this.game = {};
                }
                GameComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.api.gameSelected.subscribe(function (game) { return _this.game = game; });
                };
                return GameComponent;
            }());
            GameComponent.ctorParameters = function () { return [
                { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
            ]; };
            GameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'game',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./game.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/game.component.html")).default
                })
            ], GameComponent);
            /***/ 
        }),
        /***/ "./src/app/games.component.ts": 
        /*!**************************************!*\
          !*** ./src/app/games.component.ts ***!
          \**************************************/
        /*! exports provided: GamesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesComponent", function () { return GamesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
            var GamesComponent = /** @class */ (function () {
                function GamesComponent(api) {
                    this.api = api;
                    this.game = {};
                }
                GamesComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.api.getGames().subscribe(function (res) {
                        _this.games = res;
                    });
                };
                return GamesComponent;
            }());
            GamesComponent.ctorParameters = function () { return [
                { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
            ]; };
            GamesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'games',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./games.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/games.component.html")).default
                })
            ], GamesComponent);
            /***/ 
        }),
        /***/ "./src/app/register.component.ts": 
        /*!***************************************!*\
          !*** ./src/app/register.component.ts ***!
          \***************************************/
        /*! exports provided: RegisterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () { return RegisterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
            var RegisterComponent = /** @class */ (function () {
                //Inject a form builder inside the constructor
                function RegisterComponent(auth, fb) {
                    this.auth = auth;
                    this.fb = fb;
                    this.form = fb.group({
                        email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                    });
                }
                return RegisterComponent;
            }());
            RegisterComponent.ctorParameters = function () { return [
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
            ]; };
            RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register.component.html")).default
                })
            ], RegisterComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\smika\Desktop\CSUN\COMP 586\FullStack-SPA\frontend-angular\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map