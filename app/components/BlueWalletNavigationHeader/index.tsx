/* eslint react/prop-types: "off", react-native/no-inline-styles: "off" */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native-elements';
import { Image, TouchableOpacity, View, InteractionManager, I18nManager } from 'react-native';
import { BlueClipboard, WalletGradient } from '@config';
import { LinearGradient } from 'expo-linear-gradient';
import { currencyFormatter } from '../../config';
// import ToolTipMenu from './components/TooltipMenu';

export class BlueWalletNavigationHeader extends Component {
	static propTypes = {
		wallet: PropTypes.shape().isRequired,
		onWalletUnitChange: PropTypes.func,
	};

	static getDerivedStateFromProps(props) {
		return { wallet: props.wallet, onWalletUnitChange: props.onWalletUnitChange };
	}

	// static contextType = BlueStorageContext;
	walletBalanceText = React.createRef();
	tooltip = React.createRef();
	// // constructor(props) {
	// //   super(props);
	// //   this.state = {
	// //     wallet: props.wallet,
	// //     walletPreviousPreferredUnit: props.wallet.getPreferredBalanceUnit(),
	// //     allowOnchainAddress: false,
	// //   };
	// // }

	// // handleCopyPress = _item => {
	// //     BlueClipboard.setString(formatBalance(this.state.wallet.getBalance(), this.state.wallet.getPreferredBalanceUnit()).toString());
	// // };

	// // componentDidUpdate(prevState) {
	// //   InteractionManager.runAfterInteractions(() => {
	// //     if (prevState.wallet.getID() !== this.state.wallet.getID() && this.state.wallet.type === LightningCustodianWallet.type) {
	// //       this.verifyIfWalletAllowsOnchainAddress();
	// //     }
	// //   });
	// // }

	// // verifyIfWalletAllowsOnchainAddress = () => {
	// //   if (this.state.wallet.type === LightningCustodianWallet.type) {
	// //     this.state.wallet
	// //       .allowOnchainAddress()
	// //       .then(value => this.setState({ allowOnchainAddress: value }))
	// //       .catch(e => {
	// //         console.log('This Lndhub wallet does not have an onchain address API.');
	// //         this.setState({ allowOnchainAddress: false });
	// //       });
	// //   }
	// // };

	// // componentDidMount() {
	// //   this.verifyIfWalletAllowsOnchainAddress();
	// // }

	// handleBalanceVisibility = async _item => {
	//   const wallet = this.state.wallet;

	//   const isBiometricsEnabled = await Biometric.isBiometricUseCapableAndEnabled();

	//   if (isBiometricsEnabled && wallet.hideBalance) {
	//     if (!(await Biometric.unlockWithBiometrics())) {
	//       return this.props.navigation.goBack();
	//     }
	//   }

	//   wallet.hideBalance = !wallet.hideBalance;
	//   this.setState({ wallet });
	//   await this.context.saveToDisk();
	// };

	// changeWalletBalanceUnit = () => {
	//   let walletPreviousPreferredUnit = this.state.wallet.getPreferredBalanceUnit();
	//   const wallet = this.state.wallet;
	//   if (walletPreviousPreferredUnit === BitcoinUnit.BTC) {
	//     wallet.preferredBalanceUnit = BitcoinUnit.SATS;
	//     walletPreviousPreferredUnit = BitcoinUnit.BTC;
	//   } else if (walletPreviousPreferredUnit === BitcoinUnit.SATS) {
	//     wallet.preferredBalanceUnit = BitcoinUnit.LOCAL_CURRENCY;
	//     walletPreviousPreferredUnit = BitcoinUnit.SATS;
	//   } else if (walletPreviousPreferredUnit === BitcoinUnit.LOCAL_CURRENCY) {
	//     wallet.preferredBalanceUnit = BitcoinUnit.BTC;
	//     walletPreviousPreferredUnit = BitcoinUnit.BTC;
	//   } else {
	//     wallet.preferredBalanceUnit = BitcoinUnit.BTC;
	//     walletPreviousPreferredUnit = BitcoinUnit.BTC;
	//   }

	//   this.setState({ wallet, walletPreviousPreferredUnit: walletPreviousPreferredUnit }, () => {
	//     this.props.onWalletUnitChange(wallet);
	//   });
	// };

	manageFundsPressed = () => {
		this.props.onManageFundsPressed();
	};

	// showToolTipMenu = () => {
	//   this.tooltip.current.showMenu();
	// };

