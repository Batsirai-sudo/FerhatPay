import React, { useCallback, useState, useEffect, useContext } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, KeyboardAvoidingView, Dimensions } from 'react-native';
import { Text, Camera as Cam, Header, Input, Button } from '@components';
import { useTranslation } from 'react-i18next';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { userData } from '@constants';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '@config';
import { Camera } from 'expo-camera';
import { Plane, CircleFade } from 'react-native-animated-spinkit';
import { AuthContext } from '@context';

const deviceHeight = Dimensions.get('window').height;

const deviceWidth = Dimensions.get('window').width;
interface RegisterDocumentsProps {}
let camera = {};

const OpenCamera = (props: RegisterDocumentsProps) => {
	const { t } = useTranslation();
	const { getImageUri } = useContext(AuthContext);

	const { navigate, goBack } = useNavigation();
	const [loading, setLoading] = useState(true);
	const [type, setType] = useState(Camera.Constants.Type.back);

	const [data, setData] = React.useState(userData.personalInfo);
	const onChangeValue = (key: any, value: any) => {
		setData({
			...data,
			[key]: value,
		});
	};

	useEffect(() => {
		console.log(props.route);
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);

	const onSwitchCamera = () => {
		setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back);
	};

	const onContinue = useCallback(async () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			navigate(ROUTES.RegisterDocuments);
		}, 500);
	}, []);

	const _takePicture = () => {};

	return (
		<View style={styles.container}>
			{/* <Header
				leftComponent={<AntDesign name="leftcircleo" size={20} color="#072273" style={{}} />}
				centerComponent={<Text medium>{t('address_info')}</Text>}
			/> */}

			<Cam
				refrence={(cal) => {
					camera = cal;
				}}
				type={type}
			/>

			{props.route.params.type === 'selfie' ? (
				<>
					<View style={styles.rectangleContainer}>
						<View style={styles.rectangle}>
							<View style={styles.rectangleColor} />
							<View style={styles.topLeft} />
							<View style={styles.topRight} />
							<View style={styles.bottomLeft} />
							<View style={styles.bottomRight} />
						</View>
					</View>
					{/* 
					<View
						style={{
							position: 'absolute',
							top: 30,
							width: '100%',
							height: 50,
							justifyContent: 'center',
							backgroundColor: 'red',
						}}
					>
						<TouchableOpacity onPress={onSwitchCamera} style={{ alignSelf: 'flex-start', left: 20 }}>
							<MaterialIcons name="flip-camera-android" size={30} color="white" />
						</TouchableOpacity>
					</View>
				
				 */}

					<View
						style={{
							position: 'absolute',
							top: 30,
							width: '100%',
							height: 50,
							justifyContent: 'space-between',
							flexDirection: 'row',
							// backgroundColor: 'red',
						}}
					>
						<TouchableOpacity onPress={() => goBack()} style={{ alignSelf: 'center', left: 20 }}>
							<MaterialIcons name="chevron-left" size={30} color="white" />
						</TouchableOpacity>
						<TouchableOpacity onPress={onSwitchCamera} style={{ alignSelf: 'center', right: 20 }}>
							<MaterialIcons name="flip-camera-android" size={30} color="white" />
						</TouchableOpacity>
					</View>
					<View
						style={{
							// backgroundColor: 'red',
							backgroundColor: 'transparent',
							position: 'absolute',
							bottom: 0,
							width: '100%',
							alignItems: 'center',
							marginBottom: 15,
						}}
					>
						<View style={{ marginBottom: 30 }}>
							<Text whiteColor style={{ marginBottom: 8, fontSize: 25, textAlign: 'center' }}>
								Profile Selfie
							</Text>
							<Text thin whiteColor>
								Make sure your face is clear and you are
							</Text>
							<Text thin whiteColor style={{ textAlign: 'center' }}>
								not blurred by light.
							</Text>
						</View>

						<TouchableOpacity
							onPress={() => {
								camera.current.takePictureAsync().then((val) => {
									console.log(val);
									getImageUri(val.uri, 'profile');
									goBack();
								});
							}}
							style={{
								borderWidth: 2,
								borderColor: 'white',
								height: 60,
								width: 60,
								borderRadius: 100,
								alignItems: 'center',
								justifyContent: 'space-around',
							}}
						>
							<View style={{ height: 50, width: 50, borderRadius: 100, backgroundColor: 'white' }}></View>
							{/* <Text style={styles.text}> Flip </Text> */}
						</TouchableOpacity>
					</View>

					<View style={{ position: 'absolute', top: 100, alignSelf: 'center' }}>
						<View style={{ flexDirection: 'row', alignItems: 'center' }}>
							<AntDesign name="videocamera" size={20} color="white" />
							<Text whiteColor thin style={{ marginHorizontal: 10 }}>
								Batsy Camera
							</Text>
							<View style={{ height: 20, width: 1, marginHorizontal: 5, backgroundColor: 'white' }} />
							<Text whiteColor ultraThin>
								Real Identity
							</Text>
						</View>
					</View>
					{loading ? (
						<View
							style={{
								backgroundColor: 'rgba(113, 41, 52,.7)',
								height: '100%',
								width: '100%',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<CircleFade color="white" size={150} />
						</View>
					) : null}
				</>
			) : (
				<>
					<View style={styles.rectangleContainer2}>
						<View style={styles.rectangle2}>
							<View style={styles.rectangleColor2} />
							<View style={styles.topLeft2} />
							<View style={styles.topRight2} />
							<View style={styles.bottomLeft2} />
							<View style={styles.bottomRight2} />
						</View>
					</View>
					<View
						style={{
							position: 'absolute',
							top: 30,
							width: '100%',
							height: 50,
							justifyContent: 'space-between',
							flexDirection: 'row',
						}}
					>
						<TouchableOpacity onPress={() => goBack()} style={{ alignSelf: 'center', left: 20 }}>
							<MaterialIcons name="chevron-left" size={30} color="white" />
						</TouchableOpacity>
						<TouchableOpacity onPress={onSwitchCamera} style={{ alignSelf: 'flex-end', right: 20 }}>
							<MaterialIcons name="flip-camera-android" size={30} color="white" />
						</TouchableOpacity>
					</View>

					<View
						style={{
							// backgroundColor: 'red',
							backgroundColor: 'transparent',
							position: 'absolute',
							bottom: 0,
							width: '100%',
							alignItems: 'center',
							marginBottom: 15,
						}}
					>
						<View style={{ marginBottom: 30 }}>
							<Text whiteColor style={{ marginBottom: 25, fontSize: 25, textAlign: 'center' }}>
								ID Scan
							</Text>
							<Text thin whiteColor>
								Make sure your face is clear and your ID
							</Text>
							<Text thin whiteColor style={{ textAlign: 'center' }}>
								is easy to read.
							</Text>
						</View>

						<TouchableOpacity
							onPress={() => {
								camera.current.takePictureAsync().then((val) => {
									console.log(val);
									getImageUri(val.uri, 'id');
									goBack();
								});
							}}
							style={{
								borderWidth: 2,
								borderColor: 'white',
								height: 60,
								width: 60,
								borderRadius: 100,
								alignItems: 'center',
								justifyContent: 'space-around',
							}}
						>
							<View style={{ height: 50, width: 50, borderRadius: 100, backgroundColor: 'white' }}></View>
						</TouchableOpacity>
					</View>
					<View style={{ position: 'absolute', top: 130, alignSelf: 'center' }}>
						<View style={{ flexDirection: 'row', alignItems: 'center' }}>
							<AntDesign name="videocamera" size={20} color="white" />
							<Text whiteColor thin style={{ marginHorizontal: 10 }}>
								Batsy Camera
							</Text>
							<View style={{ height: 20, width: 1, marginHorizontal: 5, backgroundColor: 'white' }} />
							<Text whiteColor ultraThin>
								Real Identity
							</Text>
						</View>
					</View>
					{loading ? (
						<View
							style={{
								backgroundColor: 'rgba(113, 41, 52,.7)',
								height: '100%',
								width: '100%',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<CircleFade color="white" size={150} />
						</View>
					) : null}
				</>
			)}
		</View>
	);
};

export default OpenCamera;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	// cameraSkin: {
	// 	position: 'absolute',
	// 	height: '100%',
	// 	width: '100%',
	// 	backgroundColor: 'rgba(255, 255, 255,0.5)',
	// },
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

	rectangleContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'transparent',
		position: 'absolute',
	},
	rectangle: {
		borderLeftColor: 'rgba(0, 0, 0, .7)',
		borderRightColor: 'rgba(0, 0, 0, .7)',
		borderTopColor: 'rgba(0, 0, 0, .7)',
		borderBottomColor: 'rgba(0, 0, 0, .7)',
		borderLeftWidth: deviceWidth / 8,
		borderRightWidth: deviceWidth / 3.5,
		borderTopWidth: deviceHeight / 5,
		borderBottomWidth: deviceHeight / 2.7,
		// top: -100,
		height: deviceHeight + 50,
		width: deviceWidth + 70,
	},
	rectangleColor: {
		height: 250,
		width: 350,
		backgroundColor: 'transparent',
	},
	topLeft: {
		width: 200,
		height: 200,
		borderTopWidth: 2,
		borderLeftWidth: 2,
		position: 'absolute',
		left: -1,
		top: -1,
		borderLeftColor: 'white',
		borderTopColor: 'white',
		borderTopLeftRadius: 10,
	},
	topRight: {
		width: 200,
		height: 200,
		borderTopWidth: 2,
		borderRightWidth: 2,
		position: 'absolute',
		right: -1,
		top: -1,
		borderRightColor: 'white',
		borderTopColor: 'white',
		borderTopRightRadius: 10,
	},
	bottomLeft: {
		width: 200,
		height: 200,
		borderBottomWidth: 2,
		borderLeftWidth: 2,
		position: 'absolute',
		left: -1,
		bottom: -1,
		borderLeftColor: 'white',
		borderBottomColor: 'white',
		borderBottomLeftRadius: 10,
	},
	bottomRight: {
		width: 200,
		height: 200,
		borderBottomWidth: 2,
		borderRightWidth: 2,
		position: 'absolute',
		right: -1,
		bottom: -1,
		borderRightColor: 'white',
		borderBottomColor: 'white',
		borderBottomRightRadius: 10,
	},

	rectangleContainer2: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'transparent',
		position: 'absolute',
	},
	rectangle2: {
		borderLeftColor: 'rgba(0, 0, 0, .7)',
		borderRightColor: 'rgba(0, 0, 0, .7)',
		borderTopColor: 'rgba(0, 0, 0, .7)',
		borderBottomColor: 'rgba(0, 0, 0, .7)',
		borderLeftWidth: 10,
		borderRightWidth: deviceWidth / 5,
		borderTopWidth: deviceHeight / 4,
		borderBottomWidth: deviceHeight / 2.2,
		// top: -100,
		height: deviceHeight + 50,
		width: deviceWidth + 70,
	},
	rectangleColor2: {
		height: 250,
		width: 350,
		backgroundColor: 'transparent',
	},
	topLeft2: {
		width: 200,
		height: 200,
		borderTopWidth: 2,
		borderLeftWidth: 2,
		position: 'absolute',
		left: -1,
		top: -1,
		borderLeftColor: 'white',
		borderTopColor: 'white',
		borderTopLeftRadius: 10,
	},
	topRight2: {
		width: 200,
		height: 200,
		borderTopWidth: 2,
		borderRightWidth: 2,
		position: 'absolute',
		right: -1,
		top: -1,
		borderRightColor: 'white',
		borderTopColor: 'white',
		borderTopRightRadius: 10,
	},
	bottomLeft2: {
		width: 200,
		height: 200,
		borderBottomWidth: 2,
		borderLeftWidth: 2,
		position: 'absolute',
		left: -1,
		bottom: -1,
		borderLeftColor: 'white',
		borderBottomColor: 'white',
		borderBottomLeftRadius: 10,
	},
	bottomRight2: {
		width: 200,
		height: 200,
		borderBottomWidth: 2,
		borderRightWidth: 2,
		position: 'absolute',
		right: -1,
		bottom: -1,
		borderRightColor: 'white',
		borderBottomColor: 'white',
		borderBottomRightRadius: 10,
	},
});
// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 	},
// 	// cameraSkin: {
// 	// 	position: 'absolute',
// 	// 	height: '100%',
// 	// 	width: '100%',
// 	// 	backgroundColor: 'rgba(255, 255, 255,0.5)',
// 	// },
// 	viewFoot: {
// 		marginTop: 5,
// 		marginBottom: 10,
// 		marginHorizontal: -10,
// 		paddingHorizontal: 25,
// 		flexDirection: 'row',
// 		// position: 'absolute',
// 		// bottom: 0,
// 		// backgroundColor: 'white',
// 	},

