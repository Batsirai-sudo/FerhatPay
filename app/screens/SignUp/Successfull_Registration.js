import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
} from "react-native";
import PhoneInput from "react-native-phone-input";
import CountryPicker from "react-native-country-picker-modal";
import IntlPhoneInput from "react-native-intl-phone-input";
import { Ionicons } from "@expo/vector-icons";

// import { AuthContext } from './context';

class Successfull_Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AccountNumber: this.props.route.params.mobile,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#05014a" barStyle="light-content" />
        <View style={styles.header}>
          {/* <Text style={styles.text_header}>Register Now!</Text> */}
        </View>
        <View style={styles.footer}>
          {/* <Text style={styles.reistration}>Registration</Text> */}
          <View style={styles.containerq}>
            <Image
              source={require("./assets/successreg.png")}
              style={{ width: 100, height: 100 }}
            />
            <Text style={{ ...styles.reistration }}>DONE!</Text>
          </View>

          <View style={styles.textblock}>
            <Text
              style={{
                textAlign: "center",

                fontSize: 18,
              }}
            >
              Thank you for your Registration,
            </Text>
            <Text style={{ textAlign: "center", fontSize: 18 }}>
              your Account was Successfully created.
            </Text>

            <Text style={{ textAlign: "center", fontSize: 15, color: "green" }}>
              Your Account Number is your Mobile Number you Register with.
            </Text>
          </View>

          <TouchableOpacity
            style={{
              ...styles.button,
              backgroundColor: "#05014a",
              borderWidth: 1,
              borderColor: "black",

              elevation: 6,
              flexDirection: "row",
            }}
            onPress={() => this.props.navigation.push("SignInScreen")}
            activeOpcity={0}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "white",
                marginRight: 20,
              }}
            >
              OK
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Successfull_Registration;

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
    marginTop: 54,
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
    paddingLeft: 0,
    paddingTop: 40,
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
  button: {
    backgroundColor: "transparent",
    height: 50,
    marginHorizontal: 40,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 95,
  },
});
