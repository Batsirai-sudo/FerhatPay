import React, { useCallback, useState } from 'react';
import { View, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Text, CustomProgressBar, Header, Input, Button } from '@components';
import { useTranslation } from 'react-i18next';
import { AntDesign } from '@expo/vector-icons';
import { userData } from '@constants';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '@config';

interface RegisterLocationProps {}

const RegisterLocation = (props: RegisterLocationProps) => {
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
			navigate(ROUTES.RegisterDocuments);
		}, 500);
	}, []);

	return (
		<View style={styles.container}>
			<Header
				leftComponent={<AntDesign name="leftcircleo" size={20} color="#072273" style={{}} />}
				centerComponent={<Text>{t('address_info')}</Text>}
			/>

			<KeyboardAvoidingView style={styles.flex} behavior="height">
				<ScrollView contentContainerStyle={styles.scroll}>
					<View style={styles.topBlock} />
					<Input
						label={t('street_address')}
						icon={{
							name: 'book',
							size: 20,
						}}
						value={data?.givenName}
						onChangeText={(value: any) => onChangeValue('givenName', value)}
					/>
					<Input
						label={t('city')}
						icon={{
							name: 'city',
							size: 20,
						}}
						value={data?.familyName}
						onChangeText={(value: any) => onChangeValue('familyName', value)}
					/>
					<Input
						label={t('country')}
						icon={{
							name: 'city',
							size: 20,
						}}
						keyboardType="email-address"
						value={data?.email}
						onChangeText={(value: any) => onChangeValue('email', value)}
					/>
					<Input
						label={t('post_code')}
						icon={{
							name: 'pen',
							size: 20,
						}}
						value={data?.nationalID}
						onChangeText={(value: any) => onChangeValue('nationalID', value)}
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

export default RegisterLocation;

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
