import { c as create_ssr_component, e as escape } from './ssr-DdlStX9y.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let char;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  char = data?.character;
  return `${$$result.head += `<!-- HEAD_svelte-153zccs_START -->${$$result.title = `<title>${escape(char.name)}</title>`, ""}<!-- HEAD_svelte-153zccs_END -->`, ""} <h1 data-svelte-h="svelte-bf5n63">Chars</h1> <h1>${escape(char.name)}</h1>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BKrc-8hk.js.map
