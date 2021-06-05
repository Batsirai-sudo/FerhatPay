import React, { useEffect, useRef, useState } from 'react';
import {
	View,
	ScrollView,
	TouchableOpacity,
	Linking,
	StatusBar,
	StyleSheet,
	Platform,
} from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import {
	SafeBlueArea,
	Text,
	HeaderDefaultSub,
} from '@components';

// import navigationStyle from '../../components/navigationStyle';
export const BlueCopyToClipboardButton = ({ stringToCopy, displayText = false }) => {
	return (
		<TouchableOpacity
			onPress={
				() => {}
				//  Clipboard.setString(stringToCopy)
			}
		>
			<Text style={{ fontSize: 13, fontWeight: '400', color: '#68bbe1' }}>
				{`displayText || loc.transactions.details_copy`}
			</Text>
		</TouchableOpacity>
	);
};
// import HandoffComponent from '../../components/handoff';
// import loc from '../../loc';
// import { BlueStorageContext } from '../../blue_modules/storage-context';
// import Clipboard from '@react-native-clipboard/clipboard';
// import ToolTipMenu from '../../components/TooltipMenu';
// const dayjs = require('dayjs');

function onlyUnique(value, index, self) {
	return self.indexOf(value) === index;
}

function arrDiff(a1, a2) {
	const ret = [];
	for (const v of a2) {
		if (a1.indexOf(v) === -1) {
			ret.push(v);
		}
	}
	return ret;
}

