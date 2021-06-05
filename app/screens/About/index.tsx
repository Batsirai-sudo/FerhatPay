import React from 'react';
import { TouchableOpacity, ScrollView, Linking, Image, View, StyleSheet, useWindowDimensions } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
// import { getApplicationName, getVersion, getBundleId, getBuildNumber } from 'react-native-device-info';
// import Rate, { AndroidMarket } from 'react-native-rate';
import { BlueButton } from '@components';
import { SafeArea, BlueListItem, Text } from '@components';
import * as StoreReview from 'expo-store-review';

export const BlueTextCentered = (props: any) => {
	const { colors } = useTheme();
	return <Text {...props} style={{ color: colors.foregroundColor, textAlign: 'center' }} />;
};

const About = () => {
	const { navigate } = useNavigation();
	const { colors } = useTheme();
	const { width, height } = useWindowDimensions();
	const styles = StyleSheet.create({
		center: {
			justifyContent: 'center',
			alignItems: 'center',
			marginTop: 54,
		},
		logo: {
			width: 102,
			height: 124,
		},
		textFree: {
			maxWidth: 260,
			marginVertical: 24,
			color: '#9AA0AA',
			fontSize: 15,
			textAlign: 'center',
			fontWeight: '500',
		},
		textBackup: {
			maxWidth: 260,
			marginBottom: 40,
			color: colors.foregroundColor,
			fontSize: 13,
			textAlign: 'center',
			fontWeight: '500',
		},
		buildWith: {
			backgroundColor: colors.inputBackgroundColor,
			padding: 16,
			paddingTop: 0,
			borderRadius: 8,
		},
		buttonLink: {
			backgroundColor: colors.lightButton,
			borderRadius: 12,
			justifyContent: 'center',
			padding: 8,
			flexDirection: 'row',
		},
		textLink: {
			color: colors.foregroundColor,
			marginLeft: 8,
			fontWeight: '600',
		},
	});

	const handleOnReleaseNotesPress = () => {
		navigate('ReleaseNotes');
	};

	const handleOnSelfTestPress = () => {
		navigate('Selftest');
	};

	const handleOnTermsPress = (type) => {
		navigate('Terms', { type });
	};

	const handleOnTwitterPress = () => {
		// Linking.openURL('https://twitter.com/bluewalletio');
	};

	const handleOnDiscordPress = () => {
		// Linking.openURL('https://discord.gg/btWq2Aby2z');
	};

	const handleOnTelegramPress = () => {
		// Linking.openURL('https://t.me/bluewallethat');
	};
	const handleOnGithubPress = () => {
		// Linking.openURL('https://github.com/BlueWallet/BlueWallet');
	};
	const handleOnRatePress = () => {
		if (StoreReview.isAvailableAsync()) {
			StoreReview.requestReview();
		}
	};

	return (
		<SafeArea>
			<ScrollView testID="AboutScrollView">
				<View style={{ padding: 20 }} />
				<View style={styles.center}>
					<Image style={styles.logo} source={require('./icon.png')} />
					<Text style={styles.textFree}>{'FerhatPay a Money App for easy transafers'}</Text>
					<Text style={styles.textBackup}>
						{'Dont forget to join our community for future exciting updates.'}
					</Text>
					<BlueButton onPress={handleOnRatePress} title={'Drop us a review' + ' ⭐🙏'} />
				</View>
				<View style={{ padding: 20 }} />
				<BlueListItem
					leftIcon={{
						name: 'twitter',
						type: 'font-awesome',
						color: '#1da1f2',
					}}
					onPress={handleOnTwitterPress}
					title={'Follow us on twitter'}
				/>
				<BlueListItem
					leftIcon={{
						name: 'telegram',
						type: 'font-awesome',
						color: '#0088cc',
					}}
					onPress={handleOnTelegramPress}
					title={'Telegram channel'}
				/>
				<BlueListItem
					leftIcon={{
						name: 'instagram',
						type: 'font-awesome-5',
						color: '#7289da',
					}}
					onPress={handleOnDiscordPress}
					title={'Our instagram page'}
				/>
				<View style={{ padding: 20 }} />
				<View style={styles.buildWith}>
					<View style={{ height: 20, opacity: 0 }} />

					<BlueTextCentered>{'Finally prove the value of Awesomeness'} 👍</BlueTextCentered>
					<View style={{ height: 20, opacity: 0 }} />
					<BlueTextCentered>FerhatPay App</BlueTextCentered>
					<BlueTextCentered>FerhatPay Web</BlueTextCentered>
					<BlueTextCentered>FerhatPay MeetUp</BlueTextCentered>
					{/* <BlueTextCentered>Electrum server</BlueTextCentered> */}
					<View style={{ height: 20, opacity: 0 }} />

					<TouchableOpacity onPress={handleOnGithubPress} style={styles.buttonLink}>
						<Icon size={22} name="pied-piper-alt" type="font-awesome" color={colors.foregroundColor} />
						<Text style={styles.textLink}>{'Techlab Softwares'}</Text>
					</TouchableOpacity>
				</View>
				<View style={{ padding: 20 }} />
				<BlueListItem
					leftIcon={{
						name: 'book',
						type: 'font-awesome',
						color: '#9AA0AA',
					}}
					chevron
					onPress={handleOnReleaseNotesPress}
					title={'Release notes'}
				/>
				<BlueListItem
					leftIcon={{
						name: 'law',
						type: 'octicon',
						color: colors.foregroundColor,
					}}
					chevron
					onPress={() => handleOnTermsPress('Privacy Plicy')}
					title={'Privacy Policy'}
				/>
				<BlueListItem
					leftIcon={{
						name: 'privacy-tip',
						type: 'materialIcons',
						color: colors.foregroundColor,
					}}
					chevron
					onPress={() => handleOnTermsPress('Terms & Conditions')}
					title={'Terms & Conditions'}
				/>
				{/* <BlueListItem
					leftIcon={{
						name: 'flask',
						type: 'font-awesome',
						color: '#FC0D44',
					}}
					chevron
					onPress={handleOnSelfTestPress}
					testID="RunSelfTestButton"
					title={'loc.settings.about_selftest'}
				/> */}
				<View style={{ height: 20, opacity: 0 }} />
				<View style={{ height: 20, opacity: 0 }} />
				<View style={{ height: 20, opacity: 0 }} />
				<View style={{ height: 20, opacity: 0 }} />
				<BlueTextCentered>
					{/* {getApplicationName()} ver {getVersion()} (build {getBuildNumber()}) */}
				</BlueTextCentered>
				{/* <BlueTextCentered>{new Date(getBuildNumber() * 1000).toGMTString()}</BlueTextCentered> */}
				{/* <BlueTextCentered>{getBundleId()}</BlueTextCentered> */}
				<BlueTextCentered>
					w, h = {width}, {height}
				</BlueTextCentered>
				<View style={{ height: 20, opacity: 0 }} />
				<View style={{ height: 20, opacity: 0 }} />
				<View style={{ height: 20, opacity: 0 }} />
				<View style={{ height: 20, opacity: 0 }} />
			</ScrollView>
		</SafeArea>
	);
};

// About.navigationOptions = navigationStyle({}, opts => ({ ...opts, title: loc.settings.about }));
export default About;
