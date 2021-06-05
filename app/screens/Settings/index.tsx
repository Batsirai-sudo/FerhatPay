import React, { useContext } from 'react';
import { ScrollView, StyleSheet, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SettingsItem, HeaderDefaultSub, TouchableOpacity } from '@components';

// import navigationStyle from '../../components/navigationStyle';
// import { BlueListItem, BlueHeaderDefaultSub } from '../../BlueComponents';
// import loc from '../../loc';
// import { BlueStorageContext } from '../../blue_modules/storage-context';
// import Notifications from '../../blue_modules/notifications';

const styles = StyleSheet.create({
	root: {
		flex: 1,
	},
});

const Settings = () => {
	const { navigate } = useNavigation();
	// By simply having it here, it'll re-render the UI if language is changed
	// eslint-disable-next-line no-unused-vars
	//   const { language } = useContext(BlueStorageContext);

	return (
		<ScrollView style={styles.root}>
			<StatusBar barStyle="default" />
			<HeaderDefaultSub leftText={'Settings'} />
			<SettingsItem
				title={'General'}
				onPress={() => navigate('GeneralSettings')}
				testID="GeneralSettings"
				chevron
			/>
			{/* <SettingsItem
				title={'Language'}
				onPress={() => navigate('Currency')}
				testID="Currency"
				chevron
			/> */}
			<SettingsItem title={'Language'} onPress={() => navigate('Language')} testID="Language" chevron />
			<SettingsItem title={'Security'} onPress={() => navigate('Security')} testID="SecurityButton" chevron />
			<SettingsItem title={'Devices'} onPress={() => {}} testID="Devices" chevron />
			{/* <SettingsItem
				title={'loc.settings.network'}
				onPress={() => navigate('NetworkSettings')}
				testID="NetworkSettings"
				chevron
			/> */}
			{true && (
				//   {Notifications.isNotificationsCapable && (
				<SettingsItem
					title={'Notifiactions'}
					onPress={() => navigate('NotificationSettings')}
					testID="NotificationSettings"
					chevron
				/>
			)}
			<SettingsItem
				title={'Privacy'}
				onPress={() => navigate('SettingsPrivacy')}
				testID="SettingsPrivacy"
				chevron
			/>
			<SettingsItem title={'About Us'} onPress={() => navigate('About')} testID="AboutButton" chevron />
		</ScrollView>
	);
};

export default Settings;
// Settings.navigationOptions = navigationStyle({
//   headerTitle: '',
// });
