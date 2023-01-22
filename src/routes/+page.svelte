<script>
	import { browser } from '$app/environment';
	import { locale, locales } from '../translations/i18n';
	import Hero from './Hero.svelte';
	import Info from './Info.svelte';
	import Footer from './Footer.svelte';
	let languageLoaded = false;
	if (browser) {
		setTimeout(() => {
			const navigatorLocale = window.navigator.language.split('-')[0];
			const matchedLocale = locales.indexOf(navigatorLocale) == -1 ? 'fr' : navigatorLocale;
			locale.set(matchedLocale);
			languageLoaded = true;
		}, 1);
	}
</script>

{#if languageLoaded}
	<Hero {locale} {locales} />
	<Info />
	<Footer />
{/if}
