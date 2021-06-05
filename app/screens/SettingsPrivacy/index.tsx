import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, TouchableWithoutFeedback, StyleSheet, Linking, Platform, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { SafeArea, BlueListItem, HeaderDefaultSub, Text } from '@components';

// import navigationStyle from '../../components/navigationStyle';
// import DeviceQuickActions from '../../class/quick-actions';
// import BlueClipboard from '../../blue_modules/clipboard';
// import { BlueStorageContext } from '../../blue_modules/storage-context';
// import WidgetCommunication from '../../blue_modules/WidgetCommunication';

const SettingsPrivacy = () => {
	const { colors } = useTheme();
	//   const { isStorageEncrypted } = useContext(BlueStorageContext);
	const sections = Object.freeze({ ALL: 0, CLIPBOARDREAD: 1, QUICKACTION: 2, WIDGETS: 3 });
	const [isLoading, setIsLoading] = useState(sections.ALL);
	const [isReadClipboardAllowed, setIsReadClipboardAllowed] = useState(false);

	const [isDisplayWidgetBalanceAllowed, setIsDisplayWidgetBalanceAllowed] = useState(false);
	const [isQuickActionsEnabled, setIsQuickActionsEnabled] = useState(false);
	const [storageIsEncrypted, setStorageIsEncrypted] = useState(true);

	//   useEffect(() => {
	//     (async () => {
	//       try {
	//         setIsReadClipboardAllowed(await BlueClipboard.isReadClipboardAllowed());
	//         setStorageIsEncrypted(await isStorageEncrypted());
	//         setIsQuickActionsEnabled(await DeviceQuickActions.getEnabled());
	//         setIsDisplayWidgetBalanceAllowed(await WidgetCommunication.isBalanceDisplayAllowed());
	//       } catch (e) {
	//         console.log(e);
	//       }
	//       setIsLoading(false);
	//     })();
	//     // eslint-disable-next-line react-hooks/exhaustive-deps
	//   }, []);

	//   const onValueChange = async value => {
	//     setIsLoading(sections.CLIPBOARDREAD);
	//     try {
	//       await BlueClipboard.setReadClipboardAllowed(value);
	//       setIsReadClipboardAllowed(value);
	//     } catch (e) {
	//       console.log(e);
	//     }
	//     setIsLoading(false);
	//   };

	//   const onQuickActionsValueChange = async value => {
	//     setIsLoading(sections.QUICKACTION);
	//     try {
	//       await DeviceQuickActions.setEnabled(value);
	//       setIsQuickActionsEnabled(value);
	//     } catch (e) {
	//       console.log(e);
	//     }
	//     setIsLoading(false);
	//   };

	//   const onWidgetsTotalBalanceValueChange = async value => {
	//     setIsLoading(sections.WIDGETS);
	//     try {
	//       await WidgetCommunication.setBalanceDisplayAllowed(value);
	//       setIsDisplayWidgetBalanceAllowed(value);
	//     } catch (e) {
	//       console.log(e);
	//     }
	//     setIsLoading(false);
	//   };

	const stylesWithThemeHook = StyleSheet.create({
		root: {
			backgroundColor: colors.background,
		},
	});

	const openApplicationSettings = () => {
		Linking.openSettings();
	};

	return (
		<ScrollView style={[styles.root, stylesWithThemeHook.root]}>
			<HeaderDefaultSub leftText={'Privacy Settings'} rightComponent={null} />
			<BlueListItem
				hideChevron
				title={'Read clipboard'}
				Component={TouchableWithoutFeedback}
				switch={{
					value: isReadClipboardAllowed,
					disabled: isLoading === sections.ALL,
					testID: 'ClipboardSwith',
				}}
			/>
			<View style={{ padding: 20 }}>
				<Text whiteColor>{'Provides shortcuts if an invoice or link is available on clipboard'}</Text>
			</View>
			<View style={{ height: 20, opacity: 0 }} />
			{!storageIsEncrypted && (
				<>
					<BlueListItem
						hideChevron
						title={'loc.settings.privacy_quickactions'}
						Component={TouchableWithoutFeedback}
						switch={{
							//   onValueChange: onQuickActionsValueChange,
							value: isQuickActionsEnabled,
							disabled: isLoading === sections.ALL,
							testID: 'QuickActionsSwith',
						}}
					/>
					<View style={{ padding: 20 }}>
						<Text>{'loc.settings.privacy_quickactions_explanation'}</Text>
					</View>
				</>
			)}
			{Platform.OS === 'ios' && !storageIsEncrypted && (
				<>
					<HeaderDefaultSub leftText={'loc.settings.widgets'} rightComponent={null} />
					<BlueListItem
						hideChevron
						title={'loc.settings.total_balance'}
						Component={TouchableWithoutFeedback}
						switch={{
							//   onValueChange: onWidgetsTotalBalanceValueChange,
							value: isDisplayWidgetBalanceAllowed,
							disabled: isLoading === sections.ALL,
						}}
					/>
					<View style={{ padding: 20 }}>
						<Text>{'loc.settings.total_balance_explanation'}</Text>
					</View>
				</>
			)}
			<View style={{ height: 20, opacity: 0 }} />
			<BlueListItem
				title={'System Settings'}
				chevron
				onPress={openApplicationSettings}
				testID="PrivacySystemSettings"
			/>
			<View style={{ height: 20, opacity: 0 }} />
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	root: {
		flex: 1,
	},
});

// SettingsPrivacy.navigationOptions = navigationStyle({}, opts => ({ ...opts, title: loc.settings.privacy }));

export default SettingsPrivacy;
