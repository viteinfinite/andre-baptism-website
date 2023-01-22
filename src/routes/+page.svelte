<script>
	import { locale, locales } from '../translations/i18n';
	import Hero from './Hero.svelte';
	import Info from './Info.svelte';
	import Footer from './Footer.svelte';
</script>

<Hero {locale} {locales} />
<Info />
<Footer />
