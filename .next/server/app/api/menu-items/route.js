"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/menu-items/route";
exports.ids = ["app/api/menu-items/route"];
exports.modules = {

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmenu-items%2Froute&page=%2Fapi%2Fmenu-items%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmenu-items%2Froute.js&appDir=%2Fhome%2Fphumula%2Ffood-ordering%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fphumula%2Ffood-ordering&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmenu-items%2Froute&page=%2Fapi%2Fmenu-items%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmenu-items%2Froute.js&appDir=%2Fhome%2Fphumula%2Ffood-ordering%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fphumula%2Ffood-ordering&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var _home_phumula_food_ordering_src_app_api_menu_items_route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/app/api/menu-items/route.js */ \"(rsc)/./src/app/api/menu-items/route.js\");\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/menu-items/route\",\n        pathname: \"/api/menu-items\",\n        filename: \"route\",\n        bundlePath: \"app/api/menu-items/route\"\n    },\n    resolvedPagePath: \"/home/phumula/food-ordering/src/app/api/menu-items/route.js\",\n    nextConfigOutput,\n    userland: _home_phumula_food_ordering_src_app_api_menu_items_route_js__WEBPACK_IMPORTED_MODULE_2__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/menu-items/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZtZW51LWl0ZW1zJTJGcm91dGUmcGFnZT0lMkZhcGklMkZtZW51LWl0ZW1zJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGbWVudS1pdGVtcyUyRnJvdXRlLmpzJmFwcERpcj0lMkZob21lJTJGcGh1bXVsYSUyRmZvb2Qtb3JkZXJpbmclMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRmhvbWUlMkZwaHVtdWxhJTJGZm9vZC1vcmRlcmluZyZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDeUI7QUFDeEY7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDaUo7O0FBRWpKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9vZC1vcmRlcmluZy1hcHAvP2FiMTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL2hvbWUvcGh1bXVsYS9mb29kLW9yZGVyaW5nL3NyYy9hcHAvYXBpL21lbnUtaXRlbXMvcm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL21lbnUtaXRlbXMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9tZW51LWl0ZW1zXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9tZW51LWl0ZW1zL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL2hvbWUvcGh1bXVsYS9mb29kLW9yZGVyaW5nL3NyYy9hcHAvYXBpL21lbnUtaXRlbXMvcm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvbWVudS1pdGVtcy9yb3V0ZVwiO1xuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmenu-items%2Froute&page=%2Fapi%2Fmenu-items%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmenu-items%2Froute.js&appDir=%2Fhome%2Fphumula%2Ffood-ordering%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fphumula%2Ffood-ordering&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.js":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   authOptions: () => (/* binding */ authOptions),\n/* harmony export */   isAdmin: () => (/* binding */ isAdmin)\n/* harmony export */ });\n/* harmony import */ var _libs_mongoConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/libs/mongoConnect */ \"(rsc)/./src/libs/mongoConnect.js\");\n/* harmony import */ var _models_UserInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/UserInfo */ \"(rsc)/./src/models/UserInfo.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/models/User */ \"(rsc)/./src/models/User.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var _auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @auth/mongodb-adapter */ \"(rsc)/./node_modules/@auth/mongodb-adapter/index.js\");\n\n\n\n\n\n\n\n\n\nconst authOptions = {\n    secret: process.env.SECRET,\n    adapter: (0,_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_8__.MongoDBAdapter)(_libs_mongoConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        }),\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n            name: \"Credentials\",\n            id: \"credentials\",\n            credentials: {\n                username: {\n                    label: \"Email\",\n                    type: \"email\",\n                    placeholder: \"test@example.com\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials, req) {\n                const email = credentials?.email;\n                const password = credentials?.password;\n                mongoose__WEBPACK_IMPORTED_MODULE_3__.connect(process.env.MONGO_URL);\n                const user = await _models_User__WEBPACK_IMPORTED_MODULE_4__.User.findOne({\n                    email\n                });\n                const passwordOk = user && bcrypt__WEBPACK_IMPORTED_MODULE_2___default().compareSync(password, user.password);\n                if (passwordOk) {\n                    return user;\n                }\n                return null;\n            }\n        })\n    ]\n};\nasync function isAdmin() {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_5__.getServerSession)(authOptions);\n    const userEmail = session?.user?.email;\n    if (!userEmail) {\n        return false;\n    }\n    const userInfo = await _models_UserInfo__WEBPACK_IMPORTED_MODULE_1__.UserInfo.findOne({\n        email: userEmail\n    });\n    if (!userInfo) {\n        return false;\n    }\n    return userInfo.admin;\n}\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_5___default()(authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRDtBQUNMO0FBQ2Y7QUFDUztBQUNGO0FBQ2tCO0FBQ2E7QUFDVjtBQUNGO0FBRS9DLE1BQU1VLGNBQWM7SUFDekJDLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsTUFBTTtJQUMxQkMsU0FBU04scUVBQWNBLENBQUNULDBEQUFhQTtJQUNyQ2dCLFdBQVc7UUFDVFIsc0VBQWNBLENBQUM7WUFDYlMsVUFBVUwsUUFBUUMsR0FBRyxDQUFDSyxnQkFBZ0I7WUFDdENDLGNBQWNQLFFBQVFDLEdBQUcsQ0FBQ08sb0JBQW9CO1FBQ2hEO1FBQ0FiLDJFQUFtQkEsQ0FBQztZQUNsQmMsTUFBTTtZQUNOQyxJQUFJO1lBQ0pDLGFBQWE7Z0JBQ1hDLFVBQVU7b0JBQUVDLE9BQU87b0JBQVNDLE1BQU07b0JBQVNDLGFBQWE7Z0JBQW1CO2dCQUMzRUMsVUFBVTtvQkFBRUgsT0FBTztvQkFBWUMsTUFBTTtnQkFBVztZQUNsRDtZQUNBLE1BQU1HLFdBQVVOLFdBQVcsRUFBRU8sR0FBRztnQkFDOUIsTUFBTUMsUUFBUVIsYUFBYVE7Z0JBQzNCLE1BQU1ILFdBQVdMLGFBQWFLO2dCQUU5QnpCLDZDQUFnQixDQUFDUyxRQUFRQyxHQUFHLENBQUNvQixTQUFTO2dCQUN0QyxNQUFNQyxPQUFPLE1BQU05Qiw4Q0FBSUEsQ0FBQytCLE9BQU8sQ0FBQztvQkFBQ0o7Z0JBQUs7Z0JBQ3RDLE1BQU1LLGFBQWFGLFFBQVFoQyx5REFBa0IsQ0FBQzBCLFVBQVVNLEtBQUtOLFFBQVE7Z0JBRXJFLElBQUlRLFlBQVk7b0JBQ2QsT0FBT0Y7Z0JBQ1Q7Z0JBRUEsT0FBTztZQUNUO1FBQ0Y7S0FDRDtBQUNILEVBQUU7QUFFSyxlQUFlSTtJQUNwQixNQUFNQyxVQUFVLE1BQU1qQywyREFBZ0JBLENBQUNJO0lBQ3ZDLE1BQU04QixZQUFZRCxTQUFTTCxNQUFNSDtJQUNqQyxJQUFJLENBQUNTLFdBQVc7UUFDZCxPQUFPO0lBQ1Q7SUFDQSxNQUFNQyxXQUFXLE1BQU14QyxzREFBUUEsQ0FBQ2tDLE9BQU8sQ0FBQztRQUFDSixPQUFNUztJQUFTO0lBQ3hELElBQUksQ0FBQ0MsVUFBVTtRQUNiLE9BQU87SUFDVDtJQUNBLE9BQU9BLFNBQVNDLEtBQUs7QUFDdkI7QUFFQSxNQUFNQyxVQUFVdEMsZ0RBQVFBLENBQUNLO0FBRWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9vZC1vcmRlcmluZy1hcHAvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanM/MjMyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xpZW50UHJvbWlzZSBmcm9tIFwiQC9saWJzL21vbmdvQ29ubmVjdFwiO1xuaW1wb3J0IHtVc2VySW5mb30gZnJvbSBcIkAvbW9kZWxzL1VzZXJJbmZvXCI7XG5pbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRcIjtcbmltcG9ydCAqIGFzIG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuaW1wb3J0IHtVc2VyfSBmcm9tICdAL21vZGVscy9Vc2VyJztcbmltcG9ydCBOZXh0QXV0aCwge2dldFNlcnZlclNlc3Npb259IGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCI7XG5pbXBvcnQgeyBNb25nb0RCQWRhcHRlciB9IGZyb20gXCJAYXV0aC9tb25nb2RiLWFkYXB0ZXJcIlxuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnMgPSB7XG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuU0VDUkVULFxuICBhZGFwdGVyOiBNb25nb0RCQWRhcHRlcihjbGllbnRQcm9taXNlKSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVULFxuICAgIH0pLFxuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgbmFtZTogJ0NyZWRlbnRpYWxzJyxcbiAgICAgIGlkOiAnY3JlZGVudGlhbHMnLFxuICAgICAgY3JlZGVudGlhbHM6IHtcbiAgICAgICAgdXNlcm5hbWU6IHsgbGFiZWw6IFwiRW1haWxcIiwgdHlwZTogXCJlbWFpbFwiLCBwbGFjZWhvbGRlcjogXCJ0ZXN0QGV4YW1wbGUuY29tXCIgfSxcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH0sXG4gICAgICB9LFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzLCByZXEpIHtcbiAgICAgICAgY29uc3QgZW1haWwgPSBjcmVkZW50aWFscz8uZW1haWw7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkID0gY3JlZGVudGlhbHM/LnBhc3N3b3JkO1xuXG4gICAgICAgIG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09fVVJMKTtcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7ZW1haWx9KTtcbiAgICAgICAgY29uc3QgcGFzc3dvcmRPayA9IHVzZXIgJiYgYmNyeXB0LmNvbXBhcmVTeW5jKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcblxuICAgICAgICBpZiAocGFzc3dvcmRPaykge1xuICAgICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cbiAgICB9KVxuICBdLFxufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGlzQWRtaW4oKSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKTtcbiAgY29uc3QgdXNlckVtYWlsID0gc2Vzc2lvbj8udXNlcj8uZW1haWw7XG4gIGlmICghdXNlckVtYWlsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IHVzZXJJbmZvID0gYXdhaXQgVXNlckluZm8uZmluZE9uZSh7ZW1haWw6dXNlckVtYWlsfSk7XG4gIGlmICghdXNlckluZm8pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHVzZXJJbmZvLmFkbWluO1xufVxuXG5jb25zdCBoYW5kbGVyID0gTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xuXG5leHBvcnQgeyBoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUIH0iXSwibmFtZXMiOlsiY2xpZW50UHJvbWlzZSIsIlVzZXJJbmZvIiwiYmNyeXB0IiwibW9uZ29vc2UiLCJVc2VyIiwiTmV4dEF1dGgiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsIkdvb2dsZVByb3ZpZGVyIiwiTW9uZ29EQkFkYXB0ZXIiLCJhdXRoT3B0aW9ucyIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJTRUNSRVQiLCJhZGFwdGVyIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJHT09HTEVfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJuYW1lIiwiaWQiLCJjcmVkZW50aWFscyIsInVzZXJuYW1lIiwibGFiZWwiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsInJlcSIsImVtYWlsIiwiY29ubmVjdCIsIk1PTkdPX1VSTCIsInVzZXIiLCJmaW5kT25lIiwicGFzc3dvcmRPayIsImNvbXBhcmVTeW5jIiwiaXNBZG1pbiIsInNlc3Npb24iLCJ1c2VyRW1haWwiLCJ1c2VySW5mbyIsImFkbWluIiwiaGFuZGxlciIsIkdFVCIsIlBPU1QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./src/app/api/menu-items/route.js":
/*!*****************************************!*\
  !*** ./src/app/api/menu-items/route.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var _app_api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/api/auth/[...nextauth]/route */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.js\");\n/* harmony import */ var _models_MenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/MenuItem */ \"(rsc)/./src/models/MenuItem.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nasync function POST(req) {\n    mongoose__WEBPACK_IMPORTED_MODULE_2___default().connect(process.env.MONGO_URL);\n    const data = await req.json();\n    if (await (0,_app_api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_0__.isAdmin)()) {\n        const menuItemDoc = await _models_MenuItem__WEBPACK_IMPORTED_MODULE_1__.MenuItem.create(data);\n        return Response.json(menuItemDoc);\n    } else {\n        return Response.json({});\n    }\n}\nasync function PUT(req) {\n    mongoose__WEBPACK_IMPORTED_MODULE_2___default().connect(process.env.MONGO_URL);\n    if (await (0,_app_api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_0__.isAdmin)()) {\n        const { _id, ...data } = await req.json();\n        await _models_MenuItem__WEBPACK_IMPORTED_MODULE_1__.MenuItem.findByIdAndUpdate(_id, data);\n    }\n    return Response.json(true);\n}\nasync function GET() {\n    mongoose__WEBPACK_IMPORTED_MODULE_2___default().connect(process.env.MONGO_URL);\n    return Response.json(await _models_MenuItem__WEBPACK_IMPORTED_MODULE_1__.MenuItem.find());\n}\nasync function DELETE(req) {\n    mongoose__WEBPACK_IMPORTED_MODULE_2___default().connect(process.env.MONGO_URL);\n    const url = new URL(req.url);\n    const _id = url.searchParams.get(\"_id\");\n    if (await (0,_app_api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_0__.isAdmin)()) {\n        await _models_MenuItem__WEBPACK_IMPORTED_MODULE_1__.MenuItem.deleteOne({\n            _id\n        });\n    }\n    return Response.json(true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9tZW51LWl0ZW1zL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTJEO0FBQ2hCO0FBQ1g7QUFFekIsZUFBZUcsS0FBS0MsR0FBRztJQUM1QkYsdURBQWdCLENBQUNJLFFBQVFDLEdBQUcsQ0FBQ0MsU0FBUztJQUN0QyxNQUFNQyxPQUFPLE1BQU1MLElBQUlNLElBQUk7SUFDM0IsSUFBSSxNQUFNVixxRUFBT0EsSUFBSTtRQUNuQixNQUFNVyxjQUFjLE1BQU1WLHNEQUFRQSxDQUFDVyxNQUFNLENBQUNIO1FBQzFDLE9BQU9JLFNBQVNILElBQUksQ0FBQ0M7SUFDdkIsT0FBTztRQUNMLE9BQU9FLFNBQVNILElBQUksQ0FBQyxDQUFDO0lBQ3hCO0FBQ0Y7QUFFTyxlQUFlSSxJQUFJVixHQUFHO0lBQzNCRix1REFBZ0IsQ0FBQ0ksUUFBUUMsR0FBRyxDQUFDQyxTQUFTO0lBQ3RDLElBQUksTUFBTVIscUVBQU9BLElBQUk7UUFDbkIsTUFBTSxFQUFDZSxHQUFHLEVBQUUsR0FBR04sTUFBSyxHQUFHLE1BQU1MLElBQUlNLElBQUk7UUFDckMsTUFBTVQsc0RBQVFBLENBQUNlLGlCQUFpQixDQUFDRCxLQUFLTjtJQUN4QztJQUNBLE9BQU9JLFNBQVNILElBQUksQ0FBQztBQUN2QjtBQUVPLGVBQWVPO0lBQ3BCZix1REFBZ0IsQ0FBQ0ksUUFBUUMsR0FBRyxDQUFDQyxTQUFTO0lBQ3RDLE9BQU9LLFNBQVNILElBQUksQ0FDbEIsTUFBTVQsc0RBQVFBLENBQUNpQixJQUFJO0FBRXZCO0FBRU8sZUFBZUMsT0FBT2YsR0FBRztJQUM5QkYsdURBQWdCLENBQUNJLFFBQVFDLEdBQUcsQ0FBQ0MsU0FBUztJQUN0QyxNQUFNWSxNQUFNLElBQUlDLElBQUlqQixJQUFJZ0IsR0FBRztJQUMzQixNQUFNTCxNQUFNSyxJQUFJRSxZQUFZLENBQUNDLEdBQUcsQ0FBQztJQUNqQyxJQUFJLE1BQU12QixxRUFBT0EsSUFBSTtRQUNuQixNQUFNQyxzREFBUUEsQ0FBQ3VCLFNBQVMsQ0FBQztZQUFDVDtRQUFHO0lBQy9CO0lBQ0EsT0FBT0YsU0FBU0gsSUFBSSxDQUFDO0FBQ3ZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9vZC1vcmRlcmluZy1hcHAvLi9zcmMvYXBwL2FwaS9tZW51LWl0ZW1zL3JvdXRlLmpzP2U3MGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpc0FkbWlufSBmcm9tIFwiQC9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiO1xuaW1wb3J0IHtNZW51SXRlbX0gZnJvbSBcIkAvbW9kZWxzL01lbnVJdGVtXCI7XG5pbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcSkge1xuICBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPX1VSTCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXEuanNvbigpO1xuICBpZiAoYXdhaXQgaXNBZG1pbigpKSB7XG4gICAgY29uc3QgbWVudUl0ZW1Eb2MgPSBhd2FpdCBNZW51SXRlbS5jcmVhdGUoZGF0YSk7XG4gICAgcmV0dXJuIFJlc3BvbnNlLmpzb24obWVudUl0ZW1Eb2MpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBSZXNwb25zZS5qc29uKHt9KTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUFVUKHJlcSkge1xuICBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPX1VSTCk7XG4gIGlmIChhd2FpdCBpc0FkbWluKCkpIHtcbiAgICBjb25zdCB7X2lkLCAuLi5kYXRhfSA9IGF3YWl0IHJlcS5qc29uKCk7XG4gICAgYXdhaXQgTWVudUl0ZW0uZmluZEJ5SWRBbmRVcGRhdGUoX2lkLCBkYXRhKTtcbiAgfVxuICByZXR1cm4gUmVzcG9uc2UuanNvbih0cnVlKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcbiAgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT19VUkwpO1xuICByZXR1cm4gUmVzcG9uc2UuanNvbihcbiAgICBhd2FpdCBNZW51SXRlbS5maW5kKClcbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIERFTEVURShyZXEpIHtcbiAgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT19VUkwpO1xuICBjb25zdCB1cmwgPSBuZXcgVVJMKHJlcS51cmwpO1xuICBjb25zdCBfaWQgPSB1cmwuc2VhcmNoUGFyYW1zLmdldCgnX2lkJyk7XG4gIGlmIChhd2FpdCBpc0FkbWluKCkpIHtcbiAgICBhd2FpdCBNZW51SXRlbS5kZWxldGVPbmUoe19pZH0pO1xuICB9XG4gIHJldHVybiBSZXNwb25zZS5qc29uKHRydWUpO1xufSJdLCJuYW1lcyI6WyJpc0FkbWluIiwiTWVudUl0ZW0iLCJtb25nb29zZSIsIlBPU1QiLCJyZXEiLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPX1VSTCIsImRhdGEiLCJqc29uIiwibWVudUl0ZW1Eb2MiLCJjcmVhdGUiLCJSZXNwb25zZSIsIlBVVCIsIl9pZCIsImZpbmRCeUlkQW5kVXBkYXRlIiwiR0VUIiwiZmluZCIsIkRFTEVURSIsInVybCIsIlVSTCIsInNlYXJjaFBhcmFtcyIsImdldCIsImRlbGV0ZU9uZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/menu-items/route.js\n");

