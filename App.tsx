import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './app/hooks/useCachedResources';
import useColorScheme from './app/hooks/useColorScheme';
import Navigation from './app/navigation';
import FlashMessage from 'react-native-flash-message';
import { store, persistor } from './app/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {
	const isLoadingComplete = useCachedResources();
	const colorScheme = useColorScheme();

	if (!isLoadingComplete) {
		return null;
	} else {
		return (
			<SafeAreaProvider>
				<Provider store={store}>
					<PersistGate loading={null} persistor={persistor}>
						<Navigation colorScheme={colorScheme} />
					</PersistGate>
				</Provider>
				<StatusBar />
				<FlashMessage position="top" />
			</SafeAreaProvider>
		);
	}
}
