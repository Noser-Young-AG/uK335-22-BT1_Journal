import RNDateTimePicker from "@react-native-community/datetimepicker";
import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";
import { getGridCount } from "react-native-paper-dates/lib/typescript/Date/dateUtils";
import GroupTitle from "../atoms/GroupTitle";

type timeGroupProps = {
  value: Date;
  label: string;
  onChange: (event: any, Date?: Date) => void;
};

export default function TimeGroup(props: timeGroupProps) {
  const [visible, setVisibility] = useState(false);
  const [time, setTime] = useState(props.value);

  useEffect(() => {
    setTime(props.value);
  }, [props.value]);

  const onChange = (event: Event, date: Date): void => {
    setVisibility(false);
    props.onChange(date);
    setTime(date);
  };

  const onClick = () => {
    console.log(true);
    setVisibility(true);
  };

  return (
<>
      <GroupTitle title="Time" />
      <View style={styles.container}>
      <Button mode="outlined" color="black" onPress={onClick} style={styles.button} icon={"clock-outline"}>
        {time?.toLocaleTimeString().substring(0,5)}
      </Button>
      {visible ? (
        <RNDateTimePicker
          value={props.value}
          display="default"
          mode="time"
          is24Hour={true}
          onChange={onChange}
        />
      ) : null}
    </View>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
    },
    button: {
        margin: '2%',
        width: '30%',
    },
    text: {
        textAlign: 'center',
        margin: '2%',
        width: '20%',
        fontSize: 16,
    }
  });
