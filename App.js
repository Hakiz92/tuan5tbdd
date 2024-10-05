import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import screen_01 from './screens/screen_01'
import screen_02 from './screens/screen_02'
import screen_03 from './screens/screen_03'
import screen_04 from './screens/screen_04'

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='screen_01'
      screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="screen_01" component={screen_01}></Stack.Screen>
        <Stack.Screen name="screen_02" component={screen_02}></Stack.Screen>
        <Stack.Screen name="screen_03" component={screen_03}></Stack.Screen>
        <Stack.Screen name="screen_04" component={screen_04}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
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
