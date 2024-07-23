import { useState } from 'react';
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { buttonVariants } from './ui/button';
import { Menu } from 'lucide-react';
import { useI18nContext } from '@/context/i18n.context.tsx';
import { toUpperCaseFirstChar } from '@/lib/string-manipulation.ts';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo_for_black_bg.png';

interface RouteProps {
	href: string;
	label: string;
}

const routeList: RouteProps[] = [
	{
		href: '/#features',
		label: 'features'
	},
	{
		href: '/#testimonials',
		label: 'testimonials'
	},
	{
		href: '/#about',
		label: 'about_us'
	},
	{
		href: '/#team',
		label: 'team'
	}
];

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const { translate } = useI18nContext();
	return (
		<header className='sticky top-0 z-40 w-full border-b-[1px] bg-primary text-white dark:border-b-slate-700 dark:bg-background'>
			<NavigationMenu className='mx-auto'>
				<NavigationMenuList className='container flex h-14 w-screen justify-between px-4'>
					<NavigationMenuItem className='flex font-bold'>
						<a rel='noreferrer noopener' href='/' className='ml-2 flex text-xl font-bold rounded-lg'>
							 <img
                  src={logo}
                  className="w-20 mr-1 object-contain"
                  alt="About services"
              />
						</a>
					</NavigationMenuItem>

					{/* mobile */}
					<span className='flex md:hidden'>
						{/* <ModeToggle />*/}

						<Sheet open={isOpen} onOpenChange={setIsOpen}>
							<SheetTrigger className='px-2'>
								<Menu className='flex h-5 w-5 md:hidden' onClick={() => setIsOpen(true)}>
									<span className='sr-only'>Menu Icon</span>
								</Menu>
							</SheetTrigger>

							<SheetContent side={'left'}>
								<SheetHeader>
									<SheetTitle className='text-xl font-bold'>{translate('appName')}</SheetTitle>
								</SheetHeader>
								<nav className='mt-4 flex flex-col items-center justify-center gap-2'>
									{routeList.map(({ href, label }: RouteProps) => (
										<Link
											rel='noreferrer noopener'
											key={label}
											to={href}
											onClick={() => setIsOpen(false)}
											className={buttonVariants({ variant: 'ghost' })}
										>
											{toUpperCaseFirstChar(translate(`${label}`))}
										</Link>
									))}
									{/*  <a
                    rel="noreferrer noopener"
                    href="https://github.com/leoMirandaa/shadcn-landing-page.git"
                    target="_blank"
                    className={`w-[110px] border ${buttonVariants({
                      variant: "secondary",
                    })}`}
                  >
                    <GitHubLogoIcon className="mr-2 w-5 h-5" />
                    Github
                  </a> */}
								</nav>
							</SheetContent>
						</Sheet>
					</span>

					{/* desktop */}
					<nav className='hidden gap-2 md:flex'>
						{routeList.map((route: RouteProps, i) => (
							<a
								rel='noreferrer noopener'
								href={route.href}
								key={i}
								className={`text-[17px] capitalize ${buttonVariants({
									variant: 'ghost'
								})}`}
							>
								{translate(`${route.label}`)}
							</a>
						))}
					</nav>

					<div className='hidden gap-2 md:flex'>
						{/*  <a
              rel="noreferrer noopener"
              href="https://github.com/leoMirandaa/shadcn-landing-page.git"
              target="_blank"
              className={`border ${buttonVariants({ variant: "secondary" })}`}
            >
              <GitHubLogoIcon className="mr-2 w-5 h-5" />
              Github
            </a> */}

						{/* <ModeToggle />*/}
					</div>
				</NavigationMenuList>
			</NavigationMenu>
		</header>
	);
};
