import React, { useCallback, useState, useContext } from 'react';
import { View, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Text, CustomProgressBar, Header, Input, Button } from '@components';
import { useTranslation } from 'react-i18next';
import { AntDesign } from '@expo/vector-icons';
import { userData as user } from '@constants';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '@config';
import { AuthContext } from '@context';

interface RegisterLocationProps {}

const RegisterLocation = (props: RegisterLocationProps) => {
	const { t } = useTranslation();
	const { navigate } = useNavigation();
	const [loading, setLoading] = useState(false);
	const { getUserData, userData } = useContext(AuthContext);

	const [data, setData] = React.useState(user.address);
	const onChangeValue = (key: any, value: any) => {
		setData({
			...data,
			[key]: value,
		});
	};
	const onContinue = () => {
		getUserData(data);
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			navigate(ROUTES.RegisterDocuments);
		}, 500);
	};

	return (
		<View style={styles.container}>
			<Header
				leftComponent={<AntDesign name="leftcircleo" size={20} color="#072273" style={{}} />}
				centerComponent={<Text>{t('address_info')}</Text>}
			/>

			<KeyboardAvoidingView style={styles.flex}>
				<ScrollView contentContainerStyle={styles.scroll}>
					<View style={styles.topBlock} />
					<Input
						label={t('street_address')}
						icon={{
							name: 'book',
							size: 20,
						}}
						value={data?.streetAddress}
						onChangeText={(value: any) => onChangeValue('streetAddress', value)}
					/>
					<Input
						label={t('city')}
						icon={{
							name: 'city',
							size: 20,
						}}
						value={data?.city}
						onChangeText={(value: any) => onChangeValue('city', value)}
					/>
					<Input
						label={t('country')}
						icon={{
							name: 'city',
							size: 20,
						}}
						keyboardType="email-address"
						value={data?.country}
						onChangeText={(value: any) => onChangeValue('country', value)}
					/>
					<Input
						label={t('post_code')}
						icon={{
							name: 'pen',
							size: 20,
						}}
						value={data?.postalCode}
						onChangeText={(value: any) => onChangeValue('postalCode', value)}
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
