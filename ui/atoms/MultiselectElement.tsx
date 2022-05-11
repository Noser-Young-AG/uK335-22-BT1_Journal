import React, { useState } from "react";
import { Chip } from "react-native-paper";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";

type selectProps = {
  text: string;
  checked?: boolean;
  style?: StyleProp<ViewStyle>
};

export default function MultiselectElement(prop: selectProps) {
  const [check, setChecked] = useState(false);

  const emptyIcon = () => null

  const styles = StyleSheet.create({
    chip: {
      margin: '2%'
    },
    checkedTrue: {
      backgroundColor: 'rgba(98, 0, 238, 0.08)',
      
    },
    checkedFalse: {
      backgroundColor: "rgba(33, 33, 33, 0.08)",
    },
  });

  return (
    <>
      <Chip
        icon={emptyIcon}
        selectedColor={check ? '#6200EE' : 'black'}
        selected={check}
        style={[check ? styles.checkedTrue : styles.checkedFalse, styles.chip, prop.style]}
        onPress={() => setChecked(!check)}
      >
        {prop.text}
      </Chip>
    </>
  );
}
