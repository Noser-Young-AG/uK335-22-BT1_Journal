import React from "react";
import { View, StyleSheet } from "react-native";
import MultiselectElement from "../atoms/MultiselectElement";

type MultiselectProps = {
  elements: string[];
  selected: string;
  setSelected: (value: string) => void;
};

export default function MultiselectWeekdays(props: MultiselectProps) {
  return (
    <View style={styles.container}>
      {props.elements.map((x) => (
        <MultiselectElement
          key={x}
          text={x}
          checked={x === props.selected}
          onChange={() => props.setSelected(x)}
        ></MultiselectElement>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
