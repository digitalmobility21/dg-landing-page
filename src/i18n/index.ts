import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// Import all locales
import en from './translations/en-EN.json';
import fr from './translations/fr-FR.json';

export const fallbackLang = 'fr';
export const APP_LANG = 'NJEE_APP_LANG';

const getSavedLanguage = async () => {
	try {
		const savedLanguage = localStorage.getItem(APP_LANG);
		return savedLanguage || fallbackLang;
	} catch (error) {
		console.error('Error fetching saved language:', error);
		return 'fr';
	}
};

const resources = {
	en: {
		translation: en
	},
	fr: {
		translation: fr
	}
};

const initI18next = async () => {
	const savedLanguage = await getSavedLanguage();
	// console.log('savedLanguage--: ', savedLanguage);

	i18n
		.use(initReactI18next) // passes i18n down to react-i18next
		.init({
			compatibilityJSON: 'v3',
			resources,
			lng: savedLanguage || fallbackLang,
			fallbackLng: fallbackLang,
			interpolation: {
				escapeValue: false // react already safes from xss
			}
		});
};

initI18next();

export default i18n;
