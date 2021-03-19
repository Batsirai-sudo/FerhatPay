// import React from "react";
// import {
//   View,
//   Text,
//   ScrollView,
//   TouchableOpacity,
//   Dimensions,
//   TextInput,
//   Platform,
//   StyleSheet,
// } from "react-native";
// import { StatusBar } from "expo-status-bar";
// import axios from "axios";
// import Spinner from "react-native-loading-spinner-overlay";
// import ErrorMessage from "./ErrorMessage";

// import * as Animatable from "react-native-animatable";
// import { LinearGradient } from "expo-linear-gradient";
// import FontAwesome from "react-native-vector-icons/FontAwesome";
// import Feather from "react-native-vector-icons/Feather";
// import { Formik } from "formik";
// import * as Yup from "yup";

// const validationSchema = Yup.object().shape({
//   name: Yup.string()
//     .label("Name")
//     .required()
//     .min(2, "Must have at least 2 characters"),
//   email: Yup.string()
//     .label("Email")
//     .email("Enter a valid email")
//     .required("Please enter a registered email"),
//   password: Yup.string()
//     .label("Password")
//     .required()
//     .min(4, "Password must have more than 4 characters "),
//   confirmPassword: Yup.string()
//     .oneOf([Yup.ref("password")], "Confirm Password must matched Password")
//     .required("Confirm Password is required"),
// });

// const signUp2 = ({ route, navigation }) => {
//   //   const { id, mobile } = route.params;
//   //   console.log(id);
//   //   console.log(mobile);

//   //   const [data, setData] = React.useState({
//   //     username: "",
//   //     lastname: "",
//   //     email: "",
//   //     dob: "",
//   //     gender: "",
//   //     state: "",
//   //     streetAddress: "",
//   //     nationalID: "",
//   //     studentID: "",
//   //     isLoading: false,
//   //     password: "",
//   //     confirm_password: "",
//   //     check_nameInputChange: false,
//   //     check_lastNameInputChange: false,
//   //     check_emailInputChange: false,
//   //     check_dobInputChange: false,
//   //     check_genderInputChange: false,
//   //     check_stateInputChange: false,
//   //     check_streetAddressInputChange: false,
//   //     check_nationalIDInputChange: false,
//   //     check_studentIDInputChange: false,

//   //     secureTextEntry: true,
//   //     confirm_secureTextEntry: true,
//   //   });

//   //   const nameInputChange = (val) => {
//   //     if (val.length !== 0) {
//   //       setData({
//   //         ...data,
//   //         username: val,
//   //         check_nameInputChange: true,
//   //       });
//   //     } else {
//   //       setData({
//   //         ...data,
//   //         username: val,
//   //         check_nameInputChange: false,
//   //       });
//   //     }
//   //   };

//   //   const lastNameInputChange = (val) => {
//   //     if (val.length !== 0) {
//   //       setData({
//   //         ...data,
//   //         lastname: val,
//   //         check_lastNameInputChange: true,
//   //       });
//   //     } else {
//   //       setData({
//   //         ...data,
//   //         lastname: val,
//   //         check_lastNameInputChange: false,
//   //       });
//   //     }
//   //   };

//   //   const emailInputChange = (val) => {
//   //     if (val.length !== 0) {
//   //       setData({
//   //         ...data,
//   //         email: val,
//   //         check_emailInputChange: true,
//   //       });
//   //     } else {
//   //       setData({
//   //         ...data,
//   //         email: val,
//   //         check_emailInputChange: false,
//   //       });
//   //     }
//   //   };

//   //   const dobInputChange = (val) => {
//   //     if (val.length !== 0) {
//   //       setData({
//   //         ...data,
//   //         dob: val,
//   //         check_dobInputChange: true,
//   //       });
//   //     } else {
//   //       setData({
//   //         ...data,
//   //         dob: val,
//   //         check_dobInputChange: false,
//   //       });
//   //     }
//   //   };

