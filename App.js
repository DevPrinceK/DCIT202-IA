// import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


// Custom imports
import HomeScreen from './source/view/screens/HomeScreen';
import DetailsScreen from './source/view/screens/DetailsScreen';
import LoginScreen from './source/view/screens/LoginScreen';
import Cart from './source/view/screens/CartScreen';
import CheckOutScreen from './source/view/screens/CheckOutScreen';
import {StatusBar} from 'react-native';
import COLORS from './source/variables/colors';

// Using arrow function to describe the main App component
const App = () => {
  // const Stack = createNativeStackNavigator();
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <Stack.Navigator screenOptions={{header: () => null}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="CheckOut" component={CheckOutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
