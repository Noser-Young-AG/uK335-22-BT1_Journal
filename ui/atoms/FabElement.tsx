import React from "react";
import { StyleSheet } from "react-native";
import { FAB } from "react-native-paper";

type FabElementProps = {
  name: string;
  hidden: boolean;
  onPress: () => void;
};

export default function FabElement(props: FabElementProps) {
  const styles = StyleSheet.create({
    fab: {
      position: "absolute",
      margin: 16,
      right: 10,
      bottom: 10,
      display: props.hidden ? "none" : "flex",
    },
  });

  return (
    <FAB
      style={styles.fab}
      small
      icon="plus"
      label={props.name}
      color="#FFF"
      onPress={props.onPress}
    />
  );
}
