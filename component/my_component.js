import React, { Component } from 'react';
import { Picker } from 'react-native';
export class MyComponent extends Component {
  render() {
    return (
      <Picker>
        <Picker.Item label={this.props.mylabe} value="java" />
      </Picker>
    );
  }
}
