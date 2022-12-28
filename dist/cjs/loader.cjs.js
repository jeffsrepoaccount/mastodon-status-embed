'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d9ba67a8.js');

/*
 Stencil Client Patch Esm v2.20.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["mastodon-status.cjs",[[1,"mastodon-status",{"statusId":[1,"status-id"],"instance":[1],"content":[32],"hasError":[32]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
