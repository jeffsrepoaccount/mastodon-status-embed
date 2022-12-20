'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-658dd230.js');

/*
 Stencil Client Patch Esm v2.20.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["mastodon-status.cjs",[[1,"mastodon-status",{"statusId":[1,"status-id"],"instance":[1]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
