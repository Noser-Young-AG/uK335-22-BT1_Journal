import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button, AsyncStorage } from 'react-native';
import Home from './ui/pages/Home';
import ReminderSettings from './ui/pages/ReminderSettings';
import NavigationPages from './types/NavigationPages';


/**
 * @deprecated Method should not be used.
 */
function HomeScreen({ navigation }) {
  return (
    <Home navigation={navigation} />
  )
}

/**
 * @deprecated Method should not be used.
 */
function ReminderSettingsScreen({ navigation }) {
  return (
    <ReminderSettings navigation={navigation} />
  )
}

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
