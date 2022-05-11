import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Checkbox, Text } from "react-native-paper";
import GroupTitle from "../atoms/GroupTitle";
import Inputfield from "../atoms/Inputfield";
import MultiselectElement from "../atoms/MultiselectElement";

export default function RepeatInputGroup() {
  const [checked, setChecked] = useState(false);

  return (
    <View>
      <GroupTitle title="Repeat" />
      <View style={styles.container}>
        <View style={styles.checkbox}>
          <Checkbox.Android
            color="#6200EE"
            status={checked ? "checked" : "unchecked"}
            onPress={() => {
              setChecked(!checked);
            }}
          ></Checkbox.Android>
          <Text
            onPress={() => {
              setChecked(!checked);
            }}
          >
            Forever
          </Text>
        </View>
        <Inputfield
          disabled={checked ? true : false}
          label="Repetition"
          affix="/100"
          placeholder="amount of repetitions"
          style={styles.inputfield}
          type={"number-pad"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  checkbox: {
    flexDirection: "row",
    alignItems: "center",
    width: "25%",
  },
  container: {
    flexDirection: "row",
    margin: "2%",
    marginTop: "0%",
    alignContent: 'center'
  },
  inputfield: {
    width: "75%", 
  },
});
