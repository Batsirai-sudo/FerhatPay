import React, { useState, useContext } from 'react';
import { View, TouchableOpacity } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import IntlPhoneInput from 'react-native-intl-phone-input';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Text, CustomProgressBar, showMessage } from '@components';
import { ROUTES } from '@config';
import styles from './styles';
import { useTranslation } from 'react-i18next';
import { authServices } from '@services';
import { AuthContext } from '@context';
import { userData as user } from '@constants';

const OTPMobileNumber = () => {
	const { navigate, goBack } = useNavigation();
	const { requestOtp } = authServices;
	const { getSecretOTP, getUserData } = useContext(AuthContext);
	const { t } = useTranslation();
	const [data, setData] = useState(user.mobile);
	const [isLoading, setIsLoading] = useState(false);

	const onChangeText = ({ dialCode, unmaskedPhoneNumber, phone_Number, isVerified }, phone) => {
		const value = dialCode + unmaskedPhoneNumber;
		setData({ mobile: value });
	};

	const onContinue = async () => {
		if (data.mobile.length < 10) {
			showMessage({
				message: 'Mobile not Valid',
				description: 'enter a valid mobile number to continue',
				type: 'danger',
			});
			return false;
		}

		setIsLoading(true);
		try {
			const v = await requestOtp(data.mobile);
			getSecretOTP(v.data);
			getUserData(data);
			setIsLoading(false);
			v
				? navigate(ROUTES.VerifyOTP)
				: showMessage({ message: 'Error', description: 'OTP not sent. Please try again!' });
		} catch (error) {
			console.error(error);
			showMessage({ message: 'Error', description: error.message, type: 'danger' });
			setIsLoading(false);
		}
	};

	return (
		<View style={styles.container}>
			<CustomProgressBar loaderText="Please wait..." loader={3} visible={isLoading} />

			<StatusBar style="dark" hidden={false} translucent={true} />
			<View style={styles.footer}>
				<View style={styles.topHeader}>
					<View style={styles.headBlock}>
						<TouchableOpacity onPress={() => goBack()}>
							<AntDesign name="leftcircleo" size={27} color="#072273" style={styles.back} />
						</TouchableOpacity>
					</View>

					<View style={styles.headBlock}>
						<Text style={styles.reistration}>{t('registration')}</Text>
					</View>
					<View style={styles.headBlock}></View>
				</View>

				<View style={styles.textblock}>
					<Text
						light
						style={{
							textAlign: 'center',
						}}
					>
						{t('enter_mobile_registration')}
					</Text>
					<Text light style={{ textAlign: 'center' }}>
						{t('validate_registration')}
					</Text>
				</View>

				<View style={styles.containerq}>
					<IntlPhoneInput
						value={data.mobile}
						onChangeText={onChangeText}
						defaultCountry="ZA"
						disableCountryChange={false}
					/>
				</View>

				<View style={styles.view}></View>

				<TouchableOpacity style={styles.button} onPress={onContinue}>
					<Text
						style={{
							color: 'white',
							marginRight: 20,
						}}
					>
						{t('continue')}
					</Text>
					<Ionicons name="md-arrow-forward" style={styles.forwardIcon} />
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default OTPMobileNumber;
