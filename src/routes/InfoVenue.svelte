<script>
	import { t } from '../translations/i18n';
</script>

<section id="venue" class="text-primary-600 body-font relative">
	<div class="container px-5 py-24 mx-auto">
		<h1
			class="sm:text-3xl text-2xl font-medium text-center title-font mb-16 text-primary-900 font-berkshire"
		>
			{$t('venue.title')}
		</h1>
		<div
			class="w-full bg-primary-300 h-[70vh] rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
		>
			<iframe
				width="100%"
				height="100%"
				class="absolute inset-0"
				frameborder="0"
				title="map"
				marginheight="0"
				marginwidth="0"
				scrolling="no"
				style="opacity(0.4);"
				src="//umap.openstreetmap.fr/en/map/baptemeandre_859952?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&allowEdit=false&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=undefined&captionBar=false"
			/>
			<div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
				<div class="lg:w-full px-6 text-xs md:text-base">
					<h2 class="title-font font-semibold text-primary-900 tracking-widest text-xs uppercase">
						{$t('venue.addresses')}
					</h2>
					<p class="mt-2">
						<span class="font-bold">{$t('venue.addresses.townhall')}</span><br />80 Bd Jean Jaurès,
						92110 Clichy
					</p>
					<p class="mt-2">
						<span class="font-bold">{$t('venue.addresses.church')}</span><br />94 Bd Jean Jaurès,
						92110 Clichy
					</p>
					<p class="mt-2">
						<span class="font-bold">{$t('venue.addresses.hotel')}</span><br />15 Rue Victor Méric,
						92110 Clichy
					</p>
				</div>
			</div>
		</div>
	</div>
	<div class="container px-5 pb-24 mx-auto flex flex-wrap">
		<h2 class="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-1/4">
			{@html $t('venue.info.city')}
		</h2>
		<div class="md:w-3/4 md:pl-6">
			{@html $t('venue.info.gettingAround')}
		</div>
	</div>
</section>
