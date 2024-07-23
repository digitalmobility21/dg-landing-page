import { Navbar } from '@/components/Navbar.tsx';
import { Footer } from '@/components/Footer.tsx';
import { ScrollToTop } from '@/components/ScrollToTop.tsx';
import FrTermsConditionsPage from '@/components/TermsConditionsPage/fr_TermsConditions.tsx';
import EnTermsConditionsPage from '@/components/TermsConditionsPage/en_TermsConditionsPage.tsx';
import { useI18nContext } from '@/context/i18n.context.tsx';

const TermsConditionsPage = () => {
	const { currentLanguage } = useI18nContext();

	return <>
		<Navbar />
		<div>
			{currentLanguage==='fr' && <FrTermsConditionsPage />}
			{currentLanguage==='en' && <EnTermsConditionsPage/>}
		</div>
		<Footer />
		<ScrollToTop />
	</>;
};

export default TermsConditionsPage;

