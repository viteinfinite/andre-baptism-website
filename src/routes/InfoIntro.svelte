<script>
	import { t } from '../translations/i18n';
</script>

<section id="intro" class="text-primary-600 body-font">
	<div class="container px-5 py-24 mx-auto">
		<div class="flex flex-col text-center w-full mb-20">
			<h2 class="uppercase text-xs text-secondary-500 tracking-widest font-medium title-font mb-1">
				{@html $t('intro.beforeTitle')}
			</h2>
			<h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-primary-900 font-berkshire">
				{@html $t('intro.title')}
			</h1>
			{@html $t('intro.paragraphs', {
				className: 'lg:w-2/3 mx-auto leading-relaxed text-base mb-2'
			})}
		</div>
	</div>
</section>
