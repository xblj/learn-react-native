import React, { PureComponent } from 'react';
import { Text, Image, View, Button, StyleSheet, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux'
import store from './src/redux';

import { ProfileScreen } from './component/profile_screen';
import { MainScreen } from './src/main_screen';
import MyView from './component/View';
// 导航
import { MyNavigation } from './component/navigation/navigation';
import { AddButton } from './component/navigation/AddButton';
import { ModalScreen } from './component/navigation/ModalScreen';
import { MyWebView, myWebView } from './component/WebView';
import { TestFlatList } from './src/screens/FlatList';
import NestedScroll from './src/screens/NestedScroll';
import Todo from './src/screens/Todo';
import PageScroll from './src/screens/PageScroll';

const Navigator = StackNavigator(
  {
    Main: { screen: MainScreen },
    Profile: { screen: ProfileScreen },
    MyView: { screen: MyView },
    MyNavigation: { screen: MyNavigation },
    AddButton: { screen: AddButton },
    ModalScreen: { screen: ModalScreen },
    MyWebView: { screen: myWebView },
    FlatList: { screen: TestFlatList },
    NestedScroll: { screen: NestedScroll },
    PageScroll,
    Todo
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

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store} >
        <Navigator />
      </Provider>
    );
  }
}
