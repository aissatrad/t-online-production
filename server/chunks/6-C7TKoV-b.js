import { e as error } from './index-CvuFLVuQ.js';

const charsAPI = "https://svelte.fun/api/bobs-burgers/characters";
const load = async ({ fetch, params }) => {
  const { id } = params;
  const res = await fetch(`${charsAPI}/${id}`);
  if (!res.ok) {
    const err = await res.json();
    throw error(res.status, "Aissa " + err.message);
  }
  const character = await res.json();
  return {
    character
  };
};

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 6;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BKrc-8hk.js')).default;
const universal_id = "src/routes/chars/[id]/+page.ts";
const imports = ["_app/immutable/nodes/6.D-PpyWjM.js","_app/immutable/chunks/index.CzR0xuCU.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.MJeIJr9I.js","_app/immutable/chunks/index.C2Xzi-Hm.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=6-C7TKoV-b.js.map
