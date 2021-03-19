import React, { useCallback, useState } from 'react';
import { View, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Text, CustomProgressBar, Header, Input, Button } from '@components';
import { useTranslation } from 'react-i18next';
import { AntDesign } from '@expo/vector-icons';
import { userData } from '@constants';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '@config';

interface RegisterPersonalInforProps {}

const RegisterPersonalInfor = (props: RegisterPersonalInforProps) => {
	const { t } = useTranslation();
	const { navigate } = useNavigation();
	const [loading, setLoading] = useState(false);

	const [data, setData] = React.useState(userData.personalInfo);
	const onChangeValue = (key: any, value: any) => {
		setData({
			...data,
			[key]: value,
		});
	};

	const onContinue = useCallback(async () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			navigate(ROUTES.RegisterLocation);
		}, 500);
	}, []);

	return (
		<View style={styles.container}>
			<Header
				leftComponent={<AntDesign name="leftcircleo" size={20} color="#072273" style={{}} />}
				centerComponent={<Text>{t('personal_info')}</Text>}
			/>

			<KeyboardAvoidingView style={styles.flex} behavior="height">
				<ScrollView contentContainerStyle={styles.scroll}>
					<View style={styles.topBlock} />
					<Input
						label={t('first_name')}
						icon={{
							name: 'account',
							size: 20,
						}}
						value={data?.givenName}
						onChangeText={(value: any) => onChangeValue('givenName', value)}
					/>
					<Input
						label={t('last_name')}
						icon={{
							name: 'account',
							size: 20,
						}}
						value={data?.familyName}
						onChangeText={(value: any) => onChangeValue('familyName', value)}
					/>
					<Input
						label={t('email_address')}
						icon={{
							name: 'email',
							size: 20,
						}}
						keyboardType="email-address"
						value={data?.email}
						onChangeText={(value: any) => onChangeValue('email', value)}
					/>
					<Input
						label={t('national_id')}
						icon={{
							name: 'id-card',
							size: 20,
						}}
						value={data?.nationalID}
						onChangeText={(value: any) => onChangeValue('nationalID', value)}
					/>
					<Input
						label={t('student_id')}
						icon={{
							name: 'id-card',
							size: 20,
						}}
						value={data?.studentID}
						onChangeText={(value: any) => onChangeValue('studentID', value)}
					/>
					<Input
						label={t('birth')}
						icon={{
							name: 'calendar',
							size: 20,
						}}
						value={data?.dateOfBirth}
						onChangeText={(value: any) => onChangeValue('dateOfBirth', value)}
					/>
				</ScrollView>
				<View style={styles.viewFoot}>
					<View style={styles.footButton}>
						<Button loading={loading} title={t('continue')} size="small" onPress={onContinue} />
					</View>
				</View>
			</KeyboardAvoidingView>
		</View>
	);
};

export default RegisterPersonalInfor;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	viewFoot: {
		marginTop: 5,
		marginBottom: 10,
		marginHorizontal: -10,
		paddingHorizontal: 25,
		flexDirection: 'row',
		// position: 'absolute',
		// bottom: 0,
		// backgroundColor: 'white',
	},

	footButton: {
		flex: 1,
		marginHorizontal: 10,
	},
	flex: {
		height: '92%',
		marginHorizontal: 30,
	},
	topBlock: { height: 50 },
});