//   //   const genderInputChange = (val) => {
//   //     if (val.length !== 0) {
//   //       setData({
//   //         ...data,
//   //         gender: val,
//   //         check_genderInputChange: true,
//   //       });
//   //     } else {
//   //       setData({
//   //         ...data,
//   //         gender: val,
//   //         check_genderInputChange: false,
//   //       });
//   //     }
//   //   };

//   //   const stateInputChange = (val) => {
//   //     if (val.length !== 0) {
//   //       setData({
//   //         ...data,
//   //         state: val,
//   //         check_stateInputChange: true,
//   //       });
//   //     } else {
//   //       setData({
//   //         ...data,
//   //         state: val,
//   //         check_stateInputChange: false,
//   //       });
//   //     }
//   //   };

//   //   const streetInputChange = (val) => {
//   //     if (val.length !== 0) {
//   //       setData({
//   //         ...data,
//   //         streetAddress: val,
//   //         check_streetAddressInputChange: true,
//   //       });
//   //     } else {
//   //       setData({
//   //         ...data,
//   //         streetAddress: val,
//   //         check_streetAddressInputChange: false,
//   //       });
//   //     }
//   //   };

//   //   const handlePasswordChange = (val) => {
//   //     setData({
//   //       ...data,
//   //       password: val,
//   //     });
//   //   };

//   //   const handleConfirmPasswordChange = (val) => {
//   //     setData({
//   //       ...data,
//   //       confirm_password: val,
//   //     });
//   //   };

//   //   const updateSecureTextEntry = () => {
//   //     setData({
//   //       ...data,
//   //       secureTextEntry: !data.secureTextEntry,
//   //     });
//   //   };

//   //   const updateConfirmSecureTextEntry = () => {
//   //     setData({
//   //       ...data,
//   //       confirm_secureTextEntry: !data.confirm_secureTextEntry,
//   //     });
//   //   };

//   //   const nationalIDInputChange = (val) => {
//   //     if (val.length !== 0) {
//   //       setData({
//   //         ...data,
//   //         nationalID: val,
//   //         check_nationalIDInputChange: true,
//   //       });
//   //     } else {
//   //       setData({
//   //         ...data,
//   //         gender: val,
//   //         check_nationalIDInputChange: false,
//   //       });
//   //     }
//   //   };

//   //   const studentIDInputChange = (val) => {
//   //     if (val.length !== 0) {
//   //       setData({
//   //         ...data,
//   //         studentID: val,
//   //         check_studentIDInputChange: true,
//   //       });
//   //     } else {
//   //       setData({
//   //         ...data,
//   //         gender: val,
//   //         check_studentIDInputChange: false,
//   //       });
//   //     }
//   //   };

//   //   const onSubmitForm = () => {
//   //     setData({
//   //       ...data,
//   //       isLoading: true,
//   //     });

//   //     let formData = {
//   //       FullName: data.username,
//   //       LastName: data.lastname,
//   //       Password: data.password,
//   //       // confirmpassword: data.confirm_password,
//   //       Email: data.email,
//   //       DOB: data.dob,
//   //       gender: data.gender,
//   //       State: data.state,
//   //       StreetAddress: data.streetAddress,
//   //       NationalID: data.nationalID,
//   //       StudentID: data.studentID,
//   //     };
//   //     console.log(formData);

//   //     axios
//   //       .post("http://192.168.0.109:4547/registration", {
//   //         data: formData,
//   //         id: 55,
//   //       })
//   //       .then((response) => {
//   //         console.log(response.data);

//   //         setData({
//   //           ...data,
//   //           isLoading: false,
//   //         });
//   //         navigation.navigate("Successfull_Registration");
//   //         //   Alert.alert(
//   //         //     "otp Sent",
//   //         //     "Your digit  was",
//   //         //     [
//   //         //       {
//   //         //         text: "OK",
//   //         //         // onPress: () =>
//   //         //         //   this.props.navigation.push("SignUpScreen", {
//   //         //         //     id: this.state.idText,
//   //         //         //   }),
//   //         //       },
//   //         //     ],
//   //         //     { cancelable: false }
//   //         //   );
//   //       })
//   //       .catch((error) => {
//   //         console.log(error);
//   //       });
//   //   };

