import AsyncStorage from "@react-native-async-storage/async-storage";
import { Reminder } from "../types/Reminder";

const REMINDER_STORAGE_KEY = "@reminder";

export const loadReminder = async () => {
  try {
    let storedReminder = await AsyncStorage.getItem(REMINDER_STORAGE_KEY);
    if (storedReminder !== null) {
      return JSON.parse(storedReminder);
    }
  } catch (e) {
    console.error("Failed to load reminder.", e);
  }
};

export const updateReminder = async (localReminder: Reminder) => {
  try {
    let reminderToStore = JSON.stringify(localReminder);
    await AsyncStorage.setItem(REMINDER_STORAGE_KEY, reminderToStore);
  } catch (e) {
    console.error("Failed to store reminder.", e);
  }
};

export const deleteReminder = async () => {
  try {
    await AsyncStorage.removeItem(REMINDER_STORAGE_KEY);
  } catch (e) {
    console.error("Failed to remove reminder.", e);
  }
};

// export default loadReminder;