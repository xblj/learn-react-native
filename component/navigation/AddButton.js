/*
 * @Author: xiebing 
 * @Date: 2018-03-26 14:32:28 
 * @Last Modified by: xiebing
 * @Last Modified time: 2018-03-26 14:55:14
 * 
 * 在导航上添加交互
 */

import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';

export class AddButton extends Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerTitle: '导航交互',
      headerRight: <Button onPress={params.increaseCount} title="信息" />
    };
  };
  componentWillMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }
  state = {
    count: 0
  };
  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <View style={{ flexDirection: 'row', height: 100, padding: 20 }}>
        <Button title="Go back" onPress={() => this.props.navigation.goBack()} />
        <Text>{this.state.count}</Text>
      </View>
    );
  }
}
