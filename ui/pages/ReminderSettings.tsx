import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import NavigationPages from "../../types/NavigationPages";
import Recurrence, { getRecurrenceString } from "../../types/Recurrence";
import { Reminder } from "../../types/Reminder";
import { loadReminder, updateReminder } from "../../utils/Persistence";
import ButtonElement from "../atoms/ButtonElement";
import RecurrenceGroup from "../molecules/RecurrenceGroup";
import RepeatInputGroup from "../molecules/RepeatInputGroup";
import TimeGroup from "../molecules/TimeGroup";
import MultiselectWeekdaysGroup from "../organisms/MultiselectWeekdaysGroup";
import { initializeNotification, cancelAllNotifications } from "../../service/ReminderNotification";


/**
 * Page that consists of following components.
 * <br/>
 * <ul>
 *     <li>The {@link MultiselectWeekdaysGroup} molecule</li>
 *     <li>The {@link RecurrenceGroup} molecule</li>
 *     <li>The {@link ButtonElement} atom</li>
 *     <li>The {@link TimeGroup} molecule</li>
 * </ul>
 * all of these components build our ReminderSettings page
 * @param navigation used for navigating through pages with the help of an enum that consists of pages {@link NavigationPages}
 */
function ReminderSettings({ navigation }) {
  const [reminder, setReminder] = useState<Reminder>();
  const [weekday, setWeekday] = useState<string>("Friday");
  const [recurrence, setRecurrence] = useState<number>(Recurrence.WEEKLY);
  const [recurringAmount, setRecurringAmount] = useState<
    number | string | undefined
  >(recurrence !== Recurrence.NONE ? "forever" : undefined);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const localReminder = loadReminder();
    localReminder.then((r) => {
      setReminder(r);
      if (r != undefined) {
        setWeekday(r.weekday);
        setRecurrence(r.recurrence);
        setRecurringAmount(r.recurringAmount);
      }
    });
  }, []);

  useEffect(() => {
  }, [weekday, recurrence]);

  useEffect(() => {
    if (recurrence === Recurrence.NONE) {
      setRecurringAmount(undefined);
    }
  }, [recurrence]);

  const saveReminderAndClose = () => {
    updateReminder(
      new Reminder(
        recurrence,
        weekday,
        time.getHours(),
        time.getMinutes(),
        recurringAmount
      )
    );

    cancelAllNotifications();
    initializeNotification();
    navigation.navigate(NavigationPages.HOME);
  };

  const onTimeChange = (date: Date) => {
    if (date != null) {
      setTime(date);
    }
  };

  const getRecurringAmountElement = () => {
    if (recurrence !== Recurrence.NONE) {
      return (
        <RepeatInputGroup
          recurringAmount={recurringAmount}
          recurringAmountChanged={(x) => setRecurringAmount(x)}
        />
      );
    }
  };

  return (
    <View style={styles.container}>
      <MultiselectWeekdaysGroup
        selected={reminder != undefined ? reminder.weekday : weekday}
        selectedChanged={(x) => setWeekday(x)}
      />
      <RecurrenceGroup
        selected={recurrence}
        selectedChanged={(x) => setRecurrence(x)}
      />
      {getRecurringAmountElement()}
      <ButtonElement
        name="Save"
        color="#01A299"
        onPress={() => saveReminderAndClose()}
      />
      <TimeGroup label="Choose Time" onChange={onTimeChange} value={time} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 10,
    backgroundColor: "#fff",
    padding: "2%",
  },
});

export default ReminderSettings;
