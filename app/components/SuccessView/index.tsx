import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import LottieView from 'lottie-react-native';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
// import BigNumber from 'bignumber.js';
import { useTheme } from '@react-navigation/native';

export const SuccessView = ({ amount, amountUnit, fee, invoiceDescription, shouldAnimate = true }) => {
	const animationRef = useRef();
	const { colors } = useTheme();

	const stylesHook = StyleSheet.create({
		amountValue: {
			color: '#0f5cc0',
		},
		// '#0A84FF'
		amountUnit: {
			color: '#0f5cc0',
		},
	});

	useEffect(() => {
		if (shouldAnimate) {
			animationRef.current.reset();
			animationRef.current.resume();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [colors]);

	return (
		<View style={styles.root}>
			<View style={[styles.amount, { padding: 20 }]}>
				<View style={styles.view}>
					{amount && (
						<>
							<Text style={[styles.amountValue, stylesHook.amountValue]}>{'amount'}</Text>
							<Text style={[styles.amountUnit, stylesHook.amountUnit]}>
								{"' ' + loc.units[amountUnit]"}
							</Text>
						</>
					)}
				</View>
				{fee > 0 && (
					<Text style={styles.feeText}>
						454
						{/* {loc.send.create_fee}: {new BigNumber(fee).toFixed()} {loc.units[BitcoinUnit.BTC]} */}
					</Text>
				)}
				<Text numberOfLines={0} style={styles.feeText}>
					{'invoiceDescription'}
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
						// success: '#ccddf9',
						// successCheck: '#0f5cc0',
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
							color: '#0f5cc0',
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
		fontSize: 36,
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