const TransactionsDetails = () => {
	const { setOptions } = useNavigation();
	// const { hash } = useRoute().params;
	// const { saveToDisk, txMetadata, wallets, getTransactions } = useContext(BlueStorageContext);
	const [from, setFrom] = useState();
	const [to, setTo] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const [tx, setTX] = useState();
	const [memo, setMemo] = useState();
	const { colors } = useTheme();
	const openTransactionOnBlockExplorerRef = useRef();
	const toolTip = useRef();
	const stylesHooks = StyleSheet.create({
		rowCaption: {
			color: colors.foregroundColor,
		},
		txId: {
			color: colors.foregroundColor,
		},
		txLink: {
			color: colors.alternativeTextColor2,
		},
		saveText: {
			color: colors.alternativeTextColor2,
		},
		memoTextInput: {
			borderColor: colors.formBorder,
			borderBottomColor: colors.formBorder,
			backgroundColor: colors.inputBackgroundColor,
		},
	});

	useEffect(() => {
		setOptions({
			headerRight: () => (
				<TouchableOpacity disabled={isLoading} style={styles.save} onPress={() => {}}>
					{/* <Text style={stylesHooks.saveText}>{'loc.wallets.details_save'}</Text> */}
				</TouchableOpacity>
			),
			headerStyle: {
				borderBottomWidth: 0,
				elevation: 0,
				shadowOpacity: 0,
				shadowOffset: { height: 0, width: 0 },
				backgroundColor: colors.customHeader,
			},
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [colors, isLoading, memo]);

	// useEffect(() => {
	//   let foundTx = {};
	//   let from = [];
	//   let to = [];
	//   for (const tx of getTransactions(null, Infinity, true)) {
	//     if (tx.hash === hash) {
	//       foundTx = tx;
	//       for (const input of foundTx.inputs) {
	//         from = from.concat(input.addresses);
	//       }
	//       for (const output of foundTx.outputs) {
	//         if (output.addresses) to = to.concat(output.addresses);
	//         if (output.scriptPubKey && output.scriptPubKey.addresses) to = to.concat(output.scriptPubKey.addresses);
	//       }
	//     }
	//   }

	//   for (const w of wallets) {
	//     for (const t of w.getTransactions()) {
	//       if (t.hash === hash) {
	//         console.log('tx', hash, 'belongs to', w.getLabel());
	//       }
	//     }
	//   }
	//   if (txMetadata[foundTx.hash]) {
	//     if (txMetadata[foundTx.hash].memo) {
	//       setMemo(txMetadata[foundTx.hash].memo);
	//     }
	//   }

	//   setTX(foundTx);
	//   setFrom(from);
	//   setTo(to);
	//   setIsLoading(false);
	//   // eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [hash, wallets]);

	// const handleOnSaveButtonTapped = () => {
	//   Keyboard.dismiss();
	//   txMetadata[tx.hash] = { memo };
	//   saveToDisk().then(_success => alert('loc.transactions.transaction_note_saved'));
	// };

	const handleOnOpenTransactionOnBlockExporerTapped = () => {
		const url = `https://blockstream.info/tx/${tx.hash}`;
		Linking.canOpenURL(url).then((supported) => {
			if (supported) {
				Linking.openURL(url);
			}
		});
	};

	// const handleCopyPress = () => {
	//   Clipboard.setString(`https://blockstream.info/tx/${tx.hash}`);
	// };

	const showToolTipMenu = () => {
		// toolTip.current.showMenu();
	};

	// if (false) {
	// 	return <ActivityIndicator />;
	// }

	return (
		<SafeBlueArea>
			{/* <HandoffComponent
        title={`Bitcoin Transaction ${tx.hash}`}
        type="io.bluewallet.bluewallet"
        url={`https://blockstream.info/tx/${tx.hash}`}
      /> */}
			<StatusBar barStyle="default" />
			<ScrollView style={styles.scroll}>
				<View style={{ padding: 20 }}>
					<View>
						{/* <TextInput
							placeholder={'loc.send.details_note_placeholder'}
							value={memo}
							placeholderTextColor="#81868e"
							style={[styles.memoTextInput, stylesHooks.memoTextInput]}
							onChangeText={setMemo}
						/> */}
						<View style={{ height: 20, opacity: 0 }} />
					</View>
					<HeaderDefaultSub
						containerStyle={{
							borderBottomColor: 'transparent',
							borderBottomWidth: 0,
							top: -30,
						}}
						leftTextStyle={{ fontSize: 25 }}
						leftText={'Transaction details'}
					/>

					<View style={styles.rowHeader}>
						<Text style={[styles.rowCaption, stylesHooks.rowCaption]}>{'Account'}</Text>
						{/* <BlueCopyToClipboardButton stringToCopy={"from.filter(onlyUnique).join(', ')"} /> */}
						<Text style={styles.rowValue}>{`27671254408`}</Text>
					</View>
					<View style={styles.rowHeader}>
						<Text style={[styles.rowCaption, stylesHooks.rowCaption]}>{'Invoice Number'}</Text>
						{/* <BlueCopyToClipboardButton stringToCopy={"from.filter(onlyUnique).join(', ')"} /> */}
						<Text style={styles.rowValue}>{`D55F8X5D`}</Text>
					</View>
					<View style={styles.rowHeader}>
						<Text style={[styles.rowCaption, stylesHooks.rowCaption]}>{'Transaction ID'}</Text>
						{/* <BlueCopyToClipboardButton stringToCopy={"from.filter(onlyUnique).join(', ')"} /> */}
						<Text style={styles.rowValue}>{`S4D5D8D2`}</Text>
					</View>
					<View style={styles.rowHeader}>
						<Text style={[styles.rowCaption, stylesHooks.rowCaption]}>{'Date'}</Text>
						{/* <BlueCopyToClipboardButton stringToCopy={"to.filter(onlyUnique).join(', ')"} /> */}
						<Text style={styles.rowValue}>{'24 February 2021,  05:56:00'}</Text>
					</View>
					<View style={styles.rowHeader}>
						<Text style={[styles.rowCaption, stylesHooks.rowCaption]}>{'Transaction Type'}</Text>
						{/* <BlueCopyToClipboardButton stringToCopy={"to.filter(onlyUnique).join(', ')"} /> */}
						<Text style={styles.rowValue}>{'SEND MONEY'}</Text>
					</View>
					<View style={styles.rowHeader}>
						<Text style={[styles.rowCaption, stylesHooks.rowCaption]}>{'Fee'}</Text>
						{/* <BlueCopyToClipboardButton stringToCopy={"to.filter(onlyUnique).join(', ')"} /> */}
						<Text style={styles.rowValue}>{'585'}</Text>
					</View>
					<View style={styles.rowHeader}>
						<Text style={[styles.rowCaption, stylesHooks.rowCaption]}>{'Amount'}</Text>
						{/* <BlueCopyToClipboardButton stringToCopy={"to.filter(onlyUnique).join(', ')"} /> */}
						<Text style={styles.rowValue}>{'585'}</Text>
					</View>
				
        
        	<View style={{ marginVertical: 40 }}>
						<Text whiteColor bold style={{ marginVertical: 10, fontSize: 16 }}>
							Recepient Details
						</Text>
						<View style={{ width: '100%', height: 1, backgroundColor: 'white' }} />
					</View>
					<View style={styles.rowHeader}>
						<Text style={[styles.rowCaption, stylesHooks.rowCaption]}>{'Name'}</Text>
						{/* <BlueCopyToClipboardButton stringToCopy={"from.filter(onlyUnique).join(', ')"} /> */}
						<Text style={styles.rowValue}>{`Batsirai`}</Text>
					</View>
					<View style={styles.rowHeader}>
						<Text style={[styles.rowCaption, stylesHooks.rowCaption]}>{'Family'}</Text>
						{/* <BlueCopyToClipboardButton stringToCopy={"from.filter(onlyUnique).join(', ')"} /> */}
						<Text style={styles.rowValue}>{`Muchareva`}</Text>
					</View>
					<View style={styles.rowHeader}>
						<Text style={[styles.rowCaption, stylesHooks.rowCaption]}>{'Transaction ID'}</Text>
						{/* <BlueCopyToClipboardButton stringToCopy={"from.filter(onlyUnique).join(', ')"} /> */}
						<Text style={styles.rowValue}>{`S4D5D8D2`}</Text>
					</View>
					<View style={styles.rowHeader}>
						<Text style={[styles.rowCaption, stylesHooks.rowCaption]}>{'Email'}</Text>
						{/* <BlueCopyToClipboardButton stringToCopy={"from.filter(onlyUnique).join(', ')"} /> */}
						<Text style={styles.rowValue}>{`much.batsy@gmail.com`}</Text>
					</View>
					<View style={styles.rowHeader}>
						<Text style={[styles.rowCaption, stylesHooks.rowCaption]}>{'Account Number'}</Text>
						{/* <BlueCopyToClipboardButton stringToCopy={"from.filter(onlyUnique).join(', ')"} /> */}
						<Text style={styles.rowValue}>{`27671254408`}</Text>
					</View>
					<View style={{ marginVertical: 40 }}>
						<Text whiteColor bold style={{ marginVertical: 10, fontSize: 16 }}>
							Agent Details
						</Text>
						<View style={{ width: '100%', height: 1, backgroundColor: 'white' }} />
					</View>
						<Text style={[styles.rowCaption, stylesHooks.rowCaption]}>{'Reference Number'}</Text>
						<Text style={[styles.rowValue, { left: 30 }]}>{'# 548522'}</Text>
					<View style={styles.rowHeader}>
						<Text style={[styles.rowCaption, stylesHooks.rowCaption]}>{'Name'}</Text>
						{/* <BlueCopyToClipboardButton stringToCopy={"from.filter(onlyUnique).join(', ')"} /> */}
						<Text style={styles.rowValue}>{`Batsirai`}</Text>
					</View>
					<View style={styles.rowHeader}>
						<Text style={[styles.rowCaption, stylesHooks.rowCaption]}>{'Family'}</Text>
						{/* <BlueCopyToClipboardButton stringToCopy={"from.filter(onlyUnique).join(', ')"} /> */}
						<Text style={styles.rowValue}>{`Muchareva`}</Text>
					</View>
					<View style={styles.rowHeader}>
						<Text style={[styles.rowCaption, stylesHooks.rowCaption]}>{'Transaction ID'}</Text>
						{/* <BlueCopyToClipboardButton stringToCopy={"from.filter(onlyUnique).join(', ')"} /> */}
						<Text style={styles.rowValue}>{`S4D5D8D2`}</Text>
					</View>

					<Text
						style={[
							styles.rowCaption,
							stylesHooks.rowCaption,
							{ textAlign: 'center', fontSize: 11, color: 'grey', marginVertical: 30 },
						]}
					>
						{
							'All Transactionsction are recorded for easy access for you to track your records with simplicity'
						}
					</Text>
				</View>
			</ScrollView>
		</SafeBlueArea>
	);
};

const styles = StyleSheet.create({
	scroll: {
		flex: 1,
	},
	rowHeader: {
		flex: 1,
		flexDirection: 'row',
		marginBottom: 4,
		justifyContent: 'space-between',
	},
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
	txId: {
		fontSize: 16,
		fontWeight: '500',
	},
	txHash: {
		marginBottom: 8,
		color: 'grey',
	},
	txLink: {
		marginBottom: 26,
	},
	save: {
		marginHorizontal: 16,
		justifyContent: 'center',
		alignItems: 'center',
	},
	memoTextInput: {
		flexDirection: 'row',
		borderWidth: 1,
		borderBottomWidth: 0.5,
		minHeight: 44,
		height: 44,
		alignItems: 'center',
		marginVertical: 8,
		borderRadius: 4,
		paddingHorizontal: 8,
		color: '#81868e',
	},
});

export default TransactionsDetails;

// TransactionsDetails.navigationOptions = navigationStyle({}, opts => ({ ...opts, title: loc.transactions.details_title }));
