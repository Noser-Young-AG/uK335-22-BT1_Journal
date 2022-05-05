import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ReminderCard from './ui/molecules/ReminderCard';
import Recurrence from './types/Recurrence';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <ReminderCard
        recurrence={Recurrence.WEEKLY}
        weekday="Monday"
        hour={16}
        minute={30}
        recurringAmount={"forever"}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
