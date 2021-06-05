import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';

export default function useCachedResources() {
	const [isLoadingComplete, setLoadingComplete] = React.useState(false);

	// Load any resources or data that we need prior to rendering the app
	React.useEffect(() => {
		async function loadResourcesAndDataAsync() {
			try {
				SplashScreen.preventAutoHideAsync();

				// Load fonts
				await Font.loadAsync({
					...Ionicons.font,
					'space-mono': require('../../assets/fonts/SpaceMono-Regular.ttf'),
					'Montserrat-Regular': require('../../assets/fonts/Montserrat-Regular.ttf'),
					'Montserrat-Bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
					'Montserrat-Light': require('../../assets/fonts/Montserrat-Light.ttf'),
					'Montserrat-Medium': require('../../assets/fonts/Montserrat-Medium.ttf'),
					'Montserrat-Thin': require('../../assets/fonts/Montserrat-Thin.ttf'),
					'Montserrat-ExtraLight': require('../../assets/fonts/Montserrat-ExtraLight.ttf'),
					'Montserrat-SemiBold': require('../../assets/fonts/Montserrat-SemiBold.ttf'),

					'Raleway-Regular': require('../../assets/fonts/Raleway-Regular.ttf'),
					'Raleway-Bold': require('../../assets/fonts/Raleway-Bold.ttf'),
					'Raleway-Light': require('../../assets/fonts/Raleway-Light.ttf'),
					'Raleway-Medium': require('../../assets/fonts/Raleway-Medium.ttf'),
					'Raleway-Thin': require('../../assets/fonts/Raleway-Thin.ttf'),
					'Raleway-ExtraLight': require('../../assets/fonts/Raleway-ExtraLight.ttf'),
				});
			} catch (e) {
				// We might want to provide this error information to an error reporting service
				console.warn(e);
			} finally {
				setLoadingComplete(true);
				SplashScreen.hideAsync();
			}
		}

		loadResourcesAndDataAsync();
	}, []);

	return isLoadingComplete;
}
