import React, { useState } from "react";
import { Chip } from "react-native-paper";
import { StyleSheet } from "react-native";

type selectProps = {
  text: string;
  checked?: boolean;
};

export default function MultiselectElement(prop: selectProps) {
  const [check, setChecked] = useState(false);

  const styles = StyleSheet.create({
    chip: {
      margin: '2%',
      height: '5%'
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
        selectedColor={check ? '#6200EE' : 'black'}
        selected={check}
        style={[check ? styles.checkedTrue : styles.checkedFalse, styles.chip]}
        onPress={() => setChecked(!check)}
      >
        {prop.text}
      </Chip>
    </>
  );
}