/***/ }),

/***/ "(rsc)/./src/libs/mongoConnect.js":
/*!**********************************!*\
  !*** ./src/libs/mongoConnect.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb\n\nif (!process.env.MONGO_URL) {\n    throw new Error('Invalid/Missing environment variable: \"MONGODB_URI\"');\n}\nconst uri = process.env.MONGO_URL;\nconst options = {};\nlet client;\nlet clientPromise;\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGlicy9tb25nb0Nvbm5lY3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsa0dBQWtHO0FBQzdEO0FBRXJDLElBQUksQ0FBQ0MsUUFBUUMsR0FBRyxDQUFDQyxTQUFTLEVBQUU7SUFDMUIsTUFBTSxJQUFJQyxNQUFNO0FBQ2xCO0FBRUEsTUFBTUMsTUFBTUosUUFBUUMsR0FBRyxDQUFDQyxTQUFTO0FBQ2pDLE1BQU1HLFVBQVUsQ0FBQztBQUVqQixJQUFJQztBQUNKLElBQUlDO0FBRUosSUFBSVAsSUFBc0MsRUFBRTtJQUMxQywrREFBK0Q7SUFDL0QsNkVBQTZFO0lBQzdFLElBQUksQ0FBQ1EsT0FBT0MsbUJBQW1CLEVBQUU7UUFDL0JILFNBQVMsSUFBSVAsZ0RBQVdBLENBQUNLLEtBQUtDO1FBQzlCRyxPQUFPQyxtQkFBbUIsR0FBR0gsT0FBT0ksT0FBTztJQUM3QztJQUNBSCxnQkFBZ0JDLE9BQU9DLG1CQUFtQjtBQUM1QyxPQUFPLEVBSU47QUFFRCxpRUFBaUU7QUFDakUsOERBQThEO0FBQzlELGlFQUFlRixhQUFhQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9vZC1vcmRlcmluZy1hcHAvLi9zcmMvbGlicy9tb25nb0Nvbm5lY3QuanM/YzQwNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGFwcHJvYWNoIGlzIHRha2VuIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9uZXh0LmpzL3RyZWUvY2FuYXJ5L2V4YW1wbGVzL3dpdGgtbW9uZ29kYlxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiXG5cbmlmICghcHJvY2Vzcy5lbnYuTU9OR09fVVJMKSB7XG4gIHRocm93IG5ldyBFcnJvcignSW52YWxpZC9NaXNzaW5nIGVudmlyb25tZW50IHZhcmlhYmxlOiBcIk1PTkdPREJfVVJJXCInKVxufVxuXG5jb25zdCB1cmkgPSBwcm9jZXNzLmVudi5NT05HT19VUkxcbmNvbnN0IG9wdGlvbnMgPSB7fVxuXG5sZXQgY2xpZW50XG5sZXQgY2xpZW50UHJvbWlzZTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgLy8gSW4gZGV2ZWxvcG1lbnQgbW9kZSwgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlIHNvIHRoYXQgdGhlIHZhbHVlXG4gIC8vIGlzIHByZXNlcnZlZCBhY3Jvc3MgbW9kdWxlIHJlbG9hZHMgY2F1c2VkIGJ5IEhNUiAoSG90IE1vZHVsZSBSZXBsYWNlbWVudCkuXG4gIGlmICghZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UpIHtcbiAgICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKVxuICAgIGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKVxuICB9XG4gIGNsaWVudFByb21pc2UgPSBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZVxufSBlbHNlIHtcbiAgLy8gSW4gcHJvZHVjdGlvbiBtb2RlLCBpdCdzIGJlc3QgdG8gbm90IHVzZSBhIGdsb2JhbCB2YXJpYWJsZS5cbiAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucylcbiAgY2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KClcbn1cblxuLy8gRXhwb3J0IGEgbW9kdWxlLXNjb3BlZCBNb25nb0NsaWVudCBwcm9taXNlLiBCeSBkb2luZyB0aGlzIGluIGFcbi8vIHNlcGFyYXRlIG1vZHVsZSwgdGhlIGNsaWVudCBjYW4gYmUgc2hhcmVkIGFjcm9zcyBmdW5jdGlvbnMuXG5leHBvcnQgZGVmYXVsdCBjbGllbnRQcm9taXNlIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwicHJvY2VzcyIsImVudiIsIk1PTkdPX1VSTCIsIkVycm9yIiwidXJpIiwib3B0aW9ucyIsImNsaWVudCIsImNsaWVudFByb21pc2UiLCJnbG9iYWwiLCJfbW9uZ29DbGllbnRQcm9taXNlIiwiY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/libs/mongoConnect.js\n");

/***/ }),

