// /* global alert */
// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { ActivityIndicator, FlatList, TouchableOpacity, StyleSheet, Switch, View } from 'react-native';
// import { Text } from 'react-native-elements';
// // import { PayjoinClient } from 'payjoin-client';
// // import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
// import { BlueButton, SafeBlueArea } from '@components';
// // import PayjoinTransaction from '../../class/payjoin-transaction';

// // import navigationStyle from '../../components/navigationStyle';
// // import { BitcoinUnit } from '../../models/bitcoinUnits';
// // import Biometric from '../../class/biometrics';
// // import loc, { formatBalance, formatBalanceWithoutSuffix } from '../../loc';
// // import { BlueCurrentTheme } from '../../components/themes';
// // import Notifications from '../../blue_modules/notifications';
// // import { BlueStorageContext } from '../../blue_modules/storage-context';
// // const currency = require('../../blue_modules/currency');
// // const BlueElectrum = require('../../blue_modules/BlueElectrum');
// // const Bignumber = require('bignumber.js');
// // const bitcoin = require('bitcoinjs-lib');

// export default class Confirm extends Component {
// 	//   static contextType = BlueStorageContext;
// 	constructor(props) {
// 		super(props);

// 		// this.state = {
// 		//   isLoading: false,
// 		//   isPayjoinEnabled: false,
// 		//   payjoinUrl: props.route.params.fromWallet.allowPayJoin() ? props.route.params?.payjoinUrl : false,
// 		//   psbt: props.route.params?.psbt,
// 		//   fee: props.route.params?.fee,
// 		// //   feeSatoshi: new Bignumber(props.route.params.fee).multipliedBy(100000000).toNumber(),
// 		//   memo: props.route.params.memo,
// 		//   recipients: props.route.params.recipients,
// 		//   size: Math.round(props.route.params.tx.length / 2),
// 		//   tx: props.route.params.tx,
// 		//   satoshiPerByte: props.route.params.satoshiPerByte,
// 		//   fromWallet: props.route.params.fromWallet,
// 		// };
// 	}

// 	//   async componentDidMount() {
// 	//     console.log('send/confirm - componentDidMount');
// 	//     console.log('address = ', this.state.recipients);
// 	//     if (!this.state.recipients || !this.state.recipients.length) alert('Internal error: recipients list empty (this should never happen)');
// 	//     this.isBiometricUseCapableAndEnabled = await Biometric.isBiometricUseCapableAndEnabled();
// 	//   }

// 	/**
// 	 * we need to look into `recipients`, find destination address and return its outputScript
// 	 * (needed for payjoin)
// 	 *
// 	 * @return {string}
// 	 */
// 	//   getPaymentScript() {
// 	//     for (const recipient of this.state.recipients) {
// 	//       return bitcoin.address.toOutputScript(recipient.address);
// 	//     }
// 	//   }

// 	//   send() {
// 	//     this.setState({ isLoading: true }, async () => {
// 	//       try {
// 	//         const txids2watch = [];
// 	//         if (!this.state.isPayjoinEnabled) {
// 	//           await this.broadcast(this.state.tx);
// 	//         } else {
// 	//           const wallet = new PayjoinTransaction(this.state.psbt, txHex => this.broadcast(txHex), this.state.fromWallet);
// 	//           const paymentScript = this.getPaymentScript();
// 	//           const payjoinClient = new PayjoinClient({
// 	//             paymentScript,
// 	//             wallet,
// 	//             payjoinUrl: this.state.payjoinUrl,
// 	//           });
// 	//           await payjoinClient.run();
// 	//           const payjoinPsbt = wallet.getPayjoinPsbt();
// 	//           if (payjoinPsbt) {
// 	//             const tx = payjoinPsbt.extractTransaction();
// 	//             txids2watch.push(tx.getId());
// 	//           }
// 	//         }

// 	//         const txid = bitcoin.Transaction.fromHex(this.state.tx).getId();
// 	//         txids2watch.push(txid);
// 	//         Notifications.majorTomToGroundControl([], [], txids2watch);
// 	//         let amount = 0;
// 	//         const recipients = this.state.recipients;
// 	//         for (const recipient of recipients) {
// 	//           amount += recipient.value;
// 	//         }

