"use strict";
(() => {
var exports = {};
exports.id = 453;
exports.ids = [453];
exports.modules = {

/***/ 5360:
/***/ ((module) => {

module.exports = require("@next/env");

/***/ }),

/***/ 252:
/***/ ((module) => {

module.exports = require("next/dist/compiled/cookie");

/***/ }),

/***/ 9371:
/***/ ((module) => {

module.exports = require("next/dist/compiled/node-fetch");

/***/ }),

/***/ 600:
/***/ ((module) => {

module.exports = require("next/dist/server/accept-header.js");

/***/ }),

/***/ 730:
/***/ ((module) => {

module.exports = require("next/dist/server/api-utils/node.js");

/***/ }),

/***/ 5947:
/***/ ((module) => {

module.exports = require("next/dist/server/base-http/node.js");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 2779:
/***/ ((module) => {

module.exports = require("next/dist/server/request-meta.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 2374:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-locale-cookie.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 5753:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-match.js");

/***/ }),

/***/ 9521:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/prepare-destination.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 3685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 3477:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 7310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 5741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ next_serverless_loaderpage_2Fapi_2Fhello_absolutePagePath_private_next_pages_2Fapi_2Fhello_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_absoluteErrorPath_next_2Fdist_2Fpages_2F_error_absolute404Path_private_next_pages_2F404_js_distDir_private_dot_next_buildId_Q_VJxGHk88SGcxHeFRh5o_assetPrefix_generateEtags_true_poweredByHeader_true_canonicalBase_basePath_runtimeConfig_previewProps_7B_22previewModeId_22_3A_22ed87505d9743b642ab808ea50216b3e5_22_2C_22previewModeSigningKey_22_3A_22beb4ec94d8a532cbfff20134c22131bf8aafce373fadc132889cc1ef0fb7e06e_22_2C_22previewModeEncryptionKey_22_3A_2278687159bae2a0ae99f648328187be8bcde3962f302dade72b9faf02ba236ec5_22_7D_loadedEnvFiles_W10_3D_i18n_reactRoot_)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-fetch.js
var node_polyfill_fetch = __webpack_require__(7157);
;// CONCATENATED MODULE: ./.next/routes-manifest.json
const routes_manifest_namespaceObject = {"Dg":[]};
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-serverless-loader/api-handler.js
var api_handler = __webpack_require__(6249);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-serverless-loader/index.js?page=%2Fapi%2Fhello&absolutePagePath=private-next-pages%2Fapi%2Fhello.js&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=private-next-pages%2F_document.js&absoluteErrorPath=next%2Fdist%2Fpages%2F_error&absolute404Path=private-next-pages%2F404.js&distDir=private-dot-next&buildId=Q_VJxGHk88SGcxHeFRh5o&assetPrefix=&generateEtags=true&poweredByHeader=true&canonicalBase=&basePath=&runtimeConfig=&previewProps=%7B%22previewModeId%22%3A%22ed87505d9743b642ab808ea50216b3e5%22%2C%22previewModeSigningKey%22%3A%22beb4ec94d8a532cbfff20134c22131bf8aafce373fadc132889cc1ef0fb7e06e%22%2C%22previewModeEncryptionKey%22%3A%2278687159bae2a0ae99f648328187be8bcde3962f302dade72b9faf02ba236ec5%22%7D&loadedEnvFiles=W10%3D&i18n=&reactRoot=!

        
      const { processEnv } = __webpack_require__(5360)
      processEnv([])
    
        
        const runtimeConfig = {}
        ;
        

        

        const combinedRewrites = Array.isArray(routes_manifest_namespaceObject.Dg)
          ? routes_manifest_namespaceObject.Dg
          : []

        if (!Array.isArray(routes_manifest_namespaceObject.Dg)) {
          combinedRewrites.push(...routes_manifest_namespaceObject.Dg.beforeFiles)
          combinedRewrites.push(...routes_manifest_namespaceObject.Dg.afterFiles)
          combinedRewrites.push(...routes_manifest_namespaceObject.Dg.fallback)
        }

        const apiHandler = (0,api_handler/* getApiHandler */.Y)({
          pageModule: __webpack_require__(2677),
          rewrites: combinedRewrites,
          i18n: undefined,
          page: "/api/hello",
          basePath: "",
          pageIsDynamic: false,
          encodedPreviewProps: {previewModeId:"ed87505d9743b642ab808ea50216b3e5",previewModeSigningKey:"beb4ec94d8a532cbfff20134c22131bf8aafce373fadc132889cc1ef0fb7e06e",previewModeEncryptionKey:"78687159bae2a0ae99f648328187be8bcde3962f302dade72b9faf02ba236ec5"}
        })
        /* harmony default export */ const next_serverless_loaderpage_2Fapi_2Fhello_absolutePagePath_private_next_pages_2Fapi_2Fhello_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_absoluteErrorPath_next_2Fdist_2Fpages_2F_error_absolute404Path_private_next_pages_2F404_js_distDir_private_dot_next_buildId_Q_VJxGHk88SGcxHeFRh5o_assetPrefix_generateEtags_true_poweredByHeader_true_canonicalBase_basePath_runtimeConfig_previewProps_7B_22previewModeId_22_3A_22ed87505d9743b642ab808ea50216b3e5_22_2C_22previewModeSigningKey_22_3A_22beb4ec94d8a532cbfff20134c22131bf8aafce373fadc132889cc1ef0fb7e06e_22_2C_22previewModeEncryptionKey_22_3A_2278687159bae2a0ae99f648328187be8bcde3962f302dade72b9faf02ba236ec5_22_7D_loadedEnvFiles_W10_3D_i18n_reactRoot_ = (apiHandler);
      

/***/ }),

/***/ 2677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
function handler(req, res) {
    res.status(200).json({
        name: 'John Doe'
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [884], () => (__webpack_exec__(5741)));
module.exports = __webpack_exports__;

})();