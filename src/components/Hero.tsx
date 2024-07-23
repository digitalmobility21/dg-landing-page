import AppstoreButton from '@/components/Appstore.button.tsx';
import GooglePlayButton from '@/components/GooglePlay.button.tsx';
import NjeeAdd from '@/assets/njee-add.png';
import Logo from '@/assets/logo.png';
import { useI18nContext } from '@/context/i18n.context.tsx';
import { ANDROID_Link, IOS_Link } from '@/lib/constant.ts';

export const Hero = () => {
	const { translate } = useI18nContext();
	const openLink = url => {
		window.open(url, '_blank');
		// console.log(url);
	};
	return (
		<section className='container grid place-items-center gap-10 py-10 lg:grid-cols-2'>
			<div className='space-y-6 text-center lg:text-start'>
				<main className='text-5xl font-bold md:text-6xl'>
					<img src={Logo} alt='About feature' className='w-[200px] lg:w-[300px]' />

				</main>

				<p className='mx-auto text-xl text-muted-foreground md:w-10/12 lg:mx-0'>
					{translate('slogan_1')}
				</p>
				<p className='mx-auto text-xl text-muted-foreground md:w-10/12 lg:mx-0'>
					{translate('slogan_2')}
				</p>
				<p className='mx-auto text-xl text-muted-foreground md:w-10/12 lg:mx-0'>
				{/*	{translate('slogan_3')}*/}
				</p>

				<div className='flex flex-col items-center md:flex-row md:space-x-8'>
					<AppstoreButton onPress={() => openLink(IOS_Link)} />
					<GooglePlayButton onPress={() => openLink(ANDROID_Link)} />
				</div>
			</div>

			{/* Hero cards sections */}
			<div className='z-10'>
				<img className='m-0' src={NjeeAdd} alt='NjeeAdd' width={400} height={504} />
			</div>

			{/* Shadow effect */}
			<div className='shadow'></div>
		</section>
	);
};
