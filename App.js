import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/navigations/authstacknavigator/HomeScreen';
import CarouselRender from './src/screens/auth/CarouselRender';

const Stack = createStackNavigator();

const App = () => {
  console.log("Hi App")
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CarouselRender" component={CarouselRender} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;







