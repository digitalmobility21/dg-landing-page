import './App.css';
import { I18nContextProvider } from '@/context/i18n.context.tsx';
import { appRoutes } from '@/routes.tsx';
import { RouterProvider } from 'react-router-dom';

function App() {
	return (
		<>
			<I18nContextProvider>
				<RouterProvider router={appRoutes} />
			</I18nContextProvider>
		</>
	);
}

export default App;
