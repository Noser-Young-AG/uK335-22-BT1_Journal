import React from "react";
import { Subheading } from "react-native-paper";
import { StyleSheet } from "react-native";

type GroupTitleProps = {
  title?: string;
};

export default function GroupTitle(props: GroupTitleProps) {
  return <Subheading style={styles.title}>{props.title}</Subheading>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: 1.5,
    margin: "2%",
    marginTop: "5%",
    width: "100%",
  },
});
