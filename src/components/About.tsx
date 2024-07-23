import { Statistics } from './Statistics';
import pilot from '../assets/pilot.png';
import { useI18nContext } from '@/context/i18n.context.tsx';

export const About = () => {
	const { translate } = useI18nContext();
	return (
		<section id='about' className='container py-24 sm:py-32'>
			<div className='rounded-lg border bg-muted/50 py-12'>
				<div className='flex flex-col-reverse gap-8 px-6 md:flex-row md:gap-12'>
					<img src={pilot} alt='' className='w-[300px] rounded-lg object-contain' />
					<div className='bg-green-0 flex flex-col justify-between'>
						<div className='pb-6'>
							<h2 className='text-3xl font-bold md:text-4xl'>
								<span className='bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent'>
									{translate('our_mission')}
								</span>
							</h2>
							<p className='mt-4 text-xl text-muted-foreground'>{translate('team_mission')}</p>
							<p className='mt-4 text-xl text-muted-foreground'>Contact: it@digitalmobility.cm</p>
						</div>

						<Statistics />
					</div>
				</div>
			</div>
		</section>
	);
};
