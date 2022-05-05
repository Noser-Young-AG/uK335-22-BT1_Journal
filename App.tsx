import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MultiselectWeekdays from './ui/molecules/MultiselectWeekdays';

export default function App() {
  return (
    <View style={styles.container}>
      <MultiselectWeekdays elements={['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']}></MultiselectWeekdays>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
});
