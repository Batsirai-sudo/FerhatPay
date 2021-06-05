import Images from './images';
import ROUTES from './routes';
import { BaseSetting, AvailableLanguages } from './setting';
import { timer } from './timer';
// import onFailure from './onFailure';
import { Typography, FontWeight, BaseColor } from './typography';
import Biometric from './biometrics';
import Hepatics from './hepatics';
import DeviceInformation from './device';
import { formatBalance, transactionTimeToReadable, formatBalanceWithoutSuffix } from './configs';
import WalletGradient from './wallet-gradient';
import BlueClipboard from './clipboard';
import currencyFormatter from './currencyFormatter';

export {
	DeviceInformation,
	Hepatics,
	Biometric,
	// onFailure,
	Images,
	timer,
	ROUTES,
	BaseSetting,
	Typography,
	FontWeight,
	BaseColor,
	formatBalance,
	transactionTimeToReadable,
	WalletGradient,
	formatBalanceWithoutSuffix,
	BlueClipboard,
	AvailableLanguages,
	currencyFormatter,
};