/***/ "(rsc)/./src/models/MenuItem.js":
/*!********************************!*\
  !*** ./src/models/MenuItem.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MenuItem: () => (/* binding */ MenuItem)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ExtraPriceSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: String,\n    price: Number\n});\nconst MenuItemSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    image: {\n        type: String\n    },\n    name: {\n        type: String\n    },\n    description: {\n        type: String\n    },\n    category: {\n        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Types).ObjectId\n    },\n    basePrice: {\n        type: Number\n    },\n    sizes: {\n        type: [\n            ExtraPriceSchema\n        ]\n    },\n    extraIngredientPrices: {\n        type: [\n            ExtraPriceSchema\n        ]\n    }\n}, {\n    timestamps: true\n});\nconst MenuItem = mongoose__WEBPACK_IMPORTED_MODULE_0__.models?.MenuItem || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"MenuItem\", MenuItemSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL01lbnVJdGVtLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5RDtBQUV6RCxNQUFNSSxtQkFBbUIsSUFBSUQsNENBQU1BLENBQUM7SUFDbENFLE1BQU1DO0lBQ05DLE9BQU9DO0FBQ1Q7QUFFQSxNQUFNQyxpQkFBaUIsSUFBSU4sNENBQU1BLENBQUM7SUFDaENPLE9BQU87UUFBQ0MsTUFBTUw7SUFBTTtJQUNwQkQsTUFBTTtRQUFDTSxNQUFNTDtJQUFNO0lBQ25CTSxhQUFhO1FBQUNELE1BQU1MO0lBQU07SUFDMUJPLFVBQVU7UUFBQ0YsTUFBTVgsdURBQWMsQ0FBQ2UsUUFBUTtJQUFBO0lBQ3hDQyxXQUFXO1FBQUNMLE1BQU1IO0lBQU07SUFDeEJTLE9BQU87UUFBQ04sTUFBSztZQUFDUDtTQUFpQjtJQUFBO0lBQy9CYyx1QkFBdUI7UUFBQ1AsTUFBSztZQUFDUDtTQUFpQjtJQUFBO0FBQ2pELEdBQUc7SUFBQ2UsWUFBWTtBQUFJO0FBRWIsTUFBTUMsV0FBV2xCLDRDQUFNQSxFQUFFa0IsWUFBWW5CLCtDQUFLQSxDQUFDLFlBQVlRLGdCQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2Qtb3JkZXJpbmctYXBwLy4vc3JjL21vZGVscy9NZW51SXRlbS5qcz8yMzAwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSwge21vZGVsLCBtb2RlbHMsIFNjaGVtYX0gZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IEV4dHJhUHJpY2VTY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgbmFtZTogU3RyaW5nLFxuICBwcmljZTogTnVtYmVyLFxufSk7XG5cbmNvbnN0IE1lbnVJdGVtU2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gIGltYWdlOiB7dHlwZTogU3RyaW5nfSxcbiAgbmFtZToge3R5cGU6IFN0cmluZ30sXG4gIGRlc2NyaXB0aW9uOiB7dHlwZTogU3RyaW5nfSxcbiAgY2F0ZWdvcnk6IHt0eXBlOiBtb25nb29zZS5UeXBlcy5PYmplY3RJZH0sXG4gIGJhc2VQcmljZToge3R5cGU6IE51bWJlcn0sXG4gIHNpemVzOiB7dHlwZTpbRXh0cmFQcmljZVNjaGVtYV19LFxuICBleHRyYUluZ3JlZGllbnRQcmljZXM6IHt0eXBlOltFeHRyYVByaWNlU2NoZW1hXX0sXG59LCB7dGltZXN0YW1wczogdHJ1ZX0pO1xuXG5leHBvcnQgY29uc3QgTWVudUl0ZW0gPSBtb2RlbHM/Lk1lbnVJdGVtIHx8IG1vZGVsKCdNZW51SXRlbScsIE1lbnVJdGVtU2NoZW1hKTsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJtb2RlbCIsIm1vZGVscyIsIlNjaGVtYSIsIkV4dHJhUHJpY2VTY2hlbWEiLCJuYW1lIiwiU3RyaW5nIiwicHJpY2UiLCJOdW1iZXIiLCJNZW51SXRlbVNjaGVtYSIsImltYWdlIiwidHlwZSIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJUeXBlcyIsIk9iamVjdElkIiwiYmFzZVByaWNlIiwic2l6ZXMiLCJleHRyYUluZ3JlZGllbnRQcmljZXMiLCJ0aW1lc3RhbXBzIiwiTWVudUl0ZW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/models/MenuItem.js\n");

