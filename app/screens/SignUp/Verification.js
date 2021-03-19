import React, { Component } from "react";
import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import axios from "axios";
import PhoneInput from "react-native-phone-input";
import CountryPicker from "react-native-country-picker-modal";
import IntlPhoneInput from "react-native-intl-phone-input";
import { Ionicons } from "@expo/vector-icons";
import SMSVerifyCode from "react-native-sms-verifycode";
import Spinner from "react-native-loading-spinner-overlay";
import { AntDesign } from "@expo/vector-icons";
// import { AuthContext } from './context';
import { FetchData } from "../Axios/axios";

class Verification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      isLoading: false,
      idText: this.props.route.params.id,
      phoneText: this.props.route.params.mobileNumber,
      accountidText: this.props.route.params.accountid,
    };
  }

  resendOtp = () => {
    FetchData.post("/otp-resend", {
      id: this.state.idText,
    })
      .then((response) => {
        console.log(response.data);
        if (text == response.data.token) {
          Alert.alert(
            "otp Sent",
            "Your digit  was",
            [
              {
                text: "OK",
                onPress: () =>
                  this.props.navigation.push("SignUpScreen", {
                    id: this.state.idText,
                    phoneNumber: this.props.route.params.mobileNumber,
                  }),
              },
            ],
            { cancelable: false }
          );
        } else {
          Alert.alert(
            "Passcode Wrong",
            "Your digit was",
            [
              {
                text: "OK",
                onPress: () => this.setState({ isLoading: false }),
              },
            ],
            { cancelable: false }
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  onInputCompleted = (text) => {
    this.setState({ isLoading: true });

    // const value = { verification: text };

    const data = { id: this.state.idText, verification: text };

    FetchData.post("/verify-otp", data)
      .then((response) => {
        console.log(response.data.valid);
        if (response.data.valid) {
          Alert.alert(
            "Verification Successful",
            "You can now Register you Account",
            [
              {
                text: "OK",
                onPress: () => {
                  this.setState({ isLoading: false });
                  console.log(
                    `inside verification ${this.state.accountidText}`
                  );

                  this.props.navigation.push("SignUpScreen", {
                    id: this.state.idText,
                    mobile: this.state.phoneText,
                    accountid: this.state.accountidText,
                  });
                },
              },
            ],
            { cancelable: false }
          );
        } else {
          Alert.alert(
            "Passcode Wrong",
            "Your digit was",
            [
              {
                text: "OK",
                onPress: () => this.setState({ isLoading: false }),
              },
            ],
            { cancelable: false }
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  onInputChangeText = (text) => {
    this.setState({ text });
  };

  blur = () => this.verifycode.blur();

  reset = () => this.verifycode.reset();

  bindRef = (ref) => {
    this.verifycode = ref;
  };

  render() {
    const { isLoading } = this.state;
    // console.log(this.props);
    console.log(this.state.phoneText);
    console.log(this.state.idText);

    return (
      <View style={styles.container}>
        <Spinner visible={isLoading} />
        <StatusBar style="light" hidden={false} />
        <View style={styles.header}>
          {/* <Text style={styles.text_header}>Register Now!</Text> */}
        </View>
        <View style={styles.footer}>
          <View style={{ flexDirection: "row" }}>
            {/* <TouchableOpacity
              activeOpcity={0}
              onPress={() => this.props.navigation.push("Registration")}
            >
              {/* <Ionicons
                name="ios-arrow-back"
                style={{ fontSize: 25, color: "black", marginTop: 10 }}
              /> */}

            {/* <AntDesign
                name="leftcircleo"
                size={27}
                color="black"
                style={{ color: "black", marginTop: 10 }}
              />
            </TouchableOpacity> */}
            <Text style={styles.reistration}>
              Verification{this.state.idText}
            </Text>
          </View>

          <View style={styles.textblock}>
            <Text
              style={{
                textAlign: "center",

                fontSize: 16,
              }}
            >
              To initiate your registration, enter 6
            </Text>
            <Text style={{ textAlign: "center", fontSize: 16 }}>
              digit code we send to {this.state.phoneText}
            </Text>
          </View>
          <View style={styles.containerq}>
            <Text style={{ fontSize: 25 }}>Enter Verification code!</Text>

            <SMSVerifyCode
              ref={this.bindRef}
              autoFocus
              verifyCodeLength={6}
              //   initialCodes={['1', 2, '', ' ', '       ']}
              // containerStyle={}
              containerPaddingVertical={30}
              //   containerPaddingTop={60}
              containerPaddingBottom={10}
              // containerPaddingHorizontal={}
              containerPaddingLeft={40}
              containerPaddingRight={10}
              // containerBackgroundColor="blue"

              // codeViewStyle={}
              codeViewBorderColor="black"
              focusedCodeViewBorderColor="red"
              codeViewWidth={35}
              codeViewHeight={40}
              codeViewBorderWidth={1}
              codeViewBorderRadius={20}
              codeViewBackgroundColor="white"
              // codeStyle={}
              codeFontSize={20}
              codeColor="black"
              // secureTextEntry
              // coverStyle={}
              coverRadius={21}
              coverColor="blue"
              onInputCompleted={this.onInputCompleted}
              onInputChangeText={this.onInputChangeText}
              warningTitle="haha"
              warningContent="no number"
              warningButtonText="okok"
            />

            <TouchableOpacity
              //   onPress={this.reset}
              style={styles.button}
              activeOpcity={0}
              onPress={this.resendOtp}
            >
              <Text style={styles.welcome}>Resend Otp</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Verification;

const styles = StyleSheet.create({
  reistration: {
    width: 335,
    height: 42,
    color: "#072273",
    // fontFamily: "Cochin",
    lineHeight: 42,
    fontSize: 28,
    // marginTop:1,
    fontWeight: "400",
    // line-height: 42px;
    textAlign: "center",
  },

  textblock: {
    width: 296,
    height: 48,
    marginTop: 74,
    alignSelf: "center",
  },
  container: {
    flex: 1,
    //   backgroundColor: '#009387'
    backgroundColor: "#05014a",
  },
  header: {
    flex: 0,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
    //   marginTop:44
  },
  containerq: {
    alignItems: "center",
    padding: 20,
    alignItems: "center",

    paddingTop: 30,
  },
  footer: {
    flex: 10,
    backgroundColor: "#fff",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.62,
    elevation: 4,
  },
  //   button:{
  //     backgroundColor: 'transparent',
  //     height: 50,
  //     marginHorizontal: 60,
  //     borderRadius: 35,
  //     alignItems: 'center',
  //     justifyContent:'center',
  //     marginVertical: 55,

  // },
  // container: {
  //     flex: 1,
  //     alignItems: 'center',
  //     backgroundColor: '#FEFFFE',
  //     paddingTop: Platform.OS === 'ios' ? 50 : 20,
  //   },
  welcome: {
    color: "#fff",
    fontSize: 25,
    textAlign: "center",
    margin: 10,
  },
  button: {
    justifyContent: "center",
    backgroundColor: "#05014a",
    paddingHorizontal: 25,
    borderRadius: 10,
    marginTop: 40,
  },
  codeBorderStyle: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderRadius: 0,
  },
});
