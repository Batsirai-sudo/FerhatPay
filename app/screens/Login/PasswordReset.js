import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Animated,
  StyleSheet,
  StatusBar,
  FlatList,
  Alert,
} from "react-native";
import PhoneInput from "react-native-phone-input";
import CountryPicker from "react-native-country-picker-modal";
import IntlPhoneInput from "react-native-intl-phone-input";
import { Ionicons } from "@expo/vector-icons";
// import FontAwesome from "react-native-vector-icons/FontAwesome";
import Octicons from "react-native-vector-icons/Octicons";
import { AntDesign } from "@expo/vector-icons";
import FacePile from "react-native-face-pile";
import RBSheet from "react-native-raw-bottom-sheet";
import { SearchBar } from "react-native-elements";
import { ListItem } from "react-native-elements";
import { Input } from "react-native-elements";
import Dialog from "react-native-dialog";
import Spinner from "react-native-loading-spinner-overlay";
import { Fontisto } from "@expo/vector-icons";
const { width, height } = Dimensions.get("window");
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import HeaderImageScrollView, {
  TriggeringView,
} from "react-native-image-header-scroll-view";
import * as Animatable from "react-native-animatable";
import { Header } from "react-navigation";
import { TextInput, Button } from "react-native-paper";
import { SCLAlert, SCLAlertButton } from "react-native-scl-alert";
import { Entypo } from "@expo/vector-icons";
import { Snackbar } from "react-native-paper";
import axios from "axios";
import { FetchData } from "../Axios/axios";
const MIN_HEIGHT = Header.HEIGHT;
const MAX_HEIGHT = 250;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
class PasswordReset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPassword: "",
      retypeNewpassword: "",
      visible: false,
      show: false,
      visibletwo: false,
      Email: this.props.route.params.Email,
    };
  }

  handleOpen = () => {
    if (
      this.state.newPassword.length > 6 &&
      this.state.retypeNewpassword.length > 6
    ) {
      if (this.state.newPassword === this.state.retypeNewpassword) {
        FetchData.post("/passwordReset", {
          password: this.state.newPassword,
          Email: this.state.Email,
        })
          .then((response) => {
            if (response.data.inserted) {
              Alert.alert(
                "Update Successfull",
                "You'll have successfully changed your Password",
                [
                  {
                    text: "OK",
                    onPress: () => {
                      this.props.navigation.navigate("LandingScreen");
                    },
                  },
                ],
                { cancelable: false }
              );
            } else {
              Alert.alert(
                "Error",
                "Error Happened",
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
            Alert.alert(
              "Error",
              "No connection with Server",
              [
                {
                  text: "OK",
                  onPress: () => this.setState({ isLoading: false }),
                },
              ],
              { cancelable: false }
            );
          });
      } else {
        this.setState({ visible: true });
        setTimeout(() => {
          this.setState({ visible: false });
        }, 2000);
      }
    } else {
      this.setState({ visibletwo: true });
      setTimeout(() => {
        this.setState({ visibletwo: false });
      }, 2000);
    }

    // this.setState({ show: true });
  };

  handleClose = () => {
    this.setState({ show: false });
  };
  componentDidMount = () => {};

  onChangeNewPassword = (text) => {
    this.setState({ newPassword: text });
  };

  onChangeRetypeNewPassword = (text) => {
    this.setState({ retypeNewpassword: text });
  };

  onUpdateName = () => {
    this.setState({ visible: true });

    // Alert.alert(
    //   "Update Successfull",
    //   "You'll have successfully changed your Names",
    //   [
    //     {
    //       text: "OK",
    //       onPress: () => {
    //         // this.props.navigation.navigate("SendSingleDetail");
    //       },
    //     },
    //   ],
    //   { cancelable: false }
    // );
  };

  //   const onDismissSnackBar = () => setVisible(false);

  onDismissSnackBar = () => {
    this.setState({ visible: false });
  };
  onDismissSnackBartwo = () => {
    this.setState({ visibletwo: false });
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#05014a" barStyle="dark-content" />
        {/* <View style={styles.header}></View> */}
        <Spinner visible={this.state.isLoading} />

        <Dialog.Container visible={this.state.isDialogVisible}>
          <Dialog.Title>Secret Token</Dialog.Title>
          <Dialog.Description>
            Your secret token is require,enter your secret token to continue.
          </Dialog.Description>
          <Dialog.Input
            value={this.state.dialogValue}
            onChangeText={(val) => this.updateField(val, this.state.InputTypes)}
            wrapperStyle={{}}
          ></Dialog.Input>
          {/* <Dialog.Button label="Cancel" onPress={this.handleCancel} /> */}
          <Dialog.Button label="Save" onPress={this.save} />
        </Dialog.Container>
        <SCLAlert
          theme="success"
          show={this.state.show}
          title="Update Successfull"
          subtitle="You'll have successfully changed your names"
          titleStyle={{ fontWeight: "bold", color: "green" }}
        >
          <SCLAlertButton
            theme="info"
            containerStyle={{ backgroundColor: "green", borderRadius: 30 }}
            onPress={this.handleClose}
          >
            Done
          </SCLAlertButton>
        </SCLAlert>
        <HeaderImageScrollView
          maxHeight={0}
          minHeight={0}
          // foregroundParallaxRatio={2}
          //   scrollViewBackgroundColor="#f0eeeb"
          scrollViewBackgroundColor="#fff"
          fadeOutForeground
          // headerImage={require("../../assets/successreg.png")}
        >
          {/* <TriggeringView
            style={styles.section}
            onHide={() => this.navTitleView.fadeInUp(200)}
            onDisplay={() => this.navTitleView.fadeOut(100)}
          ></TriggeringView> */}
          <View>
            {/* <TriggeringView
              style={styles.section}
              onHide={() => this.navTitleView.fadeInUp(200)}
              onDisplay={() => this.navTitleView.fadeOut(100)}
              onHide={() => console.log("text hidden")}
            >
              <Text>tggt</Text>
            </TriggeringView> */}

            <View style={styles.footer}>
              <View
                style={{
                  flexDirection: "row",
                  marginHorizontal: 25,
                  marginTop: 20,
                }}
              >
                <Text style={styles.reistration}> </Text>
              </View>
              <View style={{ marginHorizontal: 10 }}>
                <View
                  style={{ flexDirection: "row", justifyContent: "center" }}
                >
                  <Foundation
                    name="asterisk"
                    size={45}
                    color="black"
                    style={{ marginRight: 10 }}
                  />
                  <Foundation
                    name="asterisk"
                    size={45}
                    color="black"
                    style={{ marginRight: 10 }}
                  />
                  <Fontisto name="locked" size={38} color="red" />
                </View>
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 25,
                    color: "#05014a",
                  }}
                >
                  Lets create a new
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 25,
                    color: "#05014a",
                  }}
                >
                  secure password
                  {/* {this.state.Email} */}
                </Text>
              </View>
              <View>
                <View style={{ marginTop: 30, marginHorizontal: 20 }}>
                  <TextInput
                    // ref={"namedref"}
                    secureTextEntry
                    autoFocus={true}
                    label="Enter new password"
                    value={this.state.newPassword}
                    mode="outlined"
                    style={{ marginBottom: 10 }}
                    onChangeText={(text) => this.onChangeNewPassword(text)}
                    onSubmitEditing={() => {
                      this.secondTextInput.focus();
                    }}
                    blurOnSubmit={false}
                  />
                  {/* <Entypo name="eye" size={24} color="black" />onChangeRetypeNewPassword
                  <Entypo name="eye-with-line" size={24} color="black" /> */}
                  <TextInput
                    ref={(input) => {
                      this.secondTextInput = input;
                    }}
                    secureTextEntry
                    label="Retype your password"
                    value={this.state.retypeNewpassword}
                    mode="outlined"
                    onChangeText={(text) =>
                      this.onChangeRetypeNewPassword(text)
                    }
                  />
                </View>
              </View>

              <View style={{ marginHorizontal: 25 }}>
                <Button
                  mode="contained"
                  onPress={() => this.handleOpen(this.state.routerTyp)}
                  style={{
                    marginTop: 40,
                    height: 50,
                    borderRadius: 30,
                    justifyContent: "center",
                  }}
                  labelStyle={{ fontWeight: "900" }}
                >
                  SAVE
                </Button>
              </View>
            </View>
          </View>
        </HeaderImageScrollView>

        <Snackbar
          visible={this.state.visible}
          onDismiss={this.onDismissSnackBar}
          style={{ backgroundColor: "red" }}
          action={{
            label: "Done",
            onPress: () => {
              // Do something
            },
          }}
        >
          Passwords do not match
        </Snackbar>

        <Snackbar
          visible={this.state.visibletwo}
          onDismiss={this.onDismissSnackBartwo}
          style={{ backgroundColor: "red" }}
          action={{
            label: "Done",
            onPress: () => {
              // Do something
            },
          }}
        >
          <Text style={{ color: "white" }}>
            Password should be AtLeast 6 characters long.
          </Text>
        </Snackbar>
      </View>
    );
  }
}