/***/ }),

/***/ "(rsc)/./src/models/User.js":
/*!****************************!*\
  !*** ./src/models/User.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   User: () => (/* binding */ User)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: {\n        type: String\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String\n    },\n    image: {\n        type: String\n    }\n}, {\n    timestamps: true\n});\nconst User = mongoose__WEBPACK_IMPORTED_MODULE_0__.models?.User || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"User\", UserSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1VzZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStDO0FBRS9DLE1BQU1HLGFBQWEsSUFBSUQsNENBQU1BLENBQUM7SUFDNUJFLE1BQU07UUFBQ0MsTUFBTUM7SUFBTTtJQUNuQkMsT0FBTztRQUFDRixNQUFNQztRQUFRRSxVQUFVO1FBQU1DLFFBQVE7SUFBSTtJQUNsREMsVUFBVTtRQUFDTCxNQUFNQztJQUFNO0lBQ3ZCSyxPQUFPO1FBQUNOLE1BQU1DO0lBQU07QUFDdEIsR0FBRztJQUFDTSxZQUFZO0FBQUk7QUFFYixNQUFNQyxPQUFPWiw0Q0FBTUEsRUFBRVksUUFBUWIsK0NBQUtBLENBQUMsUUFBUUcsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2Qtb3JkZXJpbmctYXBwLy4vc3JjL21vZGVscy9Vc2VyLmpzPzdkMGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHttb2RlbCwgbW9kZWxzLCBTY2hlbWF9IGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCBVc2VyU2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gIG5hbWU6IHt0eXBlOiBTdHJpbmd9LFxuICBlbWFpbDoge3R5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHVuaXF1ZTogdHJ1ZX0sXG4gIHBhc3N3b3JkOiB7dHlwZTogU3RyaW5nfSxcbiAgaW1hZ2U6IHt0eXBlOiBTdHJpbmd9LFxufSwge3RpbWVzdGFtcHM6IHRydWV9KTtcblxuZXhwb3J0IGNvbnN0IFVzZXIgPSBtb2RlbHM/LlVzZXIgfHwgbW9kZWwoJ1VzZXInLCBVc2VyU2NoZW1hKTsiXSwibmFtZXMiOlsibW9kZWwiLCJtb2RlbHMiLCJTY2hlbWEiLCJVc2VyU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJlbWFpbCIsInJlcXVpcmVkIiwidW5pcXVlIiwicGFzc3dvcmQiLCJpbWFnZSIsInRpbWVzdGFtcHMiLCJVc2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/models/User.js\n");

