<script>
	import { t } from '../translations/i18n';
</script>

<section class="text-primary-600 body-font">
	<div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
		<div
			class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
		>
			<h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-primary-900">
				{@html $t('stay.title')}
			</h1>
			<p class="mb-8 leading-relaxed">
				{@html $t('stay.description')}
			</p>
			<div class="flex justify-center">
				<button
					onclick="window.open('https://www.limprimeriehotel.com/fr/')"
					class="ml-4 inline-flex text-primary-700 bg-primary-100 border-0 py-2 px-6 focus:outline-none hover:bg-primary-200 rounded text-lg"
					>{@html $t('stay.cta')}</button
				>
			</div>
		</div>
		<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
			<img
				class="object-cover object-center rounded-xl drop-shadow-xl"
				alt="hero"
				src="images/hotel-imprimerie.jpg"
			/>
		</div>
	</div>
</section>
