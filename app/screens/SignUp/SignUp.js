import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  Button,
  Picker,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import axios from "axios";
import Spinner from "react-native-loading-spinner-overlay";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { Formik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "./ErrorMessage";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { FetchData } from "../Axios/axios";

const validationSchema = Yup.object().shape({
  FullName: Yup.string()
    .label("Name")
    .required()
    .min(4, "Must have at least 4 characters"),
  LastName: Yup.string()
    .label("LastName")
    .required()
    .min(4, "Must have at least 2 characters"),
  Email: Yup.string()
    .label("Email")
    .email("Enter a valid email")
    .required("Please enter a registered email"),
  password: Yup.string()
    .label("password")
    .required()
    .min(6, "Password must have more than 6 characters "),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Confirm Password must matched Password")
    .required("Confirm Password is required"),
  State: Yup.string()
    .label("State")
    .required()
    .min(3, "Please fill the State/City field"),

  StreetAddress: Yup.string()
    .label("State")
    .required()
    .min(3, "Please fill the Address field"),
  StudentID: Yup.string()
    .label("Student ID")
    .required()
    .min(5, "Please fill the Student ID field"),
  NationalID: Yup.string()
    .label("National ID")
    .required()
    .min(6, "Please fill the National ID field"),
});

const SignUpScreen = ({ route, navigation }) => {
  const { id, mobile, accountid } = route.params;
  // console.log(id);
  console.log(`sign Up Account id ${accountid}`);
  // const [date, setDate] = React.useState(new Date());
  const [selectedValue, setSelectedValue] = React.useState("java");
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);

  const [data, setData] = React.useState({
    //   username: "",
    //   lastname: "",
    //   email: "",
    dob: "",
    //   gender: "",
    //   state: "",
    //   streetAddress: "",
    //   nationalID: "",
    //   studentID: "",
    isLoading: false,
    //   password: "",
    //   confirm_password: "",
    //   check_nameInputChange: false,
    //   check_lastNameInputChange: false,
    //   check_emailInputChange: false,
    //   check_dobInputChange: false,
    //   check_genderInputChange: false,
    //   check_stateInputChange: false,
    //   check_streetAddressInputChange: false,
    //   check_nationalIDInputChange: false,
    //   check_studentIDInputChange: false,

    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    setData({
      ...data,
      dob: `${date}`,
    });
    hideDatePicker();
  };
  // const nameInputChange = (val) => {
  //   if (val.length !== 0) {
  //     setData({
  //       ...data,
  //       username: val,
  //       check_nameInputChange: true,
  //     });
  //   } else {
  //     setData({
  //       ...data,
  //       username: val,
  //       check_nameInputChange: false,
  //     });
  //   }
  // };

  // const lastNameInputChange = (val) => {
  //   if (val.length !== 0) {
  //     setData({
  //       ...data,
  //       lastname: val,
  //       check_lastNameInputChange: true,
  //     });
  //   } else {
  //     setData({
  //       ...data,
  //       lastname: val,
  //       check_lastNameInputChange: false,
  //     });
  //   }
  // };

  // const emailInputChange = (val) => {
  //   if (val.length !== 0) {
  //     setData({
  //       ...data,
  //       email: val,
  //       check_emailInputChange: true,
  //     });
  //   } else {
  //     setData({
  //       ...data,
  //       email: val,
  //       check_emailInputChange: false,
  //     });
  //   }
  // };

  // const dobInputChange = (val) => {
  //   if (val.length !== 0) {
  //     setData({
  //       ...data,
  //       dob: val,
  //       check_dobInputChange: true,
  //     });
  //   } else {
  //     setData({
  //       ...data,
  //       dob: val,
  //       check_dobInputChange: false,
  //     });
  //   }
  // };

  // const genderInputChange = (val) => {
  //   if (val.length !== 0) {
  //     setData({
  //       ...data,
  //       gender: val,
  //       check_genderInputChange: true,
  //     });
  //   } else {
  //     setData({
  //       ...data,
  //       gender: val,
  //       check_genderInputChange: false,
  //     });
  //   }
  // };

  // const stateInputChange = (val) => {
  //   if (val.length !== 0) {
  //     setData({
  //       ...data,
  //       state: val,
  //       check_stateInputChange: true,
  //     });
  //   } else {
  //     setData({
  //       ...data,
  //       state: val,
  //       check_stateInputChange: false,
  //     });
  //   }
  // };

  // const streetInputChange = (val) => {
  //   if (val.length !== 0) {
  //     setData({
  //       ...data,
  //       streetAddress: val,
  //       check_streetAddressInputChange: true,
  //     });
  //   } else {
  //     setData({
  //       ...data,
  //       streetAddress: val,
  //       check_streetAddressInputChange: false,
  //     });
  //   }
  // };

  // const handlePasswordChange = (val) => {
  //   setData({
  //     ...data,
  //     password: val,
  //   });
  // };

  // const handleConfirmPasswordChange = (val) => {
  //   setData({
  //     ...data,
  //     confirm_password: val,
  //   });
  // };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };

  // const nationalIDInputChange = (val) => {
  //   if (val.length !== 0) {
  //     setData({
  //       ...data,
  //       nationalID: val,
  //       check_nationalIDInputChange: true,
  //     });
  //   } else {
  //     setData({
  //       ...data,
  //       gender: val,
  //       check_nationalIDInputChange: false,
  //     });
  //   }
  // };

  // const studentIDInputChange = (val) => {
  //   if (val.length !== 0) {
  //     setData({
  //       ...data,
  //       studentID: val,
  //       check_studentIDInputChange: true,
  //     });
  //   } else {
  //     setData({
  //       ...data,
  //       gender: val,
  //       check_studentIDInputChange: false,
  //     });
  //   }
  // };

  // const onSubmitForm = () => {
  //   setData({
  //     ...data,
  //     isLoading: true,
  //   });

  //   let formData = {
  //     FullName: data.username,
  //     LastName: data.lastname,
  //     Password: data.password,
  //     // confirmpassword: data.confirm_password,
  //     Email: data.email,
  //     DOB: data.dob,
  //     gender: data.gender,
  //     State: data.state,
  //     StreetAddress: data.streetAddress,
  //     NationalID: data.nationalID,
  //     StudentID: data.studentID,
  //   };
  //   console.log(formData);

  //   axios
  //     .post("http://192.168.0.109:4547/registration", {
  //       data: formData,
  //       id: 55,
  //     })
  //     .then((response) => {
  //       console.log(response.data);

  //       setData({
  //         ...data,
  //         isLoading: false,
  //       });
  //       navigation.navigate("Successfull_Registration");
  //       //   Alert.alert(
  //       //     "otp Sent",
  //       //     "Your digit  was",
  //       //     [
  //       //       {
  //       //         text: "OK",
  //       //         // onPress: () =>
  //       //         //   this.props.navigation.push("SignUpScreen", {
  //       //         //     id: this.state.idText,
  //       //         //   }),
  //       //       },
  //       //     ],
  //       //     { cancelable: false }
  //       //   );
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <KeyboardAwareScrollView
      style={{ backgroundColor: "#05014a" }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true}
    >
      <View style={styles.container}>
        {/* <StatusBar backgroundColor="#05014a" barStyle="light-content" /> */}
        <View style={styles.header}>
          <Spinner visible={data.isLoading} />

          <Text style={styles.text_header}>Register Now!</Text>
        </View>
        <StatusBar style="light" hidden={false} />
        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          <Formik
            initialValues={{
              FullName: "",
              LastName: "",
              Email: "",
              password: "",
              confirmPassword: "",
              State: "",
              StreetAddress: "",
              StudentID: "",
              NationalID: "",
            }}
            onSubmit={(values) => {
              setData({
                ...data,
                isLoading: true,
              });
              FetchData.post("/registration", {
                data: values,
                userid: id,
                dob: data.dob,
                accountid: accountid,
              })
                .then((response) => {
                  console.log(response.data.inserted);

                  if (response.data.inserted) {
                    navigation.navigate("Successfull_Registration", {
                      mobile: mobile,
                    }); //inserted

                    Alert.alert(
                      "Successful",
                      "Your register",
                      [
                        {
                          text: "OK",
                          onPress: () =>
                            setData({
                              ...data,
                              isLoading: false,
                            }),
                        },
                      ],
                      { cancelable: false }
                    );
                  }

                  if (!response.data.inserted) {
                    Alert.alert(
                      "User Exist",
                      "Email you entered already an Account",
                      [
                        {
                          text: "OK",
                          onPress: () =>
                            setData({
                              ...data,
                              isLoading: false,
                            }),
                        },
                      ],
                      { cancelable: false }
                    );
                  }

                  if (response.data.error === "Error In Requesting User") {
                    Alert.alert(
                      "Error",
                      response.data.error,
                      [
                        {
                          text: "OK",
                          onPress: () =>
                            setData({
                              ...data,
                              isLoading: false,
                            }),
                        },
                      ],
                      { cancelable: false }
                    );
                  }
                })
                .catch((error) => {
                  console.log(error);
                });
              console.warn(values);
            }}
            validationSchema={validationSchema}
          >
            {({
              handleChange,
              values,
              handleSubmit,
              errors,
              isValid,
              touched,
              handleBlur,
              isSubmitting,
            }) => (
              <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                  <Text style={styles.text_footer}>FirstName </Text>

                  <View style={styles.action}>
                    <FontAwesome name="user" color="#05375a" size={20} />

                    <TextInput
                      placeholder="Your FirstName"
                      style={styles.textInput}
                      value={values.FullName}
                      onChangeText={handleChange("FullName")}
                      onBlur={handleBlur("FullName")}
                      onSubmitEditing={() => {
                        this.secondTextInput.focus();
                      }}
                    />

                    {values.FullName.length > 4 ? (
                      <Animatable.View animation="bounceIn">
                        <Feather name="check-circle" color="green" size={20} />
                      </Animatable.View>
                    ) : null}
                  </View>
                  <ErrorMessage
                    errorValue={touched.FullName && errors.FullName}
                  />

                  <Text style={{ ...styles.text_footer, marginTop: 35 }}>
                    LastName
                  </Text>

                  <View style={styles.action}>
                    <FontAwesome name="users" color="#05375a" size={20} />

                    <TextInput
                      ref={(input) => {
                        this.secondTextInput = input;
                      }}
                      placeholder="Your LastName"
                      style={styles.textInput}
                      value={values.LastName}
                      onChangeText={handleChange("LastName")}
                      onBlur={handleBlur("LastName")}
                      onSubmitEditing={() => {
                        this.threeTextInput.focus();
                      }}
                    />

                    {values.LastName.length > 4 ? (
                      <Animatable.View animation="bounceIn">
                        <Feather name="check-circle" color="green" size={20} />
                      </Animatable.View>
                    ) : null}
                  </View>
                  <ErrorMessage
                    errorValue={touched.LastName && errors.LastName}
                  />

                  <Text
                    style={[
                      styles.text_footer,
                      {
                        marginTop: 35,
                      },
                    ]}
                  >
                    Password
                  </Text>
                  <View style={styles.action}>
                    <Feather name="lock" color="#05375a" size={20} />
                    <TextInput
                      ref={(inputtwo) => {
                        this.threeTextInput = inputtwo;
                      }}
                      placeholder="Your Password"
                      secureTextEntry={data.secureTextEntry ? true : false}
                      style={styles.textInput}
                      value={values.password}
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                      onSubmitEditing={() => {
                        this.fourTextInput.focus();
                      }}
                    />
                    <TouchableOpacity onPress={updateSecureTextEntry}>
                      {data.secureTextEntry ? (
                        <Feather name="eye-off" color="blue" size={20} />
                      ) : (
                        <Feather name="eye" color="grey" size={20} />
                      )}
                    </TouchableOpacity>
                  </View>
                  <ErrorMessage
                    errorValue={touched.password && errors.password}
                  />

                  <Text
                    style={[
                      styles.text_footer,
                      {
                        marginTop: 35,
                      },
                    ]}
                  >
                    Confirm Password
                  </Text>
                  <View style={styles.action}>
                    {/* <Feather name="lock" color="#05375a" size={20} /> */}
                    <FontAwesome name="unlock-alt" color="#05375a" size={20} />
                    <TextInput
                      ref={(inputthree) => {
                        this.fourTextInput = inputthree;
                      }}
                      placeholder="Confirm Your Password"
                      secureTextEntry={
                        data.confirm_secureTextEntry ? true : false
                      }
                      style={styles.textInput}
                      value={values.confirmPassword}
                      onChangeText={handleChange("confirmPassword")}
                      onBlur={handleBlur("confirmPassword")}
                      onSubmitEditing={() => {
                        this.fiveTextInput.focus();
                      }}
                    />
                    <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
                      {data.confirm_secureTextEntry ? (
                        <Feather name="eye-off" color="blue" size={20} />
                      ) : (
                        <Feather name="eye" color="grey" size={20} />
                      )}
                    </TouchableOpacity>
                  </View>
                  <ErrorMessage
                    errorValue={
                      touched.confirmPassword && errors.confirmPassword
                    }
                  />

                  <Text style={{ ...styles.text_footer, marginTop: 35 }}>
                    E-mail
                  </Text>
                  <View style={styles.action}>
                    <FontAwesome name="envelope" color="#05375a" size={20} />
                    <TextInput
                      ref={(inputfour) => {
                        this.fiveTextInput = inputfour;
                      }}
                      placeholder="Your E-mail"
                      style={styles.textInput}
                      autoCapitalize="none"
                      value={values.Email}
                      onChangeText={handleChange("Email")}
                      onBlur={handleBlur("Email")}
                      onSubmitEditing={() => {
                        this.sixTextInput.focus();
                      }}
                    />

                    {!errors.Email && errors.Email != "" ? (
                      <Animatable.View animation="bounceIn">
                        <Feather name="check-circle" color="green" size={20} />
                      </Animatable.View>
                    ) : null}
                  </View>
                  <ErrorMessage errorValue={touched.Email && errors.Email} />

                  <View>
                    <DateTimePickerModal
                      isVisible={isDatePickerVisible}
                      mode="date"
                      onConfirm={handleConfirm}
                      onCancel={hideDatePicker}
                    />
                  </View>

                  <Text style={{ ...styles.text_footer, marginTop: 35 }}>
                    Dirth Of Birth
                  </Text>
                  <View style={styles.action}>
                    <FontAwesome
                      name="calendar"
                      onPress={showDatePicker}
                      color="#05375a"
                      size={20}
                    />
                    <TextInput
                      placeholder="Your DOB"
                      style={styles.textInput}
                      value={data.dob}
                      editable={false}
                      // onChangeText={(val) => dobInputChange(val)}
                    />
                    {/* {data.check_dobInputChange ? (
                <Animatable.View animation="bounceIn">
                  <Feather name="check-circle" color="green" size={20} />
                </Animatable.View>
              ) : null} */}
                  </View>

                  <Text style={{ ...styles.text_footer, marginTop: 35 }}>
                    Gender
                  </Text>
                  <View style={styles.action}>
                    <FontAwesome name="transgender" color="#05375a" size={20} />
                    <TextInput
                      placeholder="Your Gender"
                      style={styles.textInput}
                      autoCapitalize="none"
                      // onChangeText={(val) => genderInputChange(val)}
                    />
                    {/* {data.check_genderInputChange ? (
                <Animatable.View animation="bounceIn">
                  <Feather name="check-circle" color="green" size={20} />
                </Animatable.View>
              ) : null} */}
                  </View>

                  <Text style={{ ...styles.text_footer, marginTop: 35 }}>
                    State/ City
                  </Text>
                  <View style={styles.action}>
                    <FontAwesome name="bank" color="#05375a" size={20} />
                    <TextInput
                      ref={(inputfive) => {
                        this.sixTextInput = inputfive;
                      }}
                      placeholder="Your City"
                      style={styles.textInput}
                      value={values.State}
                      onChangeText={handleChange("State")}
                      onBlur={handleBlur("State")}
                      onSubmitEditing={() => {
                        this.sevenTextInput.focus();
                      }}
                    />
                    {values.State.length > 3 ? (
                      <Animatable.View animation="bounceIn">
                        <Feather name="check-circle" color="green" size={20} />
                      </Animatable.View>
                    ) : null}
                  </View>
                  <ErrorMessage errorValue={touched.State && errors.State} />

                  <Text style={{ ...styles.text_footer, marginTop: 35 }}>
                    Street Address
                  </Text>
                  <View style={styles.action}>
                    <FontAwesome
                      name="address-book"
                      color="#05375a"
                      size={20}
                    />
                    <TextInput
                      ref={(inputsix) => {
                        this.sevenTextInput = inputsix;
                      }}
                      placeholder="Your Street Address"
                      style={styles.textInput}
                      value={values.StreetAddress}
                      onChangeText={handleChange("StreetAddress")}
                      onBlur={handleBlur("StreetAddress")}
                      onSubmitEditing={() => {
                        this.eightTextInput.focus();
                      }}
                    />
                    {values.StreetAddress.length > 3 ? (
                      <Animatable.View animation="bounceIn">
                        <Feather name="check-circle" color="green" size={20} />
                      </Animatable.View>
                    ) : null}
                  </View>
                  <ErrorMessage
                    errorValue={touched.streetAddress && errors.streetAddress}
                  />

                  <Text style={{ ...styles.text_footer, marginTop: 35 }}>
                    National ID
                  </Text>
                  <View style={styles.action}>
                    <FontAwesome name="id-card" color="#05375a" size={20} />
                    <TextInput
                      ref={(inputseven) => {
                        this.eightTextInput = inputseven;
                      }}
                      placeholder="Your NationalID"
                      style={styles.textInput}
                      value={values.NationalID}
                      onChangeText={handleChange("NationalID")}
                      onBlur={handleBlur("NationalID")}
                      onSubmitEditing={() => {
                        this.nineTextInput.focus();
                      }}
                    />
                    {values.NationalID.length > 7 ? (
                      <Animatable.View animation="bounceIn">
                        <Feather name="check-circle" color="green" size={20} />
                      </Animatable.View>
                    ) : null}
                  </View>
                  <ErrorMessage
                    errorValue={touched.NationalID && errors.NationalID}
                  />

                  <Text style={{ ...styles.text_footer, marginTop: 35 }}>
                    Student ID
                  </Text>
                  <View style={styles.action}>
                    <FontAwesome name="id-badge" color="#05375a" size={20} />
                    <TextInput
                      ref={(inputeight) => {
                        this.nineTextInput = inputeight;
                      }}
                      placeholder="Your StudentID"
                      style={styles.textInput}
                      value={values.StudentID}
                      onChangeText={handleChange("StudentID")}
                      onBlur={handleBlur("StudentID")}
                    />
                    {values.StudentID.length > 7 ? (
                      <Animatable.View animation="bounceIn">
                        <Feather name="check-circle" color="green" size={20} />
                      </Animatable.View>
                    ) : null}
                  </View>
                  <ErrorMessage
                    errorValue={touched.StudentID && errors.StudentID}
                  />

                  <View style={styles.textPrivate}>
                    <Text style={styles.color_textPrivate}>
                      By signing up you agree to our
                    </Text>
                    <Text
                      style={[styles.color_textPrivate, { fontWeight: "bold" }]}
                    >
                      {" "}
                      Terms of service
                    </Text>
                    <Text style={styles.color_textPrivate}> and</Text>
                    <Text
                      style={[styles.color_textPrivate, { fontWeight: "bold" }]}
                    >
                      {" "}
                      Privacy policy
                    </Text>
                  </View>
                  <View style={styles.button}>
                    <TouchableOpacity
                      style={styles.signIn}
                      // onPress={() => this.props.navigation.push('Successfull_Registration')}
                      onPress={handleSubmit}
                      disabled={!isValid || isSubmitting}
                    >
                      <LinearGradient
                        colors={["#08d4c4", "#05014a"]}
                        style={styles.signIn}
                      >
                        <Text
                          style={[
                            styles.textSign,
                            {
                              color: "#fff",
                            },
                          ]}
                        >
                          Sign Up
                        </Text>
                      </LinearGradient>
                    </TouchableOpacity>

                    {/* <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={[
                  styles.signIn,
                  {
                    borderColor: "#05014a",
                    borderWidth: 1,
                    marginTop: 15,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: "#05014a",
                    },
                  ]}
                >
                  Sign In
                </Text> *
              {/* </TouchableOpacity> **/}
                  </View>

                  <View style={{ paddingTop: 40, alignItems: "center" }}>
                    <Picker
                      selectedValue={selectedValue}
                      style={{ height: 50, width: 150 }}
                      onValueChange={(itemValue, itemIndex) =>
                        setSelectedValue(itemValue)
                      }
                    >
                      <Picker.Item label="Java" value="java" />
                      <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                  </View>
                </View>
              </ScrollView>
            )}
          </Formik>
        </Animatable.View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //   backgroundColor: '#009387'
    backgroundColor: "#05014a",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 10,
    marginTop: 30,
  },
  footer: {
    flex: 10,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 40,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textPrivate: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },
  color_textPrivate: {
    color: "grey",
  },
});
