import React, { useEffect, useState } from "react";
import { KeyboardTypeOptions } from "react-native";
import { StyleProp, View, ViewStyle } from "react-native";
import { TextInput } from "react-native-paper";
import GroupTitle from "./GroupTitle";
import TitleElement from "./TitleElement";

type Inputfield = {
  value?: string;
  label?: string;
  affix?: string;
  placeholder?: string;
  style?: StyleProp<ViewStyle>;
  type?: KeyboardTypeOptions;
  disabled?: boolean;
  onChange: (value: string) => void;
};

export default function Inputfield(props: Inputfield) {
  const [value, setValue] = useState(props.value);

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  return (
    <View style={props.style}>
      <TextInput
        value={value}
        mode="outlined"
        label={props.label}
        right={<TextInput.Affix text={props.affix} />}
        keyboardType={props.type}
        placeholder={props.placeholder}
        disabled={props.disabled}
        onChangeText={props.onChange}
      />
    </View>
  );
}
