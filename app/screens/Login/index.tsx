import React from 'react';
import { View } from 'react-native';
import { LoginScreen, CustomProgressBar } from '@components';
import { Images } from '@config';
import { useNavigation } from '@react-navigation/native';
import { openInbox } from 'react-native-email-link';
import { Ionicons } from '@expo/vector-icons';
import { authServices } from '@services';
import { showMessage } from '@components';
import { ROUTES } from '@config';

const Login = () => {
	const { loginWithAccountAndPassword, resetPassword } = authServices;
	const { navigate } = useNavigation();

	const [modal, setModal] = React.useState(false);
	const [data, setData] = React.useState({
		email: '',
		password: '',
		account: '',
	});

	const updateData = (key: any, value: any) => {
		setData({
			...data,
			[key]: value,
		});
	};

	const loginHandle = async () => {
		delete data['email'];
		setModal(true);
		try {
			await loginWithAccountAndPassword(data);
			setModal(false);
			navigate('Home');
		} catch (error) {
			setModal(false);
			showMessage({ message: 'Error', description: error.message, type: 'danger' });
			('');
		}
	};

	const onReset = async () => {
		setModal(true);
		console.log(data);
		console.log('reseting');
		try {
			const response = await resetPassword(data);
			console.log(response);
			setModal(false);
		} catch (error) {
			setModal(false);
			showMessage({ message: 'Error', description: error.message, type: 'danger' });
			console.log('error', error);
		}

		// setModal(true);
		//q setTimeout(() => {
		// 	setModal(false);
		// }, 2000);
	};

	// const forgotPassword = (accountNumber, email) => {
	//   // console.warn(parseInt(fullnames, 10));
	//   // signIn(username, password);

	//   // console.warn({ username, password` });
	//   // setData({
	//   //   ...data,
	//   //   isLoading: true,
	//   // });

	//   // let signInData = {
	//   //   email: username,
	//   //   password: password,
	//   // };
	//   // console.warn({ fullnames, email });
	//   setData({
	//     ...data,
	//     isSpinnerVisible: true,
	//   });

	//   let forgotdata = {
	//     accountNumber: parseInt(accountNumber, 10),
	//     email: email,
	//   };

	//   FetchData.post("/resetPassword", forgotdata)
	//     .then((response) => {
	//       if (response.data.result === "Email Sent") {
	//         console.log(response.data.dbToken);
	//         Alert.alert(
	//           "Email Sent",
	//           "We have sent a one time OTP to your email to reset you Password",
	//           [
	//             {
	//               text: "Open Email",
	//               onPress: () => {
	//                 openInbox({
	//                   message: "Whatcha wanna do?",
	//                   cancelLabel: "Go back!",
	//                 }),
	//                   setData({
	//                     ...data,
	//                     isSpinnerVisible: false,
	//                   });
	//                 navigation.navigate("VerifyPasswordReset", {
	//                   dbToken: response.data.dbToken,
	//                   Email: email,
	//                 }); //inserted
	//               },
	//             },
	//           ],
	//           { cancelable: false }
	//         );
	//         // navigation.navigate("VerifyPasswordReset"); //inserted
	//       }

	//       if (response.data.result === "No User") {
	//         Alert.alert(
	//           "Email Not Found",
	//           "No user with this Email found",
	//           [
	//             {
	//               text: " Ok",
	//               onPress: () => {
	//                 setData({
	//                   ...data,
	//                   isSpinnerVisible: false,
	//                 });
	//               },
	//             },
	//           ],
	//           { cancelable: false }
	//         );
	//       }

	//       if (response.data.error === "Error Occurred while Requesting") {
	//         Alert.alert(
	//           "Email Not Sent",
	//           "Something went Wrong Try again",
	//           [
	//             {
	//               text: "OK",
	//               onPress: () =>
	//                 setData({
	//                   ...data,
	//                   isSpinnerVisible: false,
	//                 }),
	//             },
	//           ],
	//           { cancelable: false }
	//         );
	//       }
	//     })

	//     .catch((err) => {
	//       console.log(err.request);

	//       Alert.alert(err.message, "Check your Internet Connection", [
	//         {
	//           text: "Ok",
	//           onPress: () => {
	//             setData({
	//               ...data,
	//               isSpinnerVisible: false,
	//             });
	//           },
	//         },
	//       ]);
	//     });
	// };
	// const handleCancel = () => {
	//   setData({
	//     ...data,
	//     isDialogVisible: false,
	//   });
	// };
	// const onSubmit = () => {
	//   axios
	//     .post("http://192.168.8.141:4547/session", { pot: "pot" })
	//     .then((response) => {
	//       console.log(response.data.valid);
	//     })
	//     .catch((error) => {
	//       console.log(error);
	//       setData({
	//         ...data,
	//         isLoading: false,
	//       });
	//     });

	//   // navigation.navigate("MyStack");
	//   // setData({
	//   //   ...data,
	//   //   isDialogVisible: false,
	//   // });
	// };
	return (
		<View>
			<CustomProgressBar loaderText="Please wait" loader={3} visible={modal} />
			<LoginScreen
				signupText="Forgot Password"
				loginButtonText="Login Account"
				passwordSecure={true}
				accountTextInputValue={data?.account}
				passwordTextInputValue={data?.password}
				emailTextInputValue={data?.email}
				resetAccountTextInputValue={data.account}
				spinnerEnable={true}
				spinnerVisibility={false}
				source={Images.background1}
				onPressLogin={loginHandle}
				// onReset={() => forgotPassword(data.forgotFullname, data.forgotemail)}

				onReset={onReset}
				repasswordIconComponent={<Ionicons name="md-mail" style={{ fontSize: 25, color: 'black' }} />}
				emailIconComponent={<Ionicons name="ios-contact" style={{ fontSize: 25, color: 'black' }} />}
				usernameIconComponent={<Ionicons name="ios-person" style={{ fontSize: 25, color: 'black' }} />}
				emailOnChangeText={(value: any) => updateData('email', value)}
				fullNameOnchangeText={(value: any) => updateData('account', value)}
				onPressSettings={() => navigate('LandingScreen')}
				accountChangeText={(value: any) => updateData('account', value)}
				passwordOnChangeText={(value: any) => updateData('password', value)}
			/>
		</View>
	);
};

export default Login;
