import dayjs from 'dayjs';
// import relativeTime from 'dayjs/plugin/relativeTime';
// import localizedFormat from 'dayjs/plugin/localizedFormat';
// import * as RNLocalize from 'react-native-localize';
import BigNumber from 'bignumber.js';

export function formatBalance(balance, toUnit, withFormatting = false) {
	if (toUnit === undefined) {
		return balance + ' ' + strings.units[BitcoinUnit.BTC];
	}
	if (toUnit === BitcoinUnit.BTC) {
		const value = new BigNumber(balance).dividedBy(100000000).toFixed(8);
		return removeTrailingZeros(value) + ' ' + strings.units[BitcoinUnit.BTC];
	} else if (toUnit === BitcoinUnit.SATS) {
		return (
			(withFormatting ? new Intl.NumberFormat().format(balance).toString() : String(balance)) +
			' ' +
			strings.units[BitcoinUnit.SATS]
		);
	} else if (toUnit === BitcoinUnit.LOCAL_CURRENCY) {
		return currency.satoshiToLocalCurrency(balance);
	}
}

export const transactionTimeToReadable = (time) => {
	// if (time === 0) {
	// 	return strings._.never;
	// }
	// let ret;
	// try {
	// 	ret = dayjs(time).fromNow();
	// } catch (_) {
	// 	console.warn('incorrect locale set for dayjs');
	// 	return time;
	// }
	// return ret;
	return 452;
};

export function formatBalanceWithoutSuffix(balance = 0, toUnit, withFormatting = false) {
	// if (toUnit === undefined) {
	//   return balance;
	// }
	// if (balance !== 0) {
	//   if (toUnit === BitcoinUnit.BTC) {
	// 	const value = new BigNumber(balance).dividedBy(100000000).toFixed(8);
	// 	return removeTrailingZeros(value);
	//   } else if (toUnit === BitcoinUnit.SATS) {
	// 	return withFormatting ? new Intl.NumberFormat().format(balance).toString() : String(balance);
	//   } else if (toUnit === BitcoinUnit.LOCAL_CURRENCY) {
	// 	return currency.satoshiToLocalCurrency(balance);
	//   }
	//}
	return balance.toString();
}
