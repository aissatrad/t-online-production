import { e as error } from './index-CvuFLVuQ.js';

const charsAPI = "https://svelte.fun/api/bobs-burgers/characters";
const load = async ({ fetch }) => {
  try {
    const res = await fetch(charsAPI);
    if (!res.ok) {
      const err = await res.json();
      throw error(res.status, "Aissa" + err.message);
    }
    const characters = await res.json();
    return {
      characters
    };
  } catch {
    throw error(500, "Aissa: Internal server error");
  }
};

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DO8hmvFs.js')).default;
const universal_id = "src/routes/chars/+page.ts";
const imports = ["_app/immutable/nodes/5.BV_8v1VX.js","_app/immutable/chunks/index.CzR0xuCU.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.MJeIJr9I.js","_app/immutable/chunks/index.C2Xzi-Hm.js","_app/immutable/chunks/each.DntUPlRq.js"];
const stylesheets = ["_app/immutable/assets/5.r6f6U0Yd.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=5-q5IsoshI.js.map