// 	footButton: {
// 		flex: 1,
// 		marginHorizontal: 10,
// 	},
// 	flex: {
// 		height: '92%',
// 		marginHorizontal: 30,
// 	},
// 	topBlock: { height: 50 },

// 	rectangleContainer: {
// 		flex: 1,
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 		backgroundColor: 'transparent',
// 		position: 'absolute',
// 	},
// 	rectangle: {
// 		borderLeftColor: 'rgba(0, 0, 0, .7)',
// 		borderRightColor: 'rgba(0, 0, 0, .7)',
// 		borderTopColor: 'rgba(0, 0, 0, .7)',
// 		borderBottomColor: 'rgba(0, 0, 0, .7)',
// 		borderLeftWidth: 10,
// 		borderRightWidth: deviceWidth / 5,
// 		borderTopWidth: deviceHeight / 4,
// 		borderBottomWidth: deviceHeight / 2.2,
// 		// top: -100,
// 		height: deviceHeight + 50,
// 		width: deviceWidth + 70,
// 	},
// 	rectangleColor: {
// 		height: 250,
// 		width: 350,
// 		backgroundColor: 'transparent',
// 	},
// 	topLeft: {
// 		width: 200,
// 		height: 200,
// 		borderTopWidth: 2,
// 		borderLeftWidth: 2,
// 		position: 'absolute',
// 		left: -1,
// 		top: -1,
// 		borderLeftColor: 'white',
// 		borderTopColor: 'white',
// 		borderTopLeftRadius: 10,
// 	},
// 	topRight: {
// 		width: 200,
// 		height: 200,
// 		borderTopWidth: 2,
// 		borderRightWidth: 2,
// 		position: 'absolute',
// 		right: -1,
// 		top: -1,
// 		borderRightColor: 'white',
// 		borderTopColor: 'white',
// 		borderTopRightRadius: 10,
// 	},
// 	bottomLeft: {
// 		width: 200,
// 		height: 200,
// 		borderBottomWidth: 2,
// 		borderLeftWidth: 2,
// 		position: 'absolute',
// 		left: -1,
// 		bottom: -1,
// 		borderLeftColor: 'white',
// 		borderBottomColor: 'white',
// 		borderBottomLeftRadius: 10,
// 	},
// 	bottomRight: {
// 		width: 200,
// 		height: 200,
// 		borderBottomWidth: 2,
// 		borderRightWidth: 2,
// 		position: 'absolute',
// 		right: -1,
// 		bottom: -1,
// 		borderRightColor: 'white',
// 		borderBottomColor: 'white',
// 		borderBottomRightRadius: 10,
// 	},
// });
// return (
// 	<View style={styles.container}>
// 		{/* <Header
// 			leftComponent={<AntDesign name="leftcircleo" size={20} color="#072273" style={{}} />}
// 			centerComponent={<Text medium>{t('address_info')}</Text>}
// 		/> */}

