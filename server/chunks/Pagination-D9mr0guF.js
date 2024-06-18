import { c as create_ssr_component, d as each, e as escape } from './ssr-DdlStX9y.js';

const css = {
  code: ".pagination.svelte-vr6uia.svelte-vr6uia{display:flex;justify-content:center;align-items:center;gap:10px;margin-top:20px}.pagination.svelte-vr6uia button.svelte-vr6uia{background-color:#f0f0f0;border:none;color:#333;padding:8px 12px;cursor:pointer;border-radius:5px;transition:background-color 0.3s ease}.pagination.svelte-vr6uia button.svelte-vr6uia:hover{background-color:#ddd}.pagination.svelte-vr6uia button.active.svelte-vr6uia{background-color:rebeccapurple;color:white}",
  map: `{"version":3,"file":"Pagination.svelte","sources":["Pagination.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let totalItems;\\nexport let itemsPerPage = 10;\\nexport let currentPage = 1;\\n$: totalPages = Math.ceil(totalItems / itemsPerPage);\\n$: pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);\\n<\/script>\\r\\n\\r\\n<div class=\\"pagination\\">\\r\\n\\t{#if currentPage > 1}\\r\\n\\t\\t<button on:click={() => currentPage--}>السابق</button>\\r\\n\\t{/if}\\r\\n\\r\\n\\t{#each pageNumbers as pageNumber}\\r\\n\\t\\t<button class:active={pageNumber === currentPage} on:click={() => (currentPage = pageNumber)}>\\r\\n\\t\\t\\t{pageNumber}\\r\\n\\t\\t</button>\\r\\n\\t{/each}\\r\\n\\r\\n\\t{#if currentPage < totalPages}\\r\\n\\t\\t<button on:click={() => currentPage++}>التالي</button>\\r\\n\\t{/if}\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n\\t/* In your Pagination.svelte component's <style> block */\\r\\n\\r\\n\\t.pagination {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tjustify-content: center; /* Center horizontally */\\r\\n\\t\\talign-items: center; /* Center vertically */\\r\\n\\t\\tgap: 10px; /* Space between buttons */\\r\\n\\t\\tmargin-top: 20px; /* Add some margin above */\\r\\n\\t}\\r\\n\\r\\n\\t.pagination button {\\r\\n\\t\\tbackground-color: #f0f0f0; /* Light background */\\r\\n\\t\\tborder: none;\\r\\n\\t\\tcolor: #333; /* Dark text */\\r\\n\\t\\tpadding: 8px 12px;\\r\\n\\t\\tcursor: pointer;\\r\\n\\t\\tborder-radius: 5px; /* Rounded corners */\\r\\n\\t\\ttransition: background-color 0.3s ease; /* Smooth transition on hover */\\r\\n\\t}\\r\\n\\r\\n\\t.pagination button:hover {\\r\\n\\t\\tbackground-color: #ddd; /* Slightly darker on hover */\\r\\n\\t}\\r\\n\\r\\n\\t.pagination button.active {\\r\\n\\t\\tbackground-color: rebeccapurple; /* Highlight the active page */\\r\\n\\t\\tcolor: white;\\r\\n\\t}\\r\\n\\r\\n\\r\\n\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA0BC,uCAAY,CACX,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,IAAI,CACT,UAAU,CAAE,IACb,CAEA,yBAAW,CAAC,oBAAO,CAClB,gBAAgB,CAAE,OAAO,CACzB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,GAAG,CAAC,IAAI,CACjB,MAAM,CAAE,OAAO,CACf,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,gBAAgB,CAAC,IAAI,CAAC,IACnC,CAEA,yBAAW,CAAC,oBAAM,MAAO,CACxB,gBAAgB,CAAE,IACnB,CAEA,yBAAW,CAAC,MAAM,qBAAQ,CACzB,gBAAgB,CAAE,aAAa,CAC/B,KAAK,CAAE,KACR"}`
};
const Pagination = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let totalPages;
  let pageNumbers;
  let { totalItems } = $$props;
  let { itemsPerPage = 10 } = $$props;
  let { currentPage = 1 } = $$props;
  if ($$props.totalItems === void 0 && $$bindings.totalItems && totalItems !== void 0) $$bindings.totalItems(totalItems);
  if ($$props.itemsPerPage === void 0 && $$bindings.itemsPerPage && itemsPerPage !== void 0) $$bindings.itemsPerPage(itemsPerPage);
  if ($$props.currentPage === void 0 && $$bindings.currentPage && currentPage !== void 0) $$bindings.currentPage(currentPage);
  $$result.css.add(css);
  totalPages = Math.ceil(totalItems / itemsPerPage);
  pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  return `<div class="pagination svelte-vr6uia">${currentPage > 1 ? `<button class="svelte-vr6uia" data-svelte-h="svelte-4k44op">السابق</button>` : ``} ${each(pageNumbers, (pageNumber) => {
    return `<button class="${["svelte-vr6uia", pageNumber === currentPage ? "active" : ""].join(" ").trim()}">${escape(pageNumber)} </button>`;
  })} ${currentPage < totalPages ? `<button class="svelte-vr6uia" data-svelte-h="svelte-1vg9x2">التالي</button>` : ``} </div>`;
});

export { Pagination as P };
//# sourceMappingURL=Pagination-D9mr0guF.js.map
