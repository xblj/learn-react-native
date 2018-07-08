import React, { Component } from 'react';
import { Text, Image, View, Button, StyleSheet, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { ProfileScreen } from './component/profile_screen';
import { MainScreen } from './src/main_screen';
import { MyView } from './component/View';
// 导航
import { MyNavigation } from './component/navigation/navigation';
import { AddButton } from './component/navigation/AddButton';
import { ModalScreen } from './component/navigation/ModalScreen';
import { MyWebView, myWebView } from './component/WebView';
import { TestFlatList } from './src/screens/FlatList';

export default StackNavigator(
  {
    Main: { screen: MainScreen },
    Profile: { screen: ProfileScreen },
    MyView: { screen: MyView },
    MyNavigation: { screen: MyNavigation },
    AddButton: { screen: AddButton },
    ModalScreen: { screen: ModalScreen },
    MyWebView: { screen: myWebView },
    FlatList: { screen: TestFlatList },
  },
  {
    initialRouteName: 'Main',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);
