import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from './astro/server_CkECM0Ri.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro("https://oussamasah.github.io");
const $$PortfolioPreview = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PortfolioPreview;
  const { project } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="card"${addAttribute(`/work/${project.slug}`, "href")} data-astro-cid-lgkm4u2a> <span class="title" data-astro-cid-lgkm4u2a>${project.title}</span> <img${addAttribute(project.workFields.cover.node.mediaItemUrl, "src")}${addAttribute(project.title || "", "alt")} loading="lazy" decoding="async" data-astro-cid-lgkm4u2a> </a> `;
}, "/home/oussema/my-headless-project/astro-project/src/components/PortfolioPreview.astro", void 0);

export { $$PortfolioPreview as $ };
