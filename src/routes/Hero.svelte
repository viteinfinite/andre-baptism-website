<script>
	import { t } from '../translations/i18n';
	export let locale;
	export let locales;
</script>

<section id="hero" class="text-primary-600 body-font h-screen bg-secondary-500/30">
	<div class="px-0 md:flex md:justify-between h-full">
		<div
			id="hero-rafiki"
			class="absolute md:static md:w-1/2 md:pr-6 flex flex-col h-full md:pl-9 lg:pl-16"
		>
			<div class="grow">
				<header class="text-primary-600 body-font">
					<div class="container static md:absolute md:pt-8">
						<nav class="md:mr-auto flex flex-wrap text-base justify-start">
							<a href="#intro" class="mr-5 hover:text-primary-900">{$t('nav.intro')}</a>
							<a href="#venue" class="mr-5 hover:text-primary-900">{$t('nav.venue')}</a>
							<a href="#programme-25" class="mr-5 hover:text-primary-900">{$t('nav.programme')}</a>
							<a href="#presents" class="mr-5 hover:text-primary-900">{$t('nav.presents')}</a>
							{$t('nav.language')}
							<select class="ml-1" bind:value={$locale}>
								{#each locales as l}
									<option value={l}>{$t('nav.language.' + l)}</option>
								{/each}
							</select>
						</nav>
					</div>
				</header>
			</div>
			<div class="grow-0">
				<span
					class="text-xsecondary-500 tracking-widest font-medium title-font text-3xl block mb-1 text-deep-space-sparkle-500 uppercase"
					>{$t('global.dates')}</span
				>
				<span class="font-berkshire text-7xl block text-deep-space-sparkle-500"
					>{$t('global.title')}</span
				>
			</div>
			<div class="grow">&nbsp;</div>
		</div>
		<div
			id="hero-andre"
			class="md:w-1/2 w-full h-screen overflow-hidden bg-cover bg-left bg-no-repeat"
		/>
	</div>
</section>
