/* empty css                                    */
import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_CkECM0Ri.mjs';
import 'kleur/colors';
import { g as getAllPosts, $ as $$Hero, a as $$BaseLayout } from '../../chunks/BaseLayout_Cy-1LoML.mjs';
import { $ as $$ContactCTA } from '../../chunks/ContactCTA_JRiPVRhx.mjs';
import { $ as $$PostPreview } from '../../chunks/PostPreview_Dh-8zpUO.mjs';
import { $ as $$Grid } from '../../chunks/Grid_CECNjlka.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://oussamasah.github.io");
const getStaticPaths = async ({ paginate }) => {
  const posts = await getAllPosts();
  const astronautPages = posts;
  return paginate(astronautPages, { pageSize: 10 });
};
const $$page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$page;
  const { page } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Recent posts | Sharaoui Oussema", "description": "Learn about Shraoui Oussema's most recent posts" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20"> <main class="wrapper stack gap-8"> ${renderComponent($$result2, "Hero", $$Hero, { "title": "Posts", "tagline": "See my most recent posts below to get an idea of my news.", "align": "start" })} <nav aria-label="Page navigation"> <ul class="flex items-center -space-x-px h-8 text-sm"> <!-- Previous Page Link --> <li> ${page.url.prev ? renderTemplate`<a${addAttribute(page.url.prev, "href")} class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
Previous
</a>` : null} </li> <!-- Page Number Links --> <!-- Next Page Link --> <li> ${page.url.next ? renderTemplate`<a${addAttribute(page.url.next, "href")} class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
Next
</a>` : null} </li> </ul> </nav> ${renderComponent($$result2, "Grid", $$Grid, { "variant": "offset" }, { "default": ($$result3) => renderTemplate`${page.data.map((p) => renderTemplate`${renderComponent($$result3, "PostPreview", $$PostPreview, { "post": p })}`)}` })} </main> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, {})} </div> ` })}`;
}, "/home/oussema/my-headless-project/astro-project/src/pages/blog/[page].astro", void 0);

const $$file = "/home/oussema/my-headless-project/astro-project/src/pages/blog/[page].astro";
const $$url = "/docs/blog/[page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$page,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
