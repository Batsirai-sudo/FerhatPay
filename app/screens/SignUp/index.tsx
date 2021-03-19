import React, { useState } from 'react';
import { View, Button, TouchableOpacity, Dimensions, TextInput, Platform, StyleSheet, Alert } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import IntlPhoneInput from 'react-native-intl-phone-input';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Text } from '@components';

import styles from './styles';

const SignUp = () => {
	const { navigate, goBack } = useNavigation();

	const [phoneNumber, setPhoneNumber] = useState('');
	const [errors, setErrors] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	const onChangeText = ({ dialCode, unmaskedPhoneNumber, phone_Number, isVerified }, phone) => {
		const value = dialCode + unmaskedPhoneNumber;
		setPhoneNumber(value);
	};
	// onPressLogin() {
	//   const { phoneNumber } = this.state;
	//   const payload = { phoneNumber, secretStatus: "false" };

	//   const onSuccess = ({ data }) => {
	//     // Set JSON Web Token on success
	//     // setClientToken(data.token);
	//     // console.log(data);

	//     if (data.error != null) {
	//       console.log("not null eroor");
	//       if (data.error == "Could Not complete Request") {
	//         console.log(
	//           "not null eroor ...............Could Not complete Request"
	//         );

	//         return Alert.alert(
	//           "Server Error ",
	//           data.error,
	//           [
	//             {
	//               text: "OK",
	//               onPress: () => {
	//                 this.setState({ isLoading: false });
	//               },
	//             },
	//           ],
	//           { cancelable: false }
	//         );
	//       }

	//       // return Alert.alert(
	//       //   "Error ",
	//       //   "Server not Responding",
	//       //   [
	//       //     {
	//       //       text: "OK",
	//       //       onPress: () => this.setState({ isLoading: false }),
	//       //     },
	//       //   ],
	//       //   { cancelable: false }
	//       // );
	//     }

	//     if (data.result === "User using this Account Exist") {
	//       return Alert.alert(
	//         "User Exist ",
	//         "User using this Mobile Number Exist ,Try Another one.",
	//         [
	//           {
	//             text: "OK",
	//             onPress: () => this.setState({ isLoading: false }),
	//           },
	//         ],
	//         { cancelable: false }
	//       );
	//     }

	//     if (data.result === "Continue") {
	//       console.log(data.accountid);

	//       return Alert.alert(
	//         "Successfull",
	//         "Goood",
	//         [
	//           {
	//             text: "OK",
	//             onPress: () => {
	//               this.setState({ isLoading: false });
	//               //   });    console.warn(parseInt(phoneNumber, 10));

	//               this.props.navigation.push("Verification", {
	//                 id: data.data.insertId,
	//                 mobileNumber: parseInt(phoneNumber, 10),
	//                 accountid: data.accountid,
	//               });
	//             },
	//           },
	//         ],

	//         { cancelable: false }
	//       );
	//     }

	//     console.log(data.error);
	//     console.log(data.result);

	//     // this.setState({ isLoading: false, isAuthorized: true });
	//     // this.props.navigation.push("Verification", {
	//     //   id: data.insertId,
	//     //   mobileNumber: phoneNumber,
	//     // });
	//     // console.log(data);
	//     // console.log("success");
	//     // // console.warn(data);
	//   };

	//   const onFailure = (error) => {
	//     console.warn(error);
	//     console.log("failure");
	//     console.log(error && error.response);

	//     Alert.alert(
	//       "Network Error",
	//       "status 400",
	//       [
	//         {
	//           text: "OK",
	//           onPress: () => this.setState({ isLoading: false }),
	//         },
	//       ],
	//       { cancelable: false }
	//     );
	//   };

	//   // // Show spinner when call is made
	//   this.setState({ isLoading: true });

	//   FetchData.post("/registerNumberOTP", payload)
	//     .then(onSuccess)
	//     .catch(onFailure);
	// }

	return (
		<View style={styles.container}>
			<StatusBar style="dark" hidden={false} translucent={false} />
			<View style={styles.footer}>
				<View style={{ flexDirection: 'row' }}>
					<View style={styles.headBlock}>
						<TouchableOpacity onPress={() => goBack()}>
							<AntDesign name="leftcircleo" size={27} color="#072273" style={{ marginTop: 10 }} />
						</TouchableOpacity>
					</View>

					<View style={styles.headBlock}>
						<Text style={styles.reistration}> Registration</Text>
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
						Enter your phone number, we will send
					</Text>
					<Text light style={{ textAlign: 'center' }}>
						you a code to validate your registration.
					</Text>
				</View>

				<View style={styles.containerq}>
					<IntlPhoneInput
						value={phoneNumber}
						onChangeText={onChangeText}
						defaultCountry="ZA"
						disableCountryChange={false}
					/>
				</View>

				<View
					style={{
						borderBottomColor: 'black',
						borderBottomWidth: 1,
						width: 270,
						marginLeft: 30,
					}}
				></View>

				<TouchableOpacity
					style={{
						...styles.button,
						backgroundColor: '#05014a',
						borderWidth: 1,
						borderColor: 'black',

						elevation: 6,
						flexDirection: 'row',
					}}
					// onPress={onPressLogin}
				>
					<Text
						ultraLight
						style={{
							fontSize: 20,
							color: 'white',
							marginRight: 20,
						}}
					>
						Continue
					</Text>
					<Ionicons name="md-arrow-forward" style={{ fontSize: 20, color: 'white' }} />
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default SignUp;
