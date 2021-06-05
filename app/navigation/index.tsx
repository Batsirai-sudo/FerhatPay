import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import {
	ColorSchemeName,
	TouchableOpacity,
	useWindowDimensions,
	Platform,
	Dimensions,
	I18nManager,
	View,
} from 'react-native';
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
import NotificationSettings from '@screens/NotificationSettings';
import Terms from '@screens/Terms';
import TransactionsStatus from '@screens/TransactionsStatus';
import TransactiobDetails from '@screens/TransactiobDetails';
import Scan from '@screens/Scan';
import ReceiveQR from '@screens/ReceiveQR';
import ReleaseNotes from '@screens/ReleaseNotes';
import About from '@screens/About';
import SelectedCard from '@screens/SelectedCard';
import SelectLanguage from '@screens/SelectLanguage';
import Security from '@screens/Security';
import SettingsPrivacy from '@screens/SettingsPrivacy';
import LandingScreen from '@screens/LandingScreen';
import Language from '@screens/Language';
import Unlock from '@screens/Unlock';
import Confirm from '@screens/Confirm';
import Success from '@screens/Success';
import SignUp from '@screens/SignUp';
import SearchUser from '@screens/SearchUser';
import Home from '@screens/Home';
import GeneralSettings from '@screens/GeneralSettings';
import Settings from '@screens/Settings';
import SuccessRegistration from '@screens/SuccessRegistration';
import Login from '@screens/Login';
import OTPMobileNumber from '@screens/OTPMobileNumber';
import VerifyOTP from '@screens/VerifyOTP';
import EnterAmount from '@screens/EnterAmount';
import OpenCamera from '@screens/OpenCamera';
import RegisterPersonalInfor from '@screens/RegisterPersonalInfor';
import RegisterLocation from '@screens/RegisterLocation';
import RegisterDocuments from '@screens/RegisterDocuments';
import { BaseSetting } from '@config';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { useSelector } from 'react-redux';
import { AuthProvider } from '@context';
import Movies from '../screens/src/Movies';
import { BlueDefaultTheme, BlueDarkTheme } from '@utils';
import { Text } from '@components';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
	// <NavigationContainer linking={LinkingConfiguration} theme={colorScheme === 'dark' ? DarkTheme : {DefaultTheme}}>
	const storeLanguage = useSelector((state) => state.application.language);

	useEffect(() => {
		init();
		// SplashScreen.hide();
		// StatusBar.setBackgroundColor(colors.primary, true);
		// StatusBar.setBarStyle(isDarkMode ? 'light-content' : 'dark-content', true);
	}, []);

	const init = async () => {
		await i18n.use(initReactI18next).init({
			resources: BaseSetting.resourcesLanguage,
			lng: storeLanguage ?? BaseSetting.defaultLanguage,
			fallbackLng: BaseSetting.defaultLanguage,
			interpolation: {
				escapeValue: false,
			},
		});
	};

	return (
		<NavigationContainer
			//  ref={navigationRef}
			theme={BlueDarkTheme}
		>
			{/* <NavigationContainer linking={LinkingConfiguration} theme={{ ...DefaultTheme, ...Colors }}> */}
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
const UnlockScreenStack = createStackNavigator();
const UnlockScreenRoot = () => (
	<UnlockScreenStack.Navigator screenOptions={{ headerShown: false }}>
		<UnlockScreenStack.Screen
			name={ROUTES.Unlock}
			component={Unlock}
			initialParams={{ unlockOnComponentMount: true }}
		/>
	</UnlockScreenStack.Navigator>
);
const Jump = createStackNavigator();

const JumpScreenRoot = () => (
	<Jump.Navigator screenOptions={{ headerShown: false }}>
		<Jump.Screen
			name={ROUTES.RegisterPersonalInfor}
			component={RegisterPersonalInfor}
			initialParams={{ unlockOnComponentMount: true }}
		/>
	</Jump.Navigator>
);

const MainStack = createStackNavigator();

function Main() {
	return (
		<AuthProvider>
			<MainStack.Navigator
				mode="modal"
				screenOptions={{
					...TransitionPresets.ModalSlideFromBottomIOS,
					headerStyle: {
						borderBottomWidth: 0,
						elevation: 0,
						shadowOpacity: 0,
						shadowOffset: { height: 0, width: 0 },
						backgroundColor: 'rgba(0,0,0,0)',
					},
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
				<MainStack.Screen
					name={ROUTES.UnlockScreenRoot}
					component={UnlockScreenRoot}
					options={{ headerShown: false }}
				/>
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
				<MainStack.Screen name={'movies'} component={Movies} options={{ headerShown: false }} />
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
				<MainStack.Screen name={'Home'} component={Home} options={{ headerShown: true }} />
				<MainStack.Screen name={'Language'} component={Language} options={{ headerShown: true }} />
				<MainStack.Screen name={'Security'} component={Security} options={{ headerShown: true }} />
				<MainStack.Screen name={'Settings'} component={Settings} options={{ headerShown: true }} />
				<MainStack.Screen name={'About'} component={About} options={{ headerShown: true }} />
				<MainStack.Screen name={'SearchUser'} component={SearchUser} options={{ headerShown: false }} />
				<MainStack.Screen name={'EnterAmount'} component={EnterAmount} options={{ headerShown: false }} />
				<MainStack.Screen name={'Confirm'} component={Confirm} options={{ headerShown: false }} />
				<MainStack.Screen name={'Success'} component={Success} options={{ headerShown: false }} />
				<MainStack.Screen name={'Scan'} component={Scan} options={{ headerShown: false }} />
				<MainStack.Screen name={'Terms'} component={Terms} options={{ title: '' }} />
				<MainStack.Screen name={'ReleaseNotes'} component={ReleaseNotes} options={{ title: '' }} />
				<MainStack.Screen name={'ReceiveQR'} component={ReceiveQR} options={{ title: '' }} />
				<MainStack.Screen
					name={'NotificationSettings'}
					component={NotificationSettings}
					options={{ headerShown: true, title: '' }}
				/>
				<MainStack.Screen
					name={'TransactiobDetails'}
					component={TransactiobDetails}
					options={{ headerShown: true, title: '' }}
				/>
				<MainStack.Screen
					name={'TransactionsStatus'}
					component={TransactionsStatus}
					options={{ headerShown: true, title: '' }}
				/>
				<MainStack.Screen
					name={'SelectedCard'}
					component={SelectedCard}
					options={{
						headerShown: false,
					}}
				/>
				<MainStack.Screen
					name={'SettingsPrivacy'}
					component={SettingsPrivacy}
					options={{ headerShown: true, title: '' }}
				/>
				<MainStack.Screen
					name={'GeneralSettings'}
					component={GeneralSettings}
					options={{
						headerShown: true,
						headerTitle: () => (
							<Text semibold whiteColor style={{ fontSize: 18 }}>
								General
							</Text>
						),
					}}
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

// const Drawer = createDrawerNavigator();
// function DrawerRoot() {
// 	const dimensions = useWindowDimensions();
// 	const isLargeScreen =
// 		Platform.OS === 'android'
// 			? DeviceInformation.DeviceType === 'TABLET'
// 			: dimensions.width >= Dimensions.get('screen').width / 2 && DeviceInformation.DeviceType === 'TABLET';
// 	const drawerStyle = { width: '0%' };

// 	return (
// 		<Drawer.Navigator
// 			drawerStyle={false ? null : drawerStyle}
// 			drawerType={false ? 'permanent' : null}
// 			drawerContent={(props) => (false ? <DrawerList {...props} /> : null)}
// 			drawerPosition={I18nManager.isRTL ? 'right' : 'left'}
// 		>
// 			<Drawer.Screen name="Home" component={Home} options={{ headerShown: false, gestureEnabled: false }} />
// 			<Drawer.Screen
// 				name="Settings"
// 				component={Settings}
// 				options={{ headerShown: false, gestureEnabled: false }}
// 			/>
// 		</Drawer.Navigator>
// 	);
// }
