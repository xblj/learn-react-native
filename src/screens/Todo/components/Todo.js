import React, { PureComponent } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';

export default class Todo extends PureComponent {
  render() {
    const { onClick, completed, text } = this.props;
    return (
      <TouchableOpacity onPress={onClick}>
        <View>
          <Text style={{ textDecorationLine: completed ? 'line-through' : 'none' }}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}