export default PasswordReset;

const styles = StyleSheet.create({
  reistration: {
    height: 42,
    color: "#072273",
    // fontFamily: "Cochin",
    lineHeight: 42,
    fontSize: 23,
    marginLeft: 10,
    fontWeight: "bold",
    width: 250,
    alignSelf: "center",
    textAlign: "center",
  },
  //   button:{
  //     backgroundColor: 'transparent',
  //     height: 50,
  //     marginHorizontal: 10,
  //     borderRadius: 35,
  //     alignItems: 'center',
  //     justifyContent:'center',
  //     marginVertical: 5,

  // },

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
    flex: 1,
    justifyContent: "flex-end",
    // paddingHorizontal: 50,
    // paddingBottom: 10,
    borderRadius: deviceWidth,
    width: deviceWidth * 2,
    height: deviceWidth * 2,
    overflow: "hidden",

    position: "relative",
    backgroundColor: "#05014a",
    marginLeft: -(deviceWidth / 2),
    marginTop: -(deviceWidth + 150),
  },
  containerq: {
    alignItems: "center",
    paddingLeft: 20,
    paddingTop: 40,
  },
  footer: {
    flex: 10,
    backgroundColor: "#fff",
    // borderTopLeftRadius: 40,
    // borderTopRightRadius: 40,
    paddingVertical: 5,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.2,
    // shadowRadius: 2.62,
    elevation: 0,
    marginTop: -10,
  },
  button: {
    backgroundColor: "transparent",
    height: 50,
    marginHorizontal: 90,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 95,
  },
  boxContainer: {
    // backgroundColor: "#fff",

    // shadowColor: "#000",

    // shadowOffset: { width: 0, height: 1 },

    // shadowOpacity: 0.8,

    // shadowRadius: 1,

    height: 65,

    marginLeft: 16,
    marginRight: 16,
    // marginTop: 8,

    alignItems: "center",

    justifyContent: "space-between",
    borderRadius: 15,
    position: "relative",
    flexDirection: "row",
    paddingHorizontal: 5,
  },
  recentboxContainer: {
    flex: 1,
    backgroundColor: "white",

    shadowColor: "#000",

    shadowOffset: { width: 0, height: 2 },

    shadowOpacity: 0.8,

    shadowRadius: 2,

    height: 400,
    paddingHorizontal: 10,

    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  usersBox: {
    backgroundColor: "#072273",

    shadowColor: "#000",

    shadowOffset: { width: 0, height: 1 },

    shadowOpacity: 0.8,

    shadowRadius: 2,

    height: 60,
    width: 160,

    marginLeft: 5,
    marginRight: 10,
    marginBottom: 15,
    paddingLeft: 10,

    justifyContent: "center",
    borderRadius: 15,
  },
  avatarInside: {
    flexDirection: "row",
  },
  avatarInsideText: {
    color: "white",
    marginTop: 10,
    fontWeight: "bold",
    marginLeft: 5,
  },
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get("window").width,
    alignSelf: "stretch",
    resizeMode: "cover",
  },
  title: {
    fontSize: 20,
  },
  name: {
    fontWeight: "bold",
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    backgroundColor: "#f0eeeb",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  sectionContent: {
    fontSize: 16,
    textAlign: "justify",
  },
  keywords: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  keywordContainer: {
    backgroundColor: "#999999",
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
  keyword: {
    fontSize: 16,
    color: "white",
  },
  titleContainer: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  imageTitle: {
    color: "white",
    backgroundColor: "transparent",
    fontSize: 24,
  },
  navTitleView: {
    height: MIN_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 16,
    opacity: 0,
    backgroundColor: "white",
  },
  navTitle: {
    color: "white",
    fontSize: 18,
    backgroundColor: "transparent",
    fontWeight: "bold",
  },
  sectionLarge: {
    height: 600,
  },
});
