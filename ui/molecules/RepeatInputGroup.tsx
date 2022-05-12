import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Checkbox, Text } from "react-native-paper";
import GroupTitle from "../atoms/GroupTitle";
import Inputfield from "../atoms/Inputfield";

type RepeatInputGroupProps = {
  recurringAmount?: number | string;
  recurringAmountChanged: (value: number | string | undefined) => void;
};

export default function RepeatInputGroup(props: RepeatInputGroupProps) {
  const [checked, setChecked] = useState(props.recurringAmount === "forever");
  const [recurringAmount, setRecurringAmount] = useState(props.recurringAmount);

  useEffect(() => {
    console.log("recurringamount states use effect " + recurringAmount);
    if (recurringAmount !== undefined) {
      props.recurringAmountChanged(
        checked ? "forever" : Number(recurringAmount)
      );
    }
  }, [checked, recurringAmount]);

  useEffect(() => {
    console.log("recurringamount props use effect " + props.recurringAmount);

    setChecked(props.recurringAmount === "forever");
    if (typeof props.recurringAmount === "number") {
      setRecurringAmount(props.recurringAmount);
    }
  }, [props.recurringAmount]);

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
          value={
            recurringAmount !== undefined &&
            typeof recurringAmount !== "string" &&
            !Number.isNaN(recurringAmount)
              ? recurringAmount.toString()
              : undefined
          }
          disabled={checked}
          label="Repetition"
          placeholder="Amount of repetitions"
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
    alignContent: "center",
  },
  inputfield: {
    width: "75%",
  },
});