// 	//         amount = formatBalanceWithoutSuffix(amount, BitcoinUnit.BTC, false);

// 	//         this.props.navigation.navigate('Success', {
// 	//           fee: Number(this.state.fee),
// 	//           amount,
// 	//         });

// 	//         this.setState({ isLoading: false });

// 	//         await new Promise(resolve => setTimeout(resolve, 3000)); // sleep to make sure network propagates
// 	//         this.context.fetchAndSaveWalletTransactions(this.state.fromWallet.getID());
// 	//       } catch (error) {
// 	//         ReactNativeHapticFeedback.trigger('notificationError', {
// 	//           ignoreAndroidSystemSettings: false,
// 	//         });
// 	//         this.setState({ isLoading: false });
// 	//         alert(error.message);
// 	//       }
// 	//     });
// 	//   }

// 	//   async broadcast(tx) {
// 	//     await BlueElectrum.ping();
// 	//     await BlueElectrum.waitTillConnected();

// 	//     if (this.isBiometricUseCapableAndEnabled) {
// 	//       if (!(await Biometric.unlockWithBiometrics())) {
// 	//         return;
// 	//       }
// 	//     }

// 	//     const result = await this.state.fromWallet.broadcastTx(tx);
// 	//     if (!result) {
// 	//       throw new Error(loc.errors.broadcast);
// 	//     }

// 	//     return result;
// 	//   }

// 	_renderItem = ({ index, item }) => {
// 		return (
// 			<>
// 				<View style={styles.valueWrap}>
// 					<Text testID="TransactionValue" style={styles.valueValue}>
// 						{/* {currency.satoshiToBTC(item.value)} */}
// 						12
// 					</Text>
// 					<Text style={styles.valueUnit}>{'loc.units[BitcoinUnit.BTC]'}</Text>
// 				</View>
// 				<Text style={styles.transactionAmountFiat}>{'currency.satoshiToLocalCurrency(item.value)'}</Text>

// 				<View style={{ padding: 20 }} />
// 				<Text style={styles.transactionDetailsTitle}>{'loc.send.create_to'}</Text>
// 				<Text testID="TransactionAddress" style={styles.transactionDetailsSubtitle}>
// 					{'item.address'}
// 				</Text>

// 				<View style={{ padding: 20 }} />
// 				{/* {this.state.recipients.length > 1 && (
//           <Text style={styles.valueOf}>
//             {loc.formatString(loc._.of, { number: index + 1, total: this.state.recipients.length })}
//           </Text>
//         )} */}
// 			</>
// 		);
// 	};

// 	renderSeparator = () => {
// 		return <View style={styles.separator} />;
// 	};

// 	render() {
// 		return (
// 			<SafeBlueArea style={styles.root}>
// 				<View style={styles.rootWrap}>
// 					<FlatList
// 						// scrollEnabled={this.state.recipients.length > 1}
// 						// extraData={this.state.recipients}
// 						data={['this.state.recipients']}
// 						renderItem={this._renderItem}
// 						keyExtractor={(_item, index) => `${index}`}
// 						ItemSeparatorComponent={this.renderSeparator}
// 						style={styles.flat}
// 					/>
// 					<View style={styles.cardContainer}>
// 						<View style={{ padding: 20 }} />
// 						<Text style={styles.cardText} testID="TransactionFee">
// 							67
// 							{/* {loc.send.create_fee}: {formatBalance(this.state.feeSatoshi, BitcoinUnit.BTC)} (
//                 {currency.satoshiToLocalCurrency(this.state.feeSatoshi)}) */}
// 						</Text>

// 						<View style={{ height: 50 }} />
// 						{true && (
// 							<View style={styles.payjoinWrapper}>
// 								<Text style={styles.payjoinText}>Payjoin</Text>
// 								<Switch
// 									testID="PayjoinSwitch"
// 									// value={this.state.isPayjoinEnabled}
// 									onValueChange={(isPayjoinEnabled) => this.setState({ isPayjoinEnabled })}
// 								/>
// 							</View>
// 						)}
// 						{true ? (
// 							<ActivityIndicator />
// 						) : (
// 							<BlueButton onPress={() => this.send()} title={'loc.send.confirm_sendNow'} />
// 						)}

