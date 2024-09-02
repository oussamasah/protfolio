import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, u as unescapeHTML } from './astro/server_CkECM0Ri.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://oussamasah.github.io");
const $$PostPreview = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostPreview;
  const { post } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg- text-[var(--accent-dark)] border border-purple-400 shadow-lg shadow-slate-400 dark:shadow-slate-700 rounded-[30px] overflow-hidden bg-gradient-to-r from-fuchsia-800 to-purple-800  dark:bg-gradient-to-r dark:from-purple-800 dark:to-fuchsia-950"> <a${addAttribute(`/blog/post/${post.slug}`, "href")}> <div class="rounded-t-lg h-[200px] w-full"${addAttribute(`background-image: url(${post?.featuredImage?.node?.mediaItemUrl || null}); background-size: cover; background-position: center;`, "style")}></div> </a> <div class="p-5"> <a${addAttribute(`/blog/post/${post.slug}`, "href")}> <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">${post?.title || "Untitled"}</h5> </a> <div class="my-3 font-normal text-white dark:text-white ">${unescapeHTML(post?.excerpt || "")}</div> <div class="flex gap-3 flex-wrap mb-3"> ${post?.tags?.nodes.map((t) => renderTemplate`<span class="bg-purple-500 w-100 text-white  text-sm font-medium  px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-white">${t?.name || ""}</span>`)} </div> <a${addAttribute(`/blog/post/${post.slug}`, "href")} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-900 rounded-lg hover:bg-purple-900 focus:ring-4 focus:outline-none focus:ring-purple-900 dark:bg-purple-600 dark:hover:bg-purple-900 dark:focus:ring-purple-900">
Read more
<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path> </svg> </a> </div> </div>`;
}, "/home/oussema/my-headless-project/astro-project/src/components/PostPreview.astro", void 0);

export { $$PostPreview as $ };
