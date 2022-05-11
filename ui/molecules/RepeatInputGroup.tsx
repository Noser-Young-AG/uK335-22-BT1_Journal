import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Checkbox, Text } from "react-native-paper";
import GroupTitle from "../atoms/GroupTitle";
import Inputfield from "../atoms/Inputfield";
import MultiselectElement from "../atoms/MultiselectElement";

type RepeatInputGroupProps = {
  recurringAmount?: number | string;
  recurringAmountChanged: (value: number | string | undefined) => void;
}

export default function RepeatInputGroup(props: RepeatInputGroupProps) {
  const [checked, setChecked] = useState(props.recurringAmount === "forever");
  const [recurringAmount, setRecurringAmount] = useState(props.recurringAmount);

  useEffect(() => {
    props.recurringAmountChanged(checked ? "forever" : Number(recurringAmount));
  }, [checked, recurringAmount]);

  useEffect(() => {
    setChecked(props.recurringAmount === "forever");
  }, [props.recurringAmount, recurringAmount]);

  // useEffect(() => {
  //   setChecked(props.recurringAmount === "forever");
  // }, [recurringAmount]);


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
          onChange={(value) => setRecurringAmount(value)}
          value={typeof recurringAmount === "number" ? recurringAmount.toString() : undefined}
          disabled={checked}
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
  },
  inputfield: {
    width: "75%",
  },
});
