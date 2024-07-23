import AppstoreButton from '@/components/Appstore.button.tsx';
import GooglePlayButton from '@/components/GooglePlay.button.tsx';
import { useI18nContext } from '@/context/i18n.context.tsx';
import { ANDROID_Link, IOS_Link } from '@/lib/constant.ts';

export const Cta = () => {
	const { translate } = useI18nContext();

	const openLink = url => {
		window.open(url, '_blank');
		// console.log(url);
	};

	return (
		<section id='cta' className='my-24 bg-muted/50 py-16 sm:my-32'>
			<div className='container place-items-center lg:grid lg:grid-cols-2'>
				<div className='lg:col-start-1'>
					<h2 className='text-3xl font-bold md:text-4xl'>
						<span className='bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent'>
							{' '}
							{translate('appName')}
						</span>
					</h2>
					<p className='mb-8 mt-4 text-xl text-muted-foreground lg:mb-0'>{translate('slogan_2')}</p>
				</div>

				<div className='space-y-4 lg:col-start-2'>
					<AppstoreButton onPress={() => openLink(IOS_Link)} />
					<GooglePlayButton onPress={() => openLink(ANDROID_Link)} />
				</div>
			</div>
		</section>
	);
};
