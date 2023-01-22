<script>
	import { t } from '../translations/i18n';
</script>

<section id="presents" class="text-primary-600 body-font">
	<div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
		<img
			class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-xl drop-shadow-xl"
			alt="Andre with Mickey Mouse"
			src="/images/andre-mickey.jpg"
		/>
		<div class="text-center lg:w-2/3 w-full">
			<h1 class="title-font sm:text-4xl text-3xl mb-8 font-medium text-primary-900">
				{$t('presents.title')}
			</h1>
			{@html $t('presents.description', { className: 'mb-2 leading-relaxed' })}
			<div class="flex justify-center mt-8">
				<button
					class="inline-flex text-white bg-secondary-500 border-0 py-2 px-6 focus:outline-none hover:bg-secondary-600 rounded text-lg"
					>{$t('presents.ctas.moreInfo')}</button
				>
				<button
					class="ml-4 inline-flex text-primary-700 bg-primary-100 border-0 py-2 px-6 focus:outline-none hover:bg-primary-200 rounded text-lg"
					>{$t('presents.ctas.gift')}</button
				>
			</div>
		</div>
	</div>
</section>
