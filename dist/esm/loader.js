import { p as promiseResolve, b as bootstrapLazy } from './index-5ee7bac7.js';

/*
 Stencil Client Patch Esm v2.20.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["mastodon-status",[[1,"mastodon-status",{"statusId":[1,"status-id"],"instance":[1]}]]]], options);
  });
};

export { defineCustomElements };
