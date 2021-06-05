// import React, { useCallback } from 'react';
// import { View, StyleSheet } from 'react-native';
// import { Text, Button } from '@components';
// import { useTranslation } from 'react-i18next';
// import { useNavigation, useTheme } from '@react-navigation/native';
// import { ROUTES, Images } from '@config';

// interface IndexProps {}

// const Index = (props: IndexProps) => {
// 	const { t } = useTranslation();
// 	const { navigate } = useNavigation();

// 	const onContinue = useCallback(async () => {
// 		navigate(ROUTES.Login);
// 	}, []);
// 	return (
// 		<View style={styles.container}>
// 			<View style={styles.quater}>
// 				<Text semiBold whiteColor style={styles.toptTxt}>
// 					Registration Success
// 				</Text>
// 				<View style={styles.txtContainer}>
// 					<Text whiteColor style={styles.txt}>
// 						Your Account was successfully registered
// 					</Text>
// 					<Text whiteColor style={styles.txt}>
// 						You can now Login with your
// 					</Text>
// 					<Text whiteColor style={[styles.txt, { marginTop: 50 }]}>
// 						Mobile Number( New Account Number )
// 					</Text>
// 					<Text whiteColor style={styles.txt}>
// 						&
// 					</Text>
// 					<Text whiteColor style={styles.txt}>
// 						password
// 					</Text>
// 				</View>
// 			</View>
// 			<View style={styles.btnConainer}>
// 				<Button
// 					loading={false}
// 					buttonStyle={styles.btn}
// 					title={t('login')}
// 					size="small"
// 					onPress={onContinue}
// 					backgroundColor="#0024CD"
// 				/>
// 			</View>
// 		</View>
// 	);
// };

// export default Index;

// const styles = StyleSheet.create({
// 	container: { height: '100%', width: '100%' },
// 	quater: {
// 		height: '70%',
// 		width: '100%',
// 		backgroundColor: '#0024CD',
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 	},
// 	img: { height: 30, width: 30 },
// 	toptTxt: { top: -30, fontSize: 20 },
// 	txt: { fontSize: 11 },
// 	btnConainer: { marginTop: 100, width: '60%', alignSelf: 'center' },
// 	txtContainer: { marginTop: 50, alignItems: 'center', justifyContent: 'center' },
// });

import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import LottieView from 'lottie-react-native';
import { Hepatics } from '@config';
import { View, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { Text } from 'react-native-elements';
import BigNumber from 'bignumber.js';
import { useNavigation, useRoute, useTheme } from '@react-navigation/native';
import {
	CoinsSelected,
	AddressInput,
	BlueButton,
	BlueDismissKeyboardInputAccessory,
	BlueListItem,
	BlueUseAllFundsButton,
	SafeBlueArea,
} from '@components';
import { ROUTES } from '@config';

// import { BitcoinUnit } from '../../models/bitcoinUnits';
// import loc from '../../loc';

const Success = () => {
	const { colors } = useTheme();
	const { dangerouslyGetParent } = useNavigation();
	const { navigate } = useNavigation();

	const pop = () => {
		// dangerouslyGetParent().pop();
	};
	//   const { amount, fee, amountUnit = BitcoinUnit.BTC, invoiceDescription = '', onDonePressed = pop } = useRoute().params;
	const stylesHook = StyleSheet.create({
		root: {
			backgroundColor: colors.elevated,
		},
		amountValue: {
			color: colors.alternativeTextColor2,
		},
		amountUnit: {
			color: colors.alternativeTextColor2,
		},
	});
	useEffect(() => {
		console.log('send/success - useEffect');
		Hepatics('Success');
		// ReactNativeHapticFeedback.trigger('notificationSuccess', { ignoreAndroidSystemSettings: false });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<SafeAreaView style={[styles.root, stylesHook.root]}>
			<StatusBar barStyle="light-content" />
			<SuccessView
			// amount={amount}
			// amountUnit={amountUnit}
			// fee={fee}
			// invoiceDescription={invoiceDescription}
			// onDonePressed={onDonePressed}
			/>
			<View style={styles.buttonContainer}>
				<BlueButton
					onPress={() => {
						navigate(ROUTES.Login);
					}}
					title={'Done'}
				/>
			</View>
		</SafeAreaView>
	);
};

export default Success;

export const SuccessView = ({ amount, amountUnit, fee, invoiceDescription, shouldAnimate = true }) => {
	const animationRef = useRef();
	const { colors } = useTheme();

	const stylesHook = StyleSheet.create({
		amountValue: {
			color: colors.alternativeTextColor2,
		},
		amountUnit: {
			color: colors.alternativeTextColor2,
		},
	});

	useEffect(() => {
		if (shouldAnimate) {
			// animationRef.current.reset();
			// animationRef.current.resume();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [colors]);

	return (
		<View style={styles.root}>
			<View style={[styles.amount, { padding: 20 }]}>
				<View style={styles.view}>
					{true && (
						<>
							<Text style={[styles.amountValue, stylesHook.amountValue]}>Registration Success</Text>
							<Text style={[styles.amountUnit, stylesHook.amountUnit, { marginTop: 20, fontSize: 13 }]}>
								Your Account was successfully registered
							</Text>
						</>
					)}
				</View>
				{fee > 0 && (
					<Text style={styles.feeText}>
						yuy
						{/* {loc.send.create_fee}: {new BigNumber(fee).toFixed()} {loc.units[BitcoinUnit.BTC]} */}
					</Text>
				)}
				<Text numberOfLines={0} style={styles.feeText}>
					Your new Account Number is your Mobile number you used on creating this acoount with. Please LOGIN
					to get started.
				</Text>
			</View>
			<View style={styles.ready}>
				<LottieView
					style={styles.lottie}
					source={require('./bluenice.json')}
					autoPlay={true}
					ref={animationRef}
					loop={true}
					progress={true ? 0 : 1}
					colorFilters={[
						{
							keypath: 'spark',
							color: '#ccddf9',
						},
						{
							keypath: 'circle',
							color: '#ccddf9',
						},
						{
							keypath: 'Oval',
							color: '#0A84FF',
						},
					]}
				/>
			</View>
		</View>
	);
};

SuccessView.propTypes = {
	amount: PropTypes.number,
	amountUnit: PropTypes.string,
	fee: PropTypes.number,
	invoiceDescription: PropTypes.string,
	shouldAnimate: PropTypes.bool,
};

const styles = StyleSheet.create({
	root: {
		flex: 1,
		paddingTop: 19,
	},
	buttonContainer: {
		padding: 58,
	},
	amount: {
		alignItems: 'center',
	},
	view: {
		// flexDirection: 'row',
		justifyContent: 'center',
		paddingTop: 76,
		paddingBottom: 16,
	},
	amountValue: {
		fontSize: 36,
		fontWeight: '600',
		textAlign: 'center',
	},
	amountUnit: {
		fontSize: 16,
		marginHorizontal: 4,
		paddingBottom: 6,
		fontWeight: '600',
		alignSelf: 'flex-end',
	},
	feeText: {
		color: '#37c0a1',
		fontSize: 11,
		marginHorizontal: 30,
		paddingBottom: 6,
		fontWeight: '500',
		textAlign: 'center',
	},
	ready: {
		width: 120,
		height: 120,
		borderRadius: 60,
		alignSelf: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 43,
		marginBottom: 53,
	},
	lottie: {
		width: 400,
		height: 400,
	},
});
