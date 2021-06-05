/* eslint react/prop-types: "off", react-native/no-inline-styles: "off" */
import React, { useState, useMemo, useCallback, useContext, useRef, useEffect } from 'react';
import { Icon, ListItem, Avatar } from 'react-native-elements';
import {
	ActivityIndicator,
	Linking,
	StyleSheet,
	Switch,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
	I18nManager,
} from 'react-native';
import ToolTipMenu, { TransactionPendingIcon } from '../TransactionPendingIcon';
import Clipboard from 'expo-clipboard';
import { transactions } from '@constants';
import { currencyFormatter } from '@config';
// import * as NavigationService from './NavigationService';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useTheme } from '@react-navigation/native';
// import Lnurl from './class/lnurl';
// import { BlueStorageContext } from './blue_modules/storage-context';

import { transactionTimeToReadable, formatBalanceWithoutSuffix } from '@config';

export const BlueTransactionListItem = React.memo(({ item, itemPriceUnit = 12, timeElapsed }) => {
	const [subtitleNumberOfLines, setSubtitleNumberOfLines] = useState(1);
	const { colors } = useTheme();
	const { navigate } = useNavigation();
	const wallets = [];
	const containerStyle = useMemo(
		() => ({
			backgroundColor: 'transparent',
			borderBottomColor: colors.lightBorder,
			paddingTop: 16,
			paddingBottom: 16,
			paddingRight: 0,
		}),
		[colors.lightBorder]
	);
	const toolTip = useRef();
	const copyToolTip = useRef();
	const listItemRef = useRef();

	/// title of trans
	const title = useMemo(() => {
		if (item?.confirmations === 0) {
			return 'Pending';
		} else {
			return `${item?.name} ~ ${item?.recepient} `;
			return transactionTimeToReadable(item?.received);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [item?.confirmations, item?.received]);

	const txMemo = '';
	//  subtitles of the transactions
	const subtitle = useMemo(() => {
		// let sub = item.confirmations < 7 ? loc.formatString('Conf: {number}', { number: item.confirmations }) : '';
		let sub = '';
		if (sub !== '') sub += ' ';
		sub += txMemo;
		if (item?.memo) sub += item?.memo;
		return '5 days ago';
		// return sub || null;
	}, [txMemo, item?.memo]);
	//  [txMemo, item.confirmations, item.memo]);

	const rowTitle = useMemo(() => {
		return currencyFormatter(item?.amount);
		if (item?.type === 'user_invoice' || item?.type === 'payment_request') {
			if (isNaN(item?.value)) {
				item.value = '0';
			}
			const currentDate = new Date();
			const now = (currentDate.getTime() / 1000) | 0;
			const invoiceExpiration = item.timestamp + item.expire_time;

			if (invoiceExpiration > now) {
				return formatBalanceWithoutSuffix(item?.value && item?.value, itemPriceUnit, true).toString();
			} else if (invoiceExpiration < now) {
				if (item.ispaid) {
					return formatBalanceWithoutSuffix(item?.value && item?.value, itemPriceUnit, true).toString();
				} else {
					return 'expired';
				}
			}
		} else {
			return formatBalanceWithoutSuffix(item?.value && item?.value, itemPriceUnit, true).toString();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [item, itemPriceUnit]);

	const rowTitleStyle = useMemo(() => {
		let color = colors.successColor;
		if (item?.type === transactions[0]) color = 'red';
		if (item?.type === transactions[3]) color = 'red';
		if (item?.type === transactions[4]) color = 'red';
		if (item?.type === transactions[5]) color = 'red';

		if (item?.type === 'user_invoice' || item?.type === 'payment_request') {
			const currentDate = new Date();
			const now = (currentDate.getTime() / 1000) | 0;
			const invoiceExpiration = item.timestamp + item.expire_time;

			if (invoiceExpiration > now) {
				color = colors.successColor;
			} else if (invoiceExpiration < now) {
				if (item.ispaid) {
					color = colors.successColor;
				} else {
					color = '#9AA0AA';
				}
			}
		} else if (item?.value / 100000000 < 0) {
			color = colors.foregroundColor;
		}

		return {
			color,
			fontSize: 14,
			fontWeight: '600',
			textAlign: 'right',
			width: 96,
		};
	}, [item, colors.foregroundColor, colors.successColor]);

	const avatar = useMemo(() => {
		if (item?.type === transactions[0]) {
			return (
				<View style={{ width: 25 }}>
					<BlueTransactionOutgoingIcon />
				</View>
			);
			return (
				<View style={{ width: 25 }}>
					<TransactionPendingIcon />
				</View>
			);
			return (
				<View style={{ width: 25 }}>
					<BlueTransactionExpiredIcon />
				</View>
			);
		}
		if (item?.type === transactions[1]) {
			return (
				<View style={{ width: 25 }}>
					<BlueTransactionIncomingIcon />
				</View>
			);
			return (
				<View style={{ width: 25 }}>
					<TransactionPendingIcon />
				</View>
			);
			return (
				<View style={{ width: 25 }}>
					<BlueTransactionExpiredIcon />
				</View>
			);
		}
		if (item?.type === transactions[2]) {
			return (
				<View style={{ width: 25 }}>
					<BlueTransactionIncomingIcon />
				</View>
			);
			return (
				<View style={{ width: 25 }}>
					<TransactionPendingIcon />
				</View>
			);
			return (
				<View style={{ width: 25 }}>
					<BlueTransactionExpiredIcon />
				</View>
			);
		}
		if (item?.type === transactions[3]) {
			return (
				<View style={{ width: 25 }}>
					<BlueTransactionOutgoingIcon />
				</View>
			);
			return (
				<View style={{ width: 25 }}>
					<TransactionPendingIcon />
				</View>
			);
			return (
				<View style={{ width: 25 }}>
					<BlueTransactionExpiredIcon />
				</View>
			);
		}
		if (item?.type === transactions[4]) {
			return (
				<View style={{ width: 25 }}>
					<BlueTransactionOffchainIcon />
				</View>
			);
			return (
				<View style={{ width: 25 }}>
					<TransactionPendingIcon />
				</View>
			);
			return (
				<View style={{ width: 25 }}>
					<BlueTransactionExpiredIcon />
				</View>
			);
		}
		if (item?.type === transactions[5]) {
			return (
				<View style={{ width: 25 }}>
					<BlueTransactionOffchainIcon />
				</View>
			);
			return (
				<View style={{ width: 25 }}>
					<TransactionPendingIcon />
				</View>
			);
			return (
				<View style={{ width: 25 }}>
					<BlueTransactionExpiredIcon />
				</View>
			);
		}
		// is it lightning refill tx?
		// return <BlueTransactionOutgoingIcon />;

		// if (item.category === 'receive' && item.confirmations < 3) {
		if (item?.category === 'receive' && item?.confirmations < 3) {
			return (
				<View style={{ width: 25 }}>
					<TransactionPendingIcon />
				</View>
			);
		}

		if (item?.type && item?.type === 'bitcoind_tx') {
			return (
				<View style={{ width: 25 }}>
					<TransactionPendingIcon />
				</View>
			);
			return (
				<View style={{ width: 25 }}>
					<BlueTransactionExpiredIcon />
				</View>
			);
		}
		if (item?.type === 'paid_invoice') {
			// is it lightning offchain payment?
			return (
				<View style={{ width: 25 }}>
					<BlueTransactionOffchainIcon />
				</View>
			);
		}

		if (item?.type === 'user_invoice' || item?.type === 'payment_request') {
			if (!item.ispaid) {
				const currentDate = new Date();
				const now = (currentDate.getTime() / 1000) | 0;
				const invoiceExpiration = item.timestamp + item.expire_time;
				if (invoiceExpiration < now) {
					return (
						<View style={{ width: 25 }}>
							<BlueTransactionExpiredIcon />
						</View>
					);
				}
			} else {
				return (
					<View style={{ width: 25 }}>
						<BlueTransactionOffchainIncomingIcon />
					</View>
				);
			}
		}

		if (!item?.confirmations) {
			return (
				<View style={{ width: 25 }}>
					<TransactionPendingIcon />
				</View>
			);
		} else if (item?.value < 0) {
			return (
				<View style={{ width: 25 }}>
					<BlueTransactionOutgoingIcon />
				</View>
			);
		} else {
			return (
				<View style={{ width: 25 }}>
					<BlueTransactionIncomingIcon />
				</View>
			);
		}
	}, [item]);

	useEffect(() => {
		setSubtitleNumberOfLines(1);
	}, [subtitle]);

	const onPress = useCallback(async () => {
		if (item?.hash) {
			navigate('ViewInvoice', { hash: item?.hash });
		} else if (item?.type === 'user_invoice' || item?.type === 'payment_request' || item?.type === 'paid_invoice') {
			const lightningWallet = wallets.filter((wallet) => {
				if (typeof wallet === 'object') {
					if ('secret' in wallet) {
						return wallet.getSecret() === item.fromWallet;
					}
				}
			});
			if (lightningWallet.length === 1) {
				try {
					// is it a successful lnurl-pay?
					// const LN = new Lnurl(false, AsyncStorage);
					let paymentHash = item.payment_hash;
					if (typeof paymentHash === 'object') {
						paymentHash = Buffer.from(paymentHash.data).toString('hex');
					}
					// const loaded = await LN.loadSuccessfulPayment(paymentHash);
					// if (loaded) {
					// 	// NavigationService.navigate('ScanLndInvoiceRoot', {
					// 	// 	screen: 'LnurlPaySuccess',
					// 	// 	params: {
					// 	// 		paymentHash,
					// 	// 		justPaid: false,
					// 	// 		fromWalletID: lightningWallet[0].getID(),
					// 	// 	},
					// 	// });
					// 	return;
					// }
				} catch (e) {
					console.log(e);
				}

				navigate('LNDViewInvoice', {
					invoice: item,
					walletID: lightningWallet[0].getID(),
					isModal: false,
				});
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [item, wallets]);

	const onLongPress = useCallback(() => {
		toolTip.current.showMenu();
	}, []);

	const handleOnExpandNote = useCallback(() => {
		setSubtitleNumberOfLines(0);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [subtitle]);

	const subtitleProps = useMemo(() => ({ numberOfLines: subtitleNumberOfLines }), [subtitleNumberOfLines]);
	const handleOnCopyTap = useCallback(() => {
		toolTip.current.hideMenu();
		setTimeout(copyToolTip.current.showMenu, 205);
	}, []);
	const handleOnCopyAmountTap = useCallback(() => Clipboard.setString(rowTitle.replace(/[\s\\-]/g, '')), [rowTitle]);
	const handleOnCopyTransactionID = useCallback(() => Clipboard.setString(item?.hash), [item?.hash]);
	const handleOnCopyNote = useCallback(() => Clipboard.setString(subtitle), [subtitle]);
	const handleOnViewOnBlockExplorer = useCallback(() => {
		const url = `https://blockstream.info/tx/${item?.hash}`;
		Linking.canOpenURL(url).then((supported) => {
			if (supported) {
				Linking.openURL(url);
			}
		});
	}, [item?.hash]);
	const handleCopyOpenInBlockExplorerPress = useCallback(() => {
		Clipboard.setString(`https://blockstream.info/tx/${item?.hash}`);
	}, [item?.hash]);
	const toolTipActions = useMemo(() => {
		const actions = [
			{
				id: 'copy',
				text: 'details_copy',
				onPress: handleOnCopyTap,
			},
		];
		if (item?.hash) {
			actions.push({
				id: 'open_in_blockExplorer',
				text: 'details_show_in_block_explorer',
				onPress: handleOnViewOnBlockExplorer,
			});
		}
		if (subtitle && subtitleNumberOfLines === 1) {
			actions.push({
				id: 'expandNote',
				text: 'expand_note',
				onPress: handleOnExpandNote,
			});
		}
		return actions;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [item?.hash, subtitle, rowTitle, subtitleNumberOfLines]);
	const copyToolTipActions = useMemo(() => {
		const actions = [];
		if (rowTitle !== 'loc.lnd.expired') {
			actions.push({
				id: 'copyAmount',
				text: 'create_amount',
				onPress: handleOnCopyAmountTap,
			});
		}

		if (item?.hash) {
			actions.push(
				{
					id: 'copyTX_ID',
					text: 'txid',
					onPress: handleOnCopyTransactionID,
				},
				{
					id: 'copy_blockExplorer',
					text: 'block_explorer_link',
					onPress: handleCopyOpenInBlockExplorerPress,
				}
			);
		}
		if (subtitle) {
			actions.push({
				id: 'copyNote',
				text: 'note',
				onPress: handleOnCopyNote,
			});
		}
		return actions;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [toolTipActions]);

	return (
		<TouchableWithoutFeedback ref={listItemRef}>
			<View style={{ marginHorizontal: 4 }}>
				<ToolTipMenu ref={toolTip} anchorRef={listItemRef} actions={toolTipActions} />
				<ToolTipMenu ref={copyToolTip} anchorRef={listItemRef} actions={copyToolTipActions} />
				<BlueListItem
					leftAvatar={avatar}
					title={title}
					subtitleNumberOfLines={subtitleNumberOfLines}
					subtitle={subtitle}
					subtitleProps={subtitleProps}
					onPress={() => {
						navigate('TransactionsStatus');
					}}
					chevron={false}
					Component={TouchableOpacity}
					rightTitle={rowTitle}
					rightTitleStyle={rowTitleStyle}
					containerStyle={containerStyle}
					onLongPress={onLongPress}
				/>
			</View>
		</TouchableWithoutFeedback>
	);
});

export const BlueListItem = React.memo((props) => {
	const { colors } = useTheme();

	return (
		<ListItem
			containerStyle={props.containerStyle ?? { backgroundColor: 'transparent' }}
			Component={props.Component ?? TouchableOpacity}
			bottomDivider={props.bottomDivider !== undefined ? props.bottomDivider : true}
			topDivider={props.topDivider !== undefined ? props.topDivider : false}
			testID={props.testID}
			onPress={props.onPress}
			onLongPress={props.onLongPress}
			disabled={props.disabled}
			accessible={props.switch === undefined}
		>
			{props.leftAvatar && <Avatar>{props.leftAvatar}</Avatar>}
			{props.leftIcon && <Avatar icon={props.leftIcon} />}
			<ListItem.Content>
				<ListItem.Title
					style={{
						color: props.disabled ? colors.buttonDisabledTextColor : colors.foregroundColor,
						fontSize: 16,
						fontWeight: '500',
					}}
					numberOfLines={0}
					accessible={props.switch === undefined}
				>
					{props.title}
				</ListItem.Title>
				{props.subtitle && (
					<ListItem.Subtitle
						numberOfLines={props.subtitleNumberOfLines ?? 1}
						accessible={props.switch === undefined}
						style={{
							flexWrap: 'wrap',
							color: colors.alternativeTextColor,
							fontWeight: '400',
							fontSize: 14,
						}}
					>
						{props.subtitle}
					</ListItem.Subtitle>
				)}
			</ListItem.Content>
			<ListItem.Content right>
				{props.rightTitle && (
					<ListItem.Title style={props.rightTitleStyle} numberOfLines={0} right>
						{props.rightTitle}
					</ListItem.Title>
				)}
			</ListItem.Content>
			{props.isLoading ? (
				<ActivityIndicator />
			) : (
				<>
					{props.chevron && (
						<ListItem.Chevron iconStyle={{ transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }] }} />
					)}
					{props.rightIcon && <Avatar icon={props.rightIcon} />}
					{props.switch && (
						<Switch
							{...props.switch}
							accessibilityLabel={props.title}
							accessible
							accessibilityRole="switch"
						/>
					)}
					{props.checkmark && (
						<ListItem.CheckBox iconType="octaicon" checkedColor="#0070FF" checkedIcon="check" checked />
					)}
				</>
			)}
		</ListItem>
	);
});

export const BlueTransactionOffchainIcon = (props) => {
	const { colors } = useTheme();
	const stylesBlueIconHooks = StyleSheet.create({
		ballOutgoingWithoutRotate: {
			backgroundColor: colors.ballOutgoing,
		},
	});
	return (
		<View {...props}>
			<View style={stylesBlueIcon.boxIncoming}>
				<View style={[stylesBlueIcon.ballOutgoingWithoutRotate, stylesBlueIconHooks.ballOutgoingWithoutRotate]}>
					<Icon
						{...props}
						name="bolt"
						size={16}
						type="font-awesome"
						color={colors.outgoingForegroundColor}
						iconStyle={{ left: 0, marginTop: 6 }}
					/>
				</View>
			</View>
		</View>
	);
};

export const BlueTransactionExpiredIcon = (props) => {
	const { colors } = useTheme();
	const stylesBlueIconHooks = StyleSheet.create({
		ballOutgoingExpired: {
			backgroundColor: colors.ballOutgoingExpired,
		},
	});
	return (
		<View {...props}>
			<View style={stylesBlueIcon.boxIncoming}>
				<View style={[stylesBlueIcon.ballOutgoingExpired, stylesBlueIconHooks.ballOutgoingExpired]}>
					<Icon
						{...props}
						name="clock"
						size={16}
						type="octicon"
						color="#9AA0AA"
						iconStyle={{ left: 0, top: 0 }}
					/>
				</View>
			</View>
		</View>
	);
};

export const BlueTransactionOffchainIncomingIcon = (props) => {
	const { colors } = useTheme();
	const stylesBlueIconHooks = StyleSheet.create({
		ballIncomingWithoutRotate: {
			backgroundColor: colors.ballReceive,
		},
	});
	return (
		<View {...props}>
			<View style={stylesBlueIcon.boxIncoming}>
				<View style={[stylesBlueIcon.ballIncomingWithoutRotate, stylesBlueIconHooks.ballIncomingWithoutRotate]}>
					<Icon
						{...props}
						name="bolt"
						size={16}
						type="font-awesome"
						color={colors.incomingForegroundColor}
						iconStyle={{ left: 0, marginTop: 6 }}
					/>
				</View>
			</View>
		</View>
	);
};

export const BlueTransactionOutgoingIcon = (props) => {
	const { colors } = useTheme();
	const stylesBlueIconHooks = StyleSheet.create({
		ballOutgoing: {
			backgroundColor: colors.ballOutgoing,
		},
	});
	return (
		<View {...props}>
			<View style={stylesBlueIcon.boxIncoming}>
				<View style={[stylesBlueIcon.ballOutgoing, stylesBlueIconHooks.ballOutgoing]}>
					<Icon
						{...props}
						name="arrow-down"
						size={16}
						type="font-awesome"
						color={colors.outgoingForegroundColor}
					/>
				</View>
			</View>
		</View>
	);
};

export const BlueTransactionIncomingIcon = (props) => {
	const { colors } = useTheme();
	const stylesBlueIconHooks = StyleSheet.create({
		ballIncoming: {
			backgroundColor: colors.ballReceive,
		},
	});
	return (
		<View {...props}>
			<View style={stylesBlueIcon.boxIncoming}>
				<View style={[stylesBlueIcon.ballIncoming, stylesBlueIconHooks.ballIncoming]}>
					<Icon
						{...props}
						name="arrow-down"
						size={16}
						type="font-awesome"
						color={colors.incomingForegroundColor}
					/>
				</View>
			</View>
		</View>
	);
};

export const BlueTransactionPendingIcon = (props) => {
	const { colors } = useTheme();

	const stylesBlueIconHooks = StyleSheet.create({
		ball: {
			backgroundColor: colors.buttonBackgroundColor,
		},
	});
	return (
		<View {...props}>
			<View style={stylesBlueIcon.boxIncoming}>
				<View style={[stylesBlueIcon.ball, stylesBlueIconHooks.ball]}>
					<Icon
						{...props}
						name="kebab-horizontal"
						size={16}
						type="octicon"
						color={colors.foregroundColor}
						iconStyle={{ left: 0, top: 7 }}
					/>
				</View>
			</View>
		</View>
	);
};

const stylesBlueIcon = StyleSheet.create({
	container: {
		flex: 1,
	},
	box1: {
		position: 'relative',
		top: 15,
	},
	box: {
		alignSelf: 'flex-end',
		paddingHorizontal: 14,
		paddingTop: 8,
	},
	boxIncoming: {
		position: 'relative',
	},
	ball: {
		width: 30,
		height: 30,
		borderRadius: 15,
	},
	ballIncoming: {
		width: 30,
		height: 30,
		borderRadius: 15,
		transform: [{ rotate: '-45deg' }],
		justifyContent: 'center',
	},
	ballIncomingWithoutRotate: {
		width: 30,
		height: 30,
		borderRadius: 15,
	},
	ballReceive: {
		width: 30,
		height: 30,
		borderBottomLeftRadius: 15,
		transform: [{ rotate: '-45deg' }],
	},
	ballOutgoing: {
		width: 30,
		height: 30,
		borderRadius: 15,
		transform: [{ rotate: '225deg' }],
		justifyContent: 'center',
	},
	ballOutgoingWithoutRotate: {
		width: 30,
		height: 30,
		borderRadius: 15,
	},
	ballOutgoingExpired: {
		width: 30,
		height: 30,
		borderRadius: 15,
		justifyContent: 'center',
	},
	ballTransparrent: {
		width: 30,
		height: 30,
		borderRadius: 15,
		backgroundColor: 'transparent',
	},
	ballDimmed: {
		width: 30,
		height: 30,
		borderRadius: 15,
		backgroundColor: 'gray',
	},
});
