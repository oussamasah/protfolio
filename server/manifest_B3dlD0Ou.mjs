import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_tXBJXye2.mjs';
import { g as decodeKey } from './chunks/astro/server_CkECM0Ri.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/oussema/my-headless-project/astro-project/","adapterName":"@astrojs/node","routes":[{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"work/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/work","isIndex":false,"type":"page","pattern":"^\\/work\\/?$","segments":[[{"content":"work","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/work.astro","pathname":"/work","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"../../../../usr/lib/node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://oussamasah.github.io","base":"/docs","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/oussema/my-headless-project/astro-project/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/home/oussema/my-headless-project/astro-project/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/home/oussema/my-headless-project/astro-project/src/pages/blog/[page].astro",{"propagation":"none","containsHead":true}],["/home/oussema/my-headless-project/astro-project/src/pages/blog/post/[...slug].astro",{"propagation":"none","containsHead":true}],["/home/oussema/my-headless-project/astro-project/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/oussema/my-headless-project/astro-project/src/pages/work.astro",{"propagation":"none","containsHead":true}],["/home/oussema/my-headless-project/astro-project/src/pages/work/[...slug].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:../../../../usr/lib/node_modules/astro/dist/assets/endpoint/node@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/blog/post/[...slug]@_@astro":"pages/blog/post/_---slug_.astro.mjs","\u0000@astro-page:src/pages/blog/[page]@_@astro":"pages/blog/_page_.astro.mjs","\u0000@astro-page:src/pages/work@_@astro":"pages/work.astro.mjs","\u0000@astro-page:src/pages/work/[...slug]@_@astro":"pages/work/_---slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","/home/oussema/my-headless-project/astro-project/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_B3dlD0Ou.mjs","/home/oussema/my-headless-project/astro-project/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","@astrojs/react/client.js":"_astro/client.ByEdBAVJ.js","/astro/hoisted.js?q=0":"_astro/hoisted.CvN_TNCx.js","/astro/hoisted.js?q=1":"_astro/hoisted.CdvlmjI-.js","/home/oussema/my-headless-project/astro-project/node_modules/photoswipe/dist/photoswipe.esm.js":"_astro/photoswipe.esm.CKijkUPa.js","/home/oussema/my-headless-project/astro-project/src/pages/blog/post/Comments":"_astro/Comments.DL1E7C3J.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/docs/_astro/about.zJ9e5Ryp.css","/docs/favicon.svg","/docs/_astro/Comments.DL1E7C3J.js","/docs/_astro/_slug_.BxQD4WBw.css","/docs/_astro/client.ByEdBAVJ.js","/docs/_astro/hoisted.CdvlmjI-.js","/docs/_astro/hoisted.CvN_TNCx.js","/docs/_astro/hoisted.CvRwqrEO.css","/docs/_astro/index.BKZegMNO.js","/docs/_astro/photoswipe.esm.CKijkUPa.js","/docs/assets/at-work.jpg","/docs/assets/portrait.jpg","/docs/assets/stock-1.jpg","/docs/assets/stock-2.jpg","/docs/assets/stock-3.jpg","/docs/assets/stock-4.jpg","/docs/styles/global.css","/docs/assets/backgrounds/bg-footer-dark-1440w.jpg","/docs/assets/backgrounds/bg-footer-dark-800w.jpg","/docs/assets/backgrounds/bg-footer-light-1440w.jpg","/docs/assets/backgrounds/bg-footer-light-800w.jpg","/docs/assets/backgrounds/bg-main-dark-1440w.jpg","/docs/assets/backgrounds/bg-main-dark-800w.jpg","/docs/assets/backgrounds/bg-main-dark.svg","/docs/assets/backgrounds/bg-main-light-1440w.jpg","/docs/assets/backgrounds/bg-main-light-800w.jpg","/docs/assets/backgrounds/bg-main-light.svg","/docs/assets/backgrounds/bg-subtle-1-dark-1440w.jpg","/docs/assets/backgrounds/bg-subtle-1-dark-800w.jpg","/docs/assets/backgrounds/bg-subtle-1-light-1440w.jpg","/docs/assets/backgrounds/bg-subtle-1-light-800w.jpg","/docs/assets/backgrounds/bg-subtle-2-dark-1440w.jpg","/docs/assets/backgrounds/bg-subtle-2-dark-800w.jpg","/docs/assets/backgrounds/bg-subtle-2-light-1440w.jpg","/docs/assets/backgrounds/bg-subtle-2-light-800w.jpg","/docs/assets/backgrounds/noise.png","/docs/404.html","/docs/about/index.html","/docs/work/index.html","/docs/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"Gqmibs1Hz+GLnjDF3Eue6f7qrVgAikhoArz43HTmLT0=","experimentalEnvGetSecretEnabled":false});

export { manifest };
