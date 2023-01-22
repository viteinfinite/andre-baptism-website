<script>
	import { t } from '../translations/i18n';
	export let locale;
	export let locales;
</script>

<section id="hero" class="text-primary-600 body-font h-screen bg-secondary-500/30">
	<div id="hero-rafiki" class="px-0 md:flex md:justify-between h-full">
		<div
			class="absolute md:static w-full md:w-1/2 flex flex-col h-full pl-5 md:pl-9 lg:pl-16 pr-5 md:pr-6 backdrop-sepia backdrop-brightness-75 md:backdrop-filter-none"
		>
			<div class="grow-0 md:grow">
				<header class="text-white md:text-primary-600 body-font">
					<div class="container static md:absolute pt-4 md:pt-8">
						<nav
							class="flex overflow-x-visible flex-nowrap items-center center text-base justify-start gap-x-2 md:gap-x-5"
						>
							<a href="#intro" class=" hover:text-primary-900">{$t('nav.intro')}</a>
							<a href="#venue" class="hover:text-primary-900">{$t('nav.venue')}</a>
							<a href="#programme-25" class="hover:text-primary-900">{$t('nav.programme')}</a>
							<a href="#presents" class="hover:text-primary-900">{$t('nav.presents')}</a>
							<select
								class="md:ml-1 px-2 appearance-none rounded-md bg-transparent border-2 border-solid border-white md:border-primary-600 focus:outline-none focus:ring-0"
								bind:value={$locale}
							>
								{#each locales as l}
									<option value={l}>{$t('nav.language.' + l)}</option>
								{/each}
							</select>
						</nav>
					</div>
				</header>
			</div>
			<div class="grow md:grow-0 pt-4 md:pt-0">
				<span
					class="text-xsecondary-50 md:text-xsecondary-500 tracking-widest font-medium title-font text-3xl block mb-1 text-deep-space-sparkle-500 uppercase"
					>{$t('global.dates')}</span
				>
				<span
					class="font-berkshire text-7xl block text-white md:text-primary-500 drop-shadow-lg md:drop-shadow-none"
					>{$t('global.title')}</span
				>
			</div>
			<div id="hero-bottom" class="max-h-[calc(100vh-100px)] md:h-auto grow">&nbsp;</div>
		</div>
		<div id="hero-andre" class="md:w-1/2 w-full h-screen overflow-hidden" />
	</div>
</section>