//   return (
//     <View style={styles.container}>
//       {/* <StatusBar backgroundColor="#05014a" barStyle="light-content" /> */}
//       <View style={styles.header}>
//         <Spinner visible={data.isLoading} />

//         <Text style={styles.text_header}>
//           Register{mobile} Now!{id}
//         </Text>
//       </View>
//       <StatusBar style="light" hidden={false} />
//       <Animatable.View animation="fadeInUpBig" style={styles.footer}>
//         <Formik
//           initialValues={{
//             name: "",
//             email: "",
//             password: "",
//             confirmPassword: "",
//           }}
//           onSubmit={(values) => {
//             this.handleSubmit(values);
//           }}
//           validationSchema={validationSchema}
//         >
//           {({
//             handleChange,
//             values,
//             handleSubmit,
//             errors,
//             isValid,
//             touched,
//             handleBlur,
//             isSubmitting,
//           }) => (
//             <ScrollView showsVerticalScrollIndicator={false}>
//               <View>
//                 <Text style={styles.text_footer}>FirstName </Text>

//                 <View style={styles.action}>
//                   <FontAwesome name="user" color="#05375a" size={20} />

//                   <TextInput
//                     placeholder="Your FirstName"
//                     style={styles.textInput}
//                     value={values.name}
//                     onChangeText={handleChange("name")}
//                     onBlur={handleBlur("name")}
//                   />

//                   {/* {data.check_nameInputChange ? (
//                     <Animatable.View animation="bounceIn">
//                       <Feather name="check-circle" color="green" size={20} />
//                     </Animatable.View>
//                   ) : null} */}
//                 </View>
//                 <ErrorMessage errorValue={touched.name && errors.name} />

//                 {/* <Text style={{ ...styles.text_footer, marginTop: 35 }}>
//                   LastName
//                 </Text>

//                 <View style={styles.action}>
//                   <FontAwesome name="users" color="#05375a" size={20} />

//                   <TextInput
//                     placeholder="Your LastName"
//                     style={styles.textInput}
//                     autoCapitalize="none"
//                     onChangeText={(val) => lastNameInputChange(val)}
//                   />

//                   {data.check_lastNameInputChange ? (
//                     <Animatable.View animation="bounceIn">
//                       <Feather name="check-circle" color="green" size={20} />
//                     </Animatable.View>
//                   ) : null}
//                 </View>

//                 <Text
//                   style={[
//                     styles.text_footer,
//                     {
//                       marginTop: 35,
//                     },
//                   ]}
//                 >
//                   Password
//                 </Text>
//                 <View style={styles.action}>
//                   <Feather name="lock" color="#05375a" size={20} />
//                   <TextInput
//                     placeholder="Your Password"
//                     secureTextEntry={data.secureTextEntry ? true : false}
//                     style={styles.textInput}
//                     autoCapitalize="none"
//                     onChangeText={(val) => handlePasswordChange(val)}
//                   />
//                   <TouchableOpacity onPress={updateSecureTextEntry}>
//                     {data.secureTextEntry ? (
//                       <Feather name="eye-off" color="blue" size={20} />
//                     ) : (
//                       <Feather name="eye" color="grey" size={20} />
//                     )}
//                   </TouchableOpacity>
//                 </View>

//                 <Text
//                   style={[
//                     styles.text_footer,
//                     {
//                       marginTop: 35,
//                     },
//                   ]}
//                 >
//                   Confirm Password
//                 </Text>
//                 <View style={styles.action}>
//                   {/* <Feather name="lock" color="#05375a" size={20} />
//                   <FontAwesome name="unlock-alt" color="#05375a" size={20} />
//                   <TextInput
//                     placeholder="Confirm Your Password"
//                     secureTextEntry={
//                       data.confirm_secureTextEntry ? true : false
//                     }
//                     style={styles.textInput}
//                     autoCapitalize="none"
//                     onChangeText={(val) => handleConfirmPasswordChange(val)}
//                   />
//                   <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
//                     {data.confirm_secureTextEntry ? (
//                       <Feather name="eye-off" color="blue" size={20} />
//                     ) : (
//                       <Feather name="eye" color="grey" size={20} />
//                     )}
//                   </TouchableOpacity>
//                 </View>