// 						<TouchableOpacity
// 							testID="TransactionDetailsButton"
// 							style={styles.txDetails}
// 							// onPress={async () => {
// 							//   if (this.isBiometricUseCapableAndEnabled) {
// 							//     if (!(await Biometric.unlockWithBiometrics())) {
// 							//       return;
// 							//     }
// 							//   }

// 							//   this.props.navigation.navigate('CreateTransaction', {
// 							//     fee: this.state.fee,
// 							//     recipients: this.state.recipients,
// 							//     memo: this.state.memo,
// 							//     tx: this.state.tx,
// 							//     satoshiPerByte: this.state.satoshiPerByte,
// 							//     wallet: this.state.fromWallet,
// 							//     feeSatoshi: this.state.feeSatoshi,
// 							//   });
// 							// }}
// 						>
// 							<Text style={styles.txText}>{'loc.transactions.details_transaction_details'}</Text>
// 						</TouchableOpacity>

// 						<View style={{ padding: 20 }} />
// 					</View>
// 				</View>
// 			</SafeBlueArea>
// 		);
// 	}
// }

// const styles = StyleSheet.create({
// 	transactionDetailsTitle: {
// 		color: '#0c2550',
// 		fontWeight: '500',
// 		fontSize: 17,
// 		marginBottom: 2,
// 	},
// 	transactionDetailsSubtitle: {
// 		color: '#81868e',
// 		fontWeight: '500',
// 		fontSize: 15,
// 		marginBottom: 20,
// 	},
// 	transactionAmountFiat: {
// 		color: '#81868e',
// 		fontWeight: '500',
// 		fontSize: 15,
// 		marginVertical: 20,
// 		textAlign: 'center',
// 	},
// 	valueWrap: {
// 		flexDirection: 'row',
// 		justifyContent: 'center',
// 	},
// 	valueValue: {
// 		color: '#0A84FF',
// 		fontSize: 36,
// 		fontWeight: '600',
// 	},
// 	valueUnit: {
// 		color: '#0A84FF',
// 		fontSize: 16,
// 		marginHorizontal: 4,
// 		paddingBottom: 6,
// 		fontWeight: '600',
// 		alignSelf: 'flex-end',
// 	},
// 	valueOf: {
// 		alignSelf: 'flex-end',
// 		marginRight: 18,
// 		marginVertical: 8,
// 	},
// 	separator: {
// 		height: 0.5,
// 		margin: 16,
// 	},
// 	root: {
// 		paddingTop: 19,
// 		backgroundColor: '#121212',
// 	},
// 	rootWrap: {
// 		marginTop: 16,
// 		alignItems: 'center',
// 		justifyContent: 'space-between',
// 	},
// 	flat: {
// 		maxHeight: '55%',
// 	},
// 	cardContainer: {
// 		flexDirection: 'row',
// 		justifyContent: 'center',
// 		paddingTop: 16,
// 		paddingBottom: 16,
// 	},
// 	cardText: {
// 		color: '#37c0a1',
// 		fontSize: 14,
// 		marginHorizontal: 4,
// 		paddingBottom: 6,
// 		fontWeight: '500',
// 		alignSelf: 'center',
// 	},
// 	txDetails: {
// 		marginVertical: 24,
// 	},
// 	txText: {
// 		color: '#0c2550',
// 		fontSize: 15,
// 		fontWeight: '500',
// 		alignSelf: 'center',
// 	},
// 	payjoinWrapper: {
// 		flexDirection: 'row',
// 		marginHorizontal: 20,
// 		marginBottom: 10,
// 		justifyContent: 'space-between',
// 		alignItems: 'center',
// 	},
// 	payjoinText: { color: '#81868e', fontSize: 14 },
// });

// Confirm.propTypes = {
// 	navigation: PropTypes.shape({
// 		goBack: PropTypes.func,
// 		dismiss: PropTypes.func,
// 		navigate: PropTypes.func,
// 		dangerouslyGetParent: PropTypes.func,
// 	}),
// 	route: PropTypes.shape({
// 		params: PropTypes.object,
// 	}),
// };

// // Confirm.navigationOptions = navigationStyle({}, opts => ({ ...opts, title: loc.send.confirm_header }));

