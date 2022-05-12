import Recurrence from "./Recurrence";

/**
 * Reminder class for data transfer and persistence.
 */
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