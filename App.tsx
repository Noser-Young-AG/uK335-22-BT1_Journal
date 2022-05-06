import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ButtonElement from './ui/atoms/ButtonElement';
import FabElement from './ui/atoms/FabElement';
import TitleElement from './ui/atoms/TitleElement';
import ActionButtons from './ui/organisms/ActionButtons';
import MultiselectWeekdaysGroup from './ui/organisms/MultiselectWeekdaysGroup';

export default function App() {
  return (
    <View style={styles.container}>
      <TitleElement name={'NO REMINDERS SET'}></TitleElement>
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
