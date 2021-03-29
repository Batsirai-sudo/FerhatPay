import React, { useState, useRef, useEffect, useContext } from 'react';
import { View, KeyboardAvoidingView, TouchableOpacity, ActivityIndicator, StyleSheet, StatusBar } from 'react-native';
// import styles from './styles';
import SMSVerifyCode from 'react-native-sms-verifycode';
import { AntDesign } from '@expo/vector-icons';
import { Text, CustomProgressBar } from '@components';
import { useNavigation, useTheme } from '@react-navigation/native';
import { ROUTES, onFailure } from '@config';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '@context';
import { authServices } from '@services';
import { showMessage } from '@components';

interface VerifyOTPProps {}

const VerifyOTP = (props: VerifyOTPProps) => {
	const { verifyOtp, resendOtp } = authServices;

	const [text, setText] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const verifyRef = useRef();
	const [resend, setResend] = useState(false);
	const { navigate, goBack } = useNavigation();
	const colors = useTheme();
	const { t } = useTranslation();
	const { secretOTP, userData } = useContext(AuthContext);

	useEffect(() => {
		console.log(secretOTP);

		verifyRef.current.focus();
	}, []);

	const onInputCompleted = async (text: Number) => {
		const data = { secretKey: secretOTP.secretKey, otp: text };
		setIsLoading(true);
		try {
			const v = await verifyOtp(data);
			setIsLoading(false);
			v ? navigate(ROUTES.RegisterPersonalInfor) : onFailure({ message: 'OTP not sent. Please try again!' });
		} catch (error) {
			console.log(error);
			// onFailure({ message: error.response.data });
			setIsLoading(false);
		}
	};

	const onReesendOtp = async () => {
		setResend(true);
		try {
			const v = await resendOtp({ secretKey: secretOTP.secretKey.base32, mobile: userData.mobile });
			console.log(v.data);
			setResend(false);
			showMessage({
				message: 'OTP Sent',
				description: 'Your OTP was successfully sent to your mobile number',
				type: 'success',
			});
		} catch (error) {
			setResend(false);
			onFailure({ message: error.response.data });
		}

		// navigate(ROUTES.RegisterPersonalInfor);
	};

	const onInputChangeText = (text: any) => {
		setText(text);
	};

	const blur = () => verifyRef.current.blur();

	const reset = () => verifyRef.current.reset();

	return (
		<KeyboardAvoidingView style={{ height: '100%' }}>
			<CustomProgressBar loaderText="Verifying..." loader={3} visible={isLoading} />
			<View style={styles.container}>
				<StatusBar style="light" hidden={false} translucent={true} />
				<View style={styles.footer}>
					<View style={{ flexDirection: 'row', top: 40 }}>
						<View style={styles.headBlock}>
							<TouchableOpacity onPress={() => goBack()}>
								<AntDesign name="leftcircleo" size={25} color="#072273" style={{ marginTop: 10 }} />
							</TouchableOpacity>
						</View>

						<View style={styles.headBlock}>
							<Text style={styles.reistration}> {t('verification')}</Text>
						</View>
						<View style={styles.headBlock}></View>
					</View>

					<View style={styles.textblock}>
						<Text
							style={{
								textAlign: 'center',
							}}
						>
							{t('enter_six_digit')}
						</Text>

						<Text style={{ textAlign: 'center' }}>
							{' '}
							{t('digit_code')} {userData.mobile}
						</Text>
						<Text
							style={{
								textAlign: 'center',
							}}
						>
							{t('otp_expire')}
						</Text>
					</View>
					<View style={styles.containerq}>
						<Text style={{ fontSize: 25, marginTop: 20 }}>{t('enter_code')}</Text>
						{resend ? <ActivityIndicator color="#05014a" size="large" /> : null}
						<SMSVerifyCode
							ref={verifyRef}
							//   autoFocus
							verifyCodeLength={6}
							//   initialCodes={['1', 2, '', ' ', '       ']}
							// containerStyle={}
							containerPaddingVertical={30}
							//   containerPaddingTop={60}
							containerPaddingBottom={10}
							// containerPaddingHorizontal={}
							containerPaddingLeft={40}
							containerPaddingRight={40}
							// containerBackgroundColor="blue"

							// codeViewStyle={}
							codeViewBorderColor="#05014a"
							focusedCodeViewBorderColor="red"
							codeViewWidth={35}
							codeViewHeight={40}
							codeViewBorderWidth={1}
							codeViewBorderRadius={5}
							codeViewBackgroundColor="white"
							// codeStyle={}
							codeFontSize={20}
							codeColor="black"
							// secureTextEntry
							// coverStyle={}
							coverRadius={21}
							coverColor="blue"
							onInputCompleted={onInputCompleted}
							onInputChangeText={onInputChangeText}
							warningTitle="haha"
							warningContent="no number"
							warningButtonText="okok"
						/>
					</View>
					<View
						style={{
							flexDirection: 'row',
							position: 'absolute',
							bottom: 40,
							justifyContent: 'space-between',
							width: '100%',
							alignSelf: 'center',
						}}
					>
						<TouchableOpacity
							onPress={reset}
							style={[styles.button, { borderWidth: 1, borderColor: '#05014a' }]}
							activeOpcity={0}
							onPress={reset}
						>
							<Text style={styles.welcome}>{t('reset')} </Text>
						</TouchableOpacity>

						<TouchableOpacity
							onPress={onReesendOtp}
							style={[styles.button, { backgroundColor: '#05014a' }]}
							activeOpcity={0}
							onPress={onReesendOtp}
						>
							<Text style={[styles.welcome, { color: '#fff' }]}>{t('resend_otp')}</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</KeyboardAvoidingView>
	);
};

export default VerifyOTP;

const styles = StyleSheet.create({
	reistration: {
		height: 42,
		color: '#072273',
		lineHeight: 40,
		fontSize: 18,
		textAlign: 'center',
	},
	headBlock: {
		width: '33.3%',
	},

	textblock: {
		width: 296,
		height: 48,
		marginTop: 74,
		alignSelf: 'center',
	},
	container: {
		flex: 1,
		//   backgroundColor: '#009387'
		backgroundColor: '#fff',
	},
	header: {
		flex: 0,
		justifyContent: 'flex-end',
		paddingHorizontal: 20,
		paddingBottom: 50,
	},
	containerq: {
		alignItems: 'center',
		padding: 20,

		paddingTop: 30,
	},
	footer: {
		flex: 10,
		backgroundColor: '#fff',

		paddingHorizontal: 20,
		paddingVertical: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.2,
		shadowRadius: 2.62,
		elevation: 4,
	},

	welcome: {
		textAlign: 'center',
		margin: 10,
	},
	button: {
		justifyContent: 'center',
		width: 150,
		paddingHorizontal: 10,
		borderRadius: 10,
		marginTop: 40,
	},
	codeBorderStyle: {
		borderBottomColor: 'black',
		borderBottomWidth: 2,
		borderTopWidth: 0,
		borderLeftWidth: 0,
		borderRightWidth: 0,
		borderRadius: 0,
	},
});
