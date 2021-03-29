import React, { useCallback, useState, useContext } from 'react';
import { View, StyleSheet, ScrollView, KeyboardAvoidingView, Image } from 'react-native';
import { Text, CustomProgressBar, Header, Input, Button } from '@components';
import { useTranslation } from 'react-i18next';
import { AntDesign } from '@expo/vector-icons';
import { userData as user } from '@constants';
import { useNavigation, useTheme } from '@react-navigation/native';
import { ROUTES, Images, onFailure } from '@config';
import { AuthContext } from '@context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { authServices } from '@services';

interface RegisterLocationProps {}

const RegisterDocuments = (props: RegisterLocationProps) => {
	const { t } = useTranslation();
	const { colors } = useTheme();
	const { documentImages, userData } = useContext(AuthContext);
	const { navigate } = useNavigation();
	const [loading, setLoading] = useState(false);
	const { register } = authServices;

	const [data, setData] = React.useState(user.documents);
	const onChangeValue = (key: any, value: any) => {
		setData({
			...data,
			[key]: value,
		});
	};

	const onContinue = async () => {
		try {
			setLoading(true);
			const v = await register({ ...userData, ...data });
			console.log(v);
			setLoading(false);
			navigate(ROUTES.SuccessRegistration);
		} catch (error) {
			setLoading(false);

			// onFailure({ message: error.response.data });
			console.log({ message: error });
		}
	};

	return (
		<View style={styles.container}>
			<Header
				leftComponent={<AntDesign name="leftcircleo" size={20} color="#072273" style={{}} />}
				centerComponent={<Text medium>{t('Documents')}</Text>}
			/>
			<CustomProgressBar loaderText="Please wait..." loader={3} visible={loading} />

			<KeyboardAvoidingView style={styles.flex} behavior="height">
				<ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
					<View style={styles.topBlock} />
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<View style={{ alignItems: 'center' }}>
							<Text style={styles.txt}>Take a clear ,color photo </Text>
							<Text style={styles.txt}>of your ID </Text>
						</View>
						<View style={{}}>
							<View style={{}}>
								<Image
									source={documentImages.id ? { uri: documentImages.id } : Images.id1}
									style={{ height: 200, width: 200, borderRadius: 10, resizeMode: 'cover' }}
								/>
							</View>
							<TouchableOpacity
								style={{
									marginVertical: 15,
									width: '90%',
									alignSelf: 'center',
									backgroundColor: colors.primary,
									alignItems: 'center',
									justifyContent: 'center',
									height: 40,
									borderRadius: 10,
								}}
								onPress={() => {
									navigate(ROUTES.OpenCamera, { type: 'idCopy' });
								}}
							>
								<Text whiteColor bold>
									Take Photo
								</Text>
							</TouchableOpacity>
						</View>
					</View>

					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<View style={{ marginVertical: 15, alignItems: 'center' }}>
							<Text style={styles.txt}>Take a clear ,well-lit photo </Text>
							<Text style={styles.txt}>of your face </Text>
						</View>
						<View style={{}}>
							<View style={{ height: 200, width: 200, alignItems: 'center' }}>
								<Image
									source={documentImages.profile ? { uri: documentImages.profile } : Images.profile}
									style={{ height: 200, width: 200, borderRadius: 10 }}
								/>
							</View>
							<TouchableOpacity
								style={{
									marginVertical: 15,
									width: '90%',
									alignSelf: 'center',
									backgroundColor: colors.primary,
									alignItems: 'center',
									justifyContent: 'center',
									height: 40,
									borderRadius: 10,
								}}
								onPress={() => {
									navigate(ROUTES.OpenCamera, { type: 'selfie' });
								}}
							>
								<Text whiteColor bold>
									Take A Selfie
								</Text>
							</TouchableOpacity>
						</View>
					</View>
					<View style={{ height: 200 }} />
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

export default RegisterDocuments;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	txt: {
		fontSize: 12,
		marginLeft: 10,
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
		marginHorizontal: 10,
	},
	topBlock: { height: 50 },
});
