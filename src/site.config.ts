import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
	// Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
	author: "Rhys Malson",
	// Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
	title: "Rhys' Domain",
	// Meta property used as the default description meta property
	description: "A blog filled about IT, homelabbing, and other bits 'n bobs.",
	// HTML lang property, found in src/layouts/Base.astro L:18
	lang: "en-AU",
	// Meta property, found in src/components/BaseHead.astro L:42
	ogLocale: "en_AU",
	// Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
	date: {
		locale: "en-AU",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
	webmentions: {
		link: "",
	},
};

// Used to generate links in both the Header & Footer.
export const menuLinks: Array<{ title: string; path: string }> = [
	{
		title: "Home",
		path: "/",
	},
	{
		title: "About",
		path: "/about/",
	},
	{
		title: "Blog",
		path: "/posts/",
	},
];
