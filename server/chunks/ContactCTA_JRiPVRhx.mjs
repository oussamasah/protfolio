import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, e as renderSlot, d as renderComponent } from './astro/server_CkECM0Ri.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
import { c as $$Icon } from './BaseLayout_Cy-1LoML.mjs';

const $$Astro = createAstro("https://oussamasah.github.io");
const $$CallToAction = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CallToAction;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} data-astro-cid-balv45lp>${renderSlot($$result, $$slots["default"])}</a> `;
}, "/home/oussema/my-headless-project/astro-project/src/components/CallToAction.astro", void 0);

const $$ContactCTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<aside data-astro-cid-rcdzuq3a> <h2 data-astro-cid-rcdzuq3a>Interested in working together?</h2> ${renderComponent($$result, "CallToAction", $$CallToAction, { "href": "mailto:me@example.com", "data-astro-cid-rcdzuq3a": true }, { "default": ($$result2) => renderTemplate`
Send Me a Message
${renderComponent($$result2, "Icon", $$Icon, { "icon": "paper-plane-tilt", "size": "1.2em", "data-astro-cid-rcdzuq3a": true })} ` })} </aside> `;
}, "/home/oussema/my-headless-project/astro-project/src/components/ContactCTA.astro", void 0);

export { $$ContactCTA as $, $$CallToAction as a };
