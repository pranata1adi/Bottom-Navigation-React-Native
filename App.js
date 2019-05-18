import React, {Component} from 'react';
import { Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer, } from 'react-navigation';

import Home from './screens/Home';
import Settings from './screens/Settings';
import Details from './screens/Details';
import Profile from './screens/Profile';

const HomeTab = createStackNavigator(
  {
    Home: Home ,
    Details: Details ,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#0091EA',
      },
      headerTintColor: '#fff',
      title: 'Home Tab',
    },
  }
);

const SettingsTab = createStackNavigator(
  {
    Settings: Settings ,
    Details: Details ,
    Profile: Profile ,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#0091EA',
      },
      headerTintColor: '#FFFFFF',
      title: 'Settings Tab',
     
    },
  }
);

const MainApp = createBottomTabNavigator(
  {
    Home: HomeTab ,
    Settings: SettingsTab ,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Home') {
          return (
            <Image
              source={ require('./assets/home.png') }
              style={{ width: 20, height: 20, }} />
          );
        } else {
          return (
            <Image
              source={ require('./assets/settings.png') }
              style={{ width: 20, height: 20 }} />
          );
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: '#FF6F00',
      inactiveTintColor: '#263238',
    },
  }
);


export default createAppContainer(MainApp);