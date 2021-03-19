import React, { useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from '@components';
import { useTranslation } from 'react-i18next';
import { useNavigation, useTheme } from '@react-navigation/native';
import { ROUTES, Images } from '@config';

interface IndexProps {}

const Index = (props: IndexProps) => {
	const { t } = useTranslation();
	const { navigate } = useNavigation();

	const onContinue = useCallback(async () => {
		navigate(ROUTES.Login);
	}, []);
	return (
		<View style={styles.container}>
			<View style={styles.quater}>
				<Text semiBold whiteColor style={styles.toptTxt}>
					Registration Success
				</Text>
				<View style={styles.txtContainer}>
					<Text whiteColor style={styles.txt}>
						Your Account was successfully registered
					</Text>
					<Text whiteColor style={styles.txt}>
						You can now Login with your
					</Text>
					<Text whiteColor style={[styles.txt, { marginTop: 50 }]}>
						Mobile Number( New Account Number )
					</Text>
					<Text whiteColor style={styles.txt}>
						&
					</Text>
					<Text whiteColor style={styles.txt}>
						password
					</Text>
				</View>
			</View>
			<View style={styles.btnConainer}>
				<Button
					loading={false}
					buttonStyle={styles.btn}
					title={t('login')}
					size="small"
					onPress={onContinue}
					backgroundColor="#0024CD"
				/>
			</View>
		</View>
	);
};

export default Index;

const styles = StyleSheet.create({
	container: { height: '100%', width: '100%' },
	quater: {
		height: '70%',
		width: '100%',
		backgroundColor: '#0024CD',
		alignItems: 'center',
		justifyContent: 'center',
	},
	img: { height: 30, width: 30 },
	toptTxt: { top: -30, fontSize: 20 },
	txt: { fontSize: 11 },
	btnConainer: { marginTop: 100, width: '60%', alignSelf: 'center' },
	txtContainer: { marginTop: 50, alignItems: 'center', justifyContent: 'center' },
});
