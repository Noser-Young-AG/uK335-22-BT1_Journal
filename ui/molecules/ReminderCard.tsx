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

function ReminderCard(props: ReminderCardProps) {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title
          title="Your Reminder"
          subtitle={getRecurrenceString(props.reminder.recurrence)}
          left={LeftContent}
        />
        <Card.Content>
          <Paragraph>
            {getRecurrenceString(props.reminder.recurrence)} on{" "}
            {props.reminder.weekday}, {props.reminder.hour}:
            {props.reminder.minute}
          </Paragraph>
          <Paragraph>
            Recurring{" "}
            {typeof props.reminder.recurringAmount === "undefined"
              ? "never"
              : typeof props.reminder.recurringAmount === "string"
              ? props.reminder.recurringAmount
              : props.reminder.recurringAmount + " times"}
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
