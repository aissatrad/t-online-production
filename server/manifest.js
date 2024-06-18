const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.KNa18Pu1.js","app":"_app/immutable/entry/app.C7paTtrk.js","imports":["_app/immutable/entry/start.KNa18Pu1.js","_app/immutable/chunks/entry.C2JGAoL1.js","_app/immutable/chunks/scheduler.MJeIJr9I.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/entry/app.C7paTtrk.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/scheduler.MJeIJr9I.js","_app/immutable/chunks/index.C2Xzi-Hm.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-DDW_tfP5.js')),
			__memo(() => import('./chunks/1-C4yoUHvl.js')),
			__memo(() => import('./chunks/2-CNUjuXD8.js')),
			__memo(() => import('./chunks/3-LhoiqV7K.js')),
			__memo(() => import('./chunks/4-CxzPOqyh.js')),
			__memo(() => import('./chunks/5-q5IsoshI.js')),
			__memo(() => import('./chunks/6-C7TKoV-b.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/cartoon",
				pattern: /^\/cartoon\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/cartoon/[slug]",
				pattern: /^\/cartoon\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/chars",
				pattern: /^\/chars\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/chars/[id]",
				pattern: /^\/chars\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
