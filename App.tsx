import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import Home from './ui/pages/Home';
import ReminderSettings from './ui/pages/ReminderSettings';
import NavigationPages from './types/NavigationPages';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={NavigationPages.HOME}>
        <Stack.Screen name={NavigationPages.HOME} component={Home} options={{headerStyle: {
          backgroundColor: '#6200EE'
        }, headerTintColor: '#fff', headerTitleAlign: 'center'}} />
        <Stack.Screen name={NavigationPages.REMINDER_SETTINGS} component={ReminderSettings} options={{headerStyle: {
          backgroundColor: '#6200EE'
        }, headerTintColor: '#fff', headerTitleAlign: 'center'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
