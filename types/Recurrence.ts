enum Recurrence {
    WEEKLY = 1,
    MONTHLY = 2,
    NONE = 3,
}

export function getRecurrenceString(recurrence: Recurrence): string {
    switch (recurrence) {
        case Recurrence.WEEKLY: return "Weekly";
        case Recurrence.MONTHLY: return "Monthly";
        case Recurrence.NONE: return "None";
        default: return "Error";
    }
}

export default Recurrence;