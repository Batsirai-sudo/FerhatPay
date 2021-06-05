/* global alert */
import { useContext } from 'react';
import * as LocalAuthentication from 'expo-local-authentication';
import { AuthContext } from '@context';

function Biometric() {
	const { getItem, setItem, setResetOnAppUninstallTo } = useContext(AuthContext);
	Biometric.STORAGEKEY = 'Biometrics';
	Biometric.FaceID = 'Face ID';
	Biometric.TouchID = 'Touch ID';
	Biometric.Biometrics = 'Biometrics';

	Biometric.checkForBiometricsRecords = async () => {
		/**
		 * Now that we know our user’s device is capable of
		 * biometric authentication, we need to make sure the user
		 * has biometrics recorded in their OS. Once again, we can
		 * achieve this by calling the LocalAuthentication.isEnrolledAsync()
		 * method, which also returns a boolean indicating whether
		 *  biometric records were found for the user.
		 */
		let biometricRecords = await LocalAuthentication.isEnrolledAsync();
		if (!biometricRecords) {
			alert('No Biometrics Found');
			return false;
		} else {
			alert('Biometrics Found');
			return true;
		}
	};
	Biometric.isBiometricUseCapableAndEnabled = async () => {
		const isBiometricUseEnabled = await Biometric.isBiometricUseEnabled();
		const isBiometricRecords = await Biometric.checkForBiometricsRecords();
		const isDeviceBiometricCapable = await Biometric.isDeviceBiometricCapable();
		return isBiometricUseEnabled && isDeviceBiometricCapable && isBiometricRecords;
	};
	Biometric.isDeviceBiometricCapable = async () => {
		/**
		 * We can ensure device compatibility
		 * very easily by calling LocalAuthentication.hasHardwareAsync()
		 * in our componentDidMount(). This function returns a boolean
		 *  indicating whether the current device has the necessary hardware.
		 *  If it returns false, you’ll want to make sure you have a
		 *  fall-back option to authenticate the user.
		 */
		try {
			let compatible = await LocalAuthentication.hasHardwareAsync();
			if (compatible) return true;
			else return false;
		} catch {
			Biometric.setBiometricUseEnabled(false);
			return false;
		}
	};
	Biometric.isBiometricUseEnabled = async () => {
		try {
			const enabledBiometrics = await getItem(Biometric.STORAGEKEY);
			return !!enabledBiometrics;
		} catch (_e) {
			await setItem(Biometric.STORAGEKEY, '');
			return false;
		}
	};
	Biometric.setBiometricUseEnabled = async (value) => {
		await setItem(Biometric.STORAGEKEY, value === true ? '1' : '');
	};
	Biometric.unlockWithBiometrics = async () => {
		/**
  * After ensuring both device capability and that your
  *  user has biometric records set, we can proceed to scanning biometrics.
  We do scanning biometrics by calling the LocalAuthentication.authenticateAsync() 
  method. It’ll return an object containing a success key with a boolean value
  indicating whether the authentication was successful, and an error key containing
  the error code in the case where authentication fails (Andriod OS doesn’t provide a 
  UI prompt to scan so you’ll have to provide your own; iOS does have UI prompt).
  */
		let result = await LocalAuthentication.authenticateAsync();
		if (result.success) {
			// this.setState({sccaned:true})
			const data = {
				username: 'username', //login data for your account
				password: 'password',
			};
		}
		// const headers = {
		//      "Content-Type": "application/json",};
		// var temp= this;
		//   axios.post("https://mywebsite.com/login", data,                      {headers:headers}).then(function (result) {
		//    if (result && result.data) {
		//    const AUTH_TOKEN = result.data.token;
		//    const AUTH_USER = result.data.username;
		//    _storeUser(AUTH_USER);
		//    _storeToken(AUTH_TOKEN);
		//    if (AUTH_TOKEN){
		//       temp.props.navigation.navigate("HOME");}
		//    else {
		//       temp.setState({ incorrect: true });}}
		// }).catch(function (error) {
		//   temp.setState({ incorrect: true });
		//   console.log(error);});}
		//   else {
		//      alert('Error! Enter your username and password!');}};

		const isDeviceBiometricCapable = await Biometric.isDeviceBiometricCapable();
		if (isDeviceBiometricCapable) {
			return new Promise((resolve) => {
				FingerprintScanner.authenticate({ description: loc.settings.biom_conf_identity, fallbackEnabled: true })
					.then(() => resolve(true))
					.catch(() => resolve(false))
					.finally(() => FingerprintScanner.release());
			});
		}
		return false;
	};
	Biometric.requestDevicePasscode = async () => {
		let isDevicePasscodeSupported = false;
		try {
			isDevicePasscodeSupported = await PasscodeAuth.isSupported();
			if (isDevicePasscodeSupported) {
				const isAuthenticated = await PasscodeAuth.authenticate();
				if (isAuthenticated) {
					Alert.alert(
						loc.settings.encrypt_tstorage,
						loc.settings.biom_remove_decrypt,
						[
							{ text: loc._.cancel, style: 'cancel' },
							{
								text: loc._.ok,
								onPress: () => Biometric.clearKeychain(),
							},
						],
						{ cancelable: false }
					);
				}
			}
		} catch {
			isDevicePasscodeSupported = undefined;
		}
		if (isDevicePasscodeSupported === false) {
			alert(loc.settings.biom_no_passcode);
		}
	};

	Biometric.biometricType = async () => {
		try {
			const isSensorAvailable = Biometric.Biometrics;
			return isSensorAvailable;
		} catch (e) {
			console.log(e);
		}
		return false;
	};
}

export default Biometric;

// import { AsyncStorage } from "react-native";
// import { _storeToken, _clearToken, _storeUser } from "../helpers/asyncStorage";
// import * as LocalAuthentication from 'expo-local-authentication';
// const AUTH_KEY = "@AUTH_TOKEN_KEY";
// const USER = "@USER";

// export default class Login extends Component {
//  constructor(props) {
//         super(props);
//         this.state = {
//            username: "",
//            password: "",
//            incorrect: false,
//            sccaned:false};
//     }
// componentDidMount() {

//        if(!this.state.scanned)
//        this.handleLoginPress();

//       }

// handleLoginPress =async () => {
//     this.handleAuthentication();
// };

// _login = async () => {
//      const { name, password } = this.state;
//      const data = {name, password};
//      const headers = {"Content-Type": "application/json"};
//      var temp= this;
//      axios.post("https://mywebsite.com/login", data,                 {headers:headers}).then(function (result) {
//      if (result && result.data) {
//      const AUTH_TOKEN = result.data.token;
//      const AUTH_USER = result.data.username;
//      _storeUser(AUTH_USER);
//      _storeToken(AUTH_TOKEN);
//      if (AUTH_TOKEN){
//         temp.props.navigation.navigate("HOME");
//      }
//     else {temp.setState({ incorrect: true });}}})
//     .catch(function (error) {
//     temp.setState({ incorrect: true });
//     console.log(error);});
// };
// render() {
// return (
//      <View style={styles.container}>
//     //  <Input placeholder="Username" autoCompleteType="username" onChangeText={(text) => this.setState({ username: text })}></Input>
//     //  <Input placeholder="Password" autoCompleteType="password" secureTextEntry={true} onChangeText={(text) => this.setState({ password: text })}></Input>
//       // {this.state.incorrect ? <Text>Inccorect username or password</Text> : null}
//     //  <Button onPress={this._login}>Login</Button>
// </View>
// );}}
