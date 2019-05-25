import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import React from "react";
import { View, Text } from 'react-native';
import Home from './screens/Home';
import Settings from './screens/Settings';


const Screens = createStackNavigator({
  Home: Home,
  Settings: Settings,
}, {
  initialRouteName: "Home"
})

const App = createAppContainer(Screens);

export default App;


