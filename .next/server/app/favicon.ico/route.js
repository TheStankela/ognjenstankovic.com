"use strict";
(() => {
var exports = {};
exports.id = 155;
exports.ids = [155];
exports.modules = {

/***/ 4021:
/***/ ((module) => {

module.exports = import("next/dist/compiled/@vercel/og/index.node.js");;

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 6900:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&isDynamic=0!./app/favicon.ico?__next_metadata_route__
var favicon_next_metadata_route_namespaceObject = {};
__webpack_require__.r(favicon_next_metadata_route_namespaceObject);
__webpack_require__.d(favicon_next_metadata_route_namespaceObject, {
  GET: () => (GET),
  dynamic: () => (dynamic)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(2394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9692);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/next/server.js
var server = __webpack_require__(514);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&isDynamic=0!./app/favicon.ico?__next_metadata_route__


const contentType = "image/x-icon"
const buffer = Buffer.from("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", 'base64'
  )

function GET() {
  return new server.NextResponse(buffer, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': "public, max-age=0, must-revalidate",
    },
  })
}

const dynamic = 'force-static'

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Ffavicon.ico%2Froute&name=app%2Ffavicon.ico%2Froute&pagePath=private-next-app-dir%2Ffavicon.ico&appDir=C%3A%5CUsers%5COGIJAAAA%5CDesktop%5CGitRepos%5Cognjenstankovic.com%5Capp&appPaths=%2Ffavicon.ico&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/favicon.ico/route","pathname":"/favicon.ico","filename":"favicon","bundlePath":"app/favicon.ico/route"},"resolvedPagePath":"next-metadata-route-loader?page=%2Ffavicon.ico%2Froute&isDynamic=0!C:\\Users\\OGIJAAAA\\Desktop\\GitRepos\\ognjenstankovic.com\\app\\favicon.ico?__next_metadata_route__","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: favicon_next_metadata_route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/favicon.ico/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [697,218], () => (__webpack_exec__(6900)));
module.exports = __webpack_exports__;

})();