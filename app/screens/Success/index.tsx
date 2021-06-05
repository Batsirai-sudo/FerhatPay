import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import LottieView from 'lottie-react-native';
import { Hepatics } from '@config';
import { View, StyleSheet, SafeAreaView } from 'react-native';
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
// import LottieView from 'lottie-react-native';

// import { BitcoinUnit } from '../../models/bitcoinUnits';
// import loc from '../../loc';

const Success = () => {
	const { colors } = useTheme();
	const { dangerouslyGetParent } = useNavigation();

	const pop = () => {
		dangerouslyGetParent().pop();
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
			<SuccessView
			// amount={amount}
			// amountUnit={amountUnit}
			// fee={fee}
			// invoiceDescription={invoiceDescription}
			// onDonePressed={onDonePressed}
			/>
			<View style={styles.buttonContainer}>
				<BlueButton
					// onPress={onDonePressed}
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
							<Text style={[styles.amountValue, stylesHook.amountValue]}>Transaction Successfull</Text>
							{/* <Text style={[styles.amountUnit, stylesHook.amountUnit]}>{' + loc.units[amountUnit'}</Text> */}
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
					invoiceDescription
				</Text>
			</View>
			<View style={styles.ready}>
				<LottieView
					style={styles.lottie}
					source={require('./bluenice.json')}
					autoPlay={shouldAnimate}
					ref={animationRef}
					loop={false}
					progress={shouldAnimate ? 0 : 1}
					colorFilters={[
						{
							keypath: 'spark',
							color: colors.success,
						},
						{
							keypath: 'circle',
							color: colors.success,
						},
						{
							keypath: 'Oval',
							color: colors.successCheck,
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
		flexDirection: 'row',
		justifyContent: 'center',
		paddingTop: 76,
		paddingBottom: 16,
	},
	amountValue: {
		fontSize: 30,
		fontWeight: '600',
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
		fontSize: 14,
		marginHorizontal: 4,
		paddingBottom: 6,
		fontWeight: '500',
		alignSelf: 'center',
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
