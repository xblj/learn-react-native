/*
 * @Author: xiebing 
 * @Date: 2018-03-26 14:32:28 
 * @Last Modified by: xiebing
 * @Last Modified time: 2018-03-26 15:15:00
 */

import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import {AddButton} from './AddButton';
import { StackNavigator } from 'react-navigation';
export class ModalScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button onPress={() => this.props.navigation.goBack()} title="Dismiss" />
      </View>
    );
  }
}

const RootStack = StackNavigator(
  {
    AddButton: {
      screen: AddButton
    },
    MyModal: {
      screen: ModalScreen
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);
