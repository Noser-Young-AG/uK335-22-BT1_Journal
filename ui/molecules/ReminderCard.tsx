import React from 'react'
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { Avatar, Card, Paragraph, Button, RadioButton } from 'react-native-paper'
import BellIcon from '../atoms/BellIcon';
import Recurrence, { getRecurrenceString } from '../../types/Recurrence';


type ReminderCardProps = {
    recurrence: Recurrence,
    weekday: string,
    hour: number,
    minute: number,
    recurringAmount?: number | string,
}

function LeftContent() {
    return (
        <BellIcon />
    )
}

function ReminderCard(props: ReminderCardProps) {
  return (
        <View style={styles.container}>
            <Card>
                <Card.Title title="Your Reminder" subtitle={getRecurrenceString(props.recurrence)} left={LeftContent} />
                <Card.Content>
                    <Paragraph>{getRecurrenceString(props.recurrence)} on {props.weekday}, {props.hour}:{props.minute}</Paragraph>
                    <Paragraph>Recurring {
                        typeof props.recurringAmount === "undefined" 
                            ? "never"
                            : typeof props.recurringAmount === "string" ? props.recurringAmount : props.recurringAmount + " times"}</Paragraph>
                </Card.Content>
                <Card.Actions>
                    <Button>Edit</Button>
                    <Button>Delete</Button>
                </Card.Actions>
            </Card>
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        paddingBottom: 30,
        width: '90%',
    },
  });

export default ReminderCard