//                 <Text style={{ ...styles.text_footer, marginTop: 35 }}>
//                   E-mail
//                 </Text>
//                 <View style={styles.action}>
//                   <FontAwesome name="envelope" color="#05375a" size={20} />
//                   <TextInput
//                     placeholder="Your E-mail"
//                     style={styles.textInput}
//                     autoCapitalize="none"
//                     onChangeText={(val) => emailInputChange(val)}
//                   />
//                   {data.check_emailInputChange ? (
//                     <Animatable.View animation="bounceIn">
//                       <Feather name="check-circle" color="green" size={20} />
//                     </Animatable.View>
//                   ) : null}
//                 </View>

//                 <Text style={{ ...styles.text_footer, marginTop: 35 }}>
//                   Dirth Of Birth
//                 </Text>
//                 <View style={styles.action}>
//                   <FontAwesome name="calendar" color="#05375a" size={20} />
//                   <TextInput
//                     placeholder="Your DOB"
//                     style={styles.textInput}
//                     autoCapitalize="none"
//                     onChangeText={(val) => dobInputChange(val)}
//                   />
//                   {data.check_dobInputChange ? (
//                     <Animatable.View animation="bounceIn">
//                       <Feather name="check-circle" color="green" size={20} />
//                     </Animatable.View>
//                   ) : null}
//                 </View>

//                 <Text style={{ ...styles.text_footer, marginTop: 35 }}>
//                   Gender
//                 </Text>
//                 <View style={styles.action}>
//                   <FontAwesome name="transgender" color="#05375a" size={20} />
//                   <TextInput
//                     placeholder="Your Gender"
//                     style={styles.textInput}
//                     autoCapitalize="none"
//                     onChangeText={(val) => genderInputChange(val)}
//                   />
//                   {data.check_genderInputChange ? (
//                     <Animatable.View animation="bounceIn">
//                       <Feather name="check-circle" color="green" size={20} />
//                     </Animatable.View>
//                   ) : null}
//                 </View>

//                 <Text style={{ ...styles.text_footer, marginTop: 35 }}>
//                   State/ City
//                 </Text>
//                 <View style={styles.action}>
//                   <FontAwesome name="bank" color="#05375a" size={20} />
//                   <TextInput
//                     placeholder="Your City"
//                     style={styles.textInput}
//                     autoCapitalize="none"
//                     onChangeText={(val) => stateInputChange(val)}
//                   />
//                   {data.check_stateInputChange ? (
//                     <Animatable.View animation="bounceIn">
//                       <Feather name="check-circle" color="green" size={20} />
//                     </Animatable.View>
//                   ) : null}
//                 </View>

//                 <Text style={{ ...styles.text_footer, marginTop: 35 }}>
//                   Street Address
//                 </Text>
//                 <View style={styles.action}>
//                   <FontAwesome name="address-book" color="#05375a" size={20} />
//                   <TextInput
//                     placeholder="Your Street Address"
//                     style={styles.textInput}
//                     autoCapitalize="none"
//                     onChangeText={(val) => streetInputChange(val)}
//                   />
//                   {data.check_streetAddressInputChange ? (
//                     <Animatable.View animation="bounceIn">
//                       <Feather name="check-circle" color="green" size={20} />
//                     </Animatable.View>
//                   ) : null}
//                 </View>

//                 <Text style={{ ...styles.text_footer, marginTop: 35 }}>
//                   National ID
//                 </Text>
//                 <View style={styles.action}>
//                   <FontAwesome name="id-card" color="#05375a" size={20} />
//                   <TextInput
//                     placeholder="Your NationalID"
//                     style={styles.textInput}
//                     autoCapitalize="none"
//                     onChangeText={(val) => nationalIDInputChange(val)}
//                   />
//                   {data.check_nationalIDInputChange ? (
//                     <Animatable.View animation="bounceIn">
//                       <Feather name="check-circle" color="green" size={20} />
//                     </Animatable.View>
//                   ) : null}
//                 </View>

