import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CFFJGo8l.mjs';
import { manifest } from './manifest_B3dlD0Ou.mjs';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/blog/post/_---slug_.astro.mjs');
const _page4 = () => import('./pages/blog/_page_.astro.mjs');
const _page5 = () => import('./pages/work.astro.mjs');
const _page6 = () => import('./pages/work/_---slug_.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["../../../../usr/lib/node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/blog/post/[...slug].astro", _page3],
    ["src/pages/blog/[page].astro", _page4],
    ["src/pages/work.astro", _page5],
    ["src/pages/work/[...slug].astro", _page6],
    ["src/pages/index.astro", _page7]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "mode": "standalone",
    "client": "file:///home/oussema/my-headless-project/astro-project/dist/client/",
    "server": "file:///home/oussema/my-headless-project/astro-project/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro"
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
