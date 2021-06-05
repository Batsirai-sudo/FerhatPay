// import { LegacyWallet } from './wallets/legacy-wallet';
// import { HDSegwitP2SHWallet } from './wallets/hd-segwit-p2sh-wallet';
// import { LightningCustodianWallet } from './wallets/lightning-custodian-wallet';
// import { HDLegacyBreadwalletWallet } from './wallets/hd-legacy-breadwallet-wallet';
// import { HDLegacyP2PKHWallet } from './wallets/hd-legacy-p2pkh-wallet';
// import { WatchOnlyWallet } from './wallets/watch-only-wallet';
// import { HDSegwitBech32Wallet } from './wallets/hd-segwit-bech32-wallet';
// import { PlaceholderWallet } from './wallets/placeholder-wallet';
// import { SegwitBech32Wallet } from './wallets/segwit-bech32-wallet';
// import { HDLegacyElectrumSeedP2PKHWallet } from './wallets/hd-legacy-electrum-seed-p2pkh-wallet';
// import { HDSegwitElectrumSeedP2WPKHWallet } from './wallets/hd-segwit-electrum-seed-p2wpkh-wallet';
// import { MultisigHDWallet } from './wallets/multisig-hd-wallet';
// import { HDAezeedWallet } from "./wallets/hd-aezeed-wallet";
import { useTheme } from '@react-navigation/native';
import { accounts } from '@constants';

export default class WalletGradient {
	static first = ['#1ce6eb', '#296fc5', '#3500A2']; // default
	static second = ['#F1AA07', '#FD7E37']; // second default
	static third = ['#fe6381', '#f99c42']; // third
	static forth = ['#6CD9FC', '#44BEE5']; //
	static fifth = ['#474646', '#282828']; //
	static sixth = ['#B770F6', '#9013FE']; //
	static seventh = ['#007AFF', '#0040FF'];
	static eigth = ['#6CD9FC', '#44BEE5'];
	static nineth = ['#37E8C0', '#15BE98'];
	static teneth = ['#FD7478', '#E73B40'];
	static eleventh = ['#8584FF', '#5351FB'];

	static createWallet = () => {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const { colors } = useTheme();
		return colors.lightButton;
	};

	static gradientsFor(type: any) {
		let gradient;
		switch (type) {
			case accounts[0]:
				gradient = WalletGradient.first;
				break;
			case accounts[1]:
				gradient = WalletGradient.second;
				break;
			case accounts[2]:
				gradient = WalletGradient.fifth;
				break;
			case 'forth':
				gradient = WalletGradient.forth;
				break;
			case 'fifth':
				gradient = WalletGradient.fifth;
				break;
			case 'sixth':
				gradient = WalletGradient.sixth;
				break;
			case 'seventh':
				gradient = WalletGradient.seventh;
				break;
			case 'eigth':
				gradient = WalletGradient.eigth;
				break;
			case 'nineth':
				gradient = WalletGradient.nineth;
				break;
			case 'teneth':
				gradient = WalletGradient.teneth;
				break;
			default:
				gradient = WalletGradient.eleventh;
				break;
		}
		return gradient;
	}

	// static linearGradientProps(type) {
	//   let props;
	//   switch (type) {
	//     case MultisigHDWallet.type:
	//       /* Example
	//       props = { start: { x: 0, y: 0 } };
	//       https://github.com/react-native-linear-gradient/react-native-linear-gradient
	//       */
	//       break;
	//     default:
	//       break;
	//   }
	//   return props;
	// }

	static headerColorFor(type) {
		let gradient;
		switch (type) {
			case 'WatchOnlyWallet':
				gradient = WalletGradient.watchOnlyWallet;
				break;
			// case LegacyWallet.type:
			//   gradient = WalletGradient.legacyWallet;
			//   break;
			// case HDLegacyP2PKHWallet.type:
			// case HDLegacyElectrumSeedP2PKHWallet.type:
			//   gradient = WalletGradient.hdLegacyP2PKHWallet;
			//   break;
			// case HDLegacyBreadwalletWallet.type:
			//   gradient = WalletGradient.hdLegacyBreadWallet;
			//   break;
			// case HDSegwitP2SHWallet.type:
			//   gradient = WalletGradient.hdSegwitP2SHWallet;
			//   break;
			// case HDSegwitBech32Wallet.type:
			// case HDSegwitElectrumSeedP2WPKHWallet.type:
			//   gradient = WalletGradient.hdSegwitBech32Wallet;
			//   break;
			// case SegwitBech32Wallet.type:
			//   gradient = WalletGradient.segwitBech32Wallet;
			//   break;
			// case MultisigHDWallet.type:
			//   gradient = WalletGradient.multisigHdWallet;
			//   break;
			// case LightningCustodianWallet.type:
			//   gradient = WalletGradient.lightningCustodianWallet;
			//   break;
			// case HDAezeedWallet.type:
			//   gradient = WalletGradient.aezeedWallet;
			//   break;
			default:
				gradient = WalletGradient.defaultGradients;
				break;
		}
		return gradient[0];
	}
}
