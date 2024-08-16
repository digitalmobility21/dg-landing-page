import Logo from '@/assets/icon.png';
import { useI18nContext } from '@/context/i18n.context.tsx';
import { Link } from 'react-router-dom';

export const Footer = () => {
	const { translate } = useI18nContext();
	const legalLinks = [
		{ title: 'privacy', href: '/privacy' },
		{
			title: 'terms_and_conditions',
			href: '/terms_and_conditions'
		},
		{ title: 'contact_us', href: '/#team' }
	];

	const aboutLinks = [
		{ title: 'features', href: '/#features' },
		{ title: 'testimonials', href: '/#testimonials' },
		{
			title: 'team',
			href: '/#team'
		}
	];
	const communityLinks = [
		{ title: 'facebook', href: '/' },
		{ title: 'instagram', href: '/' },
		{
			title: 'tiktok',
			href: '/'
		}
	];

	return (
		<footer id='footer'>
			<hr className='mx-auto w-11/12' />

			<section className='container grid grid-cols-2 gap-x-12 gap-y-8 py-20 md:grid-cols-4 xl:grid-cols-6'>
				<div className='col-span-full xl:col-span-2'>
					<a rel='noreferrer noopener' href='/' className='flex text-xl font-bold'>
						<img src={Logo} className='mr-1 w-[124px] object-contain' alt='About services' />
					</a>
				</div>

				<div className='flex flex-col gap-2'>
					<h3 className='text-lg font-bold'>Follow US</h3>
					{communityLinks.map(item => (
						<div key={item.title}>
							<a
								rel='noreferrer noopener'
								href={item.href}
								className='opacity-60 hover:opacity-100'
							>
								{translate(`${item.title}`)}
							</a>
						</div>
					))}
				</div>

				<div className='flex flex-col gap-2'>
					<h3 className='text-lg font-bold'>Legal</h3>
					{legalLinks.map(item => (
						<div key={item.title}>
							<Link
								rel='noreferrer noopener'
								to={`${item.href}`}
								className='capitalize opacity-60 hover:opacity-100'
							>
								{translate(`${item.title}`)}
							</Link>
						</div>
					))}
				</div>

				<div className='flex flex-col gap-2'>
					<h3 className='text-lg font-bold'>About</h3>
					{aboutLinks.map(item => (
						<div key={item.title}>
							<Link
								rel='noreferrer noopener'
								to={item.href}
								className='capitalize opacity-60 hover:opacity-100'
							>
								{translate(`${item.title}`)}
							</Link>
						</div>
					))}
				</div>
			</section>

			<section className='container pb-14 text-center'>
				<h3>&copy; 2024 Njee Delivery. All rights reserved.</h3>
			</section>
		</footer>
	);
};
