import { createBrowserRouter } from 'react-router-dom';
import HomePage from '@/pages/home-page.tsx';
import TermsConditionsPage from '@/pages/termsConditions-page.tsx';
import PrivacyPage from '@/pages/privacy-page.tsx';

export const appRoutes = createBrowserRouter([
	{
		path: "/",
		element: <HomePage/>,
	},
	{
		path:'terms_and_conditions',
		element:<TermsConditionsPage/>
	},
	{
		path:'privacy',
		element:<PrivacyPage/>
	}
]);
