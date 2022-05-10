import AsyncStorage from "@react-native-async-storage/async-storage";
import { Reminder } from "../types/Reminder";

const REMINDER_STORAGE_KEY = '@reminder';

// don't use
const loadReminder = async () => {
    try {
        let storedReminder = await AsyncStorage.getItem(REMINDER_STORAGE_KEY);
        if (storedReminder !== null) {
            return JSON.parse(storedReminder);
        }
    } catch (e) {
        console.error("Failed to load colors.", e);
        return null;
    }
}

// don't use
const updateReminder = async (reminder: Reminder) => {
    try { 
        let reminderToStore = JSON.stringify(reminder);
        await AsyncStorage.setItem(REMINDER_STORAGE_KEY, reminderToStore);
    } catch (e) {
        console.error("Failed to store reminder.", e);
    }
}