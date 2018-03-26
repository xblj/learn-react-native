import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';

export class MyNavigation extends Component {
  // 在当前页面设置顶部导航
  // static navigationOptions = {
  //   title: 'MyView',
  //   headerStyle: {
  //     backgroundColor: 'green',
  //     height: 50
  //   },
  //   headerTintColor: '#fff',
  //   headerTitleStyle: {
  //     fontWeight: 'bold'
  //   }
  // }; 

  static navigationOptions = ({navigation, navigationOptions })=> {
    const { params } = navigation.state;
    return {
      title: params.title || 'localParams'
    }
  }
  render() {
    const {params} = this.props.navigation.state;

    return (
      <View style={{ flexDirection: 'row', height: 100, padding: 20 }}>
        <Button title="Go back"  onPress={() => this.props.navigation.goBack()}/>
      </View>
    );
  }
}
