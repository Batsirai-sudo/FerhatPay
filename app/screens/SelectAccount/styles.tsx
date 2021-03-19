import { StyleSheet, Dimensions } from "react-native";
import { Layout } from "@constants";

const { height, width } = Layout;
export default StyleSheet.create({
  container: {
    backgroundColor: "#05014a",
    height: "100%",
    width: "100%",
  },
  logo: { height: 100, width: 100, alignSelf: "center", top: height / 6 },

  card: {
    height: 120,
    width: 120,
    // backgroundColor:'rgba(255,255,255,0.5)',
    // backgroundColor:'#00A8B0',
    borderRadius: 10,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  topText: { color: "white", textAlign: "center", top: height / 4 },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "10%",
    alignSelf: "center",
    marginTop: height / 3.3,
    width: "100%",
  },
  icon: {
    position: "absolute",
    right: 7,

    top: 7,
  },
  btn: {
    width: 200,
    height: 50,
    // backgroundColor: '#00A8B0',
    backgroundColor: "orange",
    borderRadius: 50,
    alignSelf: "center",
    top: 140,
    elevation: 10,
    zIndex: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
