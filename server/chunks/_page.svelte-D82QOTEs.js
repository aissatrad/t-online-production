import { c as create_ssr_component, d as each, v as validate_component } from './ssr-DdlStX9y.js';
import { C as CartoonGenre } from './CartoonGenre-PGcnzYrK.js';
import { P as Pagination } from './Pagination-D9mr0guF.js';

const css = {
  code: ".container.svelte-19bfeym{display:flex;flex-wrap:wrap;justify-content:space-evenly}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import CartoonGenre from \\"$lib/CartoonGenre.svelte\\";\\nimport Pagination from \\"$lib/Pagination.svelte\\";\\nexport let data;\\nlet currentPage = 1;\\nlet itemsPerPage = 20;\\n$: cartoons = data.cartoonGenres.slice(\\n  (currentPage - 1) * itemsPerPage,\\n  currentPage * itemsPerPage\\n);\\n<\/script>\\r\\n\\r\\n<svelte:head>\\r\\n\\t<title>Cartoons</title>\\r\\n</svelte:head>\\r\\n\\r\\n<main>\\r\\n\\t<div class=\\"container\\">\\r\\n\\t\\t{#each cartoons as cartoonGenre}\\r\\n\\t\\t\\t<CartoonGenre {cartoonGenre} />\\r\\n\\t\\t{/each}\\r\\n\\t</div>\\r\\n  <Pagination totalItems={data.cartoonGenres.length} bind:currentPage bind:itemsPerPage /> \\r\\n\\r\\n</main>\\r\\n\\r\\n<style>\\r\\n\\t.container {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tflex-wrap: wrap;\\r\\n\\t\\tjustify-content: space-evenly;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA0BC,yBAAW,CACV,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,eAAe,CAAE,YAClB"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cartoons;
  let { data } = $$props;
  let currentPage = 1;
  let itemsPerPage = 20;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    cartoons = data.cartoonGenres.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-t2bme7_START -->${$$result.title = `<title>Cartoons</title>`, ""}<!-- HEAD_svelte-t2bme7_END -->`, ""} <main><div class="container svelte-19bfeym">${each(cartoons, (cartoonGenre) => {
      return `${validate_component(CartoonGenre, "CartoonGenre").$$render($$result, { cartoonGenre }, {}, {})}`;
    })}</div> ${validate_component(Pagination, "Pagination").$$render(
      $$result,
      {
        totalItems: data.cartoonGenres.length,
        currentPage,
        itemsPerPage
      },
      {
        currentPage: ($$value) => {
          currentPage = $$value;
          $$settled = false;
        },
        itemsPerPage: ($$value) => {
          itemsPerPage = $$value;
          $$settled = false;
        }
      },
      {}
    )} </main>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-D82QOTEs.js.map
