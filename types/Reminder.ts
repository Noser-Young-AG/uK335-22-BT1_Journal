import Recurrence from "./Recurrence";

export type ReminderType = {
    recurrence: Recurrence,
    weekday: string,
    hour: number,
    minute: number,
    recurringAmount?: number | string,
    // onEdit: () => void;
    // onDelete: () => void;
}

export class Reminder {
    recurrence: Recurrence;
    weekday: string;
    hour: number;
    minute: number;
    recurringAmount?: number | string;

    constructor(
        recurrence: Recurrence,
        weekday: string,
        hour: number,
        minute: number,
        recurringAmount?: number | string) {
            this.recurrence = recurrence;
            this.weekday = weekday;
            this.hour = hour;
            this.minute = minute;
            this.recurringAmount = recurringAmount;
        }
}