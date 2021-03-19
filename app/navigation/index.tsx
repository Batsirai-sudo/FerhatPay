import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { ColorSchemeName } from 'react-native';
import Colors from '@constants/Colors';
import {
	CardStyleInterpolators,
	TransitionSpecs,
	HeaderStyleInterpolators,
	TransitionPresets,
} from '@react-navigation/stack';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import { ROUTES } from '@config';
import Loading from '@screens/Loading';
import SelectLanguage from '@screens/SelectLanguage';
import LandingScreen from '@screens/LandingScreen';
import SignUp from '@screens/SignUp';
import SuccessRegistration from '@screens/SuccessRegistration';
import Login from '@screens/Login';
import OTPMobileNumber from '@screens/OTPMobileNumber';
import VerifyOTP from '@screens/VerifyOTP';
import OpenCamera from '@screens/OpenCamera';
import RegisterPersonalInfor from '@screens/RegisterPersonalInfor';
import RegisterLocation from '@screens/RegisterLocation';
import RegisterDocuments from '@screens/RegisterDocuments';
import { BaseSetting } from '@config';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { useSelector } from 'react-redux';
import { AuthProvider } from '@context';
// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
	// <NavigationContainer linking={LinkingConfiguration} theme={colorScheme === 'dark' ? DarkTheme : {DefaultTheme}}>
	const storeLanguage = useSelector((state) => state.application.language);

	useEffect(() => {
		i18n.use(initReactI18next).init({
			resources: BaseSetting.resourcesLanguage,
			lng: storeLanguage ?? BaseSetting.defaultLanguage,
			fallbackLng: BaseSetting.defaultLanguage,
		});
		// SplashScreen.hide();
		// StatusBar.setBackgroundColor(colors.primary, true);
		// StatusBar.setBarStyle(isDarkMode ? 'light-content' : 'dark-content', true);
	}, []);

	return (
		<NavigationContainer linking={LinkingConfiguration} theme={{ ...DefaultTheme, ...Colors }}>
			<RootNavigator />
		</NavigationContainer>
	);
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Main" component={Main} />
			<Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
		</Stack.Navigator>
	);
}

const MainStack = createStackNavigator();

function Main() {
	return (
		<AuthProvider>
			<MainStack.Navigator
				mode="modal"
				screenOptions={{
					...TransitionPresets.ModalSlideFromBottomIOS,
					//   cardStyleInterpolator:CardStyleInterpolators.forRevealFromBottomAndroid,
					//   transitionSpec:{
					//   open:TransitionSpecs.TransitionIOSSpec,
					//   close:TransitionSpecs.TransitionIOSSpec
					// },
					// headerStyleInterpolator:HeaderStyleInterpolators.forUIKit,
				}}
			>
				<MainStack.Screen name={ROUTES.Loading} component={Loading} options={{ headerShown: false }} />
				<MainStack.Screen
					name={ROUTES.SelectLanguage}
					component={SelectLanguage}
					options={{ headerShown: false }}
				/>
				<MainStack.Screen
					name={ROUTES.LandingScreen}
					component={LandingScreen}
					options={{ headerShown: false }}
				/>
				<MainStack.Screen name={ROUTES.SignUp} component={SignUp} options={{ headerShown: false }} />
				<MainStack.Screen name={ROUTES.VerifyOTP} component={VerifyOTP} options={{ headerShown: false }} />
				<MainStack.Screen
					name={ROUTES.SuccessRegistration}
					component={SuccessRegistration}
					options={{ headerShown: false }}
				/>
				<MainStack.Screen name={ROUTES.Login} component={Login} options={{ headerShown: false }} />
				<MainStack.Screen name={ROUTES.OpenCamera} component={OpenCamera} options={{ headerShown: false }} />
				<MainStack.Screen
					name={ROUTES.RegisterPersonalInfor}
					component={RegisterPersonalInfor}
					options={{ headerShown: false }}
				/>
				<MainStack.Screen
					name={ROUTES.RegisterLocation}
					component={RegisterLocation}
					options={{ headerShown: false }}
				/>
				<MainStack.Screen
					name={ROUTES.RegisterDocuments}
					component={RegisterDocuments}
					options={{ headerShown: false }}
				/>
				<MainStack.Screen
					name={ROUTES.OTPMobileNumber}
					component={OTPMobileNumber}
					options={{ headerShown: false }}
				/>
			</MainStack.Navigator>
		</AuthProvider>
	);
}
