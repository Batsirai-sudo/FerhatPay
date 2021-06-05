import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, Platform, Text, View, TouchableWithoutFeedback, TouchableOpacity, StyleSheet } from 'react-native';
import { Loading, SettingsItem, HeaderDefaultSub } from '@components';
// import navigationStyle from '../../components/navigationStyle';

import { useNavigation, useTheme } from '@react-navigation/native';
// import loc from '../../loc';
// import { BlueStorageContext } from '../../blue_modules/storage-context';
const profileData = ['Profile', 'Email', 'Mobile', 'Country', 'Verification'];
const styles = StyleSheet.create({
	root: {
		flex: 1,
	},
});

const GeneralSettings = (props) => {
	//   const { isAdancedModeEnabled, setIsAdancedModeEnabled, wallets, isHandOffUseEnabled, setIsHandOffUseEnabledAsyncStorage } = useContext(
	//     BlueStorageContext,
	//   );
	const [isLoading, setIsLoading] = useState(true);
	const [isAdancedModeSwitchEnabled, setIsAdancedModeSwitchEnabled] = useState(false);
	const { navigate } = useNavigation();
	const { colors } = useTheme();
	const onAdvancedModeSwitch = async (value) => {
		// await setIsAdancedModeEnabled(value);
		setIsAdancedModeSwitchEnabled(value);
	};

	useEffect(() => {
		(async () => {
			//   setIsAdancedModeSwitchEnabled(await isAdancedModeEnabled());
			setIsLoading(false);
		})();
	});

	const stylesWithThemeHook = {
		root: {
			...styles.root,
			backgroundColor: colors.background,
		},
		scroll: {
			...styles.scroll,
			backgroundColor: colors.background,
		},
		scrollBody: {
			...styles.scrollBody,
			backgroundColor: colors.background,
		},
	};

	return isLoading ? (
		<Loading />
	) : (
		<ScrollView style={stylesWithThemeHook.scroll}>
			{[].length > 1 && (
				<>
					<SettingsItem
						component={TouchableOpacity}
						onPress={() => navigate('DefaultView')}
						title={'loc.settings.default_title'}
						chevron
					/>
				</>
			)}
			{/* {Platform.OS === 'ios' ? ( */}
			<>
				<SettingsItem
					hideChevron
					title={'Updates'}
					Component={TouchableWithoutFeedback}
					switch={{ onValueChange: true, value: true }}
				/>

				<SettingsItem
					Component={TouchableWithoutFeedback}
					title={'Advanced Reminders'}
					switch={{
						onValueChange: onAdvancedModeSwitch,
						value: isAdancedModeSwitchEnabled,
						testID: 'AdvancedMode',
					}}
				/>
				<View style={{ height: 20, opacity: 0 }} />
				<View style={{ height: 20, opacity: 0 }} />
				<View style={{ height: 20, opacity: 0 }} />
				<View style={{ height: 20, opacity: 0 }} />
			</>
			{/* // ) : null} */}
			<HeaderDefaultSub leftText={'Personal Information'} rightComponent={null} />

			{profileData.map((x, i) => (
				<View key={i} style={{}}>
					<SettingsItem key={i} title={x} onPress={() => {}} testID="Devices" chevron />
				</View>
			))}

			{/* <View style={{ padding: 20 }}>
				<Text
					style={{
						color: colors.foregroundColor,
					}}
				>
					{'loc.settings.general_continuity_e'}
				</Text>
			</View> */}
			<View style={{ height: 20, opacity: 0 }} />
		</ScrollView>
	);
};

// GeneralSettings.navigationOptions = navigationStyle({}, opts => ({ ...opts, title:' loc.settings.general' }));

export default GeneralSettings;
