import React, { useState } from "react";
import {
  Appbar,
  DarkTheme,
  DefaultTheme,
  Provider,
  Surface,
  ThemeProvider,
} from "react-native-paper";
import { SafeAreaView, Settings, StatusBar, StyleSheet, View } from "react-native";
import DropDown from "react-native-paper-dropdown";

export default function Dropdown() {
  const [nightMode, setNightmode] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [element, setElement] = useState("");
  const elementList = [
    {
      label: "1",
      value: 1,
    },
    {
      label: "2",
      value: 2,
    },
    {
      label: "3",
      value: 3,
    },
    {
      label: "4",
      value: 4,
    },
    {
      label: "5",
      value: 5,
    },
    {
      label: "6",
      value: 6,
    },
    {
      label: "7",
      value: 7,
    },
    {
      label: "8",
      value: 8,
    },
    {
      label: "9",
      value: 9,
    },
    {
      label: "10",
      value: 10,
    },
    {
      label: "Forever",
      value: 999,
    },
  ];
  const colorList = [
    {
      label: "White",
      value: "white",
    },
    {
      label: "Red",
      value: "red",
    },
    {
      label: "Blue",
      value: "blue",
    },
    {
      label: "Green",
      value: "green",
    },
    {
      label: "Orange",
      value: "orange",
    },
  ];

  return (
    <>
    <Provider theme={DefaultTheme}>
        <View style={styles.safeContainerStyle} >
          <DropDown
            dropDownItemStyle={styles.elements}
            dropDownStyle={styles.vieww}
            label={"Element"}
            mode={"outlined"}
            visible={showDropDown}
            showDropDown={() => setShowDropDown(true)}
            onDismiss={() => setShowDropDown(false)}
            value={element}
            setValue={setElement}
            list={elementList}
            
          />
        </View>
    </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  vieww: {
    backgroundColor: 'red',
    marginTop: '0%',
  },
  elements: {
    backgroundColor: 'green',
    marginTop: 0
  },
  containerStyle: {

  },
  spacerStyle: {
    marginBottom: 15,
  },
  safeContainerStyle: {
    backgroundColor: 'blue',
  },
});