// 		<Cam type={type} />
// 		<View style={styles.rectangleContainer}>
// 			<View style={styles.rectangle}>
// 				<View style={styles.rectangleColor} />
// 				<View style={styles.topLeft} />
// 				<View style={styles.topRight} />
// 				<View style={styles.bottomLeft} />
// 				<View style={styles.bottomRight} />
// 			</View>
// 		</View>

// 		<View
// 			style={{
// 				// backgroundColor: 'red',
// 				backgroundColor: 'transparent',
// 				position: 'absolute',
// 				bottom: 0,
// 				width: '100%',
// 				alignItems: 'center',
// 				marginBottom: 15,
// 			}}
// 		>
// 			<View style={{ marginBottom: 30 }}>
// 				<Text bold whiteColor style={{ marginBottom: 25, fontSize: 25, textAlign: 'center' }}>
// 					ID Scan
// 				</Text>
// 				<Text whiteColor>Make sure your face is clear and your ID</Text>
// 				<Text whiteColor style={{ textAlign: 'center' }}>
// 					is easy to read.
// 				</Text>
// 			</View>

// 			<TouchableOpacity
// 				style={{
// 					borderWidth: 5,
// 					borderColor: 'white',
// 					height: 70,
// 					width: 70,
// 					borderRadius: 100,
// 					alignItems: 'center',
// 					justifyContent: 'space-around',
// 				}}
// 			>
// 				<View style={{ height: 50, width: 50, borderRadius: 100, backgroundColor: 'white' }}></View>
// 				{/* <Text style={styles.text}> Flip </Text> */}
// 			</TouchableOpacity>
// 		</View>
// 		<View style={{ position: 'absolute', top: 130, alignSelf: 'center' }}>
// 			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
// 				<AntDesign name="videocamera" size={20} color="white" />
// 				<Text whiteColor thin style={{ marginHorizontal: 10 }}>
// 					Batsy Camera
// 				</Text>
// 				<View style={{ height: 20, width: 1, marginHorizontal: 5, backgroundColor: 'white' }} />
// 				<Text whiteColor ultraThin>
// 					Real Identity
// 				</Text>
// 			</View>
// 		</View>
// 		{/* <View
// 			style={{ backgroundColor: 'white', position: 'absolute', bottom: 0 }}
// 			onPress={() => {
// 				setType(
// 					type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back
// 				);
// 			}}
// 		>
// 			<TouchableOpacity
// 				style={{
// 					borderWidth: 2,
// 					borderColor: 'white',
// 					height: 50,
// 					width: 50,
// 					borderRadius: 100,
// 				}}
// 			>
// 				<Text style={styles.text}> Flip </Text>
// 			</TouchableOpacity>
// 			<Text style={styles.text}> Flip </Text>
// 		</View>

