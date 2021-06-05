/* global alert */
import React, { useEffect, useState, useCallback, useContext } from 'react';
import {
	ScrollView,
	Text,
	Alert,
	View,
	TouchableOpacity,
	TouchableWithoutFeedback,
	StyleSheet,
	ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Hepatics } from '@config';
import { colors } from 'react-native-elements';
import { SafeArea, BlueListItem, HeaderDefaultSub } from '@components';

// import navigationStyle from '../../components/navigationStyle';
// import Biometric from '../../class/biometrics';
// import loc from '../../loc';
// import { BlueStorageContext } from '../../blue_modules/storage-context';
// const prompt = require('../../blue_modules/prompt');

const Security = () => {
	//   const { isStorageEncrypted, encryptStorage, decryptStorage, saveToDisk } = useContext(BlueStorageContext);
	const [isLoading, setIsLoading] = useState(false);
	const [biometrics, setBiometrics] = useState({
		isDeviceBiometricCapable: true,
		isBiometricsEnabled: false,
		biometricsType: '',
	});
	const [storageIsEncryptedSwitchEnabled, setStorageIsEncryptedSwitchEnabled] = useState(false);
	//   const { navigate, popToTop } = useNavigation();
	const styles = StyleSheet.create({
		root: {
			flex: 1,
			backgroundColor: colors.background,
		},
	});

	// // //   const initialState = useCallback(async () => {
	// // //     const isBiometricsEnabled = await Biometric.isBiometricUseEnabled();
	// // //     const isDeviceBiometricCapable = await Biometric.isDeviceBiometricCapable();
	// // //     const biometricsType = (await Biometric.biometricType()) || loc.settings.biometrics;
	// // //     const isStorageEncryptedSwitchEnabled = await isStorageEncrypted();
	// // //     setStorageIsEncryptedSwitchEnabled(isStorageEncryptedSwitchEnabled);
	// // //     setBiometrics({ isBiometricsEnabled, isDeviceBiometricCapable, biometricsType });
	// // //     setIsLoading(false);
	// // //     // eslint-disable-next-line react-hooks/exhaustive-deps
	// // //   }, []);
	// // //   useEffect(() => {
	// // //     initialState();
	// // //     // eslint-disable-next-line react-hooks/exhaustive-deps
	// // //   }, []);

	// // //   const handleDecryptStorage = async () => {
	// // //     const password = await prompt(loc.settings.password, loc._.storage_is_encrypted).catch(() => {
	// // //       setIsLoading(false);
	// // //     });
	// // //     try {
	// // //       await decryptStorage(password);
	// // //       await saveToDisk();
	// // //       popToTop();
	// // //     } catch (e) {
	// // //       if (password) {
	// // //         alert(loc._.bad_password);
	// // //         Hepatics.hapticNotify('Error')
	// // //       }

	// // //       setIsLoading(false);
	// // //       setStorageIsEncryptedSwitchEnabled(await isStorageEncrypted());
	// // //     }
	// // //     // eslint-disable-next-line react-hooks/exhaustive-deps
	// // //   };

	// //   const onEncryptStorageSwitch = async value => {
	// //     setIsLoading(true);
	// //     if (value === true) {
	// //       let p1 = await prompt(loc.settings.password, loc.settings.password_explain).catch(() => {
	// //         setIsLoading(false);
	// //         p1 = undefined;
	// //       });
	// //       if (!p1) {
	// //         setIsLoading(false);
	// //         return;
	// //       }
	// //       const p2 = await prompt(loc.settings.password, loc.settings.retype_password).catch(() => {
	// //         setIsLoading(false);
	// //       });
	// //       if (p1 === p2) {
	// //         await encryptStorage(p1);
	// //         setIsLoading(false);
	// //         setStorageIsEncryptedSwitchEnabled(await isStorageEncrypted());
	// //         saveToDisk();
	// //       } else {
	// //         setIsLoading(false);
	// //         alert(loc.settings.passwords_do_not_match);
	// //       }
	// //     } else {
	// //       Alert.alert(
	// //         loc.settings.encrypt_decrypt,
	// //         loc.settings.encrypt_decrypt_q,
	// //         [
	// //           {
	// //             text: loc._.cancel,
	// //             style: 'cancel',
	// //             onPress: () => setIsLoading(false),
	// //           },
	// //           {
	// //             text: loc._.ok,
	// //             style: 'destructive',
	// //             onPress: handleDecryptStorage,
	// //           },
	// //         ],
	// //         { cancelable: false },
	// //       );
	// //     }
	// //     // eslint-disable-next-line react-hooks/exhaustive-deps
	// //   };

	//   const onUseBiometricSwitch = async value => {
	//     const isBiometricsEnabled = {
	//       isDeviceBiometricCapable: biometrics.isDeviceBiometricCapable,
	//       isBiometricsEnabled: biometrics.isBiometricsEnabled,
	//       biometricsType: biometrics.biometricsType,
	//     };
	//     if (await Biometric.unlockWithBiometrics()) {
	//       isBiometricsEnabled.isBiometricsEnabled = value;
	//       await Biometric.setBiometricUseEnabled(value);
	//       setBiometrics(isBiometricsEnabled);
	//     }
	//     // eslint-disable-next-line react-hooks/exhaustive-deps
	//   };

	//   const navigateToPlausibleDeniability = () => {
	//     navigate('PlausibleDeniability');
	//   };

	return isLoading ? (
		<SafeArea>
			<ActivityIndicator />
		</SafeArea>
	) : (
		<SafeArea>
			<ScrollView contentContainerStyle={styles.root}>
				{biometrics.isDeviceBiometricCapable && (
					<>
						<HeaderDefaultSub leftText={'Biometrics'} rightComponent={null} />
						<BlueListItem
							// title={'loc.formatString(loc.settings.encrypt_use, { type: biometrics.biometricsType })'}
							title={'Use Touch ID'}
							Component={TouchableWithoutFeedback}
							switch={{ value: biometrics.isBiometricsEnabled, onValueChange: false }}
						/>
						<View style={{ padding: 20 }}>
							<Text style={{ color: 'white' }}>
								{
									'Biometrics will be used to confirm your identity prior to acces your account and making transaction.'
								}
							</Text>
						</View>
						<View style={{ padding: 20 }} />
						<View style={{ height: 20, opacity: 0 }} />
					</>
				)}
				<HeaderDefaultSub leftText={'Password Encyption'} rightComponent={null} />
				<BlueListItem
					testID="EncyptedAndPasswordProtected"
					hideChevron
					title={'Password Protected'}
					Component={TouchableWithoutFeedback}
					switch={{ onValueChange: true, value: storageIsEncryptedSwitchEnabled }}
				/>
				<View style={{ padding: 20 }}>
					<Text style={{ color: 'white' }}>{'Password encryption to access your account alternative.'}</Text>
				</View>
				{/* {storageIsEncryptedSwitchEnabled && ( */}
				{false && (
					<BlueListItem
						// onPress={navigateToPlausibleDeniability}
						title={'Settings'}
						chevron
						testID="PlausibleDeniabilityButton"
						Component={TouchableOpacity}
					/>
				)}
			</ScrollView>
		</SafeArea>
	);
};

export default Security;
// EncryptStorage.navigationOptions = navigationStyle({}, opts => ({ ...opts, headerTitle: loc.settings.encrypt_title }));