	render() {
		const balance = 0;
		// !this.state.wallet.hideBalance &&
		// formatBalance(this.state.wallet.getBalance(), this.state.wallet.getPreferredBalanceUnit(), true).toString();

		return (
			<LinearGradient
				colors={WalletGradient.gradientsFor(this.props.type)}
				style={{ padding: 15, minHeight: 140, justifyContent: 'center' }}
				//   {...WalletGradient.linearGradientProps(this.state.wallet)}
			>
				<Image
					source={(() => {
						return I18nManager.isRTL ? require('./vault-shape-rtl.png') : require('./vault-shape.png');
						// switch (this.state.wallet) {
						// 	case 'LightningCustodianWallet.type':
						// 		return I18nManager.isRTL ? require('./lnd-shape-rtl.png') : require('./lnd-shape.png');
						// 	case 'MultisigHDWallet.type':
						// 		return I18nManager.isRTL
						// 			? require('./vault-shape-rtl.png')
						// 			: require('./vault-shape.png');
						// 	default:
						// 		return I18nManager.isRTL ? require('./lnd-shape-rtl.png') : require('./lnd-shape.png');
						// }
					})()}
					style={{
						width: 99,
						height: 94,
						position: 'absolute',
						bottom: 0,
						right: 0,
					}}
				/>
				<Text
					testID="WalletLabel"
					numberOfLines={1}
					style={{
						backgroundColor: 'transparent',
						fontSize: 19,
						color: '#fff',
						writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
					}}
				>
					{'My Balance '}
				</Text>
				{/* <ToolTipMenu
            ref={this.tooltip}
            anchorRef={this.walletBalanceText}
            actions={
              this.state.wallet.hideBalance
                ? [
                    {
                      id: 'walletBalanceVisibility',
                      text: 'loc.transactions.details_balance_show',
                    //   onPress: this.handleBalanceVisibility,
                    },
                  ]
                : [
                    {
                      id: 'walletBalanceVisibility',
                      text: 'loc.transactions.details_balance_hide',
                    //   onPress: this.handleBalanceVisibility,
                    },
                    {
                      id: 'copyToClipboard',
                      text: 'loc.transactions.details_copy',
                    //   onPress: this.handleCopyPress,
                    },
                  ]
            }
          /> */}
				<TouchableOpacity
				// style={styles.balance}
				// onPress={this.changeWalletBalanceUnit}
				// ref={this.walletBalanceText}
				// onLongPress={this.showToolTipMenu}
				>
					{false ? (
						<View></View>
					) : (
						//   <BluePrivateBalance />
						<Text
							testID="WalletBalance"
							key={balance} // force component recreation on balance change. To fix right-to-left languages, like Farsi
							numberOfLines={1}
							adjustsFontSizeToFit
							style={{
								backgroundColor: 'transparent',
								fontWeight: 'bold',
								fontSize: 36,
								color: '#fff',
								writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
							}}
						>
							{currencyFormatter(525)}
						</Text>
					)}
				</TouchableOpacity>
				{/* {this.state.wallet.type === LightningCustodianWallet.type && this.state.allowOnchainAddress && ( */}
				{true && true && (
					<TouchableOpacity onPress={this.manageFundsPressed}>
						<View
							style={{
								marginTop: 14,
								marginBottom: 10,
								// backgroundColor: 'rgba(255,255,255,0.2)',
								borderRadius: 9,
								minHeight: 39,
								alignSelf: 'flex-start',
								paddingHorizontal: 12,
								height: 39,
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							{/* <Text
								style={{
									fontWeight: '500',
									fontSize: 14,
									color: '#FFFFFF',
								}}
							>
								{'loc.lnd.title'}
							</Text> */}
						</View>
					</TouchableOpacity>
				)}
				{/* {this.state.wallet.type === MultisigHDWallet.type && ( */}
				{true && (
					<TouchableOpacity onPress={this.manageFundsPressed}>
						<View
							style={{
								marginTop: 14,
								marginBottom: 10,
								backgroundColor: 'rgba(255,255,255,0.2)',
								borderRadius: 9,
								minHeight: 39,
								alignSelf: 'flex-start',
								paddingHorizontal: 12,
								height: 39,
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Text
								style={{
									fontWeight: '500',
									fontSize: 14,
									color: '#FFFFFF',
								}}
							>
								{'Manage My Funds'}
							</Text>
						</View>
					</TouchableOpacity>
				)}
			</LinearGradient>
		);
	}
}