/* global alert */
import React, { Component } from 'react';
import {
	Alert,
	FlatList,
	Image,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	StyleSheet,
	View,
	ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';
import { BlueButton, SafeBlueArea, Text } from '@components';
// import navigationStyle from '../../components/navigationStyle';

// import { HodlHodlApi } from '../../class/hodl-hodl-api';
// import * as NavigationService from '../../NavigationService';
// import { BlueCurrentTheme } from '../../components/themes';
// import loc from '../../loc';
// import { BlueStorageContext } fromconst prompt = require('../../blue_modules/prompt');
//
export default class HodlHodlViewOffer extends Component {
	//   static contextType = BlueStorageContext;
	//   constructor(props) {
	//     super(props);

	//     const offerToDisplay = props.route.params.offerToDisplay;

	//     const horizontalScrollData = [];
	//     horizontalScrollData.push({
	//       id: 'window',
	//     //   header: loc.hodl.offer_window,
	//       body: offerToDisplay.payment_window_minutes + ' ' + 'loc.hodl.offer_minutes',
	//     });
	//     horizontalScrollData.push({
	//       id: 'minmax',
	//       header: 'loc.hodl.offer_minmax',
	//       body:
	//         offerToDisplay.min_amount.replace('.00', '') +
	//         ' - ' +
	//         offerToDisplay.max_amount.replace('.00', '') +
	//         ' ' +
	//         offerToDisplay.currency_code,
	//     });
	//     offerToDisplay.first_trade_limit &&
	//       horizontalScrollData.push({
	//         id: '1st trade',
	//         body: offerToDisplay.first_trade_limit.replace('.00', '') + ' ' + offerToDisplay.currency_code,
	//       });

	//     for (const paymentInstruction of offerToDisplay.payment_method_instructions || []) {
	//       horizontalScrollData.push({
	//         id: paymentInstruction.id + paymentInstruction.version,
	//         header: paymentInstruction.payment_method_type,
	//         body: paymentInstruction.payment_method_name,
	//       });
	//     }

	//     horizontalScrollData.push({ id: 'confirmations', header: 'loc.hodl.offer_confirmations', body: offerToDisplay.confirmations });

	//     this.state = {
	//       hodlApi: false,
	//       isLoading: true,
	//       horizontalScrollData,
	//       offerToDisplay,
	//     };
	//   }

	//   async componentDidMount() {
	//     console.log('wallets/hodlHodlViewOffer - componentDidMount');

	//     const hodlApiKey = await this.context.getHodlHodlApiKey();
	//     const hodlApi = new HodlHodlApi(hodlApiKey);
	//     this.setState({ hodlApi, hodlApiKey });

	//     this.setState({
	//       isLoading: false,
	//     });
	//   }

	//   doLogin = () => {
	//     const handleLoginCallback = (hodlApiKey, hodlHodlSignatureKey) => {
	//       this.context.setHodlHodlApiKey(hodlApiKey, hodlHodlSignatureKey);
	//       const HodlApi = new HodlHodlApi(hodlApiKey);
	//       this.setState({ HodlApi, hodlApiKey });
	//     };
	//     NavigationService.navigate('HodlHodl', { params: { cb: handleLoginCallback }, screen: 'HodlHodlLogin' });
	//   };

	//   async _onAcceptOfferPress(offer) {
	//     if (!this.state.hodlApiKey) {
	//       alert('Please login to HodlHodl to accept offers');
	//       this.doLogin();
	//       return;
	//     }
	//     const myself = await this.state.hodlApi.getMyself();
	//     if (!myself.encrypted_seed || myself.encrypted_seed.length < 10) {
	//       const buttons = [
	//         {
	//           text: loc._.yes,
	//           onPress: async a => {
	//             const sigKey = await this.context.getHodlHodlSignatureKey();
	//             if (!sigKey) {
	//               alert('Error: signature key not set'); // should never happen
	//               return;
	//             }

	//             const autologinKey = await this.state.hodlApi.requestAutologinToken(sigKey);
	//             const uri = 'https://hodlhodl.com/dashboards/settings?sign_in_token=' + autologinKey;
	//             NavigationService.navigate('HodlHodlWebview', { uri });
	//           },
	//         },
	//         {
	//           text: loc._.cancel,
	//           onPress: async a => {},
	//         },
	//       ];
	//       Alert.alert('HodlHodl', loc.hodl.offer_account_finish, buttons, {
	//         cancelable: true,
	//       });
	//       return;
	//     }

	//     // lets refetch offer to avoid errors 'version mismatch'
	//     const newOffer = await this.state.hodlApi.getOffer(offer.id);
	//     if (newOffer.id && newOffer.version && offer.version !== newOffer.version) {
	//       offer = newOffer;
	//       this.setState({ offerToDisplay: newOffer });
	//     }

	//     let fiatValue;
	//     try {
	//       fiatValue = await prompt(
	//         loc.formatString(loc.hodl.offer_promt_fiat, { currency: offer.currency_code }),
	//         loc.hodl.offer_promt_fiat_e,
	//         true,
	//         'numeric',
	//       );
	//     } catch (_) {
	//       return;
	//     }
	//     if (!fiatValue) return;

	//     const buttons = [];
	//     for (const paym of offer.payment_method_instructions) {
	//       buttons.push({
	//         text: paym.payment_method_name + ' (' + paym.payment_method_type + ')',
	//         onPress: async a => {
	//           let noError = true;
	//           this.setState({ isLoading: true });
	//           let contract;
	//           try {
	//             contract = await this.state.hodlApi.acceptOffer(offer.id, offer.version, paym.id, paym.version, fiatValue);
	//           } catch (Error) {
	//             noError = false;
	//             alert(Error);
	//           }
	//           this.setState({ isLoading: false });

	//           if (noError && contract.id) {
	//             await this.context.addHodlHodlContract(contract.id);
	//             NavigationService.navigate('HodlHodlMyContracts');
	//           }
	//         },
	//       });
	//     }
	//     Alert.alert(loc.hodl.offer_choosemethod, ``, buttons, { cancelable: true });
	//   }

	_renderHorizontalScrollItem(item) {
		return (
			<View style={styles.horizontalScrollWrapper}>
				<View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
					<Text style={styles.horizontalScrollIemHeader}>{'Amount'}</Text>
					<Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}>{'DA 452.00'}</Text>
				</View>
				{/* <Text style={styles.horizontalScrollItemBody}>{'item.item.body'}</Text> */}
			</View>
		);
	}

	render() {
		const colors = { foregroundColor: '#ffffff' };

		return false ? (
			<ActivityIndicator />
		) : (
			<SafeBlueArea>
				<ScrollView>
					<KeyboardAvoidingView
						enabled={!Platform.isPad}
						behavior={Platform.OS === 'ios' ? 'position' : null}
					>
						<View style={styles.modalContent}>
							<Text style={styles.Title}>{/* {'this.state.offerToDisplay.title'} */}</Text>

							{/* horizontal panel with bubbles */}
							<View style={styles.flexDirRow}>
								<View style={styles.grayTextContainerContainer}>
									<View style={styles.grayTextContainer}>
										<Icon
											name="preview"
											type="fontisto"
											size={16}
											color="#9BA0A9"
											containerStyle={styles.iconWithPadding}
										/>
										<Text style={styles.locationText}>{'Transaction Preview'}</Text>
									</View>
								</View>

								<View style={styles.greenTextContainerContainer}>
									<Text style={styles.priceText}>
										Send Money
										{/* {this.state.offerToDisplay.price} {this.state.offerToDisplay.currency_code} */}
									</Text>
								</View>
							</View>
							{/* end */}

							<View style={[styles.rowHeader, { marginTop: 50 }]}>
								<Text style={[styles.rowCaption, { color: colors.foregroundColor }]}>{'Account'}</Text>
								{/* <BlueCopyToClipboardButton stringToCopy={"from.filter(onlyUnique).join(', ')"} /> */}
								<Text style={styles.rowValue}>{`27671254408`}</Text>
							</View>
							<View style={styles.rowHeader}>
								<Text style={[styles.rowCaption, { color: colors.foregroundColor }]}>
									{'Invoice Number'}
								</Text>
								{/* <BlueCopyToClipboardButton stringToCopy={"from.filter(onlyUnique).join(', ')"} /> */}
								<Text style={styles.rowValue}>{`D55F8X5D`}</Text>
							</View>
							<View style={styles.rowHeader}>
								<Text style={[styles.rowCaption, { color: colors.foregroundColor }]}>
									{'Transaction ID'}
								</Text>
								{/* <BlueCopyToClipboardButton stringToCopy={"from.filter(onlyUnique).join(', ')"} /> */}
								<Text style={styles.rowValue}>{`S4D5D8D2`}</Text>
							</View>
							<View style={styles.rowHeader}>
								<Text style={[styles.rowCaption, { color: colors.foregroundColor }]}>{'Date'}</Text>
								{/* <BlueCopyToClipboardButton stringToCopy={"to.filter(onlyUnique).join(', ')"} /> */}
								<Text style={styles.rowValue}>{'24 February 2021,  05:56:00'}</Text>
							</View>
							<View style={styles.rowHeader}>
								<Text style={[styles.rowCaption, { color: colors.foregroundColor }]}>{'Fee'}</Text>
								{/* <BlueCopyToClipboardButton stringToCopy={"to.filter(onlyUnique).join(', ')"} /> */}
								<Text style={styles.rowValue}>{'585'}</Text>
							</View>

							<View style={{ marginVertical: 10 }}>
								<Text whiteColor bold style={{ marginVertical: 10, fontSize: 16 }}>
									Recepient Details
								</Text>
								<View style={{ width: '100%', height: 1, backgroundColor: 'white' }} />
							</View>
							<View style={styles.rowHeader}>
								<Text style={[styles.rowCaption, { color: colors.foregroundColor }]}>{'Name'}</Text>
								{/* <BlueCopyToClipboardButton stringToCopy={"from.filter(onlyUnique).join(', ')"} /> */}
								<Text style={styles.rowValue}>{`Batsirai`}</Text>
							</View>
							<View style={styles.rowHeader}>
								<Text style={[styles.rowCaption, { color: colors.foregroundColor }]}>{'Family'}</Text>
								{/* <BlueCopyToClipboardButton stringToCopy={"from.filter(onlyUnique).join(', ')"} /> */}
								<Text style={styles.rowValue}>{`Muchareva`}</Text>
							</View>
							<View style={styles.rowHeader}>
								<Text style={[styles.rowCaption, { color: colors.foregroundColor }]}>
									{'Transaction ID'}
								</Text>
								{/* <BlueCopyToClipboardButton stringToCopy={"from.filter(onlyUnique).join(', ')"} /> */}
								<Text style={styles.rowValue}>{`S4D5D8D2`}</Text>
							</View>

							{/* <View style={styles.rowHeader}>
								<Text style={[styles.rowCaption, { color: colors.foregroundColor }]}>{'Amount'}</Text>
								<Text style={styles.rowValue}>{'585'}</Text>
							</View> */}

							{/* <Text style={styles.descriptionText}>{'this.state.offerToDisplay.description'}</Text> */}

							<View style={styles._hr} />

							<FlatList
								horizontal
								data={['this.state.horizontalScrollData']}
								renderItem={this._renderHorizontalScrollItem}
								contentContainerStyle={{ width: '100%' }}
							/>

							<View style={styles._hr} />

							{/* avatar and rating */}
							<View style={styles.avatarWrapper}>
								<View>
									{/* <Image
                    style={styles.avatarImg}
                    source={
                      this.state.offerToDisplay.trader.avatar_url.endsWith('.svg')
                        ? require('../../img/hodlhodl-default-avatar.png')
                        : {
                            uri: this.state.offerToDisplay.trader.avatar_url,
                          }
                    }
                  /> */}
									{true && (
										<View style={styles.circleWhite}>
											<View style={styles.circleGreen} />
										</View>
									)}
								</View>
								<View style={styles.traderWrapper}>
									<View style={styles.flexDirRow}>
										{/* {true && (
											<Icon
												name="verified-user"
												type="material"
												size={14}
												color="#0071fc"
												containerStyle={styles.verifiedIcon}
											/>
										)} */}
										{/* <Text style={styles.nicknameText}>
											{'this.state.offerToDisplay.trader.login'}
										</Text> */}
									</View>
									<Text style={styles.traderRatingText}>{/* 67 */}</Text>
								</View>
							</View>
							{/* end */}

							{true ? (
								<View style={styles.acceptOfferButtonWrapperWrapper}>
									<View style={styles.acceptOfferButtonWrapper}>
										<View style={{ height: 10, opacity: 0 }} />
										<BlueButton
											title={'Continue'}
											onPress={async () => {
												this.props.navigation.navigate('Success');
												// await this._onAcceptOfferPress(this.state.offerToDisplay);
											}}
										/>
									</View>
								</View>
							) : (
								<View />
							)}
						</View>
					</KeyboardAvoidingView>
				</ScrollView>
			</SafeBlueArea>
		);
	}
}

