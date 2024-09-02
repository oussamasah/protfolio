/* empty css                                 */
import { a as createComponent, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_CkECM0Ri.mjs';
import 'kleur/colors';
import { $ as $$Hero, a as $$BaseLayout } from '../chunks/BaseLayout_Cy-1LoML.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Not Found", "description": "404 Error \u2014 this page was not found" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Page Not Found", "tagline": "Not found" })} ` })}`;
}, "/home/oussema/my-headless-project/astro-project/src/pages/404.astro", void 0);

const $$file = "/home/oussema/my-headless-project/astro-project/src/pages/404.astro";
const $$url = "/docs/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