//                 <Text style={{ ...styles.text_footer, marginTop: 35 }}>
//                   Student ID
//                 </Text>
//                 <View style={styles.action}>
//                   <FontAwesome name="id-badge" color="#05375a" size={20} />
//                   <TextInput
//                     placeholder="Your StudentID"
//                     style={styles.textInput}
//                     autoCapitalize="none"
//                     onChangeText={(val) => studentIDInputChange(val)}
//                   />
//                   {data.check_studentIDInputChange ? (
//                     <Animatable.View animation="bounceIn">
//                       <Feather name="check-circle" color="green" size={20} />
//                     </Animatable.View>
//                   ) : null}
//                 </View>

//                 <View style={styles.textPrivate}>
//                   <Text style={styles.color_textPrivate}>
//                     By signing up you agree to our
//                   </Text>
//                   <Text
//                     style={[styles.color_textPrivate, { fontWeight: "bold" }]}
//                   >
//                     {" "}
//                     Terms of service
//                   </Text>
//                   <Text style={styles.color_textPrivate}> and</Text>
//                   <Text
//                     style={[styles.color_textPrivate, { fontWeight: "bold" }]}
//                   >
//                     {" "}
//                     Privacy policy
//                   </Text>
//                 </View>
//                 <View style={styles.button}>
//                   <TouchableOpacity
//                     style={styles.signIn}
//                     // onPress={() => this.props.navigation.push('Successfull_Registration')}
//                     onPress={onSubmitForm}
//                   >
//                     <LinearGradient
//                       colors={["#08d4c4", "#05014a"]}
//                       style={styles.signIn}
//                     >
//                       <Text
//                         style={[
//                           styles.textSign,
//                           {
//                             color: "#fff",
//                           },
//                         ]}
//                       >
//                         Sign Up
//                       </Text>
//                     </LinearGradient>
//                   </TouchableOpacity>

//                   {/* <TouchableOpacity
//                 onPress={() => navigation.goBack()}
//                 style={[
//                   styles.signIn,
//                   {
//                     borderColor: "#05014a",
//                     borderWidth: 1,
//                     marginTop: 15,
//                   },
//                 ]}
//               >
//                 <Text
//                   style={[
//                     styles.textSign,
//                     {
//                       color: "#05014a",
//                     },
//                   ]}
//                 >
//                   Sign In
//                 </Text>
//                  </TouchableOpacity>
//                 </View>
//                */}
//               </View>
//             </ScrollView>
//           )}
//         </Formik>
//       </Animatable.View>
//     </View>
//   );
// };

// export default signUp2;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     //   backgroundColor: '#009387'
//     backgroundColor: "#05014a",
//   },
//   header: {
//     flex: 1,
//     justifyContent: "flex-end",
//     paddingHorizontal: 20,
//     paddingBottom: 10,
//     marginTop: 30,
//   },
//   footer: {
//     flex: 10,
//     backgroundColor: "#fff",
//     borderTopLeftRadius: 30,
//     borderTopRightRadius: 30,
//     paddingHorizontal: 40,
//     paddingVertical: 30,
//   },
//   text_header: {
//     color: "#fff",
//     fontWeight: "bold",
//     fontSize: 30,
//   },
//   text_footer: {
//     color: "#05375a",
//     fontSize: 18,
//   },
//   action: {
//     flexDirection: "row",
//     marginTop: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: "#f2f2f2",
//     paddingBottom: 5,
//   },
//   textInput: {
//     flex: 1,
//     marginTop: Platform.OS === "ios" ? 0 : -12,
//     paddingLeft: 10,
//     color: "#05375a",
//   },
//   button: {
//     alignItems: "center",
//     marginTop: 50,
//   },
//   signIn: {
//     width: "100%",
//     height: 50,
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 10,
//   },
//   textSign: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   textPrivate: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     marginTop: 20,
//   },
//   color_textPrivate: {
//     color: "grey",
//   },
// });
