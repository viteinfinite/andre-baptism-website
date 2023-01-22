<script>
	import { browser } from '$app/environment';
	import { locale, locales } from '../translations/i18n';
	if (browser) {
		const navigatorLocale = window.navigator.language.split('-')[0];
		const matchedLocale = locales.indexOf(navigatorLocale) == -1 ? 'fr' : navigatorLocale;
		locale.set(matchedLocale);
	}
	import Hero from './Hero.svelte';
	import Info from './Info.svelte';
	import Footer from './Footer.svelte';
</script>

<Hero {locale} {locales} />
<Info />
<Footer />
