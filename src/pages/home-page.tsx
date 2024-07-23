import { Navbar } from '@/components/Navbar.tsx';
import ScrollToHashElement from '@cascadia-code/scroll-to-hash-element';
import { Hero } from '@/components/Hero.tsx';
import { About } from '@/components/About.tsx';
import { Features } from '@/components/Features.tsx';
import { Cta } from '@/components/Cta.tsx';
import { Testimonials } from '@/components/Testimonials.tsx';
import { Footer } from '@/components/Footer.tsx';
import { ScrollToTop } from '@/components/ScrollToTop.tsx';
import { Sponsors } from '@/components/Sponsors.tsx';

const HomePage = () => {
	return (
		<>
			<ScrollToHashElement />
			<Navbar />
			<Hero />
			<Sponsors />

			<Features />
			{/*	<Testimonials /> */}
			<About />
			{/* <HowItWorks /> */}

			{/*<Services />*/}
			<Cta />

			{/*<Team />*/}
			{/*<Pricing />*/}
			{/* <Newsletter /> */}
			{/*	<FAQ />*/}
			<Footer />
			<ScrollToTop />
		</>
	);
};

export default HomePage;
