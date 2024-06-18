import { c as create_ssr_component, d as each, f as add_attribute, e as escape } from './ssr-DdlStX9y.js';

const css = {
  code: "h1.svelte-9ziy6r{color:rebeccapurple}a.svelte-9ziy6r{text-decoration:none}li.svelte-9ziy6r{display:flex;gap:2rem;margin-bottom:2rem;;}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let data;\\n$: chars = data?.characters;\\n<\/script>\\r\\n\\r\\n<svelte:head>\\r\\n    <title>Chars</title>\\r\\n</svelte:head>\\r\\n<h1>\\r\\n    Chars\\r\\n</h1>\\r\\n\\r\\n<ul>\\r\\n    {#each chars as {name, id, image, occupation} (id)}\\r\\n        <li>\\r\\n            <a href={`/chars/${id}`} class=\\"picture\\">\\r\\n            <img src={image} alt={name} width=\\"150px\\"/>\\r\\n            </a>\\r\\n            <div>\\r\\n                <a href={`/chars/${id}`}>\\r\\n                    <strong>{name}</strong>\\r\\n                </a>\\r\\n                <p>{occupation}</p>\\r\\n            </div>\\r\\n        </li>\\r\\n    {/each}\\r\\n</ul>\\r\\n\\r\\n\\r\\n\\r\\n<style>\\r\\n    h1{\\r\\n        color: rebeccapurple;\\r\\n    }\\r\\n    a{\\r\\n        text-decoration: none;\\r\\n    }\\r\\n    li{\\r\\n       display: flex;\\r\\n       gap:2rem;\\r\\n       margin-bottom: 2rem;;\\r\\n    }\\r\\n</style>"],"names":[],"mappings":"AA8BI,gBAAE,CACE,KAAK,CAAE,aACX,CACA,eAAC,CACG,eAAe,CAAE,IACrB,CACA,gBAAE,CACC,OAAO,CAAE,IAAI,CACb,IAAI,IAAI,CACR,aAAa,CAAE,IAAI,CAAC,CACvB"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let chars;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  chars = data?.characters;
  return `${$$result.head += `<!-- HEAD_svelte-p4hij0_START -->${$$result.title = `<title>Chars</title>`, ""}<!-- HEAD_svelte-p4hij0_END -->`, ""} <h1 class="svelte-9ziy6r" data-svelte-h="svelte-bf5n63">Chars</h1> <ul>${each(chars, ({ name, id, image, occupation }) => {
    return `<li class="svelte-9ziy6r"><a${add_attribute("href", `/chars/${id}`, 0)} class="picture svelte-9ziy6r"><img${add_attribute("src", image, 0)}${add_attribute("alt", name, 0)} width="150px"></a> <div><a${add_attribute("href", `/chars/${id}`, 0)} class="svelte-9ziy6r"><strong>${escape(name)}</strong></a> <p>${escape(occupation)}</p></div> </li>`;
  })} </ul>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DO8hmvFs.js.map
