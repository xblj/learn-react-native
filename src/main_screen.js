import React, { Component } from 'react';
import { Text, Image, CheckBox, View, Button, StyleSheet, TextInput, TouchableHighlight } from 'react-native';
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
          onPress={() =>navigate('MyView', { name: 'myView', id: 1 })}
        />
        <Button
          title="MyNavigation"
          onPress={() =>navigate('MyNavigation', { title: 'MyNavigation' })}
        />
        <Button
          title="导航交互"
          onPress={() =>navigate('AddButton', { title: 'AddButton' })}
        />
        <Button
          title="模态框"
          onPress={() =>navigate('ModalScreen', { title: 'ModalScreen' })}
        />
        <Button
          title="WebView"
          onPress={() =>navigate('MyWebView', { title: 'WebView' })}
        />
        <Button
          title="FlatList"
          onPress={() =>navigate('FlatList', { title: 'FlatList' })}
        />
        <Button
          title="NestedScroll"
          onPress={() =>navigate('NestedScroll')}
        />
        <Button
          title="Todo"
          onPress={() =>navigate('Todo')}
        />
      </View>
    );
  }
}