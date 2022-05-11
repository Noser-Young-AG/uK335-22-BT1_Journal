import React from 'react';
import { View, Button } from 'react-native';
import notifee, { TimestampTrigger, TriggerType } from '@notifee/react-native';
import { Reminder } from '../types/Reminder';

export default function NotificationForReminder() {

  async function cancel() {
    await notifee.cancelAllNotifications();
  }
  
  async function onCreateTriggerNotification() {
    const date = new Date();
    //get time from db
   /* date.setHours();
    date.setMinutes(); */

    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    const trigger: TimestampTrigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: date.getTime() + 2000,
    };

    await notifee.createTriggerNotification(
      {
        title: 'Meeting with Jane',
        body: 'Today at 11:20am',
        android: {
          channelId,
        },
      },
      trigger,
    );
  }

  return (
    <View>
      <Button title="Display Notification 2" onPress={() => onCreateTriggerNotification()} />
    </View>
  );
}