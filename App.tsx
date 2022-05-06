import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MultiselectWeekdaysGroup from './ui/organisms/MultiselectWeekdaysGroup';

export default function App() {
  return (
    <View style={styles.container}>
      <MultiselectWeekdaysGroup title='WEEKDAY' elements={['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']}></MultiselectWeekdaysGroup>
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
