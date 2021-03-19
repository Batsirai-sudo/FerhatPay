import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-end",
  },
  topAnimatedView: { ...StyleSheet.absoluteFill },
  bottomAnimatedView: {
    height: height / 3 + 80,
    ...StyleSheet.absoluteFill,
    top: null,
    justifyContent: "center",
  },
  button: {
    backgroundColor: "transparent",
    height: 50,
    marginHorizontal: 60,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
  },
  closeButton: {
    height: 40,
    width: 40,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: -20,
    left: width / 2 - 20,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    elevation: 6,
  },
  textInput: {
    height: 50,
    borderRadius: 25,
    borderWidth: 0.5,
    marginHorizontal: 20,
    paddingLeft: 10,
    marginVertical: 5,
    borderColor: "rgba(0,0,0,0.2)",
  },
  spinnerTextStyle: {
    color: "#FFF",
  },
  bottomView: { height: height / 3 },
  getStartedText: {
    fontSize: 20,
    color: "white",
    marginRight: 60,
  },
  getStartedIcon: { fontSize: 25, color: "white" },
  bgImage: { flex: 1, resizeMode: "cover" },
});
