import React from "react";
import { StyleSheet, View } from "react-native";
import { Card, Paragraph, Button } from "react-native-paper";
import BellIcon from "../atoms/BellIcon";
import { getRecurrenceString } from "../../types/Recurrence";
import { Reminder } from "../../types/Reminder";

type ReminderCardProps = {
  reminder: Reminder;
  onEdit: () => void;
  onDelete: () => void;
};

function LeftContent() {
  return <BellIcon />;
}

/**
 * Checked for its type and returns either "never", "forever" or the amount of times
 * @param recurringAmount Variable to check. 
 */
function getTypeOfRecurringAmount(recurringAmount: string | number | undefined) {
  if (typeof recurringAmount === "undefined") {
    return "never"
  } else if (typeof recurringAmount === "string") {
    return recurringAmount
  } else {
    return recurringAmount + " times"
  }
}

function ReminderCard(props: ReminderCardProps) {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title
          title="Journal"
          subtitle={getRecurrenceString(props.reminder.recurrence)}
          left={LeftContent}
        />
        <Card.Content>
          <Paragraph>
            {getRecurrenceString(props.reminder.recurrence)} on{" "}
            {props.reminder.weekday},
            {" " + (props.reminder.hour < 10 ? "0" : "") + props.reminder.hour}:
            {(props.reminder.minute < 10 ? "0" : "") + props.reminder.minute}
          </Paragraph>
          <Paragraph>
            Recurring{" "}
            {}
            {getTypeOfRecurringAmount(props.reminder.recurringAmount)}
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onPress={props.onEdit}>Edit</Button>
          <Button onPress={props.onDelete}>Delete</Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingBottom: 30,
    width: "90%",
  },
});

export default ReminderCard;
