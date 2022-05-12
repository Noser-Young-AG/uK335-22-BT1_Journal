import notifee, { RepeatFrequency, TimestampTrigger, TriggerType } from "@notifee/react-native";
import Recurrence from "../types/Recurrence";
import { Reminder } from "../types/Reminder";
import { loadReminder } from "../utils/Persistence";

const NOTIFICATION_TITLE = "Journal Reminder";
const NOTIFICATION_BODY = "Write your journal.";
const NOTIFICATION_CHANNEL_NAME = "Default Channel";
const NOTIFICATION_CHANNEL_ID = "default";

export async function cancelAllNotifications() {
    await notifee.cancelAllNotifications()
        .catch(e => console.log(e));
}

export async function sendNotification() {
    const channelId = await notifee.createChannel({
        id: NOTIFICATION_CHANNEL_ID,
        name: NOTIFICATION_CHANNEL_NAME,
    });

    await notifee.displayNotification({
        title: NOTIFICATION_TITLE,
        body: NOTIFICATION_BODY,
        android: {
            channelId,
        },
    });
}

export async function initializeNotification() {
    await loadReminder()
        .then(r => {
            scheduleNotification(r);
        })
        .catch(err => {
            console.error(err);
        });
}

async function scheduleNotification(reminder: Reminder) {
    if (reminder === undefined) return;
    if (!isInFuture(reminder)) return;

    if (reminder.recurringAmount !== undefined && reminder.recurringAmount === "forever" && reminder.recurrence === Recurrence.WEEKLY) {
        scheduleWeeklyNotification(reminder);
    } else if (reminder.recurringAmount !== undefined && reminder.recurringAmount === "forever" && reminder.recurrence === Recurrence.WEEKLY) {
        scheduleMonthlyNotification(reminder);
    } else if (reminder.recurringAmount === undefined || reminder.recurrence === Recurrence.NONE) {
        scheduleSingleNotification(reminder);
    } else if (reminder.recurringAmount !== undefined && reminder.recurringAmount !== "forever" && reminder.recurrence === Recurrence.MONTHLY) {
        scheduleFixedMonthlyNotification(reminder);
    } else if (reminder.recurringAmount !== undefined && reminder.recurringAmount !== "forever" && reminder.recurrence === Recurrence.WEEKLY) {
        scheduleFixedWeeklyNotification(reminder);
    }
}

async function scheduleWeeklyNotification(reminder: Reminder) {
    const trigger: TimestampTrigger = {
        type: TriggerType.TIMESTAMP,
        timestamp: generateDateObject(reminder).getTime(),
        repeatFrequency: RepeatFrequency.WEEKLY,
    };
    
    await notifee.createTriggerNotification(
        {
            id: '1',
            title: NOTIFICATION_TITLE,
            body: NOTIFICATION_BODY,
            android: {
                channelId: NOTIFICATION_CHANNEL_ID,
            },
        },
        trigger,
    );
}

async function scheduleMonthlyNotification(reminder: Reminder) {
    reminder.recurringAmount = 999;
    scheduleFixedMonthlyNotification(reminder);
}

async function scheduleFixedMonthlyNotification(reminder: Reminder) {
    for (let i = 0; i < (reminder.recurringAmount! as number); i++) {
        const date = generateLastDayOfMonth(reminder);
        date.setMonth(date.getMonth() + i);

        const trigger: TimestampTrigger = {
            type: TriggerType.TIMESTAMP,
            timestamp: date.getTime(),
            repeatFrequency: RepeatFrequency.NONE,
        };
        
        await notifee.createTriggerNotification(
            {
                id: (i + 1).toString(),
                title: NOTIFICATION_TITLE,
                body: NOTIFICATION_BODY,
                android: {
                    channelId: NOTIFICATION_CHANNEL_ID,
                },
            },
            trigger,
        );
    }
}

async function scheduleFixedWeeklyNotification(reminder: Reminder) {
    for (let i = 0; i < (reminder.recurringAmount! as number); i++) {
        const date = generateDateObject(reminder);
        date.setMonth(date.getDate() + 7);

        const trigger: TimestampTrigger = {
            type: TriggerType.TIMESTAMP,
            timestamp: date.getTime(),
            repeatFrequency: RepeatFrequency.NONE,
        };
        
        await notifee.createTriggerNotification(
            {
                id: (i + 1).toString(),
                title: NOTIFICATION_TITLE,
                body: NOTIFICATION_BODY,
                android: {
                    channelId: NOTIFICATION_CHANNEL_ID,
                },
            },
            trigger,
        );
    }
}

async function scheduleSingleNotification(reminder: Reminder) {
    const trigger: TimestampTrigger = {
        type: TriggerType.TIMESTAMP,
        timestamp: generateDateObject(reminder).getTime(),
        repeatFrequency: RepeatFrequency.NONE,
    };
    
    await notifee.createTriggerNotification(
        {
            id: '1',
            title: NOTIFICATION_TITLE,
            body: NOTIFICATION_BODY,
            android: {
                channelId: NOTIFICATION_CHANNEL_ID,
            },
        },
        trigger,
    );
}

function generateLastDayOfMonth(reminder: Reminder): Date {
    const today = new Date();
    const date = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate(), reminder.hour, reminder.minute, 0, 0);

    date.setDate(date.getDate() - (date.getDay() + (7 - getWeekdayNumber(reminder.weekday))) % 7);

    return date;
}

function generateDateObject(reminder: Reminder): Date {
    const date = new Date();
    date.setHours(reminder.hour, reminder.minute, 0, 0);

    if (date.getDay() != getWeekdayNumber(reminder.weekday)) {
        date.setDate(date.getDate() + (getWeekdayNumber(reminder.weekday) - 1 - date.getDay() + 7) % 7 + 1);
    }
    return date;
}

function getWeekdayNumber(weekday: string): number {
    switch (weekday) {
        case "Monday": return 1;
        case "Tuesday": return 2;
        case "Wednesday": return 3;
        case "Thursday": return 4;
        case "Friday": return 5;
        default: return -1;
    }
}

function isInFuture(reminder: Reminder): boolean {
    const reminderDate = new Date();
    reminderDate.setHours(reminder.hour, reminder.minute, 0, 0);

    return reminderDate.getTime() > new Date().getTime();
}