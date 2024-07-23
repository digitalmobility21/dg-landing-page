import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { APP_LANG } from '@/i18n';

export interface I18nContextInterface {
	currentLanguage: string | null;
	changeLanguageHandler: (lang: string) => void;
	translate: (key: any, options?: any) => string;
}

const I18nContext = createContext<I18nContextInterface | undefined>({
	// currentLanguage: languageCode || 'fr',
	currentLanguage: 'fr',
	changeLanguageHandler: () => '',
	translate: () => ''
});

const useI18nContext = (): I18nContextInterface => {
	const ctx = useContext(I18nContext);
	if (!ctx) {
		throw new Error('useI18nContext must be used within an I18nContextProvider');
	}
	return ctx;
};

const I18nContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
	const { t, i18n } = useTranslation();
	const [currentLanguage, setCurrentLanguage] = useState();

	const changeLanguageHandler = useCallback(
		async (lang: string) => {
			// console.log('changeLanguageHandler: ', lang);
			i18n.changeLanguage(lang);
			localStorage.setItem(APP_LANG, lang);
		},

		[i18n]
	);

	const value = useMemo(
		() => ({
			currentLanguage: i18n.language || 'fr',
			changeLanguageHandler,
			translate: t
		}),
		[currentLanguage, changeLanguageHandler, t]
	);

	return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export { I18nContextProvider, useI18nContext };