HodlHodlViewOffer.propTypes = {
	route: PropTypes.shape({
		params: PropTypes.shape({
			offerToDisplay: PropTypes.object,
		}),
	}),
};

const styles = StyleSheet.create({
	rowCaption: {
		fontSize: Platform.OS === 'ios' ? 13 : 12,
		fontWeight: '500',
		marginBottom: 4,
	},
	rowValue: {
		marginBottom: 26,
		// color: 'grey',
		color: '#68bbe1',
		fontSize: Platform.OS === 'ios' ? 12 : 11,
	},
	rowHeader: {
		flex: 1,
		flexDirection: 'row',
		marginBottom: 4,
		justifyContent: 'space-between',
	},
	modalContent: {
		backgroundColor: 'transparent',
		padding: 22,
	},
	Title: {
		fontWeight: '600',
		fontSize: 24,
		color: '#0c2550',
	},
	circleWhite: {
		position: 'absolute',
		bottom: 0,
		right: 3,
		backgroundColor: 'transparent',
		width: 13,
		height: 13,
		borderRadius: 6,
	},
	circleGreen: {
		position: 'absolute',
		bottom: 1,
		right: 1,
		backgroundColor: '#00d327',
		width: 10,
		height: 10,
		borderRadius: 5,
	},
	grayTextContainerContainer: {
		backgroundColor: 'rgba(255,255,255,.1)',
		borderRadius: 20,
		height: 30,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 15,
		marginRight: 10,
		paddingRight: 20,
	},
	greenTextContainerContainer: {
		backgroundColor: '#d2f8d6',
		borderRadius: 20,
		height: 30,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 15,
		paddingLeft: 15,
		paddingRight: 15,
	},
	grayTextContainer: {
		width: '100%',
		alignItems: 'center',
		flex: 1,
		flexDirection: 'row',
	},
	priceText: {
		top: 0,
		color: '#000',
		fontSize: 14,
		fontWeight: '500',
	},
	descriptionText: {
		top: 0,
		color: '#818893',
		fontSize: 14,
		paddingTop: 20,
		paddingBottom: 20,
		fontWeight: '500',
		minHeight: 150,
		lineHeight: 23,
	},
	nicknameText: {
		color: '#0c2550',
		fontSize: 16,
		fontWeight: 'bold',
	},
	traderRatingText: {
		color: '#9AA0AA',
		fontSize: 12,
	},
	locationText: {
		color: '#9BA0A9',
	},
	horizontalScrollIemHeader: { color: '#fff' },
	// horizontalScrollIemHeader: { color: '#81868e' },
	horizontalScrollItemBody: { fontSize: 14, fontWeight: 'bold', color: '#0c2550' },
	horizontalScrollWrapper: {
		flexDirection: 'column',
		paddingTop: 20,
		paddingBottom: 20,
		// paddingRight: ,
		width: '100%',
	},
	flexDirRow: { flexDirection: 'row', alignSelf: 'center' },
	iconWithPadding: { paddingLeft: 16 },
	_hr: {
		borderWidth: 0,
		borderBottomWidth: 1,
		borderColor: '#ededed',
	},
	avatarImg: { width: 60, height: 60, borderRadius: 60 },
	avatarWrapper: {
		backgroundColor: 'transparent',
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: 32,
	},
	verifiedIcon: { marginTop: 3, marginRight: 5 },
	traderWrapper: { alignItems: 'center', marginTop: 8 },
	acceptOfferButtonWrapper: { width: '70%', alignItems: 'center' },
	acceptOfferButtonWrapperWrapper: { marginTop: 24, alignItems: 'center', marginBottom: 24 },
});

// HodlHodlViewOffer.navigationOptions = navigationStyle(
//   {
//     title: '',
//   },
//   (options, { theme }) => ({
//     ...options,
//     headerStyle: {
//       ...options.headerStyle,
//       backgroundColor: theme.colors.customHeader,
//     },
//   }),
// );