//  */}
// 	</View>
// );

// <View
// style={{
// 	// backgroundColor: 'red',
// 	backgroundColor: 'transparent',
// 	position: 'absolute',
// 	bottom: 0,
// 	width: '100%',
// 	alignItems: 'center',
// 	marginBottom: 15,
// }}
// >
// <View style={{ marginBottom: 30 }}>
// 	<Text bold whiteColor style={{ marginBottom: 25, fontSize: 25, textAlign: 'center' }}>
// 		ID Scan
// 	</Text>
// 	<Text whiteColor>Make sure your face is clear and your ID</Text>
// 	<Text whiteColor style={{ textAlign: 'center' }}>
// 		is easy to read.
// 	</Text>
// </View>

// <TouchableOpacity
// 	style={{
// 		borderWidth: 5,
// 		borderColor: 'white',
// 		height: 70,
// 		width: 70,
// 		borderRadius: 100,
// 		alignItems: 'center',
// 		justifyContent: 'space-around',
// 	}}
// >
// 	<View style={{ height: 50, width: 50, borderRadius: 100, backgroundColor: 'white' }}></View>
// 	{/* <Text style={styles.text}> Flip </Text> */}
// </TouchableOpacity>
// </View>

// );

// <View
// style={{
// 	// backgroundColor: 'red',
// 	backgroundColor: 'transparent',
// 	position: 'absolute',
// 	bottom: 0,
// 	width: '100%',
// 	alignItems: 'center',
// 	marginBottom: 15,
// }}
// >
// <View style={{ marginBottom: 30 }}>
// 	<Text bold whiteColor style={{ marginBottom: 25, fontSize: 25, textAlign: 'center' }}>
// 		ID Scan
// 	</Text>
// 	<Text whiteColor>Make sure your face is clear and your ID</Text>
// 	<Text whiteColor style={{ textAlign: 'center' }}>
// 		is easy to read.
// 	</Text>
// </View>

// <TouchableOpacity
// 	style={{
// 		borderWidth: 5,
// 		borderColor: 'white',
// 		height: 70,
// 		width: 70,
// 		borderRadius: 100,
// 		alignItems: 'center',
// 		justifyContent: 'space-around',
// 	}}
// >
// 	<View style={{ height: 50, width: 50, borderRadius: 100, backgroundColor: 'white' }}></View>
// 	{/* <Text style={styles.text}> Flip </Text> */}
// </TouchableOpacity>
// </View>
