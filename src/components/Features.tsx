import { Badge } from './ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import image from '../assets/njee-list.png';
import image3 from '../assets/njee-tracking.png';
import image4 from '../assets/njee-add.png';
import { useI18nContext } from '@/context/i18n.context.tsx';

interface FeatureProps {
	title: string;
	description: string;
	image: string;
}

const features: FeatureProps[] = [
	{
		title: 'Njee delivery',
		description: 'simplicity_desc',
		image: image4
	},
	{
		title: 'Njee Driver',
		description: 'reliability_desc',
		image: image3
	},
	{
		title: 'Njee Tracking',
		description: 'competitive_prices_desc',
		image: image
	}
	/*{
		title: 'safety',
		description: 'safety_desc',
		image: image
	}*/
];

const featureList: string[] = [
	'notifications',
	'real_time_tracking',
	'express_delivery',
	'reactive_customer_service'
];

export const Features = () => {
	const { translate } = useI18nContext();
	return (
		<section id='features' className='container space-y-8 py-24 sm:py-32'>
			<h2 className='text-3xl font-bold md:text-center lg:text-4xl'>
				{translate('many')}{' '}
				<span className='bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent'>
					{translate('greatFeatures')}
				</span>
			</h2>

			<div className='flex flex-wrap gap-4 md:justify-center'>
				{featureList.map((feature: string) => (
					<div key={feature}>
						<Badge variant='secondary' className='text-sm text-white'>
							{translate(`${feature}`)}
						</Badge>
					</div>
				))}
			</div>

			<div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
				{features.map(({ title, description, image }: FeatureProps) => (
					<Card key={title}>
						<CardHeader>
							<CardTitle>{translate(`${title}`)}</CardTitle>
						</CardHeader>

						<CardContent>{translate(`${description}`)}</CardContent>

						<CardFooter>
							<img src={image} alt='About feature' className='mx-auto w-[100px] lg:w-[200px]' />
						</CardFooter>
					</Card>
				))}
			</div>
		</section>
	);
};
