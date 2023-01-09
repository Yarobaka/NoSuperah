import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RegistrationScreen } from './src/screens/registration/RegistrationScreen';
import { HomeScreen } from './src/screens/home/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Registration'
          options={{ headerShown: false }}
          component={RegistrationScreen}
        />
        <Stack.Screen
          name='Home'
          options={{
            headerTitle: 'Home',
            headerBackVisible: false,
          }}
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;