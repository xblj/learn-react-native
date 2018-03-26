import React, { Component } from 'react';
import { Text, Image, View, Button, StyleSheet, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { ProfileScreen } from './component/profile_screen';
import { MainScreen } from './component/main_screen';
import { MyView } from './component/View';
import { MyNavigation } from './component/navigation';

export default StackNavigator(
  {
    Main: { screen: MainScreen },
    Profile: { screen: ProfileScreen },
    MyView: {
      screen: MyView
    },
    MyNavigation: {
      screen: MyNavigation
    }
  },
  {
    initialRouteName: 'Main',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
);
