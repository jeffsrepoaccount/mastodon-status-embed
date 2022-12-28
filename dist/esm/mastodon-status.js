import { p as promiseResolve, b as bootstrapLazy } from './index-4b07abbe.js';

/*
 Stencil Client Patch Browser v2.20.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["mastodon-status",[[1,"mastodon-status",{"statusId":[1,"status-id"],"instance":[1],"content":[32],"hasError":[32]}]]]], options);
});
