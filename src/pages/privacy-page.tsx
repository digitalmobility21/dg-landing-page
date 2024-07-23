import { useI18nContext } from '@/context/i18n.context.tsx';
import { Navbar } from '@/components/Navbar.tsx';
import { Footer } from '@/components/Footer.tsx';
import { ScrollToTop } from '@/components/ScrollToTop.tsx';
import FrPrivacy from '@/components/privacy/fr_privacy.tsx';
import EnPrivacy from '@/components/privacy/en_privacy.tsx';

const PrivacyPage =()=> {
	const { currentLanguage } = useI18nContext();

	return <>
		<Navbar />
		<div>
			{currentLanguage==='fr' && <FrPrivacy />}
			{currentLanguage==='en' && <EnPrivacy/>}
		</div>
		<Footer />
		<ScrollToTop />
	</>;

}

export default PrivacyPage;