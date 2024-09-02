/* empty css                                    */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, u as unescapeHTML } from '../../chunks/astro/server_CkECM0Ri.mjs';
import 'kleur/colors';
import { a as $$BaseLayout, d as getAllWorks, c as $$Icon, $ as $$Hero } from '../../chunks/BaseLayout_Cy-1LoML.mjs';
import { $ as $$ContactCTA } from '../../chunks/ContactCTA_JRiPVRhx.mjs';
import { $ as $$Pill } from '../../chunks/Pill_42eB6Bzx.mjs';
import 'clsx';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://oussamasah.github.io");
const $$ImageGallery = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ImageGallery;
  const { imgs } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="gallery" class="container grid grid-cols-2 gap-2 px-2 pb-2 mx-auto md:grid-cols-3"> ${imgs.map(async (imagePath) => {
    console.log("--------------------", imagePath);
    return renderTemplate`<a${addAttribute(imagePath, "href")} target="_blank" class="overflow-hidden rounded-md border-[1px] border-primary hover:border-secondary"> <img${addAttribute(imagePath, "src")}> </a>`;
  })} </div> `;
}, "/home/oussema/my-headless-project/astro-project/src/components/imageGallery.astro", void 0);

const $$Astro = createAstro("https://oussamasah.github.io");
async function getStaticPaths() {
  const work = await getAllWorks();
  return work.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { entry } = Astro2.props;
  const images = entry.workFields.gallery.nodes.map((img) => img.mediaItemUrl);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": entry.title, "description": entry.workFields.description, "data-astro-cid-qwekciqp": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20" data-astro-cid-qwekciqp> <div class="stack gap-15" data-astro-cid-qwekciqp> <header data-astro-cid-qwekciqp> <div class="wrapper stack gap-2" data-astro-cid-qwekciqp> <a class="back-link" href="/work/" data-astro-cid-qwekciqp>${renderComponent($$result2, "Icon", $$Icon, { "icon": "arrow-left", "data-astro-cid-qwekciqp": true })} Work</a> ${renderComponent($$result2, "Hero", $$Hero, { "title": entry.title, "align": "start", "data-astro-cid-qwekciqp": true }, { "default": ($$result3) => renderTemplate` <div class="details" data-astro-cid-qwekciqp> <div class="tags" data-astro-cid-qwekciqp> ${entry.categories.nodes.map((t) => renderTemplate`${renderComponent($$result3, "Pill", $$Pill, { "data-astro-cid-qwekciqp": true }, { "default": ($$result4) => renderTemplate`${t.name}` })}`)} </div> <div class="description" data-astro-cid-qwekciqp>${unescapeHTML(entry.excerpt)}</div> </div> ` })} </div> </header> <main class="wrapper" data-astro-cid-qwekciqp> <div class="stack gap-10 content" data-astro-cid-qwekciqp> ${entry.workFields.cover.node.mediaItemUrl && renderTemplate`<img${addAttribute(entry.workFields.cover.node.mediaItemUrl, "src")}${addAttribute(entry.title || "", "alt")} data-astro-cid-qwekciqp>`} <div class="content" data-astro-cid-qwekciqp> <div class="description" data-astro-cid-qwekciqp>${unescapeHTML(entry.workFields.description)}</div> ${renderComponent($$result2, "ImageGallery", $$ImageGallery, { "imgs": images, "data-astro-cid-qwekciqp": true })} </div> </div> </main> </div> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "data-astro-cid-qwekciqp": true })} </div> ` })} `;
}, "/home/oussema/my-headless-project/astro-project/src/pages/work/[...slug].astro", void 0);

const $$file = "/home/oussema/my-headless-project/astro-project/src/pages/work/[...slug].astro";
const $$url = "/docs/work/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
