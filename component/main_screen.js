import React, { Component } from 'react';
import { Text, Image, CheckBox, View, Button, StyleSheet, TextInput, TouchableNativeFeedback } from 'react-native';
export class MainScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button
          title="Go to Jane's profile"
          onPress={() =>navigate('Profile', { name: 'Jane' })}
        />
        <Button
          title="MyView"
          onPress={() =>navigate('MyView', { name: 'myView' })}
        />
        <Button
          title="MyNavigation"
          onPress={() =>navigate('MyNavigation', { title: 'MyNavigation' })}
        />
        <TouchableNativeFeedback>
          <View>
            <Text>萨撒热完全</Text>
            </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}