import React from 'react';
import {
	View,
	Button,
	TouchableOpacity,
	Dimensions,
	Platform,
	StyleSheet,
	StatusBar,
	Image,
	Alert,
	ImageBackground,
} from 'react-native';
import { Text, LoginScreen, CustomProgressBar } from '@components';
import { Images } from '@config';
import axios from 'axios';
import Spinner from 'react-native-loading-spinner-overlay';
// import { FetchData } from "../Axios/axios";
import { openInbox } from 'react-native-email-link';
import { Ionicons } from '@expo/vector-icons';

const Login = ({ navigation }) => {
	const [modal, setModal] = React.useState(false);
	const [data, setData] = React.useState({
		username: '',
		password: '',
		forgotFullname: '',
		forgotemail: '',

		check_textInputChange: false,
		secureTextEntry: true,
		isSpinnerVisible: false,
		isLoading: false,
	});

	// useEffect(() => {
	//   CheckPasswordReset
	//     .post(
	//       ""
	//     )
	//     .then(({ data }) => {
	//       setPassrest(data);

	//       console.log(data);
	//     });
	// }, []);

	// const { signIn } = React.useContext(AuthContext);

	const textInputChange = (val) => {
		// console.warn(data.username);
		if (val.length !== 0) {
			setData({
				...data,
				username: val,
				check_textInputChange: true,
			});
		} else {
			setData({
				...data,
				username: val,
				check_textInputChange: false,
			});
		}
	};

	const handlePasswordChange = (val) => {
		setData({
			...data,
			password: val,
		});
	};

	const handleFullNameOnChange = (val) => {
		setData({
			...data,
			forgotFullname: val,
		});
	};

	const handleEmailOnChange = (val) => {
		setData({
			...data,
			forgotemail: val,
		});
	};

	const updateSecureTextEntry = () => {
		setData({
			...data,
			secureTextEntry: !data.secureTextEntry,
		});
	};

	const loginHandle = (username, password) => {
		// signIn(username, password);

		// Alert.alert(
		//   "Incorrect  Details",
		//   "Account Number  and Password do not match",
		//   [
		//     {
		//       text: "OK",
		//       onPress: () =>
		//         setData({
		//           ...data,
		//           isLoading: false,
		//         }),
		//     },
		//   ],
		//   { cancelable: false }
		// );
		// console.warn({ username, password });
		setData({
			...data,
			isLoading: true,
		});

		let signInData = {
			email: username,
			password: password,
		};

		// FetchData.post("/login", signInData)
		//   .then((response) => {
		//     if (response.data.loginSuccess) {
		//       setData({
		//         ...data,
		//         isLoading: false,
		//       });

		//       navigation.navigate("SendStackScreen");

		//       // setData({
		//       //   ...data,
		//       //   isDialogVisible: true,
		//       // });
		//     }
		//     if (!response.data.loginSuccess) {
		//       Alert.alert(
		//         "Incorrect  Details",
		//         "Account Number  and Password do not match",
		//         [
		//           {
		//             text: "OK",
		//             onPress: () =>
		//               setData({
		//                 ...data,
		//                 isLoading: false,
		//               }),
		//           },
		//         ],
		//         { cancelable: false }
		//       );
		//     }
		//   })
		//   .catch((err) => {
		//     console.log(err.request);
		//     setData({
		//       ...data,
		//       isLoading: false,
		//     });
		//     Alert.alert(err.message, "Check your Internet Connection");
		//   });

		// setTimeout(
		//   () =>
		//     Alert.alert(
		//       "Incorrect  Details",
		//       "Account Number  and Password do not match",
		//       [
		//         {
		//           text: "OK",
		//           onPress: () =>
		//             setData({
		//               ...data,
		//               isLoading: false,
		//             }),
		//         },
		//       ],
		//       { cancelable: false }
		//     ),
		//   setData({
		//     ...data,
		//     isLoading: true,
		//   }),
		//   5000
		// )  axios
		//   .post(LoginFetchData.url, signInData)
		//   .then((response) => {
		//     console.log(response.data.valid);

		//     if (response.data.loginSuccess) {
		//       navigation.navigate("MyStack");

		//       setData({
		//         ...data,
		//         isLoading: false,
		//       });

		//       setData({
		//         ...data,
		//         isDialogVisible: true,
		//       });
		//     }
		//     if (response.data.valid == "false") {
		//       Alert.alert(
		//         "Incorrect  Details",
		//         "Account Number  and Password do not match",
		//         [
		//           {
		//             text: "OK",
		//             onPress: () =>
		//               setData({
		//                 ...data,
		//                 isLoading: false,
		//               }),
		//           },
		//         ],
		//         { cancelable: false }
		//       );
		//     }
		//   })
		//   .catch((error) => {
		//     console.log(error);
		//     setData({
		//       ...data,
		//       isLoading: false,
		//     });
		//   });
		// console.log(signInData);
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
				usernameTextInputValue={data.username}
				passwordTextInputValue={data.password}
				emailTextInputValue={data.forgotFullname}
				repasswordTextInputValue={data.forgotemail}
				// usernameTitle="54321"
				spinnerEnable={true}
				spinnerVisibility={data.isLoading}
				source={Images.background1}
				// loginButtonTextStyle={{ color: '#000' }}
				// onPress={loginHandle()}
				onPressLogin={() => {
					setModal(true);
					setTimeout(() => {
						setModal(false);
					}, 2000);
				}}
				onSignUp={
					() => {}
					// forgotPassword(data.forgotFullname, data.forgotemail)
				}
				// loginButtonBackgroundColor="#000"
				logoText="vuyvuyv"
				// logoComponent={require("./assets/logo.png")}
				// logoComponent="uygug"
				// logoComponent={require("./assets/logo.png")}
				repasswordIconComponent={<Ionicons name="md-mail" style={{ fontSize: 25, color: 'black' }} />}
				emailIconComponent={<Ionicons name="ios-contact" style={{ fontSize: 25, color: 'black' }} />}
				usernameIconComponent={<Ionicons name="ios-person" style={{ fontSize: 25, color: 'black' }} />}
				// usernameIconComponent={your-icon-component-for-username}
				// onSwitchValueChange={switchValue => {
				//   setSwitchValue(switchValue);
				// }}
				// switchValue={switchValue}
				emailOnChangeText={(email) => handleEmailOnChange(email)}
				fullNameOnchangeText={(fullnam) => handleFullNameOnChange(fullnam)}
				onPressSettings={() => navigation.navigate('LandingScreen')}
				usernameOnChangeText={(username) => textInputChange(username)}
				passwordOnChangeText={(password) => handlePasswordChange(password)}
			></LoginScreen>
		</View>
	);
};

export default Login;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: "#05014a",
	},
	header: {
		flex: 1,
		justifyContent: 'center',
		alignContent: 'center',
		paddingHorizontal: 20,
		paddingBottom: 50,
		paddingVertical: 20,
	},
	footer: {
		flex: 3,
		backgroundColor: '#fff',
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		paddingHorizontal: 20,
		paddingVertical: 30,
	},
	text_header: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 30,
	},
	text_footer: {
		color: '#05375a',
		fontSize: 18,
	},
	action: {
		flexDirection: 'row',
		marginTop: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#f2f2f2',
		paddingBottom: 5,
	},
	textInput: {
		flex: 1,
		marginTop: Platform.OS === 'ios' ? 0 : -12,
		paddingLeft: 10,
		color: '#05375a',
	},
	button: {
		alignItems: 'center',
		marginTop: 50,
	},
	signIn: {
		width: '100%',
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
	},
	textSign: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	image: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center',
	},
});
