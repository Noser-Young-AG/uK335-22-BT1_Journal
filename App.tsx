import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ReminderCard from './ui/molecules/ReminderCard';
import Recurrence from './types/Recurrence';
import MultiselectWeekdaysGroup from './ui/organisms/MultiselectWeekdaysGroup';
import Navbar from './ui/organisms/Navbar';
import Dropdown from './ui/atoms/Dropdown';


export default function App() {
  return (
    <View style={styles.container}>
      <Navbar title='Home'></Navbar>
      <Dropdown></Dropdown>
      {/* <ReminderCard
        recurrence={Recurrence.WEEKLY}
        weekday="Monday"
        hour={16}
        minute={30}
        recurringAmount={"forever"}
      /> */}
      <MultiselectWeekdaysGroup title='Weekday' elements={['1', '2']}></MultiselectWeekdaysGroup>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
