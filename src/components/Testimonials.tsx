import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useI18nContext } from '@/context/i18n.context.tsx';

interface TestimonialProps {
	image: string;
	name: string;
	userName: string;
	comment: string;
}

const testimonials: TestimonialProps[] = [
	{
		image: 'https://github.com/shadcn.png',
		name: 'Sophie L',
		userName: '@sophie',
		comment:
			'Njee Delivery a vraiment changé ma vie ! Avant, je passais des heures à chercher mes colis dans différents points de retrait. Maintenant, tout arrive directement à ma porte. Le suivi en temps réel est super pratique et les livreurs sont toujours très professionnels. Je recommande vivement !"'
	},
	{
		image: 'https://github.com/shadcn.png',
		name: 'Karim M',
		userName: '@karim',
		comment:
			"Je suis souvent en déplacement pour le travail et recevoir mes colis était un vrai casse-tête. Avec Njee Delivery, je peux planifier la livraison quand je suis chez moi. Le service client est toujours disponible et très réactif. C'est un gain de temps énorme !"
	},

	{
		image: 'https://github.com/shadcn.png',
		name: 'Émilie R',
		userName: '@emilieR',
		comment:
			"J'adore l'application Njee Delivery ! Elle est très facile à utiliser et intuitive. J'apprécie particulièrement les options de livraison écologique, c'est rassurant de savoir qu'on peut recevoir ses colis tout en respectant l'environnement. Merci Njee Delivery !"
	},
	{
		image: 'https://github.com/shadcn.png',
		name: 'Thomas D.',
		userName: '@thomas',
		comment:
			"Depuis que j'utilise Njee Delivery, je n'ai jamais eu de problème avec la livraison de mes colis. C'est rapide, fiable et les tarifs sont très compétitifs. Le fait de pouvoir suivre mon colis en temps réel me donne une tranquillité d'esprit que je n'avais pas avant."
	},
	{
		image: 'https://github.com/shadcn.png',
		name: 'Laura G',
		userName: '@Laura',
		comment:
			"Le service Njee Delivery est tout simplement génial. Je peux choisir le créneau horaire qui me convient le mieux pour la livraison et le livreur arrive toujours à l'heure. En plus, la première livraison gratuite est une super initiative. Je suis une cliente fidèle désormais !"
	},
	{
		image: 'https://github.com/shadcn.png',
		name: 'Vincent P.',
		userName: '@Vincent',
		comment:
			"Njee Delivery m'a sauvé plus d'une fois ! Avec mes horaires de travail irréguliers, il était toujours compliqué de récupérer mes colis. Grâce à Njee Delivery, je peux planifier mes livraisons selon mon emploi du temps. Le service est impeccable, les livreurs sont courtois et toujours à l'heure. Je ne pourrais plus m'en passer !"
	}
];

export const Testimonials = () => {
	const { translate } = useI18nContext();
	return (
		<section id='testimonials' className='container py-24 sm:py-32'>
			<h2 className='text-3xl font-bold md:text-4xl'>
				{translate('discover_why')}
				<span className='bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent'>
					{' '}
					{translate('people_love')}{' '}
				</span>
				{translate('appName')} {translate('appSuffix')}
			</h2>

			{/*<p className="text-xl text-muted-foreground pt-4 pb-8">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non unde error
				facere hic reiciendis illo
			</p>*/}

			<div className='mx-auto mt-4 grid columns-2 space-y-4 sm:block md:grid-cols-2 lg:columns-3 lg:grid-cols-4 lg:gap-6 lg:space-y-6'>
				{testimonials.slice(0, 3).map(({ image, name, userName, comment }: TestimonialProps) => (
					<Card key={userName} className='max-w-md overflow-hidden md:break-inside-avoid'>
						<CardHeader className='flex flex-row items-center gap-4 pb-2'>
							<Avatar>
								<AvatarImage alt='' src={image} />
								<AvatarFallback>OM</AvatarFallback>
							</Avatar>

							<div className='flex flex-col'>
								<CardTitle className='text-lg'>{name}</CardTitle>
								<CardDescription>{userName}</CardDescription>
							</div>
						</CardHeader>

						<CardContent>{comment}</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
};
