import React from 'react'
import { KeyboardTypeOptions } from 'react-native';
import { StyleProp, View, ViewStyle } from 'react-native'
import { TextInput } from 'react-native-paper';
import GroupTitle from './GroupTitle';
import TitleElement from './TitleElement'

type Inputfield = {
    label?: string;
    affix?: string;
    placeholder?: string;
    style?: StyleProp<ViewStyle>;
    type?: KeyboardTypeOptions;
    disabled?: boolean;
  };

export default function Inputfield(prop: Inputfield) {
  return (
    <View style={prop.style}>
      <TextInput mode='outlined' label={prop.label} right={<TextInput.Affix text={prop.affix}/>} keyboardType={prop.type} placeholder={prop.placeholder} disabled={prop.disabled}/>
    </View>
  )
}
