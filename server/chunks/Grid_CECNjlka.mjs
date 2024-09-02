import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, e as renderSlot } from './astro/server_CkECM0Ri.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const $$Astro = createAstro("https://oussamasah.github.io");
const $$Grid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Grid;
  const { variant } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(["grid", { offset: variant === "offset", small: variant === "small" }], "class:list")} data-astro-cid-vc5tsdmu> ${renderSlot($$result, $$slots["default"])} </ul> `;
}, "/home/oussema/my-headless-project/astro-project/src/components/Grid.astro", void 0);

export { $$Grid as $ };
