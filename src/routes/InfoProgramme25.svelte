<script>
	import { t } from '../translations/i18n';
	import IconParty from '../icons/party.svelte';
	import IconTownHall from '../icons/townhall.svelte';
</script>

<section id="programme-25" class="text-primary-600 body-font">
	<h2 class="text-center text-xs text-secondary-500 tracking-widest font-medium title-font mb-1">
		{$t('programme25.beforeTitle')}
	</h2>
	<h1
		class="sm:text-3xl text-2xl font-medium text-center title-font mb-4 text-primary-900 font-berkshire"
	>
		{$t('programme25.title')}
	</h1>
	<div class="container px-5 py-24 pt-12 mx-auto flex flex-wrap">
		<div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
			<div class="h-full w-6 absolute inset-0 flex items-center justify-center">
				<div class="h-full w-1 bg-third-200 pointer-events-none" />
			</div>
			<div
				class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-secondary-500 text-white relative z-10 title-font font-medium text-sm"
			>
				1
			</div>
			<div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
				<div
					class="flex-shrink-0 w-24 h-24 bg-secondary-100 text-xxsecondary-300 rounded-full inline-flex items-center justify-center"
				>
					<span class="scale-[12%]"><IconTownHall /></span>
				</div>
				<div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
					<h2 class="font-medium title-font text-primary-900 mb-1 text-xl">
						{$t('programme25.event1.title')}
					</h2>
					<p class="leading-relaxed">
						{@html $t('programme25.event1.description')}
					</p>
				</div>
			</div>
		</div>
		<div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
			<div class="h-full w-6 absolute inset-0 flex items-center justify-center">
				<div class="h-full w-1 bg-third-200 pointer-events-none" />
			</div>
			<div
				class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-secondary-500 text-white relative z-10 title-font font-medium text-sm"
			>
				2
			</div>
			<div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
				<div
					class="flex-shrink-0 w-24 h-24 bg-secondary-100 text-xxsecondary-300 rounded-full inline-flex items-center justify-center"
				>
					<span class="scale-[60%]"><IconParty /></span>
				</div>
				<div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
					<h2 class="font-medium title-font text-primary-900 mb-1 text-xl">
						{$t('programme25.event2.title')}
					</h2>
					<p class="leading-relaxed">
						{@html $t('programme25.event2.description')}
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
