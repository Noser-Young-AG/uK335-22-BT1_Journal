import React, { useEffect, useState } from "react";
import { Chip } from "react-native-paper";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";

type selectProps = {
  text: string;
  checked?: boolean;
  style?: StyleProp<ViewStyle>;
  onChange: () => void;
};

export default function MultiselectElement(props: selectProps) {
  const [check, setChecked] = useState(props.checked);

  useEffect(() => {
    setChecked(props.checked);
    console.log("Change in element: " + check);
  }, [props.checked, check]);

  const emptyIcon = () => null;

  const styles = StyleSheet.create({
    chip: {
      margin: "2%",
    },
    checkedTrue: {
      backgroundColor: "rgba(98, 0, 238, 0.08)",
    },
    checkedFalse: {
      backgroundColor: "rgba(33, 33, 33, 0.08)",
    },
  });

  const onCheck = () => {
    props.onChange();
  };

  return (
    <>
      <Chip
        icon={emptyIcon}
        selectedColor={check ? "#6200EE" : "black"}
        selected={check}
        style={[
          check ? styles.checkedTrue : styles.checkedFalse,
          styles.chip,
          props.style,
        ]}
        onPress={() => onCheck()}
      >
        {props.text}
      </Chip>
    </>
  );
}
