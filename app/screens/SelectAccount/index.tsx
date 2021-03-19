import React, { useState } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import {
  MaterialCommunityIcons,
  Ionicons,
  AntDesign,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "@config";
import { Text } from "@components";

interface SelectAccountProps {}

const SelectAccount = (props: SelectAccountProps) => {
  const { navigate } = useNavigation();

  const [selected, setSelected] = useState(0);
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../../assets/images/logo.png")}
      />

      <Text style={styles.topText}>
        Choose Account to Register into the system.
      </Text>

      <View style={styles.cardContainer}>
        <TouchableOpacity
          onPress={() => {
            setSelected(1);
          }}
          style={[
            styles.card,
            {
              backgroundColor:
                selected === 1 ? "orange" : "rgba(255,255,255,0.7)",
            },
          ]}
        >
          {selected === 1 ? (
            <AntDesign
              name="checkcircle"
              size={15}
              color="#fff"
              style={styles.icon}
            />
          ) : null}

          <MaterialCommunityIcons name="face-agent" size={45} color="#fff" />
          <Text>Agent</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setSelected(2);
          }}
          style={[
            styles.card,
            {
              backgroundColor:
                selected === 2 ? "orange" : "rgba(255,255,255,0.7)",
            },
          ]}
        >
          {selected === 2 ? (
            <AntDesign
              name="checkcircle"
              size={15}
              color="#fff"
              style={styles.icon}
            />
          ) : null}
          <Ionicons name="person" size={45} color="#fff" />

          <Text>Member</Text>
        </TouchableOpacity>
      </View>

      {selected === 1 || selected === 2 ? (
        <TouchableOpacity
          onPress={() => {
            navigate(ROUTES.SelectAccount);
          }}
          style={styles.btn}
        >
          <Text style={{ color: "white" }}>Continue</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default SelectAccount;
