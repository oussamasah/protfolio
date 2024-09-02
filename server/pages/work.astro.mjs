/* empty css                                 */
import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CkECM0Ri.mjs';
import 'kleur/colors';
import { d as getAllWorks, $ as $$Hero, a as $$BaseLayout } from '../chunks/BaseLayout_Cy-1LoML.mjs';
import { $ as $$ContactCTA } from '../chunks/ContactCTA_JRiPVRhx.mjs';
import { $ as $$PortfolioPreview } from '../chunks/PortfolioPreview_CxeT18Ab.mjs';
import { $ as $$Grid } from '../chunks/Grid_CECNjlka.mjs';
export { renderers } from '../renderers.mjs';

const $$Work = createComponent(async ($$result, $$props, $$slots) => {
  const projects = await getAllWorks();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "My Work | Jeanine White", "description": "Learn about Jeanine White's most recent projects" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20"> <main class="wrapper stack gap-8"> ${renderComponent($$result2, "Hero", $$Hero, { "title": "My Work", "tagline": "See my most recent projects below to get an idea of my past experience.", "align": "start" })} ${renderComponent($$result2, "Grid", $$Grid, { "variant": "offset" }, { "default": ($$result3) => renderTemplate`${projects.map((project) => renderTemplate`<li> ${renderComponent($$result3, "PortfolioPreview", $$PortfolioPreview, { "project": project })} </li>`)}` })} </main> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, {})} </div> ` })}`;
}, "/home/oussema/my-headless-project/astro-project/src/pages/work.astro", void 0);

const $$file = "/home/oussema/my-headless-project/astro-project/src/pages/work.astro";
const $$url = "/docs/work";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Work,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
