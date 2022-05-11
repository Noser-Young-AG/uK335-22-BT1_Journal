import React from "react";
import { View, StyleSheet } from "react-native";
import GroupTitle from "../atoms/GroupTitle";
import MultiselectWeekdays from "../molecules/MultiselectWeekdays";

type MultiselectWeekdaysGroupProps = {
  title: string;
  elements: string[];
};

const WEEKDAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

function MultiselectWeekdaysGroup() {
  return (
    <View style={styles.container}>
      <GroupTitle title={"Weekdays"}></GroupTitle>
      <MultiselectWeekdays elements={WEEKDAYS} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default MultiselectWeekdaysGroup;
