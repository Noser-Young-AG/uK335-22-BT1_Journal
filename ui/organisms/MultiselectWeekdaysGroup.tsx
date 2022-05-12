import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import GroupTitle from "../atoms/GroupTitle";
import MultiselectElement from "../atoms/MultiselectElement";

type MultiselectWeekdaysGroupProps = {
  selected: string;
  selectedChanged: (value: string) => void;
};

const WEEKDAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

/**
 * Display weekday selection.
 * @param props Selected weekday, function if another one is selected.
 * @returns 
 */
function MultiselectWeekdaysGroup(props: MultiselectWeekdaysGroupProps) {
  const [selected, setSelected] = useState(props.selected);

  useEffect(() => {
    props.selectedChanged(selected);
  }, [selected]);

  useEffect(() => {
    setSelected(props.selected);
  }, [props.selected]);

  return (
    <View style={styles.container}>
      <GroupTitle title={"Weekdays"}></GroupTitle>
      {WEEKDAYS.map((x) => (
        <MultiselectElement
          key={x}
          text={x}
          checked={x === selected}
          onChange={() => setSelected(x)}
        ></MultiselectElement>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default MultiselectWeekdaysGroup;