/***/ }),

/***/ "(rsc)/./src/models/UserInfo.js":
/*!********************************!*\
  !*** ./src/models/UserInfo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserInfo: () => (/* binding */ UserInfo)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserInfoSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    email: {\n        type: String,\n        required: true\n    },\n    streetAddress: {\n        type: String\n    },\n    postalCode: {\n        type: String\n    },\n    city: {\n        type: String\n    },\n    country: {\n        type: String\n    },\n    phone: {\n        type: String\n    },\n    admin: {\n        type: Boolean,\n        default: false\n    }\n}, {\n    timestamps: true\n});\nconst UserInfo = mongoose__WEBPACK_IMPORTED_MODULE_0__.models?.UserInfo || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"UserInfo\", UserInfoSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1VzZXJJbmZvLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQztBQUUvQyxNQUFNRyxpQkFBaUIsSUFBSUQsNENBQU1BLENBQUM7SUFDaENFLE9BQU87UUFBQ0MsTUFBTUM7UUFBUUMsVUFBVTtJQUFJO0lBQ3BDQyxlQUFlO1FBQUNILE1BQU1DO0lBQU07SUFDNUJHLFlBQVk7UUFBQ0osTUFBTUM7SUFBTTtJQUN6QkksTUFBTTtRQUFDTCxNQUFNQztJQUFNO0lBQ25CSyxTQUFTO1FBQUNOLE1BQU1DO0lBQU07SUFDdEJNLE9BQU87UUFBQ1AsTUFBTUM7SUFBTTtJQUNwQk8sT0FBTztRQUFDUixNQUFNUztRQUFTQyxTQUFTO0lBQUs7QUFDdkMsR0FBRztJQUFDQyxZQUFZO0FBQUk7QUFFYixNQUFNQyxXQUFXaEIsNENBQU1BLEVBQUVnQixZQUFZakIsK0NBQUtBLENBQUMsWUFBWUcsZ0JBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9vZC1vcmRlcmluZy1hcHAvLi9zcmMvbW9kZWxzL1VzZXJJbmZvLmpzP2RlMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHttb2RlbCwgbW9kZWxzLCBTY2hlbWF9IGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCBVc2VySW5mb1NjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICBlbWFpbDoge3R5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWV9LFxuICBzdHJlZXRBZGRyZXNzOiB7dHlwZTogU3RyaW5nfSxcbiAgcG9zdGFsQ29kZToge3R5cGU6IFN0cmluZ30sXG4gIGNpdHk6IHt0eXBlOiBTdHJpbmd9LFxuICBjb3VudHJ5OiB7dHlwZTogU3RyaW5nfSxcbiAgcGhvbmU6IHt0eXBlOiBTdHJpbmd9LFxuICBhZG1pbjoge3R5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IGZhbHNlfSxcbn0sIHt0aW1lc3RhbXBzOiB0cnVlfSk7XG5cbmV4cG9ydCBjb25zdCBVc2VySW5mbyA9IG1vZGVscz8uVXNlckluZm8gfHwgbW9kZWwoJ1VzZXJJbmZvJywgVXNlckluZm9TY2hlbWEpOyJdLCJuYW1lcyI6WyJtb2RlbCIsIm1vZGVscyIsIlNjaGVtYSIsIlVzZXJJbmZvU2NoZW1hIiwiZW1haWwiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJzdHJlZXRBZGRyZXNzIiwicG9zdGFsQ29kZSIsImNpdHkiLCJjb3VudHJ5IiwicGhvbmUiLCJhZG1pbiIsIkJvb2xlYW4iLCJkZWZhdWx0IiwidGltZXN0YW1wcyIsIlVzZXJJbmZvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/models/UserInfo.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/lru-cache","vendor-chunks/@auth","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmenu-items%2Froute&page=%2Fapi%2Fmenu-items%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmenu-items%2Froute.js&appDir=%2Fhome%2Fphumula%2Ffood-ordering%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fphumula%2Ffood-ordering&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();