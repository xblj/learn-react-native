import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';

export class MyView extends Component {
  render() {
    const { params } = this.props.navigation.state;

    return (
      <View style={{ flexDirection: 'row', height: 100, padding: 20 }}>
        <View style={{ backgroundColor: 'green', flex: 0.5 }}>
          <Text>{params.name}</Text>
        </View>
        <View style={{ backgroundColor: 'red', flex: 0.5 }} />
        <Button title="跳转到MyView" onPress={() => this.props.navigation.navigate('MyView', { name: 'myView' })} />
        <Button title="Go back" onPress={() => this.props.navigation.goBack()} />
      </View>
    );
  }
}
