import { Radar } from 'lucide-react';
import { useI18nContext } from '@/context/i18n.context.tsx';
import sponsor1 from '@/assets/sponsor_advisor.jpg';
import sponsor2 from '@/assets/sponsor_fagibu.jpg';
import sponsor3 from '@/assets/sponsor_choky.jpg';
import sponsor4 from '@/assets/sponsor_iziway.jpg';
import sponsor5 from '@/assets/sponsor_legend.jpg';
import sponsor6 from '@/assets/sponsor_universal.jpg';
import sponsor7 from '@/assets/sponsor_santenatur.jpg';

interface SponsorProps {
	icon: JSX.Element;
	name: string;
	imageLink: string;
}

const sponsors: SponsorProps[] = [
	{
		icon: <Radar size={34} />,
		name: 'Sponsor 1',
		imageLink: sponsor1
	},
	{
		icon: <Radar size={34} />,
		name: 'Sponsor 2',
		imageLink: sponsor2
	},
	{
		icon: <Radar size={34} />,
		name: 'Sponsor 3',
		imageLink: sponsor3
	},
	{
		icon: <Radar size={34} />,
		name: 'Sponsor 4',
		imageLink: sponsor4
	},
	{
		icon: <Radar size={34} />,
		name: 'Sponsor 5',
		imageLink: sponsor5
	},
	{
		icon: <Radar size={34} />,
		name: 'Sponsor 6',
		imageLink: sponsor6
	},
	{
		icon: <Radar size={34} />,
		name: 'Sponsor 7',
		imageLink: sponsor7
	}
];

export const Sponsors = () => {
	const { translate } = useI18nContext();
	return (
		<section id='sponsors' className='container pt-24 sm:py-32'>
			<h2 className='text-md mb-8 text-center font-bold capitalize text-primary lg:text-xl'>
				{translate('sponsors')}
			</h2>

			<div className='flex flex-wrap items-center justify-center gap-4 md:gap-8'>
				{sponsors.map(({ name, imageLink }: SponsorProps) => (
					<div key={name} className='flex items-center gap-1 text-muted-foreground/60'>
						<span>
							<img src={imageLink} className='mr-1 w-24 object-contain' alt='About services' />
						</span>
					</div>
				))}
			</div>
		</section>
	);
};
