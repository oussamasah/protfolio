/* empty css                                 */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, b as addAttribute } from '../chunks/astro/server_CkECM0Ri.mjs';
import 'kleur/colors';
import { c as $$Icon, d as getAllWorks, g as getAllPosts, e as GetHomePage, f as getSkills, $ as $$Hero, a as $$BaseLayout } from '../chunks/BaseLayout_Cy-1LoML.mjs';
import { Progress } from 'flowbite-react';
import { $ as $$ContactCTA, a as $$CallToAction } from '../chunks/ContactCTA_JRiPVRhx.mjs';
import { $ as $$Grid } from '../chunks/Grid_CECNjlka.mjs';
import { $ as $$Pill } from '../chunks/Pill_42eB6Bzx.mjs';
import { $ as $$PortfolioPreview } from '../chunks/PortfolioPreview_CxeT18Ab.mjs';
/* empty css                                 */
import { $ as $$PostPreview } from '../chunks/PostPreview_Dh-8zpUO.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://oussamasah.github.io");
const $$Skills = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Skills;
  const { skills } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="box skills" data-astro-cid-ab4ihpzs> ${skills.map((s) => renderTemplate`<div class="stack gap-2 lg:gap-4" data-astro-cid-ab4ihpzs> ${renderComponent($$result, "Icon", $$Icon, { "icon": s.icon, "color": "var(--accent-regular)", "size": "2.5rem", "gradient": true, "data-astro-cid-ab4ihpzs": true })} <h2 data-astro-cid-ab4ihpzs>${s.title}</h2> <p data-astro-cid-ab4ihpzs>${s.description}</p> </div>`)} </section> `;
}, "/home/oussema/my-headless-project/astro-project/src/components/Skills.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const projects = await getAllWorks();
  const posts = await getAllPosts();
  const page = await GetHomePage();
  const skills = await getSkills();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([' <script type="application/json" id="page-data">\n		\n	  <\/script> ', '<div class="stack gap-20 lg:gap-48" data-astro-cid-j7pv25f6> <div class="wrapper stack gap-8 lg:gap-20" data-astro-cid-j7pv25f6> <header class="hero" data-astro-cid-j7pv25f6> ', ' <img alt="Jeanine White smiling in a red plaid shirt and tortoise shell glasses" width="480" height="620"', " data-astro-cid-j7pv25f6> </header> ", ' </div> <main class="wrapper stack gap-20 lg:gap-48" data-astro-cid-j7pv25f6> <section class="section with-background with-cta" data-astro-cid-j7pv25f6> <header class="section-header stack gap-2 lg:gap-4" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>', "</h3> <p data-astro-cid-j7pv25f6>", '</p> </header> <div class="gallery" data-astro-cid-j7pv25f6> ', ' </div> <div class="cta" data-astro-cid-j7pv25f6> ', ' </div> </section> <section class="with-background w-full" data-astro-cid-j7pv25f6> <header class="mb-5" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>My Skills</h3> <p data-astro-cid-j7pv25f6>', '</p> </header> <div class="flex gap-3	w-full divide-x dark:divide-slate-700	" data-astro-cid-j7pv25f6> ', ' </div> </section> <section class="section with-background bg-variant" data-astro-cid-j7pv25f6> <header class="section-header stack gap-2 lg:gap-4" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Mentions</h3> <p data-astro-cid-j7pv25f6>\nI have been fortunate enough to receive praise for my work in several publications. Take\n						a look below to learn more.\n</p> </header> <div class="gallery" data-astro-cid-j7pv25f6> ', ' </div> </section> <section class="section with-background with-cta" data-astro-cid-j7pv25f6> <header class="section-header stack gap-2 lg:gap-4" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Blog posts</h3> <p data-astro-cid-j7pv25f6>See my recent posts and welcome to my comunity</p> </header> <div class="gallery" data-astro-cid-j7pv25f6> ', ' </div> <div class="cta" data-astro-cid-j7pv25f6> ', " </div> </section> </main> ", " </div> "])), maybeRenderHead(), renderComponent($$result2, "Hero", $$Hero, { "title": page.introduction.title, "tagline": page.introduction.description, "align": "start", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` <div class="roles" data-astro-cid-j7pv25f6> ${page.profile.map((p) => renderTemplate`${renderComponent($$result3, "Pill", $$Pill, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": p.icon, "size": "1.33em", "data-astro-cid-j7pv25f6": true })} ${p.name}` })}`)} </div> ` }), addAttribute(page.introduction.photo.node.mediaItemUrl, "src"), renderComponent($$result2, "Skills", $$Skills, { "skills": page.rewards, "data-astro-cid-j7pv25f6": true }), page.achievement.title, page.achievement.description, renderComponent($$result2, "Grid", $$Grid, { "variant": "offset", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`${projects.slice(0, 4).map((project) => renderTemplate`<li data-astro-cid-j7pv25f6> ${renderComponent($$result3, "PortfolioPreview", $$PortfolioPreview, { "project": project, "data-astro-cid-j7pv25f6": true })} </li>`)}` }), renderComponent($$result2, "CallToAction", $$CallToAction, { "href": "/work/", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`
View All
${renderComponent($$result3, "Icon", $$Icon, { "icon": "arrow-right", "size": "1.2em", "data-astro-cid-j7pv25f6": true })} ` }), page.achievement.description, Object.values(skills).map((categ) => renderTemplate`<div class="w-1/3 p-3" data-astro-cid-j7pv25f6> <span class="font-bold text-2xl mb-5 block" data-astro-cid-j7pv25f6>${categ.name}</span> <div class="subcateg " data-astro-cid-j7pv25f6> ${Object.values(categ.children).map((child) => renderTemplate`<div class="ml-5 items-center shadow  p-2 mb-3 rounded" data-astro-cid-j7pv25f6> <span class="font-bold text-xl text-center  block mb-3  py-2 " data-astro-cid-j7pv25f6> ${child.name}</span> <ul class="list-none " data-astro-cid-j7pv25f6> ${child.posts.map((post) => renderTemplate`<li class="mb-5" data-astro-cid-j7pv25f6> <div class="flex gap-2 items-center mb-2" data-astro-cid-j7pv25f6> <img${addAttribute(post.featuredImage?.node?.mediaItemUrl, "src")} alt="A description of my image." width="50" height="50" decoding="async" loading="lazy" data-astro-cid-j7pv25f6> ${post.title} <span class="text-sm font-bold " data-astro-cid-j7pv25f6>(${post.skillsFields.stars}%)</span></div> ${renderComponent($$result2, "Progress", Progress, { "progress": post.skillsFields.stars, "color": "purple", "size": "sm", "data-astro-cid-j7pv25f6": true })} </li>`)} </ul> </div>`)} </div> </div>`), renderComponent($$result2, "Grid", $$Grid, { "variant": "small", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`${["Medium", "BuzzFeed", "The Next Web", "awwwards.", "TechCrunch"].map((brand) => renderTemplate`<li class="mention-card" data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>${brand}</p> </li>`)}` }), renderComponent($$result2, "Grid", $$Grid, { "variant": "offset", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`${posts.slice(0, 4).map((post) => renderTemplate`<li data-astro-cid-j7pv25f6> ${renderComponent($$result3, "PostPreview", $$PostPreview, { "post": post, "data-astro-cid-j7pv25f6": true })} </li>`)}` }), renderComponent($$result2, "CallToAction", $$CallToAction, { "href": "/blog/1", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`
View All
${renderComponent($$result3, "Icon", $$Icon, { "icon": "arrow-right", "size": "1.2em", "data-astro-cid-j7pv25f6": true })} ` }), renderComponent($$result2, "ContactCTA", $$ContactCTA, { "data-astro-cid-j7pv25f6": true })) })} `;
}, "/home/oussema/my-headless-project/astro-project/src/pages/index.astro", void 0);

const $$file = "/home/oussema/my-headless-project/astro-project/src/pages/index.astro";
const $$url = "/docs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
