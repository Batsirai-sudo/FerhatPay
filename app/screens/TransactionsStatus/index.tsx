import React, { useContext, useEffect, useRef, useState } from 'react';
import { View, ActivityIndicator, TouchableOpacity, StyleSheet, StatusBar, I18nManager } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation, useRoute, useTheme } from '@react-navigation/native';
import {
	CoinsSelected,
	AddressInput,
	BlueButton,
	BlueDismissKeyboardInputAccessory,
	BlueListItem,
	BlueUseAllFundsButton,
	SafeBlueArea,
	Text,
	BlueTransactionIncomingIcon,
	BlueTransactionPendingIcon,
	BlueTransactionOutgoingIcon,
} from '@components';

// import navigationStyle from '../../components/navigationStyle';
// import { BitcoinUnit } from '../../models/bitcoinUnits';
// import HandoffComponent from '../../components/handoff';
// import loc, { formatBalanceWithoutSuffix } from '../../loc';
// import { BlueStorageContext } from '../../blue_modules/storage-context';

const buttonStatus = Object.freeze({
	possible: 1,
	unknown: 2,
	notPossible: 3,
});

const TransactionsStatus = () => {
	// const { setSelectedWallet, wallets, txMetadata, getTransactions } = useContext(BlueStorageContext);
	// const { hash } = useRoute().params;
	const { navigate, setOptions } = useNavigation();
	const { colors } = useTheme();
	const wallet = useRef();
	const [isCPFPPossible, setIsCPFPPossible] = useState();
	const [isRBFBumpFeePossible, setIsRBFBumpFeePossible] = useState();
	const [isRBFCancelPossible, setIsRBFCancelPossible] = useState();
	const [tx, setTX] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const stylesHook = StyleSheet.create({
		value: {
			color: colors.alternativeTextColor2,
		},
		valueUnit: {
			color: colors.alternativeTextColor2,
		},
		iconRoot: {
			backgroundColor: colors.success,
		},
		confirmations: {
			backgroundColor: colors.lightButton,
		},
	});

	// useEffect(() => {
	// 	setIsCPFPPossible(buttonStatus.unknown);
	// 	setIsRBFBumpFeePossible(buttonStatus.unknown);
	// 	setIsRBFCancelPossible(buttonStatus.unknown);
	// }, []);

	useEffect(() => {
		setOptions({
			headerStyle: {
				borderBottomWidth: 0,
				elevation: 0,
				shadowOpacity: 0,
				shadowOffset: { height: 0, width: 0 },
				backgroundColor: colors.customHeader,
			},
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [colors]);

	// // useEffect(() => {
	// // 	for (const w of wallets) {
	// // 		for (const t of w.getTransactions()) {
	// // 			if (t.hash === hash) {
	// // 				console.log('tx', hash, 'belongs to', w.getLabel());
	// // 				wallet.current = w;
	// // 				break;
	// // 			}
	// // 		}
	// // 	}

	// // 	for (const tx of getTransactions(null, Infinity, true)) {
	// // 		if (tx.hash === hash) {
	// // 			setTX(tx);
	// // 			break;
	// // 		}
	// // 	}

	// // 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// // }, [hash]);

	// const initialState = async () => {
	// 	try {
	// 		await checkPossibilityOfCPFP();
	// 		await checkPossibilityOfRBFBumpFee();
	// 		await checkPossibilityOfRBFCancel();
	// 	} catch (e) {
	// 		setIsCPFPPossible(buttonStatus.notPossible);
	// 		setIsRBFBumpFeePossible(buttonStatus.notPossible);
	// 		setIsRBFCancelPossible(buttonStatus.notPossible);
	// 	}
	// 	setIsLoading(false);
	// };

	// useEffect(() => {
	// 	initialState();

	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [tx, wallets]);

	// useEffect(() => {
	// 	const walletID = wallet.current?.getID();
	// 	if (walletID) {
	// 		setSelectedWallet(wallet.current?.getID());
	// 	}
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [wallet.current]);

	// useEffect(() => {
	// 	console.log('transactions/details - useEffect');
	// }, []);

	// const checkPossibilityOfCPFP = async () => {
	// 	if (!wallet.current.allowRBF()) {
	// 		return setIsCPFPPossible(buttonStatus.notPossible);
	// 	}

	// 	const cpfbTx = new HDSegwitBech32Transaction(null, tx.hash, wallet.current);
	// 	if ((await cpfbTx.isToUsTransaction()) && (await cpfbTx.getRemoteConfirmationsNum()) === 0) {
	// 		return setIsCPFPPossible(buttonStatus.possible);
	// 	} else {
	// 		return setIsCPFPPossible(buttonStatus.notPossible);
	// 	}
	// };

	// const checkPossibilityOfRBFBumpFee = async () => {
	// 	if (!wallet.current.allowRBF()) {
	// 		return setIsRBFBumpFeePossible(buttonStatus.notPossible);
	// 	}

	// 	const rbfTx = new HDSegwitBech32Transaction(null, tx.hash, wallet.current);
	// 	if (
	// 		(await rbfTx.isOurTransaction()) &&
	// 		(await rbfTx.getRemoteConfirmationsNum()) === 0 &&
	// 		(await rbfTx.isSequenceReplaceable()) &&
	// 		(await rbfTx.canBumpTx())
	// 	) {
	// 		return setIsRBFBumpFeePossible(buttonStatus.possible);
	// 	} else {
	// 		return setIsRBFBumpFeePossible(buttonStatus.notPossible);
	// 	}
	// };

	// const checkPossibilityOfRBFCancel = async () => {
	// 	if (!wallet.current.allowRBF()) {
	// 		return setIsRBFCancelPossible(buttonStatus.notPossible);
	// 	}

	// 	const rbfTx = new HDSegwitBech32Transaction(null, tx.hash, wallet.current);
	// 	if (
	// 		(await rbfTx.isOurTransaction()) &&
	// 		(await rbfTx.getRemoteConfirmationsNum()) === 0 &&
	// 		(await rbfTx.isSequenceReplaceable()) &&
	// 		(await rbfTx.canCancelTx())
	// 	) {
	// 		return setIsRBFCancelPossible(buttonStatus.possible);
	// 	} else {
	// 		return setIsRBFCancelPossible(buttonStatus.notPossible);
	// 	}
	// };

	// const navigateToRBFBumpFee = () => {
	// 	navigate('RBFBumpFee', {
	// 		txid: tx.hash,
	// 		wallet: wallet.current,
	// 	});
	// };

	const navigateToRBFCancel = () => {
		navigate('RBFCancel', {
			txid: 'tx.hash',
			wallet: wallet.current,
		});
	};

	const navigateToCPFP = () => {
		navigate('CPFP', {
			txid: 'tx.hash',
			wallet: wallet.current,
		});
	};
	const navigateToTransactionDetials = () => {
		navigate('TransactiobDetails');
	};

	const renderCPFP = () => {
		if (isCPFPPossible === buttonStatus.unknown) {
			return (
				<>
					<ActivityIndicator />
					<View style={{ height: 20, opacity: 0 }} />
				</>
			);
		} else if (isCPFPPossible === buttonStatus.possible) {
			return (
				<>
					<BlueButton onPress={navigateToCPFP} title={'loc.transactions.status_bump'} />
					<View style={{ height: 10, opacity: 0 }} />
				</>
			);
		}
	};

	const renderRBFCancel = () => {
		if (isRBFCancelPossible === buttonStatus.unknown) {
			return (
				<>
					<ActivityIndicator />
				</>
			);
		} else if (isRBFCancelPossible === buttonStatus.possible) {
			return (
				<>
					<TouchableOpacity style={styles.cancel}>
						<Text onPress={navigateToRBFCancel} style={styles.cancelText}>
							{'loc.transactions.status_cancel'}
						</Text>
					</TouchableOpacity>
					<View style={{ height: 10, opacity: 0 }} />
				</>
			);
		}
	};

	const renderRBFBumpFee = () => {
		if (isRBFBumpFeePossible === buttonStatus.unknown) {
			return (
				<>
					<ActivityIndicator />
					<View style={{ height: 20, opacity: 0 }} />
				</>
			);
		} else if (isRBFBumpFeePossible === buttonStatus.possible) {
			return (
				<>
					<BlueButton onPress={() => {}} title={'loc.transactions.status_bump'} />
					<View style={{ height: 10, opacity: 0 }} />
				</>
			);
		}
	};

	const renderTXMetadata = () => {
		return (
			<View style={styles.memo}>
				<Text style={styles.memoText}>{'Transaction Amount'}</Text>
				<View style={{ height: 20, opacity: 0 }} />
			</View>
		);
	};

	if (false) {
		return (
			<SafeBlueArea>
				<ActivityIndicator />
			</SafeBlueArea>
		);
	}
	return (
		<SafeBlueArea>
			{/* <HandoffComponent
				title={`Bitcoin Transaction ${tx.hash}`}
				type="io.bluewallet.bluewallet"
				url={`https://blockstream.info/tx/${tx.hash}`}
			/> */}

			<StatusBar barStyle="default" />
			<View style={styles.container}>
				<View style={{ padding: 20 }}>
					<View style={[styles.center]}>
						<View style={{ flexDirection: 'row' }}>
							<Text style={[styles.valueUnit, stylesHook.valueUnit, { bottom: 5 }]}>DA</Text>

							<Text style={[styles.value, stylesHook.value]}>452</Text>
						</View>
					</View>

					{renderTXMetadata()}

					<View style={[styles.iconRoot, stylesHook.iconRoot]}>
						<View>
							<Icon name="check" size={50} type="font-awesome" color={colors.successCheck} />
						</View>
						<View style={[styles.iconWrap, styles.margin]}>
							{(() => {
								let tx = { value: 5 };
								if ('!tx.confirmations') {
									return (
										<View style={styles.icon}>
											<BlueTransactionPendingIcon />
										</View>
									);
								} else if (tx.value < 0) {
									return (
										<View style={styles.icon}>
											<BlueTransactionOutgoingIcon />
										</View>
									);
								} else {
									return (
										<View style={styles.icon}>
											<BlueTransactionIncomingIcon />
										</View>
									);
								}
							})()}
						</View>
					</View>

					{true && (
						<View style={styles.fee}>
							<Text style={[styles.feeText, { textAlign: 'center' }]}>
								Your transaction was successfull you can view details for more information.
								{/* {loc.send.create_fee.toLowerCase()}{' '}
								craeating a transaction details for ant transaction which happen 
								like send money details
								receive money
								topup
								withdraw
								cash deposit
								tickets
								paymrne
								{formatBalanceWithoutSuffix(tx.fee, wallet.current.preferredBalanceUnit, true)}{' '}
								{wallet.current.preferredBalanceUnit !== BitcoinUnit.LOCAL_CURRENCY &&
									wallet.current.preferredBalanceUnit} */}
							</Text>
						</View>
					)}

					<View style={[styles.confirmations, stylesHook.confirmations]}>
						<Text semibold style={styles.confirmationsText}>
							SEND MONEY
							{/* {loc.formatString(loc.transactions.confirmations_lowercase, {
								confirmations: tx.confirmations > 6 ? '6+' : tx.confirmations,
							})} */}
						</Text>
					</View>
				</View>

				<View style={styles.actions}>
					{renderCPFP()}
					{renderRBFBumpFee()}
					{renderRBFCancel()}
					<TouchableOpacity style={styles.details} onPress={navigateToTransactionDetials}>
						<Text style={styles.detailsText}>{'Transaction Details'}</Text>
						<Icon
							name={I18nManager.isRTL ? 'angle-left' : 'angle-right'}
							size={18}
							type="font-awesome"
							color="#9aa0aa"
						/>
					</TouchableOpacity>
				</View>
			</View>
		</SafeBlueArea>
	);
};

export default TransactionsStatus;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		marginTop: 30,
	},
	center: {
		alignItems: 'center',
	},
	value: {
		fontSize: 50,
		fontWeight: '600',
	},
	valueUnit: {
		fontSize: 16,
		fontWeight: '500',
	},
	memo: {
		alignItems: 'center',
		marginVertical: 8,
	},
	memoText: {
		color: '#9aa0aa',
		fontSize: 14,
	},
	iconRoot: {
		width: 120,
		height: 120,
		borderRadius: 60,
		alignSelf: 'center',
		justifyContent: 'center',
		marginTop: 43,
		marginBottom: 53,
	},
	iconWrap: {
		minWidth: 30,
		minHeight: 30,
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'flex-end',
		borderRadius: 15,
	},
	margin: {
		marginBottom: -40,
	},
	icon: {
		width: 25,
	},
	fee: {
		marginTop: 15,
		marginBottom: 13,
	},
	feeText: {
		fontSize: 11,
		fontWeight: '500',
		marginBottom: 4,
		color: '#00c49f',
		alignSelf: 'center',
	},
	confirmations: {
		borderRadius: 30,
		width: 150,
		height: 50,
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
	},
	confirmationsText: {
		color: '#9aa0aa',
		fontSize: 15,
	},
	actions: {
		alignSelf: 'center',
		justifyContent: 'center',
	},
	cancel: {
		marginVertical: 16,
	},
	cancelText: {
		color: '#d0021b',
		fontSize: 15,
		fontWeight: '500',
		textAlign: 'center',
	},
	details: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 40,
	},
	detailsText: {
		color: '#9aa0aa',
		fontSize: 14,
		marginRight: 8,
	},
});

// TransactionsStatus.navigationOptions = navigationStyle({
//   title: '',
// });
