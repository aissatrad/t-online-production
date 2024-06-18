import { c as create_ssr_component, e as escape, v as validate_component, d as each, f as add_attribute } from './ssr-DdlStX9y.js';
import { P as Pagination } from './Pagination-D9mr0guF.js';

const css = {
  code: ".cartoon-genre.svelte-ujgl0a{text-align:center;margin-bottom:20px}.episode-grid.svelte-ujgl0a{display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));gap:20px}.episode-card.svelte-ujgl0a{background-color:#f5f5f5;border-radius:8px;overflow:hidden;box-shadow:0 2px 5px rgba(0, 0, 0, 0.1)}.card-content.svelte-ujgl0a{padding:20px}.details.svelte-ujgl0a{display:flex;justify-content:space-between;align-items:center;margin-top:10px}.download-link.svelte-ujgl0a{background-color:#4CAF50;color:white;padding:8px 16px;text-align:center;text-decoration:none;display:inline-block;font-size:14px;border-radius:5px;transition:background-color 0.3s}.download-link.svelte-ujgl0a:hover{background-color:#3e8e41}",
  map: `{"version":3,"file":"Cartoon.svelte","sources":["Cartoon.svelte"],"sourcesContent":["<script>\\r\\n  import { fade } from 'svelte/transition';  // Import the fade transition\\r\\n\\r\\n  export let cartoon;\\r\\n  export let episodes;\\r\\n<\/script>\\r\\n\\r\\n<div class=\\"cartoon-genre\\">\\r\\n  <h2>{cartoon.name}</h2>\\r\\n\\r\\n  <div class=\\"episode-grid\\">  \\r\\n      {#each episodes as { title, url, size, duration } (title)}\\r\\n          <div class=\\"episode-card\\" in:fade={{ delay: 200, duration: 800 }}> \\r\\n              <div class=\\"card-content\\">\\r\\n                  <h3>{title}</h3>\\r\\n                  <video width=\\"100%\\" controls poster={cartoon.logo}>\\r\\n                      <source src=\\"{url}\\" type=\\"video/mp4\\">\\r\\n                        <track kind=\\"captions\\">\\r\\n\\r\\n                      متصفحك لا يدعم مشغل الفيديو\\r\\n                  </video>\\r\\n                  <div class=\\"details\\">\\r\\n                      <p>المدة: {duration} د</p>\\r\\n                      <a download=\\"{title}.mp4\\" href={url} class=\\"download-link\\">\\r\\n                             تحميل {size} ميجا\\r\\n                      </a>\\r\\n                  </div>\\r\\n              </div>\\r\\n          </div>\\r\\n      {/each}\\r\\n  </div>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n  .cartoon-genre {\\r\\n      text-align: center;\\r\\n      margin-bottom: 20px;\\r\\n  }\\r\\n\\r\\n  .episode-grid {\\r\\n      display: grid;\\r\\n      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); \\r\\n      gap: 20px;\\r\\n  }\\r\\n\\r\\n  .episode-card {\\r\\n      background-color: #f5f5f5;\\r\\n      border-radius: 8px;\\r\\n      overflow: hidden;\\r\\n      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); \\r\\n  }\\r\\n\\r\\n  .card-content {\\r\\n      padding: 20px;\\r\\n  }\\r\\n\\r\\n  .poster {\\r\\n      width: 100%;\\r\\n      height: 150px; \\r\\n      object-fit: cover; \\r\\n      margin-bottom: 15px;\\r\\n  }\\r\\n\\r\\n  .details {\\r\\n      display: flex;\\r\\n      justify-content: space-between;\\r\\n      align-items: center;\\r\\n      margin-top: 10px;\\r\\n  }\\r\\n\\r\\n  .download-link {\\r\\n      background-color: #4CAF50; \\r\\n      color: white;\\r\\n      padding: 8px 16px;\\r\\n      text-align: center;\\r\\n      text-decoration: none;\\r\\n      display: inline-block;\\r\\n      font-size: 14px;\\r\\n      border-radius: 5px;\\r\\n      transition: background-color 0.3s;\\r\\n  }\\r\\n\\r\\n  .download-link:hover {\\r\\n      background-color: #3e8e41; \\r\\n  }\\r\\n</style>\\r\\n\\r\\n\\r\\n\\r\\n<!-- <script>\\r\\n    export let cartoon\\r\\n    export let episodes\\r\\n  <\/script>\\r\\n  \\r\\n  <div class=\\"cartoon-genre\\">\\r\\n    <h2>{cartoon.name}</h2>\\r\\n\\r\\n\\r\\n\\r\\n{#each episodes as  {title, url, size, duration } (title)}\\r\\n\\r\\n\\r\\n  <div class=\\"container\\">\\r\\n  \\r\\n    <div class=\\"card-container\\">\\r\\n        <h3>{title}</h3>\\r\\n\\r\\n    <video width=\\"150\\" controls poster={cartoon.logo}>\\r\\n        <source src=\\"{url}\\" type=\\"video/mp4\\">\\r\\n        Your browser does not support the video tag.\\r\\n        <track kind=\\"captions\\">\\r\\n\\r\\n    </video>\\r\\n    <p>طول الحلقة: {duration}</p>\\r\\n    <a download=\\"{title}.mp4\\" href={url}> ميجا {size} تحميل</a>\\r\\n\\r\\n    </div>\\r\\n\\r\\n  \\r\\n    \\r\\n  </div>\\r\\n{/each}\\r\\n\\r\\n\\r\\n\\r\\n  </div>\\r\\n  \\r\\n  <style>\\r\\n   \\r\\n   .container {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tflex-wrap: wrap;\\r\\n\\t\\tjustify-content: space-evenly;\\r\\n\\t}\\r\\n  </style>\\r\\n   -->"],"names":[],"mappings":"AAkCE,4BAAe,CACX,UAAU,CAAE,MAAM,CAClB,aAAa,CAAE,IACnB,CAEA,2BAAc,CACV,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,QAAQ,CAAC,CAAC,OAAO,KAAK,CAAC,CAAC,GAAG,CAAC,CAAC,CAC3D,GAAG,CAAE,IACT,CAEA,2BAAc,CACV,gBAAgB,CAAE,OAAO,CACzB,aAAa,CAAE,GAAG,CAClB,QAAQ,CAAE,MAAM,CAChB,UAAU,CAAE,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAC3C,CAEA,2BAAc,CACV,OAAO,CAAE,IACb,CASA,sBAAS,CACL,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAAa,CAC9B,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,IAChB,CAEA,4BAAe,CACX,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,GAAG,CAAC,IAAI,CACjB,UAAU,CAAE,MAAM,CAClB,eAAe,CAAE,IAAI,CACrB,OAAO,CAAE,YAAY,CACrB,SAAS,CAAE,IAAI,CACf,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,gBAAgB,CAAC,IACjC,CAEA,4BAAc,MAAO,CACjB,gBAAgB,CAAE,OACtB"}`
};
const Cartoon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { cartoon } = $$props;
  let { episodes } = $$props;
  if ($$props.cartoon === void 0 && $$bindings.cartoon && cartoon !== void 0) $$bindings.cartoon(cartoon);
  if ($$props.episodes === void 0 && $$bindings.episodes && episodes !== void 0) $$bindings.episodes(episodes);
  $$result.css.add(css);
  return `<div class="cartoon-genre svelte-ujgl0a"><h2>${escape(cartoon.name)}</h2> <div class="episode-grid svelte-ujgl0a">${each(episodes, ({ title, url, size, duration }) => {
    return `<div class="episode-card svelte-ujgl0a"><div class="card-content svelte-ujgl0a"><h3>${escape(title)}</h3> <video width="100%" controls${add_attribute("poster", cartoon.logo, 0)}><source${add_attribute("src", url, 0)} type="video/mp4"><track kind="captions">

                      متصفحك لا يدعم مشغل الفيديو</video> <div class="details svelte-ujgl0a"><p>المدة: ${escape(duration)} د</p> <a download="${escape(title, true) + ".mp4"}"${add_attribute("href", url, 0)} class="download-link svelte-ujgl0a">تحميل ${escape(size)} ميجا</a> </div></div> </div>`;
  })}</div></div>  `;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let episodes;
  let { data } = $$props;
  let currentPage = 1;
  let itemsPerPage = 15;
  let cartoon = data.cartoon;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    episodes = data.episodes.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1yt4dke_START -->${$$result.title = `<title>${escape(cartoon.name)}</title>`, ""}<!-- HEAD_svelte-1yt4dke_END -->`, ""} ${validate_component(Cartoon, "Cartoon").$$render($$result, { cartoon, episodes }, {}, {})} ${validate_component(Pagination, "Pagination").$$render(
      $$result,
      {
        totalItems: data.episodes.length,
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
    )}`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CSEsKanE.js.map
